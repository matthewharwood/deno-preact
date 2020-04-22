

export const KEYS = {
  FADE_OUT: 'FADE_OUT',
  FADE_IN: 'FADE_IN',
  SLIDE_IN_LEFT: 'SLIDE_IN_LEFT',
  SLIDE_IN_RIGHT: 'SLIDE_IN_RIGHT',
  SLIDE_IN_TOP: 'SLIDE_IN_TOP',
  CROSS_FADE: 'CROSS_FADE',
  ZOOM_IN: 'ZOOM_IN',
}
export const KEYFRAMES = {
  [KEYS.FADE_OUT]: [{ opacity: 1 }, { opacity: 0 }],
  [KEYS.SLIDE_IN_LEFT]: [{transform: 'translate3d(-100%, 0, 0)'},{transform: 'translate3d(0, 0, 0)'} ],
  [KEYS.SLIDE_IN_TOP]: [{transform: 'translate3d(0, -100%, 0)'},{transform: 'translate3d(0, 0, 0)'} ],
  [KEYS.SLIDE_IN_RIGHT]: [{transform: 'translate3d(100%, 0,0'}, {transform: 'translate3d(0,0,0)'}],
  [KEYS.FADE_IN]: [{transform: 'translate3d(0,0,0)', opacity: 0}, {transform: 'translate3d(0,0,0)', opacity: 1}],
}
export const ROUTE = {
  NAVIGATION: {PATH: '/navigation', SELECTOR: '[data-outlet=nav]'},
  MAIN: {PATH: '/', SELECTOR: '[data-outlet=main]',},
  LAB: {PATH: '/lab', SELECTOR: '[data-outlet=lab]'},
  LAB_A: {PATH: '/lab/:id', SELECTOR: '[data-outlet=labA]'},
  WORK: {PATH: '/work', SELECTOR: '[data-outlet=work]'},
  PROFILE: {PATH: '/profile', SELECTOR: '[data-outlet=profile]'},
}
export const RouteConfig = {
  main: {
    onLeave: {
      lab: [
        {selector: ROUTE.MAIN.SELECTOR, keyframes: KEYFRAMES.FADE_OUT},
        {selector: ROUTE.LAB.SELECTOR, keyframes: KEYFRAMES.FADE_IN},
        {selector: ROUTE.NAVIGATION.SELECTOR, keyframes: KEYFRAMES.SLIDE_IN_TOP}
      ],
      work: [{selector: ROUTE.MAIN.SELECTOR, keyframes: KEYFRAMES.FADE_OUT}, {selector: ROUTE.WORK.SELECTOR, keyframes: KEYFRAMES.SLIDE_IN_LEFT}],
      profile: [{selector: ROUTE.MAIN.SELECTOR, keyframes: KEYFRAMES.FADE_OUT}, {selector: ROUTE.PROFILE.SELECTOR, keyframes: KEYFRAMES.SLIDE_IN_TOP}]
    }
  },
}
// export const RouteConfig = new Map()
//   .set(
//     ROUTE.MAIN,
//     {
//       onLeave: new Map()
//         .set(
//           'LAB',
//           [{selector: ROUTE.MAIN.SELECTOR, keyframes: KEYFRAMES.FADE_OUT}, {selector: ROUTE.LAB.SELECTOR, keyframes: KEYFRAMES.SLIDE_IN_LEFT}]
//         )
//     }
//   )
