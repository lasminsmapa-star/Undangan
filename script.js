document.getElementById("formHadir").addEventListener("submit", function(e){

e.preventDefault();

var nama = document.getElementById("nama").value;
var hadir = document.getElementById("hadir").value;

fetch("https://script.google.com/macros/s/AKfycbxX40xHBUDKJMLh_vhm8qgWMgif0VTUvgzso7udPp4oMaH8iD1xhou6JjTuMphv_YGl/exec", {

method: "POST",

body: new URLSearchParams({
nama: nama,
kehadiran: hadir
})

})
.then(response => response.text())
.then(data => {

document.getElementById("status").innerHTML = "Konfirmasi berhasil tersimpan";

})
.catch(error => {

document.getElementById("status").innerHTML = "Gagal mengirim data";

});

});

function bukaUndangan() {
  document.getElementById('cover').style.display = 'none';
  document.getElementById('content').style.display = 'block';
  var musik = document.getElementById('musik');
  if(musik){ musik.play(); }
}


// ===== Animasi buka undangan =====
function bukaUndangan() {
  const cover = document.getElementById('cover');
  const content = document.getElementById('content');

  cover.style.transition = "opacity 1s";
  cover.style.opacity = "0";

  setTimeout(() => {
    cover.style.display = "none";
    content.style.display = "block";
  }, 1000);

  var musik = document.getElementById('musik');
  if (musik) musik.play();
}

// ===== Nama tamu dari URL =====
function getGuestName() {
  const params = new URLSearchParams(window.location.search);
  const nama = params.get('to');
  if (nama) {
    document.getElementById('guestName').innerText = "Kepada: " + decodeURIComponent(nama);
  }
}
getGuestName();

// ===== Countdown =====
function startCountdown() {
  const targetDate = new Date("2026-03-25 09:00:00").getTime();

  setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const m = Math.floor((distance / (1000 * 60)) % 60);
    const s = Math.floor((distance / 1000) % 60);

    const el = document.getElementById("countdown");
    if (el) {
      el.innerHTML = "Acara dalam: " + d + " hari " + h + " jam " + m + " menit " + s + " detik";
    }
  }, 1000);
}
startCountdown();
