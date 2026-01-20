/* แถบบน */ 

<template>
  <section class="hero">
    <div class="overlay">
      <div class="search-box">
        <!-- location -->
        <div class="location">
          Pattaya
          <span class="arrow">▼</span>
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
</script>

<style scoped>
.hero {
  width: 100vw;
  height: 520px;
  background-image: url('/background.png');
  background-size: cover;
  background-position: center;
  position: relative;

  font-family: 'Comfortaa', 'Prompt', sans-serif;

  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}


/* dark overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 60px;
}

/* search container */
.search-box {
  background: #fff;
  border-radius: 999px;
  display: flex;
  align-items: center;
  padding: 10px;
  width: 720px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* location */
.location {
  padding: 0 20px;
  font-weight: 500;
  border-right: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 6px;
}

.arrow {
  font-size: 12px;
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
  background: #004AAD;
  color: #fff;
  border: none;
  border-radius: 999px;
  padding: 12px 28px;
  font-size: 14px;
  cursor: pointer;
}
</style>
