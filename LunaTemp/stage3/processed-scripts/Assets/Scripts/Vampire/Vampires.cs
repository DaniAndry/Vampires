using System.Collections.Generic;
using UnityEngine;

namespace Vampire
{
    public class Vampires : MonoBehaviour
    {
        [SerializeField] private List<Vampire> _vampires;
        [SerializeField] private float _moveSpeed = 2f;

        private Queue<Vector3> _waitingPositions = new Queue<Vector3>();

        private void Start()
        {
            foreach (var vampire in _vampires)
            {
                _waitingPositions.Enqueue(vampire.transform.position);
            }
        }

        public void AssignBedToFirstAvailable(Bed bed)
        {
            if (_vampires.Count > 0)
            {
                Vampire firstVampire = _vampires[0];
                firstVampire.ToFirst(bed);
                _vampires.RemoveAt(0);
                
                MoveRemainingVampires();
            }
        }

        public void AddVampire(Vampire vampire)
        {
            _vampires.Add(vampire);
            _waitingPositions.Enqueue(vampire.transform.position);
        }

        private void MoveRemainingVampires()
        {
            Queue<Vector3> newPositions = new Queue<Vector3>();
            Vector3 lastPosition = Vector3.zero;

            for (int i = 0; i < _vampires.Count; i++)
            {
                Vampire currentVampire = _vampires[i];
                Vector3 targetPosition;

                if (_waitingPositions.Count > 0)
                {
                    targetPosition = _waitingPositions.Dequeue();
                }
                else
                {
                    targetPosition = lastPosition;
                }
                
                StartCoroutine(SmoothMove(currentVampire.transform, targetPosition));
                newPositions.Enqueue(currentVampire.transform.position); 
                lastPosition = targetPosition;
            }

            _waitingPositions = newPositions;
        }

        private System.Collections.IEnumerator SmoothMove(Transform transformToMove, [Bridge.Ref] Vector3 targetPosition)
        {
            float sqrRemainingDistance = (transformToMove.position - targetPosition).sqrMagnitude;

            while (sqrRemainingDistance > 0.01f)
            {
                Vector3 newPosition = Vector3.MoveTowards(transformToMove.position, targetPosition, _moveSpeed * Time.deltaTime);
                transformToMove.position = newPosition;
                sqrRemainingDistance = (transformToMove.position - targetPosition).sqrMagnitude;
                yield return null;
            }

            transformToMove.position = targetPosition; 
        }

        public int GetVampireCount()
        {
            return _vampires.Count;
        }
    }
}