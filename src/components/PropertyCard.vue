<template>
  <div
    v-if="item && item.id"
    class="card"
    @click="goDetail"
  >
    <div class="image-wrap">
      <img src="/house.png" alt="property" />

      <span class="tag">apartment</span>
      <span class="code">ID: {{ item.id }}</span>
    </div>

    <div class="content">
      <h3 class="title">{{ item.title || 'No title' }}</h3>

      <div class="location">
        <img src="/gps.svg" alt="location" />
        <span class="text">Mock location</span>
      </div>

      <div class="meta">
        <span class="meta-item">
          <img src="/bed.svg" />
          4
        </span>

        <span class="meta-item">
          <img src="/shower.svg" />
          2
        </span>

        <span class="meta-item">
          <img src="/land.svg" />
          457m²
        </span>
      </div>

      <div class="price">฿ {{ item.id * 10000 }}</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const goDetail = () => {
  if (!props.item?.id) return
  router.push(`/property/${props.item.id}`)
}
</script>

<style scoped>
.card {
  background: #F1F4F9;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.card:hover {
  background: #ffffff;
  transform: translateY(-4px);
}

.image-wrap {
  position: relative;
  height: 200px;
}

.image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tag {
  position: absolute;
  top: 22px;
  left: 14px;
  background: #004AAD;
  color: #ffffff;
  font-size: 14px;
  padding: 4px 14px;
  border-radius: 999px;
}

.code {
  position: absolute;
  bottom: 16px;
  right: 8px;
  font-size: 12px;
  color: #ffffff;
}

.content {
  padding: 16px 18px 18px;
}

.title {
  font-size: 16px;
  margin-bottom: 10px;
}

.location {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #7F7F7F;
  margin-bottom: 12px;
}

.meta {
  display: flex;
  gap: 14px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.meta-item img {
  width: 14px;
  height: 14px;
}

.price {
  font-size: 18px;
  color: #FF3E55;
  margin-top: 20px;
}
</style>
