<template>
	<v-app>

		<navbar @toggleDrawer="drawer = !drawer"/>

		<v-navigation-drawer
			app
			v-model="drawer"
			class="pt-4"
      color="grey lighten-3"
      mini-variant
			
		>
			<sidebar/>
		</v-navigation-drawer>
	
		<v-main>

			<v-container fluid>

				<router-view></router-view>

			</v-container>

		</v-main>

		<v-footer app>
		</v-footer>
	</v-app>
</template>

<script>
	import Navbar from '@/components/Navbar'
	import Sidebar from '@/components/Sidebar'
export default {
	components: {
		Navbar,
		Sidebar
		},
		data: () => ({ drawer: false }),
}
</script>