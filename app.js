const tombol = document.getElementById('tombol');
const token = document.getElementById('token');
const judul = document.getElementById('judul');
const pesan = document.getElementById('pesan');

// Konfigurasi Firebase
// Sesuaikan dengan akun firebase milik anda
const firebaseConfig = {
  apiKey: 'AIzaSyA5jKuyLTJ2tcljChgwe3g_RkTzVgXN93k',
  authDomain: 'tugas-kelompok-fcm.firebaseapp.com',
  projectId: 'tugas-kelompok-fcm',
  storageBucket: 'tugas-kelompok-fcm.appspot.com',
  messagingSenderId: '178593623337',
  appId: '1:178593623337:web:2cd6ddb3148dadabd69b38',
  measurementId: 'G-NLN23LFJS3',
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);

// Mengisialisasi Firebase Cloud Messaging dan dapatkan referensi ke layanan tersebut
const messaging = firebase.messaging();

// Saat Tombol Allow Notification di klik
tombol.onclick = function () {
  messaging
    .getToken({ vapidKey: 'BFT3zPmJte0bntQ0D9EjIdxr1G_NV9JLlNhDiBA55-JCFMImWcqyBdW8sHC65BdA6uqzhQ9Nk2HIuPI8Oobx-ZI' }) 
    // vapidKey Ubah sesuai dengan akun anda
    .then((currentToken) => {
      if (currentToken) {
        // jika Tokennya ada atau benar
        token.innerHTML = 'Token : ' + currentToken;
        console.log(currentToken);
      } else {
        // jika tokennya tidak ada
        console.log('Tidak ada token pendaftaran yang tersedia. Minta izin untuk membuatnya.');
      }
    })
    .catch((err) => {
      // Untuk menangani jika gagal
      console.log('Terjadi kesalahan saat mengambil token. ', err);
    });
};

// Untuk menerima pesan saat aplikasi dibuka atau sedang aktif
messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  const { title, ...options } = payload.notification;
  judul.innerHTML = 'Judul Pesan : ' + title;
  pesan.innerHTML = 'Isi Pesan : ' + options.body;
});



