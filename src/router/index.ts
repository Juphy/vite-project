import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/pages/Home.vue')
    }
]

export const Router = createRouter({
    scrollBehavior: () => ( { left: 0, right: 0 } ),
    history: createWebHistory(),
    routes
})