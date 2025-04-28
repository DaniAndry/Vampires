using System.Collections;
using System.Collections.Generic;
using Money;
using UnityEngine;

namespace Vampire
{
    public class Vampires : MonoBehaviour
    {
        [SerializeField] private List<Vampire> _vampires;
        [SerializeField] private float _moveSpeed = 2f;
        [SerializeField] private Vampire _vampirePrefab;
        [SerializeField] private Transform _vampireExitPoint;
        [SerializeField] private MoneyConroller _money;

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
                firstVampire.InitPoint(_vampireExitPoint, _money);
                _vampires.RemoveAt(0);
                firstVampire.ToFirst(bed);

                MoveRemainingVampires();
                
                SpawnVampireAtEnd();
            }
        }

        private void SpawnVampireAtEnd()
        {
            Vector3 spawnPosition = (_waitingPositions.Count > 0) 
                ? GetLastWaitingPosition() 
                : transform.position;

            Vampire newVampire = Instantiate(_vampirePrefab, spawnPosition, Quaternion.identity, transform);
            AddVampire(newVampire);
        }

        private Vector3 GetLastWaitingPosition()
        {
            Vector3[] positions = _waitingPositions.ToArray();
            return positions[positions.Length - 1];
        }

        private void AddVampire(Vampire vampire)
        {
            _vampires.Add(vampire);
            vampire.InitPoint(_vampireExitPoint, _money);
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
                newPositions.Enqueue(targetPosition);
                lastPosition = targetPosition;
            }

            _waitingPositions = newPositions;
        }

        private IEnumerator SmoothMove(Transform transformToMove, Vector3 targetPosition)
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
