<template>
    <button :type="type" @click="submit" :disabled="disabled">
        {{ title }}
    </button>
</template>

<script>
export default {
    name: 'vButton',
    props: {
        title: {
            type: String,
            default: 'Button',
        },
        type: {
            type: String,
            default: 'submit',
        },
        disabled: {
            type: Boolean,
        },
    },
    methods: {
        submit() {
            this.$emit('submit')
        },
    },
}
</script>

<style lang="scss" scoped>
</style>