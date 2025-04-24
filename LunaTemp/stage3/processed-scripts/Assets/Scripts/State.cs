using System.Collections.Generic;
using UnityEngine;
using Vampire.VampireTransitions;


public abstract class State : MonoBehaviour
{
    [SerializeField] private List<Transition> _transitions;

    protected Animator Animator { get; private set; }
    protected Bed Target { get; private set; }

    public void Enter(Animator animator, Bed bed)
    {
        if (!enabled)
        {
            Animator = animator;
            Target = bed;
                
            enabled = true;

            foreach (var transition in _transitions)
            {
                transition.enabled = true;
                transition.Init(Target);
            }
        }
    }

    public void Exit()
    {
        if (enabled)
        {
            foreach (var transition in _transitions)
            {
                transition.enabled = false;
            }

            enabled = false;
        }
    }

    public State GetNextState()
    {
        foreach (var transition in _transitions)
        {
            if (transition.NeedTransit)
            {
                return transition.TargetState;
            }
        }

        return null;
    }

    public void ReloadTarget()
    {
         Target = null;
    }
        
    public void ChangeTarget(Bed target)
    {
        Target = target;
    }
}