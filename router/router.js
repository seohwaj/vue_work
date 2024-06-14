const { createRouter, createWebHistory } = VueRouter;

import HomeView from './view/HomeView.js'
import AboutView from './view/AboutView.js'
import UserView from './view/UserView.js'
import UserProfile from './view/UserProfile.js'
import UserPost from './view/UserPost.js'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/index', redirect: '/' },
  { 
    path: '/user/:id', 
    name: 'user', 
    component: UserView,
    props: true,
    children: [
      {path: 'userProfile', component: UserProfile},
      {path: 'userPost', component: UserPost}
    ]
  },
  // { path: '/userInfo', component: UserView },
  {
    path: '/userInfo',
    redirect: to => { return { name: 'user', params: {id: to.query.userName} } }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;