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
            if (Target != null)
            {
                NeedTransit = true; 
            }
        }
    }
}