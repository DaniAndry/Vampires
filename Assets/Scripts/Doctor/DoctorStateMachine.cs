using UnityEngine;

namespace Doctor
{
    public class DoctorStateMachine : MonoBehaviour
    {
        [SerializeField] private State _firstState;

        private Animator _animator;
        private State _currentState;
        private Doctor _doctor;


        private void Awake()
        {
            _animator = GetComponent<Animator>();
            _doctor = GetComponent<Doctor>();
        }

        private void Start()
        {
            _currentState = _firstState;
            _currentState.Enter(_animator, _doctor?.Target);
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
                _currentState.Enter(_animator, _doctor?.Target);
            }
        }
    }
    
}