using UnityEngine;

namespace Doctor.DoctorState
{
    public class DoctorMoveState : State
    {
        private const string StateName = "Move";
        private float _speed = 2f;

        private void Start()
        {
           // Animator.Play(StateName);
        }

        private void Update()
        {
            if (Target!= null && Target.NeedToHeal)
            {
                transform.position = Vector2.MoveTowards(transform.position,
                    Target.transform.position, _speed * Time.deltaTime);
            }
        }
    }
}