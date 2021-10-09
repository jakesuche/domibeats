import Vue from "vue";
import Router from "vue-router";
import store from "./store/index";
import home from './pages/home/home.vue'





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




