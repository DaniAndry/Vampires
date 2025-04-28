using System;
using UnityEngine;

public class Bed : MonoBehaviour
{
    [SerializeField] private Sprite _spriteNeedToHeal;
    [SerializeField] private bool _isBusy;
    [SerializeField] private bool _needToHeal;
    [SerializeField] private bool _onPlace;
    [SerializeField] private bool _isReadyToHeal;
    [SerializeField] private bool _isRun;

    private Sprite _sprite;
    private SpriteRenderer _spriteRenderer;
    
    public bool IsBusy => _isBusy;
    public bool NeedToHeal => _needToHeal;
    public bool OnPlace => _onPlace;
    public bool IsReadyToHeal => _isReadyToHeal;
    public bool IsRun => _isRun;

    private void Start()
    {
        _spriteRenderer = GetComponent<SpriteRenderer>();
        _sprite = _spriteRenderer.sprite;
    }

    public void TakeABed()
    {
        _isBusy = true;
    }

    public void EmptyBed()
    {
        _isBusy = false;
        _spriteRenderer.sprite = _sprite;
    }

    public void HealBed()
    {
        _needToHeal = true;
        _spriteRenderer.sprite = _spriteNeedToHeal;
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