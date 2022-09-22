import { lazy } from 'react';

import config from '~/config';
import AuthLayout from '~/layouts/AuthLayout';

const Home = lazy(() => import('~/pages/Home'));
const LoginForm = lazy(() => import('~/pages/LoginForm'));
const RegisterForm = lazy(() => import('~/pages/RegisterForm'));
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
    {
        path: config.routes.paymentGuide,
        component: PaymentGuide,
    },
    {
        path: config.routes.login,
        component: LoginForm,
        layout: AuthLayout,
    },
    {
        path: config.routes.register,
        component: RegisterForm,
        layout: AuthLayout,
    },
];
