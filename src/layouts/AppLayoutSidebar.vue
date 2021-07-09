<template>
  <v-app>
		<v-app-bar app>
		</v-app-bar>
		<v-main>

		</v-main>
    <slot />
  </v-app>
</template>

<script>
	import Navbar from '@/components/Navbar'
export default {
	components: {
		Navbar,
		}
}
</script>