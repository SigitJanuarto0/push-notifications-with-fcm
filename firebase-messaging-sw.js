importScripts('https://www.gstatic.com/firebasejs/10.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.6.0/firebase-messaging-compat.js');

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

// Inisialisasi firebase configurasi
firebase.initializeApp(firebaseConfig);

// Mengisialisasi Firebase Cloud Messaging dan dapatkan referensi ke layanan tersebut
const messaging = firebase.messaging();
