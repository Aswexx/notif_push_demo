<script setup lang="ts">
import { getToken, onMessage ,Messaging } from 'firebase/messaging'
const nuxtApp = useNuxtApp()
const messaging = nuxtApp.$messaging as Messaging

async function activateWebPush() {
  const permissionGranted = await Notification.requestPermission() === 'granted'
  if (!permissionGranted) return alert('Not granted')

  const token = await getToken(messaging, {
    vapidKey: 'BKZAVVdrzj_7Dh8aLXhVmKc4xHBnXZUR6eSuUUM5WR6tg2c_C20F0l9fdG0j0VDSzcLAfxmKnqLE_Z99qPxxc_w'
  })

  if (token) {
    console.log('current token', token)
  } else {
    console.log('Unable to get token')
  }
}

onMounted(() => {
  onMessage(messaging, (payload) => {
    console.log('Msg on client', payload)
  })
})



</script>
<template>
  <div>
    <h1>Hello</h1>
    <button @click="activateWebPush">開啟通知</button>
  </div>
</template>
