using System;
using UnityEngine;

namespace Vampire
{
    public class Vampire : MonoBehaviour
    {
        [SerializeField] private Sprite healSprite;
        [SerializeField] public Transform ExitPoint;
        
        public Bed Target => _target;
        public bool IsFirst => _isFirst;
        public bool IsHealthy => _isHealthy;

        private int Reward => _reward;

        private int _reward = 10;
        private bool _isFirst;
       [SerializeField] private Bed _target;
        private SpriteRenderer _renderer;
        private bool _isHealthy;

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
    }
}