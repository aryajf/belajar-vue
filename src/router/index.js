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
        path: '/movie',
        name: 'movie home',
        component: () => import('../pages/movie/Home.vue')
    }
]

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(),
    routes
})

export default router