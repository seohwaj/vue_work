<template>
  <div>lifecycle</div>
</template>
<script setup>
  import { onMounted, onUpdated } from 'vue'
  onMounted(() => console.log('mounted'))
  onUpdated(() => console.log('updated'))
  
  // created hook에 해당
  console.log('created')
</script>