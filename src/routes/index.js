import { lazy } from 'react';

import config from '~/config';

const Home = lazy(() => import('~/pages/Home'));
const News = lazy(() => import('~/pages/News'));
const Contact = lazy(() => import('~/pages/Contact'));
const PaymentGuide = lazy(() => import('~/pages/PaymentGuide'));

export const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.contact,
        component: Contact,
    },
    {
        path: config.routes.news,
        component: News,
    },
    {
        path: config.routes.paymentGuide,
        component: PaymentGuide,
    },
];
