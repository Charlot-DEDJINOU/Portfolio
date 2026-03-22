import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import backgroundBlack from '~/assets/backgroundBack.png'
import backgroundWhite from '~/assets/backgroundWhite.png'

const darkTheme = {
  background: {
    primary: 'rgba(0,0,0,0.61)',
    secondary: 'rgba(0,0,0,0.39)',
    tertiaire: 'rgba(0,0,0,0.25)',
    drawer: '#3e3e3e',
    image: backgroundBlack
  },
  colorprimary: 'white',
  colorsecondary: 'black'
}

const lightTheme = {
  background: {
    primary: 'rgba(255,255,255,0.61)',
    secondary: 'white',
    tertiaire: 'rgba(0,0,0,0.10)',
    drawer: '#f5f5f5',
    image: backgroundWhite
  },
  colorprimary: 'black',
  colorsecondary: 'white'
}

export const usePortfolioStore = defineStore('portfolio', () => {
  const dark = ref(true)
  const uniColor = ref('#16C953')
  const terminalMode = ref(false)

  const theme = computed(() => (dark.value ? darkTheme : lightTheme))

  function toggleUniColor(color: string) {
    uniColor.value = color
  }

  function toggleTheme() {
    if (import.meta.client) {
      const body = document.body
      if (dark.value) {
        body.classList.remove('custom-dark')
        body.classList.add('custom-light')
      } else {
        body.classList.remove('custom-light')
        body.classList.add('custom-dark')
      }
    }
    dark.value = !dark.value
  }

  function toggleTerminalMode() {
    terminalMode.value = !terminalMode.value
  }

  function setTerminalMode(val: boolean) {
    terminalMode.value = val
  }

  return {
    dark,
    uniColor,
    terminalMode,
    theme,
    toggleUniColor,
    toggleTheme,
    toggleTerminalMode,
    setTerminalMode
  }
})
