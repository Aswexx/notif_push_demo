import { initializeApp } from 'firebase/app'
import { getMessaging } from 'firebase/messaging'
// BKZAVVdrzj_7Dh8aLXhVmKc4xHBnXZUR6eSuUUM5WR6tg2c_C20F0l9fdG0j0VDSzcLAfxmKnqLE_Z99qPxxc_w

export default defineNuxtPlugin((nuxtApp) => {

  // TODO: 改到.env
  const firebaseConfig = {
    apiKey: 'AIzaSyA-vQ3iJDLgo_Nv036pOXXYOOJfLFXVez8',
    authDomain: 'notif-push-demo.firebaseapp.com',
    projectId: 'notif-push-demo',
    storageBucket: 'notif-push-demo.appspot.com',
    messagingSenderId: '598200944007',
    appId: '1:598200944007:web:721bf58b0fd72eae3cff22'
  }
  
  const app = initializeApp(firebaseConfig)
  const messaging = getMessaging(app)

  nuxtApp.vueApp.provide('messaging', messaging)
  nuxtApp.provide('messaging', messaging)

  console.log('instance exposed!~')
})
