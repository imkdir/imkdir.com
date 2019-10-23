import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home';
import Blog from '@/components/Blog';
import Timeline from "@/components/Timeline";
import List from '@/components/List';
import Miscellaneous from '@/components/Miscellaneous';
import BlogEntries from '../../statics/data/blogs.json';
import Eatles from "../../contents/projects/Eatles";

Vue.use(VueRouter);

const blogRoutes = [...BlogEntries].map( each => {
    return {
        path: `/${each.id}`,
        name: each.title,
        component: () => import(`../../contents/blogposts/${each.id}.vue`)
    }
});

const router = new VueRouter({
    mode: 'history',
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
            path: '/timeline',
            component: Timeline,
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
            path: '/projects',
            name: 'projects',
            component: Eatles
        },
        {
            path: '/miscellaneous',
            name: 'miscellaneous',
            component: Miscellaneous
        },
        ...blogRoutes
    ]
});

export default router;