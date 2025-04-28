using UnityEngine;

namespace Doctor.DoctorState
{
    public class DoctorMoveState : State
    {
        private float _speed = 2f;
        private float _reachDistance = 0.1f;

        private Transform[] _route;
        private int _currentWaypointIndex;
        private CharacterType _characterType = CharacterType.Doctor;
        private bool _firstEnter = true;

        public override void Enter(Animator animator, Bed bed)
        {
            base.Enter(animator, bed);

            var bedRoute = bed.GetComponent<BedRoute>();
            Transform[] route = null;

            if (_characterType == CharacterType.Doctor)
                route = bedRoute.DoctorWaypoints;
            else if (_characterType == CharacterType.Vampire)
                route = bedRoute.VampireWaypoints;

            _route = route;


            if (_firstEnter && _route != null && _route.Length > 0)
            {
                _currentWaypointIndex = FindClosestWaypointIndex(_route, transform.position);
                _firstEnter = false;
            }
            else if (_route == null || _route.Length == 0)
            {
                enabled = false;
                return;
            }

            // Animator.Play("WalkSimple");
        }

        private int FindClosestWaypointIndex(Transform[] waypoints, [Bridge.Ref] Vector2 currentPosition)
        {
            float minDistance = float.MaxValue;
            int closestIndex = 0;
            for (int i = 0; i < waypoints.Length; i++)
            {
                float dist = Vector2.Distance(currentPosition, waypoints[i].position);
                if (dist < minDistance)
                {
                    minDistance = dist;
                    closestIndex = i;
                }
            }
            return closestIndex;
        }

        private void Update()
        {
            if (_route != null)
            {
                Vector3 targetPosition;

                if (_currentWaypointIndex < _route.Length)
                {
                    targetPosition = _route[_currentWaypointIndex].position;
                }
                else if (Target != null)
                {
                    targetPosition = Target.transform.position;
                }
                else
                {
                    enabled = false;
                    return;
                }

                transform.position = Vector2.MoveTowards(transform.position, targetPosition, _speed * Time.deltaTime);

                if (Vector2.Distance(transform.position, targetPosition) < _reachDistance)
                {
                    _currentWaypointIndex++;
                    if (_currentWaypointIndex >= _route.Length && Target == null)
                    {
                        _route = null;
                        enabled = false;
                        _firstEnter = true;
                    }
                }
            }
        }

        public override void Exit()
        {
            base.Exit();
            // Можно сбросить флаг здесь, если логика требует пересчета ближайшей точки при следующем входе
            // _firstEnter = true;
        }
    }
}