<script setup>
import { computed } from 'vue'
import { usePortfolioStore } from '~/stores/portfolio'
import { useI18n } from 'vue-i18n'

const store = usePortfolioStore()
const { locale } = useI18n()

const siteUrl = 'https://charlotdedjinou.com'
const socialImage = `${siteUrl}/image-og.png`

const seoByLocale = {
  en: {
    title: 'Charlot DEDJINOU | Software Engineer Portfolio',
    description:
      'Charlot DEDJINOU is a software engineer building full-stack, AI, IoT, mobile, and cybersecurity projects. Explore projects, awards, certifications, and contact details.',
    locale: 'en_US'
  },
  fr: {
    title: 'Charlot DEDJINOU | Portfolio Ingénieur Logiciel',
    description:
      "Charlot DEDJINOU est un ingénieur logiciel spécialisé en full-stack, IA, IoT, mobile et cybersécurité. Découvrez ses projets, distinctions, certifications et contacts.",
    locale: 'fr_FR'
  }
}

const seo = computed(() => seoByLocale[locale.value] || seoByLocale.en)

useSeoMeta({
  title: () => seo.value.title,
  description: () => seo.value.description,
  robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  ogType: 'website',
  ogSiteName: 'Charlot DEDJINOU',
  ogTitle: () => seo.value.title,
  ogDescription: () => seo.value.description,
  ogUrl: () => locale.value === 'fr' ? `${siteUrl}/fr/` : `${siteUrl}/`,
  ogLocale: () => seo.value.locale,
  ogImage: socialImage,
  ogImageAlt: 'Charlot DEDJINOU portfolio preview',
  twitterCard: 'summary_large_image',
  twitterTitle: () => seo.value.title,
  twitterDescription: () => seo.value.description,
  twitterImage: socialImage,
  twitterImageAlt: 'Charlot DEDJINOU portfolio preview',
  twitterCreator: '@CharlotDEDJINOU',
  twitterSite: '@CharlotDEDJINOU'
})

useHead({
  htmlAttrs: { lang: () => locale.value },
  link: [
    { rel: 'canonical', href: () => locale.value === 'fr' ? `${siteUrl}/fr/` : `${siteUrl}/` },
    { rel: 'alternate', hreflang: 'en', href: `${siteUrl}/` },
    { rel: 'alternate', hreflang: 'fr', href: `${siteUrl}/fr/` },
    { rel: 'alternate', hreflang: 'x-default', href: `${siteUrl}/` }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Charlot DEDJINOU',
        url: siteUrl,
        image: socialImage,
        jobTitle: locale.value === 'fr' ? 'Ingénieur Logiciel' : 'Software Engineer',
        description: seo.value.description,
        email: 'mailto:dedjinoucharlotjoel@gmail.com',
        telephone: '+22959105267',
        address: { '@type': 'PostalAddress', addressLocality: 'Abomey-Calavi', addressCountry: 'BJ' },
        sameAs: [
          'https://github.com/Charlot-DEDJINOU',
          'https://www.linkedin.com/in/charlot-dedjinou',
          'https://wa.me/22959105267'
        ],
        knowsAbout: ['Full-stack development', 'Vue.js', 'React', 'FastAPI', 'Artificial Intelligence', 'Internet of Things', 'Cybersecurity', 'Mobile development']
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Charlot DEDJINOU',
        url: siteUrl,
        inLanguage: locale.value,
        description: seo.value.description
      })
    }
  ]
})
</script>

<template>
  <TerminalView v-if="store.terminalMode" />
  <NuxtPage v-else />
</template>
