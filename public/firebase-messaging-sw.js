importScripts('https://www.gstatic.com/firebasejs/9.21.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.21.0/firebase-messaging-compat.js')

const firebaseConfig = {
  apiKey: 'AIzaSyA-vQ3iJDLgo_Nv036pOXXYOOJfLFXVez8',
  authDomain: 'notif-push-demo.firebaseapp.com',
  projectId: 'notif-push-demo',
  storageBucket: 'notif-push-demo.appspot.com',
  messagingSenderId: '598200944007',
  appId: '1:598200944007:web:721bf58b0fd72eae3cff22'
}

firebase.initializeApp(firebaseConfig)
firebase.messaging()