using UnityEngine;

namespace Vampire.VampireStates
{
    public class IdleState : State
    {
        private const string StateName = "Idle";

        private void Start()
        {
            Animator.Play(StateName);
        }
    }
}