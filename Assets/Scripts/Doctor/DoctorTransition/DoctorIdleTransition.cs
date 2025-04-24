using System;

namespace Doctor.DoctorTransition
{
    public class DoctorIdleTransition : Transition
    {
        private void Update()
        {
            if (!Doctor.IsBusy)
            {
                NeedTransit = true;
            }
        }

        public override void Enable()
        {
            throw new NotImplementedException();
        }
    }
}
