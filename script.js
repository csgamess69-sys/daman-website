// Update these values when you publish your real app and support channel.
const APK_PATH = "downloads/daman.apk";
const COMMUNITY_URL = "https://t.me/"; // Replace with your official group/channel URL.

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("downloadBtn").href = APK_PATH;
document.getElementById("joinLink").href = COMMUNITY_URL;

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("downloadBtn").addEventListener("click", event => {
  if (APK_PATH === "downloads/daman.apk") {
    // The browser will download the file once you add downloads/daman.apk.
    document.getElementById("downloadStatus").textContent =
      "If the download does not start, check that downloads/daman.apk exists in your website folder.";
  }
});
