<template>
    <div>
        <h1>Home page</h1>
        <btn
            type="submit"
            @submit="totalPlus"
            class="btn btnPrimary"
            title="+"
            :disabled="total >= 10"
        />
        <btn
            type="submit"
            @submit="totalMinus"
            class="btn btnPrimary"
            title="-"
            :disabled="total <= 0"
        />
        <p>Количество лайков: {{ likes }}</p>
        <btn class="btn btnPrimary" @submit="totalLikes" title="likes" />
        <btn class="btn btnDanger" @submit="resetLikes" title="reset" />
        <textfield type="number" placeholder="Total" v-model="total" />

        <p v-show="textHide">не может быть меньше нуля</p>
        <p v-show="textHide2">не может быть больше 10</p>

        <!-- first modal -->
        <btn
            class="btn btnPrimary"
            @submit="modalShowFirst"
            title="Show first modal"
        />
        <btn
            class="btn btnDanger"
            @submit="modalShowWith"
            title="Show with modal"
        />
        <btn
            class="btn btnOrange"
            @submit="modalValidate = !modalValidate"
            title="Show modal with form + validate"
        />

        <modals
            title="First modal"
            v-show="modalFirst"
            @close="modalFirst = false"
        >
            <!-- body -->
            <div slot="body">
                <p>Text Text Text Text Text Text Text</p>
                <button
                    class="btn btnPrimary"
                    @click="modalFirst = !modalFirst"
                >
                    Well Done!
                </button>
                <btn
                    class="btn btnDanger"
                    @submit="modalShowWith"
                    title="Show with modal"
                />
            </div>
        </modals>

        <!-- second modal -->

        <modals
            title="Modal with form"
            v-show="modalSecond.show"
            @close="modalSecond.show = false"
        >
            <!-- body -->
            <div slot="body">
                <form @submit.prevent="submitSecondForm">
                    <label>Name:</label>
                    <input type="text" required v-model="modalSecond.name" />
                    <label>Email:</label>
                    <input type="email" required v-model="modalSecond.email" />
                    <button class="btn btnPrimary">Submit!</button>
                </form>
            </div>
        </modals>

        <!-- modal with validate -->
        <modalValidate v-show="modalValidate" @close="modalValidate = false" />
    </div>
</template>

<script>
import Btn from '@/components/ui/Button'
import Textfield from '@/components/ui/Textfield'
import modals from '@/components/ui/Modal'
import modalValidate from '@/components/ModalValidate'
export default {
    components: { Btn, Textfield, modals, modalValidate },
    data: () => ({
        total: 0,
        textHide: false,
        textHide2: false,
        modalFirst: false,
        likes: 0,
        modalSecond: {
            show: false,
            name: '',
            email: '',
        },
        modalValidate: false,
    }),
    methods: {
        totalPlus() {
            if (this.total >= 9) {
                this.textHide2 = true
            }
            this.total++
            this.textHide = false
        },
        totalMinus() {
            if (this.total < 0) {
                this.textHide2 = false
            } else {
                this.textHide = true
            }
            this.total--
        },
        click() {
            console.log('click!!!')
        },
        submitSecondForm() {
            console.log({
                name: this.modalSecond.name,
                email: this.modalSecond.email,
            })
            this.modalSecond.name = ''
            this.modalSecond.email = ''
            this.modalSecond.show = false
        },
        modalShowWith() {
            this.modalSecond.show = !this.modalSecond.show
        },
        modalShowFirst() {
            this.modalFirst = !this.modalFirst
        },
        totalLikes() {
            this.likes += 1
        },
        resetLikes() {
            this.likes = 0
        },
    },
}
</script>

<style lang="scss" scoped>
</style>
