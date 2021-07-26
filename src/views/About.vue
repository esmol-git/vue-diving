<template>
    <div>
        <h1>About page</h1>
        <p>Изначальное сообщение: «{{ message }}»</p>
        <p>Сообщение задом наперёд: «{{ reversedMessage }}»</p>
        <p>Длина строки: «{{ message.length }}»</p>
        <button v-on:click="show = !show">Переключить</button>
        <transition name="fade">
            <p v-if="show">привет</p>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'About',
    components: {},
    data: () => ({
        message: 'Привет',
        show: true,
    }),
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('').toLowerCase()
        },
    },
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
}
</style>
