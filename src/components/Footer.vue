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
    <h3>Contact us</h3>
    <div class="contact-wrap"> 
      <div class="contact">
        <p class="no-top-margin">
          Bangkok：33/4 The Nine Tower Grand Rama 9, Building B, 30th Floor,
          Rama 9 Road, Huai Khwang, Huai Khwang, Bangkok 10310
        </p>
        <p class="float-bottom">Telephone：+66(0)636582999 / +8613693665327</p>
      </div>

      <div class="v-line"></div>

      <div class="contact">
        <p class="no-top-margin">
          Pattaya：Name : Baidi International (Pattaya) Real Estate Asset
          Management Co.,Ltd No.388/237 Moo.10 Nongprue, Banglamung, Chonburi
          Province 20150
        </p>

        <p class="float-bottom">Mail：support@bighousekeeper.cn</p>
      </div>
    </div>

    <div class="line"></div>

    <!-- FOLLOW -->
    <div class="follow-wrap">
      <div class="follow">
        <h3 class="no-top-margin">Follow Us</h3>
        <div class="icons">
          <img src="/xhs.svg" alt="XHS" />
          <img src="/tiktok.svg" alt="TikTok" />
          <img src="/fb.svg" alt="Facebook" />
          <img src="/ig.svg" alt="Instagram" />
          <img src="/yt.svg" alt="YouTube" class="yt"/>
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

    <div class="line" style="margin-top: 22px; margin-bottom: 26px;"></div>

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
  padding: 40px 410px; 
  font-family: "Comfortaa", "Prompt", sans-serif;
}

.footer h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
}

.top {                
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-box {
  display: flex;
  align-items: center;
  gap: 26px;
}

.logo-img {
  height: 42px;
  width: 42px;
}

.logo-text {
  font-size: 31px;
  font-weight: 500;
}

.menu {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin: 33px 0;
}

/* LINE */
.line {
  height: 1px;
  background: rgba(255, 255, 255, 0.35);
  margin: 33px 0 24px 0;
}

/* CONTACT */
.contact-wrap {
  display: flex;
  gap: 40px;
  align-items: stretch;
}

.contact {
  flex: 1;
  font-size: 14px;
  line-height: 204%;
  display: flex;
  flex-direction: column;
  max-height: 160px;
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
  font-size: 16px;
  margin-bottom: 600;
}

.icons {
  display: flex;
  gap: 43px;
  margin-top: 40px;
}

.icons img {
  width: auto; 
  height: 42px;
  object-fit: contain;
  border-radius: 8px;
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
  gap: 85px;
}

.qr {
  text-align: center;

}

.qr img {
  background: #fff;
  width:  130px;
  height: 130px;
  padding: 6px;
  border-radius: 14px;
}

.qr span {
  display: block;
  margin-top: 16px;
  font-size: 12px;
}

/* COPYRIGHT */
.copyright {
  font-size: 12px;
  opacity: 0.7;
}

.float-bottom {
  margin-top: auto;
  margin-bottom: 0;
}

.no-top-margin{
  margin-top: 0;
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