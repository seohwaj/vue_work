import headers from './header.js'
import footers from './footer.js'
// import databinding from './dataBinding.js'
// import fors from './for.js'
// import ifs from './if.js'
// import events from './event.js'
// import posts from './posts.js'
import router from './router.js';

const { createApp } = Vue
const template = /*html*/`
<div>
  <headers />
  <RouterView />
  <footers />
</div>
`;

// vue 인스턴스 생성
const component = {
  template,
  components: {headers, footers},
  name: "모듈 연습",
  data() { return { name: '홍길동', msg: '안녕하세요' } },
  methods: {
    funca() {}
  },
  created() {},
  mounted() {},
  computed : {
    fullname() {}
  },
}
createApp(component)
.use(router)
.mount("#app");