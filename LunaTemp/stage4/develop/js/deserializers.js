var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.JointSpring' )
  var i569 = data
  i568.spring = i569[0]
  i568.damper = i569[1]
  i568.targetPosition = i569[2]
  return i568
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.JointMotor' )
  var i571 = data
  i570.m_TargetVelocity = i571[0]
  i570.m_Force = i571[1]
  i570.m_FreeSpin = i571[2]
  return i570
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.JointLimits' )
  var i573 = data
  i572.m_Min = i573[0]
  i572.m_Max = i573[1]
  i572.m_Bounciness = i573[2]
  i572.m_BounceMinVelocity = i573[3]
  i572.m_ContactDistance = i573[4]
  i572.minBounce = i573[5]
  i572.maxBounce = i573[6]
  return i572
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.JointDrive' )
  var i575 = data
  i574.m_PositionSpring = i575[0]
  i574.m_PositionDamper = i575[1]
  i574.m_MaximumForce = i575[2]
  i574.m_UseAcceleration = i575[3]
  return i574
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i577 = data
  i576.m_Spring = i577[0]
  i576.m_Damper = i577[1]
  return i576
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i579 = data
  i578.m_Limit = i579[0]
  i578.m_Bounciness = i579[1]
  i578.m_ContactDistance = i579[2]
  return i578
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i581 = data
  i580.m_ExtremumSlip = i581[0]
  i580.m_ExtremumValue = i581[1]
  i580.m_AsymptoteSlip = i581[2]
  i580.m_AsymptoteValue = i581[3]
  i580.m_Stiffness = i581[4]
  return i580
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i583 = data
  i582.m_LowerAngle = i583[0]
  i582.m_UpperAngle = i583[1]
  return i582
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i585 = data
  i584.m_MotorSpeed = i585[0]
  i584.m_MaximumMotorTorque = i585[1]
  return i584
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i587 = data
  i586.m_DampingRatio = i587[0]
  i586.m_Frequency = i587[1]
  i586.m_Angle = i587[2]
  return i586
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i589 = data
  i588.m_LowerTranslation = i589[0]
  i588.m_UpperTranslation = i589[1]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i590 = root || new pc.UnityMaterial()
  var i591 = data
  i590.name = i591[0]
  request.r(i591[1], i591[2], 0, i590, 'shader')
  i590.renderQueue = i591[3]
  i590.enableInstancing = !!i591[4]
  var i593 = i591[5]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i593[i + 0]) );
  }
  i590.floatParameters = i592
  var i595 = i591[6]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i595[i + 0]) );
  }
  i590.colorParameters = i594
  var i597 = i591[7]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i597[i + 0]) );
  }
  i590.vectorParameters = i596
  var i599 = i591[8]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i599[i + 0]) );
  }
  i590.textureParameters = i598
  var i601 = i591[9]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i601[i + 0]) );
  }
  i590.materialFlags = i600
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i605 = data
  i604.name = i605[0]
  i604.value = i605[1]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i609 = data
  i608.name = i609[0]
  i608.value = new pc.Color(i609[1], i609[2], i609[3], i609[4])
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i613 = data
  i612.name = i613[0]
  i612.value = new pc.Vec4( i613[1], i613[2], i613[3], i613[4] )
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i617 = data
  i616.name = i617[0]
  request.r(i617[1], i617[2], 0, i616, 'value')
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i621 = data
  i620.name = i621[0]
  i620.enabled = !!i621[1]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i623 = data
  i622.name = i623[0]
  i622.width = i623[1]
  i622.height = i623[2]
  i622.mipmapCount = i623[3]
  i622.anisoLevel = i623[4]
  i622.filterMode = i623[5]
  i622.hdr = !!i623[6]
  i622.format = i623[7]
  i622.wrapMode = i623[8]
  i622.alphaIsTransparency = !!i623[9]
  i622.alphaSource = i623[10]
  i622.graphicsFormat = i623[11]
  i622.sRGBTexture = !!i623[12]
  i622.desiredColorSpace = i623[13]
  i622.wrapU = i623[14]
  i622.wrapV = i623[15]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i625 = data
  i624.name = i625[0]
  i624.index = i625[1]
  i624.startup = !!i625[2]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i627 = data
  i626.position = new pc.Vec3( i627[0], i627[1], i627[2] )
  i626.scale = new pc.Vec3( i627[3], i627[4], i627[5] )
  i626.rotation = new pc.Quat(i627[6], i627[7], i627[8], i627[9])
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i629 = data
  i628.enabled = !!i629[0]
  i628.aspect = i629[1]
  i628.orthographic = !!i629[2]
  i628.orthographicSize = i629[3]
  i628.backgroundColor = new pc.Color(i629[4], i629[5], i629[6], i629[7])
  i628.nearClipPlane = i629[8]
  i628.farClipPlane = i629[9]
  i628.fieldOfView = i629[10]
  i628.depth = i629[11]
  i628.clearFlags = i629[12]
  i628.cullingMask = i629[13]
  i628.rect = i629[14]
  request.r(i629[15], i629[16], 0, i628, 'targetTexture')
  i628.usePhysicalProperties = !!i629[17]
  i628.focalLength = i629[18]
  i628.sensorSize = new pc.Vec2( i629[19], i629[20] )
  i628.lensShift = new pc.Vec2( i629[21], i629[22] )
  i628.gateFit = i629[23]
  i628.commandBufferCount = i629[24]
  i628.cameraType = i629[25]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i631 = data
  i630.name = i631[0]
  i630.tagId = i631[1]
  i630.enabled = !!i631[2]
  i630.isStatic = !!i631[3]
  i630.layer = i631[4]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i633 = data
  i632.enabled = !!i633[0]
  request.r(i633[1], i633[2], 0, i632, 'sharedMaterial')
  var i635 = i633[3]
  var i634 = []
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 2, i634, '')
  }
  i632.sharedMaterials = i634
  i632.receiveShadows = !!i633[4]
  i632.shadowCastingMode = i633[5]
  i632.sortingLayerID = i633[6]
  i632.sortingOrder = i633[7]
  i632.lightmapIndex = i633[8]
  i632.lightmapSceneIndex = i633[9]
  i632.lightmapScaleOffset = new pc.Vec4( i633[10], i633[11], i633[12], i633[13] )
  i632.lightProbeUsage = i633[14]
  i632.reflectionProbeUsage = i633[15]
  i632.color = new pc.Color(i633[16], i633[17], i633[18], i633[19])
  request.r(i633[20], i633[21], 0, i632, 'sprite')
  i632.flipX = !!i633[22]
  i632.flipY = !!i633[23]
  i632.drawMode = i633[24]
  i632.size = new pc.Vec2( i633[25], i633[26] )
  i632.tileMode = i633[27]
  i632.adaptiveModeThreshold = i633[28]
  i632.maskInteraction = i633[29]
  i632.spriteSortPoint = i633[30]
  return i632
}

Deserializers["Beds"] = function (request, data, root) {
  var i638 = root || request.c( 'Beds' )
  var i639 = data
  var i641 = i639[0]
  var i640 = new (System.Collections.Generic.List$1(Bridge.ns('Bed')))
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 1, i640, '')
  }
  i638._beds = i640
  request.r(i639[1], i639[2], 0, i638, '_vampires')
  request.r(i639[3], i639[4], 0, i638, '_doctors')
  return i638
}

Deserializers["Bed"] = function (request, data, root) {
  var i644 = root || request.c( 'Bed' )
  var i645 = data
  return i644
}

Deserializers["Vampire.Vampires"] = function (request, data, root) {
  var i646 = root || request.c( 'Vampire.Vampires' )
  var i647 = data
  var i649 = i647[0]
  var i648 = new (System.Collections.Generic.List$1(Bridge.ns('Vampire.Vampire')))
  for(var i = 0; i < i649.length; i += 2) {
  request.r(i649[i + 0], i649[i + 1], 1, i648, '')
  }
  i646._vampires = i648
  i646._moveSpeed = i647[1]
  return i646
}

Deserializers["Vampire.Vampire"] = function (request, data, root) {
  var i652 = root || request.c( 'Vampire.Vampire' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, 'ExitPoint')
  request.r(i653[2], i653[3], 0, i652, 'healSprite')
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'animatorController')
  request.r(i655[2], i655[3], 0, i654, 'avatar')
  i654.updateMode = i655[4]
  i654.hasTransformHierarchy = !!i655[5]
  i654.applyRootMotion = !!i655[6]
  var i657 = i655[7]
  var i656 = []
  for(var i = 0; i < i657.length; i += 2) {
  request.r(i657[i + 0], i657[i + 1], 2, i656, '')
  }
  i654.humanBones = i656
  i654.enabled = !!i655[8]
  return i654
}

Deserializers["Vampire.VampireStateMachine"] = function (request, data, root) {
  var i660 = root || request.c( 'Vampire.VampireStateMachine' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, '_firstState')
  return i660
}

Deserializers["Vampire.VampireStates.IdleState"] = function (request, data, root) {
  var i662 = root || request.c( 'Vampire.VampireStates.IdleState' )
  var i663 = data
  var i665 = i663[0]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 1, i664, '')
  }
  i662._transitions = i664
  return i662
}

Deserializers["Vampire.VampireStates.ExitState"] = function (request, data, root) {
  var i668 = root || request.c( 'Vampire.VampireStates.ExitState' )
  var i669 = data
  i668._rotationSpeed = i669[0]
  i668._targetAngleZ = i669[1]
  i668._moveSpeed = i669[2]
  request.r(i669[3], i669[4], 0, i668, '_targetTransform')
  request.r(i669[5], i669[6], 0, i668, '_money')
  var i671 = i669[7]
  var i670 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i671.length; i += 2) {
  request.r(i671[i + 0], i671[i + 1], 1, i670, '')
  }
  i668._transitions = i670
  return i668
}

Deserializers["Vampire.VampireStates.HealState"] = function (request, data, root) {
  var i672 = root || request.c( 'Vampire.VampireStates.HealState' )
  var i673 = data
  i672._rotationSpeed = i673[0]
  var i675 = i673[1]
  var i674 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i675.length; i += 2) {
  request.r(i675[i + 0], i675[i + 1], 1, i674, '')
  }
  i672._transitions = i674
  return i672
}

Deserializers["Vampire.VampireStates.RunState"] = function (request, data, root) {
  var i676 = root || request.c( 'Vampire.VampireStates.RunState' )
  var i677 = data
  var i679 = i677[0]
  var i678 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i679.length; i += 2) {
  request.r(i679[i + 0], i679[i + 1], 1, i678, '')
  }
  i676._transitions = i678
  return i676
}

Deserializers["Vampire.VampireStates.HealRunState"] = function (request, data, root) {
  var i680 = root || request.c( 'Vampire.VampireStates.HealRunState' )
  var i681 = data
  var i683 = i681[0]
  var i682 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i683.length; i += 2) {
  request.r(i683[i + 0], i683[i + 1], 1, i682, '')
  }
  i680._transitions = i682
  return i680
}

Deserializers["Vampire.VampireStates.HealCompleteState"] = function (request, data, root) {
  var i684 = root || request.c( 'Vampire.VampireStates.HealCompleteState' )
  var i685 = data
  var i687 = i685[0]
  var i686 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i687.length; i += 2) {
  request.r(i687[i + 0], i687[i + 1], 1, i686, '')
  }
  i684._transitions = i686
  return i684
}

Deserializers["Vampire.VampireTransitions.IdleTransition"] = function (request, data, root) {
  var i688 = root || request.c( 'Vampire.VampireTransitions.IdleTransition' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, '_targetState')
  return i688
}

Deserializers["Vampire.VampireTransitions.MoveTransition"] = function (request, data, root) {
  var i690 = root || request.c( 'Vampire.VampireTransitions.MoveTransition' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, '_targetState')
  return i690
}

Deserializers["Vampire.VampireTransitions.HealTransition"] = function (request, data, root) {
  var i692 = root || request.c( 'Vampire.VampireTransitions.HealTransition' )
  var i693 = data
  i692._transitionRange = i693[0]
  i692._rangeSpread = i693[1]
  request.r(i693[2], i693[3], 0, i692, '_targetState')
  return i692
}

Deserializers["Vampire.VampireTransitions.HealRunTransition"] = function (request, data, root) {
  var i694 = root || request.c( 'Vampire.VampireTransitions.HealRunTransition' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, '_targetState')
  return i694
}

Deserializers["Vampire.VampireTransitions.ExitTransition"] = function (request, data, root) {
  var i696 = root || request.c( 'Vampire.VampireTransitions.ExitTransition' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, '_targetState')
  return i696
}

Deserializers["Vampire.VampireStates.MoveState"] = function (request, data, root) {
  var i698 = root || request.c( 'Vampire.VampireStates.MoveState' )
  var i699 = data
  var i701 = i699[0]
  var i700 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 1, i700, '')
  }
  i698._transitions = i700
  return i698
}

Deserializers["Vampire.VampireTransitions.HealCompleteTransition"] = function (request, data, root) {
  var i702 = root || request.c( 'Vampire.VampireTransitions.HealCompleteTransition' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, '_targetState')
  return i702
}

Deserializers["Doctors"] = function (request, data, root) {
  var i704 = root || request.c( 'Doctors' )
  var i705 = data
  var i707 = i705[0]
  var i706 = new (System.Collections.Generic.List$1(Bridge.ns('Doctor.Doctor')))
  for(var i = 0; i < i707.length; i += 2) {
  request.r(i707[i + 0], i707[i + 1], 1, i706, '')
  }
  i704._doctors = i706
  return i704
}

Deserializers["Doctor.Doctor"] = function (request, data, root) {
  var i710 = root || request.c( 'Doctor.Doctor' )
  var i711 = data
  return i710
}

Deserializers["Doctor.DoctorStateMachine"] = function (request, data, root) {
  var i712 = root || request.c( 'Doctor.DoctorStateMachine' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, '_firstState')
  return i712
}

Deserializers["Doctor.DoctorState.DoctorIdleState"] = function (request, data, root) {
  var i714 = root || request.c( 'Doctor.DoctorState.DoctorIdleState' )
  var i715 = data
  var i717 = i715[0]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i717.length; i += 2) {
  request.r(i717[i + 0], i717[i + 1], 1, i716, '')
  }
  i714._transitions = i716
  return i714
}

Deserializers["Doctor.DoctorState.DoctorMoveState"] = function (request, data, root) {
  var i718 = root || request.c( 'Doctor.DoctorState.DoctorMoveState' )
  var i719 = data
  var i721 = i719[0]
  var i720 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i721.length; i += 2) {
  request.r(i721[i + 0], i721[i + 1], 1, i720, '')
  }
  i718._transitions = i720
  return i718
}

Deserializers["Doctor.DoctorState.DoctorHealState"] = function (request, data, root) {
  var i722 = root || request.c( 'Doctor.DoctorState.DoctorHealState' )
  var i723 = data
  var i725 = i723[0]
  var i724 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 1, i724, '')
  }
  i722._transitions = i724
  return i722
}

Deserializers["Doctor.DoctorTransition.DoctorMoveTransition"] = function (request, data, root) {
  var i726 = root || request.c( 'Doctor.DoctorTransition.DoctorMoveTransition' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, '_targetState')
  return i726
}

Deserializers["Doctor.DoctorTransition.DoctorHealTransition"] = function (request, data, root) {
  var i728 = root || request.c( 'Doctor.DoctorTransition.DoctorHealTransition' )
  var i729 = data
  i728._transitionRange = i729[0]
  i728._rangeSpread = i729[1]
  request.r(i729[2], i729[3], 0, i728, '_targetState')
  return i728
}

Deserializers["Doctor.DoctorTransition.DoctorHealRunTransition"] = function (request, data, root) {
  var i730 = root || request.c( 'Doctor.DoctorTransition.DoctorHealRunTransition' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, '_targetState')
  return i730
}

Deserializers["Money.MoneyConroller"] = function (request, data, root) {
  var i732 = root || request.c( 'Money.MoneyConroller' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'moneyUI')
  return i732
}

Deserializers["BuyController"] = function (request, data, root) {
  var i734 = root || request.c( 'BuyController' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, '_money')
  request.r(i735[2], i735[3], 0, i734, '_doctorButton')
  request.r(i735[4], i735[5], 0, i734, '_bedButton')
  var i737 = i735[6]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 1, i736, '')
  }
  i734._doctors = i736
  var i739 = i735[7]
  var i738 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 1, i738, '')
  }
  i734._beds = i738
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i743 = data
  i742.pivot = new pc.Vec2( i743[0], i743[1] )
  i742.anchorMin = new pc.Vec2( i743[2], i743[3] )
  i742.anchorMax = new pc.Vec2( i743[4], i743[5] )
  i742.sizeDelta = new pc.Vec2( i743[6], i743[7] )
  i742.anchoredPosition3D = new pc.Vec3( i743[8], i743[9], i743[10] )
  i742.rotation = new pc.Quat(i743[11], i743[12], i743[13], i743[14])
  i742.scale = new pc.Vec3( i743[15], i743[16], i743[17] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i745 = data
  i744.enabled = !!i745[0]
  i744.planeDistance = i745[1]
  i744.referencePixelsPerUnit = i745[2]
  i744.isFallbackOverlay = !!i745[3]
  i744.renderMode = i745[4]
  i744.renderOrder = i745[5]
  i744.sortingLayerName = i745[6]
  i744.sortingOrder = i745[7]
  i744.scaleFactor = i745[8]
  request.r(i745[9], i745[10], 0, i744, 'worldCamera')
  i744.overrideSorting = !!i745[11]
  i744.pixelPerfect = !!i745[12]
  i744.targetDisplay = i745[13]
  i744.overridePixelPerfect = !!i745[14]
  return i744
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i747 = data
  i746.m_UiScaleMode = i747[0]
  i746.m_ReferencePixelsPerUnit = i747[1]
  i746.m_ScaleFactor = i747[2]
  i746.m_ReferenceResolution = new pc.Vec2( i747[3], i747[4] )
  i746.m_ScreenMatchMode = i747[5]
  i746.m_MatchWidthOrHeight = i747[6]
  i746.m_PhysicalUnit = i747[7]
  i746.m_FallbackScreenDPI = i747[8]
  i746.m_DefaultSpriteDPI = i747[9]
  i746.m_DynamicPixelsPerUnit = i747[10]
  i746.m_PresetInfoIsWorld = !!i747[11]
  return i746
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i749 = data
  i748.m_IgnoreReversedGraphics = !!i749[0]
  i748.m_BlockingObjects = i749[1]
  i748.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i749[2] )
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i751 = data
  i750.cullTransparentMesh = !!i751[0]
  return i750
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.Image' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'm_Sprite')
  i752.m_Type = i753[2]
  i752.m_PreserveAspect = !!i753[3]
  i752.m_FillCenter = !!i753[4]
  i752.m_FillMethod = i753[5]
  i752.m_FillAmount = i753[6]
  i752.m_FillClockwise = !!i753[7]
  i752.m_FillOrigin = i753[8]
  i752.m_UseSpriteMesh = !!i753[9]
  i752.m_PixelsPerUnitMultiplier = i753[10]
  request.r(i753[11], i753[12], 0, i752, 'm_Material')
  i752.m_Maskable = !!i753[13]
  i752.m_Color = new pc.Color(i753[14], i753[15], i753[16], i753[17])
  i752.m_RaycastTarget = !!i753[18]
  i752.m_RaycastPadding = new pc.Vec4( i753[19], i753[20], i753[21], i753[22] )
  return i752
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.UI.Button' )
  var i755 = data
  i754.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i755[0], i754.m_OnClick)
  i754.m_Navigation = request.d('UnityEngine.UI.Navigation', i755[1], i754.m_Navigation)
  i754.m_Transition = i755[2]
  i754.m_Colors = request.d('UnityEngine.UI.ColorBlock', i755[3], i754.m_Colors)
  i754.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i755[4], i754.m_SpriteState)
  i754.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i755[5], i754.m_AnimationTriggers)
  i754.m_Interactable = !!i755[6]
  request.r(i755[7], i755[8], 0, i754, 'm_TargetGraphic')
  return i754
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i757 = data
  i756.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i757[0], i756.m_PersistentCalls)
  return i756
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i759 = data
  var i761 = i759[0]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i761.length; i += 1) {
    i760.add(request.d('UnityEngine.Events.PersistentCall', i761[i + 0]));
  }
  i758.m_Calls = i760
  return i758
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'm_Target')
  i764.m_TargetAssemblyTypeName = i765[2]
  i764.m_MethodName = i765[3]
  i764.m_Mode = i765[4]
  i764.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i765[5], i764.m_Arguments)
  i764.m_CallState = i765[6]
  return i764
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i767 = data
  i766.m_Mode = i767[0]
  i766.m_WrapAround = !!i767[1]
  request.r(i767[2], i767[3], 0, i766, 'm_SelectOnUp')
  request.r(i767[4], i767[5], 0, i766, 'm_SelectOnDown')
  request.r(i767[6], i767[7], 0, i766, 'm_SelectOnLeft')
  request.r(i767[8], i767[9], 0, i766, 'm_SelectOnRight')
  return i766
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i769 = data
  i768.m_NormalColor = new pc.Color(i769[0], i769[1], i769[2], i769[3])
  i768.m_HighlightedColor = new pc.Color(i769[4], i769[5], i769[6], i769[7])
  i768.m_PressedColor = new pc.Color(i769[8], i769[9], i769[10], i769[11])
  i768.m_SelectedColor = new pc.Color(i769[12], i769[13], i769[14], i769[15])
  i768.m_DisabledColor = new pc.Color(i769[16], i769[17], i769[18], i769[19])
  i768.m_ColorMultiplier = i769[20]
  i768.m_FadeDuration = i769[21]
  return i768
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'm_HighlightedSprite')
  request.r(i771[2], i771[3], 0, i770, 'm_PressedSprite')
  request.r(i771[4], i771[5], 0, i770, 'm_SelectedSprite')
  request.r(i771[6], i771[7], 0, i770, 'm_DisabledSprite')
  return i770
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i773 = data
  i772.m_NormalTrigger = i773[0]
  i772.m_HighlightedTrigger = i773[1]
  i772.m_PressedTrigger = i773[2]
  i772.m_SelectedTrigger = i773[3]
  i772.m_DisabledTrigger = i773[4]
  return i772
}

Deserializers["Money.BuyButton"] = function (request, data, root) {
  var i774 = root || request.c( 'Money.BuyButton' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, '_priceText')
  request.r(i775[2], i775[3], 0, i774, '_button')
  return i774
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i776 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i777 = data
  i776.m_hasFontAssetChanged = !!i777[0]
  request.r(i777[1], i777[2], 0, i776, 'm_baseMaterial')
  i776.m_maskOffset = new pc.Vec4( i777[3], i777[4], i777[5], i777[6] )
  i776.m_text = i777[7]
  i776.m_isRightToLeft = !!i777[8]
  request.r(i777[9], i777[10], 0, i776, 'm_fontAsset')
  request.r(i777[11], i777[12], 0, i776, 'm_sharedMaterial')
  var i779 = i777[13]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i776.m_fontSharedMaterials = i778
  request.r(i777[14], i777[15], 0, i776, 'm_fontMaterial')
  var i781 = i777[16]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i776.m_fontMaterials = i780
  i776.m_fontColor32 = UnityEngine.Color32.ConstructColor(i777[17], i777[18], i777[19], i777[20])
  i776.m_fontColor = new pc.Color(i777[21], i777[22], i777[23], i777[24])
  i776.m_enableVertexGradient = !!i777[25]
  i776.m_colorMode = i777[26]
  i776.m_fontColorGradient = request.d('TMPro.VertexGradient', i777[27], i776.m_fontColorGradient)
  request.r(i777[28], i777[29], 0, i776, 'm_fontColorGradientPreset')
  request.r(i777[30], i777[31], 0, i776, 'm_spriteAsset')
  i776.m_tintAllSprites = !!i777[32]
  request.r(i777[33], i777[34], 0, i776, 'm_StyleSheet')
  i776.m_TextStyleHashCode = i777[35]
  i776.m_overrideHtmlColors = !!i777[36]
  i776.m_faceColor = UnityEngine.Color32.ConstructColor(i777[37], i777[38], i777[39], i777[40])
  i776.m_fontSize = i777[41]
  i776.m_fontSizeBase = i777[42]
  i776.m_fontWeight = i777[43]
  i776.m_enableAutoSizing = !!i777[44]
  i776.m_fontSizeMin = i777[45]
  i776.m_fontSizeMax = i777[46]
  i776.m_fontStyle = i777[47]
  i776.m_HorizontalAlignment = i777[48]
  i776.m_VerticalAlignment = i777[49]
  i776.m_textAlignment = i777[50]
  i776.m_characterSpacing = i777[51]
  i776.m_wordSpacing = i777[52]
  i776.m_lineSpacing = i777[53]
  i776.m_lineSpacingMax = i777[54]
  i776.m_paragraphSpacing = i777[55]
  i776.m_charWidthMaxAdj = i777[56]
  i776.m_enableWordWrapping = !!i777[57]
  i776.m_wordWrappingRatios = i777[58]
  i776.m_overflowMode = i777[59]
  request.r(i777[60], i777[61], 0, i776, 'm_linkedTextComponent')
  request.r(i777[62], i777[63], 0, i776, 'parentLinkedComponent')
  i776.m_enableKerning = !!i777[64]
  i776.m_enableExtraPadding = !!i777[65]
  i776.checkPaddingRequired = !!i777[66]
  i776.m_isRichText = !!i777[67]
  i776.m_parseCtrlCharacters = !!i777[68]
  i776.m_isOrthographic = !!i777[69]
  i776.m_isCullingEnabled = !!i777[70]
  i776.m_horizontalMapping = i777[71]
  i776.m_verticalMapping = i777[72]
  i776.m_uvLineOffset = i777[73]
  i776.m_geometrySortingOrder = i777[74]
  i776.m_IsTextObjectScaleStatic = !!i777[75]
  i776.m_VertexBufferAutoSizeReduction = !!i777[76]
  i776.m_useMaxVisibleDescender = !!i777[77]
  i776.m_pageToDisplay = i777[78]
  i776.m_margin = new pc.Vec4( i777[79], i777[80], i777[81], i777[82] )
  i776.m_isUsingLegacyAnimationComponent = !!i777[83]
  i776.m_isVolumetricText = !!i777[84]
  request.r(i777[85], i777[86], 0, i776, 'm_Material')
  i776.m_Maskable = !!i777[87]
  i776.m_Color = new pc.Color(i777[88], i777[89], i777[90], i777[91])
  i776.m_RaycastTarget = !!i777[92]
  i776.m_RaycastPadding = new pc.Vec4( i777[93], i777[94], i777[95], i777[96] )
  return i776
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i782 = root || request.c( 'TMPro.VertexGradient' )
  var i783 = data
  i782.topLeft = new pc.Color(i783[0], i783[1], i783[2], i783[3])
  i782.topRight = new pc.Color(i783[4], i783[5], i783[6], i783[7])
  i782.bottomLeft = new pc.Color(i783[8], i783[9], i783[10], i783[11])
  i782.bottomRight = new pc.Color(i783[12], i783[13], i783[14], i783[15])
  return i782
}

Deserializers["Money.MoneyUI"] = function (request, data, root) {
  var i784 = root || request.c( 'Money.MoneyUI' )
  var i785 = data
  return i784
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'm_FirstSelected')
  i786.m_sendNavigationEvents = !!i787[2]
  i786.m_DragThreshold = i787[3]
  return i786
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i789 = data
  i788.m_HorizontalAxis = i789[0]
  i788.m_VerticalAxis = i789[1]
  i788.m_SubmitButton = i789[2]
  i788.m_CancelButton = i789[3]
  i788.m_InputActionsPerSecond = i789[4]
  i788.m_RepeatDelay = i789[5]
  i788.m_ForceModuleActive = !!i789[6]
  i788.m_SendPointerHoverToParent = !!i789[7]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i791 = data
  i790.ambientIntensity = i791[0]
  i790.reflectionIntensity = i791[1]
  i790.ambientMode = i791[2]
  i790.ambientLight = new pc.Color(i791[3], i791[4], i791[5], i791[6])
  i790.ambientSkyColor = new pc.Color(i791[7], i791[8], i791[9], i791[10])
  i790.ambientGroundColor = new pc.Color(i791[11], i791[12], i791[13], i791[14])
  i790.ambientEquatorColor = new pc.Color(i791[15], i791[16], i791[17], i791[18])
  i790.fogColor = new pc.Color(i791[19], i791[20], i791[21], i791[22])
  i790.fogEndDistance = i791[23]
  i790.fogStartDistance = i791[24]
  i790.fogDensity = i791[25]
  i790.fog = !!i791[26]
  request.r(i791[27], i791[28], 0, i790, 'skybox')
  i790.fogMode = i791[29]
  var i793 = i791[30]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i793[i + 0]) );
  }
  i790.lightmaps = i792
  i790.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i791[31], i790.lightProbes)
  i790.lightmapsMode = i791[32]
  i790.mixedBakeMode = i791[33]
  i790.environmentLightingMode = i791[34]
  i790.ambientProbe = new pc.SphericalHarmonicsL2(i791[35])
  i790.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i791[36])
  i790.useReferenceAmbientProbe = !!i791[37]
  request.r(i791[38], i791[39], 0, i790, 'customReflection')
  request.r(i791[40], i791[41], 0, i790, 'defaultReflection')
  i790.defaultReflectionMode = i791[42]
  i790.defaultReflectionResolution = i791[43]
  i790.sunLightObjectId = i791[44]
  i790.pixelLightCount = i791[45]
  i790.defaultReflectionHDR = !!i791[46]
  i790.hasLightDataAsset = !!i791[47]
  i790.hasManualGenerate = !!i791[48]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'lightmapColor')
  request.r(i797[2], i797[3], 0, i796, 'lightmapDirection')
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i798 = root || new UnityEngine.LightProbes()
  var i799 = data
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i807 = data
  var i809 = i807[0]
  var i808 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i809.length; i += 1) {
    i808.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i809[i + 0]));
  }
  i806.ShaderCompilationErrors = i808
  i806.name = i807[1]
  i806.guid = i807[2]
  var i811 = i807[3]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( i811[i + 0] );
  }
  i806.shaderDefinedKeywords = i810
  var i813 = i807[4]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i813[i + 0]) );
  }
  i806.passes = i812
  var i815 = i807[5]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i815[i + 0]) );
  }
  i806.usePasses = i814
  var i817 = i807[6]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i817[i + 0]) );
  }
  i806.defaultParameterValues = i816
  request.r(i807[7], i807[8], 0, i806, 'unityFallbackShader')
  i806.readDepth = !!i807[9]
  i806.isCreatedByShaderGraph = !!i807[10]
  i806.compiled = !!i807[11]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i821 = data
  i820.shaderName = i821[0]
  i820.errorMessage = i821[1]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i826 = root || new pc.UnityShaderPass()
  var i827 = data
  i826.id = i827[0]
  i826.subShaderIndex = i827[1]
  i826.name = i827[2]
  i826.passType = i827[3]
  i826.grabPassTextureName = i827[4]
  i826.usePass = !!i827[5]
  i826.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[6], i826.zTest)
  i826.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[7], i826.zWrite)
  i826.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[8], i826.culling)
  i826.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i827[9], i826.blending)
  i826.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i827[10], i826.alphaBlending)
  i826.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[11], i826.colorWriteMask)
  i826.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[12], i826.offsetUnits)
  i826.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[13], i826.offsetFactor)
  i826.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[14], i826.stencilRef)
  i826.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[15], i826.stencilReadMask)
  i826.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[16], i826.stencilWriteMask)
  i826.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i827[17], i826.stencilOp)
  i826.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i827[18], i826.stencilOpFront)
  i826.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i827[19], i826.stencilOpBack)
  var i829 = i827[20]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i829[i + 0]) );
  }
  i826.tags = i828
  var i831 = i827[21]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( i831[i + 0] );
  }
  i826.passDefinedKeywords = i830
  var i833 = i827[22]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i833[i + 0]) );
  }
  i826.passDefinedKeywordGroups = i832
  var i835 = i827[23]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i835[i + 0]) );
  }
  i826.variants = i834
  var i837 = i827[24]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i837[i + 0]) );
  }
  i826.excludedVariants = i836
  i826.hasDepthReader = !!i827[25]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i839 = data
  i838.val = i839[0]
  i838.name = i839[1]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i841 = data
  i840.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[0], i840.src)
  i840.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[1], i840.dst)
  i840.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[2], i840.op)
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i843 = data
  i842.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[0], i842.pass)
  i842.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[1], i842.fail)
  i842.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[2], i842.zFail)
  i842.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[3], i842.comp)
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i847 = data
  i846.name = i847[0]
  i846.value = i847[1]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i851 = data
  var i853 = i851[0]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( i853[i + 0] );
  }
  i850.keywords = i852
  i850.hasDiscard = !!i851[1]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i857 = data
  i856.passId = i857[0]
  i856.subShaderIndex = i857[1]
  var i859 = i857[2]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( i859[i + 0] );
  }
  i856.keywords = i858
  i856.vertexProgram = i857[3]
  i856.fragmentProgram = i857[4]
  i856.exportedForWebGl2 = !!i857[5]
  i856.readDepth = !!i857[6]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'shader')
  i862.pass = i863[2]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i867 = data
  i866.name = i867[0]
  i866.type = i867[1]
  i866.value = new pc.Vec4( i867[2], i867[3], i867[4], i867[5] )
  i866.textureValue = i867[6]
  i866.shaderPropertyFlag = i867[7]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i869 = data
  i868.name = i869[0]
  request.r(i869[1], i869[2], 0, i868, 'texture')
  i868.aabb = i869[3]
  i868.vertices = i869[4]
  i868.triangles = i869[5]
  i868.textureRect = UnityEngine.Rect.MinMaxRect(i869[6], i869[7], i869[8], i869[9])
  i868.packedRect = UnityEngine.Rect.MinMaxRect(i869[10], i869[11], i869[12], i869[13])
  i868.border = new pc.Vec4( i869[14], i869[15], i869[16], i869[17] )
  i868.transparency = i869[18]
  i868.bounds = i869[19]
  i868.pixelsPerUnit = i869[20]
  i868.textureWidth = i869[21]
  i868.textureHeight = i869[22]
  i868.nativeSize = new pc.Vec2( i869[23], i869[24] )
  i868.pivot = new pc.Vec2( i869[25], i869[26] )
  i868.textureRectOffset = new pc.Vec2( i869[27], i869[28] )
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i871 = data
  i870.name = i871[0]
  i870.wrapMode = i871[1]
  i870.isLooping = !!i871[2]
  i870.length = i871[3]
  var i873 = i871[4]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i873[i + 0]) );
  }
  i870.curves = i872
  var i875 = i871[5]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i875[i + 0]) );
  }
  i870.events = i874
  i870.halfPrecision = !!i871[6]
  i870._frameRate = i871[7]
  i870.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i871[8], i870.localBounds)
  i870.hasMuscleCurves = !!i871[9]
  var i877 = i871[10]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( i877[i + 0] );
  }
  i870.clipMuscleConstant = i876
  i870.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i871[11], i870.clipBindingConstant)
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i881 = data
  i880.path = i881[0]
  i880.hash = i881[1]
  i880.componentType = i881[2]
  i880.property = i881[3]
  i880.keys = i881[4]
  var i883 = i881[5]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i883[i + 0]) );
  }
  i880.objectReferenceKeys = i882
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i887 = data
  i886.time = i887[0]
  request.r(i887[1], i887[2], 0, i886, 'value')
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i891 = data
  i890.functionName = i891[0]
  i890.floatParameter = i891[1]
  i890.intParameter = i891[2]
  i890.stringParameter = i891[3]
  request.r(i891[4], i891[5], 0, i890, 'objectReferenceParameter')
  i890.time = i891[6]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i893 = data
  i892.center = new pc.Vec3( i893[0], i893[1], i893[2] )
  i892.extends = new pc.Vec3( i893[3], i893[4], i893[5] )
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i897 = data
  var i899 = i897[0]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( i899[i + 0] );
  }
  i896.genericBindings = i898
  var i901 = i897[1]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( i901[i + 0] );
  }
  i896.pptrCurveMapping = i900
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i903 = data
  i902.name = i903[0]
  i902.ascent = i903[1]
  i902.originalLineHeight = i903[2]
  i902.fontSize = i903[3]
  var i905 = i903[4]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i905[i + 0]) );
  }
  i902.characterInfo = i904
  request.r(i903[5], i903[6], 0, i902, 'texture')
  i902.originalFontSize = i903[7]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i909 = data
  i908.index = i909[0]
  i908.advance = i909[1]
  i908.bearing = i909[2]
  i908.glyphWidth = i909[3]
  i908.glyphHeight = i909[4]
  i908.minX = i909[5]
  i908.maxX = i909[6]
  i908.minY = i909[7]
  i908.maxY = i909[8]
  i908.uvBottomLeftX = i909[9]
  i908.uvBottomLeftY = i909[10]
  i908.uvBottomRightX = i909[11]
  i908.uvBottomRightY = i909[12]
  i908.uvTopLeftX = i909[13]
  i908.uvTopLeftY = i909[14]
  i908.uvTopRightX = i909[15]
  i908.uvTopRightY = i909[16]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i911 = data
  i910.name = i911[0]
  var i913 = i911[1]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i913[i + 0]) );
  }
  i910.layers = i912
  var i915 = i911[2]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i915[i + 0]) );
  }
  i910.parameters = i914
  i910.animationClips = i911[3]
  i910.avatarUnsupported = i911[4]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i919 = data
  i918.name = i919[0]
  i918.defaultWeight = i919[1]
  i918.blendingMode = i919[2]
  i918.avatarMask = i919[3]
  i918.syncedLayerIndex = i919[4]
  i918.syncedLayerAffectsTiming = !!i919[5]
  i918.syncedLayers = i919[6]
  i918.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i919[7], i918.stateMachine)
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i921 = data
  i920.id = i921[0]
  i920.name = i921[1]
  i920.path = i921[2]
  var i923 = i921[3]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i923[i + 0]) );
  }
  i920.states = i922
  var i925 = i921[4]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i925[i + 0]) );
  }
  i920.machines = i924
  var i927 = i921[5]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i927[i + 0]) );
  }
  i920.entryStateTransitions = i926
  var i929 = i921[6]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i929[i + 0]) );
  }
  i920.exitStateTransitions = i928
  var i931 = i921[7]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i931[i + 0]) );
  }
  i920.anyStateTransitions = i930
  i920.defaultStateId = i921[8]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i935 = data
  i934.id = i935[0]
  i934.name = i935[1]
  i934.cycleOffset = i935[2]
  i934.cycleOffsetParameter = i935[3]
  i934.cycleOffsetParameterActive = !!i935[4]
  i934.mirror = !!i935[5]
  i934.mirrorParameter = i935[6]
  i934.mirrorParameterActive = !!i935[7]
  i934.motionId = i935[8]
  i934.nameHash = i935[9]
  i934.fullPathHash = i935[10]
  i934.speed = i935[11]
  i934.speedParameter = i935[12]
  i934.speedParameterActive = !!i935[13]
  i934.tag = i935[14]
  i934.tagHash = i935[15]
  i934.writeDefaultValues = !!i935[16]
  var i937 = i935[17]
  var i936 = []
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 2, i936, '')
  }
  i934.behaviours = i936
  var i939 = i935[18]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i939[i + 0]) );
  }
  i934.transitions = i938
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i945 = data
  i944.fullPath = i945[0]
  i944.canTransitionToSelf = !!i945[1]
  i944.duration = i945[2]
  i944.exitTime = i945[3]
  i944.hasExitTime = !!i945[4]
  i944.hasFixedDuration = !!i945[5]
  i944.interruptionSource = i945[6]
  i944.offset = i945[7]
  i944.orderedInterruption = !!i945[8]
  i944.destinationStateId = i945[9]
  i944.isExit = !!i945[10]
  i944.mute = !!i945[11]
  i944.solo = !!i945[12]
  var i947 = i945[13]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i947[i + 0]) );
  }
  i944.conditions = i946
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i953 = data
  i952.destinationStateId = i953[0]
  i952.isExit = !!i953[1]
  i952.mute = !!i953[2]
  i952.solo = !!i953[3]
  var i955 = i953[4]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i955[i + 0]) );
  }
  i952.conditions = i954
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i959 = data
  i958.mode = i959[0]
  i958.parameter = i959[1]
  i958.threshold = i959[2]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i963 = data
  i962.defaultBool = !!i963[0]
  i962.defaultFloat = i963[1]
  i962.defaultInt = i963[2]
  i962.name = i963[3]
  i962.nameHash = i963[4]
  i962.type = i963[5]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i965 = data
  i964.name = i965[0]
  i964.bytes64 = i965[1]
  i964.data = i965[2]
  return i964
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i966 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i967 = data
  i966.hashCode = i967[0]
  request.r(i967[1], i967[2], 0, i966, 'material')
  i966.materialHashCode = i967[3]
  request.r(i967[4], i967[5], 0, i966, 'atlas')
  i966.normalStyle = i967[6]
  i966.normalSpacingOffset = i967[7]
  i966.boldStyle = i967[8]
  i966.boldSpacing = i967[9]
  i966.italicStyle = i967[10]
  i966.tabSize = i967[11]
  i966.m_Version = i967[12]
  i966.m_SourceFontFileGUID = i967[13]
  request.r(i967[14], i967[15], 0, i966, 'm_SourceFontFile_EditorRef')
  request.r(i967[16], i967[17], 0, i966, 'm_SourceFontFile')
  i966.m_AtlasPopulationMode = i967[18]
  i966.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i967[19], i966.m_FaceInfo)
  var i969 = i967[20]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i969.length; i += 1) {
    i968.add(request.d('UnityEngine.TextCore.Glyph', i969[i + 0]));
  }
  i966.m_GlyphTable = i968
  var i971 = i967[21]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i971.length; i += 1) {
    i970.add(request.d('TMPro.TMP_Character', i971[i + 0]));
  }
  i966.m_CharacterTable = i970
  var i973 = i967[22]
  var i972 = []
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 2, i972, '')
  }
  i966.m_AtlasTextures = i972
  i966.m_AtlasTextureIndex = i967[23]
  i966.m_IsMultiAtlasTexturesEnabled = !!i967[24]
  i966.m_ClearDynamicDataOnBuild = !!i967[25]
  var i975 = i967[26]
  var i974 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i975.length; i += 1) {
    i974.add(request.d('UnityEngine.TextCore.GlyphRect', i975[i + 0]));
  }
  i966.m_UsedGlyphRects = i974
  var i977 = i967[27]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i977.length; i += 1) {
    i976.add(request.d('UnityEngine.TextCore.GlyphRect', i977[i + 0]));
  }
  i966.m_FreeGlyphRects = i976
  i966.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i967[28], i966.m_fontInfo)
  i966.m_AtlasWidth = i967[29]
  i966.m_AtlasHeight = i967[30]
  i966.m_AtlasPadding = i967[31]
  i966.m_AtlasRenderMode = i967[32]
  var i979 = i967[33]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i979.length; i += 1) {
    i978.add(request.d('TMPro.TMP_Glyph', i979[i + 0]));
  }
  i966.m_glyphInfoList = i978
  i966.m_KerningTable = request.d('TMPro.KerningTable', i967[34], i966.m_KerningTable)
  i966.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i967[35], i966.m_FontFeatureTable)
  var i981 = i967[36]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 1, i980, '')
  }
  i966.fallbackFontAssets = i980
  var i983 = i967[37]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 1, i982, '')
  }
  i966.m_FallbackFontAssetTable = i982
  i966.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i967[38], i966.m_CreationSettings)
  var i985 = i967[39]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('TMPro.TMP_FontWeightPair', i985[i + 0]) );
  }
  i966.m_FontWeightTable = i984
  var i987 = i967[40]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('TMPro.TMP_FontWeightPair', i987[i + 0]) );
  }
  i966.fontWeights = i986
  return i966
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i989 = data
  i988.m_FaceIndex = i989[0]
  i988.m_FamilyName = i989[1]
  i988.m_StyleName = i989[2]
  i988.m_PointSize = i989[3]
  i988.m_Scale = i989[4]
  i988.m_UnitsPerEM = i989[5]
  i988.m_LineHeight = i989[6]
  i988.m_AscentLine = i989[7]
  i988.m_CapLine = i989[8]
  i988.m_MeanLine = i989[9]
  i988.m_Baseline = i989[10]
  i988.m_DescentLine = i989[11]
  i988.m_SuperscriptOffset = i989[12]
  i988.m_SuperscriptSize = i989[13]
  i988.m_SubscriptOffset = i989[14]
  i988.m_SubscriptSize = i989[15]
  i988.m_UnderlineOffset = i989[16]
  i988.m_UnderlineThickness = i989[17]
  i988.m_StrikethroughOffset = i989[18]
  i988.m_StrikethroughThickness = i989[19]
  i988.m_TabWidth = i989[20]
  return i988
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i993 = data
  i992.m_Index = i993[0]
  i992.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i993[1], i992.m_Metrics)
  i992.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i993[2], i992.m_GlyphRect)
  i992.m_Scale = i993[3]
  i992.m_AtlasIndex = i993[4]
  i992.m_ClassDefinitionType = i993[5]
  return i992
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i995 = data
  i994.m_Width = i995[0]
  i994.m_Height = i995[1]
  i994.m_HorizontalBearingX = i995[2]
  i994.m_HorizontalBearingY = i995[3]
  i994.m_HorizontalAdvance = i995[4]
  return i994
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i997 = data
  i996.m_X = i997[0]
  i996.m_Y = i997[1]
  i996.m_Width = i997[2]
  i996.m_Height = i997[3]
  return i996
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1000 = root || request.c( 'TMPro.TMP_Character' )
  var i1001 = data
  i1000.m_ElementType = i1001[0]
  i1000.m_Unicode = i1001[1]
  i1000.m_GlyphIndex = i1001[2]
  i1000.m_Scale = i1001[3]
  return i1000
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1006 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1007 = data
  i1006.Name = i1007[0]
  i1006.PointSize = i1007[1]
  i1006.Scale = i1007[2]
  i1006.CharacterCount = i1007[3]
  i1006.LineHeight = i1007[4]
  i1006.Baseline = i1007[5]
  i1006.Ascender = i1007[6]
  i1006.CapHeight = i1007[7]
  i1006.Descender = i1007[8]
  i1006.CenterLine = i1007[9]
  i1006.SuperscriptOffset = i1007[10]
  i1006.SubscriptOffset = i1007[11]
  i1006.SubSize = i1007[12]
  i1006.Underline = i1007[13]
  i1006.UnderlineThickness = i1007[14]
  i1006.strikethrough = i1007[15]
  i1006.strikethroughThickness = i1007[16]
  i1006.TabWidth = i1007[17]
  i1006.Padding = i1007[18]
  i1006.AtlasWidth = i1007[19]
  i1006.AtlasHeight = i1007[20]
  return i1006
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1010 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1011 = data
  i1010.id = i1011[0]
  i1010.x = i1011[1]
  i1010.y = i1011[2]
  i1010.width = i1011[3]
  i1010.height = i1011[4]
  i1010.xOffset = i1011[5]
  i1010.yOffset = i1011[6]
  i1010.xAdvance = i1011[7]
  i1010.scale = i1011[8]
  return i1010
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1012 = root || request.c( 'TMPro.KerningTable' )
  var i1013 = data
  var i1015 = i1013[0]
  var i1014 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.add(request.d('TMPro.KerningPair', i1015[i + 0]));
  }
  i1012.kerningPairs = i1014
  return i1012
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1018 = root || request.c( 'TMPro.KerningPair' )
  var i1019 = data
  i1018.xOffset = i1019[0]
  i1018.m_FirstGlyph = i1019[1]
  i1018.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1019[2], i1018.m_FirstGlyphAdjustments)
  i1018.m_SecondGlyph = i1019[3]
  i1018.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1019[4], i1018.m_SecondGlyphAdjustments)
  i1018.m_IgnoreSpacingAdjustments = !!i1019[5]
  return i1018
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1020 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1021 = data
  var i1023 = i1021[0]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1023[i + 0]));
  }
  i1020.m_GlyphPairAdjustmentRecords = i1022
  return i1020
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1026 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1027 = data
  i1026.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1027[0], i1026.m_FirstAdjustmentRecord)
  i1026.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1027[1], i1026.m_SecondAdjustmentRecord)
  i1026.m_FeatureLookupFlags = i1027[2]
  return i1026
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1028 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1029 = data
  i1028.m_GlyphIndex = i1029[0]
  i1028.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1029[1], i1028.m_GlyphValueRecord)
  return i1028
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1030 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1031 = data
  i1030.m_XPlacement = i1031[0]
  i1030.m_YPlacement = i1031[1]
  i1030.m_XAdvance = i1031[2]
  i1030.m_YAdvance = i1031[3]
  return i1030
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1034 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1035 = data
  i1034.sourceFontFileName = i1035[0]
  i1034.sourceFontFileGUID = i1035[1]
  i1034.pointSizeSamplingMode = i1035[2]
  i1034.pointSize = i1035[3]
  i1034.padding = i1035[4]
  i1034.packingMode = i1035[5]
  i1034.atlasWidth = i1035[6]
  i1034.atlasHeight = i1035[7]
  i1034.characterSetSelectionMode = i1035[8]
  i1034.characterSequence = i1035[9]
  i1034.referencedFontAssetGUID = i1035[10]
  i1034.referencedTextAssetGUID = i1035[11]
  i1034.fontStyle = i1035[12]
  i1034.fontStyleModifier = i1035[13]
  i1034.renderMode = i1035[14]
  i1034.includeFontFeatures = !!i1035[15]
  return i1034
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'regularTypeface')
  request.r(i1039[2], i1039[3], 0, i1038, 'italicTypeface')
  return i1038
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1040 = root || request.c( 'TMPro.TMP_Settings' )
  var i1041 = data
  i1040.m_enableWordWrapping = !!i1041[0]
  i1040.m_enableKerning = !!i1041[1]
  i1040.m_enableExtraPadding = !!i1041[2]
  i1040.m_enableTintAllSprites = !!i1041[3]
  i1040.m_enableParseEscapeCharacters = !!i1041[4]
  i1040.m_EnableRaycastTarget = !!i1041[5]
  i1040.m_GetFontFeaturesAtRuntime = !!i1041[6]
  i1040.m_missingGlyphCharacter = i1041[7]
  i1040.m_warningsDisabled = !!i1041[8]
  request.r(i1041[9], i1041[10], 0, i1040, 'm_defaultFontAsset')
  i1040.m_defaultFontAssetPath = i1041[11]
  i1040.m_defaultFontSize = i1041[12]
  i1040.m_defaultAutoSizeMinRatio = i1041[13]
  i1040.m_defaultAutoSizeMaxRatio = i1041[14]
  i1040.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1041[15], i1041[16] )
  i1040.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1041[17], i1041[18] )
  i1040.m_autoSizeTextContainer = !!i1041[19]
  i1040.m_IsTextObjectScaleStatic = !!i1041[20]
  var i1043 = i1041[21]
  var i1042 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1043.length; i += 2) {
  request.r(i1043[i + 0], i1043[i + 1], 1, i1042, '')
  }
  i1040.m_fallbackFontAssets = i1042
  i1040.m_matchMaterialPreset = !!i1041[22]
  request.r(i1041[23], i1041[24], 0, i1040, 'm_defaultSpriteAsset')
  i1040.m_defaultSpriteAssetPath = i1041[25]
  i1040.m_enableEmojiSupport = !!i1041[26]
  i1040.m_MissingCharacterSpriteUnicode = i1041[27]
  i1040.m_defaultColorGradientPresetsPath = i1041[28]
  request.r(i1041[29], i1041[30], 0, i1040, 'm_defaultStyleSheet')
  i1040.m_StyleSheetsResourcePath = i1041[31]
  request.r(i1041[32], i1041[33], 0, i1040, 'm_leadingCharacters')
  request.r(i1041[34], i1041[35], 0, i1040, 'm_followingCharacters')
  i1040.m_UseModernHangulLineBreakingRules = !!i1041[36]
  return i1040
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1044 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1045 = data
  i1044.hashCode = i1045[0]
  request.r(i1045[1], i1045[2], 0, i1044, 'material')
  i1044.materialHashCode = i1045[3]
  request.r(i1045[4], i1045[5], 0, i1044, 'spriteSheet')
  var i1047 = i1045[6]
  var i1046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.add(request.d('TMPro.TMP_Sprite', i1047[i + 0]));
  }
  i1044.spriteInfoList = i1046
  var i1049 = i1045[7]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1049.length; i += 2) {
  request.r(i1049[i + 0], i1049[i + 1], 1, i1048, '')
  }
  i1044.fallbackSpriteAssets = i1048
  i1044.m_Version = i1045[8]
  i1044.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1045[9], i1044.m_FaceInfo)
  var i1051 = i1045[10]
  var i1050 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.add(request.d('TMPro.TMP_SpriteCharacter', i1051[i + 0]));
  }
  i1044.m_SpriteCharacterTable = i1050
  var i1053 = i1045[11]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.add(request.d('TMPro.TMP_SpriteGlyph', i1053[i + 0]));
  }
  i1044.m_SpriteGlyphTable = i1052
  return i1044
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1056 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1057 = data
  i1056.name = i1057[0]
  i1056.hashCode = i1057[1]
  i1056.unicode = i1057[2]
  i1056.pivot = new pc.Vec2( i1057[3], i1057[4] )
  request.r(i1057[5], i1057[6], 0, i1056, 'sprite')
  i1056.id = i1057[7]
  i1056.x = i1057[8]
  i1056.y = i1057[9]
  i1056.width = i1057[10]
  i1056.height = i1057[11]
  i1056.xOffset = i1057[12]
  i1056.yOffset = i1057[13]
  i1056.xAdvance = i1057[14]
  i1056.scale = i1057[15]
  return i1056
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1062 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1063 = data
  i1062.m_Name = i1063[0]
  i1062.m_HashCode = i1063[1]
  i1062.m_ElementType = i1063[2]
  i1062.m_Unicode = i1063[3]
  i1062.m_GlyphIndex = i1063[4]
  i1062.m_Scale = i1063[5]
  return i1062
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1066 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1067 = data
  request.r(i1067[0], i1067[1], 0, i1066, 'sprite')
  i1066.m_Index = i1067[2]
  i1066.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1067[3], i1066.m_Metrics)
  i1066.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1067[4], i1066.m_GlyphRect)
  i1066.m_Scale = i1067[5]
  i1066.m_AtlasIndex = i1067[6]
  i1066.m_ClassDefinitionType = i1067[7]
  return i1066
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1068 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1069 = data
  var i1071 = i1069[0]
  var i1070 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.add(request.d('TMPro.TMP_Style', i1071[i + 0]));
  }
  i1068.m_StyleList = i1070
  return i1068
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1074 = root || request.c( 'TMPro.TMP_Style' )
  var i1075 = data
  i1074.m_Name = i1075[0]
  i1074.m_HashCode = i1075[1]
  i1074.m_OpeningDefinition = i1075[2]
  i1074.m_ClosingDefinition = i1075[3]
  i1074.m_OpeningTagArray = i1075[4]
  i1074.m_ClosingTagArray = i1075[5]
  i1074.m_OpeningTagUnicodeArray = i1075[6]
  i1074.m_ClosingTagUnicodeArray = i1075[7]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1077 = data
  var i1079 = i1077[0]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1079[i + 0]) );
  }
  i1076.files = i1078
  i1076.componentToPrefabIds = i1077[1]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1083 = data
  i1082.path = i1083[0]
  request.r(i1083[1], i1083[2], 0, i1082, 'unityObject')
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1085 = data
  var i1087 = i1085[0]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1087[i + 0]) );
  }
  i1084.scriptsExecutionOrder = i1086
  var i1089 = i1085[1]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1089[i + 0]) );
  }
  i1084.sortingLayers = i1088
  var i1091 = i1085[2]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1091[i + 0]) );
  }
  i1084.cullingLayers = i1090
  i1084.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1085[3], i1084.timeSettings)
  i1084.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1085[4], i1084.physicsSettings)
  i1084.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1085[5], i1084.physics2DSettings)
  i1084.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1085[6], i1084.qualitySettings)
  i1084.enableRealtimeShadows = !!i1085[7]
  i1084.enableAutoInstancing = !!i1085[8]
  i1084.enableDynamicBatching = !!i1085[9]
  i1084.lightmapEncodingQuality = i1085[10]
  i1084.desiredColorSpace = i1085[11]
  var i1093 = i1085[12]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( i1093[i + 0] );
  }
  i1084.allTags = i1092
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1097 = data
  i1096.name = i1097[0]
  i1096.value = i1097[1]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1101 = data
  i1100.id = i1101[0]
  i1100.name = i1101[1]
  i1100.value = i1101[2]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1105 = data
  i1104.id = i1105[0]
  i1104.name = i1105[1]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1107 = data
  i1106.fixedDeltaTime = i1107[0]
  i1106.maximumDeltaTime = i1107[1]
  i1106.timeScale = i1107[2]
  i1106.maximumParticleTimestep = i1107[3]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1109 = data
  i1108.gravity = new pc.Vec3( i1109[0], i1109[1], i1109[2] )
  i1108.defaultSolverIterations = i1109[3]
  i1108.bounceThreshold = i1109[4]
  i1108.autoSyncTransforms = !!i1109[5]
  i1108.autoSimulation = !!i1109[6]
  var i1111 = i1109[7]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1111[i + 0]) );
  }
  i1108.collisionMatrix = i1110
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1115 = data
  i1114.enabled = !!i1115[0]
  i1114.layerId = i1115[1]
  i1114.otherLayerId = i1115[2]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'material')
  i1116.gravity = new pc.Vec2( i1117[2], i1117[3] )
  i1116.positionIterations = i1117[4]
  i1116.velocityIterations = i1117[5]
  i1116.velocityThreshold = i1117[6]
  i1116.maxLinearCorrection = i1117[7]
  i1116.maxAngularCorrection = i1117[8]
  i1116.maxTranslationSpeed = i1117[9]
  i1116.maxRotationSpeed = i1117[10]
  i1116.baumgarteScale = i1117[11]
  i1116.baumgarteTOIScale = i1117[12]
  i1116.timeToSleep = i1117[13]
  i1116.linearSleepTolerance = i1117[14]
  i1116.angularSleepTolerance = i1117[15]
  i1116.defaultContactOffset = i1117[16]
  i1116.autoSimulation = !!i1117[17]
  i1116.queriesHitTriggers = !!i1117[18]
  i1116.queriesStartInColliders = !!i1117[19]
  i1116.callbacksOnDisable = !!i1117[20]
  i1116.reuseCollisionCallbacks = !!i1117[21]
  i1116.autoSyncTransforms = !!i1117[22]
  var i1119 = i1117[23]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1119[i + 0]) );
  }
  i1116.collisionMatrix = i1118
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1123 = data
  i1122.enabled = !!i1123[0]
  i1122.layerId = i1123[1]
  i1122.otherLayerId = i1123[2]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1125 = data
  var i1127 = i1125[0]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1127[i + 0]) );
  }
  i1124.qualityLevels = i1126
  var i1129 = i1125[1]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( i1129[i + 0] );
  }
  i1124.names = i1128
  i1124.shadows = i1125[2]
  i1124.anisotropicFiltering = i1125[3]
  i1124.antiAliasing = i1125[4]
  i1124.lodBias = i1125[5]
  i1124.shadowCascades = i1125[6]
  i1124.shadowDistance = i1125[7]
  i1124.shadowmaskMode = i1125[8]
  i1124.shadowProjection = i1125[9]
  i1124.shadowResolution = i1125[10]
  i1124.softParticles = !!i1125[11]
  i1124.softVegetation = !!i1125[12]
  i1124.activeColorSpace = i1125[13]
  i1124.desiredColorSpace = i1125[14]
  i1124.masterTextureLimit = i1125[15]
  i1124.maxQueuedFrames = i1125[16]
  i1124.particleRaycastBudget = i1125[17]
  i1124.pixelLightCount = i1125[18]
  i1124.realtimeReflectionProbes = !!i1125[19]
  i1124.shadowCascade2Split = i1125[20]
  i1124.shadowCascade4Split = new pc.Vec3( i1125[21], i1125[22], i1125[23] )
  i1124.streamingMipmapsActive = !!i1125[24]
  i1124.vSyncCount = i1125[25]
  i1124.asyncUploadBufferSize = i1125[26]
  i1124.asyncUploadTimeSlice = i1125[27]
  i1124.billboardsFaceCameraPosition = !!i1125[28]
  i1124.shadowNearPlaneOffset = i1125[29]
  i1124.streamingMipmapsMemoryBudget = i1125[30]
  i1124.maximumLODLevel = i1125[31]
  i1124.streamingMipmapsAddAllCameras = !!i1125[32]
  i1124.streamingMipmapsMaxLevelReduction = i1125[33]
  i1124.streamingMipmapsRenderersPerFrame = i1125[34]
  i1124.resolutionScalingFixedDPIFactor = i1125[35]
  i1124.streamingMipmapsMaxFileIORequests = i1125[36]
  i1124.currentQualityLevel = i1125[37]
  return i1124
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1132 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1133 = data
  request.r(i1133[0], i1133[1], 0, i1132, 'm_ObjectArgument')
  i1132.m_ObjectArgumentAssemblyTypeName = i1133[2]
  i1132.m_IntArgument = i1133[3]
  i1132.m_FloatArgument = i1133[4]
  i1132.m_StringArgument = i1133[5]
  i1132.m_BoolArgument = !!i1133[6]
  return i1132
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1134 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1135 = data
  i1134.xPlacement = i1135[0]
  i1134.yPlacement = i1135[1]
  i1134.xAdvance = i1135[2]
  i1134.yAdvance = i1135[3]
  return i1134
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[68],"69":[3],"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[71],"78":[79],"80":[79],"81":[79],"82":[79],"83":[79],"84":[79],"85":[79],"86":[79],"87":[79],"88":[79],"89":[79],"90":[79],"91":[79],"92":[3],"93":[94],"95":[96],"97":[96],"44":[43],"16":[14],"98":[99],"100":[5],"101":[99],"102":[43],"103":[43],"47":[44],"49":[48,43],"104":[43],"46":[44],"105":[43],"106":[43],"107":[43],"108":[43],"109":[43],"110":[43],"111":[43],"112":[43],"113":[43],"114":[48,43],"115":[43],"116":[43],"117":[43],"118":[43],"119":[48,43],"120":[43],"121":[53],"122":[53],"54":[53],"123":[53],"124":[3],"125":[3],"126":[127],"128":[3],"129":[43],"130":[94,43],"51":[43,48],"131":[43],"132":[48,43],"133":[94],"134":[48,43],"135":[43],"136":[99]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","Beds","Bed","Vampire.Vampires","Doctors","Vampire.Vampire","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Vampire.VampireStateMachine","Vampire.VampireStates.IdleState","Vampire.VampireTransitions.MoveTransition","Vampire.VampireStates.ExitState","Money.MoneyConroller","Vampire.VampireStates.HealState","Vampire.VampireTransitions.HealRunTransition","Vampire.VampireStates.RunState","Vampire.VampireStates.HealRunState","Vampire.VampireTransitions.HealCompleteTransition","Vampire.VampireStates.HealCompleteState","Vampire.VampireTransitions.ExitTransition","Vampire.VampireTransitions.IdleTransition","Vampire.VampireStates.MoveState","Vampire.VampireTransitions.HealTransition","Doctor.Doctor","Doctor.DoctorStateMachine","Doctor.DoctorState.DoctorIdleState","Doctor.DoctorTransition.DoctorMoveTransition","Doctor.DoctorState.DoctorMoveState","Doctor.DoctorTransition.DoctorHealTransition","Doctor.DoctorState.DoctorHealState","Doctor.DoctorTransition.DoctorHealRunTransition","Money.MoneyUI","BuyController","Money.BuyButton","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Vampirs";

Deserializers.lunaInitializationTime = "04/19/2025 09:54:12";

Deserializers.lunaDaysRunning = "3.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1848";

Deserializers.runtimeAnalysisExcludedMethodsCount = "2893";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs, mecanim-wasm";

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

Deserializers.buildID = "e8952ad4-c49c-4b98-85af-7b1c7d941127";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

