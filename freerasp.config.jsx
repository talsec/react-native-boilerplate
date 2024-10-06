//freerasp.config.js

// App configuration
const config = {
    androidConfig: {
      packageName: 'com.helloworldapp', // Replace with your app's package name
      certificateHashes: ['your_signing_certificate_hash_base64'], // Replace with your actual signing certificate hash in Base64 format
      supportedAlternativeStores: ['com.sec.android.app.samsungapps'], // Optional: add other stores as needed
    },
    iosConfig: {
      appBundleId: 'com.helloworldapp', // Replace with your app's bundle ID
      appTeamId: 'your_team_ID', // Replace with your actual team ID from Apple Developer account
    },
    watcherMail: 'your_email_address@example.com', // Replace with your email for alerts
    isProd: true, // Set to false for development, true for production
  };
  
  export default config;
