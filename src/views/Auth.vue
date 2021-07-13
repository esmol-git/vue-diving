<template>
	<div class="wrapper">
		<v-card
			elevation="2"
			class="pa-4"
			max-width="600"
			min-width="600"
		>
		<h2>Login</h2>
			<form>
					<v-text-field
						v-model="name"
						:error-messages="nameErrors"
						:counter="10"
						label="Name"
						required
						@input="$v.name.$touch()"
						@blur="$v.name.$touch()"
					></v-text-field>
					<v-text-field
						v-model="email"
						:error-messages="emailErrors"
						label="E-mail"
						required
						@input="$v.email.$touch()"
						@blur="$v.email.$touch()"
					></v-text-field>
					<v-select
						v-model="select"
						:items="items"
						:error-messages="selectErrors"
						label="Item"
						required
						@change="$v.select.$touch()"
						@blur="$v.select.$touch()"
					></v-select>
					<v-checkbox
						v-model="checkbox"
						:error-messages="checkboxErrors"
						label="Do you agree?"
						required
						@change="$v.checkbox.$touch()"
						@blur="$v.checkbox.$touch()"
					></v-checkbox>

					<v-btn
						class="mr-4"
						@click="submit"
					>
						submit
					</v-btn>
					<v-btn @click="clear">
						clear
					</v-btn>
			</form>
		</v-card>
		<router-link class="link" to="/">
		<v-icon color="black">mdi-arrow-left</v-icon>
		Главная</router-link>
	</div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10), minLength: minLength(4) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      name: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: true,
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.minLength && errors.push('Name must be at most 4 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>

<style >
	.wrapper {
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: #455533;
	}
	.v-application .link{
		font-size: 20px;
		font-weight: bold;
		text-decoration: none;
		letter-spacing: 2px;
		color: black;
		padding-top: 20px;
	}
</style>