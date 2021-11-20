import Vue from "vue";
import Router from "vue-router";
import store from "./store/index";
import home from './pages/home/home.vue'
import Contact from './pages/contact/contact.vue'
import About from './pages/about/about.vue'
import Admin from './pages/admin/admin.vue'
import Academy from './pages/academy/academy.vue'
import Overview from './pages/academy/overview.vue'
import Enroll from './pages/enroll/enroll'




Vue.use(Router);

const router =  new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: "/home",
      name: "home",
      component: home,
      meta:{onlyGuestUser:true}
    },
    {
      path:'/contact',
      name:'contact',
      component: Contact,
    },
    {
      path:'/about',
      name:'about',
      component: About,
    },
    {
      path:'/academy',
      name:'academy',
      component:Academy
    },
    {
      path:'/admin',
      name:'admin',
      component: Admin,
    },
    {
      path:'/academy/overview/:id',
      name:'Overview',
      component:Overview
    },
    {
      path:'/academy/overview/:id/enroll/:title',
      name:'Overview',
      component:Enroll
    },
    
    
    // {
    //   path: "*",
    //   name: "Error",
    //   component: ErrorPage,
    // },
   
  ],
  mode: "history",
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.onlyAuthUser) {
//     if (store.getters["auth/isAuthenticated"]) {
//       next();
//     } else {
//       next('/login');
//     }
//   } else if (to.meta.onlyGuestUser) {
//     if (store.getters["auth/isAuthenticated"]) {
//       next("/app/dashboard");
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });



export default router




