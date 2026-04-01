// A1
const judul = document.getElementById('artikel-judul');
// Error karena pada index.html bagian judul tidak memuat id
// Kalau getElementById digunakan ketika kita mau mengubah elemen berdasarkan id, kalau querySelector digunakan berdasarkan CSS selector.
judul.style.color = '#3b82f6';
console.log('Warna judul berhasil diubah.');


// A2
const artikel = document.querySelector('.main-article');
// Menghapus const judul supaya judul bisa berubah warna menjaid biru sesuai dengan soal di A1
judul.addEventListener('click', function() {
  artikel.classList.toggle('highlight');
  // Menghapus artikel.classList.toggle('highlight'); karena tadi terdapat 2 code
});
// Karena kalau ada 2 nantinya akan dibalik dua kali yang dimanan itu hasilnya akan sama seperti yang semula



// A3
const items = document.querySelectorAll('.sidebar-widget:nth-child(2) li');
// Menambahkan :last-child
const input = document.getElementById('filter-kategori');
// Mengganti menjadi getElemenById karena di dokumen index.html filter-kategori ini memakai id

input.addEventListener('input', function() {
  const keyword = input.value.toLowerCase();
  items.forEach(function(item) {
    const teks = item.innerText.toLowerCase();
    if (teks === keyword) {
      // Mengubah = menjadi ===
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }  
  });
});
// Kalau operator = untuk memberikan nilai, kalau === untuk memproses menyamakan 2 hal yang sama persis.


// B1
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    navLinks.forEach(function(l) {
      l.classList.remove('active');
    });
    link.classList.add('active');
  });
});


// B2
const paragraf = document.querySelectorAll('.main-article p');

let semuaTeks = '';
paragraf.forEach(function(p) {
  semuaTeks += p.innerText + ' ';
});

const jumlahKata = semuaTeks.split(' ').length;
const estimasi = Math.ceil(jumlahKata / 200);
const meta = document.querySelector('.meta-info');

meta.innerText += ` | Estimasi: ${estimasi} menit baca`;

// B3
// const input = document.querySelector('#filter-kategori');
// const items = document.querySelectorAll('.sidebar-widget:nth-child(2) li');

// input.addEventListener('input', function() {
//   const keyword = input.value.toLowerCase();

//   items.forEach(function(item) {
//     const teks = item.innerText.toLowerCase();

//     if (teks.includes(keyword)) {
//       item.style.display = '';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// });