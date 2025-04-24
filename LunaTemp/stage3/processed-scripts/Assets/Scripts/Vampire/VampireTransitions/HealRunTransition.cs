using System;
using UnityEngine;

namespace Vampire.VampireTransitions
{
    public class HealRunTransition : Transition
    {
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