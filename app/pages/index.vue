<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  const { ScrollSpy } = await import('bootstrap')
  const el = document.querySelector('[data-bs-spy="scroll"]')
  if (el) ScrollSpy.getOrCreateInstance(el).refresh()
})
</script>

<template>
  <main
    class="scrollspy-example"
    tabindex="0"
    data-bs-spy="scroll"
    data-bs-target="#navbar-example2"
    data-bs-root-margin="0px 0px -40%"
    data-bs-smooth-scroll="true"
  >
    <HomeSection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />
    <AwardsSection />
    <CertificationsSection />
    <ContactSection />
    <FooterCustom />
  </main>
</template>
