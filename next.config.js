module.exports = {
  reactStrictMode: true,
  env: {
    REACT_APP_FIREBASE_API_KEY : 'AIzaSyB6GO9pDLo5sg41yIkq2arv0sFXSp_Ja7k',
    REACT_APP_FIREBASE_AUTH_DOMAIN : 'edu-platform-f3a82.firebaseapp.com',
    REACT_APP_FIREBASE_PROJECT_ID : 'edu-platform-f3a82',
    REACT_APP_FIREBASE_STORAGE_BUCKET : 'edu-platform-f3a82.appspot.com',
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID : '195690313426',
    REACT_APP_FIREBASE_APP_ID : '1:195690313426:web:41981410ab710f6e431f0b',
    REACT_APP_FIREBASE_MEASUREMENT_ID : 'G-XC1FX816H7',
  },
  images: {
    domains: ['images.unsplash.com', 'outbox.co.ug', 'res.cloudinary.com']
},
async redirects() {
    return [
      {
        source: '/lms',
        destination: 'https://events-eduplatform.vercel.app/',
        permanent: true,
      },
       {
        source: '/linkages',
        destination: 'https://outboxlinkages.vercel.app/',
        permanent: false
      },
      {
        source: '/learning',
        destination: 'https://outboxlms.vercel.app/',
        permanent: false
      },
      {
        source: '/events',
        destination: 'https://events-eduplatform.vercel.app/',
        permanent: false
      },
    ]
  },
}

