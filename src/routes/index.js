import { lazy } from 'react';

import config from '~/config';
import AuthLayout from '~/layouts/AuthLayout';
import CheckoutLayout from '~/layouts/CheckoutLayout';

import Checkout from '~/pages/Checkout';
import Contact from '~/pages/Contact';
import Course from '~/pages/Course';
import CoursesSearch from '~/pages/CoursesSearch';
import Home from '~/pages/Home';
import LoginForm from '~/pages/LoginForm';
import Logout from '~/pages/Logout';
import News from '~/pages/News';
import PaymentGuide from '~/pages/PaymentGuide';
import Profile from '~/pages/Profile';
import RegisterForm from '~/pages/RegisterForm';
import ResetPassForm from '~/pages/ResetPassForm';

// const homePromise = import('~/pages/Home');
// const loginFormPromise = import('~/pages/LoginForm');
// const registerFormPromise = import('~/pages/RegisterForm');
// const resetPassFormPromise = import('~/pages/ResetPassForm');
// const newsPromise = import('~/pages/News');
// const contactPromise = import('~/pages/Contact');
// const paymentGuidePromise = import('~/pages/PaymentGuide');
// const profilePromise = import('~/pages/Profile');
// const logoutPromise = import('~/pages/Logout');
// const coursesSearchPromise = import('~/pages/CoursesSearch');
// const coursePromise = import('~/pages/Course');
// const checkoutPromise = import('~/pages/Checkout');

// const Home = lazy(() => homePromise);
// const LoginForm = lazy(() => loginFormPromise);
// const RegisterForm = lazy(() => registerFormPromise);
// const ResetPassForm = lazy(() => resetPassFormPromise);
// const News = lazy(() => newsPromise);
// const Contact = lazy(() => contactPromise);
// const PaymentGuide = lazy(() => paymentGuidePromise);
// const Profile = lazy(() => profilePromise);
// const Logout = lazy(() => logoutPromise);
// const CoursesSearch = lazy(() => coursesSearchPromise);
// const Course = lazy(() => coursePromise);
// const Checkout = lazy(() => checkoutPromise);

// const Home = lazy(() => import('~/pages/Home'));
// const LoginForm = lazy(() => import('~/pages/LoginForm'));
// const RegisterForm = lazy(() => import('~/pages/RegisterForm'));
// const News = lazy(() => import('~/pages/News'));
// const Contact = lazy(() => import('~/pages/Contact'));
// const PaymentGuide = lazy(() => import('~/pages/PaymentGuide'));

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
    {
        path: config.routes.coursesSearch,
        component: CoursesSearch,
    },
    {
        path: config.routes.course,
        component: Course,
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
    {
        path: config.routes.checkout,
        component: Checkout,
        layout: CheckoutLayout,
    },
];
