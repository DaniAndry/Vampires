using System;

namespace Vampire.VampireTransitions
{
    public class HealRunTransition : Transition
    {
        private void Start()
        {
            Target.OnReady();
        }

        private void Update()
        {
            if (Target.OnPlace && Target.IsReadyToHeal)
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