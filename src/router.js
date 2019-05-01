import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/chat",
			name: "Chat",
			component: () => import("./views/Chat.vue"),
			props: true,
			beforeEnter: (to, from, next) => {
				if (to.params.name) {
					return next();
				}
				return next({ name: "home" });
			}
		}
	]
});
