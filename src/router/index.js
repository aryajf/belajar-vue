import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../pages/About.vue')
    },
    {
        path: '/tutorial/0',
        name: 'variable',
        component: () => import('../pages/tutorial/00variable.vue')
    },
    {
        path: '/tutorial/1',
        name: 'conditional',
        component: () => import('../pages/tutorial/01conditional.vue')
    },
    {
        path: '/tutorial/2',
        name: 'looping',
        component: () => import('../pages/tutorial/02looping.vue')
    },
    {
        path: '/tutorial/3',
        name: 'component',
        component: () => import('../pages/tutorial/03component.vue')
    },
    {
        path: '/tutorial/4',
        name: 'lifecycle',
        component: () => import('../pages/tutorial/04lifecycle.vue')
    },
    {
        path: '/tutorial/5',
        name: 'computed',
        component: () => import('../pages/tutorial/05computed.vue')
    },
    {
        path: '/tutorial/6',
        name: 'watch',
        component: () => import('../pages/tutorial/06watch.vue')
    },
    {
        path: '/movie',
        name: 'movie home',
        component: () => import('../pages/movie/Home.vue')
    },
    {
        path: '/movie/:id',
        name: 'movie detail',
        component: () => import('../pages/movie/Show.vue')
    }
]

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(),
    routes
})

export default router