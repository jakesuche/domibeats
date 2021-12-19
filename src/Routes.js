import Vue from "vue";
import Router from "vue-router";
import store from "./store/index";
import beats from './pages/beats/beats.vue'
import Contact from './pages/contact/contact.vue'
import About from './pages/about/about.vue'
import Admin from './pages/admin/admin.vue'
import Academy from './pages/academy/academy.vue'
import Overview from './pages/academy/overview.vue'
import Enroll from './pages/enroll/enroll.vue'
import Exclusive from './pages/exclusive/exclusive.vue'
import Instrument from './pages/Instruments/Instrument.vue'
import Cart from './pages/Cart/Cart.vue'
import notFound from './pages/notFound'
import drum_kit from './pages/drumkit/drumkit'
import drumkitDetails from './pages/drumkit/drumkitdetails'
import home from './pages/home/home'
import BeatDeatil from './pages/beat_details/beats_details'





Vue.use(Router);

const router =  new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:home 
    },
    {
      path: "/beats",
      name: "beats",
      component: beats,
      meta:{onlyGuestUser:true}
    },
    {
      path: "/beats/:id",
      name: "beats",
      component:  BeatDeatil,
      // meta:{onlyGuestUser:true}
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
      path:'/academy/signup/:title',
      name:'Overview',
      component:Enroll
    },
    {
      path:'/exclusive',
      name:'exclusive',
      component: Exclusive

    },
    {
      path:'/exclusive',
      name:'exclusive',
      component: Exclusive

    },
    {
      path:'/gadgets',
      name:'gadgets',
      component: Instrument

    },
    {
      path:'/cart',
      name:'cart',
      component: Cart
    },
    {
      path:'/drum_kit',
      name:'drum_kit',
      component:drum_kit
    },  
    {
      path:'/drum_kit/:id',
      name:'drum_kit',
      component:drumkitDetails
    }, 
    {
      path:'*',
      name:'cart',
      component: notFound
    }
    
    
    
    // {
    //   path: "*",
    //   name: "Error",
    //   component: ErrorPage,
    // },
   
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
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




