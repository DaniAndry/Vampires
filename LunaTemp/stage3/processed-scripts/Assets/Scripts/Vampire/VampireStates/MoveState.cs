using System;
using UnityEngine;

namespace Vampire.VampireStates
{
    public class MoveState : State
    {
        private float _speed = 2f;

        private void Start()
        {
            Animator.Play("WalkSimple");
        }

        private void Update()

        {
            if (Target != null)

            {
                transform.position = Vector2.MoveTowards(transform.position,

                    Target.transform.position, _speed * Time.deltaTime);

            }
        }

    }
}