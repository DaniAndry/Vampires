namespace Vampire.VampireStates
{
    public class HealRunState : State
    {
        private Vampire _vampire;

        private void OnEnable()
        {
            _vampire = GetComponent<Vampire>();
            Invoke(nameof(Rotate), 0.7f);
        }

        private void Rotate()
        {
            _vampire.StartToHeal();
        }
    }
}