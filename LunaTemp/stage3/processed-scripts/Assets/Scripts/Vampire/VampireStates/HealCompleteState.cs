namespace Vampire.VampireStates
{
    public class HealCompleteState : State
    {
        private Vampire _vampire;

        private void OnEnable()
        {
            _vampire = GetComponent<Vampire>();
            Invoke(nameof(Heal), 0.5f);
        }

        private void Heal()
        {
            _vampire.Heal();
            Target.OfReady();
            
        }
    }
}