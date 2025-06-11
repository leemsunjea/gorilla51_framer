import { a as Gt, b as Ot, c as Kt } from "./chunk-5XG76WEH.mjs";
import { a as At, b as Nt, c as Lt } from "./chunk-K3DJB6LH.mjs";
import { a as gr, b as yr, c as xr } from "./chunk-XW7AWP4U.mjs";
import {
  a as Rt,
  b as Dt,
  c as Et,
  d as Jt,
  e as Ht,
  f as jt,
} from "./chunk-NT66AP4B.mjs";
import { a as qt, b as Mt, c as Yt } from "./chunk-X4PHJ7MQ.mjs";
import { a as pr, b as hr, c as ur } from "./chunk-QJU3B2HE.mjs";
import { a as _t, b as Vt, c as zt, d as Tr } from "./chunk-H4YRIPBY.mjs";
import { a as vt, c as Fr } from "./chunk-QTVK6HLP.mjs";
import { a as Xt, b as Qt, c as Zt } from "./chunk-H6GU6JGP.mjs";
import { a as cr, b as mr, c as fr } from "./chunk-DEQSPWZG.mjs";
import { a as Pe } from "./chunk-SPINAU55.mjs";
import { a as sr, b as lr, c as dr } from "./chunk-TVZRU6SD.mjs";
import { a as re } from "./chunk-CGWXMN7Q.mjs";
import { a as Wt, b as Bt, c as Pt } from "./chunk-IW5URUB4.mjs";
import {
  a as bt,
  b as wt,
  c as Ct,
  d as rr,
  e as tr,
  f as ar,
} from "./chunk-J6OIRZ2V.mjs";
import {
  a as nr,
  b as or,
  c as ir,
  d as kt,
  e as It,
  f as Ut,
  g as St,
  h as Tt,
  i as Ft,
  j as Ve,
} from "./chunk-FNWNVS7D.mjs";
import "./chunk-42U43NKG.mjs";
import {
  $ as _,
  A as Sr,
  B as _e,
  C as ot,
  Ca as E,
  D as d,
  Da as U,
  E as it,
  G as q,
  Ga as W,
  H as Ze,
  Ha as $,
  I as st,
  Ia as M,
  Ja as z,
  Ka as xt,
  L as D,
  M as lt,
  O as Z,
  P as ie,
  R as $e,
  V as Fe,
  W as dt,
  X as se,
  Y as I,
  _ as we,
  aa as ct,
  ba as mt,
  e as P,
  f as X,
  fa as ft,
  g as t,
  ga as A,
  ha as pt,
  ia as ht,
  ja as ue,
  k as Zr,
  m as $r,
  ma as Se,
  n as Ur,
  na as ut,
  o as ge,
  oa as gt,
  p as Qe,
  s as et,
  t as rt,
  u as Q,
  va as le,
  w as tt,
  wa as er,
  x as at,
  xa as yt,
  z as nt,
} from "./chunk-Z5PNMCM7.mjs";
import {
  B as Xe,
  C as e,
  D as p,
  d as m,
  e as Or,
  h as be,
  j as O,
  l as Kr,
  n as Ir,
  o as Xr,
  p as ne,
  q as Be,
  r as K,
  v as oe,
  w as j,
  x as Qr,
} from "./chunk-RL5E2GBA.mjs";
import "./chunk-HZL4YIMB.mjs";
import { a as ba, c as T } from "./chunk-A3IIQ6X3.mjs";
var wa = "default" in Ur ? $r : Ur,
  vr = {},
  $t = wa;
vr.createRoot = $t.createRoot;
vr.hydrateRoot = $t.hydrateRoot;
var Ar = vr.createRoot,
  ea = vr.hydrateRoot;
var ka = M(Pe),
  Ia = $e(Fe(t.div)),
  Ua = ["UAo9VX0TG", "EBA0CEQE0", "CiZYrYCtG", "iSLuYztrE"],
  Sa = "framer-WNMtE",
  Ta = {
    CiZYrYCtG: "framer-v-5ok89o",
    EBA0CEQE0: "framer-v-kv43op",
    iSLuYztrE: "framer-v-pbx8bu",
    UAo9VX0TG: "framer-v-hdn1z2",
  };
function Nr(r, ...o) {
  let i = {};
  return o?.forEach((n) => n && Object.assign(i, r[n])), i;
}
var Fa = { bounce: 0.2, delay: 2.6, duration: 2, type: "spring" },
  Aa = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Fa,
    x: 0,
    y: 0,
  },
  Na = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 10,
  },
  La = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" },
  _a = (r, o) => `translateY(-50%) ${o}`,
  Va = ({ value: r, children: o }) => {
    let i = ne(P),
      n = r ?? i.transition,
      s = oe(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: s, children: o });
  },
  za = t.create(m),
  Ra = {
    "Desktop - Hover": "EBA0CEQE0",
    Desktop: "UAo9VX0TG",
    Phone: "iSLuYztrE",
    Tablet: "CiZYrYCtG",
  },
  Da = ({ height: r, id: o, link: i, price: n, width: s, ...w }) => ({
    ...w,
    UApeZwLpA: n ?? w.UApeZwLpA ?? "Buy for $",
    variant: Ra[w.variant] ?? w.variant ?? "UAo9VX0TG",
    WZglYKE0H: i ?? w.WZglYKE0H,
  }),
  Ea = (r, o) =>
    r.layoutDependency ? o.join("-") + r.layoutDependency : o.join("-"),
  Wa = O(function (r, o) {
    let i = j(null),
      n = o ?? i,
      s = K(),
      { activeLocale: w, setLocale: C } = Q(),
      a = se(),
      {
        style: S,
        className: u,
        layoutId: V,
        variant: R,
        WZglYKE0H: F,
        UApeZwLpA: y,
        ...h
      } = Da(r),
      {
        baseVariant: Y,
        classNames: v,
        clearLoadingGesture: J,
        gestureHandlers: N,
        gestureVariant: G,
        isLoading: me,
        setGestureState: L,
        setVariant: B,
        variants: l,
      } = le({
        cycleOrder: Ua,
        defaultVariant: "UAo9VX0TG",
        ref: n,
        variant: R,
        variantClassNames: Ta,
      }),
      k = Ea(r, l),
      { activeVariantCallback: te, delay: ae } = Se(Y),
      ye = te(async (...H) => {
        L({ isHovered: !0 }), B("EBA0CEQE0");
      }),
      xe = te(async (...H) => {
        L({ isHovered: !1 }), B("UAo9VX0TG");
      }),
      Le = D(Sa, ...[]),
      pe = () => Y === "iSLuYztrE";
    return e(X, {
      id: V ?? s,
      children: e(za, {
        animate: l,
        initial: !1,
        children: e(Va, {
          value: La,
          children: e(Ia, {
            ...h,
            ...N,
            __framer__presenceAnimate: Aa,
            __framer__presenceInitial: Na,
            __perspectiveFX: !1,
            __smartComponentFX: !0,
            __targetOpacity: 1,
            className: D(Le, "framer-hdn1z2", u, v),
            "data-framer-appear-id": "hdn1z2",
            "data-framer-name": "Desktop",
            "data-highlight": !0,
            layoutDependency: k,
            layoutId: "UAo9VX0TG",
            onMouseEnter: ye,
            optimized: !0,
            ref: n,
            style: {
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              ...S,
            },
            ...Nr(
              {
                CiZYrYCtG: { "data-framer-name": "Tablet" },
                EBA0CEQE0: {
                  "data-framer-name": "Desktop - Hover",
                  onMouseLeave: xe,
                },
                iSLuYztrE: {
                  "data-framer-name": "Phone",
                  "data-highlight": void 0,
                  onMouseEnter: void 0,
                },
              },
              Y,
              G,
            ),
            children: e(A, {
              href: F,
              motionChild: !0,
              nodeId: "MERzqjq9q",
              openInNewTab: !0,
              scopeId: "p1quSUGEz",
              children: p(t.a, {
                className: "framer-1sfu8pi framer-1pcaorv",
                "data-framer-name": "Get Template",
                layoutDependency: k,
                layoutId: "MERzqjq9q",
                style: {
                  backgroundColor: "rgb(43, 47, 57)",
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                },
                variants: {
                  EBA0CEQE0: { backgroundColor: "rgb(250, 111, 69)" },
                },
                children: [
                  p(t.div, {
                    className: "framer-68kqfz",
                    "data-framer-name": "Text",
                    layoutDependency: k,
                    layoutId: "hVNdxytUh",
                    style: { opacity: 1 },
                    variants: { iSLuYztrE: { opacity: 0 } },
                    children: [
                      e(U, {
                        __fromCanvasComponent: !0,
                        children: e(m, {
                          children: e(t.p, {
                            style: {
                              "--font-selector":
                                "RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk",
                              "--framer-font-family":
                                '"Inter Display", "Inter Display Placeholder", sans-serif',
                              "--framer-font-open-type-features": "'cpsp' on",
                              "--framer-font-weight": "600",
                              "--framer-letter-spacing": "-0.03em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-95b98737-53c5-47a4-8a3b-46ab3792a275, rgb(249, 250, 251)))",
                            },
                            children: "Buy Template",
                          }),
                        }),
                        className: "framer-y5qjlr",
                        "data-framer-name": "Text 1",
                        fonts: ["FR;InterDisplay-SemiBold"],
                        layoutDependency: k,
                        layoutId: "yEJiJ3a05",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-95b98737-53c5-47a4-8a3b-46ab3792a275, rgb(249, 250, 251))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      e(U, {
                        __fromCanvasComponent: !0,
                        children: e(m, {
                          children: e(t.p, {
                            style: {
                              "--font-selector":
                                "RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk",
                              "--framer-font-family":
                                '"Inter Display", "Inter Display Placeholder", sans-serif',
                              "--framer-font-open-type-features": "'cpsp' on",
                              "--framer-font-weight": "600",
                              "--framer-letter-spacing": "-0.03em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-95b98737-53c5-47a4-8a3b-46ab3792a275, rgb(249, 250, 251)))",
                            },
                            children: "Buy for \xA389",
                          }),
                        }),
                        className: "framer-1l8l9sc",
                        "data-framer-name": "Text 2",
                        fonts: ["FR;InterDisplay-SemiBold"],
                        layoutDependency: k,
                        layoutId: "bNknj_iFR",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-95b98737-53c5-47a4-8a3b-46ab3792a275, rgb(249, 250, 251))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          "--framer-paragraph-spacing": "0px",
                        },
                        text: y,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                        ...Nr({ EBA0CEQE0: { transformTemplate: _a } }, Y, G),
                      }),
                    ],
                  }),
                  p(t.div, {
                    className: "framer-1h55eww",
                    "data-framer-name": "Icon",
                    layoutDependency: k,
                    layoutId: "mTgqILosB",
                    children: [
                      e(I, {
                        children: e(_, {
                          className: "framer-1xejcgw-container",
                          "data-framer-name": "1",
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: k,
                          layoutId: "whOT66Bnk-container",
                          name: "1",
                          nodeId: "whOT66Bnk",
                          rendersWithMotion: !0,
                          scopeId: "p1quSUGEz",
                          children: e(Pe, {
                            color: "rgb(250, 111, 69)",
                            height: "100%",
                            iconSearch: "House",
                            iconSelection: "ArrowRight",
                            id: "whOT66Bnk",
                            layoutId: "whOT66Bnk",
                            mirrored: !1,
                            name: "1",
                            selectByList: !0,
                            style: { height: "100%", width: "100%" },
                            weight: "bold",
                            width: "100%",
                          }),
                        }),
                      }),
                      e(I, {
                        children: e(_, {
                          className: "framer-1imard5-container",
                          "data-framer-name": "2",
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: k,
                          layoutId: "TtepxU6Dj-container",
                          name: "2",
                          nodeId: "TtepxU6Dj",
                          rendersWithMotion: !0,
                          scopeId: "p1quSUGEz",
                          children: e(Pe, {
                            color: "rgb(30, 43, 58)",
                            height: "100%",
                            iconSearch: "House",
                            iconSelection: "ArrowRight",
                            id: "TtepxU6Dj",
                            layoutId: "TtepxU6Dj",
                            mirrored: !1,
                            name: "2",
                            selectByList: !0,
                            style: { height: "100%", width: "100%" },
                            weight: "bold",
                            width: "100%",
                            ...Nr(
                              {
                                EBA0CEQE0: {
                                  color:
                                    "var(--token-95b98737-53c5-47a4-8a3b-46ab3792a275, rgb(249, 250, 251))",
                                },
                              },
                              Y,
                              G,
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                  pe() &&
                    e(I, {
                      children: e(_, {
                        className: "framer-1rzygad-container",
                        "data-framer-name": "Icon",
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: k,
                        layoutId: "EtK2a8rLv-container",
                        name: "Icon",
                        nodeId: "EtK2a8rLv",
                        rendersWithMotion: !0,
                        scopeId: "p1quSUGEz",
                        children: e(Pe, {
                          color: "rgb(250, 111, 69)",
                          height: "100%",
                          iconSearch: "House",
                          iconSelection: "ShoppingCart",
                          id: "EtK2a8rLv",
                          layoutId: "EtK2a8rLv",
                          mirrored: !1,
                          name: "Icon",
                          selectByList: !0,
                          style: { height: "100%", width: "100%" },
                          weight: "regular",
                          width: "100%",
                        }),
                      }),
                    }),
                ],
              }),
            }),
          }),
        }),
      }),
    });
  }),
  Ba = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-WNMtE.framer-1pcaorv, .framer-WNMtE .framer-1pcaorv { display: block; }",
    ".framer-WNMtE.framer-hdn1z2 { align-content: flex-end; align-items: flex-end; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 42px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 142px; }",
    ".framer-WNMtE .framer-1sfu8pi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 12px 16px 12px 16px; position: relative; text-decoration: none; width: 142px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-WNMtE .framer-68kqfz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 18px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100px; }",
    ".framer-WNMtE .framer-y5qjlr { -webkit-user-select: none; flex: none; height: auto; left: -1px; position: absolute; top: -1px; user-select: none; white-space: pre; width: auto; z-index: 1; }",
    ".framer-WNMtE .framer-1l8l9sc { -webkit-user-select: none; bottom: -24px; flex: none; height: auto; left: -1px; position: absolute; user-select: none; white-space: pre; width: auto; z-index: 1; }",
    ".framer-WNMtE .framer-1h55eww { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 16px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 16px; }",
    ".framer-WNMtE .framer-1xejcgw-container { -webkit-user-select: none; bottom: -2px; flex: none; left: -2px; position: absolute; right: -2px; top: -2px; user-select: none; z-index: 1; }",
    ".framer-WNMtE .framer-1imard5-container { bottom: -2px; flex: none; left: -22px; position: absolute; top: -2px; width: 20px; z-index: 1; }",
    ".framer-WNMtE .framer-1rzygad-container { -webkit-user-select: none; flex: none; height: 24px; left: calc(50.00000000000002% - 24px / 2); pointer-events: none; position: absolute; top: calc(50.00000000000002% - 24px / 2); user-select: none; width: 24px; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-WNMtE.framer-hdn1z2, .framer-WNMtE .framer-1sfu8pi, .framer-WNMtE .framer-68kqfz, .framer-WNMtE .framer-1h55eww { gap: 0px; } .framer-WNMtE.framer-hdn1z2 > *, .framer-WNMtE .framer-1sfu8pi > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-WNMtE.framer-hdn1z2 > :first-child, .framer-WNMtE .framer-1sfu8pi > :first-child { margin-left: 0px; } .framer-WNMtE.framer-hdn1z2 > :last-child, .framer-WNMtE .framer-1sfu8pi > :last-child { margin-right: 0px; } .framer-WNMtE .framer-68kqfz > *, .framer-WNMtE .framer-1h55eww > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-WNMtE .framer-68kqfz > :first-child, .framer-WNMtE .framer-1h55eww > :first-child { margin-top: 0px; } .framer-WNMtE .framer-68kqfz > :last-child, .framer-WNMtE .framer-1h55eww > :last-child { margin-bottom: 0px; } }",
    ".framer-WNMtE.framer-v-kv43op .framer-y5qjlr { top: -48px; }",
    ".framer-WNMtE.framer-v-kv43op .framer-1l8l9sc { bottom: unset; top: 50%; }",
    ".framer-WNMtE.framer-v-kv43op .framer-1xejcgw-container { left: unset; right: -23px; width: 20px; }",
    ".framer-WNMtE.framer-v-kv43op .framer-1imard5-container { left: -2px; right: -2px; width: unset; }",
    ".framer-WNMtE.framer-v-5ok89o.framer-hdn1z2 { cursor: unset; }",
    ".framer-WNMtE.framer-v-5ok89o .framer-1sfu8pi { width: 138px; }",
    ".framer-WNMtE.framer-v-pbx8bu.framer-hdn1z2 { cursor: unset; justify-content: flex-end; }",
    ".framer-WNMtE.framer-v-pbx8bu .framer-1sfu8pi { width: 42px; }",
    ".framer-WNMtE.framer-v-pbx8bu .framer-68kqfz { -webkit-user-select: none; user-select: none; }",
  ],
  qe = Z(Wa, Ba, "framer-WNMtE"),
  Lr = qe;
qe.displayName = "Buy Template";
qe.defaultProps = { height: 42, width: 142 };
q(qe, {
  variant: {
    options: ["UAo9VX0TG", "EBA0CEQE0", "CiZYrYCtG", "iSLuYztrE"],
    optionTitles: ["Desktop", "Desktop - Hover", "Tablet", "Phone"],
    title: "Variant",
    type: d.Enum,
  },
  WZglYKE0H: { description: "Lemonsqueezy link", title: "Link", type: d.Link },
  UApeZwLpA: {
    defaultValue: "Buy for $",
    description: "Enter template price",
    displayTextArea: !1,
    title: "Price",
    type: d.String,
  },
});
$(
  qe,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/dHHUz45rhM2KCQpj9zttNVlibk.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2",
          weight: "600",
        },
      ],
    },
    ...ka,
  ],
  { supportsExplicitInterCodegen: !0 },
);
var ra =
  (r, o = "end") =>
  (i) => {
    i = o === "end" ? Math.min(i, 0.999) : Math.max(i, 0.001);
    let n = i * r,
      s = o === "end" ? Math.floor(n) : Math.ceil(n);
    return vt(0, 1, s / r);
  };
function ze(r) {
  let { opacity: o, style: i } = r,
    n = ["0%", "-5%", "-15%", "7%", "-5%", "-15%", "15%", "0%", "3%", "-10%"],
    s = ["0%", "-10%", "5%", "-25%", "25%", "10%", "0%", "15%", "35%", "10%"],
    w = _e.current() === _e.canvas;
  return e("div", {
    style: {
      width: "100%",
      height: "100%",
      position: "relative",
      overflow: "hidden",
    },
    children: e(t.div, {
      style: {
        ...Pa,
        opacity: o,
        inset: w ? 0 : "-200%",
        width: w ? "100%" : "400%",
        height: w ? "100%" : "400%",
        position: "absolute",
      },
      animate: !w && { x: n, y: s },
      transition: { ease: ra(10, "start"), repeat: 1 / 0, duration: 8 },
    }),
  });
}
ze.defaultProps = { opacity: 0.5 };
q(ze, {
  opacity: {
    title: "Opacity",
    type: d.Number,
    step: 0.1,
    displayStepper: !0,
    max: 1,
    min: 0,
  },
});
var Pa = {
  backgroundSize: "256px 256px",
  backgroundRepeat: "repeat",
  background:
    "url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')",
};
var br = [
  ["Honolulu (UTC-10)", "Pacific/Honolulu"],
  ["Anchorage (UTC-9)", "America/Anchorage"],
  ["Los Angeles (UTC-8)", "America/Los_Angeles"],
  ["Vancouver (UTC-8)", "America/Vancouver"],
  ["Phoenix (UTC-7)", "America/Phoenix"],
  ["Denver (UTC-7)", "America/Denver"],
  ["Mexico City (UTC-6)", "America/Mexico_City"],
  ["Chicago (UTC-6)", "America/Chicago"],
  ["New York (UTC-5)", "America/New_York"],
  ["Toronto (UTC-5)", "America/Toronto"],
  ["Bogota (UTC-5)", "America/Bogota"],
  ["Lima (UTC-5)", "America/Lima"],
  ["Santiago (UTC-4)", "America/Santiago"],
  ["S\xE3o Paulo (UTC-3)", "America/Sao_Paulo"],
  ["Buenos Aires (UTC-3)", "America/Argentina/Buenos_Aires"],
  ["Reykjavik (UTC+0)", "Atlantic/Reykjavik"],
  ["London (UTC+0)", "Europe/London"],
  ["Dublin (UTC+0)", "Europe/Dublin"],
  ["Lisbon (UTC+0)", "Europe/Lisbon"],
  ["Amsterdam (UTC+1)", "Europe/Amsterdam"],
  ["Berlin (UTC+1)", "Europe/Berlin"],
  ["Brussels (UTC+1)", "Europe/Brussels"],
  ["Copenhagen (UTC+1)", "Europe/Copenhagen"],
  ["Madrid (UTC+1)", "Europe/Madrid"],
  ["Oslo (UTC+1)", "Europe/Oslo"],
  ["Paris (UTC+1)", "Europe/Paris"],
  ["Rome (UTC+1)", "Europe/Rome"],
  ["Stockholm (UTC+1)", "Europe/Stockholm"],
  ["Warsaw (UTC+1)", "Europe/Warsaw"],
  ["Zurich (UTC+1)", "Europe/Zurich"],
  ["Athens (UTC+2)", "Europe/Athens"],
  ["Cairo (UTC+2)", "Africa/Cairo"],
  ["Helsinki (UTC+2)", "Europe/Helsinki"],
  ["Jerusalem (UTC+2)", "Asia/Jerusalem"],
  ["Moscow (UTC+3)", "Europe/Moscow"],
  ["Istanbul (UTC+3)", "Europe/Istanbul"],
  ["Riyadh (UTC+3)", "Asia/Riyadh"],
  ["Dubai (UTC+4)", "Asia/Dubai"],
  ["Mumbai (UTC+5.5)", "Asia/Kolkata"],
  ["New Delhi (UTC+5.5)", "Asia/Kolkata"],
  ["Dhaka (UTC+6)", "Asia/Dhaka"],
  ["Bangkok (UTC+7)", "Asia/Bangkok"],
  ["Jakarta (UTC+7)", "Asia/Jakarta"],
  ["Singapore (UTC+8)", "Asia/Singapore"],
  ["Shanghai (UTC+8)", "Asia/Shanghai"],
  ["Beijing (UTC+8)", "Asia/Shanghai"],
  ["Hong Kong (UTC+8)", "Asia/Hong_Kong"],
  ["Taipei (UTC+8)", "Asia/Taipei"],
  ["Manila (UTC+8)", "Asia/Manila"],
  ["Seoul (UTC+9)", "Asia/Seoul"],
  ["Tokyo (UTC+9)", "Asia/Tokyo"],
  ["Sydney (UTC+10)", "Australia/Sydney"],
  ["Melbourne (UTC+10)", "Australia/Melbourne"],
  ["Brisbane (UTC+10)", "Australia/Brisbane"],
  ["Auckland (UTC+12)", "Pacific/Auckland"],
].map(([r, o]) => ({ label: r, value: o }));
function ke({
  textColor: r,
  font: o,
  style: i,
  selectedTimezone: n,
  hideSeconds: s,
  use24HourFormat: w,
  textAlign: C,
}) {
  let [a, S] = Qr(""),
    u = j(br.find((F) => F.label === n)?.value ?? "Europe/London");
  Be(() => {
    let F = br.find((y) => y.label === n)?.value;
    F && (u.current = F);
  }, [n]);
  let V = Xr(() => {
    try {
      let F = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: s ? void 0 : "numeric",
        hour12: !w,
        timeZone: u.current,
      });
      S(F.format(new Date()));
    } catch (F) {
      console.warn("Time formatting error:", F), S("--:--");
    }
  }, [s, w, n]);
  Be(() => {
    V();
    let F = setInterval(V, 1e3);
    return () => clearInterval(F);
  }, [V]);
  let R = {
    color: r,
    textAlign: C,
    display: "flex",
    justifyContent:
      C === "left" ? "flex-start" : C === "right" ? "flex-end" : "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0,
    letterSpacing: "-0.03em",
    userSelect: "none",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    ...o,
    ...i,
  };
  return e("div", { style: R, children: a });
}
ke.defaultProps = {
  textColor: "#000000",
  font: {
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontWeight: 500,
    fontSize: 35,
    lineHeight: "1.1",
  },
  selectedTimezone: "London (UTC+0)",
  hideSeconds: !1,
  use24HourFormat: !1,
  textAlign: "center",
};
q(ke, {
  textColor: { type: d.Color, title: "Color" },
  font: { type: d.Font, title: "Font", controls: "extended" },
  selectedTimezone: {
    type: d.Enum,
    title: "Timezone",
    options: br.map((r) => r.label),
    optionTitles: br.map((r) => r.label),
  },
  hideSeconds: {
    type: d.Boolean,
    title: "Hide Seconds",
    enabledTitle: "Hidden",
    disabledTitle: "Visible",
  },
  use24HourFormat: {
    type: d.Boolean,
    title: "Time Format",
    enabledTitle: "24h",
    disabledTitle: "12h",
  },
  textAlign: {
    type: d.Enum,
    title: "Align",
    options: ["left", "center", "right"],
    optionTitles: ["Left", "Center", "Right"],
    description: "Created by [Framerpod](https://www.framerpod.com)",
  },
});
function ta(r) {
  return (o) => {
    let i = () => {
      Promise.resolve().then(() => {
        try {
          let C = [
            ".framer-custom-content",
            '[data-framer-name="ProjectContent"]',
            ".framer-ZmIGD",
            '[style*="overflow: auto"]',
            '[style*="overflow-y: auto"]',
            '[style*="overflow: scroll"]',
            '[style*="overflow-y: scroll"]',
            ".framer-body",
            "body",
            "html",
          ]
            .reduce((a, S) => {
              let u = Array.from(document.querySelectorAll(S));
              return [...a, ...u];
            }, [])
            .filter((a, S, u) => a && u.indexOf(a) === S)
            .find((a) => {
              let S = T.getComputedStyle(a),
                u = a.scrollHeight > a.clientHeight,
                V =
                  S.display !== "none" &&
                  S.visibility !== "hidden" &&
                  a.getBoundingClientRect().height > 0;
              return u && V;
            });
          C &&
            ("scrollBehavior" in document.documentElement.style
              ? C.scrollTo({ top: 0, behavior: "smooth" })
              : Zr(C.scrollTop, 0, {
                  duration: 0.8,
                  ease: [0.32, 0, 0.67, 0],
                  onUpdate: (a) => {
                    try {
                      C.scrollTop = a;
                    } catch (S) {
                      console.warn("Scroll update failed:", S);
                    }
                  },
                }));
        } catch (s) {
          console.warn("Scroll to top failed:", s),
            T.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    };
    return e(r, {
      ...o,
      onClick: (s) => {
        i(), o.onClick && o.onClick(s);
      },
    });
  };
}
var Ma = { qqH_rqWfi: { hover: !0 } },
  Ya = ["qqH_rqWfi", "SG28R6RyV"],
  Ja = "framer-Ruxmx",
  Ha = { qqH_rqWfi: "framer-v-1a6ivk4", SG28R6RyV: "framer-v-1xb5xzz" };
function aa(r, ...o) {
  let i = {};
  return o?.forEach((n) => n && Object.assign(i, r[n])), i;
}
var ja = (r) => {
    if (typeof r != "number") return r;
    if (Number.isFinite(r)) return Math.max(0, r) + "px";
  },
  Ga = { bounce: 0.2, delay: 0, duration: 1, type: "spring" },
  Oa = ({ value: r, children: o }) => {
    let i = ne(P),
      n = r ?? i.transition,
      s = oe(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: s, children: o });
  },
  Ka = t.create(m),
  Xa = { Desktop: "qqH_rqWfi", Phone: "SG28R6RyV" },
  Qa = ({
    border: r,
    height: o,
    id: i,
    link: n,
    padding: s,
    socialMedia: w,
    width: C,
    ...a
  }) => ({
    ...a,
    cr8sulb2H: s ?? a.cr8sulb2H ?? "24px 24px 24px 24px",
    oT_qK9UXp: n ?? a.oT_qK9UXp,
    t5YlNd3vC: w ?? a.t5YlNd3vC ?? "Social Media",
    TKmco0SBM: r ??
      a.TKmco0SBM ?? {
        borderBottomWidth: 0,
        borderColor:
          'var(--token-e309f3fd-e019-4571-a428-1d0e34f3ca38, rgb(230, 230, 230)) /* {"name":"Grey 4"} */',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderStyle: "solid",
        borderTopWidth: 0,
      },
    variant: Xa[a.variant] ?? a.variant ?? "qqH_rqWfi",
  }),
  Za = (r, o) =>
    r.layoutDependency ? o.join("-") + r.layoutDependency : o.join("-"),
  $a = O(function (r, o) {
    let i = j(null),
      n = o ?? i,
      s = K(),
      { activeLocale: w, setLocale: C } = Q(),
      a = se(),
      {
        style: S,
        className: u,
        layoutId: V,
        variant: R,
        t5YlNd3vC: F,
        oT_qK9UXp: y,
        TKmco0SBM: h,
        cr8sulb2H: Y,
        ...v
      } = Qa(r),
      {
        baseVariant: J,
        classNames: N,
        clearLoadingGesture: G,
        gestureHandlers: me,
        gestureVariant: L,
        isLoading: B,
        setGestureState: l,
        setVariant: k,
        variants: te,
      } = le({
        cycleOrder: Ya,
        defaultVariant: "qqH_rqWfi",
        enabledGestures: Ma,
        ref: n,
        variant: R,
        variantClassNames: Ha,
      }),
      ae = Za(r, te),
      xe = D(Ja, ...[ir]);
    return e(X, {
      id: V ?? s,
      children: e(Ka, {
        animate: te,
        initial: !1,
        children: e(Oa, {
          value: Ga,
          children: e(A, {
            href: y,
            motionChild: !0,
            nodeId: "qqH_rqWfi",
            scopeId: "cts5oEl1t",
            smoothScroll: !0,
            children: p(t.a, {
              ...v,
              ...me,
              className: `${D(xe, "framer-1a6ivk4", u, N)} framer-fw3ii2`,
              "data-border": !0,
              "data-framer-name": "Desktop",
              layoutDependency: ae,
              layoutId: "qqH_rqWfi",
              ref: n,
              style: {
                "--border-bottom-width":
                  (h.borderBottomWidth ?? h.borderWidth) + "px",
                "--border-color": h.borderColor,
                "--border-left-width":
                  (h.borderLeftWidth ?? h.borderWidth) + "px",
                "--border-right-width":
                  (h.borderRightWidth ?? h.borderWidth) + "px",
                "--border-style": h.borderStyle,
                "--border-top-width":
                  (h.borderTopWidth ?? h.borderWidth) + "px",
                "--g3zrjb": ja(Y),
                backgroundColor:
                  "var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255))",
                ...S,
              },
              variants: {
                "qqH_rqWfi-hover": {
                  "--border-bottom-width": "0px",
                  "--border-color": "rgba(50, 50, 54, 0)",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-style": "solid",
                  "--border-top-width": "0px",
                  backgroundColor:
                    "var(--token-d8014220-2a78-4e07-9390-e464885c7a19, rgb(255, 68, 0))",
                },
              },
              ...aa(
                {
                  "qqH_rqWfi-hover": { "data-framer-name": void 0 },
                  SG28R6RyV: { "data-framer-name": "Phone" },
                },
                J,
                L,
              ),
              children: [
                e(U, {
                  __fromCanvasComponent: !0,
                  children: e(m, {
                    children: e(t.h5, {
                      className: "framer-styles-preset-g90o1d",
                      "data-styles-preset": "YePl36X5E",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-1lwpl3i, var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54)))",
                      },
                      children: "Social Media",
                    }),
                  }),
                  className: "framer-145u4va",
                  "data-framer-name": "Whatsapp",
                  fonts: ["Inter"],
                  layoutDependency: ae,
                  layoutId: "raImCTnGf",
                  style: {
                    "--extracted-1lwpl3i":
                      "var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54))",
                    "--framer-paragraph-spacing": "0px",
                  },
                  text: F,
                  variants: {
                    "qqH_rqWfi-hover": {
                      "--extracted-1lwpl3i":
                        "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                    },
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...aa(
                    {
                      "qqH_rqWfi-hover": {
                        children: e(m, {
                          children: e(t.h5, {
                            className: "framer-styles-preset-g90o1d",
                            "data-styles-preset": "YePl36X5E",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-1lwpl3i, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                            },
                            children: "Social Media",
                          }),
                        }),
                      },
                    },
                    J,
                    L,
                  ),
                }),
                p(t.div, {
                  className: "framer-15sjcjy",
                  "data-framer-name": "Arrows",
                  layoutDependency: ae,
                  layoutId: "zlgjpHaFF",
                  children: [
                    e(E, {
                      background: {
                        alt: "",
                        fit: "fit",
                        pixelHeight: 100,
                        pixelWidth: 60,
                        positionX: "center",
                        positionY: "center",
                        src: "https://framerusercontent.com/images/2OrmE1ODdWjOvroOeBgoXWvvdNQ.svg",
                      },
                      className: "framer-1fdg00i",
                      "data-framer-name": "Arrow Right",
                      layoutDependency: ae,
                      layoutId: "Zh0p3o6pk",
                    }),
                    e(E, {
                      background: {
                        alt: "",
                        fit: "fit",
                        pixelHeight: 100,
                        pixelWidth: 60,
                        positionX: "center",
                        positionY: "center",
                        src: "https://framerusercontent.com/images/yfhSsY6ovxLDWzfU9C8ScfJA.svg",
                      },
                      className: "framer-1qu1oex",
                      "data-framer-name": "Arrow Second",
                      layoutDependency: ae,
                      layoutId: "SST554aqV",
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  en = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Ruxmx.framer-fw3ii2, .framer-Ruxmx .framer-fw3ii2 { display: block; }",
    ".framer-Ruxmx.framer-1a6ivk4 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; height: 80px; justify-content: space-between; overflow: hidden; padding: var(--g3zrjb); position: relative; text-decoration: none; width: 600px; }",
    ".framer-Ruxmx .framer-145u4va { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-Ruxmx .framer-15sjcjy { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 20px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; user-select: none; width: 20px; }",
    ".framer-Ruxmx .framer-1fdg00i { aspect-ratio: 1 / 1; bottom: 0px; flex: none; left: 1px; overflow: hidden; position: absolute; top: 0px; width: var(--framer-aspect-ratio-supported, 20px); z-index: 1; }",
    ".framer-Ruxmx .framer-1qu1oex { aspect-ratio: 1 / 1; bottom: 0px; flex: none; left: -29px; overflow: hidden; position: absolute; top: 0px; width: var(--framer-aspect-ratio-supported, 20px); z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Ruxmx .framer-15sjcjy { gap: 0px; } .framer-Ruxmx .framer-15sjcjy > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-Ruxmx .framer-15sjcjy > :first-child { margin-left: 0px; } .framer-Ruxmx .framer-15sjcjy > :last-child { margin-right: 0px; } }",
    ".framer-Ruxmx.framer-v-1xb5xzz.framer-1a6ivk4 { cursor: unset; }",
    ".framer-Ruxmx.framer-v-1a6ivk4.hover .framer-1fdg00i { left: 30px; }",
    ".framer-Ruxmx.framer-v-1a6ivk4.hover .framer-1qu1oex { left: 0px; }",
    ...or,
    '.framer-Ruxmx[data-border="true"]::after, .framer-Ruxmx [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Me = Z($a, en, "framer-Ruxmx"),
  Ae = Me;
Me.displayName = "Social Btn";
Me.defaultProps = { height: 80, width: 600 };
q(Me, {
  variant: {
    options: ["qqH_rqWfi", "SG28R6RyV"],
    optionTitles: ["Desktop", "Phone"],
    title: "Variant",
    type: d.Enum,
  },
  t5YlNd3vC: {
    defaultValue: "Social Media",
    displayTextArea: !1,
    title: "Social Media",
    type: d.String,
  },
  oT_qK9UXp: { title: "Link", type: d.Link },
  TKmco0SBM: {
    defaultValue: {
      borderBottomWidth: 0,
      borderColor:
        'var(--token-e309f3fd-e019-4571-a428-1d0e34f3ca38, rgb(230, 230, 230)) /* {"name":"Grey 4"} */',
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderStyle: "solid",
      borderTopWidth: 0,
    },
    title: "Border",
    type: d.Border,
  },
  cr8sulb2H: {
    defaultValue: "24px 24px 24px 24px",
    title: "Padding",
    type: d.Padding,
  },
});
$(
  Me,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...z(nr),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var _r = {};
ba(_r, { __FramerMetadata__: () => hn, default: () => wr });
var rn = { Haagfdmtg: { hover: !0 } },
  tn = ["Haagfdmtg", "g5mJ8ARjK"],
  an = "framer-OsVvv",
  nn = { g5mJ8ARjK: "framer-v-1413q9e", Haagfdmtg: "framer-v-jzlcch" };
function na(r, ...o) {
  let i = {};
  return o?.forEach((n) => n && Object.assign(i, r[n])), i;
}
var on = { bounce: 0.2, delay: 0, duration: 0.6, type: "spring" },
  sn = ({ value: r, children: o }) => {
    let i = ne(P),
      n = r ?? i.transition,
      s = oe(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: s, children: o });
  },
  ln = t.create(m),
  dn = { "Tablet & Phone": "g5mJ8ARjK", Desktop: "Haagfdmtg" },
  cn = ({ height: r, id: o, width: i, ...n }) => ({
    ...n,
    variant: dn[n.variant] ?? n.variant ?? "Haagfdmtg",
  }),
  mn = (r, o) =>
    r.layoutDependency ? o.join("-") + r.layoutDependency : o.join("-"),
  fn = O(function (r, o) {
    let i = j(null),
      n = o ?? i,
      s = K(),
      { activeLocale: w, setLocale: C } = Q(),
      a = se(),
      { style: S, className: u, layoutId: V, variant: R, ...F } = cn(r),
      {
        baseVariant: y,
        classNames: h,
        clearLoadingGesture: Y,
        gestureHandlers: v,
        gestureVariant: J,
        isLoading: N,
        setGestureState: G,
        setVariant: me,
        variants: L,
      } = le({
        cycleOrder: tn,
        defaultVariant: "Haagfdmtg",
        enabledGestures: rn,
        ref: n,
        variant: R,
        variantClassNames: nn,
      }),
      B = mn(r, L),
      k = D(an, ...[]);
    return e(X, {
      id: V ?? s,
      children: e(ln, {
        animate: L,
        initial: !1,
        children: e(sn, {
          value: on,
          children: e(t.div, {
            ...F,
            ...v,
            className: D(k, "framer-jzlcch", u, h),
            "data-border": !0,
            "data-framer-name": "Desktop",
            layoutDependency: B,
            layoutId: "Haagfdmtg",
            ref: n,
            style: {
              "--border-bottom-width": "0px",
              "--border-color":
                "var(--token-e309f3fd-e019-4571-a428-1d0e34f3ca38, rgb(230, 230, 230))",
              "--border-left-width": "1px",
              "--border-right-width": "0px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor:
                "var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255))",
              ...S,
            },
            variants: {
              "Haagfdmtg-hover": {
                "--border-color":
                  "var(--token-d8014220-2a78-4e07-9390-e464885c7a19, rgb(255, 68, 0))",
                backgroundColor:
                  "var(--token-d8014220-2a78-4e07-9390-e464885c7a19, rgb(255, 68, 0))",
              },
            },
            ...na(
              {
                "Haagfdmtg-hover": { "data-framer-name": void 0 },
                g5mJ8ARjK: { "data-framer-name": "Tablet & Phone" },
              },
              y,
              J,
            ),
            children: e(t.div, {
              className: "framer-nthxf",
              "data-framer-name": "Button",
              layoutDependency: B,
              layoutId: "L9NvjQhvc",
              children: e(E, {
                background: {
                  alt: "",
                  fit: "fit",
                  loading: W(
                    (a?.y || 0) +
                      (0 + ((a?.height || 40) - 0 - 40) / 2) +
                      0 +
                      0,
                  ),
                  pixelHeight: 60,
                  pixelWidth: 100,
                  positionX: "center",
                  positionY: "center",
                  src: "https://framerusercontent.com/images/Lh3MWNuiBEGLnUBkP8iQRDgwI.svg",
                },
                className: "framer-d0vpg6",
                "data-framer-name": "top",
                layoutDependency: B,
                layoutId: "bhWYxbtYO",
                style: { filter: "none", rotate: 180, WebkitFilter: "none" },
                variants: {
                  "Haagfdmtg-hover": {
                    filter: "brightness(2)",
                    WebkitFilter: "brightness(2)",
                  },
                },
                ...na(
                  {
                    "Haagfdmtg-hover": {
                      background: {
                        alt: "",
                        fit: "fit",
                        loading: W(
                          (a?.y || 0) +
                            (0 + ((a?.height || 60) - 0 - 60) / 2) +
                            0 +
                            5,
                        ),
                        pixelHeight: 60,
                        pixelWidth: 100,
                        positionX: "center",
                        positionY: "center",
                        src: "https://framerusercontent.com/images/f9G5ZyMLKAmlInivRX5bZUS9RFQ.svg",
                      },
                    },
                  },
                  y,
                  J,
                ),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  pn = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-OsVvv.framer-dv639h, .framer-OsVvv .framer-dv639h { display: block; }",
    ".framer-OsVvv.framer-jzlcch { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 600px; }",
    ".framer-OsVvv .framer-nthxf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 40px; z-index: 2; }",
    ".framer-OsVvv .framer-d0vpg6 { -webkit-user-select: none; flex: none; height: 40px; overflow: hidden; position: relative; user-select: none; width: 40px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-OsVvv.framer-jzlcch, .framer-OsVvv .framer-nthxf { gap: 0px; } .framer-OsVvv.framer-jzlcch > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-OsVvv.framer-jzlcch > :first-child { margin-left: 0px; } .framer-OsVvv.framer-jzlcch > :last-child { margin-right: 0px; } .framer-OsVvv .framer-nthxf > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-OsVvv .framer-nthxf > :first-child { margin-top: 0px; } .framer-OsVvv .framer-nthxf > :last-child { margin-bottom: 0px; } }",
    ".framer-OsVvv.framer-v-1413q9e.framer-jzlcch { cursor: unset; }",
    ".framer-OsVvv.framer-v-jzlcch.hover .framer-nthxf { height: 60px; width: 60px; }",
    ".framer-OsVvv.framer-v-jzlcch.hover .framer-d0vpg6 { height: 50px; width: 50px; }",
    '.framer-OsVvv[data-border="true"]::after, .framer-OsVvv [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Ye = Z(fn, pn, "framer-OsVvv"),
  wr = Ye;
Ye.displayName = "To the top";
Ye.defaultProps = { height: 40, width: 600 };
q(Ye, {
  variant: {
    options: ["Haagfdmtg", "g5mJ8ARjK"],
    optionTitles: ["Desktop", "Tablet & Phone"],
    title: "Variant",
    type: d.Enum,
  },
});
$(Ye, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var hn = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerIAUz9RrKV",
      slots: [],
      annotations: {
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"g5mJ8ARjK":{"layout":["fixed","auto"]},"bzGkMwgHD":{"layout":["fixed","auto"]}}}',
        framerContractVersion: "1",
        framerImmutableVariables: "true",
        framerComponentViewportWidth: "true",
        framerIntrinsicWidth: "600",
        framerDisplayContentsDiv: "false",
        framerIntrinsicHeight: "40",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
var un = Fe(t.div),
  gn = { BNYh9PHTd: { hover: !0, pressed: !0 } },
  yn = [
    "BNYh9PHTd",
    "wlDnpaWyc",
    "UnRPoCcL9",
    "jQMUqQd6u",
    "NXLbtzZ0B",
    "ShuBEo09u",
  ],
  xn = "framer-JDYkb",
  vn = {
    BNYh9PHTd: "framer-v-nw86uy",
    jQMUqQd6u: "framer-v-1rlocy2",
    NXLbtzZ0B: "framer-v-dr73mg",
    ShuBEo09u: "framer-v-uq7uj3",
    UnRPoCcL9: "framer-v-3omqwn",
    wlDnpaWyc: "framer-v-i2ixxw",
  };
function oa(r, ...o) {
  let i = {};
  return o?.forEach((n) => n && Object.assign(i, r[n])), i;
}
var bn = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: "tween" },
  wn = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: "tween" },
  Cn = {
    opacity: 1,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  kn = (r, o) => `translateX(-50%) ${o}`,
  In = ({ value: r, children: o }) => {
    let i = ne(P),
      n = r ?? i.transition,
      s = oe(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: s, children: o });
  },
  Un = t.create(m),
  Sn = {
    Default: "BNYh9PHTd",
    Disabled: "UnRPoCcL9",
    Error: "NXLbtzZ0B",
    Loading: "wlDnpaWyc",
    Phone: "ShuBEo09u",
    Success: "jQMUqQd6u",
  },
  Tn = ({ height: r, id: o, width: i, ...n }) => ({
    ...n,
    variant: Sn[n.variant] ?? n.variant ?? "BNYh9PHTd",
  }),
  Fn = (r, o) =>
    r.layoutDependency ? o.join("-") + r.layoutDependency : o.join("-"),
  An = O(function (r, o) {
    let i = j(null),
      n = o ?? i,
      s = K(),
      { activeLocale: w, setLocale: C } = Q(),
      a = se(),
      { style: S, className: u, layoutId: V, variant: R, ...F } = Tn(r),
      {
        baseVariant: y,
        classNames: h,
        clearLoadingGesture: Y,
        gestureHandlers: v,
        gestureVariant: J,
        isLoading: N,
        setGestureState: G,
        setVariant: me,
        variants: L,
      } = le({
        cycleOrder: yn,
        defaultVariant: "BNYh9PHTd",
        enabledGestures: gn,
        ref: n,
        variant: R,
        variantClassNames: vn,
      }),
      B = Fn(r, L),
      k = D(xn, ...[]),
      te = () => y === "wlDnpaWyc",
      ae = () => y !== "wlDnpaWyc";
    return e(X, {
      id: V ?? s,
      children: e(Un, {
        animate: L,
        initial: !1,
        children: e(In, {
          value: bn,
          children: p(t.button, {
            ...F,
            ...v,
            className: D(k, "framer-nw86uy", u, h),
            "data-framer-name": "Default",
            "data-reset": "button",
            layoutDependency: B,
            layoutId: "BNYh9PHTd",
            ref: n,
            style: {
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              opacity: 1,
              ...S,
            },
            variants: {
              "BNYh9PHTd-hover": { opacity: 1 },
              "BNYh9PHTd-pressed": { opacity: 1 },
              jQMUqQd6u: { opacity: 1 },
              NXLbtzZ0B: { opacity: 1 },
              ShuBEo09u: { opacity: 1 },
              UnRPoCcL9: { opacity: 0.5 },
            },
            ...oa(
              {
                "BNYh9PHTd-hover": { "data-framer-name": void 0 },
                "BNYh9PHTd-pressed": { "data-framer-name": void 0 },
                jQMUqQd6u: { "data-framer-name": "Success" },
                NXLbtzZ0B: { "data-framer-name": "Error" },
                ShuBEo09u: { "data-framer-name": "Phone" },
                UnRPoCcL9: { "data-framer-name": "Disabled" },
                wlDnpaWyc: { "data-framer-name": "Loading" },
              },
              y,
              J,
            ),
            children: [
              te() &&
                e(t.div, {
                  className: "framer-13hlivi",
                  "data-framer-name": "Spinner",
                  layoutDependency: B,
                  layoutId: "v5uCVnrSI",
                  style: {
                    mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                    WebkitMask:
                      "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                  },
                  children: e(un, {
                    __framer__loop: Cn,
                    __framer__loopEffectEnabled: !0,
                    __framer__loopRepeatDelay: 0,
                    __framer__loopRepeatType: "loop",
                    __framer__loopTransition: wn,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: "framer-1fvg3yr",
                    "data-framer-name": "Conic",
                    layoutDependency: B,
                    layoutId: "nCg239PSd",
                    style: {
                      background:
                        "conic-gradient(from 180deg at 50% 50%, rgb(68, 204, 255) 0deg, rgb(68, 204, 255) 360deg)",
                      backgroundColor: "rgb(68, 204, 255)",
                      mask: "none",
                      WebkitMask: "none",
                    },
                    variants: {
                      wlDnpaWyc: {
                        background:
                          "conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                        WebkitMask:
                          "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                      },
                    },
                    children: e(t.div, {
                      className: "framer-1qg9eyq",
                      "data-framer-name": "Rounding",
                      layoutDependency: B,
                      layoutId: "RRwhQ0JFH",
                      style: {
                        backgroundColor: "rgb(255, 255, 255)",
                        borderBottomLeftRadius: 1,
                        borderBottomRightRadius: 1,
                        borderTopLeftRadius: 1,
                        borderTopRightRadius: 1,
                      },
                      transformTemplate: kn,
                    }),
                  }),
                }),
              ae() &&
                e(E, {
                  background: {
                    alt: "",
                    fit: "fit",
                    loading: W(
                      (a?.y || 0) + (0 + ((a?.height || 32) - 0 - 20) / 2),
                    ),
                    pixelHeight: 100,
                    pixelWidth: 60,
                    positionX: "center",
                    positionY: "center",
                    src: "https://framerusercontent.com/images/gxUJuIJwqIX497gqbnUCAFDws.svg",
                  },
                  className: "framer-kxhkbf",
                  "data-framer-name": "top",
                  layoutDependency: B,
                  layoutId: "Q2h31cwen",
                  style: { rotate: 180 },
                  ...oa(
                    {
                      "BNYh9PHTd-hover": {
                        background: {
                          alt: "",
                          fit: "fit",
                          loading: W(
                            (a?.y || 0) +
                              (0 + ((a?.height || 32) - 0 - 26) / 2),
                          ),
                          pixelHeight: 100,
                          pixelWidth: 60,
                          positionX: "center",
                          positionY: "center",
                          src: "https://framerusercontent.com/images/gxUJuIJwqIX497gqbnUCAFDws.svg",
                        },
                      },
                    },
                    y,
                    J,
                  ),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  Nn = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-JDYkb.framer-q1ezs9, .framer-JDYkb .framer-q1ezs9 { display: block; }",
    ".framer-JDYkb.framer-nw86uy { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 32px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 32px; }",
    ".framer-JDYkb .framer-13hlivi { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }",
    ".framer-JDYkb .framer-1fvg3yr { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }",
    ".framer-JDYkb .framer-1qg9eyq { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }",
    ".framer-JDYkb .framer-kxhkbf { -webkit-user-select: none; flex: none; height: 20px; overflow: hidden; position: relative; user-select: none; width: 20px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-JDYkb.framer-nw86uy { gap: 0px; } .framer-JDYkb.framer-nw86uy > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-JDYkb.framer-nw86uy > :first-child { margin-left: 0px; } .framer-JDYkb.framer-nw86uy > :last-child { margin-right: 0px; } }",
    ".framer-JDYkb.framer-v-i2ixxw.framer-nw86uy, .framer-JDYkb.framer-v-3omqwn.framer-nw86uy, .framer-JDYkb.framer-v-1rlocy2.framer-nw86uy, .framer-JDYkb.framer-v-dr73mg.framer-nw86uy, .framer-JDYkb.framer-v-uq7uj3.framer-nw86uy { cursor: unset; }",
    ".framer-JDYkb.framer-v-i2ixxw .framer-1fvg3yr { overflow: hidden; }",
    ".framer-JDYkb.framer-v-nw86uy.hover .framer-kxhkbf { height: 26px; width: 26px; }",
  ],
  Je = Z(An, Nn, "framer-JDYkb"),
  Vr = Je;
Je.displayName = "Pixel Arrow Btn";
Je.defaultProps = { height: 32, width: 32 };
q(Je, {
  variant: {
    options: [
      "BNYh9PHTd",
      "wlDnpaWyc",
      "UnRPoCcL9",
      "jQMUqQd6u",
      "NXLbtzZ0B",
      "ShuBEo09u",
    ],
    optionTitles: [
      "Default",
      "Loading",
      "Disabled",
      "Success",
      "Error",
      "Phone",
    ],
    title: "Variant",
    type: d.Enum,
  },
});
$(Je, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var zn = M(ke),
  Rn = M(re),
  Dn = M(Tr),
  En = M(Vr),
  Wn = M(Ae),
  Bn = M(wr),
  Pn = yt(
    er(wr, { nodeId: "IGuauVUOw", override: ta, scopeId: "EBKq9YYKf" }),
    _r,
  ),
  ia = Ze(ke),
  qn = ["UT5Cyg6OT", "fCrVgtmVJ", "uJz1Epa2A"],
  Mn = "framer-CxJnL",
  Yn = {
    fCrVgtmVJ: "framer-v-14a3not",
    uJz1Epa2A: "framer-v-1wu0xcg",
    UT5Cyg6OT: "framer-v-q9i40w",
  };
function b(r, ...o) {
  let i = {};
  return o?.forEach((n) => n && Object.assign(i, r[n])), i;
}
var Jn = { bounce: 0.2, delay: 0, duration: 0.6, type: "spring" },
  Ie = (r) =>
    typeof r == "object" && r !== null && typeof r.src == "string"
      ? r
      : typeof r == "string"
        ? { src: r }
        : void 0,
  Hn = (r) => (Array.isArray(r) ? r.length > 0 : r != null && r !== ""),
  zr = (r, o, i) => {
    switch (r.state) {
      case "success":
        return o.success ?? i;
      case "pending":
        return o.pending ?? i;
      case "error":
        return o.error ?? i;
      case "incomplete":
        return o.incomplete ?? i;
    }
  },
  jn = { bounce: 0.25, delay: 0, duration: 0.4, type: "spring" },
  Gn = {
    opacity: 0.7,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: jn,
    y: 2,
  },
  On = ({ value: r, children: o }) => {
    let i = ne(P),
      n = r ?? i.transition,
      s = oe(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: s, children: o });
  },
  Kn = t.create(m),
  Xn = {
    "Amsterdam (UTC+1)": "Amsterdam (UTC+1)",
    "Anchorage (UTC-9)": "Anchorage (UTC-9)",
    "Athens (UTC+2)": "Athens (UTC+2)",
    "Auckland (UTC+12)": "Auckland (UTC+12)",
    "Bangkok (UTC+7)": "Bangkok (UTC+7)",
    "Beijing (UTC+8)": "Beijing (UTC+8)",
    "Berlin (UTC+1)": "Berlin (UTC+1)",
    "Bogota (UTC-5)": "Bogota (UTC-5)",
    "Brisbane (UTC+10)": "Brisbane (UTC+10)",
    "Brussels (UTC+1)": "Brussels (UTC+1)",
    "Buenos Aires (UTC-3)": "Buenos Aires (UTC-3)",
    "Cairo (UTC+2)": "Cairo (UTC+2)",
    "Chicago (UTC-6)": "Chicago (UTC-6)",
    "Copenhagen (UTC+1)": "Copenhagen (UTC+1)",
    "Denver (UTC-7)": "Denver (UTC-7)",
    "Dhaka (UTC+6)": "Dhaka (UTC+6)",
    "Dubai (UTC+4)": "Dubai (UTC+4)",
    "Dublin (UTC+0)": "Dublin (UTC+0)",
    "Helsinki (UTC+2)": "Helsinki (UTC+2)",
    "Hong Kong (UTC+8)": "Hong Kong (UTC+8)",
    "Honolulu (UTC-10)": "Honolulu (UTC-10)",
    "Istanbul (UTC+3)": "Istanbul (UTC+3)",
    "Jakarta (UTC+7)": "Jakarta (UTC+7)",
    "Jerusalem (UTC+2)": "Jerusalem (UTC+2)",
    "Lima (UTC-5)": "Lima (UTC-5)",
    "Lisbon (UTC+0)": "Lisbon (UTC+0)",
    "London (UTC+0)": "London (UTC+0)",
    "Los Angeles (UTC-8)": "Los Angeles (UTC-8)",
    "Madrid (UTC+1)": "Madrid (UTC+1)",
    "Manila (UTC+8)": "Manila (UTC+8)",
    "Melbourne (UTC+10)": "Melbourne (UTC+10)",
    "Mexico City (UTC-6)": "Mexico City (UTC-6)",
    "Moscow (UTC+3)": "Moscow (UTC+3)",
    "Mumbai (UTC+5.5)": "Mumbai (UTC+5.5)",
    "New Delhi (UTC+5.5)": "New Delhi (UTC+5.5)",
    "New York (UTC-5)": "New York (UTC-5)",
    "Oslo (UTC+1)": "Oslo (UTC+1)",
    "Paris (UTC+1)": "Paris (UTC+1)",
    "Phoenix (UTC-7)": "Phoenix (UTC-7)",
    "Reykjavik (UTC+0)": "Reykjavik (UTC+0)",
    "Riyadh (UTC+3)": "Riyadh (UTC+3)",
    "Rome (UTC+1)": "Rome (UTC+1)",
    "Santiago (UTC-4)": "Santiago (UTC-4)",
    "S\xE3o Paulo (UTC-3)": "S\xE3o Paulo (UTC-3)",
    "Seoul (UTC+9)": "Seoul (UTC+9)",
    "Shanghai (UTC+8)": "Shanghai (UTC+8)",
    "Singapore (UTC+8)": "Singapore (UTC+8)",
    "Stockholm (UTC+1)": "Stockholm (UTC+1)",
    "Sydney (UTC+10)": "Sydney (UTC+10)",
    "Taipei (UTC+8)": "Taipei (UTC+8)",
    "Tokyo (UTC+9)": "Tokyo (UTC+9)",
    "Toronto (UTC-5)": "Toronto (UTC-5)",
    "Vancouver (UTC-8)": "Vancouver (UTC-8)",
    "Warsaw (UTC+1)": "Warsaw (UTC+1)",
    "Zurich (UTC+1)": "Zurich (UTC+1)",
  },
  Qn = { Desktop: "UT5Cyg6OT", Phone: "uJz1Epa2A", Tablet: "fCrVgtmVJ" },
  Zn = ({
    _1224HourFormat: r,
    brandingElement: o,
    copyright: i,
    footnote: n,
    height: s,
    icon: w,
    id: C,
    largeLogo: a,
    location: S,
    setTimezone: u,
    social1: V,
    social1Link: R,
    social2: F,
    social2Link: y,
    social3: h,
    social3Link: Y,
    social4: v,
    social4Link: J,
    social5: N,
    social5Link: G,
    socialCursor: me,
    timezoneLabel: L,
    width: B,
    ...l
  }) => ({
    ...l,
    D64SPbotv: h ?? l.D64SPbotv ?? "Social 3",
    fN6b7bFcm: o ?? l.fN6b7bFcm,
    folLeAazM: N ?? l.folLeAazM ?? "Social 5",
    iJ5nYtafd: a ?? l.iJ5nYtafd,
    kFX5XZyQu: r ?? l.kFX5XZyQu ?? !0,
    KVc8qDEeC: V ?? l.KVc8qDEeC ?? "Social 1",
    L47lzEq4Y: w ??
      l.L47lzEq4Y ?? {
        alt: "",
        pixelHeight: 40,
        pixelWidth: 40,
        src: "https://framerusercontent.com/images/kFaemw9EZxCk6m3YKTlCmCwJUr4.svg",
      },
    LQiTKib_F: J ?? l.LQiTKib_F,
    mTSuDP4zA: Xn[u] ?? u ?? l.mTSuDP4zA ?? "Stockholm (CET)",
    PE62tz5iG: v ?? l.PE62tz5iG ?? "Social 4",
    PRbvkP1xz:
      S ?? l.PRbvkP1xz ?? "We are currently based in Milano and work remotely.",
    S3E6XdbxJ: G ?? l.S3E6XdbxJ,
    Sctn3rhj8: n ?? l.Sctn3rhj8 ?? "Footnote",
    SK4edYrAh: i ?? l.SK4edYrAh ?? "Copyright text",
    tFYL24qDR: F ?? l.tFYL24qDR ?? "Social 2",
    U2mJfzOnt: L ?? l.U2mJfzOnt ?? "Timezone (GMT+1)",
    variant: Qn[l.variant] ?? l.variant ?? "UT5Cyg6OT",
    VEdDGGzMQ: R ?? l.VEdDGGzMQ,
    X8CKPtX72: y ?? l.X8CKPtX72,
    yCXdF9DvN: Y ?? l.yCXdF9DvN,
    zeKK6yONy: me ?? l.zeKK6yONy,
  }),
  $n = (r, o) =>
    r.layoutDependency ? o.join("-") + r.layoutDependency : o.join("-"),
  eo = O(function (r, o) {
    let i = j(null),
      n = o ?? i,
      s = K(),
      { activeLocale: w, setLocale: C } = Q(),
      a = se(),
      {
        style: S,
        className: u,
        layoutId: V,
        variant: R,
        iJ5nYtafd: F,
        fN6b7bFcm: y,
        L47lzEq4Y: h,
        U2mJfzOnt: Y,
        kFX5XZyQu: v,
        mTSuDP4zA: J,
        PRbvkP1xz: N,
        KVc8qDEeC: G,
        VEdDGGzMQ: me,
        tFYL24qDR: L,
        X8CKPtX72: B,
        D64SPbotv: l,
        yCXdF9DvN: k,
        PE62tz5iG: te,
        LQiTKib_F: ae,
        folLeAazM: ye,
        S3E6XdbxJ: xe,
        SK4edYrAh: Ne,
        Sctn3rhj8: Le,
        zeKK6yONy: pe,
        ...H
      } = Zn(r),
      {
        baseVariant: f,
        classNames: he,
        clearLoadingGesture: We,
        gestureHandlers: jr,
        gestureVariant: g,
        isLoading: kr,
        setGestureState: ve,
        setVariant: ua,
        variants: Gr,
      } = le({
        cycleOrder: qn,
        defaultVariant: "UT5Cyg6OT",
        ref: n,
        variant: R,
        variantClassNames: Yn,
      }),
      c = $n(r, Gr),
      { activeVariantCallback: ga, delay: ki } = Se(f),
      ya = ga(async (...x) => {
        ua("UT5Cyg6OT");
      }),
      xa = D(Mn, ...[Ft, dr, Ct, ur, Et, zt, Ut, Lt, fr]),
      va = Hn(h),
      Ui = Qe();
    return e(X, {
      id: V ?? s,
      children: e(Kn, {
        animate: Gr,
        initial: !1,
        children: e(On, {
          value: Jn,
          children: e(t.footer, {
            ...H,
            ...jr,
            className: D(xa, "framer-q9i40w", u, he),
            "data-framer-name": "Desktop",
            layoutDependency: c,
            layoutId: "UT5Cyg6OT",
            ref: n,
            style: {
              backgroundColor:
                "var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255))",
              ...S,
            },
            ...b(
              {
                fCrVgtmVJ: { "data-framer-name": "Tablet" },
                uJz1Epa2A: { "data-framer-name": "Phone" },
              },
              f,
              g,
            ),
            children: p(t.div, {
              className: "framer-rpmlkb",
              "data-framer-name": "Content",
              layoutDependency: c,
              layoutId: "Y2XQW5_RH",
              children: [
                p(t.div, {
                  className: "framer-jzrv0w",
                  "data-border": !0,
                  "data-framer-name": "Top",
                  layoutDependency: c,
                  layoutId: "Tgg8EfePo",
                  style: {
                    "--border-bottom-width": "0px",
                    "--border-color": "rgb(230, 230, 230)",
                    "--border-left-width": "0px",
                    "--border-right-width": "0px",
                    "--border-style": "solid",
                    "--border-top-width": "0px",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  },
                  children: [
                    p(t.div, {
                      className: "framer-7xjsec",
                      "data-framer-name": "Logo",
                      layoutDependency: c,
                      layoutId: "FTVwKjxqV",
                      children: [
                        e(E, {
                          background: {
                            alt: "",
                            fit: "fit",
                            loading: W(
                              (a?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 40 + 0,
                            ),
                            pixelHeight: 282,
                            pixelWidth: 1197,
                            sizes: `calc(max(${a?.width || "100vw"} / 6, 50px) * 4 - 80px)`,
                            ...Ie(F),
                            positionX: "center",
                            positionY: "center",
                          },
                          className: "framer-wgdccw",
                          "data-framer-name": "Logo",
                          layoutDependency: c,
                          layoutId: "iFlwOHX2N",
                          ...b(
                            {
                              fCrVgtmVJ: {
                                background: {
                                  alt: "",
                                  fit: "fit",
                                  loading: W(
                                    (a?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      40 +
                                      0,
                                  ),
                                  pixelHeight: 282,
                                  pixelWidth: 1197,
                                  sizes: `calc(max(${a?.width || "100vw"} / 6, 50px) * 3 - 80px)`,
                                  ...Ie(F),
                                  positionX: "center",
                                  positionY: "center",
                                },
                              },
                              uJz1Epa2A: {
                                background: {
                                  alt: "",
                                  fit: "fit",
                                  loading: W(
                                    (a?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      40 +
                                      0 +
                                      24 +
                                      0,
                                  ),
                                  pixelHeight: 282,
                                  pixelWidth: 1197,
                                  sizes: `calc(max(${a?.width || "100vw"}, 50px) - 48px)`,
                                  ...Ie(F),
                                  positionX: "center",
                                  positionY: "center",
                                },
                              },
                            },
                            f,
                            g,
                          ),
                        }),
                        p(t.div, {
                          className: "framer-ejjs7h",
                          "data-framer-name": "Label",
                          layoutDependency: c,
                          layoutId: "kiB5jRicQ",
                          children: [
                            e(t.div, {
                              className: "framer-1sos3gs",
                              "data-framer-name": "spacer",
                              layoutDependency: c,
                              layoutId: "yds1bo1sP",
                            }),
                            e(E, {
                              background: {
                                alt: "",
                                fit: "fit",
                                loading: W(
                                  (a?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    40 +
                                    359.5 +
                                    0,
                                ),
                                pixelHeight: 106,
                                pixelWidth: 320,
                                sizes: `max((max(${a?.width || "100vw"} / 6, 50px) * 4 - 80px) * 0.3, 1px)`,
                                ...Ie(y),
                                positionX: "center",
                                positionY: "center",
                              },
                              className: "framer-1s321yu",
                              "data-framer-name": "Title",
                              layoutDependency: c,
                              layoutId: "uN3WWqNdE",
                              style: {
                                filter: "invert(0.65)",
                                WebkitFilter: "invert(0.65)",
                              },
                              ...b(
                                {
                                  fCrVgtmVJ: {
                                    background: {
                                      alt: "",
                                      fit: "fit",
                                      loading: W(
                                        (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          40 +
                                          359.5 +
                                          0,
                                      ),
                                      pixelHeight: 106,
                                      pixelWidth: 320,
                                      sizes: `max((max(${a?.width || "100vw"} / 6, 50px) * 3 - 80px) / 2, 1px)`,
                                      ...Ie(y),
                                      positionX: "center",
                                      positionY: "center",
                                    },
                                  },
                                  uJz1Epa2A: {
                                    background: {
                                      alt: "",
                                      fit: "fit",
                                      loading: W(
                                        (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          40 +
                                          0 +
                                          24 +
                                          359.5 +
                                          0,
                                      ),
                                      pixelHeight: 106,
                                      pixelWidth: 320,
                                      sizes: `max((max(${a?.width || "100vw"}, 50px) - 48px) / 2, 1px)`,
                                      ...Ie(y),
                                      positionX: "center",
                                      positionY: "center",
                                    },
                                  },
                                },
                                f,
                                g,
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    p(t.div, {
                      className: "framer-15e1w4w",
                      "data-border": !0,
                      "data-framer-name": "Time",
                      layoutDependency: c,
                      layoutId: "ot66fxGxf",
                      style: {
                        "--border-bottom-width": "0px",
                        "--border-color": "rgb(230, 230, 230)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                      },
                      children: [
                        p(t.div, {
                          className: "framer-3zckg2",
                          "data-framer-name": "Location",
                          layoutDependency: c,
                          layoutId: "tTDwF89Wo",
                          children: [
                            va &&
                              e(t.div, {
                                className: "framer-h9m1tg",
                                "data-framer-name": "Icon",
                                layoutDependency: c,
                                layoutId: "RK21cYmJt",
                                children: e(E, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: W(
                                      (a?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        -22.7 +
                                        0 +
                                        0,
                                    ),
                                    pixelHeight: 40,
                                    pixelWidth: 40,
                                    sizes: "16px",
                                    ...Ie(h),
                                  },
                                  className: "framer-1olt4ux",
                                  "data-framer-name": "Icon",
                                  layoutDependency: c,
                                  layoutId: "DaHA1UEVk",
                                  ...b(
                                    {
                                      fCrVgtmVJ: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          loading: W(
                                            (a?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              40 +
                                              0 +
                                              0 +
                                              0,
                                          ),
                                          pixelHeight: 40,
                                          pixelWidth: 40,
                                          sizes: "16px",
                                          ...Ie(h),
                                        },
                                      },
                                      uJz1Epa2A: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          loading: W(
                                            (a?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              40 +
                                              487.5 +
                                              24 +
                                              0 +
                                              0 +
                                              0,
                                          ),
                                          pixelHeight: 40,
                                          pixelWidth: 40,
                                          sizes: "16px",
                                          ...Ie(h),
                                        },
                                      },
                                    },
                                    f,
                                    g,
                                  ),
                                }),
                              }),
                            e(U, {
                              __fromCanvasComponent: !0,
                              children: e(m, {
                                children: e(t.h5, {
                                  className: "framer-styles-preset-17h9v8l",
                                  "data-styles-preset": "gFafTsDWV",
                                  style: {
                                    "--framer-text-color":
                                      "var(--extracted-1lwpl3i, var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54)))",
                                  },
                                  children:
                                    "We are currently based in Milano and work remotely.",
                                }),
                              }),
                              className: "framer-13idzxa",
                              "data-framer-name":
                                "We are based in Budapest and work remotely.",
                              fonts: ["Inter"],
                              layoutDependency: c,
                              layoutId: "qM0r5ducC",
                              style: {
                                "--extracted-1lwpl3i":
                                  "var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54))",
                                "--framer-paragraph-spacing": "0px",
                              },
                              text: N,
                              verticalAlignment: "center",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        p(t.div, {
                          className: "framer-13s3wqv",
                          "data-framer-name": "Current Time",
                          layoutDependency: c,
                          layoutId: "QFvnw4YaS",
                          children: [
                            p(t.div, {
                              className: "framer-1scum8a",
                              "data-framer-name": "Timezone Wrapper",
                              layoutDependency: c,
                              layoutId: "mAz6Lrzz_",
                              children: [
                                e(E, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: W(
                                      (a?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        35.3 +
                                        0 +
                                        0 +
                                        6.7,
                                    ),
                                    pixelHeight: 17,
                                    pixelWidth: 16,
                                    src: "https://framerusercontent.com/images/tqgXM197t5ZDFG1DAlzGCUj7Qzk.svg",
                                  },
                                  className: "framer-1nlmb0q",
                                  "data-framer-name": "Globe Icon",
                                  layoutDependency: c,
                                  layoutId: "ndTH5sLwr",
                                  ...b(
                                    {
                                      fCrVgtmVJ: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          loading: W(
                                            (a?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              40 +
                                              58 +
                                              0 +
                                              0 +
                                              6.7,
                                          ),
                                          pixelHeight: 17,
                                          pixelWidth: 16,
                                          src: "https://framerusercontent.com/images/tqgXM197t5ZDFG1DAlzGCUj7Qzk.svg",
                                        },
                                      },
                                      uJz1Epa2A: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          loading: W(
                                            (a?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              40 +
                                              487.5 +
                                              24 +
                                              58 +
                                              0 +
                                              0 +
                                              6.7,
                                          ),
                                          pixelHeight: 17,
                                          pixelWidth: 16,
                                          src: "https://framerusercontent.com/images/tqgXM197t5ZDFG1DAlzGCUj7Qzk.svg",
                                        },
                                      },
                                    },
                                    f,
                                    g,
                                  ),
                                }),
                                e(U, {
                                  __fromCanvasComponent: !0,
                                  children: e(m, {
                                    children: e(t.p, {
                                      className: "framer-styles-preset-m0fk0x",
                                      "data-styles-preset": "N8U_mBXjk",
                                      style: {
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54)))",
                                      },
                                      children: "Timezone (GMT+1)",
                                    }),
                                  }),
                                  className: "framer-il6w74",
                                  "data-framer-name": "Timezone",
                                  fonts: ["Inter"],
                                  layoutDependency: c,
                                  layoutId: "sRLUjLuIS",
                                  style: {
                                    "--extracted-r6o4lv":
                                      "var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54))",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  text: Y,
                                  verticalAlignment: "center",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            e(t.div, {
                              className: "framer-dckw6a",
                              "data-framer-name": "Real Time",
                              layoutDependency: c,
                              layoutId: "fjugxb6tf",
                              children: e(I, {
                                children: e(_, {
                                  className: "framer-pnc7sk-container",
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  layoutDependency: c,
                                  layoutId: "Yj_54kWIN-container",
                                  nodeId: "Yj_54kWIN",
                                  rendersWithMotion: !0,
                                  scopeId: "EBKq9YYKf",
                                  children: e(ke, {
                                    font: {
                                      fontFamily:
                                        '".SFNSDisplay-Semibold", "SFProDisplay-Semibold", "SFUIDisplay-Semibold", ".SFUIDisplay-Semibold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                      fontSize: "64px",
                                      fontWeight: 599,
                                      letterSpacing: "-0.03em",
                                      lineHeight: "1.1em",
                                    },
                                    height: "100%",
                                    hideSeconds: !1,
                                    id: "Yj_54kWIN",
                                    layoutId: "Yj_54kWIN",
                                    selectedTimezone: J,
                                    style: { width: "100%" },
                                    textAlign: "left",
                                    textColor:
                                      "var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54))",
                                    use24HourFormat: v,
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                p(t.div, {
                  className: "framer-vi30a2",
                  "data-border": !0,
                  "data-framer-name": "Middle",
                  layoutDependency: c,
                  layoutId: "YrSNXfNK2",
                  style: {
                    "--border-bottom-width": "0px",
                    "--border-color": "rgb(230, 230, 230)",
                    "--border-left-width": "0px",
                    "--border-right-width": "0px",
                    "--border-style": "solid",
                    "--border-top-width": "1px",
                  },
                  children: [
                    p(t.div, {
                      className: "framer-1aspwze",
                      "data-framer-name": "Left",
                      layoutDependency: c,
                      layoutId: "Q0zQrdOSF",
                      children: [
                        p(t.div, {
                          className: "framer-9lm73m",
                          "data-framer-name": "Menu Bar 1",
                          layoutDependency: c,
                          layoutId: "tcPbgvW87",
                          children: [
                            e(ue, {
                              links: [
                                {
                                  href: {
                                    hash: ":Yp1au__gv",
                                    webPageId: "augiA20Il",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: ":Yp1au__gv",
                                    webPageId: "augiA20Il",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: ":Yp1au__gv",
                                    webPageId: "augiA20Il",
                                  },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (x) =>
                                e(I, {
                                  height: 35,
                                  y:
                                    (a?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    519.5 +
                                    0 +
                                    60 +
                                    0 +
                                    0,
                                  ...b(
                                    {
                                      fCrVgtmVJ: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          519.5 +
                                          0 +
                                          0 +
                                          32 +
                                          0 +
                                          0,
                                      },
                                      uJz1Epa2A: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          870.9 +
                                          0 +
                                          0 +
                                          24 +
                                          0 +
                                          0,
                                      },
                                    },
                                    f,
                                    g,
                                  ),
                                  children: e(_, {
                                    className: "framer-orngxh-container",
                                    "data-framer-cursor": pe,
                                    layoutDependency: c,
                                    layoutId: "BcD4MtA0r-container",
                                    nodeId: "BcD4MtA0r",
                                    rendersWithMotion: !0,
                                    scopeId: "EBKq9YYKf",
                                    children: e(re, {
                                      height: "100%",
                                      id: "BcD4MtA0r",
                                      layoutId: "BcD4MtA0r",
                                      LOae8Hh1Z: x[0],
                                      r_tkFUAEM: "Home",
                                      SlQMX6GRW:
                                        "var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54))",
                                      TLnZj9Gjf: !0,
                                      variant: "ITnNQEBIM",
                                      width: "100%",
                                      wn9baD7vq: !1,
                                      ...b(
                                        {
                                          fCrVgtmVJ: {
                                            LOae8Hh1Z: x[1],
                                            variant: "Ehsr2h1Lo",
                                          },
                                          uJz1Epa2A: {
                                            LOae8Hh1Z: x[2],
                                            variant: "Ehsr2h1Lo",
                                          },
                                        },
                                        f,
                                        g,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            e(ue, {
                              links: [
                                {
                                  href: { webPageId: "j2fBQXPoP" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "j2fBQXPoP" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "j2fBQXPoP" },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (x) =>
                                e(I, {
                                  height: 35,
                                  y:
                                    (a?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    519.5 +
                                    0 +
                                    60 +
                                    0 +
                                    51,
                                  ...b(
                                    {
                                      fCrVgtmVJ: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          519.5 +
                                          0 +
                                          0 +
                                          32 +
                                          0 +
                                          51,
                                      },
                                      uJz1Epa2A: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          870.9 +
                                          0 +
                                          0 +
                                          24 +
                                          0 +
                                          51,
                                      },
                                    },
                                    f,
                                    g,
                                  ),
                                  children: e(_, {
                                    className: "framer-8e10st-container",
                                    layoutDependency: c,
                                    layoutId: "rxItGs43I-container",
                                    nodeId: "rxItGs43I",
                                    rendersWithMotion: !0,
                                    scopeId: "EBKq9YYKf",
                                    children: e(re, {
                                      height: "100%",
                                      id: "rxItGs43I",
                                      layoutId: "rxItGs43I",
                                      LOae8Hh1Z: x[0],
                                      r_tkFUAEM: "Work",
                                      SlQMX6GRW:
                                        "var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54))",
                                      TLnZj9Gjf: !0,
                                      variant: "ITnNQEBIM",
                                      width: "100%",
                                      wn9baD7vq: !1,
                                      ...b(
                                        {
                                          fCrVgtmVJ: {
                                            LOae8Hh1Z: x[1],
                                            variant: "Ehsr2h1Lo",
                                          },
                                          uJz1Epa2A: {
                                            LOae8Hh1Z: x[2],
                                            variant: "Ehsr2h1Lo",
                                          },
                                        },
                                        f,
                                        g,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            e(ue, {
                              links: [
                                {
                                  href: { webPageId: "rYcPcLFex" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "rYcPcLFex" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "rYcPcLFex" },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (x) =>
                                e(I, {
                                  height: 35,
                                  y:
                                    (a?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    519.5 +
                                    0 +
                                    60 +
                                    0 +
                                    102,
                                  ...b(
                                    {
                                      fCrVgtmVJ: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          519.5 +
                                          0 +
                                          0 +
                                          32 +
                                          0 +
                                          102,
                                      },
                                      uJz1Epa2A: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          870.9 +
                                          0 +
                                          0 +
                                          24 +
                                          0 +
                                          102,
                                      },
                                    },
                                    f,
                                    g,
                                  ),
                                  children: e(_, {
                                    className: "framer-12glb7w-container",
                                    layoutDependency: c,
                                    layoutId: "KtL4bbuZh-container",
                                    nodeId: "KtL4bbuZh",
                                    rendersWithMotion: !0,
                                    scopeId: "EBKq9YYKf",
                                    children: e(re, {
                                      height: "100%",
                                      id: "KtL4bbuZh",
                                      layoutId: "KtL4bbuZh",
                                      LOae8Hh1Z: x[0],
                                      r_tkFUAEM: "About",
                                      SlQMX6GRW:
                                        "var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54))",
                                      TLnZj9Gjf: !0,
                                      variant: "ITnNQEBIM",
                                      width: "100%",
                                      wn9baD7vq: !1,
                                      ...b(
                                        {
                                          fCrVgtmVJ: {
                                            LOae8Hh1Z: x[1],
                                            variant: "Ehsr2h1Lo",
                                          },
                                          uJz1Epa2A: {
                                            LOae8Hh1Z: x[2],
                                            variant: "Ehsr2h1Lo",
                                          },
                                        },
                                        f,
                                        g,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            e(ue, {
                              links: [
                                {
                                  href: {
                                    hash: ":wD8d_0wTl",
                                    webPageId: "augiA20Il",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: ":wD8d_0wTl",
                                    webPageId: "augiA20Il",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: ":wD8d_0wTl",
                                    webPageId: "augiA20Il",
                                  },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (x) =>
                                e(I, {
                                  height: 35,
                                  y:
                                    (a?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    519.5 +
                                    0 +
                                    60 +
                                    0 +
                                    153,
                                  ...b(
                                    {
                                      fCrVgtmVJ: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          519.5 +
                                          0 +
                                          0 +
                                          32 +
                                          0 +
                                          153,
                                      },
                                      uJz1Epa2A: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          870.9 +
                                          0 +
                                          0 +
                                          24 +
                                          0 +
                                          153,
                                      },
                                    },
                                    f,
                                    g,
                                  ),
                                  children: e(_, {
                                    className: "framer-1n07y5p-container",
                                    layoutDependency: c,
                                    layoutId: "Bvi5Tn3Vx-container",
                                    nodeId: "Bvi5Tn3Vx",
                                    rendersWithMotion: !0,
                                    scopeId: "EBKq9YYKf",
                                    children: e(re, {
                                      height: "100%",
                                      id: "Bvi5Tn3Vx",
                                      layoutId: "Bvi5Tn3Vx",
                                      LOae8Hh1Z: x[0],
                                      r_tkFUAEM: "Membership",
                                      SlQMX6GRW:
                                        "var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54))",
                                      TLnZj9Gjf: !0,
                                      variant: "ITnNQEBIM",
                                      width: "100%",
                                      wn9baD7vq: !1,
                                      ...b(
                                        {
                                          fCrVgtmVJ: {
                                            LOae8Hh1Z: x[1],
                                            variant: "Ehsr2h1Lo",
                                          },
                                          uJz1Epa2A: {
                                            LOae8Hh1Z: x[2],
                                            variant: "Ehsr2h1Lo",
                                          },
                                        },
                                        f,
                                        g,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            e(ue, {
                              links: [
                                {
                                  href: { webPageId: "CPRcJt5dV" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "CPRcJt5dV" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "CPRcJt5dV" },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (x) =>
                                e(I, {
                                  height: 35,
                                  y:
                                    (a?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    519.5 +
                                    0 +
                                    60 +
                                    0 +
                                    204,
                                  ...b(
                                    {
                                      fCrVgtmVJ: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          519.5 +
                                          0 +
                                          0 +
                                          32 +
                                          0 +
                                          204,
                                      },
                                      uJz1Epa2A: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          870.9 +
                                          0 +
                                          0 +
                                          24 +
                                          0 +
                                          204,
                                      },
                                    },
                                    f,
                                    g,
                                  ),
                                  children: e(_, {
                                    className: "framer-z1ywgw-container",
                                    layoutDependency: c,
                                    layoutId: "ai3Ze4ScW-container",
                                    nodeId: "ai3Ze4ScW",
                                    rendersWithMotion: !0,
                                    scopeId: "EBKq9YYKf",
                                    children: e(re, {
                                      height: "100%",
                                      id: "ai3Ze4ScW",
                                      layoutId: "ai3Ze4ScW",
                                      LOae8Hh1Z: x[0],
                                      r_tkFUAEM: "Journal",
                                      SlQMX6GRW:
                                        "var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54))",
                                      TLnZj9Gjf: !0,
                                      variant: "ITnNQEBIM",
                                      width: "100%",
                                      wn9baD7vq: !1,
                                      ...b(
                                        {
                                          fCrVgtmVJ: {
                                            LOae8Hh1Z: x[1],
                                            variant: "Ehsr2h1Lo",
                                          },
                                          uJz1Epa2A: {
                                            LOae8Hh1Z: x[2],
                                            variant: "Ehsr2h1Lo",
                                          },
                                        },
                                        f,
                                        g,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            e(ue, {
                              links: [
                                {
                                  href: { webPageId: "LP__oFZZq" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "LP__oFZZq" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "LP__oFZZq" },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (x) =>
                                e(I, {
                                  height: 35,
                                  y:
                                    (a?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    519.5 +
                                    0 +
                                    60 +
                                    0 +
                                    255,
                                  ...b(
                                    {
                                      fCrVgtmVJ: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          519.5 +
                                          0 +
                                          0 +
                                          32 +
                                          0 +
                                          255,
                                      },
                                      uJz1Epa2A: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          870.9 +
                                          0 +
                                          0 +
                                          24 +
                                          0 +
                                          255,
                                      },
                                    },
                                    f,
                                    g,
                                  ),
                                  children: e(_, {
                                    className: "framer-14j9whx-container",
                                    layoutDependency: c,
                                    layoutId: "U0OuL3uqy-container",
                                    nodeId: "U0OuL3uqy",
                                    rendersWithMotion: !0,
                                    scopeId: "EBKq9YYKf",
                                    children: e(re, {
                                      height: "100%",
                                      id: "U0OuL3uqy",
                                      layoutId: "U0OuL3uqy",
                                      LOae8Hh1Z: x[0],
                                      r_tkFUAEM: "Contact",
                                      SlQMX6GRW:
                                        "var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54))",
                                      TLnZj9Gjf: !0,
                                      variant: "ITnNQEBIM",
                                      width: "100%",
                                      wn9baD7vq: !1,
                                      ...b(
                                        {
                                          fCrVgtmVJ: {
                                            LOae8Hh1Z: x[1],
                                            variant: "Ehsr2h1Lo",
                                          },
                                          uJz1Epa2A: {
                                            LOae8Hh1Z: x[2],
                                            variant: "Ehsr2h1Lo",
                                          },
                                        },
                                        f,
                                        g,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                        p(t.div, {
                          className: "framer-rkdlkz",
                          "data-framer-name": "Menu Bar 2",
                          layoutDependency: c,
                          layoutId: "cd7FnTE7a",
                          children: [
                            e(ue, {
                              links: [
                                {
                                  href: {
                                    pathVariables: {
                                      N6VBnBY6z: "privacy-policy",
                                    },
                                    unresolvedPathSlugs: {
                                      N6VBnBY6z: {
                                        collectionId: "wlyQIkA8F",
                                        collectionItemId: "Y5JGFTGTo",
                                      },
                                    },
                                    webPageId: "uW6MG5h4q",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    pathVariables: {
                                      N6VBnBY6z: "privacy-policy",
                                    },
                                    unresolvedPathSlugs: {
                                      N6VBnBY6z: {
                                        collectionId: "wlyQIkA8F",
                                        collectionItemId: "Y5JGFTGTo",
                                      },
                                    },
                                    webPageId: "uW6MG5h4q",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    pathVariables: {
                                      N6VBnBY6z: "privacy-policy",
                                    },
                                    unresolvedPathSlugs: {
                                      N6VBnBY6z: {
                                        collectionId: "wlyQIkA8F",
                                        collectionItemId: "Y5JGFTGTo",
                                      },
                                    },
                                    webPageId: "uW6MG5h4q",
                                  },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (x) =>
                                e(I, {
                                  height: 35,
                                  y:
                                    (a?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    519.5 +
                                    0 +
                                    60 +
                                    0 +
                                    0,
                                  ...b(
                                    {
                                      fCrVgtmVJ: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          519.5 +
                                          0 +
                                          0 +
                                          32 +
                                          0 +
                                          0,
                                      },
                                      uJz1Epa2A: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          870.9 +
                                          0 +
                                          0 +
                                          24 +
                                          0 +
                                          0,
                                      },
                                    },
                                    f,
                                    g,
                                  ),
                                  children: e(_, {
                                    className: "framer-122a8t1-container",
                                    layoutDependency: c,
                                    layoutId: "NHAUIhwys-container",
                                    nodeId: "NHAUIhwys",
                                    rendersWithMotion: !0,
                                    scopeId: "EBKq9YYKf",
                                    children: e(re, {
                                      height: "100%",
                                      id: "NHAUIhwys",
                                      layoutId: "NHAUIhwys",
                                      LOae8Hh1Z: x[0],
                                      r_tkFUAEM: "Privacy Policy",
                                      SlQMX6GRW:
                                        "var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54))",
                                      TLnZj9Gjf: !0,
                                      variant: "ITnNQEBIM",
                                      width: "100%",
                                      wn9baD7vq: !1,
                                      ...b(
                                        {
                                          fCrVgtmVJ: {
                                            LOae8Hh1Z: x[1],
                                            variant: "Ehsr2h1Lo",
                                          },
                                          uJz1Epa2A: {
                                            LOae8Hh1Z: x[2],
                                            variant: "Ehsr2h1Lo",
                                          },
                                        },
                                        f,
                                        g,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            e(ue, {
                              links: [
                                {
                                  href: {
                                    pathVariables: {
                                      N6VBnBY6z: "terms-of-service",
                                    },
                                    unresolvedPathSlugs: {
                                      N6VBnBY6z: {
                                        collectionId: "wlyQIkA8F",
                                        collectionItemId: "LOp6WH64j",
                                      },
                                    },
                                    webPageId: "uW6MG5h4q",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    pathVariables: {
                                      N6VBnBY6z: "terms-of-service",
                                    },
                                    unresolvedPathSlugs: {
                                      N6VBnBY6z: {
                                        collectionId: "wlyQIkA8F",
                                        collectionItemId: "LOp6WH64j",
                                      },
                                    },
                                    webPageId: "uW6MG5h4q",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    pathVariables: {
                                      N6VBnBY6z: "terms-of-service",
                                    },
                                    unresolvedPathSlugs: {
                                      N6VBnBY6z: {
                                        collectionId: "wlyQIkA8F",
                                        collectionItemId: "LOp6WH64j",
                                      },
                                    },
                                    webPageId: "uW6MG5h4q",
                                  },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (x) =>
                                e(I, {
                                  height: 35,
                                  y:
                                    (a?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    519.5 +
                                    0 +
                                    60 +
                                    0 +
                                    51,
                                  ...b(
                                    {
                                      fCrVgtmVJ: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          519.5 +
                                          0 +
                                          0 +
                                          32 +
                                          0 +
                                          51,
                                      },
                                      uJz1Epa2A: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          870.9 +
                                          0 +
                                          0 +
                                          24 +
                                          0 +
                                          51,
                                      },
                                    },
                                    f,
                                    g,
                                  ),
                                  children: e(_, {
                                    className: "framer-8n5fdx-container",
                                    layoutDependency: c,
                                    layoutId: "cShwTJQQa-container",
                                    nodeId: "cShwTJQQa",
                                    rendersWithMotion: !0,
                                    scopeId: "EBKq9YYKf",
                                    children: e(re, {
                                      height: "100%",
                                      id: "cShwTJQQa",
                                      layoutId: "cShwTJQQa",
                                      LOae8Hh1Z: x[0],
                                      r_tkFUAEM: "Terms of Service",
                                      SlQMX6GRW:
                                        "var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54))",
                                      TLnZj9Gjf: !0,
                                      variant: "ITnNQEBIM",
                                      width: "100%",
                                      wn9baD7vq: !1,
                                      ...b(
                                        {
                                          fCrVgtmVJ: {
                                            LOae8Hh1Z: x[1],
                                            variant: "Ehsr2h1Lo",
                                          },
                                          uJz1Epa2A: {
                                            LOae8Hh1Z: x[2],
                                            variant: "Ehsr2h1Lo",
                                          },
                                        },
                                        f,
                                        g,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            e(ue, {
                              links: [
                                {
                                  href: {
                                    pathVariables: { N6VBnBY6z: "disclaimer" },
                                    unresolvedPathSlugs: {
                                      N6VBnBY6z: {
                                        collectionId: "wlyQIkA8F",
                                        collectionItemId: "jvmWkz8vV",
                                      },
                                    },
                                    webPageId: "uW6MG5h4q",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    pathVariables: { N6VBnBY6z: "disclaimer" },
                                    unresolvedPathSlugs: {
                                      N6VBnBY6z: {
                                        collectionId: "wlyQIkA8F",
                                        collectionItemId: "jvmWkz8vV",
                                      },
                                    },
                                    webPageId: "uW6MG5h4q",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    pathVariables: { N6VBnBY6z: "disclaimer" },
                                    unresolvedPathSlugs: {
                                      N6VBnBY6z: {
                                        collectionId: "wlyQIkA8F",
                                        collectionItemId: "jvmWkz8vV",
                                      },
                                    },
                                    webPageId: "uW6MG5h4q",
                                  },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (x) =>
                                e(I, {
                                  height: 35,
                                  y:
                                    (a?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    519.5 +
                                    0 +
                                    60 +
                                    0 +
                                    102,
                                  ...b(
                                    {
                                      fCrVgtmVJ: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          519.5 +
                                          0 +
                                          0 +
                                          32 +
                                          0 +
                                          102,
                                      },
                                      uJz1Epa2A: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          870.9 +
                                          0 +
                                          0 +
                                          24 +
                                          0 +
                                          102,
                                      },
                                    },
                                    f,
                                    g,
                                  ),
                                  children: e(_, {
                                    className: "framer-115g435-container",
                                    layoutDependency: c,
                                    layoutId: "Iq7dHWRPl-container",
                                    nodeId: "Iq7dHWRPl",
                                    rendersWithMotion: !0,
                                    scopeId: "EBKq9YYKf",
                                    children: e(re, {
                                      height: "100%",
                                      id: "Iq7dHWRPl",
                                      layoutId: "Iq7dHWRPl",
                                      LOae8Hh1Z: x[0],
                                      r_tkFUAEM: "Disclaimer",
                                      SlQMX6GRW:
                                        "var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54))",
                                      TLnZj9Gjf: !0,
                                      variant: "ITnNQEBIM",
                                      width: "100%",
                                      wn9baD7vq: !1,
                                      ...b(
                                        {
                                          fCrVgtmVJ: {
                                            LOae8Hh1Z: x[1],
                                            variant: "Ehsr2h1Lo",
                                          },
                                          uJz1Epa2A: {
                                            LOae8Hh1Z: x[2],
                                            variant: "Ehsr2h1Lo",
                                          },
                                        },
                                        f,
                                        g,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            e(ue, {
                              links: [
                                {
                                  href: { webPageId: "Vr48t_zkp" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "Vr48t_zkp" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "Vr48t_zkp" },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (x) =>
                                e(I, {
                                  height: 35,
                                  y:
                                    (a?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    519.5 +
                                    0 +
                                    60 +
                                    0 +
                                    153,
                                  ...b(
                                    {
                                      fCrVgtmVJ: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          519.5 +
                                          0 +
                                          0 +
                                          32 +
                                          0 +
                                          153,
                                      },
                                      uJz1Epa2A: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          870.9 +
                                          0 +
                                          0 +
                                          24 +
                                          0 +
                                          153,
                                      },
                                    },
                                    f,
                                    g,
                                  ),
                                  children: e(_, {
                                    className: "framer-jw38j8-container",
                                    layoutDependency: c,
                                    layoutId: "SWX4XlgC6-container",
                                    nodeId: "SWX4XlgC6",
                                    rendersWithMotion: !0,
                                    scopeId: "EBKq9YYKf",
                                    children: e(re, {
                                      height: "100%",
                                      id: "SWX4XlgC6",
                                      layoutId: "SWX4XlgC6",
                                      LOae8Hh1Z: x[0],
                                      r_tkFUAEM: "404",
                                      SlQMX6GRW:
                                        "var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54))",
                                      TLnZj9Gjf: !0,
                                      variant: "ITnNQEBIM",
                                      width: "100%",
                                      wn9baD7vq: !1,
                                      ...b(
                                        {
                                          fCrVgtmVJ: {
                                            LOae8Hh1Z: x[1],
                                            variant: "Ehsr2h1Lo",
                                          },
                                          uJz1Epa2A: {
                                            LOae8Hh1Z: x[2],
                                            variant: "Ehsr2h1Lo",
                                          },
                                        },
                                        f,
                                        g,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            e(I, {
                              height: 35,
                              y:
                                (a?.y || 0) +
                                0 +
                                0 +
                                0 +
                                519.5 +
                                0 +
                                60 +
                                0 +
                                204,
                              ...b(
                                {
                                  fCrVgtmVJ: {
                                    y:
                                      (a?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      519.5 +
                                      0 +
                                      0 +
                                      32 +
                                      0 +
                                      204,
                                  },
                                  uJz1Epa2A: {
                                    y:
                                      (a?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      870.9 +
                                      0 +
                                      0 +
                                      24 +
                                      0 +
                                      204,
                                  },
                                },
                                f,
                                g,
                              ),
                              children: e(_, {
                                className: "framer-1of4xgo-container",
                                layoutDependency: c,
                                layoutId: "J3pwCHSMb-container",
                                nodeId: "J3pwCHSMb",
                                rendersWithMotion: !0,
                                scopeId: "EBKq9YYKf",
                                children: e(re, {
                                  height: "100%",
                                  id: "J3pwCHSMb",
                                  layoutId: "J3pwCHSMb",
                                  LOae8Hh1Z: "www.framerpod.com",
                                  r_tkFUAEM: "More Templates",
                                  SlQMX6GRW:
                                    "var(--token-ee3a8e72-837b-4d5f-91c5-4a829d9a9162, rgb(146, 146, 152))",
                                  TLnZj9Gjf: !0,
                                  variant: "ITnNQEBIM",
                                  width: "100%",
                                  wn9baD7vq: !1,
                                  ...b(
                                    {
                                      fCrVgtmVJ: { variant: "Ehsr2h1Lo" },
                                      uJz1Epa2A: { variant: "Ehsr2h1Lo" },
                                    },
                                    f,
                                    g,
                                  ),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    p(t.div, {
                      className: "framer-u30rt5",
                      "data-border": !0,
                      "data-framer-name": "Newsletter",
                      layoutDependency: c,
                      layoutId: "DHewBJxqF",
                      style: {
                        "--border-bottom-width": "0px",
                        "--border-color": "rgb(230, 230, 230)",
                        "--border-left-width": "1px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        backgroundColor:
                          "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                      },
                      variants: { fCrVgtmVJ: { "--border-top-width": "1px" } },
                      children: [
                        p(t.div, {
                          className: "framer-osfyf2",
                          "data-framer-name": "Header",
                          layoutDependency: c,
                          layoutId: "WXBTbmUYx",
                          children: [
                            e(U, {
                              __fromCanvasComponent: !0,
                              children: e(m, {
                                children: e(t.h4, {
                                  className: "framer-styles-preset-9qeksy",
                                  "data-styles-preset": "gvtU1mduf",
                                  style: {
                                    "--framer-text-color":
                                      "var(--extracted-1eung3n, var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54)))",
                                  },
                                  children: "Stay in the Loop",
                                }),
                              }),
                              className: "framer-1ul7z2c",
                              "data-framer-name": "Title",
                              "data-highlight": !0,
                              fonts: ["Inter"],
                              layoutDependency: c,
                              layoutId: "jRbkbmo5y",
                              onTap: ya,
                              style: {
                                "--extracted-1eung3n":
                                  "var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54))",
                                "--framer-paragraph-spacing": "0px",
                              },
                              verticalAlignment: "center",
                              withExternalLayout: !0,
                            }),
                            e(U, {
                              __fromCanvasComponent: !0,
                              children: e(m, {
                                children: e(t.h6, {
                                  className: "framer-styles-preset-hc6tm6",
                                  "data-styles-preset": "W8TTjiBap",
                                  style: {
                                    "--framer-text-color":
                                      "var(--extracted-1w1cjl5, var(--token-ee3a8e72-837b-4d5f-91c5-4a829d9a9162, rgb(138, 138, 145)))",
                                  },
                                  children:
                                    "Stay informed about our latest  news, updates by subscribing to our newsletter.",
                                }),
                              }),
                              className: "framer-9q8x1u",
                              "data-framer-name": "Subtitle",
                              fonts: ["Inter"],
                              layoutDependency: c,
                              layoutId: "iBHVVZOS_",
                              style: {
                                "--extracted-1w1cjl5":
                                  "var(--token-ee3a8e72-837b-4d5f-91c5-4a829d9a9162, rgb(138, 138, 145))",
                                "--framer-paragraph-spacing": "0px",
                              },
                              verticalAlignment: "center",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        e(U, {
                          __fromCanvasComponent: !0,
                          children: e(m, {
                            children: e(t.p, {
                              className: "framer-styles-preset-1xxrt94",
                              "data-styles-preset": "ZMbfgxZHW",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-ee3a8e72-837b-4d5f-91c5-4a829d9a9162, rgb(138, 138, 145)))",
                              },
                              children:
                                "We respect your inbox. No spam, just valuable updates.",
                            }),
                          }),
                          className: "framer-1kcdz44",
                          "data-framer-name": "Subtitle",
                          fonts: ["Inter"],
                          layoutDependency: c,
                          layoutId: "Tqb3gBusj",
                          style: {
                            "--extracted-r6o4lv":
                              "var(--token-ee3a8e72-837b-4d5f-91c5-4a829d9a9162, rgb(138, 138, 145))",
                            "--framer-paragraph-spacing": "0px",
                          },
                          verticalAlignment: "center",
                          withExternalLayout: !0,
                        }),
                        e(pt, {
                          action:
                            "https://api.framer.com/forms/v1/forms/17243716-0996-41f9-94dc-77f013f82019/submit",
                          className: "framer-1woghgp",
                          "data-border": !0,
                          layoutDependency: c,
                          layoutId: "pdz9KVkxs",
                          nodeId: "pdz9KVkxs",
                          style: {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-e309f3fd-e019-4571-a428-1d0e34f3ca38, rgb(230, 230, 230))",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "0px",
                          },
                          children: (x) =>
                            p(Xe, {
                              children: [
                                e(t.label, {
                                  className: "framer-fs2q0q",
                                  layoutDependency: c,
                                  layoutId: "vsBTgW_cX",
                                  children: e(I, {
                                    height: 60,
                                    y:
                                      (a?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      519.5 +
                                      0 +
                                      40 +
                                      246.1 +
                                      0 +
                                      0 +
                                      0,
                                    ...b(
                                      {
                                        fCrVgtmVJ: {
                                          y:
                                            (a?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            519.5 +
                                            0 +
                                            354 +
                                            32 +
                                            255.1 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                        uJz1Epa2A: {
                                          y:
                                            (a?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            870.9 +
                                            0 +
                                            338 +
                                            24 +
                                            432.1 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                      },
                                      f,
                                      g,
                                    ),
                                    children: e(_, {
                                      className: "framer-14he91g-container",
                                      layoutDependency: c,
                                      layoutId: "MYrhFnqKZ-container",
                                      nodeId: "MYrhFnqKZ",
                                      rendersWithMotion: !0,
                                      scopeId: "EBKq9YYKf",
                                      children: e(Tr, {
                                        height: "100%",
                                        id: "MYrhFnqKZ",
                                        layoutId: "MYrhFnqKZ",
                                        OQmKaiSwr: !0,
                                        style: { width: "100%" },
                                        VjnXBVXQc: "Your email",
                                        WGWYhNqUE: "text",
                                        width: "100%",
                                        ZZ51IRQg6: "Your email",
                                      }),
                                    }),
                                  }),
                                }),
                                e(I, {
                                  height: 32,
                                  y:
                                    (a?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    519.5 +
                                    0 +
                                    40 +
                                    246.1 +
                                    14,
                                  ...b(
                                    {
                                      fCrVgtmVJ: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          519.5 +
                                          0 +
                                          354 +
                                          32 +
                                          255.1 +
                                          14,
                                      },
                                      uJz1Epa2A: {
                                        y:
                                          (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          870.9 +
                                          0 +
                                          338 +
                                          24 +
                                          432.1 +
                                          14,
                                      },
                                    },
                                    f,
                                    g,
                                  ),
                                  children: e(_, {
                                    className: "framer-wi8plp-container",
                                    layoutDependency: c,
                                    layoutId: "FZ5H1uh0R-container",
                                    nodeId: "FZ5H1uh0R",
                                    rendersWithMotion: !0,
                                    scopeId: "EBKq9YYKf",
                                    children: e(Vr, {
                                      height: "100%",
                                      id: "FZ5H1uh0R",
                                      layoutId: "FZ5H1uh0R",
                                      type: "submit",
                                      variant: zr(
                                        x,
                                        {
                                          error: "NXLbtzZ0B",
                                          pending: "wlDnpaWyc",
                                          success: "jQMUqQd6u",
                                        },
                                        "BNYh9PHTd",
                                      ),
                                      width: "100%",
                                      ...b(
                                        {
                                          fCrVgtmVJ: {
                                            variant: zr(
                                              x,
                                              {
                                                error: "NXLbtzZ0B",
                                                pending: "wlDnpaWyc",
                                                success: "jQMUqQd6u",
                                              },
                                              "ShuBEo09u",
                                            ),
                                          },
                                          uJz1Epa2A: {
                                            variant: zr(
                                              x,
                                              {
                                                error: "NXLbtzZ0B",
                                                pending: "wlDnpaWyc",
                                                success: "jQMUqQd6u",
                                              },
                                              "ShuBEo09u",
                                            ),
                                          },
                                        },
                                        f,
                                        g,
                                      ),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                        }),
                      ],
                    }),
                    p(t.div, {
                      className: "framer-1ufq9x7",
                      "data-framer-name": "Social",
                      layoutDependency: c,
                      layoutId: "MDqQpIEN6",
                      children: [
                        e(I, {
                          height: 79.6,
                          width: `max(${a?.width || "100vw"} / 4, 1px)`,
                          y: (a?.y || 0) + 0 + 0 + 0 + 519.5 + 0 + 0 + 0,
                          ...b(
                            {
                              fCrVgtmVJ: {
                                height: 80,
                                width: `max(${a?.width || "100vw"} / 2, 50px)`,
                                y:
                                  (a?.y || 0) +
                                  0 +
                                  0 +
                                  0 +
                                  519.5 +
                                  0 +
                                  354 +
                                  0 +
                                  0,
                              },
                              uJz1Epa2A: {
                                height: 80,
                                width: `max(${a?.width || "100vw"}, 50px)`,
                                y:
                                  (a?.y || 0) +
                                  0 +
                                  0 +
                                  0 +
                                  870.9 +
                                  0 +
                                  1076 +
                                  0 +
                                  0,
                              },
                            },
                            f,
                            g,
                          ),
                          children: e(_, {
                            className: "framer-1ugfd3j-container",
                            "data-framer-cursor": pe,
                            layoutDependency: c,
                            layoutId: "Pa5ubJOUK-container",
                            nodeId: "Pa5ubJOUK",
                            rendersWithMotion: !0,
                            scopeId: "EBKq9YYKf",
                            children: e(Ae, {
                              cr8sulb2H: "24px 24px 24px 24px",
                              height: "100%",
                              id: "Pa5ubJOUK",
                              layoutId: "Pa5ubJOUK",
                              oT_qK9UXp: me,
                              style: { height: "100%", width: "100%" },
                              t5YlNd3vC: G,
                              TKmco0SBM: {
                                borderBottomWidth: 1,
                                borderColor:
                                  "var(--token-e309f3fd-e019-4571-a428-1d0e34f3ca38, rgb(230, 230, 230))",
                                borderLeftWidth: 1,
                                borderRightWidth: 0,
                                borderStyle: "solid",
                                borderTopWidth: 0,
                              },
                              variant: "qqH_rqWfi",
                              width: "100%",
                              ...b(
                                {
                                  fCrVgtmVJ: {
                                    cr8sulb2H: "32px",
                                    style: { width: "100%" },
                                    TKmco0SBM: {
                                      borderBottomWidth: 0,
                                      borderColor:
                                        "var(--token-e309f3fd-e019-4571-a428-1d0e34f3ca38, rgb(230, 230, 230))",
                                      borderLeftWidth: 1,
                                      borderRightWidth: 0,
                                      borderStyle: "solid",
                                      borderTopWidth: 1,
                                    },
                                    variant: "SG28R6RyV",
                                  },
                                  uJz1Epa2A: {
                                    style: { width: "100%" },
                                    TKmco0SBM: {
                                      borderBottomWidth: 0,
                                      borderColor:
                                        "var(--token-e309f3fd-e019-4571-a428-1d0e34f3ca38, rgb(230, 230, 230))",
                                      borderLeftWidth: 1,
                                      borderRightWidth: 0,
                                      borderStyle: "solid",
                                      borderTopWidth: 1,
                                    },
                                    variant: "SG28R6RyV",
                                  },
                                },
                                f,
                                g,
                              ),
                            }),
                          }),
                        }),
                        e(I, {
                          height: 79.6,
                          width: `max(${a?.width || "100vw"} / 4, 1px)`,
                          y: (a?.y || 0) + 0 + 0 + 0 + 519.5 + 0 + 0 + 79.6,
                          ...b(
                            {
                              fCrVgtmVJ: {
                                height: 80,
                                width: `max(${a?.width || "100vw"} / 2, 50px)`,
                                y:
                                  (a?.y || 0) +
                                  0 +
                                  0 +
                                  0 +
                                  519.5 +
                                  0 +
                                  354 +
                                  0 +
                                  80,
                              },
                              uJz1Epa2A: {
                                height: 80,
                                width: `max(${a?.width || "100vw"}, 50px)`,
                                y:
                                  (a?.y || 0) +
                                  0 +
                                  0 +
                                  0 +
                                  870.9 +
                                  0 +
                                  1076 +
                                  0 +
                                  80,
                              },
                            },
                            f,
                            g,
                          ),
                          children: e(_, {
                            className: "framer-4mbwo5-container",
                            "data-framer-cursor": pe,
                            layoutDependency: c,
                            layoutId: "QA72EiDa8-container",
                            nodeId: "QA72EiDa8",
                            rendersWithMotion: !0,
                            scopeId: "EBKq9YYKf",
                            children: e(Ae, {
                              cr8sulb2H: "24px",
                              height: "100%",
                              id: "QA72EiDa8",
                              layoutId: "QA72EiDa8",
                              oT_qK9UXp: B,
                              style: { height: "100%", width: "100%" },
                              t5YlNd3vC: L,
                              TKmco0SBM: {
                                borderBottomWidth: 1,
                                borderColor:
                                  "var(--token-e309f3fd-e019-4571-a428-1d0e34f3ca38, rgb(230, 230, 230))",
                                borderLeftWidth: 1,
                                borderRightWidth: 0,
                                borderStyle: "solid",
                                borderTopWidth: 0,
                              },
                              variant: "qqH_rqWfi",
                              width: "100%",
                              ...b(
                                {
                                  fCrVgtmVJ: {
                                    cr8sulb2H: "32px",
                                    style: { width: "100%" },
                                    TKmco0SBM: {
                                      borderBottomWidth: 1,
                                      borderColor:
                                        "var(--token-e309f3fd-e019-4571-a428-1d0e34f3ca38, rgb(230, 230, 230))",
                                      borderLeftWidth: 1,
                                      borderRightWidth: 0,
                                      borderStyle: "solid",
                                      borderTopWidth: 1,
                                    },
                                    variant: "SG28R6RyV",
                                  },
                                  uJz1Epa2A: {
                                    style: { width: "100%" },
                                    TKmco0SBM: {
                                      borderBottomWidth: 1,
                                      borderColor:
                                        "var(--token-e309f3fd-e019-4571-a428-1d0e34f3ca38, rgb(230, 230, 230))",
                                      borderLeftWidth: 1,
                                      borderRightWidth: 0,
                                      borderStyle: "solid",
                                      borderTopWidth: 1,
                                    },
                                    variant: "SG28R6RyV",
                                  },
                                },
                                f,
                                g,
                              ),
                            }),
                          }),
                        }),
                        e(I, {
                          height: 79.6,
                          width: `max(${a?.width || "100vw"} / 4, 1px)`,
                          y: (a?.y || 0) + 0 + 0 + 0 + 519.5 + 0 + 0 + 159.2,
                          ...b(
                            {
                              fCrVgtmVJ: {
                                height: 80,
                                width: `max(${a?.width || "100vw"} / 2, 50px)`,
                                y:
                                  (a?.y || 0) +
                                  0 +
                                  0 +
                                  0 +
                                  519.5 +
                                  0 +
                                  354 +
                                  0 +
                                  160,
                              },
                              uJz1Epa2A: {
                                height: 80,
                                width: `max(${a?.width || "100vw"}, 50px)`,
                                y:
                                  (a?.y || 0) +
                                  0 +
                                  0 +
                                  0 +
                                  870.9 +
                                  0 +
                                  1076 +
                                  0 +
                                  160,
                              },
                            },
                            f,
                            g,
                          ),
                          children: e(_, {
                            className: "framer-rtvbgl-container",
                            "data-framer-cursor": pe,
                            layoutDependency: c,
                            layoutId: "Ot3RJGWBr-container",
                            nodeId: "Ot3RJGWBr",
                            rendersWithMotion: !0,
                            scopeId: "EBKq9YYKf",
                            children: e(Ae, {
                              cr8sulb2H: "24px",
                              height: "100%",
                              id: "Ot3RJGWBr",
                              layoutId: "Ot3RJGWBr",
                              oT_qK9UXp: k,
                              style: { height: "100%", width: "100%" },
                              t5YlNd3vC: l,
                              TKmco0SBM: {
                                borderBottomWidth: 1,
                                borderColor:
                                  "var(--token-e309f3fd-e019-4571-a428-1d0e34f3ca38, rgb(230, 230, 230))",
                                borderLeftWidth: 1,
                                borderRightWidth: 0,
                                borderStyle: "solid",
                                borderTopWidth: 0,
                              },
                              variant: "qqH_rqWfi",
                              width: "100%",
                              ...b(
                                {
                                  fCrVgtmVJ: {
                                    cr8sulb2H: "32px",
                                    style: { width: "100%" },
                                    variant: "SG28R6RyV",
                                  },
                                  uJz1Epa2A: {
                                    style: { width: "100%" },
                                    variant: "SG28R6RyV",
                                  },
                                },
                                f,
                                g,
                              ),
                            }),
                          }),
                        }),
                        e(I, {
                          height: 79.6,
                          width: `max(${a?.width || "100vw"} / 4, 1px)`,
                          y: (a?.y || 0) + 0 + 0 + 0 + 519.5 + 0 + 0 + 238.8,
                          ...b(
                            {
                              fCrVgtmVJ: {
                                height: 80,
                                width: `max(${a?.width || "100vw"} / 2, 50px)`,
                                y:
                                  (a?.y || 0) +
                                  0 +
                                  0 +
                                  0 +
                                  519.5 +
                                  0 +
                                  354 +
                                  0 +
                                  240,
                              },
                              uJz1Epa2A: {
                                height: 80,
                                width: `max(${a?.width || "100vw"}, 50px)`,
                                y:
                                  (a?.y || 0) +
                                  0 +
                                  0 +
                                  0 +
                                  870.9 +
                                  0 +
                                  1076 +
                                  0 +
                                  240,
                              },
                            },
                            f,
                            g,
                          ),
                          children: e(_, {
                            className: "framer-8e8ydb-container",
                            "data-framer-cursor": pe,
                            layoutDependency: c,
                            layoutId: "LsQLD6YWq-container",
                            nodeId: "LsQLD6YWq",
                            rendersWithMotion: !0,
                            scopeId: "EBKq9YYKf",
                            children: e(Ae, {
                              cr8sulb2H: "24px",
                              height: "100%",
                              id: "LsQLD6YWq",
                              layoutId: "LsQLD6YWq",
                              oT_qK9UXp: ae,
                              style: { height: "100%", width: "100%" },
                              t5YlNd3vC: te,
                              TKmco0SBM: {
                                borderBottomWidth: 1,
                                borderColor:
                                  "var(--token-e309f3fd-e019-4571-a428-1d0e34f3ca38, rgb(230, 230, 230))",
                                borderLeftWidth: 1,
                                borderRightWidth: 0,
                                borderStyle: "solid",
                                borderTopWidth: 0,
                              },
                              variant: "qqH_rqWfi",
                              width: "100%",
                              ...b(
                                {
                                  fCrVgtmVJ: {
                                    cr8sulb2H: "32px",
                                    style: { width: "100%" },
                                    variant: "SG28R6RyV",
                                  },
                                  uJz1Epa2A: {
                                    style: { width: "100%" },
                                    variant: "SG28R6RyV",
                                  },
                                },
                                f,
                                g,
                              ),
                            }),
                          }),
                        }),
                        e(I, {
                          height: 79.6,
                          width: `max(${a?.width || "100vw"} / 4, 1px)`,
                          y: (a?.y || 0) + 0 + 0 + 0 + 519.5 + 0 + 0 + 318.4,
                          ...b(
                            {
                              fCrVgtmVJ: {
                                height: 80,
                                width: `max(${a?.width || "100vw"} / 2, 50px)`,
                                y:
                                  (a?.y || 0) +
                                  0 +
                                  0 +
                                  0 +
                                  519.5 +
                                  0 +
                                  354 +
                                  0 +
                                  320,
                              },
                              uJz1Epa2A: {
                                height: 80,
                                width: `max(${a?.width || "100vw"}, 50px)`,
                                y:
                                  (a?.y || 0) +
                                  0 +
                                  0 +
                                  0 +
                                  870.9 +
                                  0 +
                                  1076 +
                                  0 +
                                  320,
                              },
                            },
                            f,
                            g,
                          ),
                          children: e(_, {
                            className: "framer-168dxud-container",
                            "data-framer-cursor": pe,
                            layoutDependency: c,
                            layoutId: "xN8Xfs_uz-container",
                            nodeId: "xN8Xfs_uz",
                            rendersWithMotion: !0,
                            scopeId: "EBKq9YYKf",
                            children: e(Ae, {
                              cr8sulb2H: "24px",
                              height: "100%",
                              id: "xN8Xfs_uz",
                              layoutId: "xN8Xfs_uz",
                              oT_qK9UXp: xe,
                              style: { height: "100%", width: "100%" },
                              t5YlNd3vC: ye,
                              TKmco0SBM: {
                                borderBottomWidth: 0,
                                borderColor:
                                  "var(--token-e309f3fd-e019-4571-a428-1d0e34f3ca38, rgb(230, 230, 230))",
                                borderLeftWidth: 1,
                                borderRightWidth: 0,
                                borderStyle: "solid",
                                borderTopWidth: 0,
                              },
                              variant: "qqH_rqWfi",
                              width: "100%",
                              ...b(
                                {
                                  fCrVgtmVJ: {
                                    cr8sulb2H: "32px",
                                    style: { width: "100%" },
                                    variant: "SG28R6RyV",
                                  },
                                  uJz1Epa2A: {
                                    style: { width: "100%" },
                                    variant: "SG28R6RyV",
                                  },
                                },
                                f,
                                g,
                              ),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                p(t.div, {
                  className: "framer-2j7qsn",
                  "data-framer-name": "Bottom",
                  layoutDependency: c,
                  layoutId: "c3BqdtTY2",
                  children: [
                    p(t.div, {
                      className: "framer-i5kfys",
                      "data-border": !0,
                      "data-framer-name": "Left",
                      layoutDependency: c,
                      layoutId: "jFAXGXRx_",
                      style: {
                        "--border-bottom-width": "0px",
                        "--border-color": "rgb(230, 230, 230)",
                        "--border-left-width": "1px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                      },
                      children: [
                        p(t.div, {
                          className: "framer-1tdrs8w",
                          "data-border": !0,
                          "data-framer-name": "Address",
                          layoutDependency: c,
                          layoutId: "vbeNVVUuv",
                          style: {
                            "--border-bottom-width": "0px",
                            "--border-color": "rgb(230, 230, 230)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "0px",
                          },
                          children: [
                            e(U, {
                              __fromCanvasComponent: !0,
                              children: e(m, {
                                children: e(t.p, {
                                  className: "framer-styles-preset-ibswh5",
                                  "data-styles-preset": "kx7zYTCIt",
                                  style: {
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-d1ed6fa9-776f-4c8e-9455-c25d9df057af, rgb(192, 192, 192)))",
                                  },
                                  children: "Offline",
                                }),
                              }),
                              className: "framer-3tyeiz",
                              fonts: ["Inter"],
                              layoutDependency: c,
                              layoutId: "nlrvCmd8T",
                              style: {
                                "--extracted-r6o4lv":
                                  "var(--token-d1ed6fa9-776f-4c8e-9455-c25d9df057af, rgb(192, 192, 192))",
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                              },
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            e(U, {
                              __fromCanvasComponent: !0,
                              children: e(m, {
                                children: p(t.h6, {
                                  className: "framer-styles-preset-1hn4rvx",
                                  "data-styles-preset": "dwLQGPHaB",
                                  style: {
                                    "--framer-text-color":
                                      "var(--extracted-1w1cjl5, var(--token-ee3a8e72-837b-4d5f-91c5-4a829d9a9162, rgb(138, 138, 145)))",
                                  },
                                  children: [
                                    e(t.span, {
                                      style: {
                                        "--framer-text-color":
                                          "var(--extracted-1vqrutl, var(--token-d8014220-2a78-4e07-9390-e464885c7a19, rgb(255, 68, 0)))",
                                      },
                                      children: "Arpeggio SRL ",
                                    }),
                                    "Via Monte Napoleone 3 20121 Milano",
                                  ],
                                }),
                              }),
                              className: "framer-1fnvh0z",
                              fonts: ["Inter"],
                              layoutDependency: c,
                              layoutId: "RHrvYFTMZ",
                              style: {
                                "--extracted-1vqrutl":
                                  "var(--token-d8014220-2a78-4e07-9390-e464885c7a19, rgb(255, 68, 0))",
                                "--extracted-1w1cjl5":
                                  "var(--token-ee3a8e72-837b-4d5f-91c5-4a829d9a9162, rgb(138, 138, 145))",
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                              },
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            e(U, {
                              __fromCanvasComponent: !0,
                              children: e(m, {
                                children: e(t.h5, {
                                  className: "framer-styles-preset-17h9v8l",
                                  "data-styles-preset": "gFafTsDWV",
                                  style: {
                                    "--framer-text-color":
                                      "var(--extracted-1lwpl3i, var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54)))",
                                  },
                                  children: e(A, {
                                    href: "tel:(08) 560 8890",
                                    motionChild: !0,
                                    nodeId: "mDx7sZtOG",
                                    openInNewTab: !0,
                                    scopeId: "EBKq9YYKf",
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-1yxxeu7",
                                      "data-styles-preset": "gfaJuMHBr",
                                      children: e(t.strong, {
                                        children: "(08) 560 8890",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              className: "framer-viig93",
                              fonts: ["Inter", "Inter-Bold"],
                              layoutDependency: c,
                              layoutId: "mDx7sZtOG",
                              style: {
                                "--extracted-1lwpl3i":
                                  "var(--token-52da4e30-e37a-4629-92ea-929c1ac3ceb3, rgb(51, 51, 54))",
                              },
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        e(t.div, {
                          className: "framer-6snoba",
                          "data-border": !0,
                          "data-framer-name": "Legal",
                          layoutDependency: c,
                          layoutId: "zE1g9_evf",
                          style: {
                            "--border-bottom-width": "0px",
                            "--border-color": "rgb(230, 230, 230)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "0px",
                          },
                          children: e(U, {
                            __fromCanvasComponent: !0,
                            children: e(m, {
                              children: p(t.p, {
                                className: "framer-styles-preset-1x5nt9t",
                                "data-styles-preset": "o_UxbraPE",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-ee3a8e72-837b-4d5f-91c5-4a829d9a9162, rgb(138, 138, 145)))",
                                },
                                children: [
                                  "Arpeggio SRL is a company registered in Italy. ",
                                  e(t.br, {}),
                                  "Design and development services are provided by Arpeggio SRL.",
                                ],
                              }),
                            }),
                            className: "framer-1gywzfo",
                            fonts: ["Inter"],
                            layoutDependency: c,
                            layoutId: "Z77hbqBWC",
                            style: {
                              "--extracted-r6o4lv":
                                "var(--token-ee3a8e72-837b-4d5f-91c5-4a829d9a9162, rgb(138, 138, 145))",
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                            },
                            text: Le,
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    e(t.div, {
                      className: "framer-14vtsrv",
                      "data-border": !0,
                      "data-framer-name": "Right",
                      layoutDependency: c,
                      layoutId: "uuJQK4HDH",
                      style: {
                        "--border-bottom-width": "0px",
                        "--border-color": "rgb(230, 230, 230)",
                        "--border-left-width": "1px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                      },
                      children: p(t.div, {
                        className: "framer-1p2234j",
                        "data-framer-name": "Designed by Tamas",
                        layoutDependency: c,
                        layoutId: "qUfNvtCyw",
                        children: [
                          e(U, {
                            __fromCanvasComponent: !0,
                            children: e(m, {
                              children: e(t.p, {
                                className: "framer-styles-preset-1x5nt9t",
                                "data-styles-preset": "o_UxbraPE",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-ee3a8e72-837b-4d5f-91c5-4a829d9a9162, rgb(138, 138, 145)))",
                                },
                                children: "Copyright text",
                              }),
                            }),
                            className: "framer-1ck7nos",
                            "data-framer-name":
                              "Copyright \xA9 ARPEGGIO AGENCY 2025",
                            fonts: ["Inter"],
                            layoutDependency: c,
                            layoutId: "qrPMHIRLa",
                            style: {
                              "--extracted-r6o4lv":
                                "var(--token-ee3a8e72-837b-4d5f-91c5-4a829d9a9162, rgb(138, 138, 145))",
                              "--framer-paragraph-spacing": "0px",
                            },
                            text: Ne,
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          e(A, {
                            href: "x.com/tamasbodo",
                            motionChild: !0,
                            nodeId: "i5ToZcK1y",
                            scopeId: "EBKq9YYKf",
                            children: e(E, {
                              as: "a",
                              background: {
                                alt: "",
                                fit: "fit",
                                loading: W(
                                  (a?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    917.5 +
                                    0 +
                                    36.6815 +
                                    0 +
                                    143,
                                ),
                                pixelHeight: 12,
                                pixelWidth: 113,
                                positionX: "center",
                                positionY: "center",
                                src: "https://framerusercontent.com/images/uTxfGUs7c44AHZHxw6WNgYnQkU.svg",
                              },
                              className: "framer-192x8s9 framer-1veesky",
                              "data-framer-name": "x.com/tamasbodo",
                              layoutDependency: c,
                              layoutId: "i5ToZcK1y",
                              whileHover: Gn,
                              ...b(
                                {
                                  fCrVgtmVJ: {
                                    background: {
                                      alt: "",
                                      fit: "fit",
                                      loading: W(
                                        (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1273.5 +
                                          0 +
                                          222.4 +
                                          -59.5 +
                                          0,
                                      ),
                                      pixelHeight: 12,
                                      pixelWidth: 113,
                                      positionX: "center",
                                      positionY: "center",
                                      src: "https://framerusercontent.com/images/uTxfGUs7c44AHZHxw6WNgYnQkU.svg",
                                    },
                                  },
                                  uJz1Epa2A: {
                                    background: {
                                      alt: "",
                                      fit: "fit",
                                      loading: W(
                                        (a?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1608.9 +
                                          0 +
                                          349.4 +
                                          24 +
                                          0,
                                      ),
                                      pixelHeight: 12,
                                      pixelWidth: 113,
                                      positionX: "center",
                                      positionY: "center",
                                      src: "https://framerusercontent.com/images/uTxfGUs7c44AHZHxw6WNgYnQkU.svg",
                                    },
                                  },
                                },
                                f,
                                g,
                              ),
                            }),
                          }),
                        ],
                      }),
                    }),
                    e(I, {
                      height: 238.4,
                      width: `max(${a?.width || "100vw"} / 4, 1px)`,
                      y: (a?.y || 0) + 0 + 0 + 0 + 917.5 + 0,
                      ...b(
                        {
                          fCrVgtmVJ: {
                            height: 100,
                            width: a?.width || "100vw",
                            y: (a?.y || 0) + 0 + 0 + 0 + 1273.5 + 0 + 222.4,
                          },
                          uJz1Epa2A: {
                            height: 100,
                            width: a?.width || "100vw",
                            y: (a?.y || 0) + 0 + 0 + 0 + 1608.9 + 0 + 516.4,
                          },
                        },
                        f,
                        g,
                      ),
                      children: e(_, {
                        className: "framer-1rcbzyv-container",
                        "data-framer-cursor": pe,
                        layoutDependency: c,
                        layoutId: "IGuauVUOw-container",
                        nodeId: "IGuauVUOw",
                        rendersWithMotion: !0,
                        scopeId: "EBKq9YYKf",
                        children: e(Pn, {
                          height: "100%",
                          id: "IGuauVUOw",
                          layoutId: "IGuauVUOw",
                          style: { height: "100%", width: "100%" },
                          variant: "Haagfdmtg",
                          width: "100%",
                          ...b(
                            {
                              fCrVgtmVJ: { variant: "g5mJ8ARjK" },
                              uJz1Epa2A: { variant: "g5mJ8ARjK" },
                            },
                            f,
                            g,
                          ),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  ro = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-CxJnL.framer-1veesky, .framer-CxJnL .framer-1veesky { display: block; }",
    ".framer-CxJnL.framer-q9i40w { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }",
    ".framer-CxJnL .framer-rpmlkb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-CxJnL .framer-jzrv0w { display: grid; flex: none; gap: 0px; grid-auto-rows: min-content; grid-template-columns: repeat(6, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 3; }",
    ".framer-CxJnL .framer-7xjsec { align-content: center; align-items: center; align-self: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; grid-column: span 4; height: min-content; justify-content: center; justify-self: center; overflow: visible; padding: 40px; position: relative; width: 100%; }",
    ".framer-CxJnL .framer-wgdccw { aspect-ratio: 3.2711864406779663 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 220px); overflow: visible; position: relative; width: 100%; z-index: 1; }",
    ".framer-CxJnL .framer-ejjs7h { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }",
    ".framer-CxJnL .framer-1sos3gs { align-self: stretch; flex: none; height: auto; overflow: hidden; position: relative; width: 70%; }",
    ".framer-CxJnL .framer-1s321yu { aspect-ratio: 3 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 72px); overflow: hidden; position: relative; width: 1px; }",
    ".framer-CxJnL .framer-15e1w4w { align-content: flex-start; align-items: flex-start; align-self: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; grid-column: span 2; height: 250px; justify-content: center; justify-self: center; overflow: hidden; padding: 0px 0px 0px 60px; position: relative; width: 100%; }",
    ".framer-CxJnL .framer-3zckg2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-CxJnL .framer-h9m1tg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-CxJnL .framer-1olt4ux, .framer-CxJnL .framer-1nlmb0q { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); overflow: hidden; position: relative; width: 16px; }",
    ".framer-CxJnL .framer-13idzxa { flex: 1 0 0px; height: auto; max-width: 500px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-CxJnL .framer-13s3wqv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 24px; position: relative; width: 100%; }",
    ".framer-CxJnL .framer-1scum8a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-CxJnL .framer-il6w74 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    ".framer-CxJnL .framer-dckw6a { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-CxJnL .framer-pnc7sk-container { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; width: 100%; }",
    ".framer-CxJnL .framer-vi30a2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 398px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-CxJnL .framer-1aspwze { align-content: flex-start; align-items: flex-start; display: flex; flex: 2 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 140px; height: 100%; justify-content: flex-start; overflow: hidden; padding: 60px 40px 60px 40px; position: relative; width: 1px; }",
    ".framer-CxJnL .framer-9lm73m, .framer-CxJnL .framer-rkdlkz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-CxJnL .framer-orngxh-container, .framer-CxJnL .framer-8e10st-container, .framer-CxJnL .framer-12glb7w-container, .framer-CxJnL .framer-1n07y5p-container, .framer-CxJnL .framer-z1ywgw-container, .framer-CxJnL .framer-14j9whx-container, .framer-CxJnL .framer-122a8t1-container, .framer-CxJnL .framer-8n5fdx-container, .framer-CxJnL .framer-115g435-container, .framer-CxJnL .framer-jw38j8-container, .framer-CxJnL .framer-1of4xgo-container, .framer-CxJnL .framer-wi8plp-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-CxJnL .framer-u30rt5 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 100%; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 1px; }",
    ".framer-CxJnL .framer-osfyf2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-CxJnL .framer-1ul7z2c { cursor: pointer; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-CxJnL .framer-9q8x1u, .framer-CxJnL .framer-1kcdz44 { flex: none; height: auto; max-width: 300px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-CxJnL .framer-1woghgp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 400px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-CxJnL .framer-fs2q0q { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }",
    ".framer-CxJnL .framer-14he91g-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-CxJnL .framer-1ufq9x7 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-CxJnL .framer-1ugfd3j-container, .framer-CxJnL .framer-4mbwo5-container, .framer-CxJnL .framer-rtvbgl-container, .framer-CxJnL .framer-8e8ydb-container, .framer-CxJnL .framer-168dxud-container { -webkit-user-select: none; flex: 1 0 0px; height: 1px; position: relative; user-select: none; width: 100%; }",
    ".framer-CxJnL .framer-2j7qsn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-CxJnL .framer-i5kfys { align-content: center; align-items: center; display: flex; flex: 2 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 1px; }",
    ".framer-CxJnL .framer-1tdrs8w, .framer-CxJnL .framer-6snoba { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-CxJnL .framer-3tyeiz, .framer-CxJnL .framer-viig93, .framer-CxJnL .framer-1gywzfo { flex: none; height: auto; max-width: 520px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-CxJnL .framer-1fnvh0z { flex: none; height: auto; max-width: 340px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-CxJnL .framer-14vtsrv { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: auto; justify-content: center; overflow: hidden; padding: 0px 40px 0px 40px; position: relative; width: 1px; }",
    ".framer-CxJnL .framer-1p2234j { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-CxJnL .framer-1ck7nos { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-CxJnL .framer-192x8s9 { -webkit-user-select: none; aspect-ratio: 6.352941176470588 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 22px); overflow: hidden; position: relative; text-decoration: none; user-select: none; width: 140px; will-change: var(--framer-will-change-effect-override, transform); }",
    ".framer-CxJnL .framer-1rcbzyv-container { align-self: stretch; flex: 1 0 0px; height: auto; position: relative; width: 1px; }",
    ".framer-CxJnL.framer-v-14a3not.framer-q9i40w { width: 810px; }",
    ".framer-CxJnL.framer-v-14a3not .framer-7xjsec { grid-column: span 3; }",
    ".framer-CxJnL.framer-v-14a3not .framer-wgdccw { height: var(--framer-aspect-ratio-supported, 100px); }",
    ".framer-CxJnL.framer-v-14a3not .framer-1sos3gs { width: 50%; }",
    ".framer-CxJnL.framer-v-14a3not .framer-1s321yu { height: var(--framer-aspect-ratio-supported, 54px); }",
    ".framer-CxJnL.framer-v-14a3not .framer-15e1w4w { grid-column: span 3; height: min-content; padding: 40px 32px 40px 32px; }",
    ".framer-CxJnL.framer-v-14a3not .framer-vi30a2 { align-content: unset; align-items: unset; display: grid; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; }",
    ".framer-CxJnL.framer-v-14a3not .framer-1aspwze { align-self: start; flex: none; grid-column: 1 / -1; height: 1fr; justify-self: start; padding: 32px; width: 100%; }",
    ".framer-CxJnL.framer-v-14a3not .framer-u30rt5 { align-self: start; flex: none; justify-self: start; padding: 32px; width: 100%; }",
    ".framer-CxJnL.framer-v-14a3not .framer-9q8x1u, .framer-CxJnL.framer-v-1wu0xcg .framer-9q8x1u { max-width: unset; }",
    ".framer-CxJnL.framer-v-14a3not .framer-1ufq9x7 { align-content: unset; align-items: unset; align-self: start; display: grid; flex: none; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); height: min-content; justify-content: center; justify-self: start; width: 100%; }",
    ".framer-CxJnL.framer-v-14a3not .framer-1ugfd3j-container, .framer-CxJnL.framer-v-14a3not .framer-4mbwo5-container, .framer-CxJnL.framer-v-14a3not .framer-rtvbgl-container, .framer-CxJnL.framer-v-14a3not .framer-8e8ydb-container, .framer-CxJnL.framer-v-1wu0xcg .framer-1ugfd3j-container, .framer-CxJnL.framer-v-1wu0xcg .framer-4mbwo5-container, .framer-CxJnL.framer-v-1wu0xcg .framer-rtvbgl-container, .framer-CxJnL.framer-v-1wu0xcg .framer-8e8ydb-container { align-self: start; flex: none; height: auto; justify-self: start; }",
    ".framer-CxJnL.framer-v-14a3not .framer-168dxud-container, .framer-CxJnL.framer-v-1wu0xcg .framer-168dxud-container { align-self: start; flex: none; grid-column: span 1; height: auto; justify-self: start; }",
    ".framer-CxJnL.framer-v-14a3not .framer-2j7qsn, .framer-CxJnL.framer-v-1wu0xcg .framer-2j7qsn { flex-direction: column; }",
    ".framer-CxJnL.framer-v-14a3not .framer-i5kfys { flex: none; padding: 32px; width: 100%; }",
    ".framer-CxJnL.framer-v-14a3not .framer-14vtsrv { align-self: unset; height: 1px; padding: 0px; width: 100%; }",
    ".framer-CxJnL.framer-v-14a3not .framer-1p2234j, .framer-CxJnL.framer-v-1wu0xcg .framer-1p2234j { flex-direction: row; }",
    ".framer-CxJnL.framer-v-14a3not .framer-1ck7nos, .framer-CxJnL.framer-v-1wu0xcg .framer-1ck7nos { flex: 1 0 0px; width: 1px; }",
    ".framer-CxJnL.framer-v-14a3not .framer-1rcbzyv-container, .framer-CxJnL.framer-v-1wu0xcg .framer-1rcbzyv-container { align-self: unset; flex: none; height: 100px; width: 100%; }",
    ".framer-CxJnL.framer-v-1wu0xcg.framer-q9i40w { width: 390px; }",
    ".framer-CxJnL.framer-v-1wu0xcg .framer-jzrv0w { grid-template-columns: repeat(1, minmax(50px, 1fr)); padding: 40px 0px 0px 0px; }",
    ".framer-CxJnL.framer-v-1wu0xcg .framer-7xjsec { grid-column: span 1; padding: 24px; }",
    ".framer-CxJnL.framer-v-1wu0xcg .framer-wgdccw { height: var(--framer-aspect-ratio-supported, 61px); }",
    ".framer-CxJnL.framer-v-1wu0xcg .framer-1sos3gs { order: 0; width: 50%; }",
    ".framer-CxJnL.framer-v-1wu0xcg .framer-1s321yu { height: var(--framer-aspect-ratio-supported, 67px); order: 1; }",
    ".framer-CxJnL.framer-v-1wu0xcg .framer-15e1w4w { grid-column: span 1; height: min-content; padding: 24px; }",
    ".framer-CxJnL.framer-v-1wu0xcg .framer-vi30a2 { flex-direction: column; height: min-content; }",
    ".framer-CxJnL.framer-v-1wu0xcg .framer-1aspwze { flex: none; gap: unset; height: min-content; justify-content: space-between; padding: 24px; width: 100%; }",
    ".framer-CxJnL.framer-v-1wu0xcg .framer-u30rt5 { flex: none; padding: 24px; width: 100%; }",
    ".framer-CxJnL.framer-v-1wu0xcg .framer-1ufq9x7 { align-content: unset; align-items: unset; display: grid; flex: none; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; width: 100%; }",
    ".framer-CxJnL.framer-v-1wu0xcg .framer-i5kfys { flex: none; flex-direction: column; gap: 24px; padding: 24px; width: 100%; }",
    ".framer-CxJnL.framer-v-1wu0xcg .framer-1tdrs8w, .framer-CxJnL.framer-v-1wu0xcg .framer-6snoba { flex: none; width: 100%; }",
    ".framer-CxJnL.framer-v-1wu0xcg .framer-14vtsrv { align-self: unset; flex: none; height: min-content; padding: 24px; width: 100%; }",
    ...Tt,
    ...lr,
    ...wt,
    ...hr,
    ...Dt,
    ...Vt,
    ...It,
    ...Nt,
    ...mr,
    '.framer-CxJnL[data-border="true"]::after, .framer-CxJnL [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  He = Z(eo, ro, "framer-CxJnL"),
  Rr = He;
He.displayName = "Footer";
He.defaultProps = { height: 971.5, width: 1200 };
q(He, {
  variant: {
    options: ["UT5Cyg6OT", "fCrVgtmVJ", "uJz1Epa2A"],
    optionTitles: ["Desktop", "Tablet", "Phone"],
    title: "Variant",
    type: d.Enum,
  },
  iJ5nYtafd: { title: "Large Logo", type: d.ResponsiveImage },
  fN6b7bFcm: {
    description: "Additional branding element, slogan, motto.",
    title: "Branding Element",
    type: d.ResponsiveImage,
  },
  L47lzEq4Y: {
    __defaultAssetReference:
      "data:framer/asset-reference,kFaemw9EZxCk6m3YKTlCmCwJUr4.svg?originalFilename=circle.svg&preferredSize=auto",
    __vekterDefault: {
      alt: "",
      assetReference:
        "data:framer/asset-reference,kFaemw9EZxCk6m3YKTlCmCwJUr4.svg?originalFilename=circle.svg&preferredSize=auto",
    },
    description: "Upload your 16x16 icon",
    title: "Icon",
    type: d.ResponsiveImage,
  },
  U2mJfzOnt: {
    defaultValue: "Timezone (GMT+1)",
    displayTextArea: !1,
    title: "Timezone Label",
    type: d.String,
  },
  kFX5XZyQu: { defaultValue: !0, title: "12/24 Hour Format", type: d.Boolean },
  mTSuDP4zA: ia?.selectedTimezone && {
    ...ia.selectedTimezone,
    defaultValue: "Stockholm (CET)",
    description: void 0,
    hidden: void 0,
    title: "Set Timezone",
  },
  PRbvkP1xz: {
    defaultValue: "We are currently based in Milano and work remotely.",
    description: "Enter your where you are based.",
    displayTextArea: !1,
    title: "Location",
    type: d.String,
  },
  KVc8qDEeC: {
    defaultValue: "Social 1",
    displayTextArea: !1,
    title: "Social 1",
    type: d.String,
  },
  VEdDGGzMQ: { title: "Social 1 Link", type: d.Link },
  tFYL24qDR: {
    defaultValue: "Social 2",
    description: "",
    displayTextArea: !1,
    title: "Social 2",
    type: d.String,
  },
  X8CKPtX72: { title: "Social 2 Link", type: d.Link },
  D64SPbotv: {
    defaultValue: "Social 3",
    description: "",
    displayTextArea: !1,
    title: "Social 3",
    type: d.String,
  },
  yCXdF9DvN: { title: "Social 3 Link", type: d.Link },
  PE62tz5iG: {
    defaultValue: "Social 4",
    displayTextArea: !1,
    title: "Social 4",
    type: d.String,
  },
  LQiTKib_F: { title: "Social 4 Link", type: d.Link },
  folLeAazM: {
    defaultValue: "Social 5",
    displayTextArea: !1,
    title: "Social 5",
    type: d.String,
  },
  S3E6XdbxJ: { title: "Social 5 Link", type: d.Link },
  SK4edYrAh: {
    defaultValue: "Copyright text",
    displayTextArea: !1,
    title: "Copyright",
    type: d.String,
  },
  Sctn3rhj8: {
    defaultValue: "Footnote",
    displayTextArea: !1,
    title: "Footnote",
    type: d.String,
  },
  zeKK6yONy: { title: "Social Cursor", type: d.CustomCursor },
});
$(
  He,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2",
          weight: "700",
        },
      ],
    },
    ...zn,
    ...Rn,
    ...Dn,
    ...En,
    ...Wn,
    ...Bn,
    ...z(St),
    ...z(sr),
    ...z(bt),
    ...z(pr),
    ...z(Rt),
    ...z(_t),
    ...z(kt),
    ...z(At),
    ...z(cr),
  ],
  { supportsExplicitInterCodegen: !0 },
);
function Re(r) {
  let { toggle: o } = r;
  return o
    ? e("style", {
        "data-frameruni-stop-scroll": !0,
        children: "body { overflow: hidden !important; }",
      })
    : e(Xe, {});
}
Re.displayName = "Stop Scroll";
q(Re, {
  toggle: {
    type: d.Boolean,
    title: "Block Scroll",
    description:
      "More components at [Framer University](https://frameruni.link/cc).",
  },
});
var to = { NTYtIt93q: { hover: !0 }, zvMrWDW6H: { hover: !0 } },
  ao = ["NTYtIt93q", "zvMrWDW6H", "egxSLp2Po", "mEGlmYAyX"],
  no = "framer-pKxJY",
  oo = {
    egxSLp2Po: "framer-v-1bops5h",
    mEGlmYAyX: "framer-v-bu4rp9",
    NTYtIt93q: "framer-v-vfy297",
    zvMrWDW6H: "framer-v-1189kxx",
  };
function io(r, ...o) {
  let i = {};
  return o?.forEach((n) => n && Object.assign(i, r[n])), i;
}
var so = { damping: 30, delay: 0, mass: 1, stiffness: 300, type: "spring" },
  lo = ({ value: r, children: o }) => {
    let i = ne(P),
      n = r ?? i.transition,
      s = oe(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: s, children: o });
  },
  co = t.create(m),
  mo = {
    "Close Static": "mEGlmYAyX",
    "Open Static": "egxSLp2Po",
    Close: "NTYtIt93q",
    Open: "zvMrWDW6H",
  },
  fo = ({ click: r, height: o, id: i, width: n, ...s }) => ({
    ...s,
    H0nqU18FJ: r ?? s.H0nqU18FJ,
    variant: mo[s.variant] ?? s.variant ?? "NTYtIt93q",
  }),
  po = (r, o) =>
    r.layoutDependency ? o.join("-") + r.layoutDependency : o.join("-"),
  ho = O(function (r, o) {
    let { activeLocale: i, setLocale: n } = Q(),
      {
        style: s,
        className: w,
        layoutId: C,
        variant: a,
        H0nqU18FJ: S,
        ...u
      } = fo(r),
      {
        baseVariant: V,
        classNames: R,
        clearLoadingGesture: F,
        gestureHandlers: y,
        gestureVariant: h,
        isLoading: Y,
        setGestureState: v,
        setVariant: J,
        variants: N,
      } = le({
        cycleOrder: ao,
        defaultVariant: "NTYtIt93q",
        enabledGestures: to,
        variant: a,
        variantClassNames: oo,
      }),
      G = po(r, N),
      { activeVariantCallback: me, delay: L } = Se(V),
      B = me(async (...xe) => {
        if ((v({ isPressed: !1 }), S && (await S(...xe)) === !1)) return !1;
      }),
      k = D(no, ...[]),
      te = j(null),
      ae = K(),
      ye = se();
    return e(X, {
      id: C ?? ae,
      children: e(co, {
        animate: N,
        initial: !1,
        children: e(lo, {
          value: so,
          children: e(t.div, {
            ...u,
            ...y,
            className: D(k, "framer-vfy297", w, R),
            "data-framer-name": "Close",
            "data-highlight": !0,
            layoutDependency: G,
            layoutId: "NTYtIt93q",
            onTap: B,
            ref: o ?? te,
            style: { ...s },
            ...io(
              {
                "NTYtIt93q-hover": { "data-framer-name": void 0 },
                "zvMrWDW6H-hover": { "data-framer-name": void 0 },
                egxSLp2Po: { "data-framer-name": "Open Static" },
                mEGlmYAyX: { "data-framer-name": "Close Static" },
                zvMrWDW6H: { "data-framer-name": "Open" },
              },
              V,
              h,
            ),
            children: p(t.div, {
              className: "framer-1b11ot8",
              "data-framer-name": "Burger Icon",
              layoutDependency: G,
              layoutId: "lv1efb6u7",
              children: [
                e(t.div, {
                  className: "framer-1wrta6w",
                  "data-framer-name": "Burger Line 1",
                  layoutDependency: G,
                  layoutId: "akVLSejf7",
                  style: {
                    backgroundColor:
                      "var(--token-d8014220-2a78-4e07-9390-e464885c7a19, rgb(255, 68, 0))",
                    rotate: -45,
                  },
                  variants: {
                    "NTYtIt93q-hover": { rotate: 45 },
                    egxSLp2Po: { rotate: 0 },
                    zvMrWDW6H: { rotate: 0 },
                  },
                }),
                e(t.div, {
                  className: "framer-arm4gs",
                  "data-framer-name": "Burger Line 2",
                  layoutDependency: G,
                  layoutId: "jv1geccC3",
                  style: {
                    backgroundColor:
                      "var(--token-d8014220-2a78-4e07-9390-e464885c7a19, rgb(255, 68, 0))",
                    rotate: 45,
                  },
                  variants: {
                    "NTYtIt93q-hover": { rotate: 135 },
                    egxSLp2Po: { rotate: 0 },
                    zvMrWDW6H: { rotate: 0 },
                  },
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  uo = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-pKxJY.framer-ewku5m, .framer-pKxJY .framer-ewku5m { display: block; }",
    ".framer-pKxJY.framer-vfy297 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 70px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 90px; }",
    ".framer-pKxJY .framer-1b11ot8 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: 60px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 80px; }",
    ".framer-pKxJY .framer-1wrta6w, .framer-pKxJY .framer-arm4gs { flex: none; height: 3px; left: calc(50.00000000000002% - 40px / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 3px / 2); width: 40px; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-pKxJY.framer-vfy297, .framer-pKxJY .framer-1b11ot8 { gap: 0px; } .framer-pKxJY.framer-vfy297 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-pKxJY.framer-vfy297 > :first-child, .framer-pKxJY .framer-1b11ot8 > :first-child { margin-top: 0px; } .framer-pKxJY.framer-vfy297 > :last-child, .framer-pKxJY .framer-1b11ot8 > :last-child { margin-bottom: 0px; } .framer-pKxJY .framer-1b11ot8 > * { margin: 0px; margin-bottom: calc(6px / 2); margin-top: calc(6px / 2); } }",
    ".framer-pKxJY.framer-v-1189kxx .framer-1b11ot8, .framer-pKxJY.framer-v-1bops5h .framer-1b11ot8 { height: 30px; }",
    ".framer-pKxJY.framer-v-1189kxx .framer-1wrta6w, .framer-pKxJY.framer-v-1bops5h .framer-1wrta6w { left: 0px; right: 0px; top: 10px; width: unset; }",
    ".framer-pKxJY.framer-v-1189kxx .framer-arm4gs, .framer-pKxJY.framer-v-1bops5h .framer-arm4gs { bottom: 9px; left: unset; right: 0px; top: unset; width: 80px; }",
    ".framer-pKxJY.framer-v-bu4rp9 .framer-1wrta6w, .framer-pKxJY.framer-v-bu4rp9 .framer-arm4gs, .framer-pKxJY.framer-v-vfy297.hover .framer-1wrta6w, .framer-pKxJY.framer-v-vfy297.hover .framer-arm4gs { left: calc(50.00000000000002% - 60px / 2); width: 60px; }",
    ".framer-pKxJY.framer-v-vfy297.hover .framer-1b11ot8 { align-content: center; align-items: center; }",
    ".framer-pKxJY.framer-v-1189kxx.hover .framer-1wrta6w { top: 1px; width: unset; }",
    ".framer-pKxJY.framer-v-1189kxx.hover .framer-arm4gs { bottom: 0px; left: 0px; top: unset; width: unset; }",
  ],
  je = Z(ho, uo, "framer-pKxJY"),
  Dr = je;
je.displayName = "Burger";
je.defaultProps = { height: 70, width: 90 };
q(je, {
  variant: {
    options: ["NTYtIt93q", "zvMrWDW6H", "egxSLp2Po", "mEGlmYAyX"],
    optionTitles: ["Close", "Open", "Open Static", "Close Static"],
    title: "Variant",
    type: d.Enum,
  },
  H0nqU18FJ: { title: "Click", type: d.EventHandler },
});
$(je, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var xo = M(Dr),
  vo = M(ke),
  bo = M(Re),
  wo = [
    "pf7l0mDvf",
    "kxLRK29mM",
    "NmCLZSJXV",
    "kkdwTu8AP",
    "HvbW3t5V1",
    "Ta8is6OGp",
  ],
  Co = "framer-AaU1v",
  ko = {
    HvbW3t5V1: "framer-v-oqce9y",
    kkdwTu8AP: "framer-v-1izab6g",
    kxLRK29mM: "framer-v-169z5jg",
    NmCLZSJXV: "framer-v-d0s1xf",
    pf7l0mDvf: "framer-v-t5qz50",
    Ta8is6OGp: "framer-v-ogljww",
  };
function fe(r, ...o) {
  let i = {};
  return o?.forEach((n) => n && Object.assign(i, r[n])), i;
}
var Io = { bounce: 0, delay: 0, duration: 0.8, type: "spring" },
  Uo = ({ value: r, children: o }) => {
    let i = ne(P),
      n = r ?? i.transition,
      s = oe(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: s, children: o });
  },
  So = t.create(m),
  To = {
    "Desktop - Closed": "kxLRK29mM",
    "Desktop - Open": "pf7l0mDvf",
    "Phone - Closed": "Ta8is6OGp",
    "Phone - Open": "HvbW3t5V1",
    "Tablet - Closed": "kkdwTu8AP",
    "Tablet - Open": "NmCLZSJXV",
  },
  Fo = ({ height: r, id: o, linkCursor: i, width: n, ...s }) => ({
    ...s,
    variant: To[s.variant] ?? s.variant ?? "pf7l0mDvf",
    Vk_BmdEcV: i ?? s.Vk_BmdEcV,
  }),
  Ao = (r, o) =>
    r.layoutDependency ? o.join("-") + r.layoutDependency : o.join("-"),
  No = O(function (r, o) {
    let i = j(null),
      n = o ?? i,
      s = K(),
      { activeLocale: w, setLocale: C } = Q(),
      a = se(),
      {
        style: S,
        className: u,
        layoutId: V,
        variant: R,
        Vk_BmdEcV: F,
        ...y
      } = Fo(r),
      {
        baseVariant: h,
        classNames: Y,
        clearLoadingGesture: v,
        gestureHandlers: J,
        gestureVariant: N,
        isLoading: G,
        setGestureState: me,
        setVariant: L,
        variants: B,
      } = le({
        cycleOrder: wo,
        defaultVariant: "pf7l0mDvf",
        ref: n,
        variant: R,
        variantClassNames: ko,
      }),
      l = Ao(r, B),
      { activeVariantCallback: k, delay: te } = Se(h),
      ae = k(async (...ve) => {
        L("kxLRK29mM");
      }),
      ye = k(async (...ve) => {
        L("pf7l0mDvf");
      }),
      xe = k(async (...ve) => {
        L("kkdwTu8AP");
      }),
      Ne = k(async (...ve) => {
        L("NmCLZSJXV");
      }),
      Le = k(async (...ve) => {
        L("Ta8is6OGp");
      }),
      pe = k(async (...ve) => {
        L("HvbW3t5V1");
      }),
      H = k(async (...ve) => {
        await te(() => L("kxLRK29mM"), 100);
      }),
      f = k(async (...ve) => {
        await te(() => L("kkdwTu8AP"), 100);
      }),
      he = k(async (...ve) => {
        await te(() => L("Ta8is6OGp"), 100);
      }),
      We = k(async (...ve) => {
        L("kxLRK29mM");
      }),
      g = D(Co, ...[ur, Yt, Zt, ar, jt, xr, Kt, Pt, ir, fr]),
      kr = () => h !== "Ta8is6OGp";
    return e(X, {
      id: V ?? s,
      children: e(So, {
        animate: B,
        initial: !1,
        children: e(Uo, {
          value: Io,
          children: p(t.nav, {
            ...y,
            ...J,
            className: D(g, "framer-t5qz50", u, Y),
            "data-framer-name": "Desktop - Open",
            layoutDependency: l,
            layoutId: "pf7l0mDvf",
            ref: n,
            style: { ...S },
            ...fe(
              {
                HvbW3t5V1: { "data-framer-name": "Phone - Open" },
                kkdwTu8AP: { "data-framer-name": "Tablet - Closed" },
                kxLRK29mM: { "data-framer-name": "Desktop - Closed" },
                NmCLZSJXV: { "data-framer-name": "Tablet - Open" },
                Ta8is6OGp: { "data-framer-name": "Phone - Closed" },
              },
              h,
              N,
            ),
            children: [
              p(t.div, {
                className: "framer-1pefgc8",
                "data-framer-name": "Navigation Bar",
                layoutDependency: l,
                layoutId: "DMKdsjYSt",
                children: [
                  kr() &&
                    p(t.div, {
                      className: "framer-15vqci1",
                      "data-framer-cursor": F,
                      "data-framer-name": "Social",
                      layoutDependency: l,
                      layoutId: "EHVmIWsyt",
                      children: [
                        e(U, {
                          __fromCanvasComponent: !0,
                          children: e(m, {
                            children: e(t.h6, {
                              className: "framer-styles-preset-hc6tm6",
                              "data-styles-preset": "W8TTjiBap",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-1w1cjl5, var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255)))",
                              },
                              children: e(A, {
                                href: "https://www.whatsapp.com",
                                motionChild: !0,
                                nodeId: "kx2GY1JrG",
                                openInNewTab: !0,
                                scopeId: "fARCSp3mp",
                                smoothScroll: !1,
                                children: e(t.a, {
                                  className: "framer-styles-preset-zgmrxo",
                                  "data-styles-preset": "JCbHf0adC",
                                  children: "WA",
                                }),
                              }),
                            }),
                          }),
                          className: "framer-1ld0jkd",
                          "data-framer-name": "Social 1",
                          fonts: ["Inter"],
                          layoutDependency: l,
                          layoutId: "kx2GY1JrG",
                          style: {
                            "--extracted-1w1cjl5":
                              "var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255))",
                            "--framer-paragraph-spacing": "0px",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(U, {
                          __fromCanvasComponent: !0,
                          children: e(m, {
                            children: e(t.h6, {
                              className: "framer-styles-preset-hc6tm6",
                              "data-styles-preset": "W8TTjiBap",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-1w1cjl5, var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255)))",
                              },
                              children: e(A, {
                                href: "https://www.x.com",
                                motionChild: !0,
                                nodeId: "h821cZKj1",
                                openInNewTab: !0,
                                scopeId: "fARCSp3mp",
                                smoothScroll: !1,
                                children: e(t.a, {
                                  className: "framer-styles-preset-zgmrxo",
                                  "data-styles-preset": "JCbHf0adC",
                                  children: "X",
                                }),
                              }),
                            }),
                          }),
                          className: "framer-sqkynj",
                          "data-framer-name": "Social 2",
                          fonts: ["Inter"],
                          layoutDependency: l,
                          layoutId: "h821cZKj1",
                          style: {
                            "--extracted-1w1cjl5":
                              "var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255))",
                            "--framer-paragraph-spacing": "0px",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(U, {
                          __fromCanvasComponent: !0,
                          children: e(m, {
                            children: e(t.h6, {
                              className: "framer-styles-preset-hc6tm6",
                              "data-styles-preset": "W8TTjiBap",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-1w1cjl5, var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255)))",
                              },
                              children: e(A, {
                                href: "https://www.instagram.com",
                                motionChild: !0,
                                nodeId: "BMCLyKJ2f",
                                openInNewTab: !0,
                                scopeId: "fARCSp3mp",
                                smoothScroll: !1,
                                children: e(t.a, {
                                  className: "framer-styles-preset-zgmrxo",
                                  "data-styles-preset": "JCbHf0adC",
                                  children: "IG",
                                }),
                              }),
                            }),
                          }),
                          className: "framer-qmonmb",
                          "data-framer-name": "Social 3",
                          fonts: ["Inter"],
                          layoutDependency: l,
                          layoutId: "BMCLyKJ2f",
                          style: {
                            "--extracted-1w1cjl5":
                              "var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255))",
                            "--framer-paragraph-spacing": "0px",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(U, {
                          __fromCanvasComponent: !0,
                          children: e(m, {
                            children: e(t.h6, {
                              className: "framer-styles-preset-hc6tm6",
                              "data-styles-preset": "W8TTjiBap",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-1w1cjl5, var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255)))",
                              },
                              children: e(A, {
                                href: "www.linkedin.com",
                                motionChild: !0,
                                nodeId: "zseR7DXNo",
                                openInNewTab: !0,
                                scopeId: "fARCSp3mp",
                                smoothScroll: !1,
                                children: e(t.a, {
                                  className: "framer-styles-preset-zgmrxo",
                                  "data-styles-preset": "JCbHf0adC",
                                  children: "LI",
                                }),
                              }),
                            }),
                          }),
                          className: "framer-jhpx75",
                          "data-framer-name": "Social 4",
                          fonts: ["Inter"],
                          layoutDependency: l,
                          layoutId: "zseR7DXNo",
                          style: {
                            "--extracted-1w1cjl5":
                              "var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255))",
                            "--framer-paragraph-spacing": "0px",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(U, {
                          __fromCanvasComponent: !0,
                          children: e(m, {
                            children: e(t.h6, {
                              className: "framer-styles-preset-hc6tm6",
                              "data-styles-preset": "W8TTjiBap",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-1w1cjl5, var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255)))",
                              },
                              children: e(A, {
                                href: "mailto:hejj@arpeggio.com",
                                motionChild: !0,
                                nodeId: "w1OBr9JCf",
                                openInNewTab: !0,
                                scopeId: "fARCSp3mp",
                                smoothScroll: !1,
                                children: e(t.a, {
                                  className: "framer-styles-preset-zgmrxo",
                                  "data-styles-preset": "JCbHf0adC",
                                  children: "EMAIL",
                                }),
                              }),
                            }),
                          }),
                          className: "framer-bxn212",
                          "data-framer-name": "EMAIL",
                          fonts: ["Inter"],
                          layoutDependency: l,
                          layoutId: "w1OBr9JCf",
                          style: {
                            "--extracted-1w1cjl5":
                              "var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255))",
                            "--framer-paragraph-spacing": "0px",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  e(I, {
                    height: 70,
                    width: "70px",
                    y: (a?.y || 0) + 0 + 0 + 0,
                    children: e(_, {
                      className: "framer-qqdj14-container",
                      layoutDependency: l,
                      layoutId: "Umq2aPfGK-container",
                      nodeId: "Umq2aPfGK",
                      rendersWithMotion: !0,
                      scopeId: "fARCSp3mp",
                      children: e(Dr, {
                        H0nqU18FJ: ae,
                        height: "100%",
                        id: "Umq2aPfGK",
                        layoutId: "Umq2aPfGK",
                        style: { height: "100%", width: "100%" },
                        variant: "NTYtIt93q",
                        width: "100%",
                        ...fe(
                          {
                            HvbW3t5V1: { H0nqU18FJ: Le, variant: "mEGlmYAyX" },
                            kkdwTu8AP: { H0nqU18FJ: Ne, variant: "egxSLp2Po" },
                            kxLRK29mM: { H0nqU18FJ: ye, variant: "zvMrWDW6H" },
                            NmCLZSJXV: { H0nqU18FJ: xe, variant: "mEGlmYAyX" },
                            Ta8is6OGp: { H0nqU18FJ: pe, variant: "egxSLp2Po" },
                          },
                          h,
                          N,
                        ),
                      }),
                    }),
                  }),
                ],
              }),
              e(t.div, {
                className: "framer-1dkzg5z",
                "data-framer-name": "Content",
                layoutDependency: l,
                layoutId: "FwoqF2oY_",
                children:
                  kr() &&
                  p(t.div, {
                    className: "framer-1jrrx38",
                    "data-framer-name": "Top",
                    layoutDependency: l,
                    layoutId: "gcz4faXVm",
                    style: { opacity: 1 },
                    variants: {
                      HvbW3t5V1: { opacity: 1 },
                      kkdwTu8AP: { opacity: 0 },
                    },
                    children: [
                      p(t.div, {
                        className: "framer-1dopbv8",
                        "data-framer-name": "Timezone",
                        layoutDependency: l,
                        layoutId: "TilBw1_v1",
                        style: {
                          filter: "blur(0px)",
                          opacity: 1,
                          WebkitFilter: "blur(0px)",
                        },
                        variants: {
                          HvbW3t5V1: { opacity: 1 },
                          kkdwTu8AP: { opacity: 1 },
                          kxLRK29mM: {
                            filter: "blur(10px)",
                            opacity: 0,
                            WebkitFilter: "blur(10px)",
                          },
                          NmCLZSJXV: { opacity: 1 },
                        },
                        children: [
                          e(U, {
                            __fromCanvasComponent: !0,
                            children: e(m, {
                              children: p(t.h2, {
                                className: "framer-styles-preset-yjtkzw",
                                "data-styles-preset": "wpH_DEAc9",
                                style: {
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--extracted-1of0zx5, var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255)))",
                                },
                                children: [
                                  "We are based in ",
                                  e(t.span, {
                                    style: {
                                      "--framer-text-color":
                                        "var(--extracted-1qn201a, var(--token-d8014220-2a78-4e07-9390-e464885c7a19, rgb(255, 68, 0)))",
                                    },
                                    children: "Milano",
                                  }),
                                  " and work remotely.",
                                ],
                              }),
                            }),
                            className: "framer-n6q4up",
                            "data-framer-name": "Status",
                            fonts: ["Inter"],
                            layoutDependency: l,
                            layoutId: "IK6XkCWHB",
                            style: {
                              "--extracted-1of0zx5":
                                "var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255))",
                              "--extracted-1qn201a":
                                "var(--token-d8014220-2a78-4e07-9390-e464885c7a19, rgb(255, 68, 0))",
                              "--framer-paragraph-spacing": "0px",
                              opacity: 1,
                            },
                            variants: {
                              HvbW3t5V1: {
                                "--extracted-1vqrutl":
                                  "var(--token-d8014220-2a78-4e07-9390-e464885c7a19, rgb(255, 68, 0))",
                                "--extracted-1w1cjl5":
                                  "var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255))",
                                opacity: 1,
                              },
                              kkdwTu8AP: { opacity: 1 },
                              kxLRK29mM: { opacity: 0 },
                              NmCLZSJXV: { opacity: 1 },
                            },
                            verticalAlignment: "center",
                            withExternalLayout: !0,
                            ...fe(
                              {
                                HvbW3t5V1: {
                                  children: e(m, {
                                    children: p(t.h6, {
                                      className: "framer-styles-preset-188e0sw",
                                      "data-styles-preset": "NSeYnuIp_",
                                      style: {
                                        "--framer-text-alignment": "right",
                                        "--framer-text-color":
                                          "var(--extracted-1w1cjl5, var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255)))",
                                      },
                                      children: [
                                        "We are based in ",
                                        e(t.span, {
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-1vqrutl, var(--token-d8014220-2a78-4e07-9390-e464885c7a19, rgb(255, 68, 0)))",
                                          },
                                          children: "Milano",
                                        }),
                                        " and work remotely.",
                                      ],
                                    }),
                                  }),
                                },
                              },
                              h,
                              N,
                            ),
                          }),
                          p(t.div, {
                            className: "framer-s2it6q",
                            "data-framer-name": "Timezone",
                            layoutDependency: l,
                            layoutId: "fjIM0Nxcl",
                            style: { opacity: 1 },
                            variants: {
                              HvbW3t5V1: { opacity: 1 },
                              kkdwTu8AP: { opacity: 1 },
                              kxLRK29mM: { opacity: 0 },
                              NmCLZSJXV: { opacity: 1 },
                            },
                            children: [
                              e(I, {
                                children: e(_, {
                                  className: "framer-bdjaf-container",
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  layoutDependency: l,
                                  layoutId: "OVt1HqxoF-container",
                                  nodeId: "OVt1HqxoF",
                                  rendersWithMotion: !0,
                                  scopeId: "fARCSp3mp",
                                  children: e(ke, {
                                    font: {
                                      fontFamily:
                                        '".SFNSDisplay-Semibold", "SFProDisplay-Semibold", "SFUIDisplay-Semibold", ".SFUIDisplay-Semibold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                      fontSize: "60px",
                                      fontWeight: 599,
                                      letterSpacing: "-0.03em",
                                      lineHeight: "1.1em",
                                    },
                                    height: "100%",
                                    hideSeconds: !1,
                                    id: "OVt1HqxoF",
                                    layoutId: "OVt1HqxoF",
                                    selectedTimezone: "London (UTC+0)",
                                    style: { width: "100%" },
                                    textAlign: "left",
                                    textColor:
                                      "var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255))",
                                    use24HourFormat: !0,
                                    width: "100%",
                                    ...fe(
                                      {
                                        HvbW3t5V1: {
                                          font: {
                                            fontFamily:
                                              '".SFNSDisplay-Semibold", "SFProDisplay-Semibold", "SFUIDisplay-Semibold", ".SFUIDisplay-Semibold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                            fontSize: "40px",
                                            fontWeight: 599,
                                            letterSpacing: "-0.03em",
                                            lineHeight: "1.1em",
                                          },
                                          textAlign: "right",
                                        },
                                      },
                                      h,
                                      N,
                                    ),
                                  }),
                                }),
                              }),
                              e(U, {
                                __fromCanvasComponent: !0,
                                children: e(m, {
                                  children: e(t.p, {
                                    className: "framer-styles-preset-yb1zsz",
                                    "data-styles-preset": "lCvrOezp8",
                                    style: {
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255)))",
                                    },
                                    children: "current Time zone (GMT+1)",
                                  }),
                                }),
                                className: "framer-2fnc11",
                                "data-framer-name": "Time zone (GMT+1)",
                                fonts: ["Inter"],
                                layoutDependency: l,
                                layoutId: "CHYWcEO_X",
                                style: {
                                  "--extracted-r6o4lv":
                                    "var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255))",
                                  "--framer-paragraph-spacing": "0px",
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      p(t.div, {
                        className: "framer-tkgwo7",
                        "data-framer-name": "Main Menu",
                        layoutDependency: l,
                        layoutId: "bMWegsH8B",
                        style: {
                          filter: "blur(0px)",
                          opacity: 1,
                          WebkitFilter: "blur(0px)",
                        },
                        variants: {
                          HvbW3t5V1: { opacity: 1 },
                          kkdwTu8AP: { opacity: 0 },
                          kxLRK29mM: {
                            filter: "blur(10px)",
                            opacity: 0,
                            WebkitFilter: "blur(10px)",
                          },
                          NmCLZSJXV: { opacity: 1 },
                        },
                        children: [
                          e(U, {
                            __fromCanvasComponent: !0,
                            children: e(m, {
                              children: e(t.h2, {
                                className: "framer-styles-preset-fw1ido",
                                "data-styles-preset": "fOWtN_pvX",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-1of0zx5, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                                },
                                children: e(A, {
                                  href: {
                                    hash: ":Yp1au__gv",
                                    webPageId: "augiA20Il",
                                  },
                                  motionChild: !0,
                                  nodeId: "tckU6HQw2",
                                  openInNewTab: !1,
                                  scopeId: "fARCSp3mp",
                                  smoothScroll: !0,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-17nxumf",
                                    "data-styles-preset": "TycGCDSG9",
                                    children: "Home",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-1wnevsl",
                            "data-highlight": !0,
                            fonts: ["Inter"],
                            layoutDependency: l,
                            layoutId: "tckU6HQw2",
                            onTap: H,
                            style: {
                              "--extracted-1of0zx5":
                                "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                              opacity: 1,
                            },
                            variants: {
                              HvbW3t5V1: {
                                "--extracted-a0htzi":
                                  "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                                opacity: 1,
                              },
                              kkdwTu8AP: { opacity: 1 },
                              kxLRK29mM: { opacity: 0 },
                              NmCLZSJXV: { opacity: 1 },
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...fe(
                              {
                                HvbW3t5V1: {
                                  children: e(m, {
                                    children: e(t.h3, {
                                      className: "framer-styles-preset-1vubeqm",
                                      "data-styles-preset": "AY9lM9fVW",
                                      style: {
                                        "--framer-text-color":
                                          "var(--extracted-a0htzi, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                                      },
                                      children: e(A, {
                                        href: { webPageId: "augiA20Il" },
                                        motionChild: !0,
                                        nodeId: "tckU6HQw2",
                                        openInNewTab: !1,
                                        scopeId: "fARCSp3mp",
                                        smoothScroll: !0,
                                        children: e(t.a, {
                                          className:
                                            "framer-styles-preset-17nxumf",
                                          "data-styles-preset": "TycGCDSG9",
                                          children: "Home",
                                        }),
                                      }),
                                    }),
                                  }),
                                  onTap: he,
                                },
                                NmCLZSJXV: { onTap: f },
                              },
                              h,
                              N,
                            ),
                          }),
                          e(U, {
                            __fromCanvasComponent: !0,
                            children: e(m, {
                              children: e(t.h2, {
                                className: "framer-styles-preset-fw1ido",
                                "data-styles-preset": "fOWtN_pvX",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-1of0zx5, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                                },
                                children: e(A, {
                                  href: { webPageId: "rYcPcLFex" },
                                  motionChild: !0,
                                  nodeId: "yuXCyjfER",
                                  openInNewTab: !1,
                                  scopeId: "fARCSp3mp",
                                  smoothScroll: !0,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-17nxumf",
                                    "data-styles-preset": "TycGCDSG9",
                                    children: "About",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-1tehs81",
                            "data-highlight": !0,
                            fonts: ["Inter"],
                            layoutDependency: l,
                            layoutId: "yuXCyjfER",
                            onTap: H,
                            style: {
                              "--extracted-1of0zx5":
                                "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                              opacity: 1,
                            },
                            variants: {
                              HvbW3t5V1: {
                                "--extracted-a0htzi":
                                  "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                                opacity: 1,
                              },
                              kkdwTu8AP: { opacity: 1 },
                              kxLRK29mM: { opacity: 0 },
                              NmCLZSJXV: { opacity: 1 },
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...fe(
                              {
                                HvbW3t5V1: {
                                  children: e(m, {
                                    children: e(t.h3, {
                                      className: "framer-styles-preset-1vubeqm",
                                      "data-styles-preset": "AY9lM9fVW",
                                      style: {
                                        "--framer-text-color":
                                          "var(--extracted-a0htzi, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                                      },
                                      children: e(A, {
                                        href: { webPageId: "rYcPcLFex" },
                                        motionChild: !0,
                                        nodeId: "yuXCyjfER",
                                        openInNewTab: !1,
                                        scopeId: "fARCSp3mp",
                                        smoothScroll: !0,
                                        children: e(t.a, {
                                          className:
                                            "framer-styles-preset-17nxumf",
                                          "data-styles-preset": "TycGCDSG9",
                                          children: "About",
                                        }),
                                      }),
                                    }),
                                  }),
                                  onTap: he,
                                },
                                NmCLZSJXV: { onTap: f },
                              },
                              h,
                              N,
                            ),
                          }),
                          e(U, {
                            __fromCanvasComponent: !0,
                            children: e(m, {
                              children: e(t.h2, {
                                className: "framer-styles-preset-fw1ido",
                                "data-styles-preset": "fOWtN_pvX",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-1of0zx5, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                                },
                                children: e(A, {
                                  href: { webPageId: "j2fBQXPoP" },
                                  motionChild: !0,
                                  nodeId: "K4xJVgheA",
                                  openInNewTab: !1,
                                  scopeId: "fARCSp3mp",
                                  smoothScroll: !0,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-17nxumf",
                                    "data-styles-preset": "TycGCDSG9",
                                    children: "Work",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-1km2yib",
                            "data-highlight": !0,
                            fonts: ["Inter"],
                            layoutDependency: l,
                            layoutId: "K4xJVgheA",
                            onTap: H,
                            style: {
                              "--extracted-1of0zx5":
                                "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                              opacity: 1,
                            },
                            variants: {
                              HvbW3t5V1: {
                                "--extracted-a0htzi":
                                  "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                                opacity: 1,
                              },
                              kkdwTu8AP: { opacity: 1 },
                              kxLRK29mM: { opacity: 0 },
                              NmCLZSJXV: { opacity: 1 },
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...fe(
                              {
                                HvbW3t5V1: {
                                  children: e(m, {
                                    children: e(t.h3, {
                                      className: "framer-styles-preset-1vubeqm",
                                      "data-styles-preset": "AY9lM9fVW",
                                      style: {
                                        "--framer-text-color":
                                          "var(--extracted-a0htzi, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                                      },
                                      children: e(A, {
                                        href: { webPageId: "j2fBQXPoP" },
                                        motionChild: !0,
                                        nodeId: "K4xJVgheA",
                                        openInNewTab: !1,
                                        scopeId: "fARCSp3mp",
                                        smoothScroll: !0,
                                        children: e(t.a, {
                                          className:
                                            "framer-styles-preset-17nxumf",
                                          "data-styles-preset": "TycGCDSG9",
                                          children: "Work",
                                        }),
                                      }),
                                    }),
                                  }),
                                  onTap: he,
                                },
                                NmCLZSJXV: { onTap: f },
                              },
                              h,
                              N,
                            ),
                          }),
                          e(U, {
                            __fromCanvasComponent: !0,
                            children: e(m, {
                              children: e(t.h2, {
                                className: "framer-styles-preset-fw1ido",
                                "data-styles-preset": "fOWtN_pvX",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-1of0zx5, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                                },
                                children: e(A, {
                                  href: {
                                    hash: ":wD8d_0wTl",
                                    webPageId: "augiA20Il",
                                  },
                                  motionChild: !0,
                                  nodeId: "GXRnAaRyK",
                                  openInNewTab: !1,
                                  scopeId: "fARCSp3mp",
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-17nxumf",
                                    "data-styles-preset": "TycGCDSG9",
                                    children: "Membership",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-1f1nyzy",
                            "data-highlight": !0,
                            fonts: ["Inter"],
                            layoutDependency: l,
                            layoutId: "GXRnAaRyK",
                            onTap: H,
                            style: {
                              "--extracted-1of0zx5":
                                "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                              opacity: 1,
                            },
                            variants: {
                              HvbW3t5V1: {
                                "--extracted-a0htzi":
                                  "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                                opacity: 1,
                              },
                              kkdwTu8AP: { opacity: 1 },
                              kxLRK29mM: { opacity: 0 },
                              NmCLZSJXV: { opacity: 1 },
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...fe(
                              {
                                HvbW3t5V1: {
                                  children: e(m, {
                                    children: e(t.h3, {
                                      className: "framer-styles-preset-1vubeqm",
                                      "data-styles-preset": "AY9lM9fVW",
                                      style: {
                                        "--framer-text-color":
                                          "var(--extracted-a0htzi, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                                      },
                                      children: e(A, {
                                        href: {
                                          hash: ":wD8d_0wTl",
                                          webPageId: "augiA20Il",
                                        },
                                        motionChild: !0,
                                        nodeId: "GXRnAaRyK",
                                        openInNewTab: !1,
                                        scopeId: "fARCSp3mp",
                                        smoothScroll: !1,
                                        children: e(t.a, {
                                          className:
                                            "framer-styles-preset-17nxumf",
                                          "data-styles-preset": "TycGCDSG9",
                                          children: "Membership",
                                        }),
                                      }),
                                    }),
                                  }),
                                  onTap: he,
                                },
                                NmCLZSJXV: { onTap: f },
                              },
                              h,
                              N,
                            ),
                          }),
                          e(U, {
                            __fromCanvasComponent: !0,
                            children: e(m, {
                              children: e(t.h2, {
                                className: "framer-styles-preset-fw1ido",
                                "data-styles-preset": "fOWtN_pvX",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-1of0zx5, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                                },
                                children: e(A, {
                                  href: { webPageId: "CPRcJt5dV" },
                                  motionChild: !0,
                                  nodeId: "Vh9mhbtGg",
                                  openInNewTab: !1,
                                  scopeId: "fARCSp3mp",
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-17nxumf",
                                    "data-styles-preset": "TycGCDSG9",
                                    children: "Journal",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-wnjfxb",
                            "data-highlight": !0,
                            fonts: ["Inter"],
                            layoutDependency: l,
                            layoutId: "Vh9mhbtGg",
                            onTap: H,
                            style: {
                              "--extracted-1of0zx5":
                                "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                              opacity: 1,
                            },
                            variants: {
                              HvbW3t5V1: {
                                "--extracted-a0htzi":
                                  "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                                opacity: 1,
                              },
                              kkdwTu8AP: { opacity: 1 },
                              kxLRK29mM: { opacity: 0 },
                              NmCLZSJXV: { opacity: 1 },
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...fe(
                              {
                                HvbW3t5V1: {
                                  children: e(m, {
                                    children: e(t.h3, {
                                      className: "framer-styles-preset-1vubeqm",
                                      "data-styles-preset": "AY9lM9fVW",
                                      style: {
                                        "--framer-text-color":
                                          "var(--extracted-a0htzi, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                                      },
                                      children: e(A, {
                                        href: { webPageId: "CPRcJt5dV" },
                                        motionChild: !0,
                                        nodeId: "Vh9mhbtGg",
                                        openInNewTab: !1,
                                        scopeId: "fARCSp3mp",
                                        smoothScroll: !1,
                                        children: e(t.a, {
                                          className:
                                            "framer-styles-preset-17nxumf",
                                          "data-styles-preset": "TycGCDSG9",
                                          children: "Journal",
                                        }),
                                      }),
                                    }),
                                  }),
                                  onTap: he,
                                },
                                NmCLZSJXV: { onTap: f },
                              },
                              h,
                              N,
                            ),
                          }),
                          e(U, {
                            __fromCanvasComponent: !0,
                            children: e(m, {
                              children: e(t.h2, {
                                className: "framer-styles-preset-fw1ido",
                                "data-styles-preset": "fOWtN_pvX",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-1of0zx5, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                                },
                                children: e(A, {
                                  href: { webPageId: "LP__oFZZq" },
                                  motionChild: !0,
                                  nodeId: "x8evlqBam",
                                  openInNewTab: !1,
                                  scopeId: "fARCSp3mp",
                                  smoothScroll: !0,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-17nxumf",
                                    "data-styles-preset": "TycGCDSG9",
                                    children: "Contact",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-1tojfs9",
                            "data-highlight": !0,
                            fonts: ["Inter"],
                            layoutDependency: l,
                            layoutId: "x8evlqBam",
                            onTap: H,
                            style: {
                              "--extracted-1of0zx5":
                                "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                              opacity: 1,
                            },
                            variants: {
                              HvbW3t5V1: {
                                "--extracted-a0htzi":
                                  "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                                opacity: 1,
                              },
                              kkdwTu8AP: { opacity: 1 },
                              kxLRK29mM: { opacity: 0 },
                              NmCLZSJXV: { opacity: 1 },
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...fe(
                              {
                                HvbW3t5V1: {
                                  children: e(m, {
                                    children: e(t.h3, {
                                      className: "framer-styles-preset-1vubeqm",
                                      "data-styles-preset": "AY9lM9fVW",
                                      style: {
                                        "--framer-text-color":
                                          "var(--extracted-a0htzi, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                                      },
                                      children: e(A, {
                                        href: { webPageId: "LP__oFZZq" },
                                        motionChild: !0,
                                        nodeId: "x8evlqBam",
                                        openInNewTab: !1,
                                        scopeId: "fARCSp3mp",
                                        smoothScroll: !0,
                                        children: e(t.a, {
                                          className:
                                            "framer-styles-preset-17nxumf",
                                          "data-styles-preset": "TycGCDSG9",
                                          children: "Contact",
                                        }),
                                      }),
                                    }),
                                  }),
                                  onTap: he,
                                },
                                NmCLZSJXV: { onTap: f },
                              },
                              h,
                              N,
                            ),
                          }),
                        ],
                      }),
                      p(t.div, {
                        className: "framer-xpfv55",
                        "data-framer-name": "Legal",
                        layoutDependency: l,
                        layoutId: "zVWFyprRl",
                        style: { opacity: 1 },
                        variants: {
                          HvbW3t5V1: { opacity: 1 },
                          kkdwTu8AP: { opacity: 0 },
                          kxLRK29mM: { opacity: 0 },
                          NmCLZSJXV: { opacity: 1 },
                        },
                        children: [
                          e(U, {
                            __fromCanvasComponent: !0,
                            children: e(m, {
                              children: e(t.h5, {
                                className: "framer-styles-preset-g90o1d",
                                "data-styles-preset": "YePl36X5E",
                                style: {
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--extracted-1lwpl3i, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                                },
                                children: e(A, {
                                  href: {
                                    hash: ":uwnWVbybO",
                                    pathVariables: {
                                      N6VBnBY6z: "privacy-policy",
                                    },
                                    unresolvedPathSlugs: {
                                      N6VBnBY6z: {
                                        collectionId: "wlyQIkA8F",
                                        collectionItemId: "Y5JGFTGTo",
                                      },
                                    },
                                    webPageId: "uW6MG5h4q",
                                  },
                                  motionChild: !0,
                                  nodeId: "nSsvnDfBA",
                                  openInNewTab: !1,
                                  scopeId: "fARCSp3mp",
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-17nxumf",
                                    "data-styles-preset": "TycGCDSG9",
                                    children: "Privacy Policy",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-18855g8",
                            "data-highlight": !0,
                            fonts: ["Inter"],
                            layoutDependency: l,
                            layoutId: "nSsvnDfBA",
                            onTap: We,
                            style: {
                              "--extracted-1lwpl3i":
                                "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                            },
                            variants: {
                              HvbW3t5V1: {
                                "--extracted-r6o4lv":
                                  "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                              },
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...fe(
                              {
                                HvbW3t5V1: {
                                  children: e(m, {
                                    children: e(t.p, {
                                      className: "framer-styles-preset-1x5nt9t",
                                      "data-styles-preset": "o_UxbraPE",
                                      style: {
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                                      },
                                      children: e(A, {
                                        href: {
                                          hash: ":uwnWVbybO",
                                          pathVariables: {
                                            N6VBnBY6z: "privacy-policy",
                                          },
                                          unresolvedPathSlugs: {
                                            N6VBnBY6z: {
                                              collectionId: "wlyQIkA8F",
                                              collectionItemId: "Y5JGFTGTo",
                                            },
                                          },
                                          webPageId: "uW6MG5h4q",
                                        },
                                        motionChild: !0,
                                        nodeId: "nSsvnDfBA",
                                        openInNewTab: !1,
                                        scopeId: "fARCSp3mp",
                                        smoothScroll: !1,
                                        children: e(t.a, {
                                          className:
                                            "framer-styles-preset-17nxumf",
                                          "data-styles-preset": "TycGCDSG9",
                                          children: "Privacy Policy",
                                        }),
                                      }),
                                    }),
                                  }),
                                  onTap: he,
                                },
                                NmCLZSJXV: { onTap: f },
                              },
                              h,
                              N,
                            ),
                          }),
                          e(U, {
                            __fromCanvasComponent: !0,
                            children: e(m, {
                              children: e(t.h5, {
                                className: "framer-styles-preset-g90o1d",
                                "data-styles-preset": "YePl36X5E",
                                style: {
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--extracted-1lwpl3i, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                                },
                                children: e(A, {
                                  href: {
                                    hash: ":uwnWVbybO",
                                    pathVariables: {
                                      N6VBnBY6z: "terms-of-service",
                                    },
                                    unresolvedPathSlugs: {
                                      N6VBnBY6z: {
                                        collectionId: "wlyQIkA8F",
                                        collectionItemId: "LOp6WH64j",
                                      },
                                    },
                                    webPageId: "uW6MG5h4q",
                                  },
                                  motionChild: !0,
                                  nodeId: "y2Avj_vH3",
                                  openInNewTab: !1,
                                  scopeId: "fARCSp3mp",
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-17nxumf",
                                    "data-styles-preset": "TycGCDSG9",
                                    children: "Terms of  Service",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-14mdvi9",
                            "data-highlight": !0,
                            fonts: ["Inter"],
                            layoutDependency: l,
                            layoutId: "y2Avj_vH3",
                            onTap: We,
                            style: {
                              "--extracted-1lwpl3i":
                                "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                            },
                            variants: {
                              HvbW3t5V1: {
                                "--extracted-r6o4lv":
                                  "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                              },
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...fe(
                              {
                                HvbW3t5V1: {
                                  children: e(m, {
                                    children: e(t.p, {
                                      className: "framer-styles-preset-1x5nt9t",
                                      "data-styles-preset": "o_UxbraPE",
                                      style: {
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                                      },
                                      children: e(A, {
                                        href: {
                                          hash: ":uwnWVbybO",
                                          pathVariables: {
                                            N6VBnBY6z: "terms-of-service",
                                          },
                                          unresolvedPathSlugs: {
                                            N6VBnBY6z: {
                                              collectionId: "wlyQIkA8F",
                                              collectionItemId: "LOp6WH64j",
                                            },
                                          },
                                          webPageId: "uW6MG5h4q",
                                        },
                                        motionChild: !0,
                                        nodeId: "y2Avj_vH3",
                                        openInNewTab: !1,
                                        scopeId: "fARCSp3mp",
                                        smoothScroll: !1,
                                        children: e(t.a, {
                                          className:
                                            "framer-styles-preset-17nxumf",
                                          "data-styles-preset": "TycGCDSG9",
                                          children: "Terms of  Service",
                                        }),
                                      }),
                                    }),
                                  }),
                                  onTap: he,
                                },
                                NmCLZSJXV: { onTap: f },
                              },
                              h,
                              N,
                            ),
                          }),
                          e(U, {
                            __fromCanvasComponent: !0,
                            children: e(m, {
                              children: e(t.h5, {
                                className: "framer-styles-preset-g90o1d",
                                "data-styles-preset": "YePl36X5E",
                                style: {
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--extracted-1lwpl3i, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                                },
                                children: e(A, {
                                  href: {
                                    hash: ":uwnWVbybO",
                                    pathVariables: { N6VBnBY6z: "disclaimer" },
                                    unresolvedPathSlugs: {
                                      N6VBnBY6z: {
                                        collectionId: "wlyQIkA8F",
                                        collectionItemId: "jvmWkz8vV",
                                      },
                                    },
                                    webPageId: "uW6MG5h4q",
                                  },
                                  motionChild: !0,
                                  nodeId: "x1oUKmbbG",
                                  openInNewTab: !1,
                                  scopeId: "fARCSp3mp",
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-17nxumf",
                                    "data-styles-preset": "TycGCDSG9",
                                    children: "Disclaimer",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-kuudbv",
                            "data-highlight": !0,
                            fonts: ["Inter"],
                            layoutDependency: l,
                            layoutId: "x1oUKmbbG",
                            onTap: We,
                            style: {
                              "--extracted-1lwpl3i":
                                "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                            },
                            variants: {
                              HvbW3t5V1: {
                                "--extracted-r6o4lv":
                                  "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                              },
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...fe(
                              {
                                HvbW3t5V1: {
                                  children: e(m, {
                                    children: e(t.p, {
                                      className: "framer-styles-preset-1x5nt9t",
                                      "data-styles-preset": "o_UxbraPE",
                                      style: {
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                                      },
                                      children: e(A, {
                                        href: {
                                          hash: ":uwnWVbybO",
                                          pathVariables: {
                                            N6VBnBY6z: "disclaimer",
                                          },
                                          unresolvedPathSlugs: {
                                            N6VBnBY6z: {
                                              collectionId: "wlyQIkA8F",
                                              collectionItemId: "jvmWkz8vV",
                                            },
                                          },
                                          webPageId: "uW6MG5h4q",
                                        },
                                        motionChild: !0,
                                        nodeId: "x1oUKmbbG",
                                        openInNewTab: !1,
                                        scopeId: "fARCSp3mp",
                                        smoothScroll: !1,
                                        children: e(t.a, {
                                          className:
                                            "framer-styles-preset-17nxumf",
                                          "data-styles-preset": "TycGCDSG9",
                                          children: "Disclaimer",
                                        }),
                                      }),
                                    }),
                                  }),
                                  onTap: he,
                                },
                                NmCLZSJXV: { onTap: f },
                              },
                              h,
                              N,
                            ),
                          }),
                          e(U, {
                            __fromCanvasComponent: !0,
                            children: e(m, {
                              children: e(t.h5, {
                                className: "framer-styles-preset-g90o1d",
                                "data-styles-preset": "YePl36X5E",
                                style: {
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--extracted-1lwpl3i, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                                },
                                children: e(A, {
                                  href: { webPageId: "Vr48t_zkp" },
                                  motionChild: !0,
                                  nodeId: "SpxxCdeGm",
                                  openInNewTab: !1,
                                  scopeId: "fARCSp3mp",
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-17nxumf",
                                    "data-styles-preset": "TycGCDSG9",
                                    children: "404",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-1g9g8l7",
                            "data-highlight": !0,
                            fonts: ["Inter"],
                            layoutDependency: l,
                            layoutId: "SpxxCdeGm",
                            onTap: We,
                            style: {
                              "--extracted-1lwpl3i":
                                "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                            },
                            variants: {
                              HvbW3t5V1: {
                                "--extracted-r6o4lv":
                                  "var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246))",
                              },
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...fe(
                              {
                                HvbW3t5V1: {
                                  children: e(m, {
                                    children: e(t.p, {
                                      className: "framer-styles-preset-1x5nt9t",
                                      "data-styles-preset": "o_UxbraPE",
                                      style: {
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, var(--token-f2a325e4-7975-47c7-b249-f75b512aa063, rgb(246, 246, 246)))",
                                      },
                                      children: e(A, {
                                        href: { webPageId: "Vr48t_zkp" },
                                        motionChild: !0,
                                        nodeId: "SpxxCdeGm",
                                        openInNewTab: !1,
                                        scopeId: "fARCSp3mp",
                                        smoothScroll: !1,
                                        children: e(t.a, {
                                          className:
                                            "framer-styles-preset-17nxumf",
                                          "data-styles-preset": "TycGCDSG9",
                                          children: "404",
                                        }),
                                      }),
                                    }),
                                  }),
                                  onTap: he,
                                },
                                NmCLZSJXV: { onTap: f },
                              },
                              h,
                              N,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
              e(t.div, {
                className: "framer-b1htub",
                "data-framer-name": "BG",
                layoutDependency: l,
                layoutId: "OQAu1icNO",
                style: {
                  backdropFilter: "blur(8px)",
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  WebkitBackdropFilter: "blur(8px)",
                },
                variants: {
                  kkdwTu8AP: {
                    backdropFilter: "none",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    WebkitBackdropFilter: "none",
                  },
                  Ta8is6OGp: {
                    backdropFilter: "none",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    WebkitBackdropFilter: "none",
                  },
                },
              }),
              e(I, {
                children: e(_, {
                  className: "framer-1nqak6z-container",
                  isAuthoredByUser: !0,
                  isModuleExternal: !0,
                  layoutDependency: l,
                  layoutId: "xc5BH4kto-container",
                  nodeId: "xc5BH4kto",
                  rendersWithMotion: !0,
                  scopeId: "fARCSp3mp",
                  children: e(Re, {
                    height: "100%",
                    id: "xc5BH4kto",
                    layoutId: "xc5BH4kto",
                    toggle: !0,
                    width: "100%",
                    ...fe(
                      {
                        kkdwTu8AP: { toggle: !1 },
                        kxLRK29mM: { toggle: !1 },
                        Ta8is6OGp: { toggle: !1 },
                      },
                      h,
                      N,
                    ),
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Lo = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-AaU1v.framer-1q3db90, .framer-AaU1v .framer-1q3db90 { display: block; }",
    ".framer-AaU1v.framer-t5qz50 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 70px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }",
    ".framer-AaU1v .framer-1pefgc8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px 40px 0px 40px; pointer-events: auto; position: relative; width: 100%; z-index: 1; }",
    ".framer-AaU1v .framer-15vqci1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: 70px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; z-index: 2; }",
    ".framer-AaU1v .framer-1ld0jkd, .framer-AaU1v .framer-sqkynj, .framer-AaU1v .framer-qmonmb, .framer-AaU1v .framer-jhpx75, .framer-AaU1v .framer-bxn212, .framer-AaU1v .framer-2fnc11 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    ".framer-AaU1v .framer-qqdj14-container { -webkit-user-select: none; flex: none; height: 70px; position: relative; user-select: none; width: 70px; z-index: 3; }",
    ".framer-AaU1v .framer-1dkzg5z { -webkit-user-select: none; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 40px 40px 0px 40px; pointer-events: auto; position: relative; user-select: none; width: 100%; z-index: 1; }",
    ".framer-AaU1v .framer-1jrrx38 { display: grid; flex: none; gap: 0px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: calc(var(--framer-viewport-height, 100vh) * 1); justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-AaU1v .framer-1dopbv8 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; grid-column: span 2; height: min-content; justify-content: flex-start; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-AaU1v .framer-n6q4up { -webkit-user-select: none; flex: none; height: auto; max-width: 700px; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-AaU1v .framer-s2it6q { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-AaU1v .framer-bdjaf-container { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; width: 100%; }",
    ".framer-AaU1v .framer-tkgwo7 { align-content: flex-end; align-items: flex-end; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; grid-column: span 2; height: min-content; justify-content: center; justify-self: end; overflow: hidden; padding: 0px 0px 32px 0px; position: relative; width: min-content; }",
    ".framer-AaU1v .framer-1wnevsl, .framer-AaU1v .framer-1tehs81, .framer-AaU1v .framer-1km2yib, .framer-AaU1v .framer-1f1nyzy, .framer-AaU1v .framer-wnjfxb, .framer-AaU1v .framer-1tojfs9, .framer-AaU1v .framer-18855g8, .framer-AaU1v .framer-14mdvi9, .framer-AaU1v .framer-kuudbv, .framer-AaU1v .framer-1g9g8l7 { -webkit-user-select: none; cursor: pointer; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    ".framer-AaU1v .framer-xpfv55 { align-content: flex-end; align-items: flex-end; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; grid-column: 1 / -1; height: min-content; justify-content: flex-start; justify-self: end; overflow: hidden; padding: 32px 8px 0px 0px; position: relative; width: 100%; }",
    ".framer-AaU1v .framer-b1htub { flex: none; height: calc(var(--framer-viewport-height, 100vh) * 1.06375); left: 0px; overflow: hidden; pointer-events: none; position: absolute; top: 0px; width: 100%; }",
    ".framer-AaU1v .framer-1nqak6z-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-AaU1v.framer-v-169z5jg .framer-1pefgc8 { -webkit-user-select: none; pointer-events: none; user-select: none; }",
    ".framer-AaU1v.framer-v-169z5jg .framer-15vqci1, .framer-AaU1v.framer-v-1izab6g .framer-qqdj14-container, .framer-AaU1v.framer-v-ogljww .framer-qqdj14-container { pointer-events: auto; }",
    ".framer-AaU1v.framer-v-169z5jg .framer-qqdj14-container { pointer-events: auto; z-index: unset; }",
    ".framer-AaU1v.framer-v-169z5jg .framer-1dkzg5z, .framer-AaU1v.framer-v-169z5jg .framer-1jrrx38, .framer-AaU1v.framer-v-1izab6g .framer-1dkzg5z { pointer-events: none; }",
    ".framer-AaU1v.framer-v-169z5jg .framer-b1htub { -webkit-user-select: none; height: 1px; top: -1px; user-select: none; }",
    ".framer-AaU1v.framer-v-d0s1xf.framer-t5qz50, .framer-AaU1v.framer-v-1izab6g.framer-t5qz50 { width: 810px; }",
    ".framer-AaU1v.framer-v-d0s1xf .framer-1pefgc8 { padding: 0px 32px 0px 32px; }",
    ".framer-AaU1v.framer-v-d0s1xf .framer-1dkzg5z { padding: 32px 32px 0px 32px; }",
    ".framer-AaU1v.framer-v-d0s1xf .framer-1jrrx38 { grid-template-columns: repeat(2, minmax(50px, 1fr)); }",
    ".framer-AaU1v.framer-v-d0s1xf .framer-1dopbv8 { grid-column: unset; order: 0; }",
    ".framer-AaU1v.framer-v-d0s1xf .framer-n6q4up { max-width: unset; }",
    ".framer-AaU1v.framer-v-d0s1xf .framer-tkgwo7 { grid-column: unset; order: 1; }",
    ".framer-AaU1v.framer-v-d0s1xf .framer-xpfv55 { order: 2; padding: 32px 0px 0px 0px; }",
    ".framer-AaU1v.framer-v-1izab6g .framer-1pefgc8 { padding: 0px 32px 0px 32px; pointer-events: none; }",
    ".framer-AaU1v.framer-v-1izab6g .framer-15vqci1 { -webkit-user-select: none; pointer-events: auto; user-select: none; }",
    ".framer-AaU1v.framer-v-1izab6g .framer-b1htub, .framer-AaU1v.framer-v-ogljww .framer-b1htub { height: 70px; }",
    ".framer-AaU1v.framer-v-oqce9y.framer-t5qz50, .framer-AaU1v.framer-v-ogljww.framer-t5qz50 { width: 390px; }",
    ".framer-AaU1v.framer-v-oqce9y .framer-1pefgc8 { padding: 0px 24px 0px 24px; }",
    ".framer-AaU1v.framer-v-oqce9y .framer-15vqci1 { gap: 28px; }",
    ".framer-AaU1v.framer-v-oqce9y .framer-1dkzg5z { padding: 24px; }",
    ".framer-AaU1v.framer-v-oqce9y .framer-1jrrx38 { grid-template-columns: repeat(1, minmax(50px, 1fr)); height: min-content; }",
    ".framer-AaU1v.framer-v-oqce9y .framer-1dopbv8 { align-content: flex-end; align-items: flex-end; gap: 12px; grid-column: span 1; order: 2; padding: 12px 0px 0px 0px; }",
    ".framer-AaU1v.framer-v-oqce9y .framer-n6q4up { max-width: 200px; }",
    ".framer-AaU1v.framer-v-oqce9y .framer-s2it6q { align-content: flex-end; align-items: flex-end; }",
    ".framer-AaU1v.framer-v-oqce9y .framer-tkgwo7 { grid-column: span 1; order: 0; padding: 0px 0px 24px 0px; }",
    ".framer-AaU1v.framer-v-oqce9y .framer-xpfv55 { order: 1; padding: 0px 8px 0px 0px; }",
    ".framer-AaU1v.framer-v-ogljww .framer-1pefgc8 { gap: 0px; justify-content: flex-end; padding: 0px 24px 0px 24px; pointer-events: none; }",
    ".framer-AaU1v.framer-v-ogljww .framer-1dkzg5z { min-height: 769px; pointer-events: none; }",
    ...hr,
    ...Mt,
    ...Qt,
    ...tr,
    ...Ht,
    ...yr,
    ...Ot,
    ...Bt,
    ...or,
    ...mr,
  ],
  Ge = Z(No, Lo, "framer-AaU1v"),
  Cr = Ge;
Ge.displayName = "Navigation";
Ge.defaultProps = { height: 70, width: 1200 };
q(Ge, {
  variant: {
    options: [
      "pf7l0mDvf",
      "kxLRK29mM",
      "NmCLZSJXV",
      "kkdwTu8AP",
      "HvbW3t5V1",
      "Ta8is6OGp",
    ],
    optionTitles: [
      "Desktop - Open",
      "Desktop - Closed",
      "Tablet - Open",
      "Tablet - Closed",
      "Phone - Open",
      "Phone - Closed",
    ],
    title: "Variant",
    type: d.Enum,
  },
  Vk_BmdEcV: { title: "Link Cursor", type: d.CustomCursor },
});
$(
  Ge,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...xo,
    ...vo,
    ...bo,
    ...z(pr),
    ...z(qt),
    ...z(Xt),
    ...z(rr),
    ...z(Jt),
    ...z(gr),
    ...z(Gt),
    ...z(Wt),
    ...z(nr),
    ...z(cr),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var _o = M(Fr),
  Vo = ["tRsWw7E9N", "ocbSG50YG"],
  zo = "framer-zlGa5",
  Ro = { ocbSG50YG: "framer-v-lf4wei", tRsWw7E9N: "framer-v-1py5227" };
function sa(r, ...o) {
  let i = {};
  return o?.forEach((n) => n && Object.assign(i, r[n])), i;
}
var Do = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Te = (r) =>
    typeof r == "object" && r !== null && typeof r.src == "string"
      ? r
      : typeof r == "string"
        ? { src: r }
        : void 0,
  Eo = ({ value: r, children: o }) => {
    let i = ne(P),
      n = r ?? i.transition,
      s = oe(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(P.Provider, { value: s, children: o });
  },
  Wo = t.create(m),
  Bo = { Desktop: "tRsWw7E9N", Phone: "ocbSG50YG" },
  Po = ({
    height: r,
    id: o,
    logo1: i,
    logo2: n,
    logo3: s,
    logo4: w,
    logo5: C,
    logo6: a,
    logo7: S,
    logo8: u,
    tickerSpeed: V,
    title: R,
    width: F,
    ...y
  }) => ({
    ...y,
    ISY0jfLF1: a ??
      y.ISY0jfLF1 ?? {
        alt: "",
        src: "https://framerusercontent.com/images/O71v5D3JgbA6CCfIpnkK1qlO4.svg",
      },
    j4Z5YsqUq: C ??
      y.j4Z5YsqUq ?? {
        alt: "",
        src: "https://framerusercontent.com/images/O71v5D3JgbA6CCfIpnkK1qlO4.svg",
      },
    kM3tYYXDy: i ??
      y.kM3tYYXDy ?? {
        alt: "",
        src: "https://framerusercontent.com/images/O71v5D3JgbA6CCfIpnkK1qlO4.svg",
      },
    lORN5KK4M: s ??
      y.lORN5KK4M ?? {
        alt: "",
        src: "https://framerusercontent.com/images/O71v5D3JgbA6CCfIpnkK1qlO4.svg",
      },
    M4mOYHIII: w ??
      y.M4mOYHIII ?? {
        alt: "",
        src: "https://framerusercontent.com/images/O71v5D3JgbA6CCfIpnkK1qlO4.svg",
      },
    ma3HV8iiX: V ?? y.ma3HV8iiX ?? 70,
    rlPxxyC4F: u ??
      y.rlPxxyC4F ?? {
        alt: "",
        src: "https://framerusercontent.com/images/O71v5D3JgbA6CCfIpnkK1qlO4.svg",
      },
    UGS8dM5EY: n ??
      y.UGS8dM5EY ?? {
        alt: "",
        src: "https://framerusercontent.com/images/O71v5D3JgbA6CCfIpnkK1qlO4.svg",
      },
    variant: Bo[y.variant] ?? y.variant ?? "tRsWw7E9N",
    WP93HnAfO: S ??
      y.WP93HnAfO ?? {
        alt: "",
        src: "https://framerusercontent.com/images/O71v5D3JgbA6CCfIpnkK1qlO4.svg",
      },
    zpyq_uc_j: R ?? y.zpyq_uc_j ?? "Title",
  }),
  qo = (r, o) =>
    r.layoutDependency ? o.join("-") + r.layoutDependency : o.join("-"),
  Mo = O(function (r, o) {
    let i = j(null),
      n = o ?? i,
      s = K(),
      { activeLocale: w, setLocale: C } = Q(),
      a = se(),
      {
        style: S,
        className: u,
        layoutId: V,
        variant: R,
        zpyq_uc_j: F,
        ma3HV8iiX: y,
        kM3tYYXDy: h,
        UGS8dM5EY: Y,
        lORN5KK4M: v,
        M4mOYHIII: J,
        j4Z5YsqUq: N,
        ISY0jfLF1: G,
        WP93HnAfO: me,
        rlPxxyC4F: L,
        ...B
      } = Po(r),
      {
        baseVariant: l,
        classNames: k,
        clearLoadingGesture: te,
        gestureHandlers: ae,
        gestureVariant: ye,
        isLoading: xe,
        setGestureState: Ne,
        setVariant: Le,
        variants: pe,
      } = le({
        cycleOrder: Vo,
        defaultVariant: "tRsWw7E9N",
        ref: n,
        variant: R,
        variantClassNames: Ro,
      }),
      H = qo(r, pe),
      he = D(zo, ...[ar]);
    return e(X, {
      id: V ?? s,
      children: e(Wo, {
        animate: pe,
        initial: !1,
        children: e(Eo, {
          value: Do,
          children: p(t.div, {
            ...B,
            ...ae,
            "aria-label": "Logo Ticker",
            className: D(he, "framer-1py5227", u, k),
            "data-framer-name": "Desktop",
            layoutDependency: H,
            layoutId: "tRsWw7E9N",
            ref: n,
            style: { ...S },
            ...sa({ ocbSG50YG: { "data-framer-name": "Phone" } }, l, ye),
            children: [
              e(U, {
                __fromCanvasComponent: !0,
                children: e(m, {
                  children: e(t.h6, {
                    className: "framer-styles-preset-188e0sw",
                    "data-styles-preset": "NSeYnuIp_",
                    style: {
                      "--framer-text-alignment": "center",
                      "--framer-text-color":
                        "var(--extracted-1w1cjl5, var(--token-e309f3fd-e019-4571-a428-1d0e34f3ca38, rgb(230, 230, 230)))",
                    },
                    children: "Title",
                  }),
                }),
                className: "framer-dbbgsb",
                "data-framer-name": "Title",
                fonts: ["Inter"],
                layoutDependency: H,
                layoutId: "TcdPxOzif",
                style: {
                  "--extracted-1w1cjl5":
                    "var(--token-e309f3fd-e019-4571-a428-1d0e34f3ca38, rgb(230, 230, 230))",
                  "--framer-paragraph-spacing": "0px",
                },
                text: F,
                verticalAlignment: "top",
                withExternalLayout: !0,
              }),
              e(I, {
                children: e(_, {
                  className: "framer-f4ndqe-container",
                  isAuthoredByUser: !0,
                  isModuleExternal: !0,
                  layoutDependency: H,
                  layoutId: "qhVdZ_cFG-container",
                  nodeId: "qhVdZ_cFG",
                  rendersWithMotion: !0,
                  scopeId: "pO982p329",
                  children: e(Fr, {
                    alignment: "center",
                    direction: "left",
                    fadeOptions: {
                      fadeAlpha: 0,
                      fadeContent: !0,
                      fadeInset: 0,
                      fadeWidth: 20,
                      overflow: !1,
                    },
                    gap: 120,
                    height: "100%",
                    hoverFactor: 1,
                    id: "qhVdZ_cFG",
                    layoutId: "qhVdZ_cFG",
                    padding: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingPerSide: !1,
                    paddingRight: 0,
                    paddingTop: 0,
                    sizingOptions: { heightType: !0, widthType: !0 },
                    slots: [
                      e(E, {
                        background: {
                          alt: "",
                          fit: "fit",
                          pixelHeight: 32,
                          pixelWidth: 140,
                          sizes: "100px",
                          ...Te(h),
                          positionX: "center",
                          positionY: "center",
                        },
                        className: "framer-h5zr3k",
                        "data-framer-name": "Logo 1",
                        layoutDependency: H,
                        layoutId: "G0q2FiU7Y",
                      }),
                      e(E, {
                        background: {
                          alt: "",
                          fit: "fit",
                          pixelHeight: 20,
                          pixelWidth: 140,
                          sizes: "100px",
                          ...Te(Y),
                          positionX: "center",
                          positionY: "center",
                        },
                        className: "framer-i457ay",
                        "data-framer-name": "Logo 2",
                        layoutDependency: H,
                        layoutId: "V1YDeF01s",
                      }),
                      e(E, {
                        background: {
                          alt: "",
                          fit: "fit",
                          pixelHeight: 30,
                          pixelWidth: 140,
                          sizes: "100px",
                          ...Te(v),
                          positionX: "center",
                          positionY: "center",
                        },
                        className: "framer-1cx0a1u",
                        "data-framer-name": "Logo 3",
                        layoutDependency: H,
                        layoutId: "io5N98Ztx",
                      }),
                      e(E, {
                        background: {
                          alt: "",
                          fit: "fit",
                          pixelHeight: 32,
                          pixelWidth: 145,
                          sizes: "100px",
                          ...Te(J),
                          positionX: "center",
                          positionY: "center",
                        },
                        className: "framer-1bplowf",
                        "data-framer-name": "Logo 4",
                        layoutDependency: H,
                        layoutId: "Wug375EuQ",
                      }),
                      e(E, {
                        background: {
                          alt: "",
                          fit: "fit",
                          pixelHeight: 18,
                          pixelWidth: 77,
                          sizes: "100px",
                          ...Te(N),
                          positionX: "center",
                          positionY: "center",
                        },
                        className: "framer-gfhy9",
                        "data-framer-name": "Logo 5",
                        layoutDependency: H,
                        layoutId: "IIvih1d84",
                      }),
                      e(E, {
                        background: {
                          alt: "",
                          fit: "fit",
                          pixelHeight: 18,
                          pixelWidth: 135,
                          sizes: "100px",
                          ...Te(G),
                          positionX: "center",
                          positionY: "center",
                        },
                        className: "framer-h4jr2t",
                        "data-framer-name": "Logo 6",
                        layoutDependency: H,
                        layoutId: "KwWDn7uFs",
                      }),
                      e(E, {
                        background: {
                          alt: "",
                          fit: "fit",
                          pixelHeight: 20,
                          pixelWidth: 100,
                          sizes: "100px",
                          ...Te(me),
                          positionX: "center",
                          positionY: "center",
                        },
                        className: "framer-mxtc7k",
                        "data-framer-name": "Logo 7",
                        layoutDependency: H,
                        layoutId: "cIxMxD3Fz",
                      }),
                      e(E, {
                        background: {
                          alt: "",
                          fit: "fit",
                          pixelHeight: 24,
                          pixelWidth: 111,
                          sizes: "100px",
                          ...Te(L),
                          positionX: "center",
                          positionY: "center",
                        },
                        className: "framer-1siv1i5",
                        "data-framer-name": "Logo 8",
                        layoutDependency: H,
                        layoutId: "uvPKTTxI4",
                      }),
                    ],
                    speed: y,
                    style: { height: "100%", width: "100%" },
                    width: "100%",
                    ...sa({ ocbSG50YG: { gap: 80 } }, l, ye),
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Yo = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-zlGa5.framer-1ea0e52, .framer-zlGa5 .framer-1ea0e52 { display: block; }",
    ".framer-zlGa5.framer-1py5227 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-zlGa5 .framer-dbbgsb { flex: none; height: auto; max-width: 300px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }",
    ".framer-zlGa5 .framer-f4ndqe-container { flex: none; height: 40px; position: relative; width: 700px; }",
    ".framer-zlGa5 .framer-h5zr3k, .framer-zlGa5 .framer-i457ay, .framer-zlGa5 .framer-1cx0a1u, .framer-zlGa5 .framer-1bplowf, .framer-zlGa5 .framer-gfhy9, .framer-zlGa5 .framer-h4jr2t, .framer-zlGa5 .framer-mxtc7k, .framer-zlGa5 .framer-1siv1i5 { aspect-ratio: 3.3333333333333335 / 1; height: var(--framer-aspect-ratio-supported, 30px); overflow: hidden; position: relative; width: 100px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-zlGa5.framer-1py5227 { gap: 0px; } .framer-zlGa5.framer-1py5227 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-zlGa5.framer-1py5227 > :first-child { margin-top: 0px; } .framer-zlGa5.framer-1py5227 > :last-child { margin-bottom: 0px; } }",
    ".framer-zlGa5.framer-v-lf4wei.framer-1py5227 { width: 390px; }",
    ".framer-zlGa5.framer-v-lf4wei .framer-dbbgsb { max-width: 320px; }",
    ".framer-zlGa5.framer-v-lf4wei .framer-f4ndqe-container { width: 100%; }",
    ...tr,
  ],
  Oe = Z(Mo, Yo, "framer-zlGa5"),
  Er = Oe;
Oe.displayName = "Logo Ticker";
Oe.defaultProps = { height: 105, width: 700 };
q(Oe, {
  variant: {
    options: ["tRsWw7E9N", "ocbSG50YG"],
    optionTitles: ["Desktop", "Phone"],
    title: "Variant",
    type: d.Enum,
  },
  zpyq_uc_j: {
    defaultValue: "Title",
    displayTextArea: !1,
    title: "Title",
    type: d.String,
  },
  ma3HV8iiX: {
    defaultValue: 70,
    displayStepper: !0,
    max: 1e3,
    min: 0,
    step: 5,
    title: "Ticker Speed",
    type: d.Number,
  },
  kM3tYYXDy: {
    __defaultAssetReference:
      "data:framer/asset-reference,O71v5D3JgbA6CCfIpnkK1qlO4.svg?originalFilename=Avocado.svg&preferredSize=auto",
    __vekterDefault: {
      alt: "",
      assetReference:
        "data:framer/asset-reference,O71v5D3JgbA6CCfIpnkK1qlO4.svg?originalFilename=Avocado.svg&preferredSize=auto",
    },
    title: "Logo 1",
    type: d.ResponsiveImage,
  },
  UGS8dM5EY: {
    __defaultAssetReference:
      "data:framer/asset-reference,O71v5D3JgbA6CCfIpnkK1qlO4.svg?originalFilename=Avocado.svg&preferredSize=auto",
    __vekterDefault: {
      alt: "",
      assetReference:
        "data:framer/asset-reference,O71v5D3JgbA6CCfIpnkK1qlO4.svg?originalFilename=Avocado.svg&preferredSize=auto",
    },
    title: "Logo 2",
    type: d.ResponsiveImage,
  },
  lORN5KK4M: {
    __defaultAssetReference:
      "data:framer/asset-reference,O71v5D3JgbA6CCfIpnkK1qlO4.svg?originalFilename=Avocado.svg&preferredSize=auto",
    __vekterDefault: {
      alt: "",
      assetReference:
        "data:framer/asset-reference,O71v5D3JgbA6CCfIpnkK1qlO4.svg?originalFilename=Avocado.svg&preferredSize=auto",
    },
    title: "Logo 3",
    type: d.ResponsiveImage,
  },
  M4mOYHIII: {
    __defaultAssetReference:
      "data:framer/asset-reference,O71v5D3JgbA6CCfIpnkK1qlO4.svg?originalFilename=Avocado.svg&preferredSize=auto",
    __vekterDefault: {
      alt: "",
      assetReference:
        "data:framer/asset-reference,O71v5D3JgbA6CCfIpnkK1qlO4.svg?originalFilename=Avocado.svg&preferredSize=auto",
    },
    title: "Logo 4",
    type: d.ResponsiveImage,
  },
  j4Z5YsqUq: {
    __defaultAssetReference:
      "data:framer/asset-reference,O71v5D3JgbA6CCfIpnkK1qlO4.svg?originalFilename=Avocado.svg&preferredSize=auto",
    __vekterDefault: {
      alt: "",
      assetReference:
        "data:framer/asset-reference,O71v5D3JgbA6CCfIpnkK1qlO4.svg?originalFilename=Avocado.svg&preferredSize=auto",
    },
    title: "Logo 5",
    type: d.ResponsiveImage,
  },
  ISY0jfLF1: {
    __defaultAssetReference:
      "data:framer/asset-reference,O71v5D3JgbA6CCfIpnkK1qlO4.svg?originalFilename=Avocado.svg&preferredSize=auto",
    __vekterDefault: {
      alt: "",
      assetReference:
        "data:framer/asset-reference,O71v5D3JgbA6CCfIpnkK1qlO4.svg?originalFilename=Avocado.svg&preferredSize=auto",
    },
    title: "Logo 6",
    type: d.ResponsiveImage,
  },
  WP93HnAfO: {
    __defaultAssetReference:
      "data:framer/asset-reference,O71v5D3JgbA6CCfIpnkK1qlO4.svg?originalFilename=Avocado.svg&preferredSize=auto",
    __vekterDefault: {
      alt: "",
      assetReference:
        "data:framer/asset-reference,O71v5D3JgbA6CCfIpnkK1qlO4.svg?originalFilename=Avocado.svg&preferredSize=auto",
    },
    title: "Logo 7",
    type: d.ResponsiveImage,
  },
  rlPxxyC4F: {
    __defaultAssetReference:
      "data:framer/asset-reference,O71v5D3JgbA6CCfIpnkK1qlO4.svg?originalFilename=Avocado.svg&preferredSize=auto",
    __vekterDefault: {
      alt: "",
      assetReference:
        "data:framer/asset-reference,O71v5D3JgbA6CCfIpnkK1qlO4.svg?originalFilename=Avocado.svg&preferredSize=auto",
    },
    title: "Logo 8",
    type: d.ResponsiveImage,
  },
});
$(
  Oe,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ..._o,
    ...z(rr),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Wr = { DESKTOP: 1200, TABLET: 810, MOBILE: 390 },
  ee = {
    scrollbar: {
      width: 8,
      tablet: 6,
      mobile: 4,
      borderRadius: 4,
      thumbRadius: 4,
      grab: 40,
      touchGrab: 48,
      colors: {
        track: "#d6d6d6",
        thumb: "#FF4400",
        hover: "#8A8A91",
        active: "#000000",
      },
    },
  };
function la(r) {
  return (o) => (
    Be(() => {
      if (document.querySelector("[data-scrollbar-styles]")) return;
      let i = document.createElement("style");
      return (
        i.setAttribute("data-scrollbar-styles", ""),
        (i.textContent = `
                /* Base styles - Desktop (>1200px) */
                html {
                    --scrollbar-width: ${ee.scrollbar.width}px;
                    --scrollbar-grab: ${ee.scrollbar.grab}px;
                }

                /* Webkit/Blink Browsers */
                ::-webkit-scrollbar {
                    width: var(--scrollbar-width);
                }

                ::-webkit-scrollbar-track {
                    background: ${ee.scrollbar.colors.track};
                    border-radius: ${ee.scrollbar.borderRadius}px;
                }

                ::-webkit-scrollbar-thumb {
                    background-color: ${ee.scrollbar.colors.thumb};
                    border-radius: ${ee.scrollbar.thumbRadius}px;
                    border: transparent;
                    min-height: var(--scrollbar-grab);
                }

                ::-webkit-scrollbar-thumb:hover {
                    background-color: ${ee.scrollbar.colors.hover};
                }

                ::-webkit-scrollbar-thumb:active {
                    background-color: ${ee.scrollbar.colors.active};
                }

                /* Firefox */
                * {
                    scrollbar-width: thin;
                    scrollbar-color: ${ee.scrollbar.colors.thumb} ${ee.scrollbar.colors.track};
                }

                /* Tablet Breakpoint (810px - 1199px) */
                @media (max-width: ${Wr.DESKTOP - 1}px) {
                    html {
                        --scrollbar-width: ${ee.scrollbar.tablet}px;
                        --scrollbar-grab: ${ee.scrollbar.touchGrab}px;
                    }
                }

                /* Mobile Breakpoint (390px - 809px) */
                @media (max-width: ${Wr.TABLET - 1}px) {
                    html {
                        --scrollbar-width: ${ee.scrollbar.mobile}px;
                        --scrollbar-grab: ${ee.scrollbar.touchGrab}px;
                    }
                }

                /* Small Mobile (<390px) */
                @media (max-width: ${Wr.MOBILE - 1}px) {
                    html {
                        --scrollbar-width: ${ee.scrollbar.mobile}px;
                        --scrollbar-grab: ${ee.scrollbar.touchGrab}px;
                    }
                }

                /* Touch Device Optimization */
                @media (hover: none) and (pointer: coarse) {
                    ::-webkit-scrollbar {
                        width: ${ee.scrollbar.mobile}px;
                    }
                    
                    ::-webkit-scrollbar-thumb {
                        min-height: ${ee.scrollbar.touchGrab}px;
                    }
                }

                /* iOS Momentum Scrolling */
                html, body {
                    -webkit-overflow-scrolling: touch;
                }

                /* Hide scrollbar for iOS while maintaining functionality */
                @supports (-webkit-touch-callout: none) {
                    ::-webkit-scrollbar {
                        width: 0;
                        height: 0;
                    }
                }
            `),
        document.head.appendChild(i),
        () => {
          document.querySelectorAll("[data-scrollbar-styles]").length === 1 &&
            i.remove();
        }
      );
    }, []),
    e(r, { ...o })
  );
}
var Jo = M(Cr),
  Br = Fe(t.div),
  Ho = M(re),
  jo = M(Er),
  Go = M(ze),
  Oo = Fe(E),
  Ko = M(Rr),
  Xo = M(Lr),
  Qo = $e(we),
  Zo = er(t.div, { nodeId: "MB6xsydxN", override: la, scopeId: "kxpWJ4338" }),
  De = Ze(Cr),
  $o = M(Ve),
  ei = {
    MB6xsydxN: "(min-width: 1200px)",
    MqhGv3Uxk: "(min-width: 810px) and (max-width: 1199px)",
    rIUBkQHnH: "(max-width: 809px)",
  },
  da = () => typeof document < "u",
  ri = "framer-KvFzu",
  ti = {
    MB6xsydxN: "framer-v-pct4zo",
    MqhGv3Uxk: "framer-v-tv6h2x",
    rIUBkQHnH: "framer-v-66jivl",
  },
  ai = { bounce: 0.2, delay: 0.2, duration: 0.6, type: "spring" },
  Pr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.2,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  ni = { bounce: 0.2, delay: 0.1, duration: 0.6, type: "spring" },
  oi = { bounce: 0.2, delay: 0, duration: 0.6, type: "spring" },
  Ue = (r, o) => {
    if (!(!r || typeof r != "object")) return { ...r, alt: o };
  },
  ii = { bounce: 0.2, delay: 3, duration: 2, type: "spring" },
  si = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ii,
    x: 0,
    y: 0,
  },
  li = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Mr = {
    MqhGv3Uxk: [
      ".framer-KvFzu .framer-6meum9 { padding: 0px 32px 0px 32px; }",
      ".framer-KvFzu .framer-10lufy7 { max-width: unset; }",
      ".framer-KvFzu .framer-16b8ldv { max-width: 375px; }",
      ".framer-KvFzu .framer-15het5b-container { will-change: var(--framer-will-change-effect-override, transform); }",
    ],
    rIUBkQHnH: [
      ".framer-KvFzu .framer-6meum9 { padding: 40px 24px 40px 24px; }",
      ".framer-KvFzu .framer-10lufy7 { gap: 32px; max-width: unset; overflow: hidden; }",
      ".framer-KvFzu .framer-qzd275 { gap: 24px; }",
      ".framer-KvFzu .framer-1letymn { gap: 0px; }",
      ".framer-KvFzu .framer-1er5ggi { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
      ".framer-KvFzu .framer-16b8ldv { max-width: 314px; }",
      ".framer-KvFzu .framer-43w0br { flex-direction: column; gap: 24px; width: 100%; }",
      ".framer-KvFzu .framer-8ixkfz { padding: 32px 0px 0px 0px; }",
      ".framer-KvFzu .framer-1duu7gw { left: 0px; }",
    ],
  },
  ca = Object.keys(Mr),
  di = {
    MqhGv3Uxk: ".framer-tv6h2x-override",
    rIUBkQHnH: ".framer-66jivl-override",
  },
  ma = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-KvFzu.framer-w4xpd0, .framer-KvFzu .framer-w4xpd0 { display: block; }",
    ".framer-KvFzu.framer-pct4zo { align-content: center; align-items: center; background-color: var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-KvFzu .framer-1292qnm-container { flex: none; height: 70px; left: calc(50.00000000000002% - 100% / 2); pointer-events: none; position: var(--framer-canvas-fixed-position, fixed); top: 0px; width: 100%; z-index: 8; }",
    ".framer-KvFzu .framer-1rucydy { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }",
    ".framer-KvFzu .framer-6meum9 { align-content: center; align-items: center; background-color: var(--token-fac342c6-08c7-43c1-bf13-0cab3a0cef86, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: center; order: 1002; overflow: hidden; padding: 0px 24px 0px 24px; position: sticky; top: 0px; width: 100%; z-index: 2; }",
    ".framer-KvFzu .framer-10lufy7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 1800px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-KvFzu .framer-qzd275 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; pointer-events: none; position: relative; width: 100%; z-index: 1; }",
    ".framer-KvFzu .framer-1letymn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-KvFzu .framer-ffyme9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-KvFzu .framer-1uwbstx { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); overflow: hidden; position: relative; width: 16px; }",
    ".framer-KvFzu .framer-1er5ggi { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-KvFzu .framer-m6poxt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-KvFzu .framer-16b8ldv { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 404px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-KvFzu .framer-43w0br { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; z-index: 1; }",
    ".framer-KvFzu .framer-18bv4fy-container, .framer-KvFzu .framer-feqjij-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-KvFzu .framer-8ixkfz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 40px 0px 0px 0px; pointer-events: none; position: relative; width: 100%; z-index: 1; }",
    ".framer-KvFzu .framer-kc3tih-container { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; width: 100%; }",
    ".framer-KvFzu .framer-1duu7gw { -webkit-user-select: none; flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); opacity: 0.55; overflow: hidden; pointer-events: none; position: absolute; top: 0px; user-select: none; width: 100%; z-index: 0; }",
    ".framer-KvFzu .framer-6gzuwk-container { flex: none; height: 100%; left: calc(49.89451476793251% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100.20408163265306% / 2); width: 100%; z-index: 2; }",
    ".framer-KvFzu .framer-1vjlksx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; order: 1003; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 2; }",
    ".framer-KvFzu .framer-t91648-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-KvFzu .framer-15het5b-container { bottom: calc(calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 58px); flex: none; height: auto; order: 1004; position: var(--framer-canvas-fixed-position, fixed); right: 20px; width: auto; z-index: 9; }",
    '[data-layout-template="true"] > #overlay { margin-bottom: -0px; }',
    ...yr,
    ...lr,
  ],
  ci = {
    MB6xsydxN: "(min-width: 1200px)",
    MqhGv3Uxk: "(min-width: 810px) and (max-width: 1199px)",
    rIUBkQHnH: "(max-width: 809px)",
  },
  mi = ({ value: r }) =>
    ft()
      ? null
      : e("style", {
          dangerouslySetInnerHTML: { __html: r },
          "data-framer-html-style": "",
        }),
  qr = {
    "Desktop - Closed": "kxLRK29mM",
    "Desktop - Open": "pf7l0mDvf",
    "Phone - Closed": "Ta8is6OGp",
    "Phone - Open": "HvbW3t5V1",
    "Tablet - Closed": "kkdwTu8AP",
    "Tablet - Open": "NmCLZSJXV",
  },
  fi = { Desktop: "MB6xsydxN", Phone: "rIUBkQHnH", Tablet: "MqhGv3Uxk" },
  pi = ({
    desktopNavigation: r,
    height: o,
    id: i,
    phoneNavigation: n,
    tabletNavigation: s,
    width: w,
    ...C
  }) => ({
    ...C,
    R_OCz9UZK: qr[n] ?? n ?? C.R_OCz9UZK ?? "Ta8is6OGp",
    variant: fi[C.variant] ?? C.variant ?? "MB6xsydxN",
    xx_oKotmK: qr[r] ?? r ?? C.xx_oKotmK ?? "kxLRK29mM",
    YuexIjV5B: qr[s] ?? s ?? C.YuexIjV5B ?? "kkdwTu8AP",
  }),
  hi = { component: Ve, variant: "E03bJOqph" },
  ui = { component: Ve, variant: "DLbwdfhBG" },
  gi = { component: Ve, variant: "les1BtQT1" },
  yi = { component: Ve, variant: "x8kS4QO2P" },
  xi = O(function (r, o) {
    let i = j(null),
      n = o ?? i,
      s = K(),
      { activeLocale: w, setLocale: C } = Q(),
      {
        style: a,
        className: S,
        layoutId: u,
        variant: V,
        xx_oKotmK: R,
        YuexIjV5B: F,
        R_OCz9UZK: y,
        children: h,
        ...Y
      } = pi(r),
      [v, J] = ut(V, ei, !1),
      N = void 0,
      me = D(ri, ...[xr, dr]),
      L = () => (da() ? v !== "rIUBkQHnH" : !0),
      B = Qe(),
      l = () => (da() ? !["MqhGv3Uxk", "rIUBkQHnH"].includes(v) : !0);
    return (
      ct({ "18cv8dn": ui, "1bp5k8d": yi, "1rnhzhp": hi, "48ogek": gi }),
      e(lt.Provider, {
        value: {
          isLayoutTemplate: !0,
          primaryVariantId: "MB6xsydxN",
          variantClassNames: ti,
        },
        children: p(X, {
          id: u ?? s,
          children: [
            e(mi, {
              value:
                ":root body { background: var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255)); }",
            }),
            p(Zo, {
              ...Y,
              className: D(me, "framer-pct4zo", S),
              "data-layout-template": !0,
              ref: n,
              style: { ...a },
              children: [
                e(I, {
                  height: 70,
                  width: "100vw",
                  y: 0,
                  children: e(ie, {
                    breakpoint: v,
                    overrides: {
                      MqhGv3Uxk: { "data-framer-cursor": void 0 },
                      rIUBkQHnH: { "data-framer-cursor": void 0 },
                    },
                    children: e(we, {
                      className: "framer-1292qnm-container",
                      "data-framer-cursor": "1rnhzhp",
                      layoutScroll: !0,
                      nodeId: "rVpzP6Qbw",
                      rendersWithMotion: !0,
                      scopeId: "kxpWJ4338",
                      children: e(ie, {
                        breakpoint: v,
                        overrides: {
                          MqhGv3Uxk: { variant: F, Vk_BmdEcV: void 0 },
                          rIUBkQHnH: { variant: y, Vk_BmdEcV: void 0 },
                        },
                        children: e(Cr, {
                          height: "100%",
                          id: "rVpzP6Qbw",
                          layoutId: "rVpzP6Qbw",
                          style: { height: "100%", width: "100%" },
                          variant: R,
                          Vk_BmdEcV: "18cv8dn",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                }),
                h,
                e("div", { className: "framer-1rucydy" }),
                e(ie, {
                  breakpoint: v,
                  overrides: {
                    MqhGv3Uxk: { "data-framer-cursor": void 0 },
                    rIUBkQHnH: { "data-framer-cursor": void 0 },
                  },
                  children: p(t.section, {
                    className: "framer-6meum9",
                    "data-framer-cursor": "1rnhzhp",
                    "data-framer-name": "Contact ",
                    children: [
                      p(t.div, {
                        className: "framer-10lufy7",
                        "data-framer-name": "Content",
                        children: [
                          p(t.div, {
                            className: "framer-qzd275",
                            "data-framer-name": "Header",
                            children: [
                              e(ie, {
                                breakpoint: v,
                                overrides: {
                                  rIUBkQHnH: {
                                    __framer__styleAppearEffectEnabled: void 0,
                                  },
                                },
                                children: p(Br, {
                                  __framer__animate: { transition: ai },
                                  __framer__animateOnce: !1,
                                  __framer__scrollDirection: {
                                    direction: "down",
                                    target: Pr,
                                  },
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: "framer-1letymn",
                                  "data-framer-name": "Title",
                                  children: [
                                    L() &&
                                      e(t.div, {
                                        className:
                                          "framer-ffyme9 hidden-66jivl",
                                        "data-framer-name": "Icon",
                                        children: e(E, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: W(1234.5),
                                            pixelHeight: 40,
                                            pixelWidth: 40,
                                            src: "https://framerusercontent.com/images/kFaemw9EZxCk6m3YKTlCmCwJUr4.svg",
                                          },
                                          className: "framer-1uwbstx",
                                          "data-framer-name": "Icon",
                                        }),
                                      }),
                                    e(U, {
                                      __fromCanvasComponent: !0,
                                      children: e(m, {
                                        children: p("h2", {
                                          className:
                                            "framer-styles-preset-fw1ido",
                                          "data-styles-preset": "fOWtN_pvX",
                                          style: {
                                            "--framer-text-alignment": "center",
                                          },
                                          children: [
                                            e("span", {
                                              style: {
                                                "--framer-text-color":
                                                  "var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255))",
                                              },
                                              children: "We transform brands. ",
                                            }),
                                            e("br", {}),
                                            e("span", {
                                              style: {
                                                "--framer-text-color":
                                                  "var(--token-d8014220-2a78-4e07-9390-e464885c7a19, rgb(255, 68, 0))",
                                              },
                                              children: "Your success is next.",
                                            }),
                                          ],
                                        }),
                                      }),
                                      className: "framer-1er5ggi",
                                      "data-framer-name": "Title",
                                      fonts: ["Inter"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                              e(ie, {
                                breakpoint: v,
                                overrides: {
                                  rIUBkQHnH: {
                                    __framer__styleAppearEffectEnabled: void 0,
                                  },
                                },
                                children: e(Br, {
                                  __framer__animate: { transition: ni },
                                  __framer__animateOnce: !1,
                                  __framer__scrollDirection: {
                                    direction: "down",
                                    target: Pr,
                                  },
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: "framer-m6poxt",
                                  "data-framer-name": "Subtitle ",
                                  children: e(U, {
                                    __fromCanvasComponent: !0,
                                    children: e(m, {
                                      children: e("p", {
                                        className:
                                          "framer-styles-preset-m0fk0x",
                                        "data-styles-preset": "N8U_mBXjk",
                                        style: {
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255))",
                                        },
                                        children:
                                          "Start your project now by booking a one-on-one consultation with our expert.",
                                      }),
                                    }),
                                    className: "framer-16b8ldv",
                                    "data-framer-name": "Subtitle Copy",
                                    fonts: ["Inter"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          e(ie, {
                            breakpoint: v,
                            overrides: {
                              rIUBkQHnH: {
                                __framer__styleAppearEffectEnabled: void 0,
                              },
                            },
                            children: p(Br, {
                              __framer__animate: { transition: oi },
                              __framer__animateOnce: !1,
                              __framer__scrollDirection: {
                                direction: "down",
                                target: Pr,
                              },
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: "framer-43w0br",
                              "data-framer-name": "Links",
                              children: [
                                e(ue, {
                                  links: [
                                    {
                                      href: { webPageId: "LP__oFZZq" },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: "LP__oFZZq" },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: "LP__oFZZq" },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (k) =>
                                    e(ie, {
                                      breakpoint: v,
                                      overrides: { rIUBkQHnH: { y: 1512 } },
                                      children: e(I, {
                                        height: 35,
                                        y: 1545.5,
                                        children: e(we, {
                                          className: "framer-18bv4fy-container",
                                          nodeId: "SjU2m2Yyj",
                                          rendersWithMotion: !0,
                                          scopeId: "kxpWJ4338",
                                          children: e(ie, {
                                            breakpoint: v,
                                            overrides: {
                                              MqhGv3Uxk: {
                                                LOae8Hh1Z: k[1],
                                                qpsxpWYhl: void 0,
                                                variant: "xrAsLvSby",
                                              },
                                              rIUBkQHnH: {
                                                LOae8Hh1Z: k[2],
                                                qpsxpWYhl: void 0,
                                                variant: "xrAsLvSby",
                                              },
                                            },
                                            children: e(re, {
                                              height: "100%",
                                              id: "SjU2m2Yyj",
                                              layoutId: "SjU2m2Yyj",
                                              LOae8Hh1Z: k[0],
                                              qpsxpWYhl: "48ogek",
                                              r_tkFUAEM: "book a call",
                                              SlQMX6GRW:
                                                "var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255))",
                                              TLnZj9Gjf: !1,
                                              variant: "ITnNQEBIM",
                                              width: "100%",
                                              wn9baD7vq: !1,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                                e(ue, {
                                  links: [
                                    {
                                      href: { webPageId: "LP__oFZZq" },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: "LP__oFZZq" },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: "LP__oFZZq" },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (k) =>
                                    e(ie, {
                                      breakpoint: v,
                                      overrides: { rIUBkQHnH: { y: 1571 } },
                                      children: e(I, {
                                        height: 35,
                                        y: 1545.5,
                                        children: e(we, {
                                          className: "framer-feqjij-container",
                                          nodeId: "bNuidbl3L",
                                          rendersWithMotion: !0,
                                          scopeId: "kxpWJ4338",
                                          children: e(ie, {
                                            breakpoint: v,
                                            overrides: {
                                              MqhGv3Uxk: {
                                                LOae8Hh1Z: k[1],
                                                qpsxpWYhl: void 0,
                                                variant: "xrAsLvSby",
                                              },
                                              rIUBkQHnH: {
                                                LOae8Hh1Z: k[2],
                                                qpsxpWYhl: void 0,
                                                variant: "xrAsLvSby",
                                              },
                                            },
                                            children: e(re, {
                                              height: "100%",
                                              id: "bNuidbl3L",
                                              layoutId: "bNuidbl3L",
                                              LOae8Hh1Z: k[0],
                                              qpsxpWYhl: "48ogek",
                                              r_tkFUAEM: "chat on whatsapp",
                                              SlQMX6GRW:
                                                "var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255))",
                                              TLnZj9Gjf: !1,
                                              variant: "ITnNQEBIM",
                                              width: "100%",
                                              wn9baD7vq: !1,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                          }),
                          e(t.div, {
                            className: "framer-8ixkfz",
                            "data-framer-name": "Logo Ticker",
                            children: e(ie, {
                              breakpoint: v,
                              overrides: {
                                MqhGv3Uxk: { width: "calc(100vw - 64px)" },
                                rIUBkQHnH: {
                                  width: "calc(100vw - 48px)",
                                  y: 1670,
                                },
                              },
                              children: e(I, {
                                height: 105,
                                width: "min(100vw - 48px, 1800px)",
                                y: 1660.5,
                                children: e(we, {
                                  className: "framer-kc3tih-container",
                                  nodeId: "Cnp1e9hMm",
                                  rendersWithMotion: !0,
                                  scopeId: "kxpWJ4338",
                                  children: e(Er, {
                                    height: "100%",
                                    id: "Cnp1e9hMm",
                                    ISY0jfLF1: Ue(
                                      {
                                        pixelHeight: 18,
                                        pixelWidth: 77,
                                        src: "https://framerusercontent.com/images/NRRjXWPvyXiamsxxUKQAY2OT4aA.svg",
                                      },
                                      "",
                                    ),
                                    j4Z5YsqUq: Ue(
                                      {
                                        pixelHeight: 20,
                                        pixelWidth: 100,
                                        src: "https://framerusercontent.com/images/DSrnnIqOznDqZDFb0lUWGoR2M.svg",
                                      },
                                      "",
                                    ),
                                    layoutId: "Cnp1e9hMm",
                                    lORN5KK4M: Ue(
                                      {
                                        pixelHeight: 30,
                                        pixelWidth: 140,
                                        src: "https://framerusercontent.com/images/W3K5lWyMlvvcqGtcxL56D9mV0g.svg",
                                      },
                                      "",
                                    ),
                                    M4mOYHIII: Ue(
                                      {
                                        pixelHeight: 32,
                                        pixelWidth: 145,
                                        src: "https://framerusercontent.com/images/boEfYB1jB3whT73ry5hCsVMuxo.svg",
                                      },
                                      "",
                                    ),
                                    ma3HV8iiX: 70,
                                    rlPxxyC4F: Ue(
                                      {
                                        pixelHeight: 18,
                                        pixelWidth: 135,
                                        src: "https://framerusercontent.com/images/xE2zA9WgvaMXrjsGz1aliIj2mh4.svg",
                                      },
                                      "",
                                    ),
                                    style: { width: "100%" },
                                    UGS8dM5EY: Ue(
                                      {
                                        pixelHeight: 20,
                                        pixelWidth: 140,
                                        src: "https://framerusercontent.com/images/DouWalY7JeTB7krPm0gChUtcY8.svg",
                                      },
                                      "",
                                    ),
                                    variant: "tRsWw7E9N",
                                    width: "100%",
                                    WP93HnAfO: Ue(
                                      {
                                        pixelHeight: 24,
                                        pixelWidth: 111,
                                        src: "https://framerusercontent.com/images/kUgg2M3ZM1UvRX2HDURWWfep5ZQ.svg",
                                      },
                                      "",
                                    ),
                                    zpyq_uc_j:
                                      "Meet the partners who are part of our success story",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      e(ie, {
                        breakpoint: v,
                        overrides: {
                          rIUBkQHnH: {
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1.2,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                            ],
                          },
                        },
                        children: e(Oo, {
                          __framer__spring: {
                            damping: 60,
                            delay: 0,
                            duration: 0.3,
                            ease: [0.44, 0, 0.56, 1],
                            mass: 1,
                            stiffness: 300,
                            type: "spring",
                          },
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1.4,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                          ],
                          __framer__transformTrigger: "onInView",
                          __perspectiveFX: !1,
                          __targetOpacity: 0.55,
                          background: {
                            alt: "Team working in an office watching at a presentation",
                            fit: "fill",
                            loading: W(1e3),
                            pixelHeight: 1681,
                            pixelWidth: 3e3,
                            sizes: "100vw",
                            src: "https://framerusercontent.com/images/FtrUvqVj83u4btNtg8UCROQjaQU.png",
                            srcSet:
                              "https://framerusercontent.com/images/FtrUvqVj83u4btNtg8UCROQjaQU.png?scale-down-to=512 512w,https://framerusercontent.com/images/FtrUvqVj83u4btNtg8UCROQjaQU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/FtrUvqVj83u4btNtg8UCROQjaQU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/FtrUvqVj83u4btNtg8UCROQjaQU.png 3000w",
                          },
                          className: "framer-1duu7gw",
                          "data-framer-name": "BG Image",
                          children:
                            l() &&
                            e(I, {
                              children: e(we, {
                                className:
                                  "framer-6gzuwk-container hidden-tv6h2x hidden-66jivl",
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: "EGGgUNMja",
                                rendersWithMotion: !0,
                                scopeId: "kxpWJ4338",
                                children: e(ze, {
                                  height: "100%",
                                  id: "EGGgUNMja",
                                  layoutId: "EGGgUNMja",
                                  opacity: 0.2,
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                        }),
                      }),
                    ],
                  }),
                }),
                e(ie, {
                  breakpoint: v,
                  overrides: {
                    MqhGv3Uxk: { "data-framer-cursor": void 0 },
                    rIUBkQHnH: { "data-framer-cursor": void 0 },
                  },
                  children: e(t.div, {
                    className: "framer-1vjlksx",
                    "data-framer-cursor": "1rnhzhp",
                    "data-framer-name": "Footer",
                    children: e(I, {
                      height: 971,
                      width: "100vw",
                      y: 2e3,
                      children: e(we, {
                        className: "framer-t91648-container",
                        nodeId: "s_XkqS78k",
                        rendersWithMotion: !0,
                        scopeId: "kxpWJ4338",
                        children: e(ie, {
                          breakpoint: v,
                          overrides: {
                            MqhGv3Uxk: { variant: "fCrVgtmVJ" },
                            rIUBkQHnH: { variant: "uJz1Epa2A" },
                          },
                          children: e(Rr, {
                            D64SPbotv: "Linkedin",
                            fN6b7bFcm: Ue(
                              {
                                pixelHeight: 109,
                                pixelWidth: 352,
                                src: "https://framerusercontent.com/images/5uRlSUq94MMpzL6ui8LoYVB8wGE.svg",
                              },
                              "",
                            ),
                            folLeAazM: "Email",
                            height: "100%",
                            id: "s_XkqS78k",
                            iJ5nYtafd: Ue(
                              {
                                pixelHeight: 282,
                                pixelWidth: 1197,
                                src: "https://ifh.cc/g/KDYTz3.png",
                                srcSet:
                                  "https://ifh.cc/g/KDYTz3.png?scale-down-to=512 512w,https://ifh.cc/g/KDYTz3.png?scale-down-to=1024 1024w,https://ifh.cc/g/KDYTz3.png 1197w",
                              },
                              "",
                            ),
                            kFX5XZyQu: !0,
                            KVc8qDEeC: "Whatsapp",
                            layoutId: "s_XkqS78k",
                            LQiTKib_F: "https://www.instagram.com",
                            mTSuDP4zA: "Rome (UTC+1)",
                            PE62tz5iG: "Instagram",
                            PRbvkP1xz:
                              "We are currently based in Milano and work remotely.",
                            S3E6XdbxJ: "mailto:hejj@arpeggio.com",
                            Sctn3rhj8:
                              "Arpeggio SRL is a company registered in Italy. Design and development services are provided by Arpeggio SRL.",
                            SK4edYrAh:
                              "\xA9 2025 Arpeggio. All rights reserved.",
                            style: { width: "100%" },
                            tFYL24qDR: "X",
                            U2mJfzOnt: "Timezone (GMT+1)",
                            variant: "UT5Cyg6OT",
                            VEdDGGzMQ: "https://www.whatsapp.com",
                            width: "100%",
                            X8CKPtX72: "https://www.x.com/tamasbodo",
                            yCXdF9DvN: "www.linkedin.com",
                            zeKK6yONy: "1bp5k8d",
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
                e(I, {
                  height: 42,
                  y: 900,
                  children: e(ie, {
                    breakpoint: v,
                    overrides: {
                      MqhGv3Uxk: { animate: si, initial: li, optimized: !0 },
                    },
                    children: e(Qo, {
                      className: "framer-15het5b-container",
                      "data-framer-appear-id": "15het5b",
                      isModuleExternal: !0,
                      layoutScroll: !0,
                      nodeId: "zk4bbuCse",
                      rendersWithMotion: !0,
                      scopeId: "kxpWJ4338",
                      children: e(Lr, {
                        height: "100%",
                        id: "zk4bbuCse",
                        layoutId: "zk4bbuCse",
                        UApeZwLpA: "Buy for $99",
                        variant: "UAo9VX0TG",
                        width: "100%",
                        WZglYKE0H:
                          "https://framerpod.lemonsqueezy.com/buy/df5fdbc0-c80d-46ef-888e-182cb77fe9e3",
                      }),
                    }),
                  }),
                }),
              ],
            }),
            e("div", { id: "template-overlay" }),
          ],
        }),
      })
    );
  }),
  vi = (r) =>
    r === _e.canvas || r === _e.export
      ? [
          ...ma,
          ...ca.flatMap((i) => {
            let n = di[i];
            return Mr[i].map((s) => `${n} {${s}}`);
          }),
        ]
      : [...ma, ...ca.map((i) => `@media ${ci[i]} { ${Mr[i].join(" ")} }`)],
  Ke = Z(xi, vi, "framer-KvFzu"),
  fa = Ke;
Ke.displayName = "Main Layout";
Ke.defaultProps = { height: 1e3, width: 1200 };
q(Ke, {
  xx_oKotmK: De?.variant && {
    ...De.variant,
    defaultValue: "kxLRK29mM",
    description: void 0,
    hidden: void 0,
    title: "Desktop - Navigation",
  },
  YuexIjV5B: De?.variant && {
    ...De.variant,
    defaultValue: "kkdwTu8AP",
    description: void 0,
    hidden: void 0,
    title: "Tablet - Navigation",
  },
  R_OCz9UZK: De?.variant && {
    ...De.variant,
    defaultValue: "Ta8is6OGp",
    description: void 0,
    hidden: void 0,
    title: "Phone - Navigation",
  },
});
$(
  Ke,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...Jo,
    ...Ho,
    ...jo,
    ...Go,
    ...Ko,
    ...Xo,
    ...$o,
    ...z(gr),
    ...z(sr),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Ee = {
    augiA20Il: {
      elements: {
        Ad_LXSMls: "achievements",
        ebLmpHBNx: "faq",
        f7gVYkqHq: "logo-trigger",
        G_B316dSg: "our-services",
        KCbnlrFJs: "journal",
        kHDIa8Hj1: "client-stories",
        M8r4JsgaY: "benefits",
        Mgwfhb40L: "introduction",
        NywS8dZAT: "floating-spotlight",
        QEtj6bjlk: "dot",
        UWwxO4yAs: "highlights",
        wCdaFr5mX: "hero",
        wD8d_0wTl: "pricing",
        Yp1au__gv: "top",
      },
      page: ge(
        () =>
          import("./yx-944-Joqh3P6qTvpdJg1sZ1nMRNwN9qeE99_dBj98.AJBKQFFI.mjs"),
      ),
      path: "/",
    },
    rYcPcLFex: {
      elements: {
        bRsg99PlU: "top",
        dvOsbbQCs: "get-in-touch",
        lMtLI_ptc: "who-we-are",
        mR4SHDi2a: "approach",
        p37RM5ZlO: "awards",
        p8046rCPJ: "logo-trigger",
        rBQQO0Ed4: "how-we-work",
        u0rP44l3p: "mission",
        W608xChl9: "team",
      },
      page: ge(
        () =>
          import("./gUM7gcmNv7-LUyyc7hTrDztb3p-A5uOWu9_GAdqk2Bo.T4IVLKJC.mjs"),
      ),
      path: "/about",
    },
    LP__oFZZq: {
      elements: { EOADALg0k: "logo-trigger", nQNycudn5: "top" },
      page: ge(
        () =>
          import("./WS7tJGaaS9bDt9B6UmoBrM-b85N7rbyPWSxwZTtBECo.3BGIN73U.mjs"),
      ),
      path: "/contact",
    },
    Vr48t_zkp: {
      elements: {},
      page: ge(
        () =>
          import("./a4KDngcOb94PkID06tgbFAA8pefQz-l0onfBtIU5vqI.HUHT6QPQ.mjs"),
      ),
      path: "/404",
    },
    CPRcJt5dV: {
      elements: { Clr76FrAy: "top", oNsnwJgiB: "logo-trigger" },
      page: ge(
        () =>
          import("./kNzKGi1qyCYqKwESVwZJ1nY4nLLj3arUgbUOI1TSxZc.RA2DDLDW.mjs"),
      ),
      path: "/journal",
    },
    j2fBQXPoP: {
      elements: { lhUFRLv35: "logo-trigger", uoAGNucf9: "top" },
      page: ge(
        () =>
          import("./h5J6ZURyF8nm6BOjBz2rci-5Dn7-hIWjleMWAiip7cI.3IZMUUPT.mjs"),
      ),
      path: "/work",
    },
    LoObR3LfG: {
      collectionId: "PuvR7bUan",
      elements: {
        c_rXa9Knk: "overview",
        e2e7wt1VM: "introduction-1",
        jSsIqM6wy: "results",
        LBvc4Esvn: "how-we-work",
        nSAqHi9UV: "introduction",
        OjyNUlFmf: "more-projects",
        Rq7zWBznp: "credits",
        rqWtZbHi1: "top",
        u698RPWbs: "solution",
        yPl0qSYWX: "logo-trigger",
      },
      page: ge(
        () =>
          import("./so2_UpaC-BioE2JeqXOvNT_SNfxTwks68PCscl2Tq3U.DFDM5VCD.mjs"),
      ),
      path: "/work/:fKGtoKC1r",
    },
    V2ql3b84k: {
      collectionId: "kNS64m6YL",
      elements: {
        mHJpjgHxh: "top",
        pH0DU7gZH: "btn-fade",
        Qekgm0kK6: "logo-trigger",
      },
      page: ge(
        () =>
          import("./3GMvjbjMIqYbZun2w2GEtk5ls2sS0yZK0ZKjGAXSEYg.F52AZRWV.mjs"),
      ),
      path: "/journal/:LGnOksssn",
    },
    uW6MG5h4q: {
      collectionId: "wlyQIkA8F",
      elements: { uwnWVbybO: "top", VrXWYnOSh: "logo-trigger" },
      page: ge(
        () =>
          import("./KxDbxx7PriRSEowRQUB7crLkWZIN1mCFp8ov9XCta8I.VSZVH74V.mjs"),
      ),
      path: "/legal/:N6VBnBY6z",
    },
    FN2dfzCG8: { page: ge(() => import("./FN2dfzCG8-R62VOTBE.mjs")) },
  },
  Yr = [{ code: "en", id: "default", name: "English", slug: "" }],
  Jr = {
    kNS64m6YL: async () =>
      (
        await import(
          "./cIJVU9a1ey3OSmi46GznH9Ko8k6craAt5zxCs9rWYNY.GYCG3FVN.mjs"
        )
      )?.utils,
    PuvR7bUan: async () =>
      (
        await import(
          "./SipcTDvC3_C3AT0bBpwBQv5e2QJlyrvJn1r5DNMqYwk.CU2PMM3L.mjs"
        )
      )?.utils,
    wlyQIkA8F: async () =>
      (
        await import(
          "./fv8Lot5EIou6KJOXY8imA9Z_uUylYs5JAyC0wx3IyPA.SGZXTV3B.mjs"
        )
      )?.utils,
  },
  ha = "96c26319a4a1009ca4ffa0a29feaa041d71fb6b9b4feb70dc6cd916efbda8404";
function bi({ routeId: r, children: o, style: i, ...n }) {
  let s = {
      R_OCz9UZK: "Ta8is6OGp",
      xx_oKotmK: "kxLRK29mM",
      YuexIjV5B: "kkdwTu8AP",
    },
    C =
      {
        augiA20Il: s,
        CPRcJt5dV: s,
        j2fBQXPoP: s,
        LoObR3LfG: s,
        LP__oFZZq: s,
        rYcPcLFex: s,
        uW6MG5h4q: s,
        V2ql3b84k: s,
        Vr48t_zkp: s,
      }[r] ?? {};
  switch (r) {
    case "augiA20Il":
    case "rYcPcLFex":
    case "LP__oFZZq":
    case "Vr48t_zkp":
    case "CPRcJt5dV":
    case "j2fBQXPoP":
    case "LoObR3LfG":
    case "V2ql3b84k":
    case "uW6MG5h4q":
      return be(fa, { ...C, key: "MainLayout", routeId: r, style: i }, o(!0));
    default:
      return o(!1);
  }
}
function _l(r) {
  switch (r) {
    case "augiA20Il":
    case "rYcPcLFex":
    case "LP__oFZZq":
    case "Vr48t_zkp":
    case "CPRcJt5dV":
    case "j2fBQXPoP":
    case "LoObR3LfG":
    case "V2ql3b84k":
    case "uW6MG5h4q":
      return [
        { hash: "pct4zo", mediaQuery: "(min-width: 1200px)" },
        {
          hash: "tv6h2x",
          mediaQuery: "(min-width: 810px) and (max-width: 1199px)",
        },
        { hash: "66jivl", mediaQuery: "(max-width: 809px)" },
      ];
    default:
      return;
  }
}
async function wi({ routeId: r, pathVariables: o, localeId: i }) {
  let n = Ee[r].page.preload(),
    s = be(ht, {
      isWebsite: !0,
      routeId: r,
      pathVariables: o,
      routes: Ee,
      collectionUtils: Jr,
      framerSiteId: ha,
      notFoundPage: ge(
        () =>
          import("./a4KDngcOb94PkID06tgbFAA8pefQz-l0onfBtIU5vqI.HUHT6QPQ.mjs"),
      ),
      isReducedMotion: void 0,
      localeId: i,
      locales: Yr,
      preserveQueryParams: !0,
      siteCanonicalURL: "https://prettier.io/playground",
      LayoutTemplate: bi,
    }),
    w = be(st, {
      children: s,
      value: {
        editorBarDisableFrameAncestorsSecurity: !1,
        editorBarOnPageEditing: !1,
        motionDivToDiv: !1,
        pauseOffscreen: !0,
        replaceNestedLinks: !0,
        yieldOnTap: !1,
      },
    }),
    C = be(mt, { children: w }),
    a = be(rt, {
      children: C,
      value: {
        global: {
          enter: {
            mask: { angle: 90, type: "blinds", width: "10%" },
            opacity: 1,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0,
              duration: 1,
              ease: [0.69, 0.14, 0.18, 0.9],
              mass: 1,
              stiffness: 400,
              type: "tween",
            },
            x: "0%",
            y: "0%",
          },
          exit: {
            opacity: 0,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0,
              duration: 0.5,
              ease: [0.27, 0, 0.51, 1],
              mass: 1,
              stiffness: 400,
              type: "tween",
            },
            x: "0px",
            y: "0px",
          },
        },
        routes: {},
      },
    });
  return await n, a;
}
var Hr = typeof document < "u";
if (Hr) {
  (T.__framer_importFromPackage = (o, i) => () =>
    be(ot, {
      error: 'Package component not supported: "' + i + '" in "' + o + '"',
    })),
    (T.process = {
      ...T.process,
      env: { ...(T.process ? T.process.env : void 0), NODE_ENV: "production" },
    }),
    (T.__framer_events = T.__framer_events || []),
    it();
  let r = document.getElementById("main");
  "framerHydrateV2" in r.dataset ? pa(!0, r) : pa(!1, r);
}
function Ci() {
  Hr && T.__framer_events.push(arguments);
}
async function pa(r, o) {
  function i(n, s, w = !0) {
    if (n.caught || T.__framer_hadFatalError) return;
    let C = s?.componentStack;
    if (w) {
      if (
        (console.warn(
          `Recoverable error has happened. Please check any custom code or code overrides to fix server/client mismatches:
`,
          n,
          C,
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Fatal crash has happened. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/:
`,
        n,
        C,
      );
    Ci(
      w ? "published_site_load_recoverable_error" : "published_site_load_error",
      {
        message: String(n),
        componentStack: C,
        stack: C
          ? void 0
          : n instanceof Error && typeof n.stack == "string"
            ? n.stack
            : null,
      },
    );
  }
  try {
    let n, s, w, C;
    if (r) {
      let u = JSON.parse(o.dataset.framerHydrateV2);
      (n = u.routeId),
        (s = u.localeId),
        (w = u.pathVariables),
        (C = u.breakpoints),
        (n = Sr(Ee, n));
    } else {
      Sr(Ee, void 0);
      let u = nt(Ee, decodeURIComponent(location.pathname), !0, Yr);
      (n = u.routeId), (s = u.localeId), (w = u.pathVariables);
    }
    let a = wi({ routeId: n, localeId: s, pathVariables: w });
    typeof T < "u" &&
      (async () => {
        let u = Ee[n],
          V = "default",
          R = Yr.find(({ id: v }) => (s ? v === s : v === V)).code,
          F = null;
        if (u?.collectionId && Jr) {
          let v = await Jr[u.collectionId]?.(),
            [J] = Object.values(w);
          v &&
            typeof J == "string" &&
            (F = (await v.getRecordIdBySlug(J, R || void 0)) ?? null);
        }
        let y = Intl.DateTimeFormat().resolvedOptions(),
          h = y.timeZone,
          Y = y.locale;
        await new Promise((v) => {
          document.prerendering
            ? document.addEventListener("prerenderingchange", v, { once: !0 })
            : v();
        }),
          T.__framer_events.push([
            "published_site_pageview",
            {
              framerSiteId: ha ?? null,
              routePath: u?.path || "/",
              collectionItemId: F,
              framerLocale: R || null,
              webPageId: u?.abTestingVariantId ?? n,
              abTestId: u?.abTestId,
              referrer: document.referrer || null,
              url: T.location.href,
              hostname: T.location.hostname || null,
              pathname: T.location.pathname || null,
              hash: T.location.hash || null,
              search: T.location.search || null,
              timezone: h,
              locale: Y,
            },
            "eager",
          ]),
          await et({
            priority: "background",
            ensureContinueBeforeUnload: !0,
            continueAfter: "paint",
          }),
          document.dispatchEvent(
            new CustomEvent("framer:pageview", {
              detail: { framerLocale: R || null },
            }),
          );
      })();
    let S = await a;
    r
      ? (xt("framer-rewrite-breakpoints", () => {
          gt(C), T.__framer_onRewriteBreakpoints?.(C);
        }),
        Ir(() => {
          at(), tt(), ea(o, S, { onRecoverableError: i });
        }))
      : Ar(o, { onRecoverableError: i }).render(S);
  } catch (n) {
    throw (i(n, void 0, !1), n);
  }
}
(function () {
  Hr &&
    Ir(() => {
      Ar(document.getElementById("__framer-badge-container")).render(
        be(
          Or,
          {},
          be(
            dt(we),
            {
              className: "__framer-badge",
              __framer__threshold: 0.5,
              __framer__animateOnce: !0,
              __framer__opacity: 0,
              __framer__targetOpacity: 1,
              __framer__rotate: 0,
              __framer__x: 0,
              __framer__y: 10,
              __framer__scale: 1,
              __framer__transition: {
                type: "spring",
                ease: [0.44, 0, 0.56, 1],
                duration: 0.3,
                delay: 1,
                stiffness: 350,
                damping: 40,
                mass: 1.5,
              },
              __framer__rotateX: 0,
              __framer__rotateY: 0,
              __framer__perspective: 1200,
            },
            be(Kr(() => import("./PX9hIOIVM-PRGJ3LCL.mjs"))),
          ),
        ),
      );
    });
})();
export { _l as getLayoutTemplateBreakpoints, wi as getPageRoot };
//# sourceMappingURL=script_main.OAHBO2UU.mjs.map
