import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        // component: ,
    },
    {
        path: '/detail/:quoteId',
        name: 'Detail',
        // component: ,
    },
    {
        path: '/detail/:quoteId/related',
        name: 'Related',
        // component: ,
    },
    {
        path: '/detail/:quoteId/similar',
        name: 'Similar',
        // component: ,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;

