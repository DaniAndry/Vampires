using TMPro;
using UnityEngine;

namespace Money
{
    public class MoneyUI : MonoBehaviour
    {
        private TextMeshProUGUI _moneyText;

        private void Awake()
        {
            _moneyText = GetComponent<TextMeshProUGUI>();
        }
        
        public void UpdateText(int money)
        {
            _moneyText.text = money.ToString();
        }
    }
}