export function downloadCV(locale) {
  if (!import.meta.client) return
  const link = document.createElement('a')
  link.download = 'Charlot_DEDJINOU_CV.pdf'
  link.href = locale === 'fr' ? '/Charlot_DEDJINOU_Fr.pdf' : '/Charlot_DEDJINOU_En.pdf'
  link.click()
}

export function viewCV(locale) {
  if (!import.meta.client) return
  window.open(locale === 'fr' ? '/Charlot_DEDJINOU_Fr.pdf' : '/Charlot_DEDJINOU_En.pdf', '_blank')
}

export function toggleMenu(url) {
  if (!import.meta.client) return
  const btn = document.getElementsByClassName('btn-close')[0]
  const link = document.createElement('a')
  link.href = url
  btn.click()
  link.click()
}

export function Forward(urlDuSite) {
  if (urlDuSite !== '') {
    window.open(urlDuSite, '_blank')
  }
}

export const scrollBottom = (id) => {
  if (!import.meta.client) return
  const endOfPageElement = document.getElementById(id)
  endOfPageElement?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
