import { storeToRefs } from "pinia"
import { useUIStore } from "../store/uiStore"



export const useUI = () => {

    const uiStore = useUIStore()
    const {isMenuOpen} = storeToRefs(uiStore)

    const toggleMenu = () => {
        uiStore.setIsMenuOpen();
    };

    return {
        // Properties
        isMenuOpen,

        // Methods
        toggleMenu,
    }
}