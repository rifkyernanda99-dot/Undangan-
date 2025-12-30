function buka() {
  document.getElementById("opening").style.display = "none";
  document.getElementById("content").style.display = "block";
  document.getElementById("musik").play();
}

const target = new Date("December 12, 2025 08:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;

  if (diff < 0) {
    document.getElementById("countdown").innerHTML = "Hari Bahagia Telah Tiba ✨";
    return;
  }

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);

  document.getElementById("countdown").innerHTML =
    `${d} Hari ${h} Jam ${m} Menit`;
}, 1000);