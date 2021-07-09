import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import('@/views/Home.vue'),
		meta: {
      layout: 'AppLayoutDefault'
    }
	},
	{
		path: "/about",
		name: "About",
		component: () => import("@/views/About.vue"),
		meta: {
			layout: 'AppLayoutDefault'
    }
	},
	{
		path: "/contacts",
		name: "Contact",
		component: () => import("@/views/Contact.vue"),
		meta: {
			layout: 'AppLayoutSidebar'
    }
	},
	{
		path: "/auth",
		name: "Auth",
		component: () => import("@/views/Auth.vue"),
		meta: {
			layout: 'AppLayoutAuth'
    }
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
