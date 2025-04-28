using System;
using Money;
using UnityEngine;
using UnityEngine.Serialization;

namespace Vampire
{
    public class Vampire : MonoBehaviour
    {
        [SerializeField] private Sprite healSprite;

        public Bed Target => _target;
        public bool IsFirst => _isFirst;
        public bool IsHealthy => _isHealthy;
        public Transform ExitPoint => _exitPoint;

        private int Reward => _reward;
        public MoneyConroller Money => _money;

        private Transform _exitPoint;
        private int _reward = 10;
        private bool _isFirst;
        private Bed _target;
        private SpriteRenderer _renderer;
        private bool _isHealthy;
        private MoneyConroller _money;

        private void Awake()
        {
            _renderer = GetComponent<SpriteRenderer>();
        }

        public void ToFirst(Bed bed)
        {
            _target = bed;
            _isFirst = true;
        }

        public void StartToHeal()
        {
            _isHealthy = true;
        }

        public void Heal()
        {
            _renderer.sprite = healSprite;
        }

        public void InitPoint(Transform vampireExitPoint, MoneyConroller money)
        {
            _exitPoint = vampireExitPoint;
            _money = money;
        }
    }
}