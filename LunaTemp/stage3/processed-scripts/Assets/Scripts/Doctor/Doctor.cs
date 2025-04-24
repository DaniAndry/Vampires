using UnityEngine;

namespace Doctor
{
    public class Doctor: MonoBehaviour
    {
        public Bed Target => _target;
        public bool IsBusy => _isBusy;
        
        private Bed _target;
        private bool _isBusy;

        public void ToHeal(Bed bed)
        {
            _target = bed;
            _isBusy = true;
        }

        public void CompleteHealing()
        {
            _isBusy = false;
        }
    }
}