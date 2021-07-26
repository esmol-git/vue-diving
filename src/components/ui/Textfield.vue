<template>
    <input
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="input"
    />
</template>

<script>
export default {
    name: 'textfield',
    props: {
        type: {
            type: String,
        },
        placeholder: {
            type: String,
            default: 'placeholder',
        },
        value: {
            type: [String, Number],
        },
    },
    methods: {
        input(e) {
            let value = e.target.value
            this.$emit('input', value)
        },
    },
}
</script>

<style lang="scss" scoped>
</style>