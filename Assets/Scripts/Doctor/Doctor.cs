using UnityEngine;

namespace Doctor
{
    public class Doctor: MonoBehaviour
    {
        public Bed Target => _target;
        public bool IsBusy => _isBusy;

        private Bed _target;
        [SerializeField] private bool _isBusy;

        public void ToHeal(Bed bed)
        {
            _isBusy = true;
            _target = bed;
        }

        public void CompleteHealing()
        {
            _isBusy = false;
            _target = null;
        }
    }
}