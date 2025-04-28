using UnityEngine;

namespace Doctor.DoctorTransition
{
    public class DoctorMoveTransition : Transition
    {
        public override void Enable()
        {
            throw new System.NotImplementedException();
        }

        private void Update()
        {
            Target = Doctor.Target;
          //  Debug.Log(Target);
            if (Target != null && !Target.IsRun && !Target.OnPlace)
            {
                Target.DoctorOnRun();
                NeedTransit = true;
            }
        }
    }
}