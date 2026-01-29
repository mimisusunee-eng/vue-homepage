/* แถบบน */

<template>
  <section class="hero">
    <div class="overlay">
      <div class="search-box">
        <div class="hero-inner"></div>

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
          style="font-size: 20px;"
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
  height: 780px;

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
  background: #F1F4F9;
  position: absolute;
  bottom: -26px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 999px;
  display: flex;
  align-items: center;
  padding: 10px 12px;
  gap: 12px;
  width: 1100px;               
  height: 104px;
  box-shadow: 0 10px 30px rgba(59, 58, 58, 0.2);
  box-sizing: border-box;
  border-bottom: 1px solid #F1F4F9;
  font-size: 30px;
  
}

.location {
  padding: 0 20px;
  font-weight: 500;
  border-right: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
  cursor: pointer;
  font-size: 30px;

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
  width: 212px;
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
  width: 25.11px;
  height: 17.75px;
  transform: translateY(-40%);
}

/* input */
.search-box input {
  flex: 1;
  border: none;
  outline: none;
  padding: 0 20px;
  font-size: 26px;
  background: transparent;   
  color: #2d2d2d;         
}

.search-box input::placeholder {
  font-size: 26px;     
  color: #A9B0BA;
  height: 100%;
}

/* button */
.search-box button {
  background: #004aad;
  color: #fff;
  border: none;
  border-radius: 999px;
  padding: 12px 28px;
  font-size: 30px;
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


  .search-wrapper {
  position: absolute;
  bottom: -52px;

  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  max-width: 1100px;
}
  
.hero-inner {
  width: 100%;
  max-width: 1400px;   
  margin: 0 auto;
  position: relative;
}

}


/*  iPad */
@media (max-width: 1024px) {

  .hero {
    height: 460px;                    
    background-position: center top;  
  }

  .search-box {
    width: 80%;
    height: 42px;
    padding: 8px 12px;
    gap: 8px;
    bottom: -24px;
    min-height: 76px;
  }

  .location {
    font-size: 20px;
    padding: 0 14px;
  }

  .search-box input {
    font-size: 20px;
  }

  .search-box input::placeholder {
    font-size: 20px;
  }

  .search-box button {
    height: 44px;
    font-size: 20px;
    padding: 10px 20px;
  }

  .dropdown {
    width: 180px;                  
    border-radius: 12px;
    padding: 4px 0;
  }

  .dropdown li {
    font-size: 16px;
    padding: 8px 12px;
  }
}

  .arrow img {
    width: 18px;
    height: auto;
    transform: translateY(-30%);
  }


/*  iPhone  */
@media (max-width: 767px) {

  .hero {
    height: 360px;                    
    background-position: center top;  
  }

  .search-box {
    width: 86%;
    height: auto;
    flex-direction: column;
    border-radius:14px;
    gap: 6px;
    padding: 12px;
    bottom: 10px;
  }

  .location {
    width: 100%;
    font-size: 16px;
    justify-content: space-between;
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
    padding: 8px 12px;
  }

  .search-box input {
    width: 100%;
    font-size: 16px;
    padding: 8px 12px;
  }

  .search-box input::placeholder {
    font-size: 18px;
  }

  .search-box button {
    width: 100%;
    font-size: 16px;
    padding: 12px 0;
    height: 36px;
  }

 .dropdown {
    width: 100%;
    padding: 4px 0;         
    border-radius: 14px;    
    top: 110%;              
  }

  .dropdown li {
    font-size: 15px;        
    padding: 8px 12px;       
  }

}


</style>