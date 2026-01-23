/* แถบบน */

<template>
  <section class="hero">
    <div class="overlay">
      <div class="search-box">
        <!-- location -->
        <div class="location" @click="toggleDropdown">
          {{ selectedLocation }}
          <div class="arrow">
          <img src="/arrow3.svg" alt="arrow" />
          </div>

          <ul v-if="showDropdown" class="dropdown">
            <li @click.stop="selectLocation('Bangkok')">Bangkok</li>
            <li @click.stop="selectLocation('Pattaya')">Pattaya</li>
          </ul>
        </div>

        <!-- input -->
        <input
          type="text"
          placeholder="Search by location, project name or keyword"
        />

        <!-- button -->
        <button>search</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const selectedLocation = ref("Pattaya");
const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const selectLocation = (location) => {
  selectedLocation.value = location;
  showDropdown.value = false;
  console.log("Selected location:", location);
};
</script>

<style scoped>
.hero {
  width: 100%;
  height: 520px;
  background-image: url("/background.png");
  background-size: cover;
  background-position: center;
  position: relative;
  font-family: "Comfortaa", "Prompt", sans-serif;
}

/* dark overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 0px;
}

/* search center */
.search-box {
  background: #fff;
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  border-radius: 999px;
  display: flex;
  align-items: center;
  padding: 10px;
  width: 720px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-bottom: 1px solid #F1F4F9;
  
}

/* location */
.location {
  padding: 0 20px;
  font-weight: 500;
  border-right: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
  cursor: pointer;
  
}

.dropdown {
  position: absolute;
  top: 120%;
  left: 0;
  background: #F1F4F9;
  color: #2d2d2d;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  list-style: none;
  padding: 6px 0;
  width: 140px;
  z-index: 10;
}

.dropdown li {
  padding: 10px 16px;
  cursor: pointer;
  color: #2d2d2d;         
  transition: all 0.2s ease;
}

.dropdown li:hover {
  background: #ffffff;     
  color: #2D2D2D;         
}

.arrow {
  width: 16px;
  height: 16px;
}

.arrow img {
  width: 10px;
  height: 12px;
}

/* input */
.search-box input {
  flex: 1;
  border: none;
  outline: none;
  padding: 0 20px;
  font-size: 14px;
}
/* button */
.search-box button {
  background: #004aad;
  color: #fff;
  border: none;
  border-radius: 999px;
  padding: 12px 28px;
  font-size: 14px;
  cursor: pointer;
}

@media (max-width: 767px) {
  .search-box {
    width: 92%;
    flex-direction: column;
    border-radius: 24px;
    gap: 10px;
  }

  .location {
    width: 100%;
    justify-content: space-between;
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
    padding: 10px 14px;
  }

  .search-box input {
    width: 100%;
    padding: 12px 14px;
  }

  .search-box button {
    width: 100%;
  }
}

</style>