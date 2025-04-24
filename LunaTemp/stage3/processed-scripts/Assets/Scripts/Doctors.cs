using System.Collections.Generic;
using UnityEngine;

internal class Doctors : MonoBehaviour
{
    [SerializeField] private List<Doctor.Doctor> _doctors;

    public void GoToHeal(Bed bed)
    {
        foreach (var doctor in _doctors)
        {
            if (!doctor.IsBusy)
            {
                doctor.ToHeal(bed);
            }
        }
    }
}