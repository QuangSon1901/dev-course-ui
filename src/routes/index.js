import config from '~/config';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import News from '~/pages/News';
import PaymentGuide from '~/pages/PaymentGuide';

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
