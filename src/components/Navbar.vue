<template>
	<v-app-bar
		app
		absolute
		color="white"
		
    >
		
		<v-toolbar-title>{{title}}</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-btn text v-for="item in menu" :key="item.title" :to="item.url">
			<v-icon left>{{item.icon}}</v-icon>
			{{item.title}}
		</v-btn>

		<v-app-bar-nav-icon @click="$emit('toggleDrawer')"></v-app-bar-nav-icon>

  </v-app-bar>
</template>

<script>
export default {
	data:()=>({
		
		title:'Title vue',
		menu:[
			{title: 'Home', url:'/', icon:'mdi-home-outline'},
			{title: 'About', url:'/about', icon:'mdi-briefcase-check-outline'},
			{title: 'Contacts', url:'/contacts', icon:'mdi-account-box-outline'},
			{title: 'Login', url:'/auth', icon:'mdi-login'}
		],

	}),
}
</script>