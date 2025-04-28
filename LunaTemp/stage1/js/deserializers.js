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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i631 = data
  i630.position = new pc.Vec3( i631[0], i631[1], i631[2] )
  i630.scale = new pc.Vec3( i631[3], i631[4], i631[5] )
  i630.rotation = new pc.Quat(i631[6], i631[7], i631[8], i631[9])
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

Deserializers["Vampire.Vampire"] = function (request, data, root) {
  var i638 = root || request.c( 'Vampire.Vampire' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'healSprite')
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'animatorController')
  request.r(i641[2], i641[3], 0, i640, 'avatar')
  i640.updateMode = i641[4]
  i640.hasTransformHierarchy = !!i641[5]
  i640.applyRootMotion = !!i641[6]
  var i643 = i641[7]
  var i642 = []
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 2, i642, '')
  }
  i640.humanBones = i642
  i640.enabled = !!i641[8]
  return i640
}

Deserializers["Vampire.VampireStateMachine"] = function (request, data, root) {
  var i646 = root || request.c( 'Vampire.VampireStateMachine' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, '_firstState')
  return i646
}

Deserializers["Vampire.VampireStates.IdleState"] = function (request, data, root) {
  var i648 = root || request.c( 'Vampire.VampireStates.IdleState' )
  var i649 = data
  var i651 = i649[0]
  var i650 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i651.length; i += 2) {
  request.r(i651[i + 0], i651[i + 1], 1, i650, '')
  }
  i648._transitions = i650
  return i648
}

Deserializers["Vampire.VampireStates.ExitState"] = function (request, data, root) {
  var i654 = root || request.c( 'Vampire.VampireStates.ExitState' )
  var i655 = data
  i654._rotationSpeed = i655[0]
  i654._targetAngleZ = i655[1]
  i654._moveSpeed = i655[2]
  request.r(i655[3], i655[4], 0, i654, '_money')
  var i657 = i655[5]
  var i656 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i657.length; i += 2) {
  request.r(i657[i + 0], i657[i + 1], 1, i656, '')
  }
  i654._transitions = i656
  return i654
}

Deserializers["Vampire.VampireStates.HealState"] = function (request, data, root) {
  var i658 = root || request.c( 'Vampire.VampireStates.HealState' )
  var i659 = data
  i658._rotationSpeed = i659[0]
  var i661 = i659[1]
  var i660 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i661.length; i += 2) {
  request.r(i661[i + 0], i661[i + 1], 1, i660, '')
  }
  i658._transitions = i660
  return i658
}

Deserializers["Vampire.VampireStates.RunState"] = function (request, data, root) {
  var i662 = root || request.c( 'Vampire.VampireStates.RunState' )
  var i663 = data
  var i665 = i663[0]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 1, i664, '')
  }
  i662._transitions = i664
  return i662
}

Deserializers["Vampire.VampireStates.HealRunState"] = function (request, data, root) {
  var i666 = root || request.c( 'Vampire.VampireStates.HealRunState' )
  var i667 = data
  var i669 = i667[0]
  var i668 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 1, i668, '')
  }
  i666._transitions = i668
  return i666
}

Deserializers["Vampire.VampireStates.HealCompleteState"] = function (request, data, root) {
  var i670 = root || request.c( 'Vampire.VampireStates.HealCompleteState' )
  var i671 = data
  var i673 = i671[0]
  var i672 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 1, i672, '')
  }
  i670._transitions = i672
  return i670
}

Deserializers["Vampire.VampireTransitions.IdleTransition"] = function (request, data, root) {
  var i674 = root || request.c( 'Vampire.VampireTransitions.IdleTransition' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, '_targetState')
  return i674
}

Deserializers["Vampire.VampireTransitions.MoveTransition"] = function (request, data, root) {
  var i676 = root || request.c( 'Vampire.VampireTransitions.MoveTransition' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, '_targetState')
  return i676
}

Deserializers["Vampire.VampireTransitions.HealTransition"] = function (request, data, root) {
  var i678 = root || request.c( 'Vampire.VampireTransitions.HealTransition' )
  var i679 = data
  i678._transitionRange = i679[0]
  i678._rangeSpread = i679[1]
  request.r(i679[2], i679[3], 0, i678, '_targetState')
  return i678
}

Deserializers["Vampire.VampireTransitions.HealRunTransition"] = function (request, data, root) {
  var i680 = root || request.c( 'Vampire.VampireTransitions.HealRunTransition' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, '_targetState')
  return i680
}

Deserializers["Vampire.VampireTransitions.ExitTransition"] = function (request, data, root) {
  var i682 = root || request.c( 'Vampire.VampireTransitions.ExitTransition' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, '_targetState')
  return i682
}

Deserializers["Vampire.VampireStates.MoveState"] = function (request, data, root) {
  var i684 = root || request.c( 'Vampire.VampireStates.MoveState' )
  var i685 = data
  var i687 = i685[0]
  var i686 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i687.length; i += 2) {
  request.r(i687[i + 0], i687[i + 1], 1, i686, '')
  }
  i684._transitions = i686
  return i684
}

Deserializers["Vampire.VampireTransitions.HealCompleteTransition"] = function (request, data, root) {
  var i688 = root || request.c( 'Vampire.VampireTransitions.HealCompleteTransition' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, '_targetState')
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i691 = data
  i690.name = i691[0]
  i690.tagId = i691[1]
  i690.enabled = !!i691[2]
  i690.isStatic = !!i691[3]
  i690.layer = i691[4]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i693 = data
  i692.name = i693[0]
  i692.index = i693[1]
  i692.startup = !!i693[2]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i695 = data
  i694.pivot = new pc.Vec2( i695[0], i695[1] )
  i694.anchorMin = new pc.Vec2( i695[2], i695[3] )
  i694.anchorMax = new pc.Vec2( i695[4], i695[5] )
  i694.sizeDelta = new pc.Vec2( i695[6], i695[7] )
  i694.anchoredPosition3D = new pc.Vec3( i695[8], i695[9], i695[10] )
  i694.rotation = new pc.Quat(i695[11], i695[12], i695[13], i695[14])
  i694.scale = new pc.Vec3( i695[15], i695[16], i695[17] )
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i697 = data
  i696.enabled = !!i697[0]
  i696.planeDistance = i697[1]
  i696.referencePixelsPerUnit = i697[2]
  i696.isFallbackOverlay = !!i697[3]
  i696.renderMode = i697[4]
  i696.renderOrder = i697[5]
  i696.sortingLayerName = i697[6]
  i696.sortingOrder = i697[7]
  i696.scaleFactor = i697[8]
  request.r(i697[9], i697[10], 0, i696, 'worldCamera')
  i696.overrideSorting = !!i697[11]
  i696.pixelPerfect = !!i697[12]
  i696.targetDisplay = i697[13]
  i696.overridePixelPerfect = !!i697[14]
  return i696
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i699 = data
  i698.m_UiScaleMode = i699[0]
  i698.m_ReferencePixelsPerUnit = i699[1]
  i698.m_ScaleFactor = i699[2]
  i698.m_ReferenceResolution = new pc.Vec2( i699[3], i699[4] )
  i698.m_ScreenMatchMode = i699[5]
  i698.m_MatchWidthOrHeight = i699[6]
  i698.m_PhysicalUnit = i699[7]
  i698.m_FallbackScreenDPI = i699[8]
  i698.m_DefaultSpriteDPI = i699[9]
  i698.m_DynamicPixelsPerUnit = i699[10]
  i698.m_PresetInfoIsWorld = !!i699[11]
  return i698
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i701 = data
  i700.m_IgnoreReversedGraphics = !!i701[0]
  i700.m_BlockingObjects = i701[1]
  i700.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i701[2] )
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i703 = data
  i702.cullTransparentMesh = !!i703[0]
  return i702
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.Image' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'm_Sprite')
  i704.m_Type = i705[2]
  i704.m_PreserveAspect = !!i705[3]
  i704.m_FillCenter = !!i705[4]
  i704.m_FillMethod = i705[5]
  i704.m_FillAmount = i705[6]
  i704.m_FillClockwise = !!i705[7]
  i704.m_FillOrigin = i705[8]
  i704.m_UseSpriteMesh = !!i705[9]
  i704.m_PixelsPerUnitMultiplier = i705[10]
  request.r(i705[11], i705[12], 0, i704, 'm_Material')
  i704.m_Maskable = !!i705[13]
  i704.m_Color = new pc.Color(i705[14], i705[15], i705[16], i705[17])
  i704.m_RaycastTarget = !!i705[18]
  i704.m_RaycastPadding = new pc.Vec4( i705[19], i705[20], i705[21], i705[22] )
  return i704
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i706 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i707 = data
  i706.m_hasFontAssetChanged = !!i707[0]
  request.r(i707[1], i707[2], 0, i706, 'm_baseMaterial')
  i706.m_maskOffset = new pc.Vec4( i707[3], i707[4], i707[5], i707[6] )
  i706.m_text = i707[7]
  i706.m_isRightToLeft = !!i707[8]
  request.r(i707[9], i707[10], 0, i706, 'm_fontAsset')
  request.r(i707[11], i707[12], 0, i706, 'm_sharedMaterial')
  var i709 = i707[13]
  var i708 = []
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 2, i708, '')
  }
  i706.m_fontSharedMaterials = i708
  request.r(i707[14], i707[15], 0, i706, 'm_fontMaterial')
  var i711 = i707[16]
  var i710 = []
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 2, i710, '')
  }
  i706.m_fontMaterials = i710
  i706.m_fontColor32 = UnityEngine.Color32.ConstructColor(i707[17], i707[18], i707[19], i707[20])
  i706.m_fontColor = new pc.Color(i707[21], i707[22], i707[23], i707[24])
  i706.m_enableVertexGradient = !!i707[25]
  i706.m_colorMode = i707[26]
  i706.m_fontColorGradient = request.d('TMPro.VertexGradient', i707[27], i706.m_fontColorGradient)
  request.r(i707[28], i707[29], 0, i706, 'm_fontColorGradientPreset')
  request.r(i707[30], i707[31], 0, i706, 'm_spriteAsset')
  i706.m_tintAllSprites = !!i707[32]
  request.r(i707[33], i707[34], 0, i706, 'm_StyleSheet')
  i706.m_TextStyleHashCode = i707[35]
  i706.m_overrideHtmlColors = !!i707[36]
  i706.m_faceColor = UnityEngine.Color32.ConstructColor(i707[37], i707[38], i707[39], i707[40])
  i706.m_fontSize = i707[41]
  i706.m_fontSizeBase = i707[42]
  i706.m_fontWeight = i707[43]
  i706.m_enableAutoSizing = !!i707[44]
  i706.m_fontSizeMin = i707[45]
  i706.m_fontSizeMax = i707[46]
  i706.m_fontStyle = i707[47]
  i706.m_HorizontalAlignment = i707[48]
  i706.m_VerticalAlignment = i707[49]
  i706.m_textAlignment = i707[50]
  i706.m_characterSpacing = i707[51]
  i706.m_wordSpacing = i707[52]
  i706.m_lineSpacing = i707[53]
  i706.m_lineSpacingMax = i707[54]
  i706.m_paragraphSpacing = i707[55]
  i706.m_charWidthMaxAdj = i707[56]
  i706.m_enableWordWrapping = !!i707[57]
  i706.m_wordWrappingRatios = i707[58]
  i706.m_overflowMode = i707[59]
  request.r(i707[60], i707[61], 0, i706, 'm_linkedTextComponent')
  request.r(i707[62], i707[63], 0, i706, 'parentLinkedComponent')
  i706.m_enableKerning = !!i707[64]
  i706.m_enableExtraPadding = !!i707[65]
  i706.checkPaddingRequired = !!i707[66]
  i706.m_isRichText = !!i707[67]
  i706.m_parseCtrlCharacters = !!i707[68]
  i706.m_isOrthographic = !!i707[69]
  i706.m_isCullingEnabled = !!i707[70]
  i706.m_horizontalMapping = i707[71]
  i706.m_verticalMapping = i707[72]
  i706.m_uvLineOffset = i707[73]
  i706.m_geometrySortingOrder = i707[74]
  i706.m_IsTextObjectScaleStatic = !!i707[75]
  i706.m_VertexBufferAutoSizeReduction = !!i707[76]
  i706.m_useMaxVisibleDescender = !!i707[77]
  i706.m_pageToDisplay = i707[78]
  i706.m_margin = new pc.Vec4( i707[79], i707[80], i707[81], i707[82] )
  i706.m_isUsingLegacyAnimationComponent = !!i707[83]
  i706.m_isVolumetricText = !!i707[84]
  request.r(i707[85], i707[86], 0, i706, 'm_Material')
  i706.m_Maskable = !!i707[87]
  i706.m_Color = new pc.Color(i707[88], i707[89], i707[90], i707[91])
  i706.m_RaycastTarget = !!i707[92]
  i706.m_RaycastPadding = new pc.Vec4( i707[93], i707[94], i707[95], i707[96] )
  return i706
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i712 = root || request.c( 'TMPro.VertexGradient' )
  var i713 = data
  i712.topLeft = new pc.Color(i713[0], i713[1], i713[2], i713[3])
  i712.topRight = new pc.Color(i713[4], i713[5], i713[6], i713[7])
  i712.bottomLeft = new pc.Color(i713[8], i713[9], i713[10], i713[11])
  i712.bottomRight = new pc.Color(i713[12], i713[13], i713[14], i713[15])
  return i712
}

Deserializers["Money.MoneyUI"] = function (request, data, root) {
  var i714 = root || request.c( 'Money.MoneyUI' )
  var i715 = data
  return i714
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.UI.Button' )
  var i717 = data
  i716.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i717[0], i716.m_OnClick)
  i716.m_Navigation = request.d('UnityEngine.UI.Navigation', i717[1], i716.m_Navigation)
  i716.m_Transition = i717[2]
  i716.m_Colors = request.d('UnityEngine.UI.ColorBlock', i717[3], i716.m_Colors)
  i716.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i717[4], i716.m_SpriteState)
  i716.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i717[5], i716.m_AnimationTriggers)
  i716.m_Interactable = !!i717[6]
  request.r(i717[7], i717[8], 0, i716, 'm_TargetGraphic')
  return i716
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i719 = data
  i718.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i719[0], i718.m_PersistentCalls)
  return i718
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i721 = data
  var i723 = i721[0]
  var i722 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i723.length; i += 1) {
    i722.add(request.d('UnityEngine.Events.PersistentCall', i723[i + 0]));
  }
  i720.m_Calls = i722
  return i720
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'm_Target')
  i726.m_TargetAssemblyTypeName = i727[2]
  i726.m_MethodName = i727[3]
  i726.m_Mode = i727[4]
  i726.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i727[5], i726.m_Arguments)
  i726.m_CallState = i727[6]
  return i726
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i729 = data
  i728.m_Mode = i729[0]
  i728.m_WrapAround = !!i729[1]
  request.r(i729[2], i729[3], 0, i728, 'm_SelectOnUp')
  request.r(i729[4], i729[5], 0, i728, 'm_SelectOnDown')
  request.r(i729[6], i729[7], 0, i728, 'm_SelectOnLeft')
  request.r(i729[8], i729[9], 0, i728, 'm_SelectOnRight')
  return i728
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i731 = data
  i730.m_NormalColor = new pc.Color(i731[0], i731[1], i731[2], i731[3])
  i730.m_HighlightedColor = new pc.Color(i731[4], i731[5], i731[6], i731[7])
  i730.m_PressedColor = new pc.Color(i731[8], i731[9], i731[10], i731[11])
  i730.m_SelectedColor = new pc.Color(i731[12], i731[13], i731[14], i731[15])
  i730.m_DisabledColor = new pc.Color(i731[16], i731[17], i731[18], i731[19])
  i730.m_ColorMultiplier = i731[20]
  i730.m_FadeDuration = i731[21]
  return i730
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'm_HighlightedSprite')
  request.r(i733[2], i733[3], 0, i732, 'm_PressedSprite')
  request.r(i733[4], i733[5], 0, i732, 'm_SelectedSprite')
  request.r(i733[6], i733[7], 0, i732, 'm_DisabledSprite')
  return i732
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i735 = data
  i734.m_NormalTrigger = i735[0]
  i734.m_HighlightedTrigger = i735[1]
  i734.m_PressedTrigger = i735[2]
  i734.m_SelectedTrigger = i735[3]
  i734.m_DisabledTrigger = i735[4]
  return i734
}

Deserializers["Money.BuyButton"] = function (request, data, root) {
  var i736 = root || request.c( 'Money.BuyButton' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, '_priceText')
  request.r(i737[2], i737[3], 0, i736, '_button')
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i739 = data
  i738.enabled = !!i739[0]
  i738.aspect = i739[1]
  i738.orthographic = !!i739[2]
  i738.orthographicSize = i739[3]
  i738.backgroundColor = new pc.Color(i739[4], i739[5], i739[6], i739[7])
  i738.nearClipPlane = i739[8]
  i738.farClipPlane = i739[9]
  i738.fieldOfView = i739[10]
  i738.depth = i739[11]
  i738.clearFlags = i739[12]
  i738.cullingMask = i739[13]
  i738.rect = i739[14]
  request.r(i739[15], i739[16], 0, i738, 'targetTexture')
  i738.usePhysicalProperties = !!i739[17]
  i738.focalLength = i739[18]
  i738.sensorSize = new pc.Vec2( i739[19], i739[20] )
  i738.lensShift = new pc.Vec2( i739[21], i739[22] )
  i738.gateFit = i739[23]
  i738.commandBufferCount = i739[24]
  i738.cameraType = i739[25]
  return i738
}

Deserializers["Beds"] = function (request, data, root) {
  var i740 = root || request.c( 'Beds' )
  var i741 = data
  var i743 = i741[0]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('Bed')))
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 1, i742, '')
  }
  i740._beds = i742
  request.r(i741[1], i741[2], 0, i740, '_vampires')
  request.r(i741[3], i741[4], 0, i740, '_doctors')
  return i740
}

Deserializers["Bed"] = function (request, data, root) {
  var i746 = root || request.c( 'Bed' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, '_spriteNeedToHeal')
  i746._isBusy = !!i747[2]
  i746._needToHeal = !!i747[3]
  i746._onPlace = !!i747[4]
  i746._isReadyToHeal = !!i747[5]
  i746._isRun = !!i747[6]
  return i746
}

Deserializers["Doctor.DoctorState.BedRoute"] = function (request, data, root) {
  var i748 = root || request.c( 'Doctor.DoctorState.BedRoute' )
  var i749 = data
  var i751 = i749[0]
  var i750 = []
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 2, i750, '')
  }
  i748.DoctorWaypoints = i750
  var i753 = i749[1]
  var i752 = []
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 2, i752, '')
  }
  i748.VampireWaypoints = i752
  return i748
}

Deserializers["Vampire.Vampires"] = function (request, data, root) {
  var i754 = root || request.c( 'Vampire.Vampires' )
  var i755 = data
  var i757 = i755[0]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('Vampire.Vampire')))
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 1, i756, '')
  }
  i754._vampires = i756
  i754._moveSpeed = i755[1]
  request.r(i755[2], i755[3], 0, i754, '_vampirePrefab')
  request.r(i755[4], i755[5], 0, i754, '_vampireExitPoint')
  request.r(i755[6], i755[7], 0, i754, '_money')
  return i754
}

Deserializers["Doctors"] = function (request, data, root) {
  var i760 = root || request.c( 'Doctors' )
  var i761 = data
  var i763 = i761[0]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('Doctor.Doctor')))
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 1, i762, '')
  }
  i760._doctors = i762
  return i760
}

Deserializers["Doctor.Doctor"] = function (request, data, root) {
  var i766 = root || request.c( 'Doctor.Doctor' )
  var i767 = data
  i766._isBusy = !!i767[0]
  return i766
}

Deserializers["Doctor.DoctorStateMachine"] = function (request, data, root) {
  var i768 = root || request.c( 'Doctor.DoctorStateMachine' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, '_firstState')
  return i768
}

Deserializers["Doctor.DoctorState.DoctorIdleState"] = function (request, data, root) {
  var i770 = root || request.c( 'Doctor.DoctorState.DoctorIdleState' )
  var i771 = data
  var i773 = i771[0]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 1, i772, '')
  }
  i770._transitions = i772
  return i770
}

Deserializers["Doctor.DoctorState.DoctorMoveState"] = function (request, data, root) {
  var i774 = root || request.c( 'Doctor.DoctorState.DoctorMoveState' )
  var i775 = data
  var i777 = i775[0]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 1, i776, '')
  }
  i774._transitions = i776
  return i774
}

Deserializers["Doctor.DoctorState.DoctorHealState"] = function (request, data, root) {
  var i778 = root || request.c( 'Doctor.DoctorState.DoctorHealState' )
  var i779 = data
  var i781 = i779[0]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('Transition')))
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 1, i780, '')
  }
  i778._transitions = i780
  return i778
}

Deserializers["Doctor.DoctorTransition.DoctorMoveTransition"] = function (request, data, root) {
  var i782 = root || request.c( 'Doctor.DoctorTransition.DoctorMoveTransition' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, '_targetState')
  return i782
}

Deserializers["Doctor.DoctorTransition.DoctorHealTransition"] = function (request, data, root) {
  var i784 = root || request.c( 'Doctor.DoctorTransition.DoctorHealTransition' )
  var i785 = data
  i784._transitionRange = i785[0]
  i784._rangeSpread = i785[1]
  request.r(i785[2], i785[3], 0, i784, '_targetState')
  return i784
}

Deserializers["Doctor.DoctorTransition.DoctorHealRunTransition"] = function (request, data, root) {
  var i786 = root || request.c( 'Doctor.DoctorTransition.DoctorHealRunTransition' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, '_targetState')
  return i786
}

Deserializers["Money.MoneyConroller"] = function (request, data, root) {
  var i788 = root || request.c( 'Money.MoneyConroller' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'moneyUI')
  return i788
}

Deserializers["BuyController"] = function (request, data, root) {
  var i790 = root || request.c( 'BuyController' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, '_money')
  request.r(i791[2], i791[3], 0, i790, '_doctorButton')
  request.r(i791[4], i791[5], 0, i790, '_bedButton')
  var i793 = i791[6]
  var i792 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 1, i792, '')
  }
  i790._doctors = i792
  var i795 = i791[7]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 1, i794, '')
  }
  i790._beds = i794
  return i790
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

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[69],"70":[26],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[72],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[80],"88":[80],"89":[80],"90":[80],"91":[80],"92":[80],"93":[26],"94":[95],"96":[97],"98":[97],"25":[24],"10":[8],"99":[100],"101":[3],"102":[100],"103":[24],"104":[24],"29":[25],"31":[30,24],"105":[24],"28":[25],"106":[24],"107":[24],"108":[24],"109":[24],"110":[24],"111":[24],"112":[24],"113":[24],"114":[24],"115":[30,24],"116":[24],"117":[24],"118":[24],"119":[24],"120":[30,24],"121":[24],"122":[54],"123":[54],"55":[54],"124":[54],"125":[26],"126":[26],"127":[128],"129":[26],"130":[24],"131":[95,24],"32":[24,30],"132":[24],"133":[30,24],"134":[95],"135":[30,24],"136":[24],"137":[100]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","Vampire.Vampire","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Vampire.VampireStateMachine","Vampire.VampireStates.IdleState","Vampire.VampireTransitions.MoveTransition","Vampire.VampireStates.ExitState","Vampire.VampireStates.HealState","Vampire.VampireTransitions.HealRunTransition","Vampire.VampireStates.RunState","Vampire.VampireStates.HealRunState","Vampire.VampireTransitions.HealCompleteTransition","Vampire.VampireStates.HealCompleteState","Vampire.VampireTransitions.ExitTransition","Vampire.VampireTransitions.IdleTransition","Vampire.VampireStates.MoveState","Vampire.VampireTransitions.HealTransition","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","Money.MoneyUI","UnityEngine.UI.Button","Money.BuyButton","UnityEngine.AudioListener","Beds","Bed","Vampire.Vampires","Doctors","Doctor.DoctorState.BedRoute","Money.MoneyConroller","Doctor.Doctor","Doctor.DoctorStateMachine","Doctor.DoctorState.DoctorIdleState","Doctor.DoctorTransition.DoctorMoveTransition","Doctor.DoctorState.DoctorMoveState","Doctor.DoctorTransition.DoctorHealTransition","Doctor.DoctorState.DoctorHealState","Doctor.DoctorTransition.DoctorHealRunTransition","BuyController","UnityEngine.GameObject","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Vampirs";

Deserializers.lunaInitializationTime = "04/19/2025 09:54:12";

Deserializers.lunaDaysRunning = "6.2";

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

Deserializers.buildID = "e1049608-d0df-4774-aac9-aae4d4876a0f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

