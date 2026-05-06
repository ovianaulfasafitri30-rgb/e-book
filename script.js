// Fungsi untuk ganti halaman (SPA Sederhana)
function showPage(pageId) {
    // Sembunyikan semua halaman
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Tampilkan halaman yang dipilih
    document.getElementById(pageId).classList.add('active');
}

// Fungsi saat klik "Tambah ke Keranjang"
function orderNow(productName) {
    showPage('kontak');
    document.getElementById('pesanan').value = productName;
}

// Logika Form Submit
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesanan = document.getElementById('pesanan').value;
    const responseBox = document.getElementById('response');
    
    // Tampilkan pesan sukses
    responseBox.style.display = 'block';
    responseBox.innerHTML = `
        <h3>Terima kasih sudah memesan produk kami!</h3>
        <p>Halo <b>${nama}</b>, pesanan <b>${pesanan}</b> sedang diproses.</p>
        <p>Konfirmasi akan dikirim ke email: ${email}</p>
    `;
    
    // Reset Form
    this.reset();
});
