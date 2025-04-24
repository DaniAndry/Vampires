using UnityEngine;

namespace Doctor.DoctorTransition
{
    public class DoctorHealRunTransition : Transition
    {
        private void Start()
        {
            Doctor.CompleteHealing();
            NeedTransit = true;
        }


        public override void Enable()
        {
            throw new System.NotImplementedException();
        }
    }
}