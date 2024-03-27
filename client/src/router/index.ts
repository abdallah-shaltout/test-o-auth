import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { Authnteced } from '@/libs/auth'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('../views/AboutView.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/RegisterView.vue'),
            meta: {
                requiresAuth: false
            }
        }
    ]
})

router.beforeEach(async (to, from, next) => {
    const authed = await Authnteced()
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!authed) {
            return next({
                name: 'home'
            })
        }
    } else {
        if (authed) {
            return next({
                name: 'profile'
            })
        }
    }
    next()
})

export default router
