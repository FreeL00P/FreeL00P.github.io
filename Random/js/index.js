//给页面元素赋值
document.querySelector(".name").innerText = "FreeL00P";
document.querySelector(".description").innerText = "恋恋不忘 念念不忘";
document.querySelector(".avatar img").src = "./src/tx.png";
let currentIndex = 0;
let imagePaths = [];

// Function to display an image
function showImage(index) {
  const img = new Image();
  img.src = imagePaths[index];
  img.onload = function () {
    console.log("图片%s加载完成", imagePaths[currentIndex]);
    document.body.style.backgroundImage = "url('" + imagePaths[index] + "')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.querySelector(".fade-in").classList.add("show");
  };
}

function readImages() {
  const folderPath = "./imgs/"; // Replace with your folder path
  getImagesInDirectory(folderPath);
  currentIndex = Random(0, imagePaths.length - 1);
  showImage(currentIndex);
}
function getImagesInDirectory(folderPath) {
  for (let i = 1; i <= 78; i++) {
    const fileName = folderPath + `${i}.jpg`;
    imagePaths.push(fileName);
  }
  return imagePaths;
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
    showImage(currentIndex);
  } else if (event.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % imagePaths.length;
    showImage(currentIndex);
  }
});

function Random(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

readImages();
