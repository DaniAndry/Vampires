using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace Money
{
    public class BuyButton : MonoBehaviour
    {
        [SerializeField] private TextMeshProUGUI _priceText;
        [SerializeField] private Button _button;

        private int _currentPrice = 10;
        private int _priceStep = 5;

        public int CurrentPrice => _currentPrice;

        public void Initialize(System.Action onClickCallback)
        {
            _button.onClick.AddListener(() => onClickCallback?.Invoke());
            UpdatePriceText();
        }

        public void IncreasePrice()
        {
            _currentPrice += _priceStep;
            UpdatePriceText();
        }

        private void UpdatePriceText()
        {
            _priceText.text = _currentPrice.ToString();
        }
    }
}