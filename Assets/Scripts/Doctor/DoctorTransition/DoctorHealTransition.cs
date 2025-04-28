using UnityEngine;

namespace Doctor.DoctorTransition
{
    public class DoctorHealTransition : Transition
    {
        [SerializeField] private float _transitionRange = 0.2f;
        [SerializeField] private float _rangeSpread = 0.2f;

        private void Update()
        {
            if (Vector2.Distance(transform.position, Target.transform.position) < _transitionRange)
            {
                Debug.Log("Doctor Transition   ");
                NeedTransit = true;
            }
        }

        public override void Enable()
        {
            throw new System.NotImplementedException();
        }
    }
}