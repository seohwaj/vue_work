<template>
  <div>
    <page-title/>
    <PageTitle :title="mytitle"></PageTitle>
    <page-title title="서버 타이틀"></page-title>
    <hr>
    <blog-comp :id="blog.id" :title="blog.title" />
    <hr>
    <h1>중첩 컴포넌트</h1>
  </div>
</template>
<script>
  import PageTitle from '../components/PageTitle.vue'
  import BlogComp from '../components/BlogComp.vue'
  export default {
    components: {PageTitle, BlogComp},
    data() {
      return {
        mytitle: '동적으로 전달 타이틀',
        blog: { id: 3, title: 'post1' }
      };
    },
    created() {},
    methods: {},
  }
</script>
<style>
  
</style>