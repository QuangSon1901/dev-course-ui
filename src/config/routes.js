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
    coursesSearch: 'courses/search/:query',
    course: 'course/:slug',
};

export default routes;
