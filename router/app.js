import router from './router.js'

const template = /*html*/`
  <h1>라우터 테스트</h1>
  <p>
    <strong>현재 라우트 경로: </strong>{{this.$route.fullPath}}
  </p>
  <nav>
    <RouterLink to="/">홈으로 가기</RouterLink> | 
    <RouterLink to="/index">홈으로 가기</RouterLink> | 
    <RouterLink to="/about">소개로 가기</RouterLink> |
    <RouterLink to="/user/hong">사용자 홈</RouterLink> |
    <RouterLink to="/user/hong/userProfile">사용자 프로필</RouterLink> |
    <RouterLink to="/user/hong/userPost">사용자 포스트</RouterLink> |
    <RouterLink to="/userInfo?userName=choi">사용자(쿼리)</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
`;

const component = {
  template
}

const { createApp } = Vue;
createApp(component)
.use(router)
.mount("#app");