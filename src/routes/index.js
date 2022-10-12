import { lazy } from 'react';

import config from '~/config';
import AuthLayout from '~/layouts/AuthLayout';

const homePromise = import('~/pages/Home');
const loginFormPromise = import('~/pages/LoginForm');
const registerFormPromise = import('~/pages/RegisterForm');
const resetPassFormPromise = import('~/pages/ResetPassForm');
const newsPromise = import('~/pages/News');
const contactPromise = import('~/pages/Contact');
const paymentGuidePromise = import('~/pages/PaymentGuide');
const profilePromise = import('~/pages/Profile');
const logoutPromise = import('~/pages/Logout');

// const Home = lazy(() => import('~/pages/Home'));
// const LoginForm = lazy(() => import('~/pages/LoginForm'));
// const RegisterForm = lazy(() => import('~/pages/RegisterForm'));
// const News = lazy(() => import('~/pages/News'));
// const Contact = lazy(() => import('~/pages/Contact'));
// const PaymentGuide = lazy(() => import('~/pages/PaymentGuide'));

const Home = lazy(() => homePromise);
const LoginForm = lazy(() => loginFormPromise);
const RegisterForm = lazy(() => registerFormPromise);
const ResetPassForm = lazy(() => resetPassFormPromise);
const News = lazy(() => newsPromise);
const Contact = lazy(() => contactPromise);
const PaymentGuide = lazy(() => paymentGuidePromise);
const Profile = lazy(() => profilePromise);
const Logout = lazy(() => logoutPromise);

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
    {
        path: config.routes.resetPass,
        component: ResetPassForm,
        layout: AuthLayout,
    },
];

export const privateRouters = [
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.logout,
        component: Logout,
    },
];
