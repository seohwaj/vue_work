<template>
  <div>
    <Props subject="subject 전달"/>
    <Props title="속성 전달"/>
    <Provide/>
  </div>
</template>

<script>
// @ is an alias to /src
import Provide from '@/components/Provide.vue'
import { provide } from 'vue'

export default {
  name: "HomeView",
  components: {
    Provide    
  },
  setup() {
    provide('title', 'vue.js 프로젝트')
  }
};
</script>
