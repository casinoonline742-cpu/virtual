// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// 1. Pega aquí tu misma configuración que tienes en el HTML
const firebaseConfig = {
    apiKey: "AIzaSyB4a3J_fGDd-r99EKT929bmB_Y08TJ3t2g",
    authDomain: "casino-familia.firebaseapp.com",
    databaseURL: "https://casino-familia-default-rtdb.firebaseio.com",
    projectId: "casino-familia",
    storageBucket: "casino-familia.firebasestorage.app",
    messagingSenderId: "390973825874",
    appId: "1:390973825874:web:ddc9f9d0d64bebf9c2908b"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Esto maneja la notificación cuando la app está CERRADA (Segundo plano)
messaging.onBackgroundMessage((payload) => {
  console.log('[FCM] Notificación en segundo plano:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055823.png' // Icono del casino
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});