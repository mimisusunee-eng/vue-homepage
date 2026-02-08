<template>
  <div class="item" @click="goDetail">
    <div class="item_img_box">
      <img
        class="item_img"
        :src="item.thumbnail || item.image || '/house.png'"
      />

      <span class="tag">{{ item.type_str || 'Apartment' }}</span>
      <span class="code">ID: {{ item.post_id || item.id }}</span>
    </div>

    <div class="item_content">
      <div class="content_title">
        {{ item.en_title || item.title }}
      </div>

      <div class="content_address">
        <img class="address_icon" src="/gps.svg" />
        {{ item.address || 'Unknown location' }}
      </div>

      <div class="content_detail">
        <div class="item_info">
          <img class="info_img" src="/bed.svg" /> {{ item.bedroom ?? 0 }}
        </div>
        <div class="item_info">
          <img class="info_img" src="/shower.svg" /> {{ item.toilet ?? 0 }}
        </div>
        <div class="item_info">
          <img class="info_img" src="/land.svg" />
          {{ item.building || '-' }} m²
        </div>
      </div>

      <div class="content_price">
        ฿ {{ item.rent_price?.toLocaleString() || '-' }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({ item: Object })

const goDetail = () => {
  const id = props.item.post_id || props.item.id
  if (id) router.push({ name: 'PropertyDetail', params: { id } })
}
</script>
