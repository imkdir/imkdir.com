import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home';
import Blog from '@/components/Blog';
import List from '@/components/List';
import Misc from '@/components/Miscellaneous';
import Showcase from "@/components/Showcase";

Vue.use(VueRouter);

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/blog',
            component: Blog,
        },
        {
            path: '/projects',
            component: Showcase,
        },
        {
            path: '/books',
            name: 'books',
            component: List,
        },
        {
            path: '/films',
            name: 'films',
            component: List,
        },
        {
            path: '/shows',
            name: 'shows',
            component: List,
        },
        {
            path: '/games',
            name: 'games',
            component: List
        },
        {
            path: '/tools',
            name: 'tools',
            component: List
        },
        {
            path: '/miscellaneous',
            name: 'miscellaneous',
            component: Misc
        },
    ]
});

export default router;