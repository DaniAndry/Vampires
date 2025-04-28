using System.Collections;
using UnityEngine;

namespace Doctor.DoctorTransition
{
    public class DoctorHealRunTransition : Transition
    {
        private bool _isRunning = false;

        private void Update()
        {
            if (!_isRunning && Doctor.IsBusy && Target.OnPlace)
            {
                StartCoroutine(Complete());
            }
        }

        private IEnumerator Complete()
        {
            _isRunning = true;

            yield return new WaitForSeconds(1f);

            Doctor.CompleteHealing();
            NeedTransit = true;

            _isRunning = false; 
        }

        public override void Enable()
        {
            throw new System.NotImplementedException();
        }
    }
}