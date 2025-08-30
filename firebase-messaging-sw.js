// Firebase Cloud Messaging Service Worker
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js');

// Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBGh16sYlLk1e9nkhcLu7IPTZk807qeLZM',
    authDomain: 'test-60bf6.firebaseapp.com',
    databaseURL: 'https://test-60bf6-default-rtdb.firebaseio.com',
    projectId: 'test-60bf6',
    storageBucket: 'test-60bf6.firebasestorage.app',
    messagingSenderId: '208881094528',
    appId: '1:208881094528:web:114768e2de5956cae6fb65'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('Background message received:', payload);

    const notificationTitle = payload.notification?.title || 'New Message';
    const notificationOptions = {
        body: payload.notification?.body || 'You have a new message',
        icon: payload.notification?.icon || '/favicon.ico',
        badge: '/favicon.ico',
        tag: 'fcm-background-notification',
        data: payload.data || {}
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
    console.log('Notification clicked:', event);
    event.notification.close();
    
    // Focus on the appropriate page if it's open
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then((clientList) => {
            for (const client of clientList) {
                // Try to focus on admin panel first, then main store
                if (client.url.includes('admin.html') && 'focus' in client) {
                    return client.focus();
                } else if (client.url.includes('index.html') && 'focus' in client) {
                    return client.focus();
                }
            }
            // If no clients are open, open the main store
            if (clients.openWindow) {
                // For GitHub Pages, use the correct path
                const baseUrl = self.location.origin;
                return clients.openWindow(`${baseUrl}/index.html`);
            }
        })
    );
});

// Handle service worker installation
self.addEventListener('install', (event) => {
    console.log('Firebase Messaging Service Worker installing...');
    self.skipWaiting();
});

// Handle service worker activation
self.addEventListener('activate', (event) => {
    console.log('Firebase Messaging Service Worker activating...');
    event.waitUntil(self.clients.claim());
});

// Handle service worker messages
self.addEventListener('message', (event) => {
    console.log('Firebase Messaging Service Worker message received:', event.data);
});
