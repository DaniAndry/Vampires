using UnityEngine;

public class Bed : MonoBehaviour
{
    private bool _isBusy;
    private bool _needToHeal;
    private bool _onPlace;
    private bool _isReadyToHeal;
    
    public bool IsBusy => _isBusy;
    public bool NeedToHeal => _needToHeal;
    public bool OnPlace => _onPlace;
    public bool IsReadyToHeal => _isReadyToHeal;

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
    }

    public void DoctorOnPlace()
    {
        _onPlace = true;
        _needToHeal = false;
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