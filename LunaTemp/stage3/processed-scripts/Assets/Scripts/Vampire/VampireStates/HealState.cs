using UnityEngine;

namespace Vampire.VampireStates
{
    public class HealState : State
    {
        [SerializeField] private float _rotationSpeed = 5f;
        private float _targetAngleZ = -70f;
        private SpriteRenderer spriteRenderer;

        private void Start()
        {
            Animator.enabled = false;
            spriteRenderer = GetComponent<SpriteRenderer>();
        }

        private void Update()
        {
            Vector3 currentRotation = transform.eulerAngles;
            float newAngleZ = Mathf.LerpAngle(currentRotation.z, _targetAngleZ, _rotationSpeed * Time.deltaTime);
            transform.eulerAngles = new Vector3(currentRotation.x, currentRotation.y, newAngleZ);

            if (Mathf.Abs(Mathf.DeltaAngle(currentRotation.z, _targetAngleZ)) < 0.2f)
            {
                transform.eulerAngles = new Vector3(currentRotation.x, currentRotation.y, _targetAngleZ);
                Target.HealBed();
                spriteRenderer.enabled = false;
            }
        }
    }
}