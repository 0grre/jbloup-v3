import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Archives from '../pages/Archives.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/archives', component: Archives },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
