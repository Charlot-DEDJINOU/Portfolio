<script setup>
import { ref, computed, nextTick } from 'vue'
import { usePortfolioStore } from '~/stores/portfolio'
import Certifications from '~/data/Certifications.js'
import { Carousel3d, Slide } from 'vue3-carousel-3d'

const store = usePortfolioStore()
const uniColor = computed(() => store.uniColor)
const theme = computed(() => store.theme)

const certifications = ref(Certifications())
const text = ref('')
const isAutoplayEnabled = ref(true)
const carouselKey = ref(0)

const search = async () => {
  isAutoplayEnabled.value = false
  const query = text.value.toLowerCase()
  certifications.value = Certifications().filter(
    (item) =>
      item.name.toLowerCase().includes(query) ||
      item.tags.toLowerCase().includes(query) ||
      (item.keywords && item.keywords.toLowerCase().includes(query))
  )
  carouselKey.value++
  await nextTick()
  setTimeout(() => { isAutoplayEnabled.value = true }, 500)
}
</script>

<template>
  <section class="mt-5 certifications" id="certifications">
    <SectionTitle title="Certifications" />
    <div class="container mt-5">
      <div class="d-flex justify-content-around align-items-center flex-wrap search w-100 mb-2">
        <input v-model="text" @input="search" class="w-75" type="text" placeholder="Search"
          :style="{ backgroundColor: theme.background.secondary, color: theme.colorprimary }" />
        <span class="d-inline-block">{{ certifications.length }}</span>
      </div>
      <div class="d-flex flex-wrap justify-content-around">
        <ClientOnly>
          <carousel-3d :key="carouselKey" class="w-100 carousel" :width="500" :height="355"
            :autoplay="isAutoplayEnabled" :display="Math.min(5, certifications.length)" :startIndex="0">
            <slide v-for="(item, index) in certifications" :key="`${carouselKey}-${index}`" :index="index">
              <img :src="item.image" :alt="item.name" />
            </slide>
          </carousel-3d>
          <template #fallback>
            <div class="d-flex flex-wrap justify-content-center gap-3">
              <img v-for="item in certifications.slice(0, 6)" :key="item.name"
                :src="item.image" :alt="item.name" style="height:180px;object-fit:contain;" />
            </div>
          </template>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<style scoped>
.certifications .search input { height: 50px; font-size: 18px; border: none; outline: none; border-radius: 10px; padding: 0px 15px; }
.certifications img { width: 100%; height: 100%; object-position: center; }
@media screen and (max-width: 500px) { .certifications img { width: 100%; height: auto; object-position: center; } }
</style>
