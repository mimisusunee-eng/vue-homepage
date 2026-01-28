<template>
  <footer class="footer">
    <div class="footer-inner">

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

      <h3>Contact us</h3>

      <div class="contact-wrap">
        <div class="contact">
          <p class="no-top-margin">
            Bangkok：33/4 The Nine Tower Grand Rama 9, Building B, 30th Floor,
            Rama 9 Road, Huai Khwang, Huai Khwang, Bangkok 10310
          </p>
          <p class="float-bottom">
            Telephone：+66(0)636582999 / +8613693665327
          </p>
        </div>

        <div class="v-line"></div>

        <div class="contact">
          <p class="no-top-margin">
            Pattaya：Name : Baidi International (Pattaya) Real Estate Asset
            Management Co.,Ltd No.388/237 Moo.10 Nongprue, Banglamung, Chonburi
            Province 20150
          </p>
          <p class="float-bottom">
            Mail：support@bighousekeeper.cn
          </p>
        </div>
      </div>

      <div class="line"></div>

      <div class="follow-wrap">
        <div class="follow">
          <h3 class="no-top-margin">Follow Us</h3>
          <div class="icons">
            <img src="/xhs.svg" />
            <img src="/tiktok.svg" />
            <img src="/fb.svg" />
            <img src="/ig.svg" />
            <img src="/yt.svg" />
          </div>
        </div>

        <div class="qr-wrap">
          <div class="qr">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=service" />
            <span>service</span>
          </div>
          <div class="qr">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=wechat" />
            <span>WeChat</span>
          </div>
          <div class="qr">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=miniapp" />
            <span>mini apps</span>
          </div>
        </div>
      </div>

      <div class="line"></div>

      <div class="copyright">
        © 2024 Big Housekeeper - All rights reserved - Webmaster by bighousekeeper.cn
      </div>

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
  width: 100%;
}

.footer-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Comfortaa", "Prompt", sans-serif;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
}

.logo-box {
  display: flex;
  align-items: center;
  gap: 24px;
}

.logo-img {
  width: 42px;
  height: 42px;
}

.logo-text {
  font-size: 31px;
  font-weight: 500;
}

.menu {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  font-size: 18px;
  margin-top: 6px;   
}


.menu span:nth-child(1) {
  justify-self: start;   
}

.menu span:nth-child(2) {
  justify-self: center;  
}

.menu span:nth-child(3) {
  justify-self: end;     
}


.line {
  height: 1px;
  background: rgba(255, 255, 255, 0.35);
  margin: 20px 0 24px;
}

/* CONTACT */
.contact-wrap {
  display: flex;
  gap: 40px;
}

.contact {
  flex: 1;
  font-size: 14px;
  line-height: 2;
  display: flex;
  flex-direction: column;
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

.icons {
  display: flex;
  gap: 43px;
  margin-top: 40px;
}

.icons img {
  height: 42px;
  cursor: pointer;
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
  width: 130px;
  height: 130px;
  background: #fff;
  padding: 6px;
  border-radius: 14px;
}

.qr span {
  display: block;
  margin-top: 16px;
  font-size: 12px;
}

.copyright {
  font-size: 12px;
  opacity: 0.7;
}

/* UTIL */
.float-bottom {
  margin-top: auto;
}

.no-top-margin {
  margin-top: 0;
}


/* iPad */
@media (max-width: 1024px) {
  .footer-inner {
    padding: 40px 60px;
  }

  .menu {
    font-size: 16px;
    gap: 24px;
  }

  .icons {
    gap: 28px;
  }

  .qr-wrap {
    gap: 40px;
  }

  .qr img {
    width: 110px;
    height: 110px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .footer-inner {
    padding: 32px 20px;
  }

  .header {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .logo-text {
    font-size: 22px;
  }

 @media (max-width: 768px) {
  .menu {
    display: flex;
    justify-content: center;
    gap: 16px;
    font-size: 14px;
  }
}

  .contact-wrap {
    flex-direction: column;
    gap: 24px;
  }

  .v-line {
    display: none;
  }

  .follow-wrap {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  .icons {
    justify-content: center;
    margin-top: 20px;
    gap: 24px;
  }

  .icons img {
    height: 32px;
  }

  .qr-wrap {
    gap: 24px;
  }

  .qr img {
    width: 90px;
    height: 90px;
  }

  .copyright {
    text-align: center;
    line-height: 1.6;
  }
}

</style>