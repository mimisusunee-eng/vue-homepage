import CryptoJS from "crypto-js";
// Guid
export function GenRandomString() {
  return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function Guid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function GetUuid(len, radix) {
  var chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  var uuid = [],
    i;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
  } else {
    // rfc4122, version 4 form
    var r;

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join("");
}

// 加密
export function Encrypt(text, auth) {
  const a = CryptoJS.enc.Latin1.parse(auth);
  const b = CryptoJS.enc.Latin1.parse(auth.substring(10, 26));
  const encoded = CryptoJS.AES.encrypt(text, a, {
    iv: b,
    mode: CryptoJS.mode.CBC,
    adding: CryptoJS.pad.ZeroPadding,
  }).toString();
  return encoded;
}

// 金额格式化
export function AmountRule(amount, rate, around = false) {
  if (typeof amount == "undefined" || amount === null) {
    return null;
  }
  amount = amount.toString();
  amount = amount.replace(/,/g, "");
  amount = amount.replace(/฿/g, "");

  if (amount == 0) {
    return "";
  }
  if (isNaN(parseInt(amount))) {
    return amount;
  }
  var k = 10000,
    sizes = ["", "万", "亿", "万亿"],
    i;
  if (amount < k) {
    return amount;
  } else {
    amount = rate ? amount / rate : amount;
    i = Math.floor(Math.log(amount) / Math.log(k));

    var m = amount / Math.pow(k, i);
    if (around) {
      m = m.toFixed(2); // 保留两位小数
    }
    m += sizes[i];
    return m;
  }

  var yiReq = /00000000$/;
  var wanReq = /0000$/;
  if (yiReq.test(amount)) {
    amount = amount.replace(/00000000$/g, "亿泰铢");
  }
  if (wanReq.test(amount)) {
    amount = amount.replace(/0000$/g, "万泰铢");
  }
  if (amount.indexOf("泰铢") == -1) {
    amount += " 泰铢";
  }
  return amount;
}
export const getAssetURL = (image) => {
  // 参数一: 相对路径
  // 参数二: 当前路径的URL
  return new URL(`../assets/${image}`, import.meta.url).href;
};
export const isPhone = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};
