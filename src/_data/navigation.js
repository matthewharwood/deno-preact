import {DOMAIN} from '../utils/env.js';
import {ROUTE, RouteConfig} from './routes.js';

export const navigationLinks = [
  {link: {text: 'Work', ariaLabel:'Work', href:`${DOMAIN}/work`, fetch: ROUTE.WORK, onLeave: RouteConfig.main.onLeave.work}},
  {link: {text: 'Lab', ariaLabel:'Lab', href: `${DOMAIN}/lab`, fetch: ROUTE.LAB, onLeave: RouteConfig.main.onLeave.lab}},
  {link: {text: 'Profile', ariaLabel:'Profile', href: `${DOMAIN}/profile`, fetch: ROUTE.PROFILE, onLeave: RouteConfig.main.onLeave.profile}},
];
