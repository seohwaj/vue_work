<template>
    {{ state.nested.count }}
    <button @click="increment">증가</button>
    {{ state.arr[0] }}
</template>
<script setup>
  import { reactive } from 'vue'

  let state = reactive({
    nested: { count: 0 },
    arr: ['foo', 'bar']
  })

  function increment() {
    state.nested.count++
  }
</script>