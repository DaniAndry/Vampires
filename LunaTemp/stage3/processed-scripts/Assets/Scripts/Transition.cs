using UnityEngine;

public abstract class Transition : MonoBehaviour
{
    [SerializeField] private State _targetState;

    public State TargetState => _targetState;
    public bool NeedTransit { get; protected set; }
    protected Bed Target ;
    protected Vampire.Vampire Vampire;
    protected Doctor.Doctor Doctor;
    

    private void OnEnable()
    {
        Vampire = GetComponent<Vampire.Vampire>();
        Doctor = GetComponent<Doctor.Doctor>();
        NeedTransit = false;
    }

    public abstract void Enable();

    public void Init(Bed target)
    {
        Target = target;
    }
}