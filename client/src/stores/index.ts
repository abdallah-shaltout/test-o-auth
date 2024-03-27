import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const useStore = defineStore('main', () => {
   const name = ref<string>('')

    return{
        name
    }
})
