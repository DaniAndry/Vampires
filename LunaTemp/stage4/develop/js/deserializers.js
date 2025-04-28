var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.JointSpring' )
  var i575 = data
  i574.spring = i575[0]
  i574.damper = i575[1]
  i574.targetPosition = i575[2]
  return i574
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.JointMotor' )
  var i577 = data
  i576.m_TargetVelocity = i577[0]
  i576.m_Force = i577[1]
  i576.m_FreeSpin = i577[2]
  return i576
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.JointLimits' )
  var i579 = data
  i578.m_Min = i579[0]
  i578.m_Max = i579[1]
  i578.m_Bounciness = i579[2]
  i578.m_BounceMinVelocity = i579[3]
  i578.m_ContactDistance = i579[4]
  i578.minBounce = i579[5]
  i578.maxBounce = i579[6]
  return i578
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.JointDrive' )
  var i581 = data
  i580.m_PositionSpring = i581[0]
  i580.m_PositionDamper = i581[1]
  i580.m_MaximumForce = i581[2]
  i580.m_UseAcceleration = i581[3]
  return i580
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i583 = data
  i582.m_Spring = i583[0]
  i582.m_Damper = i583[1]
  return i582
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i585 = data
  i584.m_Limit = i585[0]
  i584.m_Bounciness = i585[1]
  i584.m_ContactDistance = i585[2]
  return i584
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i587 = data
  i586.m_ExtremumSlip = i587[0]
  i586.m_ExtremumValue = i587[1]
  i586.m_AsymptoteSlip = i587[2]
  i586.m_AsymptoteValue = i587[3]
  i586.m_Stiffness = i587[4]
  return i586
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i589 = data
  i588.m_LowerAngle = i589[0]
  i588.m_UpperAngle = i589[1]
  return i588
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i591 = data
  i590.m_MotorSpeed = i591[0]
  i590.m_MaximumMotorTorque = i591[1]
  return i590
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i593 = data
  i592.m_DampingRatio = i593[0]
  i592.m_Frequency = i593[1]
  i592.m_Angle = i593[2]
  return i592
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i595 = data
  i594.m_LowerTranslation = i595[0]
  i594.m_UpperTranslation = i595[1]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i596 = root || new pc.UnityMaterial()
  var i597 = data
  i596.name = i597[0]
  request.r(i597[1], i597[2], 0, i596, 'shader')
  i596.renderQueue = i597[3]
  i596.enableInstancing = !!i597[4]
  var i599 = i597[5]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i599[i + 0]) );
  }
  i596.floatParameters = i598
  var i601 = i597[6]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i601[i + 0]) );
  }
  i596.colorParameters = i600
  var i603 = i597[7]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i603[i + 0]) );
  }
  i596.vectorParameters = i602
  var i605 = i597[8]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i605[i + 0]) );
  }
  i596.textureParameters = i604
  var i607 = i597[9]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i607[i + 0]) );
  }
  i596.materialFlags = i606
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i611 = data
  i610.name = i611[0]
  i610.value = i611[1]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i615 = data
  i614.name = i615[0]
  i614.value = new pc.Color(i615[1], i615[2], i615[3], i615[4])
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i619 = data
  i618.name = i619[0]
  i618.value = new pc.Vec4( i619[1], i619[2], i619[3], i619[4] )
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i623 = data
  i622.name = i623[0]
  request.r(i623[1], i623[2], 0, i622, 'value')
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i627 = data
  i626.name = i627[0]
  i626.enabled = !!i627[1]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i629 = data
  i628.name = i629[0]
  i628.width = i629[1]
  i628.height = i629[2]
  i628.mipmapCount = i629[3]
  i628.anisoLevel = i629[4]
  i628.filterMode = i629[5]
  i628.hdr = !!i629[6]
  i628.format = i629[7]
  i628.wrapMode = i629[8]
  i628.alphaIsTransparency = !!i629[9]
  i628.alphaSource = i629[10]
  i628.graphicsFormat = i629[11]
  i628.sRGBTexture = !!i629[12]
  i628.desiredColorSpace = i629[13]
  i628.wrapU = i629[14]
  i628.wrapV = i629[15]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i631 = data
  i630.name = i631[0]
  i630.index = i631[1]
  i630.startup = !!i631[2]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i633 = data
  i632.position = new pc.Vec3( i633[0], i633[1], i633[2] )
  i632.scale = new pc.Vec3( i633[3], i633[4], i633[5] )
  i632.rotation = new pc.Quat(i633[6], i633[7], i633[8], i633[9])
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i635 = data
  i634.enabled = !!i635[0]
  i634.aspect = i635[1]
  i634.orthographic = !!i635[2]
  i634.orthographicSize = i635[3]
  i634.backgroundColor = new pc.Color(i635[4], i635[5], i635[6], i635[7])
  i634.nearClipPlane = i635[8]
  i634.farClipPlane = i635[9]
  i634.fieldOfView = i635[10]
  i634.depth = i635[11]
  i634.clearFlags = i635[12]
  i634.cullingMask = i635[13]
  i634.rect = i635[14]
  request.r(i635[15], i635[16], 0, i634, 'targetTexture')
  i634.usePhysicalProperties = !!i635[17]
  i634.focalLength = i635[18]
  i634.sensorSize = new pc.Vec2( i635[19], i635[20] )
  i634.lensShift = new pc.Vec2( i635[21], i635[22] )
  i634.gateFit = i635[23]
  i634.commandBufferCount = i635[24]
  i634.cameraType = i635[25]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i637 = data
  i636.name = i637[0]
  i636.tagId = i637[1]
  i636.enabled = !!i637[2]
  i636.isStatic = !!i637[3]
  i636.layer = i637[4]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i639 = data
  i638.enabled = !!i639[0]
  request.r(i639[1], i639[2], 0, i638, 'sharedMaterial')
  var i641 = i639[3]
  var i640 = []
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 2, i640, '')
  }
  i638.sharedMaterials = i640
  i638.receiveShadows = !!i639[4]
  i638.shadowCastingMode = i639[5]
  i638.sortingLayerID = i639[6]
  i638.sortingOrder = i639[7]
  i638.lightmapIndex = i639[8]
  i638.lightmapSceneIndex = i639[9]
  i638.lightmapScaleOffset = new pc.Vec4( i639[10], i639[11], i639[12], i639[13] )
  i638.lightProbeUsage = i639[14]
  i638.reflectionProbeUsage = i639[15]
  i638.color = new pc.Color(i639[16], i639[17], i639[18], i639[19])
  request.r(i639[20], i639[21], 0, i638, 'sprite')
  i638.flipX = !!i639[22]
  i638.flipY = !!i639[23]
  i638.drawMode = i639[24]
  i638.size = new pc.Vec2( i639[25], i639[26] )
  i638.tileMode = i639[27]
  i638.adaptiveModeThreshold = i639[28]
  i638.maskInteraction = i639[29]
  i638.spriteSortPoint = i639[30]
  return i638
}

Deserializers["Beds"] = function (request, data, root) {
  var i644 = root || request.c( 'Beds' )
  var i645 = data
  var i647 = i645[0]
  var i646 = new (System.Collections.Generic.List$1(Bridge.ns('Bed')))
  for(var i = 0; i < i647.length; i += 2) {
  request.r(i647[i + 0], i647[i + 1], 1, i646, '')
  }
  i644._beds = i646
  request.r(i645[1], i645[2], 0, i644, '_vampires')
  request.r(i645[3], i645[4], 0, i644, '_doctors')
  return i644
}

Deserializers["Bed"] = function (request, data, root) {
  var i650 = root || request.c( 'Bed' )
  var i651 = data
  i650._isBusy = !!i651[0]
  i650._needToHeal = !!i651[1]
  i650._onPlace = !!i651[2]
  i650._isReadyToHeal = !!i651[3]
  return i650
}

Deserializers["Doctor.DoctorState.BedRoute"] = function (request, data, root) {
  var i652 = root || request.c( 'Doctor.DoctorState.BedRoute' )
  var i653 = data
  var i655 = i653[0]
  var i654 = []
  for(var i = 0; i < i655.length; i += 2) {
  request.r(i655[i + 0], i655[i + 1], 2, i654, '')
  }
  i652.DoctorWaypoints = i654
  var i657 = i653[1]
  var i656 = []
  for(var i = 0; i < i657.length; i += 2) {
  request.r(i657[i + 0], i657[i + 1], 2, i656, '')
  }
  i652.VampireWaypoints = i656
  return i652
}

Deserializers["Vampire.Vampires"] = function (request, data, root) {
  var i660 = root || request.c( 'Vampire.Vampires' )
  var i661 = data
  var i663 = i661[0]
  var i662 = new (System.Collections.Generic.List$1(Bridge.ns('Vampire.Vampire')))
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 1, i662, '')
  }
  i660._vampires = i662
  i660._moveSpeed = i661[1]
  return i660
}

Deserializers["Vampire.Vampire"] = function (request, data, root) {
  var i666 = root || request.c( 'Vampire.Vampire' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'ExitPoint')
  request.r(i667[2], i667[3], 0, i666, 'healSprite')
  request.r(i667[4], i667[5], 0, i666, '_target')
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'animatorController')
  request.r(i669[2], i669[3], 0, i668, 'avatar')
  i668.updateMode = i669[4]
  i668.hasTransformHierarchy = !!i669[5]
  i668.applyRootMotion = !!i669[6]
  var i671 = i669[7]
  var i670 = []
  for(var i = 0; i < i671.length; i += 2) {
  request.r(i671[i + 0], i671[i + 1], 2, i670, '')
  }
  i668.humanBones = i670
  i668.enabled = !!i669[8]
  return i668
}

Deserializers["Vampire.VampireStateMachine"] = function (request, data, root) {
  var i672 = root || request.c( 'Vampire.VampireStateMachine' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, '_firstState')
  return i672
}

Deserializers["Vampire.VampireStates.IdleState"] = function (request, data, root) {
  var i674 = root || request.c( 'Vampire.VampireStates.IdleState' )
  var i675 = data
  var i677 = i675[0]
  var i676 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i677.length; i += 2) {
  request.r(i677[i + 0], i677[i + 1], 1, i676, '')
  }
  i674._transitions = i676
  return i674
}

Deserializers["Vampire.VampireStates.ExitState"] = function (request, data, root) {
  var i680 = root || request.c( 'Vampire.VampireStates.ExitState' )
  var i681 = data
  i680._rotationSpeed = i681[0]
  i680._targetAngleZ = i681[1]
  i680._moveSpeed = i681[2]
  request.r(i681[3], i681[4], 0, i680, '_targetTransform')
  request.r(i681[5], i681[6], 0, i680, '_money')
  var i683 = i681[7]
  var i682 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i683.length; i += 2) {
  request.r(i683[i + 0], i683[i + 1], 1, i682, '')
  }
  i680._transitions = i682
  return i680
}

Deserializers["Vampire.VampireStates.HealState"] = function (request, data, root) {
  var i684 = root || request.c( 'Vampire.VampireStates.HealState' )
  var i685 = data
  i684._rotationSpeed = i685[0]
  var i687 = i685[1]
  var i686 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i687.length; i += 2) {
  request.r(i687[i + 0], i687[i + 1], 1, i686, '')
  }
  i684._transitions = i686
  return i684
}

Deserializers["Vampire.VampireStates.RunState"] = function (request, data, root) {
  var i688 = root || request.c( 'Vampire.VampireStates.RunState' )
  var i689 = data
  var i691 = i689[0]
  var i690 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i691.length; i += 2) {
  request.r(i691[i + 0], i691[i + 1], 1, i690, '')
  }
  i688._transitions = i690
  return i688
}

Deserializers["Vampire.VampireStates.HealRunState"] = function (request, data, root) {
  var i692 = root || request.c( 'Vampire.VampireStates.HealRunState' )
  var i693 = data
  var i695 = i693[0]
  var i694 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 1, i694, '')
  }
  i692._transitions = i694
  return i692
}

Deserializers["Vampire.VampireStates.HealCompleteState"] = function (request, data, root) {
  var i696 = root || request.c( 'Vampire.VampireStates.HealCompleteState' )
  var i697 = data
  var i699 = i697[0]
  var i698 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 1, i698, '')
  }
  i696._transitions = i698
  return i696
}

Deserializers["Vampire.VampireTransitions.IdleTransition"] = function (request, data, root) {
  var i700 = root || request.c( 'Vampire.VampireTransitions.IdleTransition' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, '_targetState')
  return i700
}

Deserializers["Vampire.VampireTransitions.MoveTransition"] = function (request, data, root) {
  var i702 = root || request.c( 'Vampire.VampireTransitions.MoveTransition' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, '_targetState')
  return i702
}

Deserializers["Vampire.VampireTransitions.HealTransition"] = function (request, data, root) {
  var i704 = root || request.c( 'Vampire.VampireTransitions.HealTransition' )
  var i705 = data
  i704._transitionRange = i705[0]
  i704._rangeSpread = i705[1]
  request.r(i705[2], i705[3], 0, i704, '_targetState')
  return i704
}

Deserializers["Vampire.VampireTransitions.HealRunTransition"] = function (request, data, root) {
  var i706 = root || request.c( 'Vampire.VampireTransitions.HealRunTransition' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, '_targetState')
  return i706
}

Deserializers["Vampire.VampireTransitions.ExitTransition"] = function (request, data, root) {
  var i708 = root || request.c( 'Vampire.VampireTransitions.ExitTransition' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, '_targetState')
  return i708
}

Deserializers["Vampire.VampireStates.MoveState"] = function (request, data, root) {
  var i710 = root || request.c( 'Vampire.VampireStates.MoveState' )
  var i711 = data
  var i713 = i711[0]
  var i712 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 1, i712, '')
  }
  i710._transitions = i712
  return i710
}

Deserializers["Vampire.VampireTransitions.HealCompleteTransition"] = function (request, data, root) {
  var i714 = root || request.c( 'Vampire.VampireTransitions.HealCompleteTransition' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, '_targetState')
  return i714
}

Deserializers["Doctors"] = function (request, data, root) {
  var i716 = root || request.c( 'Doctors' )
  var i717 = data
  var i719 = i717[0]
  var i718 = new (System.Collections.Generic.List$1(Bridge.ns('Doctor.Doctor')))
  for(var i = 0; i < i719.length; i += 2) {
  request.r(i719[i + 0], i719[i + 1], 1, i718, '')
  }
  i716._doctors = i718
  return i716
}

Deserializers["Doctor.Doctor"] = function (request, data, root) {
  var i722 = root || request.c( 'Doctor.Doctor' )
  var i723 = data
  i722._isBusy = !!i723[0]
  return i722
}

Deserializers["Doctor.DoctorStateMachine"] = function (request, data, root) {
  var i724 = root || request.c( 'Doctor.DoctorStateMachine' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, '_firstState')
  return i724
}

Deserializers["Doctor.DoctorState.DoctorIdleState"] = function (request, data, root) {
  var i726 = root || request.c( 'Doctor.DoctorState.DoctorIdleState' )
  var i727 = data
  var i729 = i727[0]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 1, i728, '')
  }
  i726._transitions = i728
  return i726
}

Deserializers["Doctor.DoctorState.DoctorMoveState"] = function (request, data, root) {
  var i730 = root || request.c( 'Doctor.DoctorState.DoctorMoveState' )
  var i731 = data
  var i733 = i731[0]
  var i732 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i733.length; i += 2) {
  request.r(i733[i + 0], i733[i + 1], 1, i732, '')
  }
  i730._transitions = i732
  return i730
}

Deserializers["Doctor.DoctorState.DoctorHealState"] = function (request, data, root) {
  var i734 = root || request.c( 'Doctor.DoctorState.DoctorHealState' )
  var i735 = data
  var i737 = i735[0]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 1, i736, '')
  }
  i734._transitions = i736
  return i734
}

Deserializers["Doctor.DoctorTransition.DoctorMoveTransition"] = function (request, data, root) {
  var i738 = root || request.c( 'Doctor.DoctorTransition.DoctorMoveTransition' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, '_targetState')
  return i738
}

Deserializers["Doctor.DoctorTransition.DoctorHealTransition"] = function (request, data, root) {
  var i740 = root || request.c( 'Doctor.DoctorTransition.DoctorHealTransition' )
  var i741 = data
  i740._transitionRange = i741[0]
  i740._rangeSpread = i741[1]
  request.r(i741[2], i741[3], 0, i740, '_targetState')
  return i740
}

Deserializers["Doctor.DoctorTransition.DoctorHealRunTransition"] = function (request, data, root) {
  var i742 = root || request.c( 'Doctor.DoctorTransition.DoctorHealRunTransition' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, '_targetState')
  return i742
}

Deserializers["Money.MoneyConroller"] = function (request, data, root) {
  var i744 = root || request.c( 'Money.MoneyConroller' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'moneyUI')
  return i744
}

Deserializers["BuyController"] = function (request, data, root) {
  var i746 = root || request.c( 'BuyController' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, '_money')
  request.r(i747[2], i747[3], 0, i746, '_doctorButton')
  request.r(i747[4], i747[5], 0, i746, '_bedButton')
  var i749 = i747[6]
  var i748 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 1, i748, '')
  }
  i746._doctors = i748
  var i751 = i747[7]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 1, i750, '')
  }
  i746._beds = i750
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i755 = data
  i754.pivot = new pc.Vec2( i755[0], i755[1] )
  i754.anchorMin = new pc.Vec2( i755[2], i755[3] )
  i754.anchorMax = new pc.Vec2( i755[4], i755[5] )
  i754.sizeDelta = new pc.Vec2( i755[6], i755[7] )
  i754.anchoredPosition3D = new pc.Vec3( i755[8], i755[9], i755[10] )
  i754.rotation = new pc.Quat(i755[11], i755[12], i755[13], i755[14])
  i754.scale = new pc.Vec3( i755[15], i755[16], i755[17] )
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i757 = data
  i756.enabled = !!i757[0]
  i756.planeDistance = i757[1]
  i756.referencePixelsPerUnit = i757[2]
  i756.isFallbackOverlay = !!i757[3]
  i756.renderMode = i757[4]
  i756.renderOrder = i757[5]
  i756.sortingLayerName = i757[6]
  i756.sortingOrder = i757[7]
  i756.scaleFactor = i757[8]
  request.r(i757[9], i757[10], 0, i756, 'worldCamera')
  i756.overrideSorting = !!i757[11]
  i756.pixelPerfect = !!i757[12]
  i756.targetDisplay = i757[13]
  i756.overridePixelPerfect = !!i757[14]
  return i756
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i759 = data
  i758.m_UiScaleMode = i759[0]
  i758.m_ReferencePixelsPerUnit = i759[1]
  i758.m_ScaleFactor = i759[2]
  i758.m_ReferenceResolution = new pc.Vec2( i759[3], i759[4] )
  i758.m_ScreenMatchMode = i759[5]
  i758.m_MatchWidthOrHeight = i759[6]
  i758.m_PhysicalUnit = i759[7]
  i758.m_FallbackScreenDPI = i759[8]
  i758.m_DefaultSpriteDPI = i759[9]
  i758.m_DynamicPixelsPerUnit = i759[10]
  i758.m_PresetInfoIsWorld = !!i759[11]
  return i758
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i761 = data
  i760.m_IgnoreReversedGraphics = !!i761[0]
  i760.m_BlockingObjects = i761[1]
  i760.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i761[2] )
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i763 = data
  i762.cullTransparentMesh = !!i763[0]
  return i762
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.Image' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'm_Sprite')
  i764.m_Type = i765[2]
  i764.m_PreserveAspect = !!i765[3]
  i764.m_FillCenter = !!i765[4]
  i764.m_FillMethod = i765[5]
  i764.m_FillAmount = i765[6]
  i764.m_FillClockwise = !!i765[7]
  i764.m_FillOrigin = i765[8]
  i764.m_UseSpriteMesh = !!i765[9]
  i764.m_PixelsPerUnitMultiplier = i765[10]
  request.r(i765[11], i765[12], 0, i764, 'm_Material')
  i764.m_Maskable = !!i765[13]
  i764.m_Color = new pc.Color(i765[14], i765[15], i765[16], i765[17])
  i764.m_RaycastTarget = !!i765[18]
  i764.m_RaycastPadding = new pc.Vec4( i765[19], i765[20], i765[21], i765[22] )
  return i764
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i766 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i767 = data
  i766.m_hasFontAssetChanged = !!i767[0]
  request.r(i767[1], i767[2], 0, i766, 'm_baseMaterial')
  i766.m_maskOffset = new pc.Vec4( i767[3], i767[4], i767[5], i767[6] )
  i766.m_text = i767[7]
  i766.m_isRightToLeft = !!i767[8]
  request.r(i767[9], i767[10], 0, i766, 'm_fontAsset')
  request.r(i767[11], i767[12], 0, i766, 'm_sharedMaterial')
  var i769 = i767[13]
  var i768 = []
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 2, i768, '')
  }
  i766.m_fontSharedMaterials = i768
  request.r(i767[14], i767[15], 0, i766, 'm_fontMaterial')
  var i771 = i767[16]
  var i770 = []
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 2, i770, '')
  }
  i766.m_fontMaterials = i770
  i766.m_fontColor32 = UnityEngine.Color32.ConstructColor(i767[17], i767[18], i767[19], i767[20])
  i766.m_fontColor = new pc.Color(i767[21], i767[22], i767[23], i767[24])
  i766.m_enableVertexGradient = !!i767[25]
  i766.m_colorMode = i767[26]
  i766.m_fontColorGradient = request.d('TMPro.VertexGradient', i767[27], i766.m_fontColorGradient)
  request.r(i767[28], i767[29], 0, i766, 'm_fontColorGradientPreset')
  request.r(i767[30], i767[31], 0, i766, 'm_spriteAsset')
  i766.m_tintAllSprites = !!i767[32]
  request.r(i767[33], i767[34], 0, i766, 'm_StyleSheet')
  i766.m_TextStyleHashCode = i767[35]
  i766.m_overrideHtmlColors = !!i767[36]
  i766.m_faceColor = UnityEngine.Color32.ConstructColor(i767[37], i767[38], i767[39], i767[40])
  i766.m_fontSize = i767[41]
  i766.m_fontSizeBase = i767[42]
  i766.m_fontWeight = i767[43]
  i766.m_enableAutoSizing = !!i767[44]
  i766.m_fontSizeMin = i767[45]
  i766.m_fontSizeMax = i767[46]
  i766.m_fontStyle = i767[47]
  i766.m_HorizontalAlignment = i767[48]
  i766.m_VerticalAlignment = i767[49]
  i766.m_textAlignment = i767[50]
  i766.m_characterSpacing = i767[51]
  i766.m_wordSpacing = i767[52]
  i766.m_lineSpacing = i767[53]
  i766.m_lineSpacingMax = i767[54]
  i766.m_paragraphSpacing = i767[55]
  i766.m_charWidthMaxAdj = i767[56]
  i766.m_enableWordWrapping = !!i767[57]
  i766.m_wordWrappingRatios = i767[58]
  i766.m_overflowMode = i767[59]
  request.r(i767[60], i767[61], 0, i766, 'm_linkedTextComponent')
  request.r(i767[62], i767[63], 0, i766, 'parentLinkedComponent')
  i766.m_enableKerning = !!i767[64]
  i766.m_enableExtraPadding = !!i767[65]
  i766.checkPaddingRequired = !!i767[66]
  i766.m_isRichText = !!i767[67]
  i766.m_parseCtrlCharacters = !!i767[68]
  i766.m_isOrthographic = !!i767[69]
  i766.m_isCullingEnabled = !!i767[70]
  i766.m_horizontalMapping = i767[71]
  i766.m_verticalMapping = i767[72]
  i766.m_uvLineOffset = i767[73]
  i766.m_geometrySortingOrder = i767[74]
  i766.m_IsTextObjectScaleStatic = !!i767[75]
  i766.m_VertexBufferAutoSizeReduction = !!i767[76]
  i766.m_useMaxVisibleDescender = !!i767[77]
  i766.m_pageToDisplay = i767[78]
  i766.m_margin = new pc.Vec4( i767[79], i767[80], i767[81], i767[82] )
  i766.m_isUsingLegacyAnimationComponent = !!i767[83]
  i766.m_isVolumetricText = !!i767[84]
  request.r(i767[85], i767[86], 0, i766, 'm_Material')
  i766.m_Maskable = !!i767[87]
  i766.m_Color = new pc.Color(i767[88], i767[89], i767[90], i767[91])
  i766.m_RaycastTarget = !!i767[92]
  i766.m_RaycastPadding = new pc.Vec4( i767[93], i767[94], i767[95], i767[96] )
  return i766
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i772 = root || request.c( 'TMPro.VertexGradient' )
  var i773 = data
  i772.topLeft = new pc.Color(i773[0], i773[1], i773[2], i773[3])
  i772.topRight = new pc.Color(i773[4], i773[5], i773[6], i773[7])
  i772.bottomLeft = new pc.Color(i773[8], i773[9], i773[10], i773[11])
  i772.bottomRight = new pc.Color(i773[12], i773[13], i773[14], i773[15])
  return i772
}

Deserializers["Money.MoneyUI"] = function (request, data, root) {
  var i774 = root || request.c( 'Money.MoneyUI' )
  var i775 = data
  return i774
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.UI.Button' )
  var i777 = data
  i776.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i777[0], i776.m_OnClick)
  i776.m_Navigation = request.d('UnityEngine.UI.Navigation', i777[1], i776.m_Navigation)
  i776.m_Transition = i777[2]
  i776.m_Colors = request.d('UnityEngine.UI.ColorBlock', i777[3], i776.m_Colors)
  i776.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i777[4], i776.m_SpriteState)
  i776.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i777[5], i776.m_AnimationTriggers)
  i776.m_Interactable = !!i777[6]
  request.r(i777[7], i777[8], 0, i776, 'm_TargetGraphic')
  return i776
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i779 = data
  i778.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i779[0], i778.m_PersistentCalls)
  return i778
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i781 = data
  var i783 = i781[0]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('UnityEngine.Events.PersistentCall', i783[i + 0]));
  }
  i780.m_Calls = i782
  return i780
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'm_Target')
  i786.m_TargetAssemblyTypeName = i787[2]
  i786.m_MethodName = i787[3]
  i786.m_Mode = i787[4]
  i786.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i787[5], i786.m_Arguments)
  i786.m_CallState = i787[6]
  return i786
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i789 = data
  i788.m_Mode = i789[0]
  i788.m_WrapAround = !!i789[1]
  request.r(i789[2], i789[3], 0, i788, 'm_SelectOnUp')
  request.r(i789[4], i789[5], 0, i788, 'm_SelectOnDown')
  request.r(i789[6], i789[7], 0, i788, 'm_SelectOnLeft')
  request.r(i789[8], i789[9], 0, i788, 'm_SelectOnRight')
  return i788
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i791 = data
  i790.m_NormalColor = new pc.Color(i791[0], i791[1], i791[2], i791[3])
  i790.m_HighlightedColor = new pc.Color(i791[4], i791[5], i791[6], i791[7])
  i790.m_PressedColor = new pc.Color(i791[8], i791[9], i791[10], i791[11])
  i790.m_SelectedColor = new pc.Color(i791[12], i791[13], i791[14], i791[15])
  i790.m_DisabledColor = new pc.Color(i791[16], i791[17], i791[18], i791[19])
  i790.m_ColorMultiplier = i791[20]
  i790.m_FadeDuration = i791[21]
  return i790
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'm_HighlightedSprite')
  request.r(i793[2], i793[3], 0, i792, 'm_PressedSprite')
  request.r(i793[4], i793[5], 0, i792, 'm_SelectedSprite')
  request.r(i793[6], i793[7], 0, i792, 'm_DisabledSprite')
  return i792
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i795 = data
  i794.m_NormalTrigger = i795[0]
  i794.m_HighlightedTrigger = i795[1]
  i794.m_PressedTrigger = i795[2]
  i794.m_SelectedTrigger = i795[3]
  i794.m_DisabledTrigger = i795[4]
  return i794
}

Deserializers["Money.BuyButton"] = function (request, data, root) {
  var i796 = root || request.c( 'Money.BuyButton' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, '_priceText')
  request.r(i797[2], i797[3], 0, i796, '_button')
  return i796
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'm_FirstSelected')
  i798.m_sendNavigationEvents = !!i799[2]
  i798.m_DragThreshold = i799[3]
  return i798
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i801 = data
  i800.m_HorizontalAxis = i801[0]
  i800.m_VerticalAxis = i801[1]
  i800.m_SubmitButton = i801[2]
  i800.m_CancelButton = i801[3]
  i800.m_InputActionsPerSecond = i801[4]
  i800.m_RepeatDelay = i801[5]
  i800.m_ForceModuleActive = !!i801[6]
  i800.m_SendPointerHoverToParent = !!i801[7]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i803 = data
  i802.ambientIntensity = i803[0]
  i802.reflectionIntensity = i803[1]
  i802.ambientMode = i803[2]
  i802.ambientLight = new pc.Color(i803[3], i803[4], i803[5], i803[6])
  i802.ambientSkyColor = new pc.Color(i803[7], i803[8], i803[9], i803[10])
  i802.ambientGroundColor = new pc.Color(i803[11], i803[12], i803[13], i803[14])
  i802.ambientEquatorColor = new pc.Color(i803[15], i803[16], i803[17], i803[18])
  i802.fogColor = new pc.Color(i803[19], i803[20], i803[21], i803[22])
  i802.fogEndDistance = i803[23]
  i802.fogStartDistance = i803[24]
  i802.fogDensity = i803[25]
  i802.fog = !!i803[26]
  request.r(i803[27], i803[28], 0, i802, 'skybox')
  i802.fogMode = i803[29]
  var i805 = i803[30]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i805[i + 0]) );
  }
  i802.lightmaps = i804
  i802.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i803[31], i802.lightProbes)
  i802.lightmapsMode = i803[32]
  i802.mixedBakeMode = i803[33]
  i802.environmentLightingMode = i803[34]
  i802.ambientProbe = new pc.SphericalHarmonicsL2(i803[35])
  i802.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i803[36])
  i802.useReferenceAmbientProbe = !!i803[37]
  request.r(i803[38], i803[39], 0, i802, 'customReflection')
  request.r(i803[40], i803[41], 0, i802, 'defaultReflection')
  i802.defaultReflectionMode = i803[42]
  i802.defaultReflectionResolution = i803[43]
  i802.sunLightObjectId = i803[44]
  i802.pixelLightCount = i803[45]
  i802.defaultReflectionHDR = !!i803[46]
  i802.hasLightDataAsset = !!i803[47]
  i802.hasManualGenerate = !!i803[48]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'lightmapColor')
  request.r(i809[2], i809[3], 0, i808, 'lightmapDirection')
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i810 = root || new UnityEngine.LightProbes()
  var i811 = data
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i819 = data
  var i821 = i819[0]
  var i820 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i821.length; i += 1) {
    i820.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i821[i + 0]));
  }
  i818.ShaderCompilationErrors = i820
  i818.name = i819[1]
  i818.guid = i819[2]
  var i823 = i819[3]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( i823[i + 0] );
  }
  i818.shaderDefinedKeywords = i822
  var i825 = i819[4]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i825[i + 0]) );
  }
  i818.passes = i824
  var i827 = i819[5]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i827[i + 0]) );
  }
  i818.usePasses = i826
  var i829 = i819[6]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i829[i + 0]) );
  }
  i818.defaultParameterValues = i828
  request.r(i819[7], i819[8], 0, i818, 'unityFallbackShader')
  i818.readDepth = !!i819[9]
  i818.isCreatedByShaderGraph = !!i819[10]
  i818.compiled = !!i819[11]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i833 = data
  i832.shaderName = i833[0]
  i832.errorMessage = i833[1]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i838 = root || new pc.UnityShaderPass()
  var i839 = data
  i838.id = i839[0]
  i838.subShaderIndex = i839[1]
  i838.name = i839[2]
  i838.passType = i839[3]
  i838.grabPassTextureName = i839[4]
  i838.usePass = !!i839[5]
  i838.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[6], i838.zTest)
  i838.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[7], i838.zWrite)
  i838.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[8], i838.culling)
  i838.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i839[9], i838.blending)
  i838.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i839[10], i838.alphaBlending)
  i838.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[11], i838.colorWriteMask)
  i838.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[12], i838.offsetUnits)
  i838.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[13], i838.offsetFactor)
  i838.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[14], i838.stencilRef)
  i838.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[15], i838.stencilReadMask)
  i838.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[16], i838.stencilWriteMask)
  i838.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i839[17], i838.stencilOp)
  i838.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i839[18], i838.stencilOpFront)
  i838.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i839[19], i838.stencilOpBack)
  var i841 = i839[20]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i841[i + 0]) );
  }
  i838.tags = i840
  var i843 = i839[21]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( i843[i + 0] );
  }
  i838.passDefinedKeywords = i842
  var i845 = i839[22]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i845[i + 0]) );
  }
  i838.passDefinedKeywordGroups = i844
  var i847 = i839[23]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i847[i + 0]) );
  }
  i838.variants = i846
  var i849 = i839[24]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i849[i + 0]) );
  }
  i838.excludedVariants = i848
  i838.hasDepthReader = !!i839[25]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i851 = data
  i850.val = i851[0]
  i850.name = i851[1]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i853 = data
  i852.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[0], i852.src)
  i852.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[1], i852.dst)
  i852.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[2], i852.op)
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i855 = data
  i854.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i855[0], i854.pass)
  i854.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i855[1], i854.fail)
  i854.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i855[2], i854.zFail)
  i854.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i855[3], i854.comp)
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i859 = data
  i858.name = i859[0]
  i858.value = i859[1]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i863 = data
  var i865 = i863[0]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( i865[i + 0] );
  }
  i862.keywords = i864
  i862.hasDiscard = !!i863[1]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i869 = data
  i868.passId = i869[0]
  i868.subShaderIndex = i869[1]
  var i871 = i869[2]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( i871[i + 0] );
  }
  i868.keywords = i870
  i868.vertexProgram = i869[3]
  i868.fragmentProgram = i869[4]
  i868.exportedForWebGl2 = !!i869[5]
  i868.readDepth = !!i869[6]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'shader')
  i874.pass = i875[2]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i879 = data
  i878.name = i879[0]
  i878.type = i879[1]
  i878.value = new pc.Vec4( i879[2], i879[3], i879[4], i879[5] )
  i878.textureValue = i879[6]
  i878.shaderPropertyFlag = i879[7]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i881 = data
  i880.name = i881[0]
  request.r(i881[1], i881[2], 0, i880, 'texture')
  i880.aabb = i881[3]
  i880.vertices = i881[4]
  i880.triangles = i881[5]
  i880.textureRect = UnityEngine.Rect.MinMaxRect(i881[6], i881[7], i881[8], i881[9])
  i880.packedRect = UnityEngine.Rect.MinMaxRect(i881[10], i881[11], i881[12], i881[13])
  i880.border = new pc.Vec4( i881[14], i881[15], i881[16], i881[17] )
  i880.transparency = i881[18]
  i880.bounds = i881[19]
  i880.pixelsPerUnit = i881[20]
  i880.textureWidth = i881[21]
  i880.textureHeight = i881[22]
  i880.nativeSize = new pc.Vec2( i881[23], i881[24] )
  i880.pivot = new pc.Vec2( i881[25], i881[26] )
  i880.textureRectOffset = new pc.Vec2( i881[27], i881[28] )
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i883 = data
  i882.name = i883[0]
  i882.wrapMode = i883[1]
  i882.isLooping = !!i883[2]
  i882.length = i883[3]
  var i885 = i883[4]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i885[i + 0]) );
  }
  i882.curves = i884
  var i887 = i883[5]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i887[i + 0]) );
  }
  i882.events = i886
  i882.halfPrecision = !!i883[6]
  i882._frameRate = i883[7]
  i882.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i883[8], i882.localBounds)
  i882.hasMuscleCurves = !!i883[9]
  var i889 = i883[10]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( i889[i + 0] );
  }
  i882.clipMuscleConstant = i888
  i882.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i883[11], i882.clipBindingConstant)
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i893 = data
  i892.path = i893[0]
  i892.hash = i893[1]
  i892.componentType = i893[2]
  i892.property = i893[3]
  i892.keys = i893[4]
  var i895 = i893[5]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i895[i + 0]) );
  }
  i892.objectReferenceKeys = i894
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i899 = data
  i898.time = i899[0]
  request.r(i899[1], i899[2], 0, i898, 'value')
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i903 = data
  i902.functionName = i903[0]
  i902.floatParameter = i903[1]
  i902.intParameter = i903[2]
  i902.stringParameter = i903[3]
  request.r(i903[4], i903[5], 0, i902, 'objectReferenceParameter')
  i902.time = i903[6]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i905 = data
  i904.center = new pc.Vec3( i905[0], i905[1], i905[2] )
  i904.extends = new pc.Vec3( i905[3], i905[4], i905[5] )
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i909 = data
  var i911 = i909[0]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( i911[i + 0] );
  }
  i908.genericBindings = i910
  var i913 = i909[1]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( i913[i + 0] );
  }
  i908.pptrCurveMapping = i912
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i915 = data
  i914.name = i915[0]
  i914.ascent = i915[1]
  i914.originalLineHeight = i915[2]
  i914.fontSize = i915[3]
  var i917 = i915[4]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i917[i + 0]) );
  }
  i914.characterInfo = i916
  request.r(i915[5], i915[6], 0, i914, 'texture')
  i914.originalFontSize = i915[7]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i921 = data
  i920.index = i921[0]
  i920.advance = i921[1]
  i920.bearing = i921[2]
  i920.glyphWidth = i921[3]
  i920.glyphHeight = i921[4]
  i920.minX = i921[5]
  i920.maxX = i921[6]
  i920.minY = i921[7]
  i920.maxY = i921[8]
  i920.uvBottomLeftX = i921[9]
  i920.uvBottomLeftY = i921[10]
  i920.uvBottomRightX = i921[11]
  i920.uvBottomRightY = i921[12]
  i920.uvTopLeftX = i921[13]
  i920.uvTopLeftY = i921[14]
  i920.uvTopRightX = i921[15]
  i920.uvTopRightY = i921[16]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i923 = data
  i922.name = i923[0]
  var i925 = i923[1]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i925[i + 0]) );
  }
  i922.layers = i924
  var i927 = i923[2]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i927[i + 0]) );
  }
  i922.parameters = i926
  i922.animationClips = i923[3]
  i922.avatarUnsupported = i923[4]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i931 = data
  i930.name = i931[0]
  i930.defaultWeight = i931[1]
  i930.blendingMode = i931[2]
  i930.avatarMask = i931[3]
  i930.syncedLayerIndex = i931[4]
  i930.syncedLayerAffectsTiming = !!i931[5]
  i930.syncedLayers = i931[6]
  i930.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i931[7], i930.stateMachine)
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i933 = data
  i932.id = i933[0]
  i932.name = i933[1]
  i932.path = i933[2]
  var i935 = i933[3]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i935[i + 0]) );
  }
  i932.states = i934
  var i937 = i933[4]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i937[i + 0]) );
  }
  i932.machines = i936
  var i939 = i933[5]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i939[i + 0]) );
  }
  i932.entryStateTransitions = i938
  var i941 = i933[6]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i941[i + 0]) );
  }
  i932.exitStateTransitions = i940
  var i943 = i933[7]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i943[i + 0]) );
  }
  i932.anyStateTransitions = i942
  i932.defaultStateId = i933[8]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i947 = data
  i946.id = i947[0]
  i946.name = i947[1]
  i946.cycleOffset = i947[2]
  i946.cycleOffsetParameter = i947[3]
  i946.cycleOffsetParameterActive = !!i947[4]
  i946.mirror = !!i947[5]
  i946.mirrorParameter = i947[6]
  i946.mirrorParameterActive = !!i947[7]
  i946.motionId = i947[8]
  i946.nameHash = i947[9]
  i946.fullPathHash = i947[10]
  i946.speed = i947[11]
  i946.speedParameter = i947[12]
  i946.speedParameterActive = !!i947[13]
  i946.tag = i947[14]
  i946.tagHash = i947[15]
  i946.writeDefaultValues = !!i947[16]
  var i949 = i947[17]
  var i948 = []
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 2, i948, '')
  }
  i946.behaviours = i948
  var i951 = i947[18]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i951[i + 0]) );
  }
  i946.transitions = i950
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i957 = data
  i956.fullPath = i957[0]
  i956.canTransitionToSelf = !!i957[1]
  i956.duration = i957[2]
  i956.exitTime = i957[3]
  i956.hasExitTime = !!i957[4]
  i956.hasFixedDuration = !!i957[5]
  i956.interruptionSource = i957[6]
  i956.offset = i957[7]
  i956.orderedInterruption = !!i957[8]
  i956.destinationStateId = i957[9]
  i956.isExit = !!i957[10]
  i956.mute = !!i957[11]
  i956.solo = !!i957[12]
  var i959 = i957[13]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i959[i + 0]) );
  }
  i956.conditions = i958
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i965 = data
  i964.destinationStateId = i965[0]
  i964.isExit = !!i965[1]
  i964.mute = !!i965[2]
  i964.solo = !!i965[3]
  var i967 = i965[4]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i967[i + 0]) );
  }
  i964.conditions = i966
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i971 = data
  i970.mode = i971[0]
  i970.parameter = i971[1]
  i970.threshold = i971[2]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i975 = data
  i974.defaultBool = !!i975[0]
  i974.defaultFloat = i975[1]
  i974.defaultInt = i975[2]
  i974.name = i975[3]
  i974.nameHash = i975[4]
  i974.type = i975[5]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i977 = data
  i976.name = i977[0]
  i976.bytes64 = i977[1]
  i976.data = i977[2]
  return i976
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i979 = data
  i978.hashCode = i979[0]
  request.r(i979[1], i979[2], 0, i978, 'material')
  i978.materialHashCode = i979[3]
  request.r(i979[4], i979[5], 0, i978, 'atlas')
  i978.normalStyle = i979[6]
  i978.normalSpacingOffset = i979[7]
  i978.boldStyle = i979[8]
  i978.boldSpacing = i979[9]
  i978.italicStyle = i979[10]
  i978.tabSize = i979[11]
  i978.m_Version = i979[12]
  i978.m_SourceFontFileGUID = i979[13]
  request.r(i979[14], i979[15], 0, i978, 'm_SourceFontFile_EditorRef')
  request.r(i979[16], i979[17], 0, i978, 'm_SourceFontFile')
  i978.m_AtlasPopulationMode = i979[18]
  i978.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i979[19], i978.m_FaceInfo)
  var i981 = i979[20]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i981.length; i += 1) {
    i980.add(request.d('UnityEngine.TextCore.Glyph', i981[i + 0]));
  }
  i978.m_GlyphTable = i980
  var i983 = i979[21]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i983.length; i += 1) {
    i982.add(request.d('TMPro.TMP_Character', i983[i + 0]));
  }
  i978.m_CharacterTable = i982
  var i985 = i979[22]
  var i984 = []
  for(var i = 0; i < i985.length; i += 2) {
  request.r(i985[i + 0], i985[i + 1], 2, i984, '')
  }
  i978.m_AtlasTextures = i984
  i978.m_AtlasTextureIndex = i979[23]
  i978.m_IsMultiAtlasTexturesEnabled = !!i979[24]
  i978.m_ClearDynamicDataOnBuild = !!i979[25]
  var i987 = i979[26]
  var i986 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i987.length; i += 1) {
    i986.add(request.d('UnityEngine.TextCore.GlyphRect', i987[i + 0]));
  }
  i978.m_UsedGlyphRects = i986
  var i989 = i979[27]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i989.length; i += 1) {
    i988.add(request.d('UnityEngine.TextCore.GlyphRect', i989[i + 0]));
  }
  i978.m_FreeGlyphRects = i988
  i978.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i979[28], i978.m_fontInfo)
  i978.m_AtlasWidth = i979[29]
  i978.m_AtlasHeight = i979[30]
  i978.m_AtlasPadding = i979[31]
  i978.m_AtlasRenderMode = i979[32]
  var i991 = i979[33]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i991.length; i += 1) {
    i990.add(request.d('TMPro.TMP_Glyph', i991[i + 0]));
  }
  i978.m_glyphInfoList = i990
  i978.m_KerningTable = request.d('TMPro.KerningTable', i979[34], i978.m_KerningTable)
  i978.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i979[35], i978.m_FontFeatureTable)
  var i993 = i979[36]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 1, i992, '')
  }
  i978.fallbackFontAssets = i992
  var i995 = i979[37]
  var i994 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 1, i994, '')
  }
  i978.m_FallbackFontAssetTable = i994
  i978.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i979[38], i978.m_CreationSettings)
  var i997 = i979[39]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('TMPro.TMP_FontWeightPair', i997[i + 0]) );
  }
  i978.m_FontWeightTable = i996
  var i999 = i979[40]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('TMPro.TMP_FontWeightPair', i999[i + 0]) );
  }
  i978.fontWeights = i998
  return i978
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1001 = data
  i1000.m_FaceIndex = i1001[0]
  i1000.m_FamilyName = i1001[1]
  i1000.m_StyleName = i1001[2]
  i1000.m_PointSize = i1001[3]
  i1000.m_Scale = i1001[4]
  i1000.m_UnitsPerEM = i1001[5]
  i1000.m_LineHeight = i1001[6]
  i1000.m_AscentLine = i1001[7]
  i1000.m_CapLine = i1001[8]
  i1000.m_MeanLine = i1001[9]
  i1000.m_Baseline = i1001[10]
  i1000.m_DescentLine = i1001[11]
  i1000.m_SuperscriptOffset = i1001[12]
  i1000.m_SuperscriptSize = i1001[13]
  i1000.m_SubscriptOffset = i1001[14]
  i1000.m_SubscriptSize = i1001[15]
  i1000.m_UnderlineOffset = i1001[16]
  i1000.m_UnderlineThickness = i1001[17]
  i1000.m_StrikethroughOffset = i1001[18]
  i1000.m_StrikethroughThickness = i1001[19]
  i1000.m_TabWidth = i1001[20]
  return i1000
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1005 = data
  i1004.m_Index = i1005[0]
  i1004.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1005[1], i1004.m_Metrics)
  i1004.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1005[2], i1004.m_GlyphRect)
  i1004.m_Scale = i1005[3]
  i1004.m_AtlasIndex = i1005[4]
  i1004.m_ClassDefinitionType = i1005[5]
  return i1004
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1007 = data
  i1006.m_Width = i1007[0]
  i1006.m_Height = i1007[1]
  i1006.m_HorizontalBearingX = i1007[2]
  i1006.m_HorizontalBearingY = i1007[3]
  i1006.m_HorizontalAdvance = i1007[4]
  return i1006
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1009 = data
  i1008.m_X = i1009[0]
  i1008.m_Y = i1009[1]
  i1008.m_Width = i1009[2]
  i1008.m_Height = i1009[3]
  return i1008
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1012 = root || request.c( 'TMPro.TMP_Character' )
  var i1013 = data
  i1012.m_ElementType = i1013[0]
  i1012.m_Unicode = i1013[1]
  i1012.m_GlyphIndex = i1013[2]
  i1012.m_Scale = i1013[3]
  return i1012
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1018 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1019 = data
  i1018.Name = i1019[0]
  i1018.PointSize = i1019[1]
  i1018.Scale = i1019[2]
  i1018.CharacterCount = i1019[3]
  i1018.LineHeight = i1019[4]
  i1018.Baseline = i1019[5]
  i1018.Ascender = i1019[6]
  i1018.CapHeight = i1019[7]
  i1018.Descender = i1019[8]
  i1018.CenterLine = i1019[9]
  i1018.SuperscriptOffset = i1019[10]
  i1018.SubscriptOffset = i1019[11]
  i1018.SubSize = i1019[12]
  i1018.Underline = i1019[13]
  i1018.UnderlineThickness = i1019[14]
  i1018.strikethrough = i1019[15]
  i1018.strikethroughThickness = i1019[16]
  i1018.TabWidth = i1019[17]
  i1018.Padding = i1019[18]
  i1018.AtlasWidth = i1019[19]
  i1018.AtlasHeight = i1019[20]
  return i1018
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1022 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1023 = data
  i1022.id = i1023[0]
  i1022.x = i1023[1]
  i1022.y = i1023[2]
  i1022.width = i1023[3]
  i1022.height = i1023[4]
  i1022.xOffset = i1023[5]
  i1022.yOffset = i1023[6]
  i1022.xAdvance = i1023[7]
  i1022.scale = i1023[8]
  return i1022
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1024 = root || request.c( 'TMPro.KerningTable' )
  var i1025 = data
  var i1027 = i1025[0]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.add(request.d('TMPro.KerningPair', i1027[i + 0]));
  }
  i1024.kerningPairs = i1026
  return i1024
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1030 = root || request.c( 'TMPro.KerningPair' )
  var i1031 = data
  i1030.xOffset = i1031[0]
  i1030.m_FirstGlyph = i1031[1]
  i1030.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1031[2], i1030.m_FirstGlyphAdjustments)
  i1030.m_SecondGlyph = i1031[3]
  i1030.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1031[4], i1030.m_SecondGlyphAdjustments)
  i1030.m_IgnoreSpacingAdjustments = !!i1031[5]
  return i1030
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1032 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1033 = data
  var i1035 = i1033[0]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1035[i + 0]));
  }
  i1032.m_GlyphPairAdjustmentRecords = i1034
  return i1032
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1039 = data
  i1038.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1039[0], i1038.m_FirstAdjustmentRecord)
  i1038.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1039[1], i1038.m_SecondAdjustmentRecord)
  i1038.m_FeatureLookupFlags = i1039[2]
  return i1038
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1040 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1041 = data
  i1040.m_GlyphIndex = i1041[0]
  i1040.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1041[1], i1040.m_GlyphValueRecord)
  return i1040
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1042 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1043 = data
  i1042.m_XPlacement = i1043[0]
  i1042.m_YPlacement = i1043[1]
  i1042.m_XAdvance = i1043[2]
  i1042.m_YAdvance = i1043[3]
  return i1042
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1046 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1047 = data
  i1046.sourceFontFileName = i1047[0]
  i1046.sourceFontFileGUID = i1047[1]
  i1046.pointSizeSamplingMode = i1047[2]
  i1046.pointSize = i1047[3]
  i1046.padding = i1047[4]
  i1046.packingMode = i1047[5]
  i1046.atlasWidth = i1047[6]
  i1046.atlasHeight = i1047[7]
  i1046.characterSetSelectionMode = i1047[8]
  i1046.characterSequence = i1047[9]
  i1046.referencedFontAssetGUID = i1047[10]
  i1046.referencedTextAssetGUID = i1047[11]
  i1046.fontStyle = i1047[12]
  i1046.fontStyleModifier = i1047[13]
  i1046.renderMode = i1047[14]
  i1046.includeFontFeatures = !!i1047[15]
  return i1046
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1050 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'regularTypeface')
  request.r(i1051[2], i1051[3], 0, i1050, 'italicTypeface')
  return i1050
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1052 = root || request.c( 'TMPro.TMP_Settings' )
  var i1053 = data
  i1052.m_enableWordWrapping = !!i1053[0]
  i1052.m_enableKerning = !!i1053[1]
  i1052.m_enableExtraPadding = !!i1053[2]
  i1052.m_enableTintAllSprites = !!i1053[3]
  i1052.m_enableParseEscapeCharacters = !!i1053[4]
  i1052.m_EnableRaycastTarget = !!i1053[5]
  i1052.m_GetFontFeaturesAtRuntime = !!i1053[6]
  i1052.m_missingGlyphCharacter = i1053[7]
  i1052.m_warningsDisabled = !!i1053[8]
  request.r(i1053[9], i1053[10], 0, i1052, 'm_defaultFontAsset')
  i1052.m_defaultFontAssetPath = i1053[11]
  i1052.m_defaultFontSize = i1053[12]
  i1052.m_defaultAutoSizeMinRatio = i1053[13]
  i1052.m_defaultAutoSizeMaxRatio = i1053[14]
  i1052.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1053[15], i1053[16] )
  i1052.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1053[17], i1053[18] )
  i1052.m_autoSizeTextContainer = !!i1053[19]
  i1052.m_IsTextObjectScaleStatic = !!i1053[20]
  var i1055 = i1053[21]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1055.length; i += 2) {
  request.r(i1055[i + 0], i1055[i + 1], 1, i1054, '')
  }
  i1052.m_fallbackFontAssets = i1054
  i1052.m_matchMaterialPreset = !!i1053[22]
  request.r(i1053[23], i1053[24], 0, i1052, 'm_defaultSpriteAsset')
  i1052.m_defaultSpriteAssetPath = i1053[25]
  i1052.m_enableEmojiSupport = !!i1053[26]
  i1052.m_MissingCharacterSpriteUnicode = i1053[27]
  i1052.m_defaultColorGradientPresetsPath = i1053[28]
  request.r(i1053[29], i1053[30], 0, i1052, 'm_defaultStyleSheet')
  i1052.m_StyleSheetsResourcePath = i1053[31]
  request.r(i1053[32], i1053[33], 0, i1052, 'm_leadingCharacters')
  request.r(i1053[34], i1053[35], 0, i1052, 'm_followingCharacters')
  i1052.m_UseModernHangulLineBreakingRules = !!i1053[36]
  return i1052
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1056 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1057 = data
  i1056.hashCode = i1057[0]
  request.r(i1057[1], i1057[2], 0, i1056, 'material')
  i1056.materialHashCode = i1057[3]
  request.r(i1057[4], i1057[5], 0, i1056, 'spriteSheet')
  var i1059 = i1057[6]
  var i1058 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.add(request.d('TMPro.TMP_Sprite', i1059[i + 0]));
  }
  i1056.spriteInfoList = i1058
  var i1061 = i1057[7]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1061.length; i += 2) {
  request.r(i1061[i + 0], i1061[i + 1], 1, i1060, '')
  }
  i1056.fallbackSpriteAssets = i1060
  i1056.m_Version = i1057[8]
  i1056.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1057[9], i1056.m_FaceInfo)
  var i1063 = i1057[10]
  var i1062 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.add(request.d('TMPro.TMP_SpriteCharacter', i1063[i + 0]));
  }
  i1056.m_SpriteCharacterTable = i1062
  var i1065 = i1057[11]
  var i1064 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.add(request.d('TMPro.TMP_SpriteGlyph', i1065[i + 0]));
  }
  i1056.m_SpriteGlyphTable = i1064
  return i1056
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1068 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1069 = data
  i1068.name = i1069[0]
  i1068.hashCode = i1069[1]
  i1068.unicode = i1069[2]
  i1068.pivot = new pc.Vec2( i1069[3], i1069[4] )
  request.r(i1069[5], i1069[6], 0, i1068, 'sprite')
  i1068.id = i1069[7]
  i1068.x = i1069[8]
  i1068.y = i1069[9]
  i1068.width = i1069[10]
  i1068.height = i1069[11]
  i1068.xOffset = i1069[12]
  i1068.yOffset = i1069[13]
  i1068.xAdvance = i1069[14]
  i1068.scale = i1069[15]
  return i1068
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1074 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1075 = data
  i1074.m_Name = i1075[0]
  i1074.m_HashCode = i1075[1]
  i1074.m_ElementType = i1075[2]
  i1074.m_Unicode = i1075[3]
  i1074.m_GlyphIndex = i1075[4]
  i1074.m_Scale = i1075[5]
  return i1074
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1078 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1079 = data
  request.r(i1079[0], i1079[1], 0, i1078, 'sprite')
  i1078.m_Index = i1079[2]
  i1078.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1079[3], i1078.m_Metrics)
  i1078.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1079[4], i1078.m_GlyphRect)
  i1078.m_Scale = i1079[5]
  i1078.m_AtlasIndex = i1079[6]
  i1078.m_ClassDefinitionType = i1079[7]
  return i1078
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1080 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1081 = data
  var i1083 = i1081[0]
  var i1082 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.add(request.d('TMPro.TMP_Style', i1083[i + 0]));
  }
  i1080.m_StyleList = i1082
  return i1080
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1086 = root || request.c( 'TMPro.TMP_Style' )
  var i1087 = data
  i1086.m_Name = i1087[0]
  i1086.m_HashCode = i1087[1]
  i1086.m_OpeningDefinition = i1087[2]
  i1086.m_ClosingDefinition = i1087[3]
  i1086.m_OpeningTagArray = i1087[4]
  i1086.m_ClosingTagArray = i1087[5]
  i1086.m_OpeningTagUnicodeArray = i1087[6]
  i1086.m_ClosingTagUnicodeArray = i1087[7]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1089 = data
  var i1091 = i1089[0]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1091[i + 0]) );
  }
  i1088.files = i1090
  i1088.componentToPrefabIds = i1089[1]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1095 = data
  i1094.path = i1095[0]
  request.r(i1095[1], i1095[2], 0, i1094, 'unityObject')
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1097 = data
  var i1099 = i1097[0]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1099[i + 0]) );
  }
  i1096.scriptsExecutionOrder = i1098
  var i1101 = i1097[1]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1101[i + 0]) );
  }
  i1096.sortingLayers = i1100
  var i1103 = i1097[2]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1103[i + 0]) );
  }
  i1096.cullingLayers = i1102
  i1096.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1097[3], i1096.timeSettings)
  i1096.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1097[4], i1096.physicsSettings)
  i1096.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1097[5], i1096.physics2DSettings)
  i1096.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1097[6], i1096.qualitySettings)
  i1096.enableRealtimeShadows = !!i1097[7]
  i1096.enableAutoInstancing = !!i1097[8]
  i1096.enableDynamicBatching = !!i1097[9]
  i1096.lightmapEncodingQuality = i1097[10]
  i1096.desiredColorSpace = i1097[11]
  var i1105 = i1097[12]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( i1105[i + 0] );
  }
  i1096.allTags = i1104
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1109 = data
  i1108.name = i1109[0]
  i1108.value = i1109[1]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1113 = data
  i1112.id = i1113[0]
  i1112.name = i1113[1]
  i1112.value = i1113[2]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1117 = data
  i1116.id = i1117[0]
  i1116.name = i1117[1]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1119 = data
  i1118.fixedDeltaTime = i1119[0]
  i1118.maximumDeltaTime = i1119[1]
  i1118.timeScale = i1119[2]
  i1118.maximumParticleTimestep = i1119[3]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1121 = data
  i1120.gravity = new pc.Vec3( i1121[0], i1121[1], i1121[2] )
  i1120.defaultSolverIterations = i1121[3]
  i1120.bounceThreshold = i1121[4]
  i1120.autoSyncTransforms = !!i1121[5]
  i1120.autoSimulation = !!i1121[6]
  var i1123 = i1121[7]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1123[i + 0]) );
  }
  i1120.collisionMatrix = i1122
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1127 = data
  i1126.enabled = !!i1127[0]
  i1126.layerId = i1127[1]
  i1126.otherLayerId = i1127[2]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1129 = data
  request.r(i1129[0], i1129[1], 0, i1128, 'material')
  i1128.gravity = new pc.Vec2( i1129[2], i1129[3] )
  i1128.positionIterations = i1129[4]
  i1128.velocityIterations = i1129[5]
  i1128.velocityThreshold = i1129[6]
  i1128.maxLinearCorrection = i1129[7]
  i1128.maxAngularCorrection = i1129[8]
  i1128.maxTranslationSpeed = i1129[9]
  i1128.maxRotationSpeed = i1129[10]
  i1128.baumgarteScale = i1129[11]
  i1128.baumgarteTOIScale = i1129[12]
  i1128.timeToSleep = i1129[13]
  i1128.linearSleepTolerance = i1129[14]
  i1128.angularSleepTolerance = i1129[15]
  i1128.defaultContactOffset = i1129[16]
  i1128.autoSimulation = !!i1129[17]
  i1128.queriesHitTriggers = !!i1129[18]
  i1128.queriesStartInColliders = !!i1129[19]
  i1128.callbacksOnDisable = !!i1129[20]
  i1128.reuseCollisionCallbacks = !!i1129[21]
  i1128.autoSyncTransforms = !!i1129[22]
  var i1131 = i1129[23]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1131[i + 0]) );
  }
  i1128.collisionMatrix = i1130
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1135 = data
  i1134.enabled = !!i1135[0]
  i1134.layerId = i1135[1]
  i1134.otherLayerId = i1135[2]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1137 = data
  var i1139 = i1137[0]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1139[i + 0]) );
  }
  i1136.qualityLevels = i1138
  var i1141 = i1137[1]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( i1141[i + 0] );
  }
  i1136.names = i1140
  i1136.shadows = i1137[2]
  i1136.anisotropicFiltering = i1137[3]
  i1136.antiAliasing = i1137[4]
  i1136.lodBias = i1137[5]
  i1136.shadowCascades = i1137[6]
  i1136.shadowDistance = i1137[7]
  i1136.shadowmaskMode = i1137[8]
  i1136.shadowProjection = i1137[9]
  i1136.shadowResolution = i1137[10]
  i1136.softParticles = !!i1137[11]
  i1136.softVegetation = !!i1137[12]
  i1136.activeColorSpace = i1137[13]
  i1136.desiredColorSpace = i1137[14]
  i1136.masterTextureLimit = i1137[15]
  i1136.maxQueuedFrames = i1137[16]
  i1136.particleRaycastBudget = i1137[17]
  i1136.pixelLightCount = i1137[18]
  i1136.realtimeReflectionProbes = !!i1137[19]
  i1136.shadowCascade2Split = i1137[20]
  i1136.shadowCascade4Split = new pc.Vec3( i1137[21], i1137[22], i1137[23] )
  i1136.streamingMipmapsActive = !!i1137[24]
  i1136.vSyncCount = i1137[25]
  i1136.asyncUploadBufferSize = i1137[26]
  i1136.asyncUploadTimeSlice = i1137[27]
  i1136.billboardsFaceCameraPosition = !!i1137[28]
  i1136.shadowNearPlaneOffset = i1137[29]
  i1136.streamingMipmapsMemoryBudget = i1137[30]
  i1136.maximumLODLevel = i1137[31]
  i1136.streamingMipmapsAddAllCameras = !!i1137[32]
  i1136.streamingMipmapsMaxLevelReduction = i1137[33]
  i1136.streamingMipmapsRenderersPerFrame = i1137[34]
  i1136.resolutionScalingFixedDPIFactor = i1137[35]
  i1136.streamingMipmapsMaxFileIORequests = i1137[36]
  i1136.currentQualityLevel = i1137[37]
  return i1136
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1145 = data
  request.r(i1145[0], i1145[1], 0, i1144, 'm_ObjectArgument')
  i1144.m_ObjectArgumentAssemblyTypeName = i1145[2]
  i1144.m_IntArgument = i1145[3]
  i1144.m_FloatArgument = i1145[4]
  i1144.m_StringArgument = i1145[5]
  i1144.m_BoolArgument = !!i1145[6]
  return i1144
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1146 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1147 = data
  i1146.xPlacement = i1147[0]
  i1146.yPlacement = i1147[1]
  i1146.xAdvance = i1147[2]
  i1146.yAdvance = i1147[3]
  return i1146
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[69],"70":[3],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[72],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[80],"88":[80],"89":[80],"90":[80],"91":[80],"92":[80],"93":[3],"94":[95],"96":[97],"98":[97],"45":[44],"17":[15],"99":[100],"101":[5],"102":[100],"103":[44],"104":[44],"48":[45],"50":[49,44],"105":[44],"47":[45],"106":[44],"107":[44],"108":[44],"109":[44],"110":[44],"111":[44],"112":[44],"113":[44],"114":[44],"115":[49,44],"116":[44],"117":[44],"118":[44],"119":[44],"120":[49,44],"121":[44],"122":[54],"123":[54],"55":[54],"124":[54],"125":[3],"126":[3],"127":[128],"129":[3],"130":[44],"131":[95,44],"51":[44,49],"132":[44],"133":[49,44],"134":[95],"135":[49,44],"136":[44],"137":[100]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","Beds","Bed","Vampire.Vampires","Doctors","Doctor.DoctorState.BedRoute","Vampire.Vampire","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Vampire.VampireStateMachine","Vampire.VampireStates.IdleState","Vampire.VampireTransitions.MoveTransition","Vampire.VampireStates.ExitState","Money.MoneyConroller","Vampire.VampireStates.HealState","Vampire.VampireTransitions.HealRunTransition","Vampire.VampireStates.RunState","Vampire.VampireStates.HealRunState","Vampire.VampireTransitions.HealCompleteTransition","Vampire.VampireStates.HealCompleteState","Vampire.VampireTransitions.ExitTransition","Vampire.VampireTransitions.IdleTransition","Vampire.VampireStates.MoveState","Vampire.VampireTransitions.HealTransition","Doctor.Doctor","Doctor.DoctorStateMachine","Doctor.DoctorState.DoctorIdleState","Doctor.DoctorTransition.DoctorMoveTransition","Doctor.DoctorState.DoctorMoveState","Doctor.DoctorTransition.DoctorHealTransition","Doctor.DoctorState.DoctorHealState","Doctor.DoctorTransition.DoctorHealRunTransition","Money.MoneyUI","BuyController","Money.BuyButton","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Vampirs";

Deserializers.lunaInitializationTime = "04/19/2025 09:54:12";

Deserializers.lunaDaysRunning = "5.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Vampires";

Deserializers.lunaAppID = "27856";

Deserializers.projectId = "663babe8860904345a8abc2ffcd17729";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1681";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3710";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "a536205e-b938-4e6b-bb56-7d81937e5102";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

