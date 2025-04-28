using System;
using UnityEngine;

namespace Vampire.VampireTransitions
{
    public class ExitTransition : Transition
    {
        private void Start()
        {
            Invoke(nameof(Exit), 0.5f);
        }

        private void Exit()
        {
            Target.EmptyBed();
            Target.HealComplete();
            NeedTransit = true;
        }

        public override void Enable()
        {
            throw new NotImplementedException();
        }
    }
}