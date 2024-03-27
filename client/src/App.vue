<template>
    <main>
        <header class="h-16 flex-center">
            <div class="container flex-center">
                <ul class="flex items-center gap-2">
                    <li>
                        <router-link
                            :to="{ name: 'home' }"
                            class="text-2xl font-medium px-4 py-2 rounded trans hover:bg-blue-500 hover:text-light"
                            >Home</router-link
                        >
                    </li>
                    <li>
                        <router-link
                            :to="{ name: 'profile' }"
                            class="text-2xl font-medium px-4 py-2 rounded trans hover:bg-blue-500 hover:text-light"
                            >Profile</router-link
                        >
                    </li>
                    <li>
                        <router-link
                            :to="{ name: 'register' }"
                            class="text-2xl font-medium px-4 py-2 rounded trans hover:bg-blue-500 hover:text-light"
                            >Register</router-link
                        >
                    </li>
                </ul>
            </div>
        </header>
        <router-view />
    </main>
</template>

<script setup lang="ts"></script>

<style>
.router-link-exact-active {
    @apply bg-blue-500  text-lime-50;
}
</style>
