import Vue from "vue";
import Vuex from "vuex";
import api from "@/api"

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		posts: [],
	},
	actions: {
		async getPosts({ commit }) {
			let data = await api.posts()
			console.log(data);

			commit("SET_POSTS_TO_VUEX", data);
		},
	},
	mutations: {
		SET_POSTS_TO_VUEX: (state, posts) => {
			state.posts = posts;
		},
	},

	getters: {
		POSTS(state) {
			return state.posts;
		},
	},

	modules: {},
});
