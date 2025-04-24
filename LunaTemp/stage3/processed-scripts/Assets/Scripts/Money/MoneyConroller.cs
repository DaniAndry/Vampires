using System;
using UnityEngine;

namespace Money
{
    public class MoneyConroller : MonoBehaviour
    {
        [SerializeField] private MoneyUI moneyUI;
        private int _money = 30;

        private void Start()
        {
            moneyUI.UpdateText(_money);
        }

        public void AddMoney(int money)
        {
            _money += money = 10;
            moneyUI.UpdateText(_money);
        }

        public bool TryToBuy(int money)
        {
            return _money >= money;
        }

        public void RemoveMoney(int money)
        {
            _money -= money;
            moneyUI.UpdateText(_money);
        }
    }
}