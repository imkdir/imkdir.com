import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home';
import Blog from '@/components/Blog';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/blog',
            component: Blog,
        }
    ]
});

export default router;