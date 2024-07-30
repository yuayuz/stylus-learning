<script setup lang="ts">
import { ref } from 'vue'

const message = ref('')
</script>

<template>
  <h1>Selectors</h1>
  <div>
    <input placeholder="请输入" v-model="message" />
    <p>Message is: {{ message }}</p>
  </div>
</template>

<style scoped>
@import '@/stylus/SelectorsStylus.css';
</style>
