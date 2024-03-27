<template>
    <section class="min-h-screen w-full flex-center">
        <div class="flex-center p-4 rounded bg-black flex-col gap-2 w-nine max-w-xl">
            <a
                href="http://localhost:3005/auth/google"
                class="flex-center w-full bg-light trans hover:bg-slate-200 py-2 px-4 rounded text-xl font-bold"
            >
                SignIn With Google
            </a>
            <button
                class="w-full bg-light trans hover:bg-slate-200 py-2 px-4 rounded text-xl font-bold"
            >
                SignIn With Github
            </button>
            <a
                href="http://localhost:3005/auth/facebook"
                class="flex-center w-full bg-light trans hover:bg-slate-200 py-2 px-4 rounded text-xl font-bold"
            >
                SignIn With Facebook
            </a>

            <form @submit.prevent="" class="flex-center flex-col gap-2 text-light w-full">
                <label class="flex flex-col gap-2 w-full">
                    <span>Email, Username, Phone</span>
                    <input type="text" class="py-2 px-4 rounded text-dark text-lg font-bold" />
                </label>
                <label class="flex flex-col gap-2 w-full">
                    <span>Password</span>
                    <input type="password" class="py-2 px-4 rounded text-dark text-lg font-bold" />
                </label>

                <button
                    type="submit"
                    class="bg-blue-500 text-light py-2 px-4 text-lg font-bold rounded trans hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import { Authnteced } from '@/libs/auth'
import axios from 'axios'

onMounted(async () => {
    const data = await axios.get('http://localhost:3005/auth/profile', {
        withCredentials: true
    })

    console.log(data)
    // const user = await Authnteced()
    // console.log(user)
    // if (route.query.signed_in === 'true' || (await Authnteced())) {
    //     router.push({ name: 'profile' })
    // }
})
</script>
