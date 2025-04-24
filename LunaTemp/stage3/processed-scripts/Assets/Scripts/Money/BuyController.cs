using System.Collections.Generic;
using Money;
using UnityEngine;

public class BuyController : MonoBehaviour
{
    [SerializeField] private MoneyConroller _money;
    [SerializeField] private BuyButton _doctorButton;
    [SerializeField] private BuyButton _bedButton;
    [SerializeField] private List<GameObject> _doctors;
    [SerializeField] private List<GameObject> _beds;
    private int doctorIndex = 0;
    private int bedIndex = 0;
    private void Start()
    {
        _doctorButton.Initialize(BuyDoctor);
        _bedButton.Initialize(BuyBed);
    }

    private void BuyDoctor()
    {
        int cost = _doctorButton.CurrentPrice;
  
        if (_money.TryToBuy(cost))
        {
            _money.RemoveMoney(cost);
            _doctorButton.IncreasePrice();
            _doctors[doctorIndex].SetActive(true);
            doctorIndex++;
        }
    }

    private void BuyBed()
    {
        int cost = _bedButton.CurrentPrice;

        if (_money.TryToBuy(cost))
        {
            _money.RemoveMoney(cost);
            _bedButton.IncreasePrice();
            _beds[bedIndex].SetActive(true);
            bedIndex++;
        }
    }
}