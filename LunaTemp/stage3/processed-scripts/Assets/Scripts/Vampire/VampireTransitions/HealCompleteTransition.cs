﻿using System;
using UnityEngine;

namespace Vampire.VampireTransitions
{
    public class HealCompleteTransition : Transition
    {
        private void Start()
        {
            Invoke(nameof(Exit), 0.5f);
        }

        private void Exit()
        {
            NeedTransit = true;
        }

        public override void Enable()
        {
            throw new NotImplementedException();
        }
    }
}