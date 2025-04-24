using UnityEngine;

namespace Vampire.VampireTransitions
{
    public class HealTransition : Transition
    {
        [SerializeField] private float _transitionRange = 0.1f;
        [SerializeField] private float _rangeSpread = 0.1f;

        private void Start()
        {
            _transitionRange += Random.Range(-_rangeSpread, _rangeSpread);
        }

        private void Update()
        {
            if (Vector2.Distance(transform.position, Target.transform.position) < _transitionRange)
            {
                Target.HealBed();
                NeedTransit = true;
            }
        }
        
        public override void Enable()
        {

        }
    }
}