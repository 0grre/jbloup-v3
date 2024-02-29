import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/fr/Home.vue';
import Archives from '../pages/fr/Archives.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/archives', component: Archives },
    { path: '/en', component: Home },
    { path: '/en/archives', component: Archives },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
