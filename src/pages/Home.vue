<template>
  <div>
    <Hero />

    <!-- loading -->
    <p v-if="propertyStore.loading">⏳ กำลังโหลดข้อมูลบ้าน...</p>

    <!-- list -->
    <div v-else>
      <div
        v-for="item in propertyStore.list"
        :key="item.id"
        class="box"
      >
        <b>{{ item.name }}</b>
        <div>ราคา {{ item.price }} บาท</div>
      </div>
    </div>

    <PropertySection :title="$t('newProjects')" />
    <PropertySection :title="$t('handpickedProperties')" />
    <PropertySection :title="$t('rentAHouse')" />

    <HelpCenter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import Hero from '../components/Hero.vue'
import PropertySection from '../components/PropertySection.vue'
import HelpCenter from '../components/HelpCenter.vue'

import { useUserStore } from '../store/user'
import { usePropertyStore } from '../store/property'

const userStore = useUserStore()
const propertyStore = usePropertyStore()

onMounted(() => {
  userStore.fetchTodos()
  propertyStore.fetchProperties()
})
</script>


<style scoped>
.box {
  margin: 12px 0;
  padding: 12px;
  background: #f2f4ff;
  border-radius: 8px;
}
</style>
