const routes = {
    home: '/',
    contact: '/contact',
    news: '/news',
    paymentGuide: '/payment-guide',
    login: '/login',
    register: '/register',
    resetPass: '/reset-password/:email/:token',
    logout: '/logout',
    profile: '/me/profile',
    coursesSearch: '/courses/search',
    course: '/course/:slug',
    checkout: '/checkout/course/:slug',
};

export default routes;
