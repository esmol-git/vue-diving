<template>
    <div class="navbar">
        <div class="container">
            <nav class="navbar__wrapper">
                <span class="navbar__logo logo">
                    <router-link to="/">Logo</router-link>
                </span>
                <ul class="navbar__menu menu">
                    <router-link
                        v-for="(item, i) in menu"
                        tag="li"
                        :key="i"
                        class="menu__item"
                        :to="item.url"
                        exact-active-class="active"
                    >
                        <i class="material-icons">{{ item.icon }}</i>
                        {{ item.title }}
                    </router-link>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data: () => ({
        menu: [
            { title: 'Home', url: '/', icon: 'home' },
            {
                title: 'About',
                url: '/about',
                icon: 'flag',
            },
            { title: 'Contacts', url: '/contacts', icon: 'phone' },
            { title: 'Login', url: '/auth', icon: 'login' },
        ],
    }),
}
</script>

<style lang="scss" scoped>
</style>