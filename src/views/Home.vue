<script setup lang="ts">
import router from '@/router'

const handleRouter = function (page: string) {
  router.push({ name: page })
}
</script>

<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<style scoped>
@import '@/stylus/example.css';
</style>
