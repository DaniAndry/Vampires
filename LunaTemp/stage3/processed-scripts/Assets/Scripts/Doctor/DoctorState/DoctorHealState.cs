using UnityEngine;

namespace Doctor.DoctorState
{
    public class DoctorHealState : State
    {
        private const string StateName = "Heal";

        private void OnEnable()
        {
            //Animator.Play(StateName);
            Target.DoctorOnPlace();
            ReloadTarget(); 

        }
    }
}
