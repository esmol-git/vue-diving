<template>
  <v-app class="home">
    <h1>This is an home page</h1>
		<v-btn @click="reserve">POSTS</v-btn>
		<v-container>
			<v-row d-flex justify-space-between no-gutters>
				<v-col cols="4">
					<v-card class="mb-4"  v-for="post in POSTS" :key="post.id" :loading="loading">
						<template slot="progress">
							<v-progress-linear
								color="deep-purple"
								height="10"
								indeterminate
							></v-progress-linear>
						</template>
						<v-card-text>{{post.id}}</v-card-text>
						<v-card-title>{{post.title}}</v-card-title>
						<v-card-title>{{post.author}}</v-card-title>
						<v-card-title>{{post.data}}</v-card-title>
						<v-card-text>{{post.body}}</v-card-text>
						<v-card-text>{{post.userId}}</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  components: {},
	  data: () => ({
			loading: false,
		}),
		  computed: {
    ...mapGetters(["POSTS"]),
  },
  methods: {
    ...mapActions(["getPosts"]),
		reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
  },
  mounted() {
    this.getPosts();
  },
};
</script>
