import { createWebHistory, createRouter } from 'vue-router';
import store from './store'

import HomeView from './views/HomeView.vue'
import SignUpCompo from './components/SignUpCompo.vue'
import LoginCompo from './components/LoginCompo.vue'
import PostsCompo from './components/PostsCompo.vue'
import PostDetailCompo from './components/PostDetailCompo.vue'
import PostCreateCompo from './components/PostCreateCompo.vue'
import MyAccountCompo from './components/MyAccountCompo.vue'
import DashBoardCompo from './components/DashBoardCompo.vue'



const routes = [
                    {
                        path: '/',
                        name: 'HomeView',
                        component:HomeView,
                       
                    },
                    {
                        path: '/signup',
                        name: 'SignUpCompo',
                        component: SignUpCompo,
                    },
                    {
                        path: '/login',
                        name: 'LoginCompo',
                        component: LoginCompo,
                    },
                    {
                        path: '/myaccount',
                        name: 'MyAccountCompo',
                        component: MyAccountCompo,
                        meta : {requireLogin:true} //// this route requires auth, check if logged in
                    },
                    {
                        path: '/dashboard',
                        name: 'DashBoardCompo',
                        component: DashBoardCompo,
                        meta : {requireLogin:true}
                    },
                    {
                        path: '/posts',
                        name: 'PostsCompo',
                        component: PostsCompo,
                    },
                    {
                        path: '/posts/:id',
                        name: 'PostDetailCompo',
                        component: PostDetailCompo,
                        props:true
                    },
                    {
                        path: '/postcreate',
                        name: 'PostCreateCompo',
                        component: PostCreateCompo,
                        props:true
                    }
];



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })


// https://stackoverflow.com/questions/52653337/vuejs-redirect-from-login-register-to-home-if-already-loggedin-redirect-from
// navigation-guards
// https://router.vuejs.org/guide/advanced/navigation-guards.html#navigation-guards
router.beforeEach((to,from,next) => {
    if(to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated ){
          next('/login')
    }else{
          next()  // go to wherever I'm going , does not require authenticated ,
   }
})


export default router;