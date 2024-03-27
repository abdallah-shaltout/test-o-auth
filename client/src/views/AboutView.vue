<template>
    <section class="min-h-screen flex-center">
        <div class="flex-center flex-col gap-2">
            <h1 class="text-3xl font-bold">Name: {{ user.name }}</h1>
            <h2 class="text-3xl font-bold">Email: {{ user.email }}</h2>
            <img
                :src="user.profilePic"
                v-if="user.profilePic"
                alt=""
                class="w-32 h-32 rounded-full shadow-xl"
            />
            <button
                @click="logout()"
                class="w-full bg-rose-500 trans hover:bg-rose-600 py-2 px-4 rounded text-xl font-bold"
            >
                Logout
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Authnteced } from '@/libs/auth'
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const user = reactive<{
    name: string
    email: string
    profilePic: string
}>({
    name: '',
    email: '',
    profilePic: ''
})

onMounted(async () => {
    const { user: data } = await Authnteced()

    user.name = data.displayName
    user.email = data.emails[0].value
    user.profilePic = data.photos[0].value
})

async function logout() {
    try {
        const response = await axios.get('http://localhost:3005/auth/logout', {
            withCredentials: true
        })

        if (response.status === 200) {
            router.push({ name: 'home' })
        }
    } catch (error) {
        console.log(error)
    }
}
</script>
