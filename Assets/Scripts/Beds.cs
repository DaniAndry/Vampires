using System.Collections.Generic;
using UnityEngine;
using Vampire;

public class Beds : MonoBehaviour
{
    [SerializeField] private List<Bed> _beds;
    [SerializeField] private Vampires _vampires;
    [SerializeField] private Doctors _doctors;

    private void Update()
    {
        foreach (var bed in _beds)
        {
            if (bed != null && bed.gameObject.activeSelf && !bed.IsBusy)
            {
                _vampires.AssignBedToFirstAvailable(bed);
                
            }
            else if (bed != null && bed.gameObject.activeSelf && bed.NeedToHeal && bed.IsBusy && bed.IsReadyToHeal)
            {
           _doctors.GoToHeal(bed);
            }

            // Debug.Log(bed.NeedToHeal);
            // Debug.Log(bed.IsBusy);
            // Debug.Log(bed.IsReadyToHeal);
        }
    }
}