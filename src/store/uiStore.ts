import { defineStore } from "pinia";

interface UIState {
    isMenuOpen: boolean
}

export const useUIStore = defineStore('ui', {
    state: (): UIState => ({
        isMenuOpen: true,
    }),
    actions: {
        setIsMenuOpen() {
            this.isMenuOpen = !this.isMenuOpen
        }
    }
})