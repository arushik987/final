# Chaudhary Kirana Store - Customer Store

यह Chaudhary Kirana Store का customer-facing store है जहाँ customers products browse कर सकते हैं, orders place कर सकते हैं, और shopping कर सकते हैं।

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- VS Code with Live Server extension (recommended)
- Firebase project with proper configuration

### Setup Instructions

1. **Install VS Code Live Server Extension**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Live Server" by Ritwick Dey
   - Install the extension

2. **Run the Store**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - The store will open in your browser at `http://127.0.0.1:5500`

3. **Alternative: Use Any Local Server**
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve .`
   - PHP: `php -S localhost:8000`

## ⚠️ Important Notes

### Why Local Server is Required
- **Firebase Cloud Messaging (FCM)** requires HTTPS or localhost
- **Service Workers** cannot be registered on `file://` protocol
- **Push notifications** will not work without proper server setup

## 🔧 Firebase Configuration

### Required Firebase Services
- Authentication
- Realtime Database
- Cloud Messaging (FCM)

### Authorized Domains
Add these to your Firebase project:
1. Go to Firebase Console → Authentication → Settings → Authorized domains
2. Add: `localhost`, `127.0.0.1`
3. Add your production domain when deploying

## 📱 Features

- **Product Browsing**: Browse all available products
- **Shopping Cart**: Add products to cart and manage quantities
- **User Authentication**: Sign up, login, and manage profile
- **Order Placement**: Place orders with shipping details
- **Order Tracking**: Track order status and history
- **Wishlist**: Save favorite products for later
- **Real-time Updates**: Live data synchronization
- **Push Notifications**: Get notified of order updates
- **Mobile Responsive**: Works on all device sizes

## 🛠️ Development

### File Structure
```
├── index.html              # Main store interface
├── firebase-messaging-sw.js # Firebase service worker
├── README.md               # This file
├── setup.bat               # Windows quick-start script
└── setup.sh                # Unix/Linux/Mac quick-start script
```

### Firebase Configuration
The Firebase config is embedded in both `index.html` and `firebase-messaging-sw.js`. Update the config object in both files when changing Firebase projects.

## 🚀 Deployment

### Production Requirements
- HTTPS domain
- Firebase project with production configuration
- Update Firebase config in both files
- Ensure domain is authorized in Firebase console

### Local Development
- Use Live Server or similar local server
- Test on `localhost` or `127.0.0.1`
- Firebase will work in development mode

## 📞 Support

If you encounter issues:
1. Check that you're using a local server (not file:// protocol)
2. Verify Firebase configuration is correct
3. Check browser console for error messages
4. Ensure all required files are in the same directory

## 🔒 Security

- User authentication is required for orders
- Firebase security rules should be configured
- Never expose Firebase config keys in public repositories
- Use environment variables for production deployments

## 🌐 Related Files

- **Admin Panel**: See `../admin/` folder for admin functionality
- **Shared Service Worker**: `firebase-messaging-sw.js` is shared between store and admin
