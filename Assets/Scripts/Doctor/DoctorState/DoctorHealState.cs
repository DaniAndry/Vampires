using UnityEngine;

namespace Doctor.DoctorState
{
    public class DoctorHealState : State
    {
        private const string StateName = "Heal";
        
        private void Update()
        {
            if (Target.IsBusy)
            {
                Target.DoctorOnPlace();
            }
        }
    }
}