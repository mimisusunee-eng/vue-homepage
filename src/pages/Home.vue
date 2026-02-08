<script setup>
import { ref, onMounted, computed } from "vue";
import Hero from "../components/Hero.vue";
import PropertySection from "../components/PropertySection.vue";
import HelpCenter from "../components/HelpCenter.vue";
import { GetRentHouseList } from "../services/house";

const list = ref([]);

// ✅ DEFINE CITY (THIS WAS MISSING)
const city = ref(localStorage.webCity ? Number(localStorage.webCity) : 39);

const rentList = ref([]);

onMounted(async () => {
  try {
    const res = await GetRentHouseList({
      area: 0,
      bedroom: 0,
      category: 0,
      city: city.value,
      display: 2,
      district: 0,
      house_status: 28,
      keywords: "",
      page: 1,
      price: "",
      size: 8,
      sort: "",
      type: 0,
    });

    console.log("✅ RENT RAW RESPONSE:", res);

    list.value = res?.data?.house_data || [];
  } catch (err) {
    console.error("❌ Rent fetch failed:", err);
  }

  const res = await GetRentHouseList(params);
  rentList.value = res?.data?.house_data || [];
});

const newProjects8 = computed(() => list.value.slice(0, 8));
const handpickedProjects8 = computed(() => list.value.slice(0, 8));
const rentHouses8 = computed(() => list.value.slice(0, 8));
</script>

<template>
  <div class="home">
    <Hero />

    <PropertySection title="New Projects" :list="newProjects8" />
    <PropertySection
      title="Handpicked properties"
      :list="handpickedProjects8"
    />
    <PropertySection title="Rent a house" :list="rentList" />

    <HelpCenter />
  </div>
</template>
