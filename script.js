let currentPage = 0;
let inputCode = "";
const correctCode = "1708"; // ganti sesuai tanggal ultah

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

function nextPage(pageNum) {
  showPage("page" + pageNum);
}

function addDigit(digit) {
  inputCode += digit;
  document.getElementById("code-input").innerText = inputCode;
}

function clearCode() {
  inputCode = "";
  document.getElementById("code-input").innerText = "";
}

function checkCode() {
  if (inputCode === correctCode) {
    nextPage(2);
  } else {
    alert("Kode salah! Coba lagi.");
    clearCode();
  }
}

// Loading 3 detik -> masuk page 1
window.onload = () => {
  setTimeout(() => {
    showPage("page1");
  }, 3000);
};

const btn = document.getElementById("play-btn");
const music = document.getElementById("bg-music");
const iconPlay = document.getElementById("icon-play");
const iconPause = document.getElementById("icon-pause");

btn.addEventListener("click", function () {
  if (music.paused) {
    music.play();
    iconPlay.style.display = "none";
    iconPause.style.display = "block";
  } else {
    music.pause();
    iconPlay.style.display = "block";
    iconPause.style.display = "none";
  }
});
