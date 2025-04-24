if ( TRACE ) { TRACE( JSON.parse( '["Bed#IsBusy#get","Bed#NeedToHeal#get","Bed#OnPlace#get","Bed#IsReadyToHeal#get","Bed#TakeABed","Bed#EmptyBed","Bed#HealBed","Bed#HealComplete","Bed#DoctorOnPlace","Bed#OnReady","Bed#OfReady","Beds#Update","BuyController#init","BuyController#Start","BuyController#BuyDoctor","BuyController#BuyBed","Doctor.Doctor#Target#get","Doctor.Doctor#IsBusy#get","Doctor.Doctor#ToHeal","Doctor.Doctor#CompleteHealing","State#Enter","State#Exit","State#GetNextState","State#ReloadTarget","State#ChangeTarget","Doctor.DoctorStateMachine#Awake","Doctor.DoctorStateMachine#Start","Doctor.DoctorStateMachine#Update","Doctor.DoctorStateMachine#Transit","Transition#TargetState#get","Transition#OnEnable","Transition#Init","Doctors#GoToHeal","Money.BuyButton#CurrentPrice#get","Money.BuyButton#init","Money.BuyButton#Initialize","Money.BuyButton#IncreasePrice","Money.BuyButton#UpdatePriceText","Money.MoneyConroller#init","Money.MoneyConroller#Start","Money.MoneyConroller#AddMoney","Money.MoneyConroller#TryToBuy","Money.MoneyConroller#RemoveMoney","Money.MoneyUI#Awake","Money.MoneyUI#UpdateText","Vampire.Vampire#Target#get","Vampire.Vampire#IsFirst#get","Vampire.Vampire#IsHealthy#get","Vampire.Vampire#Reward#get","Vampire.Vampire#init","Vampire.Vampire#Awake","Vampire.Vampire#ToFirst","Vampire.Vampire#StartToHeal","Vampire.Vampire#Heal","Vampire.Vampires#init","Vampire.Vampires#Start","Vampire.Vampires#AssignBedToFirstAvailable","Vampire.Vampires#AddVampire","Vampire.Vampires#MoveRemainingVampires","Vampire.Vampires#SmoothMove","Vampire.Vampires#GetVampireCount","Vampire.VampireStateMachine#Awake","Vampire.VampireStateMachine#Start","Vampire.VampireStateMachine#Update","Vampire.VampireStateMachine#Transit","Doctor.DoctorState.DoctorHealState#init","Doctor.DoctorState.DoctorHealState#OnEnable","Doctor.DoctorState.DoctorIdleState#init","Doctor.DoctorState.DoctorIdleState#Start","Doctor.DoctorState.DoctorMoveState#init","Doctor.DoctorState.DoctorMoveState#init","Doctor.DoctorState.DoctorMoveState#Start","Doctor.DoctorState.DoctorMoveState#Update","Doctor.DoctorTransition.DoctorHealRunTransition#Start","Doctor.DoctorTransition.DoctorHealRunTransition#Enable","Doctor.DoctorTransition.DoctorHealTransition#init","Doctor.DoctorTransition.DoctorHealTransition#Start","Doctor.DoctorTransition.DoctorHealTransition#Update","Doctor.DoctorTransition.DoctorHealTransition#Enable","Doctor.DoctorTransition.DoctorIdleTransition#Update","Doctor.DoctorTransition.DoctorIdleTransition#Enable","Doctor.DoctorTransition.DoctorMoveTransition#Enable","Doctor.DoctorTransition.DoctorMoveTransition#Update","Vampire.VampireStates.ExitState#init","Vampire.VampireStates.ExitState#OnEnable","Vampire.VampireStates.ExitState#PerformExitSequence","Vampire.VampireStates.HealCompleteState#OnEnable","Vampire.VampireStates.HealCompleteState#Heal","Vampire.VampireStates.HealRunState#OnEnable","Vampire.VampireStates.HealRunState#Rotate","Vampire.VampireStates.HealState#init","Vampire.VampireStates.HealState#Update","Vampire.VampireStates.IdleState#init","Vampire.VampireStates.IdleState#Start","Vampire.VampireStates.MoveState#init","Vampire.VampireStates.MoveState#Start","Vampire.VampireStates.MoveState#Update","Vampire.VampireTransitions.ExitTransition#Start","Vampire.VampireTransitions.ExitTransition#Exit","Vampire.VampireTransitions.ExitTransition#Enable","Vampire.VampireTransitions.HealCompleteTransition#Start","Vampire.VampireTransitions.HealCompleteTransition#Exit","Vampire.VampireTransitions.HealCompleteTransition#Enable","Vampire.VampireTransitions.HealRunTransition#Update","Vampire.VampireTransitions.HealRunTransition#Enable","Vampire.VampireTransitions.HealTransition#init","Vampire.VampireTransitions.HealTransition#Start","Vampire.VampireTransitions.HealTransition#Update","Vampire.VampireTransitions.HealTransition#Enable","Vampire.VampireTransitions.IdleTransition#Enable","Vampire.VampireTransitions.MoveTransition#Enable","Vampire.VampireTransitions.MoveTransition#Update"]' ) ); }
/**
 * @version 1.0.9243.26705
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*Bed start.*/
    Bridge.define("Bed", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _isBusy: false,
            _needToHeal: false,
            _onPlace: false,
            _isReadyToHeal: false
        },
        props: {
            IsBusy: {
                get: function () {
if ( TRACE ) { TRACE( "Bed#IsBusy#get", this ); }

                    return this._isBusy;
                }
            },
            NeedToHeal: {
                get: function () {
if ( TRACE ) { TRACE( "Bed#NeedToHeal#get", this ); }

                    return this._needToHeal;
                }
            },
            OnPlace: {
                get: function () {
if ( TRACE ) { TRACE( "Bed#OnPlace#get", this ); }

                    return this._onPlace;
                }
            },
            IsReadyToHeal: {
                get: function () {
if ( TRACE ) { TRACE( "Bed#IsReadyToHeal#get", this ); }

                    return this._isReadyToHeal;
                }
            }
        },
        methods: {
            /*Bed.TakeABed start.*/
            TakeABed: function () {
if ( TRACE ) { TRACE( "Bed#TakeABed", this ); }

                this._isBusy = true;
            },
            /*Bed.TakeABed end.*/

            /*Bed.EmptyBed start.*/
            EmptyBed: function () {
if ( TRACE ) { TRACE( "Bed#EmptyBed", this ); }

                this._isBusy = false;
            },
            /*Bed.EmptyBed end.*/

            /*Bed.HealBed start.*/
            HealBed: function () {
if ( TRACE ) { TRACE( "Bed#HealBed", this ); }

                this._needToHeal = true;
            },
            /*Bed.HealBed end.*/

            /*Bed.HealComplete start.*/
            HealComplete: function () {
if ( TRACE ) { TRACE( "Bed#HealComplete", this ); }

                this._isBusy = false;
            },
            /*Bed.HealComplete end.*/

            /*Bed.DoctorOnPlace start.*/
            DoctorOnPlace: function () {
if ( TRACE ) { TRACE( "Bed#DoctorOnPlace", this ); }

                this._onPlace = true;
                this._needToHeal = false;
            },
            /*Bed.DoctorOnPlace end.*/

            /*Bed.OnReady start.*/
            OnReady: function () {
if ( TRACE ) { TRACE( "Bed#OnReady", this ); }

                this._isReadyToHeal = true;
            },
            /*Bed.OnReady end.*/

            /*Bed.OfReady start.*/
            OfReady: function () {
if ( TRACE ) { TRACE( "Bed#OfReady", this ); }

                this._isReadyToHeal = false;
            },
            /*Bed.OfReady end.*/


        }
    });
    /*Bed end.*/

    /*Beds start.*/
    Bridge.define("Beds", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _beds: null,
            _vampires: null,
            _doctors: null
        },
        methods: {
            /*Beds.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Beds#Update", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._beds);
                try {
                    while ($t.moveNext()) {
                        var bed = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Inequality(bed, null) && bed.gameObject.activeSelf && !bed.IsBusy) {
                            this._vampires.AssignBedToFirstAvailable(bed);
                        } else if (UnityEngine.MonoBehaviour.op_Inequality(bed, null) && bed.gameObject.activeSelf && bed.NeedToHeal && bed.IsBusy && bed.IsReadyToHeal) {
                            this._doctors.GoToHeal(bed);

                            UnityEngine.Debug.Log$1(bed.gameObject.name);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Beds.Update end.*/


        }
    });
    /*Beds end.*/

    /*BuyController start.*/
    Bridge.define("BuyController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _money: null,
            _doctorButton: null,
            _bedButton: null,
            _doctors: null,
            _beds: null,
            doctorIndex: 0,
            bedIndex: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BuyController#init", this ); }

                this.doctorIndex = 0;
                this.bedIndex = 0;
            }
        },
        methods: {
            /*BuyController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BuyController#Start", this ); }

                this._doctorButton.Initialize(Bridge.fn.cacheBind(this, this.BuyDoctor));
                this._bedButton.Initialize(Bridge.fn.cacheBind(this, this.BuyBed));
            },
            /*BuyController.Start end.*/

            /*BuyController.BuyDoctor start.*/
            BuyDoctor: function () {
if ( TRACE ) { TRACE( "BuyController#BuyDoctor", this ); }

                var cost = this._doctorButton.CurrentPrice;

                if (this._money.TryToBuy(cost)) {
                    this._money.RemoveMoney(cost);
                    this._doctorButton.IncreasePrice();
                    this._doctors.getItem(this.doctorIndex).SetActive(true);
                    this.doctorIndex = (this.doctorIndex + 1) | 0;
                }
            },
            /*BuyController.BuyDoctor end.*/

            /*BuyController.BuyBed start.*/
            BuyBed: function () {
if ( TRACE ) { TRACE( "BuyController#BuyBed", this ); }

                var cost = this._bedButton.CurrentPrice;

                if (this._money.TryToBuy(cost)) {
                    this._money.RemoveMoney(cost);
                    this._bedButton.IncreasePrice();
                    this._beds.getItem(this.bedIndex).SetActive(true);
                    this.bedIndex = (this.bedIndex + 1) | 0;
                }
            },
            /*BuyController.BuyBed end.*/


        }
    });
    /*BuyController end.*/

    /*Doctor.Doctor start.*/
    Bridge.define("Doctor.Doctor", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _target: null,
            _isBusy: false
        },
        props: {
            Target: {
                get: function () {
if ( TRACE ) { TRACE( "Doctor.Doctor#Target#get", this ); }

                    return this._target;
                }
            },
            IsBusy: {
                get: function () {
if ( TRACE ) { TRACE( "Doctor.Doctor#IsBusy#get", this ); }

                    return this._isBusy;
                }
            }
        },
        methods: {
            /*Doctor.Doctor.ToHeal start.*/
            ToHeal: function (bed) {
if ( TRACE ) { TRACE( "Doctor.Doctor#ToHeal", this ); }

                this._target = bed;
                this._isBusy = true;
            },
            /*Doctor.Doctor.ToHeal end.*/

            /*Doctor.Doctor.CompleteHealing start.*/
            CompleteHealing: function () {
if ( TRACE ) { TRACE( "Doctor.Doctor#CompleteHealing", this ); }

                this._isBusy = false;
            },
            /*Doctor.Doctor.CompleteHealing end.*/


        }
    });
    /*Doctor.Doctor end.*/

    /*State start.*/
    Bridge.define("State", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _transitions: null,
            Animator: null,
            Target: null
        },
        methods: {
            /*State.Enter start.*/
            Enter: function (animator, bed) {
if ( TRACE ) { TRACE( "State#Enter", this ); }

                var $t;
                if (!this.enabled) {
                    this.Animator = animator;
                    this.Target = bed;

                    this.enabled = true;

                    $t = Bridge.getEnumerator(this._transitions);
                    try {
                        while ($t.moveNext()) {
                            var transition = $t.Current;
                            transition.enabled = true;
                            transition.Init(this.Target);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            },
            /*State.Enter end.*/

            /*State.Exit start.*/
            Exit: function () {
if ( TRACE ) { TRACE( "State#Exit", this ); }

                var $t;
                if (this.enabled) {
                    $t = Bridge.getEnumerator(this._transitions);
                    try {
                        while ($t.moveNext()) {
                            var transition = $t.Current;
                            transition.enabled = false;
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    this.enabled = false;
                }
            },
            /*State.Exit end.*/

            /*State.GetNextState start.*/
            GetNextState: function () {
if ( TRACE ) { TRACE( "State#GetNextState", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._transitions);
                try {
                    while ($t.moveNext()) {
                        var transition = $t.Current;
                        if (transition.NeedTransit) {
                            return transition.TargetState;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return null;
            },
            /*State.GetNextState end.*/

            /*State.ReloadTarget start.*/
            ReloadTarget: function () {
if ( TRACE ) { TRACE( "State#ReloadTarget", this ); }

                this.Target = null;
            },
            /*State.ReloadTarget end.*/

            /*State.ChangeTarget start.*/
            ChangeTarget: function (target) {
if ( TRACE ) { TRACE( "State#ChangeTarget", this ); }

                this.Target = target;
            },
            /*State.ChangeTarget end.*/


        }
    });
    /*State end.*/

    /*Doctor.DoctorStateMachine start.*/
    Bridge.define("Doctor.DoctorStateMachine", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _firstState: null,
            _animator: null,
            _currentState: null,
            _doctor: null
        },
        methods: {
            /*Doctor.DoctorStateMachine.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorStateMachine#Awake", this ); }

                this._animator = this.GetComponent(UnityEngine.Animator);
                this._doctor = this.GetComponent(Doctor.Doctor);
            },
            /*Doctor.DoctorStateMachine.Awake end.*/

            /*Doctor.DoctorStateMachine.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorStateMachine#Start", this ); }

                this._currentState = this._firstState;
                this._currentState.Enter(this._animator, UnityEngine.MonoBehaviour.op_Inequality(this._doctor, null) ? this._doctor.Target : null);
            },
            /*Doctor.DoctorStateMachine.Start end.*/

            /*Doctor.DoctorStateMachine.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorStateMachine#Update", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._currentState, null)) {
                    return;
                }

                var nextState = this._currentState.GetNextState();

                if (UnityEngine.MonoBehaviour.op_Inequality(nextState, null)) {
                    this.Transit(nextState);
                }
            },
            /*Doctor.DoctorStateMachine.Update end.*/

            /*Doctor.DoctorStateMachine.Transit start.*/
            Transit: function (nextState) {
if ( TRACE ) { TRACE( "Doctor.DoctorStateMachine#Transit", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._currentState, null)) {
                    this._currentState.Exit();
                }

                this._currentState = nextState;

                if (UnityEngine.MonoBehaviour.op_Inequality(this._currentState, null)) {
                    this._currentState.Enter(this._animator, UnityEngine.MonoBehaviour.op_Inequality(this._doctor, null) ? this._doctor.Target : null);
                }
            },
            /*Doctor.DoctorStateMachine.Transit end.*/


        }
    });
    /*Doctor.DoctorStateMachine end.*/

    /*Transition start.*/
    Bridge.define("Transition", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _targetState: null,
            NeedTransit: false,
            Target: null,
            Vampire: null,
            Doctor: null
        },
        props: {
            TargetState: {
                get: function () {
if ( TRACE ) { TRACE( "Transition#TargetState#get", this ); }

                    return this._targetState;
                }
            }
        },
        methods: {
            /*Transition.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Transition#OnEnable", this ); }

                this.Vampire = this.GetComponent(Vampire.Vampire);
                this.Doctor = this.GetComponent(Doctor.Doctor);
                this.NeedTransit = false;
            },
            /*Transition.OnEnable end.*/

            /*Transition.Init start.*/
            Init: function (target) {
if ( TRACE ) { TRACE( "Transition#Init", this ); }

                this.Target = target;
            },
            /*Transition.Init end.*/


        }
    });
    /*Transition end.*/

    /*Doctors start.*/
    Bridge.define("Doctors", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _doctors: null
        },
        methods: {
            /*Doctors.GoToHeal start.*/
            GoToHeal: function (bed) {
if ( TRACE ) { TRACE( "Doctors#GoToHeal", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._doctors);
                try {
                    while ($t.moveNext()) {
                        var doctor = $t.Current;
                        if (!doctor.IsBusy) {
                            doctor.ToHeal(bed);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Doctors.GoToHeal end.*/


        }
    });
    /*Doctors end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Money.BuyButton start.*/
    Bridge.define("Money.BuyButton", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _priceText: null,
            _button: null,
            _currentPrice: 0,
            _priceStep: 0
        },
        props: {
            CurrentPrice: {
                get: function () {
if ( TRACE ) { TRACE( "Money.BuyButton#CurrentPrice#get", this ); }

                    return this._currentPrice;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Money.BuyButton#init", this ); }

                this._currentPrice = 10;
                this._priceStep = 5;
            }
        },
        methods: {
            /*Money.BuyButton.Initialize start.*/
            Initialize: function (onClickCallback) {
if ( TRACE ) { TRACE( "Money.BuyButton#Initialize", this ); }

                this._button.onClick.AddListener(function () {
                    !Bridge.staticEquals(onClickCallback, null) ? onClickCallback() : null;
                });
                this.UpdatePriceText();
            },
            /*Money.BuyButton.Initialize end.*/

            /*Money.BuyButton.IncreasePrice start.*/
            IncreasePrice: function () {
if ( TRACE ) { TRACE( "Money.BuyButton#IncreasePrice", this ); }

                this._currentPrice = (this._currentPrice + this._priceStep) | 0;
                this.UpdatePriceText();
            },
            /*Money.BuyButton.IncreasePrice end.*/

            /*Money.BuyButton.UpdatePriceText start.*/
            UpdatePriceText: function () {
if ( TRACE ) { TRACE( "Money.BuyButton#UpdatePriceText", this ); }

                this._priceText.text = Bridge.toString(this._currentPrice);
            },
            /*Money.BuyButton.UpdatePriceText end.*/


        }
    });
    /*Money.BuyButton end.*/

    /*Money.MoneyConroller start.*/
    Bridge.define("Money.MoneyConroller", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            moneyUI: null,
            _money: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Money.MoneyConroller#init", this ); }

                this._money = 30;
            }
        },
        methods: {
            /*Money.MoneyConroller.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Money.MoneyConroller#Start", this ); }

                this.moneyUI.UpdateText(this._money);
            },
            /*Money.MoneyConroller.Start end.*/

            /*Money.MoneyConroller.AddMoney start.*/
            AddMoney: function (money) {
if ( TRACE ) { TRACE( "Money.MoneyConroller#AddMoney", this ); }

                this._money = (this._money + ((money = 10))) | 0;
                this.moneyUI.UpdateText(this._money);
            },
            /*Money.MoneyConroller.AddMoney end.*/

            /*Money.MoneyConroller.TryToBuy start.*/
            TryToBuy: function (money) {
if ( TRACE ) { TRACE( "Money.MoneyConroller#TryToBuy", this ); }

                return this._money >= money;
            },
            /*Money.MoneyConroller.TryToBuy end.*/

            /*Money.MoneyConroller.RemoveMoney start.*/
            RemoveMoney: function (money) {
if ( TRACE ) { TRACE( "Money.MoneyConroller#RemoveMoney", this ); }

                this._money = (this._money - money) | 0;
                this.moneyUI.UpdateText(this._money);
            },
            /*Money.MoneyConroller.RemoveMoney end.*/


        }
    });
    /*Money.MoneyConroller end.*/

    /*Money.MoneyUI start.*/
    Bridge.define("Money.MoneyUI", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _moneyText: null
        },
        methods: {
            /*Money.MoneyUI.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Money.MoneyUI#Awake", this ); }

                this._moneyText = this.GetComponent(TMPro.TextMeshProUGUI);
            },
            /*Money.MoneyUI.Awake end.*/

            /*Money.MoneyUI.UpdateText start.*/
            UpdateText: function (money) {
if ( TRACE ) { TRACE( "Money.MoneyUI#UpdateText", this ); }

                this._moneyText.text = Bridge.toString(money);
            },
            /*Money.MoneyUI.UpdateText end.*/


        }
    });
    /*Money.MoneyUI end.*/

    /*Vampire.Vampire start.*/
    Bridge.define("Vampire.Vampire", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            healSprite: null,
            ExitPoint: null,
            _reward: 0,
            _isFirst: false,
            _target: null,
            _renderer: null,
            _isHealthy: false
        },
        props: {
            Target: {
                get: function () {
if ( TRACE ) { TRACE( "Vampire.Vampire#Target#get", this ); }

                    return this._target;
                }
            },
            IsFirst: {
                get: function () {
if ( TRACE ) { TRACE( "Vampire.Vampire#IsFirst#get", this ); }

                    return this._isFirst;
                }
            },
            IsHealthy: {
                get: function () {
if ( TRACE ) { TRACE( "Vampire.Vampire#IsHealthy#get", this ); }

                    return this._isHealthy;
                }
            },
            Reward: {
                get: function () {
if ( TRACE ) { TRACE( "Vampire.Vampire#Reward#get", this ); }

                    return this._reward;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Vampire.Vampire#init", this ); }

                this._reward = 10;
            }
        },
        methods: {
            /*Vampire.Vampire.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Vampire.Vampire#Awake", this ); }

                this._renderer = this.GetComponent(UnityEngine.SpriteRenderer);
            },
            /*Vampire.Vampire.Awake end.*/

            /*Vampire.Vampire.ToFirst start.*/
            ToFirst: function (bed) {
if ( TRACE ) { TRACE( "Vampire.Vampire#ToFirst", this ); }

                this._target = bed;
                this._isFirst = true;
            },
            /*Vampire.Vampire.ToFirst end.*/

            /*Vampire.Vampire.StartToHeal start.*/
            StartToHeal: function () {
if ( TRACE ) { TRACE( "Vampire.Vampire#StartToHeal", this ); }

                this._isHealthy = true;
            },
            /*Vampire.Vampire.StartToHeal end.*/

            /*Vampire.Vampire.Heal start.*/
            Heal: function () {
if ( TRACE ) { TRACE( "Vampire.Vampire#Heal", this ); }

                this._renderer.sprite = this.healSprite;
            },
            /*Vampire.Vampire.Heal end.*/


        }
    });
    /*Vampire.Vampire end.*/

    /*Vampire.Vampires start.*/
    Bridge.define("Vampire.Vampires", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _vampires: null,
            _moveSpeed: 0,
            _waitingPositions: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Vampire.Vampires#init", this ); }

                this._moveSpeed = 2.0;
                this._waitingPositions = new (System.Collections.Generic.Queue$1(UnityEngine.Vector3)).ctor();
            }
        },
        methods: {
            /*Vampire.Vampires.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Vampire.Vampires#Start", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._vampires);
                try {
                    while ($t.moveNext()) {
                        var vampire = $t.Current;
                        this._waitingPositions.Enqueue(vampire.transform.position.$clone());
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Vampire.Vampires.Start end.*/

            /*Vampire.Vampires.AssignBedToFirstAvailable start.*/
            AssignBedToFirstAvailable: function (bed) {
if ( TRACE ) { TRACE( "Vampire.Vampires#AssignBedToFirstAvailable", this ); }

                if (this._vampires.Count > 0) {
                    var firstVampire = this._vampires.getItem(0);
                    firstVampire.ToFirst(bed);
                    this._vampires.removeAt(0);

                    this.MoveRemainingVampires();
                }
            },
            /*Vampire.Vampires.AssignBedToFirstAvailable end.*/

            /*Vampire.Vampires.AddVampire start.*/
            AddVampire: function (vampire) {
if ( TRACE ) { TRACE( "Vampire.Vampires#AddVampire", this ); }

                this._vampires.add(vampire);
                this._waitingPositions.Enqueue(vampire.transform.position.$clone());
            },
            /*Vampire.Vampires.AddVampire end.*/

            /*Vampire.Vampires.MoveRemainingVampires start.*/
            MoveRemainingVampires: function () {
if ( TRACE ) { TRACE( "Vampire.Vampires#MoveRemainingVampires", this ); }

                var newPositions = new (System.Collections.Generic.Queue$1(UnityEngine.Vector3)).ctor();
                var lastPosition = pc.Vec3.ZERO.clone();

                for (var i = 0; i < this._vampires.Count; i = (i + 1) | 0) {
                    var currentVampire = this._vampires.getItem(i);
                    var targetPosition = new UnityEngine.Vector3();

                    if (this._waitingPositions.Count > 0) {
                        targetPosition = this._waitingPositions.Dequeue().$clone();
                    } else {
                        targetPosition = lastPosition.$clone();
                    }

                    this.StartCoroutine$1(this.SmoothMove(currentVampire.transform, targetPosition));
                    newPositions.Enqueue(currentVampire.transform.position.$clone());
                    lastPosition = targetPosition.$clone();
                }

                this._waitingPositions = newPositions;
            },
            /*Vampire.Vampires.MoveRemainingVampires end.*/

            /*Vampire.Vampires.SmoothMove start.*/
            SmoothMove: function (transformToMove, targetPosition) {
if ( TRACE ) { TRACE( "Vampire.Vampires#SmoothMove", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    sqrRemainingDistance,
                    newPosition,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    sqrRemainingDistance = (transformToMove.position.$clone().sub( targetPosition )).lengthSq();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( sqrRemainingDistance > 0.01 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    newPosition = pc.Vec3.moveTowards( transformToMove.position, targetPosition, this._moveSpeed * UnityEngine.Time.deltaTime );
                                        transformToMove.position = newPosition.$clone();
                                        sqrRemainingDistance = (transformToMove.position.$clone().sub( targetPosition )).lengthSq();
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    transformToMove.position = targetPosition.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Vampire.Vampires.SmoothMove end.*/

            /*Vampire.Vampires.GetVampireCount start.*/
            GetVampireCount: function () {
if ( TRACE ) { TRACE( "Vampire.Vampires#GetVampireCount", this ); }

                return this._vampires.Count;
            },
            /*Vampire.Vampires.GetVampireCount end.*/


        }
    });
    /*Vampire.Vampires end.*/

    /*Vampire.VampireStateMachine start.*/
    Bridge.define("Vampire.VampireStateMachine", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _firstState: null,
            _animator: null,
            _currentState: null,
            _vampire: null
        },
        methods: {
            /*Vampire.VampireStateMachine.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Vampire.VampireStateMachine#Awake", this ); }

                this._animator = this.GetComponent(UnityEngine.Animator);
                this._vampire = this.GetComponent(Vampire.Vampire);
            },
            /*Vampire.VampireStateMachine.Awake end.*/

            /*Vampire.VampireStateMachine.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Vampire.VampireStateMachine#Start", this ); }

                this._currentState = this._firstState;
                this._currentState.Enter(this._animator, UnityEngine.MonoBehaviour.op_Inequality(this._vampire, null) ? this._vampire.Target : null);
            },
            /*Vampire.VampireStateMachine.Start end.*/

            /*Vampire.VampireStateMachine.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Vampire.VampireStateMachine#Update", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._currentState, null)) {
                    return;
                }

                var nextState = this._currentState.GetNextState();

                if (UnityEngine.MonoBehaviour.op_Inequality(nextState, null)) {
                    this.Transit(nextState);
                }
            },
            /*Vampire.VampireStateMachine.Update end.*/

            /*Vampire.VampireStateMachine.Transit start.*/
            Transit: function (nextState) {
if ( TRACE ) { TRACE( "Vampire.VampireStateMachine#Transit", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._currentState, null)) {
                    this._currentState.Exit();
                }

                this._currentState = nextState;

                if (UnityEngine.MonoBehaviour.op_Inequality(this._currentState, null)) {
                    this._currentState.Enter(this._animator, UnityEngine.MonoBehaviour.op_Inequality(this._vampire, null) ? this._vampire.Target : null);
                }
            },
            /*Vampire.VampireStateMachine.Transit end.*/


        }
    });
    /*Vampire.VampireStateMachine end.*/

    /*Doctor.DoctorState.DoctorHealState start.*/
    Bridge.define("Doctor.DoctorState.DoctorHealState", {
        inherits: [State],
        statics: {
            fields: {
                StateName: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorState.DoctorHealState#init", this ); }

                    this.StateName = "Heal";
                }
            }
        },
        methods: {
            /*Doctor.DoctorState.DoctorHealState.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorState.DoctorHealState#OnEnable", this ); }

                //Animator.Play(StateName);
                this.Target.DoctorOnPlace();
                this.ReloadTarget();

            },
            /*Doctor.DoctorState.DoctorHealState.OnEnable end.*/


        }
    });
    /*Doctor.DoctorState.DoctorHealState end.*/

    /*Doctor.DoctorState.DoctorIdleState start.*/
    Bridge.define("Doctor.DoctorState.DoctorIdleState", {
        inherits: [State],
        statics: {
            fields: {
                StateName: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorState.DoctorIdleState#init", this ); }

                    this.StateName = "Idle";
                }
            }
        },
        methods: {
            /*Doctor.DoctorState.DoctorIdleState.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorState.DoctorIdleState#Start", this ); }

                //Animator.Play(StateName);
            },
            /*Doctor.DoctorState.DoctorIdleState.Start end.*/


        }
    });
    /*Doctor.DoctorState.DoctorIdleState end.*/

    /*Doctor.DoctorState.DoctorMoveState start.*/
    Bridge.define("Doctor.DoctorState.DoctorMoveState", {
        inherits: [State],
        statics: {
            fields: {
                StateName: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorState.DoctorMoveState#init", this ); }

                    this.StateName = "Move";
                }
            }
        },
        fields: {
            _speed: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorState.DoctorMoveState#init", this ); }

                this._speed = 2.0;
            }
        },
        methods: {
            /*Doctor.DoctorState.DoctorMoveState.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorState.DoctorMoveState#Start", this ); }

                // Animator.Play(StateName);
            },
            /*Doctor.DoctorState.DoctorMoveState.Start end.*/

            /*Doctor.DoctorState.DoctorMoveState.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorState.DoctorMoveState#Update", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.Target, null)) {
                    this.transform.position = UnityEngine.Vector3.FromVector2(pc.Vec2.moveTowards( UnityEngine.Vector2.FromVector3(this.transform.position), UnityEngine.Vector2.FromVector3(this.Target.transform.position), this._speed * UnityEngine.Time.deltaTime ));
                }
            },
            /*Doctor.DoctorState.DoctorMoveState.Update end.*/


        }
    });
    /*Doctor.DoctorState.DoctorMoveState end.*/

    /*Doctor.DoctorTransition.DoctorHealRunTransition start.*/
    Bridge.define("Doctor.DoctorTransition.DoctorHealRunTransition", {
        inherits: [Transition],
        methods: {
            /*Doctor.DoctorTransition.DoctorHealRunTransition.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorTransition.DoctorHealRunTransition#Start", this ); }

                this.Doctor.CompleteHealing();
                this.NeedTransit = true;
            },
            /*Doctor.DoctorTransition.DoctorHealRunTransition.Start end.*/

            /*Doctor.DoctorTransition.DoctorHealRunTransition.Enable start.*/
            Enable: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorTransition.DoctorHealRunTransition#Enable", this ); }

                throw new System.NotImplementedException.ctor();
            },
            /*Doctor.DoctorTransition.DoctorHealRunTransition.Enable end.*/


        }
    });
    /*Doctor.DoctorTransition.DoctorHealRunTransition end.*/

    /*Doctor.DoctorTransition.DoctorHealTransition start.*/
    Bridge.define("Doctor.DoctorTransition.DoctorHealTransition", {
        inherits: [Transition],
        fields: {
            _transitionRange: 0,
            _rangeSpread: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorTransition.DoctorHealTransition#init", this ); }

                this._transitionRange = 0.2;
                this._rangeSpread = 0.2;
            }
        },
        methods: {
            /*Doctor.DoctorTransition.DoctorHealTransition.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorTransition.DoctorHealTransition#Start", this ); }

                this._transitionRange += UnityEngine.Random.Range$1(-this._rangeSpread, this._rangeSpread);
            },
            /*Doctor.DoctorTransition.DoctorHealTransition.Start end.*/

            /*Doctor.DoctorTransition.DoctorHealTransition.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorTransition.DoctorHealTransition#Update", this ); }

                if (UnityEngine.Vector2.FromVector3(this.transform.position.$clone()).sub( UnityEngine.Vector2.FromVector3(this.Target.transform.position) ).length() < this._transitionRange) {
                    this.NeedTransit = true;
                }
            },
            /*Doctor.DoctorTransition.DoctorHealTransition.Update end.*/

            /*Doctor.DoctorTransition.DoctorHealTransition.Enable start.*/
            Enable: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorTransition.DoctorHealTransition#Enable", this ); }

                throw new System.NotImplementedException.ctor();
            },
            /*Doctor.DoctorTransition.DoctorHealTransition.Enable end.*/


        }
    });
    /*Doctor.DoctorTransition.DoctorHealTransition end.*/

    /*Doctor.DoctorTransition.DoctorIdleTransition start.*/
    Bridge.define("Doctor.DoctorTransition.DoctorIdleTransition", {
        inherits: [Transition],
        methods: {
            /*Doctor.DoctorTransition.DoctorIdleTransition.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorTransition.DoctorIdleTransition#Update", this ); }

                if (!this.Doctor.IsBusy) {
                    this.NeedTransit = true;
                }
            },
            /*Doctor.DoctorTransition.DoctorIdleTransition.Update end.*/

            /*Doctor.DoctorTransition.DoctorIdleTransition.Enable start.*/
            Enable: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorTransition.DoctorIdleTransition#Enable", this ); }

                throw new System.NotImplementedException.ctor();
            },
            /*Doctor.DoctorTransition.DoctorIdleTransition.Enable end.*/


        }
    });
    /*Doctor.DoctorTransition.DoctorIdleTransition end.*/

    /*Doctor.DoctorTransition.DoctorMoveTransition start.*/
    Bridge.define("Doctor.DoctorTransition.DoctorMoveTransition", {
        inherits: [Transition],
        methods: {
            /*Doctor.DoctorTransition.DoctorMoveTransition.Enable start.*/
            Enable: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorTransition.DoctorMoveTransition#Enable", this ); }

                throw new System.NotImplementedException.ctor();
            },
            /*Doctor.DoctorTransition.DoctorMoveTransition.Enable end.*/

            /*Doctor.DoctorTransition.DoctorMoveTransition.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Doctor.DoctorTransition.DoctorMoveTransition#Update", this ); }

                this.Target = this.Doctor.Target;
                if (UnityEngine.MonoBehaviour.op_Inequality(this.Target, null)) {
                    this.NeedTransit = true;
                }
            },
            /*Doctor.DoctorTransition.DoctorMoveTransition.Update end.*/


        }
    });
    /*Doctor.DoctorTransition.DoctorMoveTransition end.*/

    /*Vampire.VampireStates.ExitState start.*/
    Bridge.define("Vampire.VampireStates.ExitState", {
        inherits: [State],
        fields: {
            _rotationSpeed: 0,
            _targetAngleZ: 0,
            _moveSpeed: 0,
            _targetTransform: null,
            _money: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Vampire.VampireStates.ExitState#init", this ); }

                this._rotationSpeed = 5.0;
                this._targetAngleZ = 0.0;
                this._moveSpeed = 2.0;
            }
        },
        methods: {
            /*Vampire.VampireStates.ExitState.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Vampire.VampireStates.ExitState#OnEnable", this ); }

                this.StartCoroutine$1(this.PerformExitSequence());
            },
            /*Vampire.VampireStates.ExitState.OnEnable end.*/

            /*Vampire.VampireStates.ExitState.PerformExitSequence start.*/
            PerformExitSequence: function () {
if ( TRACE ) { TRACE( "Vampire.VampireStates.ExitState#PerformExitSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    currentAngleZ,
                    currentRotation,
                    newAngleZ,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    currentAngleZ = this.transform.eulerAngles.z;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( Math.abs(UnityEngine.Mathf.DeltaAngle(currentAngleZ, this._targetAngleZ)) > 0.1 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    currentRotation = this.transform.eulerAngles.$clone();
                                        newAngleZ = UnityEngine.Mathf.LerpAngle(currentRotation.z, this._targetAngleZ, this._rotationSpeed * UnityEngine.Time.deltaTime);
                                        this.transform.eulerAngles = new pc.Vec3( currentRotation.x, currentRotation.y, newAngleZ );
                                        currentAngleZ = newAngleZ;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.transform.eulerAngles = new pc.Vec3( this.transform.eulerAngles.x, this.transform.eulerAngles.y, this._targetAngleZ );


                                        if (UnityEngine.Component.op_Inequality(this._targetTransform, null)) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 9;
                                        continue;
                                }
                                case 5: {
                                    if ( UnityEngine.Vector2.FromVector3(this.transform.position.$clone()).sub( UnityEngine.Vector2.FromVector3(this._targetTransform.position) ).length() > 0.1 ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    this.transform.position = UnityEngine.Vector3.FromVector2(pc.Vec2.moveTowards( UnityEngine.Vector2.FromVector3(this.transform.position), UnityEngine.Vector2.FromVector3(this._targetTransform.position), this._moveSpeed * UnityEngine.Time.deltaTime ));
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    this.transform.position = this._targetTransform.position.$clone();
                                        this._money.AddMoney(10);
                                    $step = 9;
                                    continue;
                                }
                                case 9: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Vampire.VampireStates.ExitState.PerformExitSequence end.*/


        }
    });
    /*Vampire.VampireStates.ExitState end.*/

    /*Vampire.VampireStates.HealCompleteState start.*/
    Bridge.define("Vampire.VampireStates.HealCompleteState", {
        inherits: [State],
        fields: {
            _vampire: null
        },
        methods: {
            /*Vampire.VampireStates.HealCompleteState.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Vampire.VampireStates.HealCompleteState#OnEnable", this ); }

                this._vampire = this.GetComponent(Vampire.Vampire);
                this.Invoke("Heal", 0.5);
            },
            /*Vampire.VampireStates.HealCompleteState.OnEnable end.*/

            /*Vampire.VampireStates.HealCompleteState.Heal start.*/
            Heal: function () {
if ( TRACE ) { TRACE( "Vampire.VampireStates.HealCompleteState#Heal", this ); }

                this._vampire.Heal();
                this.Target.OfReady();

            },
            /*Vampire.VampireStates.HealCompleteState.Heal end.*/


        }
    });
    /*Vampire.VampireStates.HealCompleteState end.*/

    /*Vampire.VampireStates.HealRunState start.*/
    Bridge.define("Vampire.VampireStates.HealRunState", {
        inherits: [State],
        fields: {
            _vampire: null
        },
        methods: {
            /*Vampire.VampireStates.HealRunState.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Vampire.VampireStates.HealRunState#OnEnable", this ); }

                this._vampire = this.GetComponent(Vampire.Vampire);
                this.Invoke("Rotate", 0.7);
            },
            /*Vampire.VampireStates.HealRunState.OnEnable end.*/

            /*Vampire.VampireStates.HealRunState.Rotate start.*/
            Rotate: function () {
if ( TRACE ) { TRACE( "Vampire.VampireStates.HealRunState#Rotate", this ); }

                this._vampire.StartToHeal();
            },
            /*Vampire.VampireStates.HealRunState.Rotate end.*/


        }
    });
    /*Vampire.VampireStates.HealRunState end.*/

    /*Vampire.VampireStates.HealState start.*/
    Bridge.define("Vampire.VampireStates.HealState", {
        inherits: [State],
        fields: {
            _rotationSpeed: 0,
            _targetAngleZ: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Vampire.VampireStates.HealState#init", this ); }

                this._rotationSpeed = 5.0;
                this._targetAngleZ = -70.0;
            }
        },
        methods: {
            /*Vampire.VampireStates.HealState.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Vampire.VampireStates.HealState#Update", this ); }

                var currentRotation = this.transform.eulerAngles.$clone();
                var newAngleZ = UnityEngine.Mathf.LerpAngle(currentRotation.z, this._targetAngleZ, this._rotationSpeed * UnityEngine.Time.deltaTime);
                this.transform.eulerAngles = new pc.Vec3( currentRotation.x, currentRotation.y, newAngleZ );

                if (Math.abs(UnityEngine.Mathf.DeltaAngle(currentRotation.z, this._targetAngleZ)) < 0.1) {
                    this.transform.eulerAngles = new pc.Vec3( currentRotation.x, currentRotation.y, this._targetAngleZ );
                    this.Target.OnReady();
                } else {
                }
            },
            /*Vampire.VampireStates.HealState.Update end.*/


        }
    });
    /*Vampire.VampireStates.HealState end.*/

    /*Vampire.VampireStates.IdleState start.*/
    Bridge.define("Vampire.VampireStates.IdleState", {
        inherits: [State],
        statics: {
            fields: {
                StateName: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Vampire.VampireStates.IdleState#init", this ); }

                    this.StateName = "Idle";
                }
            }
        },
        methods: {
            /*Vampire.VampireStates.IdleState.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Vampire.VampireStates.IdleState#Start", this ); }

                this.Animator.Play$2(Vampire.VampireStates.IdleState.StateName);
            },
            /*Vampire.VampireStates.IdleState.Start end.*/


        }
    });
    /*Vampire.VampireStates.IdleState end.*/

    /*Vampire.VampireStates.MoveState start.*/
    Bridge.define("Vampire.VampireStates.MoveState", {
        inherits: [State],
        fields: {
            _speed: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Vampire.VampireStates.MoveState#init", this ); }

                this._speed = 2.0;
            }
        },
        methods: {
            /*Vampire.VampireStates.MoveState.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Vampire.VampireStates.MoveState#Start", this ); }

                this.Animator.Play$2("WalkSimple");
            },
            /*Vampire.VampireStates.MoveState.Start end.*/

            /*Vampire.VampireStates.MoveState.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Vampire.VampireStates.MoveState#Update", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.Target, null)) {
                    this.transform.position = UnityEngine.Vector3.FromVector2(pc.Vec2.moveTowards( UnityEngine.Vector2.FromVector3(this.transform.position), UnityEngine.Vector2.FromVector3(this.Target.transform.position), this._speed * UnityEngine.Time.deltaTime ));

                }
            },
            /*Vampire.VampireStates.MoveState.Update end.*/


        }
    });
    /*Vampire.VampireStates.MoveState end.*/

    /*Vampire.VampireStates.RunState start.*/
    Bridge.define("Vampire.VampireStates.RunState", {
        inherits: [State]
    });
    /*Vampire.VampireStates.RunState end.*/

    /*Vampire.VampireTransitions.ExitTransition start.*/
    Bridge.define("Vampire.VampireTransitions.ExitTransition", {
        inherits: [Transition],
        methods: {
            /*Vampire.VampireTransitions.ExitTransition.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Vampire.VampireTransitions.ExitTransition#Start", this ); }

                this.Invoke("Exit", 0.5);
            },
            /*Vampire.VampireTransitions.ExitTransition.Start end.*/

            /*Vampire.VampireTransitions.ExitTransition.Exit start.*/
            Exit: function () {
if ( TRACE ) { TRACE( "Vampire.VampireTransitions.ExitTransition#Exit", this ); }

                this.NeedTransit = true;
                this.Target.EmptyBed();
                this.Target.HealComplete();
            },
            /*Vampire.VampireTransitions.ExitTransition.Exit end.*/

            /*Vampire.VampireTransitions.ExitTransition.Enable start.*/
            Enable: function () {
if ( TRACE ) { TRACE( "Vampire.VampireTransitions.ExitTransition#Enable", this ); }

                throw new System.NotImplementedException.ctor();
            },
            /*Vampire.VampireTransitions.ExitTransition.Enable end.*/


        }
    });
    /*Vampire.VampireTransitions.ExitTransition end.*/

    /*Vampire.VampireTransitions.HealCompleteTransition start.*/
    Bridge.define("Vampire.VampireTransitions.HealCompleteTransition", {
        inherits: [Transition],
        methods: {
            /*Vampire.VampireTransitions.HealCompleteTransition.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Vampire.VampireTransitions.HealCompleteTransition#Start", this ); }

                this.Invoke("Exit", 0.5);
            },
            /*Vampire.VampireTransitions.HealCompleteTransition.Start end.*/

            /*Vampire.VampireTransitions.HealCompleteTransition.Exit start.*/
            Exit: function () {
if ( TRACE ) { TRACE( "Vampire.VampireTransitions.HealCompleteTransition#Exit", this ); }

                this.NeedTransit = true;
                UnityEngine.Debug.Log(Bridge.box(this.Target.IsBusy, System.Boolean, System.Boolean.toString));
            },
            /*Vampire.VampireTransitions.HealCompleteTransition.Exit end.*/

            /*Vampire.VampireTransitions.HealCompleteTransition.Enable start.*/
            Enable: function () {
if ( TRACE ) { TRACE( "Vampire.VampireTransitions.HealCompleteTransition#Enable", this ); }

                throw new System.NotImplementedException.ctor();
            },
            /*Vampire.VampireTransitions.HealCompleteTransition.Enable end.*/


        }
    });
    /*Vampire.VampireTransitions.HealCompleteTransition end.*/

    /*Vampire.VampireTransitions.HealRunTransition start.*/
    Bridge.define("Vampire.VampireTransitions.HealRunTransition", {
        inherits: [Transition],
        methods: {
            /*Vampire.VampireTransitions.HealRunTransition.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Vampire.VampireTransitions.HealRunTransition#Update", this ); }

                if (this.Target.OnPlace && this.Target.IsReadyToHeal) {
                    this.NeedTransit = true;
                }
            },
            /*Vampire.VampireTransitions.HealRunTransition.Update end.*/

            /*Vampire.VampireTransitions.HealRunTransition.Enable start.*/
            Enable: function () {
if ( TRACE ) { TRACE( "Vampire.VampireTransitions.HealRunTransition#Enable", this ); }

                throw new System.NotImplementedException.ctor();
            },
            /*Vampire.VampireTransitions.HealRunTransition.Enable end.*/


        }
    });
    /*Vampire.VampireTransitions.HealRunTransition end.*/

    /*Vampire.VampireTransitions.HealTransition start.*/
    Bridge.define("Vampire.VampireTransitions.HealTransition", {
        inherits: [Transition],
        fields: {
            _transitionRange: 0,
            _rangeSpread: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Vampire.VampireTransitions.HealTransition#init", this ); }

                this._transitionRange = 0.1;
                this._rangeSpread = 0.1;
            }
        },
        methods: {
            /*Vampire.VampireTransitions.HealTransition.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Vampire.VampireTransitions.HealTransition#Start", this ); }

                this._transitionRange += UnityEngine.Random.Range$1(-this._rangeSpread, this._rangeSpread);
            },
            /*Vampire.VampireTransitions.HealTransition.Start end.*/

            /*Vampire.VampireTransitions.HealTransition.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Vampire.VampireTransitions.HealTransition#Update", this ); }

                if (UnityEngine.Vector2.FromVector3(this.transform.position.$clone()).sub( UnityEngine.Vector2.FromVector3(this.Target.transform.position) ).length() < this._transitionRange) {
                    this.Target.HealBed();
                    this.NeedTransit = true;
                }
            },
            /*Vampire.VampireTransitions.HealTransition.Update end.*/

            /*Vampire.VampireTransitions.HealTransition.Enable start.*/
            Enable: function () {
if ( TRACE ) { TRACE( "Vampire.VampireTransitions.HealTransition#Enable", this ); }


            },
            /*Vampire.VampireTransitions.HealTransition.Enable end.*/


        }
    });
    /*Vampire.VampireTransitions.HealTransition end.*/

    /*Vampire.VampireTransitions.IdleTransition start.*/
    Bridge.define("Vampire.VampireTransitions.IdleTransition", {
        inherits: [Transition],
        methods: {
            /*Vampire.VampireTransitions.IdleTransition.Enable start.*/
            Enable: function () {
if ( TRACE ) { TRACE( "Vampire.VampireTransitions.IdleTransition#Enable", this ); }


            },
            /*Vampire.VampireTransitions.IdleTransition.Enable end.*/


        }
    });
    /*Vampire.VampireTransitions.IdleTransition end.*/

    /*Vampire.VampireTransitions.MoveTransition start.*/
    Bridge.define("Vampire.VampireTransitions.MoveTransition", {
        inherits: [Transition],
        methods: {
            /*Vampire.VampireTransitions.MoveTransition.Enable start.*/
            Enable: function () {
if ( TRACE ) { TRACE( "Vampire.VampireTransitions.MoveTransition#Enable", this ); }
 },
            /*Vampire.VampireTransitions.MoveTransition.Enable end.*/

            /*Vampire.VampireTransitions.MoveTransition.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Vampire.VampireTransitions.MoveTransition#Update", this ); }

                this.Target = this.Vampire.Target;
                if (UnityEngine.MonoBehaviour.op_Inequality(this.Target, null) && !this.Target.IsBusy) {
                    this.NeedTransit = true;
                    this.Target.TakeABed();
                }
            },
            /*Vampire.VampireTransitions.MoveTransition.Update end.*/


        }
    });
    /*Vampire.VampireTransitions.MoveTransition end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","System.Collections.Generic","Vampire","Money","UnityEngine","Doctor","System.Collections","UnityEngine.UI","TMPro"];

    /*Bed start.*/
    $m("Bed", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DoctorOnPlace","t":8,"sn":"DoctorOnPlace","rt":$n[0].Void},{"a":2,"n":"EmptyBed","t":8,"sn":"EmptyBed","rt":$n[0].Void},{"a":2,"n":"HealBed","t":8,"sn":"HealBed","rt":$n[0].Void},{"a":2,"n":"HealComplete","t":8,"sn":"HealComplete","rt":$n[0].Void},{"a":2,"n":"OfReady","t":8,"sn":"OfReady","rt":$n[0].Void},{"a":2,"n":"OnReady","t":8,"sn":"OnReady","rt":$n[0].Void},{"a":2,"n":"TakeABed","t":8,"sn":"TakeABed","rt":$n[0].Void},{"a":2,"n":"IsBusy","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsBusy","t":8,"rt":$n[0].Boolean,"fg":"IsBusy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsBusy"},{"a":2,"n":"IsReadyToHeal","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsReadyToHeal","t":8,"rt":$n[0].Boolean,"fg":"IsReadyToHeal","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsReadyToHeal"},{"a":2,"n":"NeedToHeal","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_NeedToHeal","t":8,"rt":$n[0].Boolean,"fg":"NeedToHeal","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"NeedToHeal"},{"a":2,"n":"OnPlace","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_OnPlace","t":8,"rt":$n[0].Boolean,"fg":"OnPlace","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"OnPlace"},{"a":1,"n":"_isBusy","t":4,"rt":$n[0].Boolean,"sn":"_isBusy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isReadyToHeal","t":4,"rt":$n[0].Boolean,"sn":"_isReadyToHeal","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_needToHeal","t":4,"rt":$n[0].Boolean,"sn":"_needToHeal","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_onPlace","t":4,"rt":$n[0].Boolean,"sn":"_onPlace","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Bed end.*/

    /*Beds start.*/
    $m("Beds", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_beds","t":4,"rt":$n[1].List$1(Bed),"sn":"_beds"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_doctors","t":4,"rt":Doctors,"sn":"_doctors"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_vampires","t":4,"rt":$n[2].Vampires,"sn":"_vampires"}]}; }, $n);
    /*Beds end.*/

    /*Doctors start.*/
    $m("Doctors", function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GoToHeal","t":8,"pi":[{"n":"bed","pt":Bed,"ps":0}],"sn":"GoToHeal","rt":$n[0].Void,"p":[Bed]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_doctors","t":4,"rt":$n[1].List$1(Doctor.Doctor),"sn":"_doctors"}]}; }, $n);
    /*Doctors end.*/

    /*BuyController start.*/
    $m("BuyController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"BuyBed","t":8,"sn":"BuyBed","rt":$n[0].Void},{"a":1,"n":"BuyDoctor","t":8,"sn":"BuyDoctor","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_bedButton","t":4,"rt":$n[3].BuyButton,"sn":"_bedButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_beds","t":4,"rt":$n[1].List$1(UnityEngine.GameObject),"sn":"_beds"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_doctorButton","t":4,"rt":$n[3].BuyButton,"sn":"_doctorButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_doctors","t":4,"rt":$n[1].List$1(UnityEngine.GameObject),"sn":"_doctors"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_money","t":4,"rt":$n[3].MoneyConroller,"sn":"_money"},{"a":1,"n":"bedIndex","t":4,"rt":$n[0].Int32,"sn":"bedIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"doctorIndex","t":4,"rt":$n[0].Int32,"sn":"doctorIndex","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*BuyController end.*/

    /*State start.*/
    $m("State", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ChangeTarget","t":8,"pi":[{"n":"target","pt":Bed,"ps":0}],"sn":"ChangeTarget","rt":$n[0].Void,"p":[Bed]},{"a":2,"n":"Enter","t":8,"pi":[{"n":"animator","pt":$n[4].Animator,"ps":0},{"n":"bed","pt":Bed,"ps":1}],"sn":"Enter","rt":$n[0].Void,"p":[$n[4].Animator,Bed]},{"a":2,"n":"Exit","t":8,"sn":"Exit","rt":$n[0].Void},{"a":2,"n":"GetNextState","t":8,"sn":"GetNextState","rt":State},{"a":2,"n":"ReloadTarget","t":8,"sn":"ReloadTarget","rt":$n[0].Void},{"a":3,"n":"Animator","t":16,"rt":$n[4].Animator,"g":{"a":3,"n":"get_Animator","t":8,"rt":$n[4].Animator,"fg":"Animator"},"s":{"a":1,"n":"set_Animator","t":8,"p":[$n[4].Animator],"rt":$n[0].Void,"fs":"Animator"},"fn":"Animator"},{"a":3,"n":"Target","t":16,"rt":Bed,"g":{"a":3,"n":"get_Target","t":8,"rt":Bed,"fg":"Target"},"s":{"a":1,"n":"set_Target","t":8,"p":[Bed],"rt":$n[0].Void,"fs":"Target"},"fn":"Target"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_transitions","t":4,"rt":$n[1].List$1(Transition),"sn":"_transitions"},{"a":1,"backing":true,"n":"<Animator>k__BackingField","t":4,"rt":$n[4].Animator,"sn":"Animator"},{"a":1,"backing":true,"n":"<Target>k__BackingField","t":4,"rt":Bed,"sn":"Target"}]}; }, $n);
    /*State end.*/

    /*Transition start.*/
    $m("Transition", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ab":true,"a":2,"n":"Enable","t":8,"sn":"Enable","rt":$n[0].Void},{"a":2,"n":"Init","t":8,"pi":[{"n":"target","pt":Bed,"ps":0}],"sn":"Init","rt":$n[0].Void,"p":[Bed]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"NeedTransit","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_NeedTransit","t":8,"rt":$n[0].Boolean,"fg":"NeedTransit","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":3,"n":"set_NeedTransit","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"NeedTransit"},"fn":"NeedTransit"},{"a":2,"n":"TargetState","t":16,"rt":State,"g":{"a":2,"n":"get_TargetState","t":8,"rt":State,"fg":"TargetState"},"fn":"TargetState"},{"a":3,"n":"Doctor","t":4,"rt":$n[5].Doctor,"sn":"Doctor"},{"a":3,"n":"Target","t":4,"rt":Bed,"sn":"Target"},{"a":3,"n":"Vampire","t":4,"rt":$n[2].Vampire,"sn":"Vampire"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_targetState","t":4,"rt":State,"sn":"_targetState"},{"a":1,"backing":true,"n":"<NeedTransit>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"NeedTransit","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Transition end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Vampire.Vampire start.*/
    $m("Vampire.Vampire", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Heal","t":8,"sn":"Heal","rt":$n[0].Void},{"a":2,"n":"StartToHeal","t":8,"sn":"StartToHeal","rt":$n[0].Void},{"a":2,"n":"ToFirst","t":8,"pi":[{"n":"bed","pt":Bed,"ps":0}],"sn":"ToFirst","rt":$n[0].Void,"p":[Bed]},{"a":2,"n":"IsFirst","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsFirst","t":8,"rt":$n[0].Boolean,"fg":"IsFirst","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsFirst"},{"a":2,"n":"IsHealthy","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsHealthy","t":8,"rt":$n[0].Boolean,"fg":"IsHealthy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsHealthy"},{"a":1,"n":"Reward","t":16,"rt":$n[0].Int32,"g":{"a":1,"n":"get_Reward","t":8,"rt":$n[0].Int32,"fg":"Reward","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Reward"},{"a":2,"n":"Target","t":16,"rt":Bed,"g":{"a":2,"n":"get_Target","t":8,"rt":Bed,"fg":"Target"},"fn":"Target"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"ExitPoint","t":4,"rt":$n[4].Transform,"sn":"ExitPoint"},{"a":1,"n":"_isFirst","t":4,"rt":$n[0].Boolean,"sn":"_isFirst","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isHealthy","t":4,"rt":$n[0].Boolean,"sn":"_isHealthy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_renderer","t":4,"rt":$n[4].SpriteRenderer,"sn":"_renderer"},{"a":1,"n":"_reward","t":4,"rt":$n[0].Int32,"sn":"_reward","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_target","t":4,"rt":Bed,"sn":"_target"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"healSprite","t":4,"rt":$n[4].Sprite,"sn":"healSprite"}]}; }, $n);
    /*Vampire.Vampire end.*/

    /*Vampire.Vampires start.*/
    $m("Vampire.Vampires", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddVampire","t":8,"pi":[{"n":"vampire","pt":$n[2].Vampire,"ps":0}],"sn":"AddVampire","rt":$n[0].Void,"p":[$n[2].Vampire]},{"a":2,"n":"AssignBedToFirstAvailable","t":8,"pi":[{"n":"bed","pt":Bed,"ps":0}],"sn":"AssignBedToFirstAvailable","rt":$n[0].Void,"p":[Bed]},{"a":2,"n":"GetVampireCount","t":8,"sn":"GetVampireCount","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"MoveRemainingVampires","t":8,"sn":"MoveRemainingVampires","rt":$n[0].Void},{"a":1,"n":"SmoothMove","t":8,"pi":[{"n":"transformToMove","pt":$n[4].Transform,"ps":0},{"n":"targetPosition","pt":$n[4].Vector3,"ps":1}],"sn":"SmoothMove","rt":$n[6].IEnumerator,"p":[$n[4].Transform,$n[4].Vector3]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moveSpeed","t":4,"rt":$n[0].Single,"sn":"_moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_vampires","t":4,"rt":$n[1].List$1(Vampire.Vampire),"sn":"_vampires"},{"a":1,"n":"_waitingPositions","t":4,"rt":$n[1].Queue$1(UnityEngine.Vector3),"sn":"_waitingPositions"}]}; }, $n);
    /*Vampire.Vampires end.*/

    /*Vampire.VampireStateMachine start.*/
    $m("Vampire.VampireStateMachine", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.Animator)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Transit","t":8,"pi":[{"n":"nextState","pt":State,"ps":0}],"sn":"Transit","rt":$n[0].Void,"p":[State]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_animator","t":4,"rt":$n[4].Animator,"sn":"_animator"},{"a":1,"n":"_currentState","t":4,"rt":State,"sn":"_currentState"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_firstState","t":4,"rt":State,"sn":"_firstState"},{"a":1,"n":"_vampire","t":4,"rt":$n[2].Vampire,"sn":"_vampire"}]}; }, $n);
    /*Vampire.VampireStateMachine end.*/

    /*Vampire.VampireTransitions.ExitTransition start.*/
    $m("Vampire.VampireTransitions.ExitTransition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Enable","t":8,"sn":"Enable","rt":$n[0].Void},{"a":1,"n":"Exit","t":8,"sn":"Exit","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void}]}; }, $n);
    /*Vampire.VampireTransitions.ExitTransition end.*/

    /*Vampire.VampireTransitions.HealCompleteTransition start.*/
    $m("Vampire.VampireTransitions.HealCompleteTransition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Enable","t":8,"sn":"Enable","rt":$n[0].Void},{"a":1,"n":"Exit","t":8,"sn":"Exit","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void}]}; }, $n);
    /*Vampire.VampireTransitions.HealCompleteTransition end.*/

    /*Vampire.VampireTransitions.HealRunTransition start.*/
    $m("Vampire.VampireTransitions.HealRunTransition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Enable","t":8,"sn":"Enable","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void}]}; }, $n);
    /*Vampire.VampireTransitions.HealRunTransition end.*/

    /*Vampire.VampireTransitions.HealTransition start.*/
    $m("Vampire.VampireTransitions.HealTransition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Enable","t":8,"sn":"Enable","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_rangeSpread","t":4,"rt":$n[0].Single,"sn":"_rangeSpread","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_transitionRange","t":4,"rt":$n[0].Single,"sn":"_transitionRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Vampire.VampireTransitions.HealTransition end.*/

    /*Vampire.VampireTransitions.IdleTransition start.*/
    $m("Vampire.VampireTransitions.IdleTransition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Enable","t":8,"sn":"Enable","rt":$n[0].Void}]}; }, $n);
    /*Vampire.VampireTransitions.IdleTransition end.*/

    /*Vampire.VampireTransitions.MoveTransition start.*/
    $m("Vampire.VampireTransitions.MoveTransition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Enable","t":8,"sn":"Enable","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void}]}; }, $n);
    /*Vampire.VampireTransitions.MoveTransition end.*/

    /*Vampire.VampireStates.ExitState start.*/
    $m("Vampire.VampireStates.ExitState", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"PerformExitSequence","t":8,"sn":"PerformExitSequence","rt":$n[6].IEnumerator},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_money","t":4,"rt":$n[3].MoneyConroller,"sn":"_money"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moveSpeed","t":4,"rt":$n[0].Single,"sn":"_moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_rotationSpeed","t":4,"rt":$n[0].Single,"sn":"_rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_targetAngleZ","t":4,"rt":$n[0].Single,"sn":"_targetAngleZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_targetTransform","t":4,"rt":$n[4].Transform,"sn":"_targetTransform"}]}; }, $n);
    /*Vampire.VampireStates.ExitState end.*/

    /*Vampire.VampireStates.HealCompleteState start.*/
    $m("Vampire.VampireStates.HealCompleteState", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Heal","t":8,"sn":"Heal","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"_vampire","t":4,"rt":$n[2].Vampire,"sn":"_vampire"}]}; }, $n);
    /*Vampire.VampireStates.HealCompleteState end.*/

    /*Vampire.VampireStates.HealRunState start.*/
    $m("Vampire.VampireStates.HealRunState", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"Rotate","t":8,"sn":"Rotate","rt":$n[0].Void},{"a":1,"n":"_vampire","t":4,"rt":$n[2].Vampire,"sn":"_vampire"}]}; }, $n);
    /*Vampire.VampireStates.HealRunState end.*/

    /*Vampire.VampireStates.HealState start.*/
    $m("Vampire.VampireStates.HealState", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_rotationSpeed","t":4,"rt":$n[0].Single,"sn":"_rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_targetAngleZ","t":4,"rt":$n[0].Single,"sn":"_targetAngleZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Vampire.VampireStates.HealState end.*/

    /*Vampire.VampireStates.IdleState start.*/
    $m("Vampire.VampireStates.IdleState", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StateName","is":true,"t":4,"rt":$n[0].String,"sn":"StateName"}]}; }, $n);
    /*Vampire.VampireStates.IdleState end.*/

    /*Vampire.VampireStates.MoveState start.*/
    $m("Vampire.VampireStates.MoveState", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_speed","t":4,"rt":$n[0].Single,"sn":"_speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Vampire.VampireStates.MoveState end.*/

    /*Vampire.VampireStates.RunState start.*/
    $m("Vampire.VampireStates.RunState", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*Vampire.VampireStates.RunState end.*/

    /*Money.BuyButton start.*/
    $m("Money.BuyButton", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"IncreasePrice","t":8,"sn":"IncreasePrice","rt":$n[0].Void},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"onClickCallback","pt":Function,"ps":0}],"sn":"Initialize","rt":$n[0].Void,"p":[Function]},{"a":1,"n":"UpdatePriceText","t":8,"sn":"UpdatePriceText","rt":$n[0].Void},{"a":2,"n":"CurrentPrice","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_CurrentPrice","t":8,"rt":$n[0].Int32,"fg":"CurrentPrice","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"CurrentPrice"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_button","t":4,"rt":$n[7].Button,"sn":"_button"},{"a":1,"n":"_currentPrice","t":4,"rt":$n[0].Int32,"sn":"_currentPrice","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_priceStep","t":4,"rt":$n[0].Int32,"sn":"_priceStep","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_priceText","t":4,"rt":$n[8].TextMeshProUGUI,"sn":"_priceText"}]}; }, $n);
    /*Money.BuyButton end.*/

    /*Money.MoneyConroller start.*/
    $m("Money.MoneyConroller", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddMoney","t":8,"pi":[{"n":"money","pt":$n[0].Int32,"ps":0}],"sn":"AddMoney","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"RemoveMoney","t":8,"pi":[{"n":"money","pt":$n[0].Int32,"ps":0}],"sn":"RemoveMoney","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TryToBuy","t":8,"pi":[{"n":"money","pt":$n[0].Int32,"ps":0}],"sn":"TryToBuy","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_money","t":4,"rt":$n[0].Int32,"sn":"_money","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moneyUI","t":4,"rt":$n[3].MoneyUI,"sn":"moneyUI"}]}; }, $n);
    /*Money.MoneyConroller end.*/

    /*Money.MoneyUI start.*/
    $m("Money.MoneyUI", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"UpdateText","t":8,"pi":[{"n":"money","pt":$n[0].Int32,"ps":0}],"sn":"UpdateText","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"_moneyText","t":4,"rt":$n[8].TextMeshProUGUI,"sn":"_moneyText"}]}; }, $n);
    /*Money.MoneyUI end.*/

    /*Doctor.Doctor start.*/
    $m("Doctor.Doctor", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CompleteHealing","t":8,"sn":"CompleteHealing","rt":$n[0].Void},{"a":2,"n":"ToHeal","t":8,"pi":[{"n":"bed","pt":Bed,"ps":0}],"sn":"ToHeal","rt":$n[0].Void,"p":[Bed]},{"a":2,"n":"IsBusy","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsBusy","t":8,"rt":$n[0].Boolean,"fg":"IsBusy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsBusy"},{"a":2,"n":"Target","t":16,"rt":Bed,"g":{"a":2,"n":"get_Target","t":8,"rt":Bed,"fg":"Target"},"fn":"Target"},{"a":1,"n":"_isBusy","t":4,"rt":$n[0].Boolean,"sn":"_isBusy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_target","t":4,"rt":Bed,"sn":"_target"}]}; }, $n);
    /*Doctor.Doctor end.*/

    /*Doctor.DoctorStateMachine start.*/
    $m("Doctor.DoctorStateMachine", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Transit","t":8,"pi":[{"n":"nextState","pt":State,"ps":0}],"sn":"Transit","rt":$n[0].Void,"p":[State]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_animator","t":4,"rt":$n[4].Animator,"sn":"_animator"},{"a":1,"n":"_currentState","t":4,"rt":State,"sn":"_currentState"},{"a":1,"n":"_doctor","t":4,"rt":$n[5].Doctor,"sn":"_doctor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_firstState","t":4,"rt":State,"sn":"_firstState"}]}; }, $n);
    /*Doctor.DoctorStateMachine end.*/

    /*Doctor.DoctorTransition.DoctorHealRunTransition start.*/
    $m("Doctor.DoctorTransition.DoctorHealRunTransition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Enable","t":8,"sn":"Enable","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void}]}; }, $n);
    /*Doctor.DoctorTransition.DoctorHealRunTransition end.*/

    /*Doctor.DoctorTransition.DoctorHealTransition start.*/
    $m("Doctor.DoctorTransition.DoctorHealTransition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Enable","t":8,"sn":"Enable","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_rangeSpread","t":4,"rt":$n[0].Single,"sn":"_rangeSpread","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_transitionRange","t":4,"rt":$n[0].Single,"sn":"_transitionRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Doctor.DoctorTransition.DoctorHealTransition end.*/

    /*Doctor.DoctorTransition.DoctorIdleTransition start.*/
    $m("Doctor.DoctorTransition.DoctorIdleTransition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Enable","t":8,"sn":"Enable","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void}]}; }, $n);
    /*Doctor.DoctorTransition.DoctorIdleTransition end.*/

    /*Doctor.DoctorTransition.DoctorMoveTransition start.*/
    $m("Doctor.DoctorTransition.DoctorMoveTransition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Enable","t":8,"sn":"Enable","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void}]}; }, $n);
    /*Doctor.DoctorTransition.DoctorMoveTransition end.*/

    /*Doctor.DoctorState.DoctorHealState start.*/
    $m("Doctor.DoctorState.DoctorHealState", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"StateName","is":true,"t":4,"rt":$n[0].String,"sn":"StateName"}]}; }, $n);
    /*Doctor.DoctorState.DoctorHealState end.*/

    /*Doctor.DoctorState.DoctorIdleState start.*/
    $m("Doctor.DoctorState.DoctorIdleState", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StateName","is":true,"t":4,"rt":$n[0].String,"sn":"StateName"}]}; }, $n);
    /*Doctor.DoctorState.DoctorIdleState end.*/

    /*Doctor.DoctorState.DoctorMoveState start.*/
    $m("Doctor.DoctorState.DoctorMoveState", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"StateName","is":true,"t":4,"rt":$n[0].String,"sn":"StateName"},{"a":1,"n":"_speed","t":4,"rt":$n[0].Single,"sn":"_speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Doctor.DoctorState.DoctorMoveState end.*/

    }});
