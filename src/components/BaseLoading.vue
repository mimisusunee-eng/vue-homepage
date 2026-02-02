<template>
  <div class="loading-wrapper">
    <div class="spinner"></div>
    <p>Loading...</p>
  </div>
</template>

<style scoped>
.loading-wrapper {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.spinner {
  width: 36px;
  height: 36px;
  border: 4px solid #eee;
  border-top-color: #004AAD;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

p {
  color: #666;
  font-size: 14px;
}
</style>
