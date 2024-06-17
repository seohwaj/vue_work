<template>
  {{ props.title }} {{ props.subject }}
</template>
<script setup>
  import { defineProps } from 'vue'
  // let props = defineProps(['title', 'subject'])
  let props = defineProps({ 
    title: { 
      type: String, 
      default: '타이틀 초기 값' 
    }, 
    subject: { 
      type: String, 
      required: true
    }
  })
</script>