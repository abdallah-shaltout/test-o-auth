<template>
    <section class="min-h-screen w-full flex-center">
        <div class="flex-center p-4 rounded bg-black flex-col gap-2 w-nine max-w-xl">
            <form @submit.prevent="" class="flex-center flex-col gap-2 text-light w-full">
                <label class="flex flex-col gap-2 w-full">
                    <span>username</span>
                    <input type="text" class="py-2 px-4 rounded text-dark text-lg font-bold" />
                </label>
                <label class="flex flex-col gap-2 w-full">
                    <span>Email</span>
                    <input type="text" class="py-2 px-4 rounded text-dark text-lg font-bold" />
                </label>
                <label class="flex flex-col gap-2 w-full">
                    <span>phone</span>
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
                    Register
                </button>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts"></script>
