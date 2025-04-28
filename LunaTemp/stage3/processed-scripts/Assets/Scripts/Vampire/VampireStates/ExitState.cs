using System.Collections;
using Money;
using UnityEngine;

namespace Vampire.VampireStates
{
    public class ExitState : State
    {
        [SerializeField] private float _rotationSpeed = 5f;
        [SerializeField] private float _targetAngleZ = 0f;
        [SerializeField] private float _moveSpeed = 2f;
        [SerializeField] private MoneyConroller _money;
        private Transform _targetTransform;
        private SpriteRenderer _spriteRenderer;
        private Vampire _vampire;

        private void OnEnable()
        {
        _spriteRenderer = GetComponent<SpriteRenderer>();
            _vampire = GetComponent<Vampire>();
            StartCoroutine(PerformExitSequence());
            _targetTransform = _vampire.ExitPoint;
            _money = _vampire.Money;
            _spriteRenderer.enabled = true;
        }

        private IEnumerator PerformExitSequence()
        {
            float currentAngleZ = transform.eulerAngles.z;
            while (Mathf.Abs(Mathf.DeltaAngle(currentAngleZ, _targetAngleZ)) > 0.1f)
            {
                Vector3 currentRotation = transform.eulerAngles;
                float newAngleZ = Mathf.LerpAngle(currentRotation.z, _targetAngleZ, _rotationSpeed * Time.deltaTime);
                transform.eulerAngles = new Vector3(currentRotation.x, currentRotation.y, newAngleZ);
                currentAngleZ = newAngleZ;
                yield return null;
            }

            transform.eulerAngles = new Vector3(transform.eulerAngles.x, transform.eulerAngles.y, _targetAngleZ);


            if (_targetTransform != null)
            {
                Animator.enabled = true;
                Animator.Play("Walk");
                while (Vector2.Distance(transform.position, _targetTransform.position) > 0.1f)
                {
                    transform.position = Vector2.MoveTowards(transform.position,
                        _targetTransform.position, _moveSpeed * Time.deltaTime);
                    yield return null;
                }

                transform.position = _targetTransform.position;
                _money.AddMoney(10);
                Destroy(gameObject);
            }
        }
    }
}