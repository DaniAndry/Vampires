using UnityEngine;

namespace Doctor.DoctorTransition
{
    public class DoctorHealRunTransition : Transition
    {
        private void Update()
        {
            if (Doctor.IsBusy && Target.OnPlace)
            {
    Invoke(nameof(Complete), 0.4f);
            }
        }

        private void Complete()
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