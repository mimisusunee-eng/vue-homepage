<template>
  <footer class="footer">
    <div class="footer-top">

      <!-- คอลัมน์ซ้าย -->
      <div class="footer-column">
       <img src="/logo.png" alt="Big Housekeeper" class="logo-img" />
       <span class="logo-text">BIG HOUSEKEEPER</span>
        

        <p class="menu">Guide</p>
        <p class="menu">Contact us</p>

        <p class="text">
          Bangkok : 33/4 The Nine Tower Grand Rama 9 Building B, 30th Floor,
          Rama 9 Road, Huai Khwang, Bangkok 10310
        </p>

        <p class="text">
          Telephone : +66(0)63682999 / +8613693665327
        </p>
      </div>

      <!-- คอลัมน์กลาง -->
      <div class="footer-column">
        <p class="menu">News</p>

        <p class="text">
          Pattaya : Name : Baidi International (Pattaya) Real Estate Asset Management
        </p>

        <p class="text">
          Nongprue, Banglamung, Chonburi Province 20150
        </p>

        <p class="text">
          Mail : support@bighousekeeper.cn
        </p>
      </div>

      <!-- คอลัมน์ขวา -->
      <div class="footer-column">
        <p class="menu">About us</p>

        <div class="qr-group">
          <div class="qr">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=service" />
            <p>service</p>
          </div>

          <div class="qr">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=wechat" />
            <p>WeChat</p>
          </div>

          <div class="qr">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=miniapp" />
            <p>mini apps</p>
          </div>
        </div>
      </div>

    </div>

    <hr class="divider">

    <div class="footer-bottom">
      <p>© 2024 Big Housekeeper - All rights reserved - Webmaster by bighousekeeper.cn</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

  
.footer {
  background-color: #0b4fb3;
  color: white;
  padding: 40px 60px;

  
  font-family: 'Poppins', 'Prompt', sans-serif;



  width: 100vw;
  position: relative;

  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.footer-top {
  display: flex;
  gap: 40px;
}

.footer-column {
  flex: 1;
}

.logo-box {
  display: flex;
  align-items: center;
  gap: 10px; /* ระยะห่างรูปกับตัวหนังสือ */
  margin-bottom: 20px;
}

.logo-img {
  height: 40px; /* ขนาดโลโก้ */
}

.logo-text {
  font-size: 15px;
  font-weight: 600;
}



.menu {
  font-weight: bold;
  margin: 10px 0;
}

.text {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 10px;
}

.qr-group {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.qr {
  text-align: center;
}

.qr img {
  background: white;
  padding: 6px;
  border-radius: 6px;
}

.divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  margin: 30px 0;
}

.footer-bottom {
  text-align: center;
  font-size: 13px;
}
</style>
