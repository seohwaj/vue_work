<template>
  <div>
    <div>child</div>
    <ProvideChild></ProvideChild>
  </div>
</template>
<script>
  import ProvideChild from '@/components/ProvideChild.vue'

  export default {
    components: {
      ProvideChild
    }
  }
</script>