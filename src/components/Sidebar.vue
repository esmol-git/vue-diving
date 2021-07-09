<template>

  <v-list>

	<v-list-item>
		<v-list-item-content>
			<v-list-item-title class="text-h6">
				Application
			</v-list-item-title>
			<v-list-item-subtitle>
				subtext
			</v-list-item-subtitle>
		</v-list-item-content>
	</v-list-item>

	<v-divider></v-divider>

		<v-list-item
			v-for="item in items"
			:key="item.title"
			link
			:to="item.url"
		>
			<v-list-item-icon>
				<v-icon>{{ item.icon }}</v-icon>
			</v-list-item-icon>

			<v-list-item-content>
				<v-list-item-title>{{ item.title }}</v-list-item-title>
			</v-list-item-content>
		</v-list-item>
  </v-list>
</template>


<script>
  export default {
    data () {
      return {
        items: [
			{title: 'Home', url:'/', icon:'mdi-home-outline'},
			{title: 'About', url:'/about', icon:'mdi-briefcase-check-outline'},
			{title: 'Contacts', url:'/contacts', icon:'mdi-account-box-outline'},
			{title: 'Login', url:'/auth', icon:'mdi-login'}
        ],
      }
    },
  }
</script>