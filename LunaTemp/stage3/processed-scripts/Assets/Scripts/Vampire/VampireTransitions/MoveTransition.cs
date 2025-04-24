using UnityEngine;

namespace Vampire.VampireTransitions
{
    public class MoveTransition : Transition
    {
        public override void Enable()
        {
        }

        private void Update()
        {
            Target = Vampire.Target;
            if (Target != null && !Target.IsBusy)
            {
                NeedTransit = true;
                Target.TakeABed();
            }
        }
    }
}