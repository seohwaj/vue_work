const template = /*html*/`
  <div>
    <h1>home 페이지</h1>
    <button @click="goToUser">사용자 홈으로 이동</button>
  </div>
`;

export default {
  template,
  methods: {
    goToUser() {
      // this.$router.push('/user/park')
      this.$router.push({name: 'user', params: {id: 'park'}})
    }
  }
}