<template>
  <footer class="footer">
    <div class="header">
      <div class="logo-box">
        <img src="/logo.png" class="logo-img" />
        <span class="logo-text">BIG HOUSEKEEPER</span>
      </div>

      <div class="menu">
        <span>Guide</span>
        <span>News</span>
        <span>About us</span>
      </div>
    </div>

    <div class="line"></div>

    <!-- CONTACT -->
    <!-- เอาไปไว้ที่เดิมหากไม่ชอบ -->
    <h3>Contact us</h3>
    <div class="contact-wrap"> 
      <div class="contact">
        <p>
          Bangkok：33/4 The Nine Tower Grand Rama 9, Building B, 30th Floor,
          Rama 9 Road, Huai Khwang, Huai Khwang, Bangkok 10310
        </p>
        <p>Telephone：+66(0)636582999 / +8613693665327</p>
      </div>

      <div class="v-line"></div>

      <div class="contact">
        <p>
          Pattaya：Name : Baidi International (Pattaya) Real Estate Asset
          Management Co.,Ltd No.388/237 Moo.10 Nongprue, Banglamung, Chonburi
          Province 20150
        </p>

        <p>Mail：support@bighousekeeper.cn</p>
      </div>
    </div>

    <div class="line"></div>

    <!-- FOLLOW -->
    <div class="follow-wrap">
      <div class="follow">
        <h3>Follow Us</h3>
        <div class="icons">
          <img src="/xhs.svg" alt="XHS" />
          <img src="/tiktok.svg" alt="TikTok" />
          <img src="/fb.svg" alt="Facebook" />
          <img src="/ig.svg" alt="Instagram" />
          <img src="/yt.svg" alt="YouTube" />
        </div>
      </div>

      <div class="qr-wrap">
        <div class="qr">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=service"
          />
          <span>service</span>
        </div>
        <div class="qr">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=wechat"
          />
          <span>WeChat</span>
        </div>
        <div class="qr">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=miniapp"
          />
          <span>mini apps</span>
        </div>
      </div>
    </div>

    <div class="line"></div>

    <!-- COPYRIGHT -->
    <div class="copyright">
      © 2024 Big Housekeeper - All rights reserved - Webmaster by
      bighousekeeper.cn
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background: #0b4fb3;
  color: #fff;
  padding: 40px 15%; /* ลง 15% ออกหาก มันแคบไป*/

  font-family: "Comfortaa", "Prompt", sans-serif;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-box {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-img {
  height: 42px;
}

.logo-text {
  font-size: 22px;
  font-weight: bold;
}

.menu {
  display: flex;
  justify-content: space-between;
  gap: 100px;
  font-size: 18px;
  margin: 30px 0;
}

/* LINE */
.line {
  height: 1px;
  background: rgba(255, 255, 255, 0.35);
  margin: 28px 0;
}

/* CONTACT */
.contact-wrap {
  display: flex;
  gap: 40px;
}

.contact {
  flex: 1;
  font-size: 14px;
  line-height: 1.9;
}

.contact h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.v-line {
  width: 1px;
  background: rgba(255, 255, 255, 0.4);
}

/* FOLLOW */
.follow-wrap {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.follow h3 {
  font-size: 20px;
  margin-bottom: 16px;
}

.icons {
  display: flex;
  gap: 16px;
  margin-top: 12px;
}

.icons img {
  width: 40px; /* ไอคอนแอพไม่มา */
  height: 40px;
  object-fit: contain;
  background: white;
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
}

.icons i {
  width: 46px;
  height: 46px;
  background: #fff;
  color: #0b4fb3;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* QR */
.qr-wrap {
  display: flex;
  gap: 30px;
}

.qr {
  text-align: center;
}

.qr img {
  background: #fff;
  padding: 8px;
  border-radius: 18px;
}

.qr span {
  display: block;
  margin-top: 8px;
}

/* COPYRIGHT */
.copyright {
  font-size: 13px;
}

/* MOBILE */
@media (max-width: 768px) {
  .top,
  .contact-wrap,
  .follow-wrap {
    flex-direction: column;
    gap: 20px;
  }

  .menu {
    display: flex;
    justify-content: space-between;
  }

  .qr-wrap {
    justify-content: center;
  }

  .copyright {
    text-align: center;
  }
}
</style>
