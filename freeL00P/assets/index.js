function getHitokoto() {
  return fetch("https://v1.hitokoto.cn/?encode=text")
    .then((response) => response.text())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
}
//弹幕颜色配置
function getRandomColor() {
  const colors = [
    "#333333",
    "#222222",
    "#666666",
    "#AA0033",
    "#FF6600",
    "#006699",
    "#007E9E",
    "#9F209F",
    "#008CBA",
    "#2E8B57",
  ];
  const colorIndex = Math.floor(Math.random() * colors.length);
  return colors[colorIndex];
}

//弹幕属性配置
function createDanmu() {
  const danmu = document.createElement("div");
  getHitokoto().then((data) => {
    danmu.innerText = data; // 返回一句随机的一言
  });
  danmu.style.position = "absolute";
  danmu.style.left = "100%";
  danmu.style.top = Math.random() * 100 + "%";
  danmu.style.fontSize = Math.random() * 10 + 20 + "px";
  danmu.style.color = getRandomColor();
  document.getElementById("danmu").appendChild(danmu);
  animateDanmu(danmu);
}
//弹幕速度配置
function animateDanmu(danmu) {
  let left = 100;
  const timer = setInterval(() => {
    left -= 0.5;
    danmu.style.left = left + "%";
    if (left <= -danmu.offsetWidth) {
      clearInterval(timer);
      danmu.parentNode.removeChild(danmu);
    }
  }, 20);
}
let timer;
timer = setInterval(createDanmu, 1000);
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    // 窗口变成非当前窗口时的操作
    clearInterval(timer);
  } else {
    timer = setInterval(createDanmu, 1000);
    // 窗口重新变成当前窗口时的操作
  }
});

setTimeout(createDanmu, 1000);

// clearInterval(timer);

//给页面元素赋值
document.querySelector(".name").innerText = "FreeL00P";
document.querySelector(".description").innerText = "恋恋不忘 念念不忘";
document.querySelector(".avatar img").src = "./FreeL00P_files/tx.png";
const links = document.querySelector(".links"); //外链div
//外链数量
const imagesData = [
  {
    src: "./FreeL00P_files/tencent-qq-8c2d8dc7.svg",
    alt: "QQ",
    href: "https://user.qzone.qq.com/1084472249",
  },
  {
    src: "./FreeL00P_files/iconmonstr-github-1.svg",
    alt: "GitHub",
    href: "https://github.com/FreeL00P",
  },
  {
    src: "./FreeL00P_files/outlook-e4c48930.svg",
    alt: "Email",
    href: "mailto:FreeL00P@tom.com",
  },
  {
    src: "./FreeL00P_files/bilibili-1b0355a4.svg",
    alt: "Bilibili",
    href: "https://space.bilibili.com/284822327",
  },
];
//根据外链数量创建img标签添加到links下
for (let i = 0; i < imagesData.length; i++) {
  links.appendChild(document.createElement("img"));
}
const images = links.querySelectorAll("img");
for (let i = 0; i < images.length; i++) {
  images[i].src = imagesData[i].src;
  images[i].alt = imagesData[i].alt;
  images[i].style.width = "30px";
  if (imagesData[i].href) {
    //创建一个a标签
    const link = document.createElement("a");
    link.dataset.cate = imagesData[i].alt;
    link.href = imagesData[i].href;
    link.target = "_blank";
    images[i].parentNode.replaceChild(link, images[i]);
    link.appendChild(images[i]); //将img标签放入a标签
  }
}
const qq = links.querySelector('[data-cate="QQ"]');
qq.addEventListener("click", () => {
  alert("请加QQ 1084472249 ");
});
