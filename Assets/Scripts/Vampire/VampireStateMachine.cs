using Money;
using UnityEngine;

namespace Vampire
{
    [RequireComponent(typeof(Animator))]
    public class VampireStateMachine : MonoBehaviour
    {
        [SerializeField] private State _firstState;
        
        private Animator _animator;
        private State _currentState;
        private Vampire _vampire;

        private void Awake()
        {
            _animator = GetComponent<Animator>();
            _vampire = GetComponent<Vampire>();
        }

        private void Start()
        {
            _currentState = _firstState;
            _currentState.Enter(_animator, _vampire?.Target);
        }


        private void Update()
        {
            if (_currentState == null)
                return;

            State nextState = _currentState.GetNextState();

            if (nextState != null)
            {
                Transit(nextState);
            }
        }

        private void Transit(State nextState)
        {
            if (_currentState != null)
            {
                _currentState.Exit();
            }

            _currentState = nextState;

            if (_currentState != null)
            {
                _currentState.Enter(_animator, _vampire?.Target);
            }
        }
    }
}