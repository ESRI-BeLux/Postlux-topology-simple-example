"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[6741],{12668:(e,t,o)=>{o.d(t,{D:()=>V,b:()=>F});var r=o(47635),a=o(29785),i=o(77788),n=o(29592),s=o(31790),l=o(32728),c=o(3525),d=o(18185),u=o(26756),h=o(51229),m=o(73713),p=o(83143),v=o(11255),f=o(36261),g=o(50710),x=o(23883),b=o(31434),y=o(40574),T=o(65630),w=o(23605),M=o(75762),C=o(35212),S=o(88251),_=o(69563),E=o(24578),A=o(78546),O=o(79602),H=o(79377),R=o(69952),z=o(64802),N=o(92121),P=o(19635),I=o(41014),G=o(92624),L=o(19778),B=o(7782),W=o(33763);function F(e){const t=new G.N5,{vertex:o,fragment:F,varyings:V}=t;if((0,R.NB)(o,e),t.include(d.I),V.add("vpos","vec3"),t.include(E.A,e),t.include(l.BK,e),t.include(v.G,e),t.include(_.q2,e),e.output===i.V.Color||e.output===i.V.Alpha){t.include(_.Sx,e),t.include(_.MU,e),t.include(_.O1,e),t.include(_.QM,e),(0,R.yu)(o,e),t.include(c.Y,e),t.include(s.d,e);const i=e.normalType===c.W.Attribute||e.normalType===c.W.Compressed;i&&e.offsetBackfaces&&t.include(a.M),t.include(g.W,e),t.include(p.Mh,e),e.instancedColor&&t.attributes.add(W.r.INSTANCECOLOR,"vec4"),V.add("vPositionLocal","vec3"),t.include(h.U,e),t.include(r.oD,e),t.include(u.K,e),t.include(m.c,e),o.uniforms.add(new N.E("externalColor",(e=>e.externalColor))),V.add("vcolorExt","vec4"),e.multipassEnabled&&V.add("depth","float"),o.code.add(I.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${I.H.float(A.y)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${i?I.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${i&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `)}switch(e.output){case i.V.Alpha:t.include(n.HQ,e),t.include(O.S,e),t.include(T.Q,e),F.uniforms.add(new P.m("opacity",(e=>e.opacity)),new P.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&F.uniforms.add(new L.N("tex",(e=>e.texture))),F.include(H.N),F.code.add(I.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?I.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?I.H`colorUV`:I.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:I.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?I.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:I.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case i.V.Color:t.include(n.HQ,e),t.include(b.kA,e),t.include(x.n,e),t.include(O.S,e),t.include(e.instancedDoublePrecision?S.G:S.Bz,e),t.include(T.Q,e),(0,R.yu)(F,e),F.uniforms.add(o.uniforms.get("localOrigin"),new z.t("ambient",(e=>e.ambient)),new z.t("diffuse",(e=>e.diffuse)),new P.m("opacity",(e=>e.opacity)),new P.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&F.uniforms.add(new L.N("tex",(e=>e.texture))),t.include(C._Z,e),t.include(M.c,e),F.include(H.N),t.include(w.r,e),(0,b.a8)(F),(0,b.eU)(F),(0,y.O4)(F),F.code.add(I.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?I.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?I.H`colorUV`:I.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:I.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===c.W.ScreenDerivative?I.H`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:I.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===C.A9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?I.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:I.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?I.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?I.H`normalUV`:"vuv0"});`:I.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?I.H`normalize(posWorld);`:I.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?I.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===C.A9.Normal||e.pbrMode===C.A9.Schematic?I.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?I.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:I.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===B.y.Color?I.H`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return t.include(f.E,e),t}const V=Object.freeze(Object.defineProperty({__proto__:null,build:F},Symbol.toStringTag,{value:"Module"}))},38716:(e,t,o)=>{o.d(t,{R:()=>L,b:()=>G});var r=o(47635),a=o(29785),i=o(77788),n=o(29592),s=o(31790),l=o(32728),c=o(3525),d=o(18185),u=o(26756),h=o(51229),m=o(73713),p=o(11255),v=o(36261),f=o(23883),g=o(31434),x=o(40574),b=o(65630),y=o(75762),T=o(35212),w=o(88251),M=o(24578),C=o(78546),S=o(79602),_=o(79377),E=o(69952),A=o(64802),O=o(92121),H=o(19635),R=o(41014),z=o(92624),N=o(19778),P=o(7782),I=o(33763);function G(e){const t=new z.N5,{vertex:o,fragment:G,varyings:L}=t;return(0,E.NB)(o,e),t.include(d.I),L.add("vpos","vec3"),t.include(M.A,e),t.include(l.BK,e),t.include(p.G,e),e.output!==i.V.Color&&e.output!==i.V.Alpha||((0,E.yu)(t.vertex,e),t.include(c.Y,e),t.include(s.d,e),e.offsetBackfaces&&t.include(a.M),e.instancedColor&&t.attributes.add(I.r.INSTANCECOLOR,"vec4"),L.add("vNormalWorld","vec3"),L.add("localvpos","vec3"),e.multipassEnabled&&L.add("depth","float"),t.include(h.U,e),t.include(r.oD,e),t.include(u.K,e),t.include(m.c,e),o.uniforms.add(new O.E("externalColor",(e=>e.externalColor))),L.add("vcolorExt","vec4"),o.code.add(R.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${R.H.float(C.y)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassEnabled?R.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===i.V.Alpha&&(t.include(n.HQ,e),t.include(S.S,e),t.include(b.Q,e),G.uniforms.add(new H.m("opacity",(e=>e.opacity)),new H.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&G.uniforms.add(new N.N("tex",(e=>e.texture))),G.include(_.N),G.code.add(R.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?R.H`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?R.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?R.H`colorUV`:R.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:R.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?R.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),e.output===i.V.Color&&(t.include(n.HQ,e),t.include(g.kA,e),t.include(f.n,e),t.include(S.S,e),t.include(e.instancedDoublePrecision?w.G:w.Bz,e),t.include(b.Q,e),(0,E.yu)(t.fragment,e),(0,x.Gc)(G),(0,g.a8)(G),(0,g.eU)(G),G.uniforms.add(o.uniforms.get("localOrigin"),o.uniforms.get("view"),new A.t("ambient",(e=>e.ambient)),new A.t("diffuse",(e=>e.diffuse)),new H.m("opacity",(e=>e.opacity)),new H.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&G.uniforms.add(new N.N("tex",(e=>e.texture))),t.include(T._Z,e),t.include(y.c,e),G.include(_.N),(0,x.O4)(G),G.code.add(R.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?R.H`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?R.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?R.H`colorUV`:R.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:R.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===T.A9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?R.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?R.H`albedo = mix(albedo, vec3(1), 0.9);`:R.H``}
        ${R.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===T.A9.Normal||e.pbrMode===T.A9.Schematic?e.spherical?R.H`vec3 normalGround = normalize(vpos + localOrigin);`:R.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:R.H``}
        ${e.pbrMode===T.A9.Normal||e.pbrMode===T.A9.Schematic?R.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?R.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:R.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===P.y.Color?R.H`fragColor = premultiplyAlpha(fragColor);`:R.H``}
      }
    `)),t.include(v.E,e),t}const L=Object.freeze(Object.defineProperty({__proto__:null,build:G},Symbol.toStringTag,{value:"Module"}))},43300:(e,t,o)=>{o.d(t,{S:()=>g,b:()=>p,g:()=>v});var r=o(53334),a=o(56560),i=o(28019),n=o(16937),s=o(36288),l=o(66579),c=o(19635),d=o(41014),u=o(92624),h=o(19778);const m=16;function p(){const e=new u.N5,t=e.fragment;return e.include(i.c),e.include(s.Ir),t.include(n.E),t.uniforms.add(new c.m("radius",((e,t)=>v(t.camera)))),t.code.add(d.H`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(d.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new l.G("nearFar",((e,t)=>t.camera.nearFar)),new h.N("normalMap",(e=>e.normalTexture)),new h.N("depthMap",(e=>e.depthTexture)),new c.m("projScale",(e=>e.projScale)),new h.N("rnm",(e=>e.noiseTexture)),new l.G("rnmScale",((e,t)=>(0,r.hZ)(f,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new c.m("intensity",(e=>e.intensity)),new l.G("screenSize",((e,t)=>(0,r.hZ)(f,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.code.add(d.H`
    void main(void) {
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${d.H.int(m)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${d.H.int(m)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),e}function v(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const f=(0,a.vt)(),g=Object.freeze(Object.defineProperty({__proto__:null,build:p,getRadius:v},Symbol.toStringTag,{value:"Module"}))},26599:(e,t,o)=>{o.d(t,{S:()=>v,b:()=>p});var r=o(80347),a=o(28019),i=o(16937),n=o(37138),s=o(66579),l=o(19635),c=o(41014),d=o(92624),u=o(29247),h=o(19778);const m=4;function p(){const e=new d.N5,t=e.fragment;e.include(a.c);const o=(m+1)/2,p=1/(2*o*o);return t.include(i.E),t.uniforms.add(new h.N("depthMap",(e=>e.depthTexture)),new u.o("tex",(e=>e.colorTexture)),new n.t("blurSize",(e=>e.blurSize)),new l.m("projScale",((e,t)=>{const o=(0,r.q)(t.camera.eye,t.camera.center);return o>5e4?Math.max(0,e.projScale-(o-5e4)):e.projScale})),new s.G("nearFar",((e,t)=>t.camera.nearFar))),t.code.add(c.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${c.H.float(p)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.code.add(c.H`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${c.H.int(m)}; r <= ${c.H.int(m)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),e}const v=Object.freeze(Object.defineProperty({__proto__:null,build:p},Symbol.toStringTag,{value:"Module"}))},61764:(e,t,o)=>{o.d(t,{G:()=>n});var r=o(79441),a=o(14571),i=o(82541);function n(e){if(null==e)return null;const t=null!=e.offset?e.offset:a.uY,o=null!=e.rotation?e.rotation:0,n=null!=e.scale?e.scale:a.Un,s=(0,r.fA)(1,0,0,0,1,0,t[0],t[1],1),l=(0,r.fA)(Math.cos(o),-Math.sin(o),0,Math.sin(o),Math.cos(o),0,0,0,1),c=(0,r.fA)(n[0],0,0,0,n[1],0,0,0,1),d=(0,r.vt)();return(0,i.lw)(d,l,c),(0,i.lw)(d,s,d),d}},6741:(e,t,o)=>{o.d(t,{fetch:()=>Q});var r=o(85012),a=o(82541),i=o(79441),n=o(25336),s=o(26110),l=o(56560),c=o(80347),d=o(19913),u=o(46373),h=o(68435),m=o(40041),p=o(72449),v=o(17460),f=o(18546),g=o(80820),x=o(22715),b=o(22380),y=o(66400),T=o(82021),w=o(17079),M=o(61764);class C{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class S{constructor(e,t,o){this.name=e,this.lodThreshold=t,this.pivotOffset=o,this.stageResources=new C,this.numberOfVertices=0}}var _=o(38116),E=o(3132),A=o(88188),O=o(62991),H=o(80861),R=o(13926),z=o(37623),N=o(27805),P=o(51831),I=o(60938),G=o(10941),L=o(10875),B=o(40753),W=o(41038),F=o(33763),V=o(14103),j=o(68716);const D=()=>H.A.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function U(e){throw new O.A("",`Request for object resource failed: ${e}`)}function q(e){const t=e.params,o=t.topology;let r=!0;switch(t.vertexAttributes||(D().warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const o in t.vertexAttributes){const t=e[o];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(D().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),r=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(D().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),r=!1)):(D().warn(`Indexed geometry does not specify face indices for '${o}' attribute`),r=!1)}}else D().warn("Indexed geometries must specify faces"),r=!1;break}default:D().warn(`Unsupported topology '${o}'`),r=!1}e.params.material||(D().warn("Geometry requires material"),r=!1);const a=e.params.vertexAttributes;for(const e in a)a[e].values||(D().warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function k(e){const t=(0,u.Ie)();return e.forEach((e=>{const o=e.boundingInfo;null!=o&&((0,u.iT)(t,o.bbMin),(0,u.iT)(t,o.bbMax))})),t}function Y(e){switch(e){case"mask":return L.sf.Mask;case"maskAndTransparency":return L.sf.MaskBlend;case"none":return L.sf.Opaque;default:return L.sf.Blend}}function J(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Z=new N.R(1,2,"wosr");var $=o(3525),X=o(33550),K=o(40327);async function Q(e,t){const o=function(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}((0,r.EM)(e));if("wosr"===o.fileType){const e=await(t.cache?t.cache.loadWOSR(o.url,t):async function(e,t){const o=await async function(e,t){const o=t?.streamDataRequester;if(o)return async function(e,t,o){const r=await(0,E.Ke)(t.request(e,"json",o));if(!0===r.ok)return r.value;(0,z.QP)(r.error),U(r.error.details.url)}(e,o,t);const r=await(0,E.Ke)((0,_.A)(e,t));if(!0===r.ok)return r.value.data;(0,z.QP)(r.error),U(r.error)}(e,t),r=await async function(e,t){const o=new Array;for(const r in e){const a=e[r],i=a.images[0].data;if(!i){D().warn("Externally referenced texture data is not yet supported");continue}const n=a.encoding+";base64,"+i,s="/textureDefinitions/"+r,l="rgba"===a.channels?a.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:j.pF.REPEAT,t:j.pF.REPEAT},preMultiplyAlpha:Y(l)!==L.sf.Opaque},d=null!=t&&t.disableTextures?Promise.resolve(null):(0,I.D)(n,t);o.push(d.then((e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l}))))}const r=await Promise.all(o),a={};for(const e of r)a[e.refId]=e;return a}(o.textureDefinitions??{},t);let a=0;for(const e in r)if(r.hasOwnProperty(e)){const t=r[e];a+=t?.image?t.image.width*t.image.height*4:0}return{resource:o,textures:r,size:a+(0,A.iL)(o)}}(o.url,t)),{engineResources:r,referenceBoundingBox:a}=function(e,t){const o=new Array,r=new Array,a=new Array,i=new R.O,n=e.resource,s=N.R.parse(n.version||"1.0","wosr");Z.validate(s);const l=n.model.name,c=n.model.geometries,u=n.materialDefinitions??{},h=e.textures;let m=0;const p=new Map;for(let e=0;e<c.length;e++){const n=c[e];if(!q(n))continue;const s=J(n),l=n.params.vertexAttributes,v=[],f=e=>{if("PerAttributeArray"===n.params.topology)return null;const t=n.params.faces;for(const o in t)if(o===e)return t[o].values;return null},g=l[F.r.POSITION],x=g.values.length/g.valuesPerElement;for(const e in l){const t=l[e],o=t.values,r=f(e)??(0,P.tM)(x);v.push([e,new G.n(o,r,t.valuesPerElement,!0)])}const b=s.texture,y=h&&h[b];if(y&&!p.has(b)){const{image:e,parameters:t}=y,o=new W.g(e,t);r.push(o),p.set(b,o)}const T=p.get(b),w=T?T.id:void 0,M=s.material;let C=i.get(M,b);if(null==C){const e=u[M.substring(M.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const o=y&&y.alphaChannelUsage,r=e.transparency>0||"transparency"===o||"maskAndTransparency"===o,a=y?Y(y.alphaChannelUsage):void 0,n={ambient:(0,d.ci)(e.diffuse),diffuse:(0,d.ci)(e.diffuse),opacity:1-(e.transparency||0),transparent:r,textureAlphaMode:a,textureAlphaCutoff:.33,textureId:w,initTextureTransparent:!0,doubleSided:!0,cullFace:L.s2.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:y?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(n,t.materialParameters),C=new V.$U(n),i.set(M,b,C)}a.push(C);const S=new B.V(C,v);m+=v.find((e=>e[0]===F.r.POSITION))?.[1]?.indices.length??0,o.push(S)}return{engineResources:[{name:l,stageResources:{textures:r,materials:a,geometries:o},pivotOffset:n.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:k(o)}}(e,t);return{lods:r,referenceBoundingBox:a,isEsriSymbolResource:!1,isWosr:!0}}const i=await(t.cache?t.cache.loadGLTF(o.url,t,!!t.usePBR):(0,y.y)(new b.R(t.streamDataRequester),o.url,t,t.usePBR)),C=i.model.meta?.ESRI_proxyEllipsoid,O=i.meta.isEsriSymbolResource&&null!=C&&"EsriRealisticTreesStyle"===i.meta.ESRI_webstyle;O&&!i.customMeta.esriTreeRendering&&(i.customMeta.esriTreeRendering=!0,function(e,t){for(let o=0;o<e.model.lods.length;++o){const r=e.model.lods[o];for(const a of r.parts){const r=a.attributes.normal;if(null==r)return;const i=a.attributes.position,l=i.count,u=(0,d.vt)(),h=(0,d.vt)(),p=(0,d.vt)(),v=new Uint8Array(4*l),f=new Float64Array(3*l),g=(0,n.B8)((0,s.vt)(),a.transform);let x=0,b=0;for(let n=0;n<l;n++){i.getVec(n,h),r.getVec(n,u),(0,c.e)(h,h,a.transform),(0,c.f)(p,h,t.center),(0,c.D)(p,p,t.radius);const s=p[2],l=(0,c.l)(p),d=Math.min(.45+.55*l*l,1);(0,c.D)(p,p,t.radius),null!==g&&(0,c.e)(p,p,g),(0,c.n)(p,p),o+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.m)(p,p,u,s>-1?.2:Math.min(-4*s-3.8,1)),f[x]=p[0],f[x+1]=p[1],f[x+2]=p[2],x+=3,v[b]=255*d,v[b+1]=255*d,v[b+2]=255*d,v[b+3]=255,b+=4}a.attributes.normal=new m.xs(f),a.attributes.color=new m.XP(v)}}}(i,C));const H=!!t.usePBR,Q=i.meta.isEsriSymbolResource?{usePBR:H,isSchematic:!1,treeRendering:O,mrrFactors:[...K.d_]}:{usePBR:H,isSchematic:!1,treeRendering:!1,mrrFactors:[...K.Rk]},te={...t.materialParameters,treeRendering:O},{engineResources:oe,referenceBoundingBox:re}=function(e,t,o,r){const i=e.model,n=new Array,s=new Map,c=new Map,d=i.lods.length,b=(0,u.Ie)();return i.lods.forEach(((e,y)=>{const C=!0===r.skipHighLods&&(d>1&&0===y||d>3&&1===y)||!1===r.skipHighLods&&null!=r.singleLodIndex&&y!==r.singleLodIndex;if(C&&0!==y)return;const _=new S(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const r=C?new V.$U({}):function(e,t,o,r,a,i,n){const s=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),c=e.materials.get(t.material),d=null!=t.attributes.texCoord0,u=null!=t.attributes.normal;if(null==c)return null;const h=function(e){switch(e){case"BLEND":return L.sf.Blend;case"MASK":return L.sf.Mask;case"OPAQUE":case null:case void 0:return L.sf.Opaque}}(c.alphaMode);if(!i.has(s)){if(d){const t=(t,o=!1)=>{if(null!=t&&!n.has(t)){const r=e.textures.get(t);if(null!=r){const e=r.data;n.set(t,new W.g((0,w.x3)(e)?e.data:e,{...r.parameters,preMultiplyAlpha:!(0,w.x3)(e)&&o,encoding:(0,w.x3)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(c.textureColor,h!==L.sf.Opaque),t(c.textureNormal),t(c.textureOcclusion),t(c.textureEmissive),t(c.textureMetallicRoughness)}const o=c.color[0]**(1/X.T),m=c.color[1]**(1/X.T),p=c.color[2]**(1/X.T),v=c.emissiveFactor[0]**(1/X.T),f=c.emissiveFactor[1]**(1/X.T),g=c.emissiveFactor[2]**(1/X.T),x=null!=c.textureColor&&d?n.get(c.textureColor):null,b=(0,K.Jr)({normalTexture:c.textureNormal,metallicRoughnessTexture:c.textureMetallicRoughness,metallicFactor:c.metallicFactor,roughnessFactor:c.roughnessFactor,emissiveTexture:c.textureEmissive,emissiveFactor:c.emissiveFactor,occlusionTexture:c.textureOcclusion}),y=null!=c.normalTextureTransform?.scale?c.normalTextureTransform?.scale:l.Un;i.set(s,new V.$U({...r,transparent:h===L.sf.Blend,customDepthTest:L.it.Lequal,textureAlphaMode:h,textureAlphaCutoff:c.alphaCutoff,diffuse:[o,m,p],ambient:[o,m,p],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?L.s2.None:L.s2.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:u?$.W.Attribute:$.W.ScreenDerivative,castShadows:!0,receiveShadows:c.receiveShadows,receiveAmbientOcclusion:c.receiveAmbientOcclustion,textureId:null!=x?x.id:void 0,colorMixMode:c.colorMixMode,normalTextureId:null!=c.textureNormal&&d?n.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:null!=x&&!!x.parameters.preMultiplyAlpha,occlusionTextureId:null!=c.textureOcclusion&&d?n.get(c.textureOcclusion).id:void 0,emissiveTextureId:null!=c.textureEmissive&&d?n.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=c.textureMetallicRoughness&&d?n.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[v,f,g],mrrFactors:b?[...K.mX]:[c.metallicFactor,c.roughnessFactor,r.mrrFactors[2]],isSchematic:b,colorTextureTransformMatrix:(0,M.G)(c.colorTextureTransform),normalTextureTransformMatrix:(0,M.G)(c.normalTextureTransform),scale:[y[0],y[1]],occlusionTextureTransformMatrix:(0,M.G)(c.occlusionTextureTransform),emissiveTextureTransformMatrix:(0,M.G)(c.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:(0,M.G)(c.metallicRoughnessTextureTransform),...a}))}const m=i.get(s);if(o.stageResources.materials.push(m),d){const e=e=>{null!=e&&o.stageResources.textures.push(n.get(e))};e(c.textureColor),e(c.textureNormal),e(c.textureOcclusion),e(c.textureEmissive),e(c.textureMetallicRoughness)}return m}(i,e,_,t,o,s,c),{geometry:n,vertexCount:d}=function(e,t){const o=e.attributes.position.count,r=(0,T.x)(e.indices||o,e.primitiveType),i=(0,h.oe)(3*o),{typedBuffer:n,typedBufferStride:s}=e.attributes.position;(0,p.a)(i,n,e.transform,3,s);const l=[[F.r.POSITION,new G.n(i,r,3,!0)]];if(null!=e.attributes.normal){const t=(0,h.oe)(3*o),{typedBuffer:i,typedBufferStride:n}=e.attributes.normal;(0,a.Ge)(ee,e.transform),(0,p.b)(t,i,ee,3,n),l.push([F.r.NORMAL,new G.n(t,r,3,!0)])}if(null!=e.attributes.tangent){const t=(0,h.oe)(4*o),{typedBuffer:i,typedBufferStride:n}=e.attributes.tangent;(0,a.Ge)(ee,e.transform),(0,v.t)(t,i,ee,4,n),l.push([F.r.TANGENT,new G.n(t,r,4,!0)])}if(null!=e.attributes.texCoord0){const t=(0,h.oe)(2*o),{typedBuffer:a,typedBufferStride:i}=e.attributes.texCoord0;(0,f.n)(t,a,2,i),l.push([F.r.UV0,new G.n(t,r,2,!0)])}if(null!=e.attributes.color){const t=new Uint8Array(4*o);4===e.attributes.color.elementCount?e.attributes.color instanceof m.Eq?(0,v.s)(t,e.attributes.color,255):e.attributes.color instanceof m.XP?(0,x.c)(t,e.attributes.color):e.attributes.color instanceof m.Uz&&(0,v.s)(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof m.xs?(0,p.s)(t,e.attributes.color,255,4):e.attributes.color instanceof m.eI?(0,g.c)(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof m.nS&&(0,p.s)(t,e.attributes.color,1/256,4)),l.push([F.r.COLOR,new G.n(t,r,4,!0)])}return{geometry:new B.V(t,l),vertexCount:o}}(e,null!=r?r:new V.$U({})),S=n.boundingInfo;null!=S&&0===y&&((0,u.iT)(b,S.bbMin),(0,u.iT)(b,S.bbMax)),null!=r&&(_.stageResources.geometries.push(n),_.numberOfVertices+=d)})),C||n.push(_)})),{engineResources:n,referenceBoundingBox:b}}(i,Q,te,t.skipHighLods&&null==o.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:o.specifiedLodIndex});return{lods:oe,referenceBoundingBox:re,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1}}const ee=(0,i.vt)()},29785:(e,t,o)=>{o.d(t,{M:()=>a});var r=o(41014);function a(e){e.vertex.code.add(r.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},26756:(e,t,o)=>{o.d(t,{K:()=>c});var r=o(96153),a=o(41014);function i(e){e.vertex.code.add(a.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${a.H.int(r.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${a.H.int(r.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${a.H.int(r.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${a.H.int(r.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var n=o(88531),s=o(33763),l=o(73395);function c(e,t){t.hasSymbolColors?(e.include(i),e.attributes.add(s.r.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(a.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new n.c("colorMixMode",(e=>l.Um[e.colorMixMode]))),e.vertex.code.add(a.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},36261:(e,t,o)=>{o.d(t,{E:()=>b});var r=o(47635),a=o(77788),i=o(29592),n=o(31790),s=o(3525),l=o(38587),c=o(51229),d=o(83143),u=o(23932),h=o(15479),m=o(24578),p=o(79602),v=o(69952),f=o(41014),g=o(19778),x=o(10875);function b(e,t){const{vertex:o,fragment:b}=e,y=t.hasColorTexture&&t.alphaDiscardMode!==x.sf.Opaque;switch(t.output){case a.V.LinearDepth:case a.V.Shadow:case a.V.ShadowHighlight:case a.V.ShadowExcludeHighlight:case a.V.ObjectAndLayerIdColor:(0,v.NB)(o,t),e.include(n.d,t),e.include(c.U,t),e.include(m.A,t),e.include(u.L,t),e.include(i.HQ,t),e.include(l.g,t),(0,r.xJ)(e),e.varyings.add("depth","float"),y&&b.uniforms.add(new g.N("tex",(e=>e.texture))),o.code.add(f.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(p.S,t),b.code.add(f.H`
          void main(void) {
            discardBySlice(vpos);
            ${y?f.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?f.H`colorUV`:f.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===a.V.ObjectAndLayerIdColor?f.H`outputObjectAndLayerIdColor();`:f.H`outputDepth(depth);`}
          }
        `);break;case a.V.Normal:{(0,v.NB)(o,t),e.include(n.d,t),e.include(s.Y,t),e.include(d.Mh,t),e.include(c.U,t),e.include(m.A,t),y&&b.uniforms.add(new g.N("tex",(e=>e.texture))),t.normalType===s.W.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const r=t.normalType===s.W.Attribute||t.normalType===s.W.Compressed;o.code.add(f.H`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${r?f.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:f.H`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(i.HQ,t),e.include(p.S,t),b.code.add(f.H`
          void main() {
            discardBySlice(vpos);
            ${y?f.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?f.H`colorUV`:f.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===s.W.ScreenDerivative?f.H`vec3 normal = screenDerivativeNormal(vPositionView);`:f.H`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case a.V.Highlight:(0,v.NB)(o,t),e.include(n.d,t),e.include(c.U,t),e.include(m.A,t),y&&b.uniforms.add(new g.N("tex",(e=>e.texture))),o.code.add(f.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(i.HQ,t),e.include(p.S,t),e.include(h.Qh,t),b.code.add(f.H`
          void main() {
            discardBySlice(vpos);
            ${y?f.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?f.H`colorUV`:f.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},50710:(e,t,o)=>{o.d(t,{W:()=>v});var r=o(79441),a=o(56560),i=o(51229),n=o(2169),s=o(23605),l=o(66579),c=o(41014),d=o(19835),u=o(29247),h=o(19778),m=o(34088),p=o(33763);function v(e,t){const o=e.fragment;t.hasVertexTangents?(e.attributes.add(p.r.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===s.W.WindingOrder?o.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(c.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==i.q.None&&(e.include(n.r,t),o.uniforms.add(t.pbrTextureBindType===m.c.Pass?new h.N("normalTexture",(e=>e.textureNormal)):new u.o("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(o.uniforms.add(new l.G("scale",(e=>e.scale??a.Un))),o.uniforms.add(new d.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??r.zK)))),o.code.add(c.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&o.code.add(c.H`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),o.code.add(c.H`return tangentSpace * rawNormal;
}`))}},44118:(e,t,o)=>{o.d(t,{W:()=>u});var r=o(80347),a=o(19913),i=o(74772),n=o(76982),s=o(35212),l=o(64802),c=o(92121),d=o(41014);function u(e,t){const o=e.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(o.uniforms.add(new l.t("lightingAmbientSH0",((e,t)=>(0,r.s)(h,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),o.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===a?(o.uniforms.add(new c.E("lightingAmbientSH_R",((e,t)=>(0,i.s)(m,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new c.E("lightingAmbientSH_G",((e,t)=>(0,i.s)(m,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new c.E("lightingAmbientSH_B",((e,t)=>(0,i.s)(m,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),o.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===a&&(o.uniforms.add(new l.t("lightingAmbientSH0",((e,t)=>(0,r.s)(h,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new c.E("lightingAmbientSH_R1",((e,t)=>(0,i.s)(m,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new c.E("lightingAmbientSH_G1",((e,t)=>(0,i.s)(m,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new c.E("lightingAmbientSH_B1",((e,t)=>(0,i.s)(m,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new c.E("lightingAmbientSH_R2",((e,t)=>(0,i.s)(m,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new c.E("lightingAmbientSH_G2",((e,t)=>(0,i.s)(m,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new c.E("lightingAmbientSH_B2",((e,t)=>(0,i.s)(m,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),o.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==s.A9.Normal&&t.pbrMode!==s.A9.Schematic||o.code.add(d.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const h=(0,a.vt)(),m=(0,n.vt)()},23883:(e,t,o)=>{o.d(t,{n:()=>W});var r=o(41014),a=o(19778),i=o(82392),n=o(4506),s=o(57725),l=o(61985),c=o(67900),d=o(81482),u=(o(6273),o(80861),o(67498),o(26325)),h=o(53334),m=o(38236),p=o(60060),v=o(45845),f=o(21979),g=o(19362),x=o(74242),b=o(24441),y=o(26599),T=o(15651);class w extends g.w{initializeProgram(e){return new b.B(e.rctx,w.shader.get().build(),x.D)}initializePipeline(){return(0,T.Ey)({colorWrite:T.wE})}}w.shader=new f.$(y.S,(()=>o.e(3271).then(o.bind(o,43271))));var M=o(56560);class C extends r.Y{constructor(){super(...arguments),this.projScale=1}}class S extends C{constructor(){super(...arguments),this.intensity=1}}class _ extends r.Y{}class E extends _{constructor(){super(...arguments),this.blurSize=(0,M.vt)()}}var A,O,H=o(43300);class R extends g.w{initializeProgram(e){return new b.B(e.rctx,R.shader.get().build(),x.D)}initializePipeline(){return(0,T.Ey)({colorWrite:T.wE})}}R.shader=new f.$(H.S,(()=>o.e(1348).then(o.bind(o,81348)))),o(47273),(O=A||(A={}))[O.Antialiasing=0]="Antialiasing",O[O.HighQualityTransparency=1]="HighQualityTransparency",O[O.HighResolutionVoxel=2]="HighResolutionVoxel",O[O.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",O[O.SSAO=4]="SSAO",O[O.WaterReflection=5]="WaterReflection",O[O.HighResolutionShadows=6]="HighResolutionShadows",O[O.PhysicalPixelRendering=7]="PhysicalPixelRendering";var z=o(15449),N=o(68716),P=o(89958),I=o(88416);const G=2;let L=class extends v.RW{constructor(e){super(e),this._context=null,this._passParameters=new S,this._drawParameters=new E,this.produces=new Map([[z.N.SSAO,()=>this._produces()]])}_getCameraElevation(){return this._context?.renderContext.bindParameters.camera.relativeElevation??1/0}_produces(){return null!=this._enableTime&&null!=this._context&&this._getCameraElevation()<p.b}consumes(){return this._produces()?v.A9:v.qo}initializeRenderContext(e){this._context=e,this.addHandles([(0,l.wB)((()=>this.view.qualitySettings.ambientOcclusion||this._context?.isFeatureEnabled(A.SSAO)),(e=>e?this._enable():this._disable()),l.pc)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=(0,s.WD)(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){if(null!=this._enableTime||!this._context)return;const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new I.R;t.wrapMode=N.pF.CLAMP_TO_EDGE,t.pixelFormat=N.Ab.RGB,t.wrapMode=N.pF.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new P.g(this._context.renderContext.rctx,t,e),null==this._ssaoTechnique&&(this._ssaoTechnique=this._context.techniqueRepository.acquire(R)),null==this._blurTechnique&&(this._blurTechnique=this._context.techniqueRepository.acquire(w)),this._enableTime=(0,c.l5)(0),this._context?.requestRender()}renderNode(e,t,o){const r=e.bindParameters,a=o?.get("normals"),i=a?.getTexture(),s=a?.getTexture(N.nI);if(null==this._enableTime||null==this._context||!i||!s)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=e.time,void this._context.requestRender();0===this._enableTime&&(this._enableTime=e.time);const l=e.rctx,c=r.camera,d=this.view.qualitySettings.fadeDuration,u=c.relativeElevation,v=(0,n.qE)((p.b-u)/(p.b-p.O),0,1),f=d>0?Math.min(d,e.time-this._enableTime)/d:1,g=f*v;this._passParameters.normalTexture=i,this._passParameters.depthTexture=s,this._passParameters.projScale=1/c.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*B/(0,H.g)(c)**6*g;const x=c.fullViewport[2],b=c.fullViewport[3],y=Math.round(x/G),T=Math.round(b/G),w=this._context.fbos,M=w.acquire(x,b,"ssao input",m.N.RG);l.unbindTexture(M.fbo.colorTexture),l.bindFramebuffer(M.fbo),l.setViewport(0,0,x,b),l.bindTechnique(this._ssaoTechnique,r,this._passParameters,this._drawParameters),l.screen.draw();const C=w.acquire(y,T,"ssao blur",m.N.RED);l.unbindTexture(C.fbo.colorTexture),l.bindFramebuffer(C.fbo),this._drawParameters.colorTexture=M.getTexture(),(0,h.hZ)(this._drawParameters.blurSize,0,G/b),l.bindTechnique(this._blurTechnique,r,this._passParameters,this._drawParameters),l.setViewport(0,0,y,T),l.screen.draw(),M.release();const S=w.acquire(y,T,"ssao",m.N.RED);return l.unbindTexture(S.fbo.colorTexture),l.bindFramebuffer(S.fbo),l.setViewport(0,0,x,b),l.setClearColor(1,1,1,0),l.clear(N.hn.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=C.getTexture(),(0,h.hZ)(this._drawParameters.blurSize,G/x,0),l.bindTechnique(this._blurTechnique,r,this._passParameters,this._drawParameters),l.setViewport(0,0,y,T),l.screen.draw(),l.setViewport4fv(c.fullViewport),C.release(),f<1&&this._context.requestRender(),S}};(0,i._)([(0,d.MZ)({constructOnly:!0})],L.prototype,"view",void 0),(0,i._)([(0,d.MZ)()],L.prototype,"_context",void 0),L=(0,i._)([(0,u.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],L);const B=.5;function W(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add(new a.N("ssaoTex",((e,t)=>t.ssao?.getTexture()))),o.constants.add("blurSizePixelsInverse","float",1/G),o.code.add(r.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):o.code.add(r.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},31434:(e,t,o)=>{o.d(t,{a8:()=>p,eU:()=>v,kA:()=>f});var r=o(95039),a=o(44118),i=o(23883),n=o(40574),s=o(75762),l=o(35212),c=o(48425),d=o(27981),u=o(19635),h=o(41014),m=o(4477);function p(e){e.constants.add("ambientBoostFactor","float",m.uH)}function v(e){e.uniforms.add(new u.m("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function f(e,t){const o=e.fragment;switch(e.include(i.n,t),t.pbrMode!==l.A9.Disabled&&e.include(s.c,t),e.include(a.W,t),e.include(c.p),o.code.add(h.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.A9.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),p(o),v(o),(0,n.Gc)(o),o.code.add(h.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?h.H`normalize(vPosWorld)`:h.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,n.O4)(o),o.code.add(h.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case l.A9.Disabled:case l.A9.WaterOnIntegratedMesh:case l.A9.Water:e.include(n.qU),o.code.add(h.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.A9.Normal:case l.A9.Schematic:o.code.add(h.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(h.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new d.e("hasFillLights",((e,t)=>t.enableFillLights))):o.constants.add("hasFillLights","bool",!1),o.code.add(h.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add(new u.m("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new u.m("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),o.code.add(h.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(h.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==l.A9.Schematic||t.hasColorTexture?h.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:h.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.A9.Simplified:case l.A9.TerrainWithWater:e.include(n.qU),o.code.add(h.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,r.Xb)(t.pbrMode);case l.A9.COUNT:}}},23605:(e,t,o)=>{o.d(t,{W:()=>r,r:()=>s});var r,a,i=o(95039),n=o(41014);function s(e,t){const o=e.fragment;switch(o.code.add(n.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case r.None:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case r.View:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case r.WindingOrder:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,i.Xb)(t.doubleSidedMode);case r.COUNT:}}(a=r||(r={}))[a.None=0]="None",a[a.View=1]="View",a[a.WindingOrder=2]="WindingOrder",a[a.COUNT=3]="COUNT"},88251:(e,t,o)=>{o.d(t,{Bz:()=>m,G:()=>h}),o(26110),o(19913);var r=o(63607),a=o(92121),i=o(88531),n=o(41014),s=o(7804),l=o(34088);class c extends s.n{constructor(e,t,o){super(e,"mat4",l.c.Draw,((o,r,a,i)=>o.setUniformMatrix4fv(e,t(r,a,i))),o)}}class d extends s.n{constructor(e,t,o){super(e,"mat4",l.c.Pass,((o,r,a)=>o.setUniformMatrix4fv(e,t(r,a))),o)}}var u=o(19778);function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),p(e))}function m(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new c("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),p(e))}function p(e){const t=e.fragment;t.include(r.U),t.uniforms.add(new u.N("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new i.c("numCascades",((e,t)=>t.shadowMap.numCascades)),new a.E("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))),t.code.add(n.H`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}n.Y,n.Y},69563:(e,t,o)=>{o.d(t,{MU:()=>c,O1:()=>d,QM:()=>u,Sx:()=>l,q2:()=>s});var r=o(79441),a=o(51229),i=o(41014),n=o(19835);function s(e,t){t.hasColorTextureTransform?(e.vertex.uniforms.add(new n.k("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??r.zK))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(i.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardColorUV(){}`)}function l(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==a.q.None?(e.vertex.uniforms.add(new n.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??r.zK))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(i.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardNormalUV(){}`)}function c(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==a.q.None?(e.vertex.uniforms.add(new n.k("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??r.zK))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(i.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardEmissiveUV(){}`)}function d(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==a.q.None?(e.vertex.uniforms.add(new n.k("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??r.zK))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(i.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardOcclusionUV(){}`)}function u(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==a.q.None?(e.vertex.uniforms.add(new n.k("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??r.zK))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(i.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardMetallicRoughnessUV(){}`)}},79602:(e,t,o)=>{o.d(t,{S:()=>c});var r=o(78546),a=o(41014);function i(e){e.fragment.code.add(a.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${a.H.float(r.y)}) { discard; } }
  `)}var n=o(7804);o(34088),n.n;var s=o(19635),l=o(10875);function c(e,t){!function(e,t,o){const r=e.fragment;switch(t.alphaDiscardMode!==l.sf.Mask&&t.alphaDiscardMode!==l.sf.MaskBlend||r.uniforms.add(o),t.alphaDiscardMode){case l.sf.Blend:return e.include(i);case l.sf.Opaque:r.code.add(a.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case l.sf.Mask:r.code.add(a.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case l.sf.MaskBlend:e.fragment.code.add(a.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(e,t,new s.m("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}},79377:(e,t,o)=>{o.d(t,{N:()=>n});var r=o(96153),a=o(83660),i=o(41014);function n(e){e.include(a.a),e.code.add(i.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.H.int(r.k5.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.H.int(r.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(r.k5.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.H.int(r.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(r.k5.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},37138:(e,t,o)=>{o.d(t,{t:()=>i});var r=o(7804),a=o(34088);class i extends r.n{constructor(e,t){super(e,"vec2",a.c.Draw,((o,r,a,i)=>o.setUniform2fv(e,t(r,a,i))))}}},14103:(e,t,o)=>{o.d(t,{$U:()=>R});var r=o(6273),a=o(80347),i=o(19913),n=o(84456),s=o(7724),l=o(77788),c=o(3525),d=o(23605),u=o(35212),h=o(10875),m=o(71678),p=o(31272),v=o(8445),f=o(15449),g=o(33763),x=o(72559),b=o(66356),y=o(73395),T=o(83244),w=o(82392),M=o(51229),C=o(51662),S=o(7782),_=o(18693);class E extends _.E{constructor(){super(...arguments),this.output=l.V.Color,this.alphaDiscardMode=h.sf.Opaque,this.doubleSidedMode=d.W.None,this.pbrMode=u.A9.Disabled,this.cullFace=h.s2.None,this.transparencyPassType=S.y.NONE,this.normalType=c.W.Attribute,this.textureCoordinateType=M.q.None,this.customDepthTest=h.it.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,w._)([(0,C.W)({count:l.V.COUNT})],E.prototype,"output",void 0),(0,w._)([(0,C.W)({count:h.sf.COUNT})],E.prototype,"alphaDiscardMode",void 0),(0,w._)([(0,C.W)({count:d.W.COUNT})],E.prototype,"doubleSidedMode",void 0),(0,w._)([(0,C.W)({count:u.A9.COUNT})],E.prototype,"pbrMode",void 0),(0,w._)([(0,C.W)({count:h.s2.COUNT})],E.prototype,"cullFace",void 0),(0,w._)([(0,C.W)({count:S.y.COUNT})],E.prototype,"transparencyPassType",void 0),(0,w._)([(0,C.W)({count:c.W.COUNT})],E.prototype,"normalType",void 0),(0,w._)([(0,C.W)({count:M.q.COUNT})],E.prototype,"textureCoordinateType",void 0),(0,w._)([(0,C.W)({count:h.it.COUNT})],E.prototype,"customDepthTest",void 0),(0,w._)([(0,C.W)()],E.prototype,"spherical",void 0),(0,w._)([(0,C.W)()],E.prototype,"hasVertexColors",void 0),(0,w._)([(0,C.W)()],E.prototype,"hasSymbolColors",void 0),(0,w._)([(0,C.W)()],E.prototype,"hasVerticalOffset",void 0),(0,w._)([(0,C.W)()],E.prototype,"hasSlicePlane",void 0),(0,w._)([(0,C.W)()],E.prototype,"hasSliceHighlight",void 0),(0,w._)([(0,C.W)()],E.prototype,"hasColorTexture",void 0),(0,w._)([(0,C.W)()],E.prototype,"hasMetallicRoughnessTexture",void 0),(0,w._)([(0,C.W)()],E.prototype,"hasEmissionTexture",void 0),(0,w._)([(0,C.W)()],E.prototype,"hasOcclusionTexture",void 0),(0,w._)([(0,C.W)()],E.prototype,"hasNormalTexture",void 0),(0,w._)([(0,C.W)()],E.prototype,"hasScreenSizePerspective",void 0),(0,w._)([(0,C.W)()],E.prototype,"hasVertexTangents",void 0),(0,w._)([(0,C.W)()],E.prototype,"hasOccludees",void 0),(0,w._)([(0,C.W)()],E.prototype,"multipassEnabled",void 0),(0,w._)([(0,C.W)()],E.prototype,"hasModelTransformation",void 0),(0,w._)([(0,C.W)()],E.prototype,"offsetBackfaces",void 0),(0,w._)([(0,C.W)()],E.prototype,"vvSize",void 0),(0,w._)([(0,C.W)()],E.prototype,"vvColor",void 0),(0,w._)([(0,C.W)()],E.prototype,"receiveShadows",void 0),(0,w._)([(0,C.W)()],E.prototype,"receiveAmbientOcclusion",void 0),(0,w._)([(0,C.W)()],E.prototype,"textureAlphaPremultiplied",void 0),(0,w._)([(0,C.W)()],E.prototype,"instanced",void 0),(0,w._)([(0,C.W)()],E.prototype,"instancedColor",void 0),(0,w._)([(0,C.W)()],E.prototype,"objectAndLayerIdColorInstanced",void 0),(0,w._)([(0,C.W)()],E.prototype,"instancedDoublePrecision",void 0),(0,w._)([(0,C.W)()],E.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,w._)([(0,C.W)()],E.prototype,"writeDepth",void 0),(0,w._)([(0,C.W)()],E.prototype,"transparent",void 0),(0,w._)([(0,C.W)()],E.prototype,"enableOffset",void 0),(0,w._)([(0,C.W)()],E.prototype,"cullAboveGround",void 0),(0,w._)([(0,C.W)()],E.prototype,"snowCover",void 0),(0,w._)([(0,C.W)()],E.prototype,"hasColorTextureTransform",void 0),(0,w._)([(0,C.W)()],E.prototype,"hasEmissionTextureTransform",void 0),(0,w._)([(0,C.W)()],E.prototype,"hasNormalTextureTransform",void 0),(0,w._)([(0,C.W)()],E.prototype,"hasOcclusionTextureTransform",void 0),(0,w._)([(0,C.W)()],E.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,w._)([(0,C.W)({constValue:!1})],E.prototype,"occlusionPass",void 0),(0,w._)([(0,C.W)({constValue:!0})],E.prototype,"hasVvInstancing",void 0),(0,w._)([(0,C.W)({constValue:!1})],E.prototype,"useCustomDTRExponentForWater",void 0),(0,w._)([(0,C.W)({constValue:!1})],E.prototype,"supportsTextureAtlas",void 0),(0,w._)([(0,C.W)({constValue:!0})],E.prototype,"useFillLights",void 0);var A=o(21979),O=o(38716);class H extends T.R5{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=c.W.Attribute,t.doubleSidedMode=d.W.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,H.shader)}}H.shader=new A.$(O.R,(()=>o.e(6252).then(o.bind(o,56252))));class R extends p.im{constructor(e){super(e,P),this.supportsEdges=!0,this.produces=new Map([[f.N.OPAQUE_MATERIAL,e=>((0,l.XY)(e)||(0,l.PJ)(e))&&!this.parameters.transparent],[f.N.TRANSPARENT_MATERIAL,e=>((0,l.XY)(e)||(0,l.PJ)(e))&&this.parameters.transparent&&this.parameters.writeDepth],[f.N.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>((0,l.XY)(e)||(0,l.PJ)(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new E,this._vertexBufferLayout=function(e){const t=(0,s.BP)().vec3f(g.r.POSITION);return e.normalType===c.W.Compressed?t.vec2i16(g.r.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(g.r.NORMAL),e.hasVertexTangents&&t.vec4f(g.r.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(g.r.UV0),e.hasVertexColors&&t.vec4u8(g.r.COLOR),e.hasSymbolColors&&t.vec4u8(g.r.SYMBOLCOLOR),(0,r.A)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(g.r.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==l.V.Shadow&&e!==l.V.ShadowExcludeHighlight&&e!==l.V.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:o,hasSymbolColors:r,vvColor:a}=e,i="replace"===e.colorMixMode,n=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,l=t||a||r;return o&&l?i||n:o?i?s:n:l?i||n:i?s:n}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?h.s2.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==l.V.Color&&e!==l.V.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=d.W.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?d.W.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?d.W.WindingOrder:d.W.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&null!=t.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?u.A9.Schematic:u.A9.Normal:u.A9.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<v.xt,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,o,r,i,s){if(null!=this.parameters.verticalOffset){const e=o.camera;(0,a.s)(F,t[12],t[13],t[14]);let s=null;switch(o.viewingMode){case n.RT.Global:s=(0,a.n)(B,F);break;case n.RT.Local:s=(0,a.c)(B,L)}let l=0;const c=(0,a.f)(V,F,e.eye),d=(0,a.l)(c),u=(0,a.h)(c,c,1/d);let h=null;this.parameters.screenSizePerspective&&(h=(0,a.k)(s,u)),l+=(0,y.kE)(e,d,this.parameters.verticalOffset,h??0,this.parameters.screenSizePerspective),(0,a.h)(s,s,l),(0,a.t)(W,s,o.transform.inverseRotation),r=(0,a.f)(I,r,W),i=(0,a.f)(G,i,W)}(0,y.Uy)(e,o,r,i,(0,x.ou)(o.verticalOffset),s)}createGLMaterial(e){return new z(e)}createBufferWriter(){return new b.Z(this._vertexBufferLayout)}}class z extends m.m{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==l.V.Color&&this._output!==l.V.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const o=e.camera.viewInverseTransposeMatrix;return(0,a.s)(t.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?H:T.R5,e)}}class N extends T.uD{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const P=new N,I=(0,i.vt)(),G=(0,i.vt)(),L=(0,i.fA)(0,0,1),B=(0,i.vt)(),W=(0,i.vt)(),F=(0,i.vt)(),V=(0,i.vt)()},40327:(e,t,o)=>{o.d(t,{Jr:()=>i,Rk:()=>n,d_:()=>l,mX:()=>s});var r=o(80347),a=o(19913);function i({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:o,roughnessFactor:i,emissiveTexture:n,emissiveFactor:s,occlusionTexture:l}){return null==e&&null==t&&null==n&&(null==s||(0,r.j)(s,a.uY))&&null==l&&(null==i||1===i)&&(null==o||1===o)}const n=[1,1,.5],s=[0,.6,.2],l=[0,1,.2]},83244:(e,t,o)=>{o.d(t,{R5:()=>_,V:()=>S,uD:()=>C});var r=o(19913),a=o(76982),i=o(84456),n=o(77788),s=o(3525),l=o(51229),c=o(83143),d=o(78546),u=o(21979),h=o(19362),m=o(10875),p=o(74242),v=o(31272),f=o(8445),g=o(24441),x=o(28116),b=o(7782),y=o(40327),T=o(12668),w=o(68716),M=o(15651);class C extends c.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,r.ci)(y.Rk),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=m.s2.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=(0,r.fA)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=s.W.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,r.fA)(.2,.2,.2),this.diffuse=(0,r.fA)(.8,.8,.8),this.externalColor=(0,a.fA)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,r.vt)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=m.it.Less,this.textureAlphaMode=m.sf.Blend,this.textureAlphaCutoff=d.H,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=v.m$.Occlude,this.isDecoration=!1}}class S extends c.gy{constructor(){super(...arguments),this.origin=(0,r.vt)(),this.slicePlaneLocalOrigin=this.origin}}class _ extends h.w{initializeConfiguration(e,t){t.spherical=e.viewingMode===i.RT.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?l.q.Default:l.q.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,_.shader)}_initializeProgram(e,t){return new g.B(e.rctx,t.get().build(this.configuration),p.D)}_convertDepthTestFunction(e){return e===m.it.Lequal?w.MT.LEQUAL:w.MT.LESS}_makePipeline(e,t){const o=this.configuration,r=e===b.y.NONE,a=e===b.y.FrontFace;return(0,M.Ey)({blending:o.output!==n.V.Color&&o.output!==n.V.Alpha||!o.transparent?null:r?f.V0:(0,f.ez)(e),culling:E(o)?(0,M.Xt)(o.cullFace):null,depthTest:{func:(0,f.K_)(e,this._convertDepthTestFunction(o.customDepthTest))},depthWrite:(r||a)&&o.writeDepth?M.kn:null,colorWrite:M.wE,stencilWrite:o.hasOccludees?x.v0:null,stencilTest:o.hasOccludees?t?x.a9:x.qh:null,polygonOffset:r||a?null:(0,f.aB)(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function E(e){return e.cullFace!==m.s2.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}_.shader=new u.$(T.D,(()=>o.e(1084).then(o.bind(o,41084))))}}]);