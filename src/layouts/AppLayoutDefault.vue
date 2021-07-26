<template>
    <div>
        <navbar />
        <div class="container">
            <router-view />
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
    components: { Navbar },
    data: () => ({}),
}
</script>