using UnityEngine;

public class Bed : MonoBehaviour
{
   [SerializeField] private bool _isBusy;
   [SerializeField] private bool _needToHeal;
   [SerializeField]private bool _onPlace;
   [SerializeField] private bool _isReadyToHeal;
   private bool _isRun;

   public bool IsBusy => _isBusy;
    public bool NeedToHeal => _needToHeal;
    public bool OnPlace => _onPlace;
    public bool IsReadyToHeal => _isReadyToHeal;
    public bool IsRun => _isRun;

    public void TakeABed()
    {
        _isBusy = true;
    }

    public void EmptyBed()
    {
        _isBusy = false;
    }

    public void HealBed()
    {
        _needToHeal = true;
    }

    public void HealComplete()
    {
        _isBusy = false;
        _onPlace = false;
    }

    public void DoctorOnPlace()
    {
        _onPlace = true;
        _needToHeal = false;
        _isRun = false;
    }

    public void DoctorOnRun()
    {
        _isRun = true;
    }

    public void OnReady()
    {
        _isReadyToHeal = true;
    }
    
    public void OfReady()
    {
        _isReadyToHeal = false;
    }
}