<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <!-- bg-dark -->
    <!-- data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation" -->
    <button
      @click="$eventBus.$emit('toggle')"
      class="navbar-toggler"
      type="button"
    >
      <i
        style="color:var(--humber-light); font-size: 28px;"
        class="fas fa-bars"
      ></i>
    </button>
    <Sidebar />
    <a class="navbar-brand" href="#"
      ><router-link to="/"
        ><img class="logo" src="img/logo2.png" alt=""/></router-link
    ></a>

    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <li
      style="margin:13px;"
      @click="
        (routerName = 'cart'), $eventBus.$emit('stop'), $router.push('/cart')
      "
      class="nav-item cart"
      :class="routerName == 'cart' ? 'active' : ''"
    >
      <i
        class="fas fa-shopping-bag position-relative"
        style="font-size: 20px;color:white;margin-top: 9px;"
        ><span
          style="top: -12px;
              background: red;
    height: 20px;
    width: 20px;
    justify-content: center;  
    align-items: center;
    display: flex;
    border-radius: 70px;
    font-size: 13px;
    left: 23px;"
          class="position-absolute"
          >{{ cartTotal() }}</span
        ></i
      >
    </li>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul style="gap:20px" class="navbar-nav ml-auto">
        <li
          @click="(routerName = 'beats'), $eventBus.$emit('stop')"
          class="nav-item home"
          :class="routerName == 'beats' ? 'active' : ''"
        >
          <router-link class="nav-link" to="/"
            >Home <span class="sr-only">(current)</span></router-link
          >
        </li>
        <li
          @click="(routerName = 'beats'), $eventBus.$emit('stop')"
          class="nav-item"
          :class="routerName == 'beats' ? 'active' : ''"
        >
          <router-link class="nav-link" to="/beats"
            >Beats <span class="sr-only">(current)</span></router-link
          >
        </li>
        <li
          @click="(routerName = 'exclusive'), $eventBus.$emit('stop')"
          class="nav-item"
          :class="routerName == 'exclusive' ? 'active' : ''"
        >
          <router-link to="/exclusive" class="nav-link"
            >Exclusive Beats</router-link
          >
        </li>
        <li
          @click="(routerName = 'drum_kit'), $eventBus.$emit('stop')"
          class="nav-item"
          :class="routerName == 'drum_kit' ? 'active' : ''"
        >
          <router-link to="/drum_kit" class="nav-link">Drum kit</router-link>
        </li>
        <li
          @click="(routerName = 'academy'), $eventBus.$emit('stop')"
          class="nav-item"
          :class="routerName == 'academy' ? 'active' : ''"
        >
          <router-link to="/academy" class="nav-link">Academy</router-link>
        </li>
        <li
          @click="(routerName = 'about'), $eventBus.$emit('stop')"
          class="nav-item"
          :class="routerName == 'about' ? 'active' : ''"
        >
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <!-- <li @click="routerName = 'about', $eventBus.$emit('stop')" class="nav-item" :class="routerName == 'about' ? 'active' : ''">
          <router-link to="/about"  class="nav-link">Hire</router-link>
        </li> -->

        <li
          @click="(routerName = 'gadgets'), $eventBus.$emit('stop')"
          class="nav-item"
          :class="routerName == 'gadgets' ? 'active' : ''"
        >
          <router-link to="/gadgets" class="nav-link"
            >Buy studio Gadgets</router-link
          >
        </li>

        <!-- <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdownpa
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> -->
        <li
          @click="(routerName = 'contact'), $eventBus.$emit('stop')"
          class="nav-item"
          :class="routerName == 'contact' ? 'active' : ''"
        >
          <router-link to="/contact" class="nav-link " href="#"
            >Contact</router-link
          >
        </li>
        <li
          @click="
            (routerName = 'cart'),
              $eventBus.$emit('stop'),
              $router.push('/cart')
          "
          class="nav-item cart1"
          :class="routerName == 'cart' ? 'active' : ''"
        >
          <i
            class="fas fa-shopping-bag position-relative"
            style="font-size: 20px;color:white;margin-top: 9px;margin-right:22px"
          >
            <p
              style="top: -12px;
              background: red;
    height: 20px;
    width: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 70px;
    left: 23px;"
              class="position-absolute"
            >
              {{ cartTotal() }}
            </p>
          </i>
          <!-- <i
            class="fas fa-cart-plus position-relative"
            style="font-size: 20px;color:white;margin-top: 9px;"
            ><span
              style="top: -12px;
    left: 23px;"
              class="position-absolute"
              >{{ cartTotal() }}</span
            ></i
          > -->
        </li>
      </ul>
      <!-- <form class="form-inline my-2 my-lg-0">

        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search...."
          aria-label="Search"
        />
      </form> -->
      <!-- <div class="header__right__social">
        <a href="#"><i class="fab fa-facebook-f"></i></a>

        <a href="#"><i class="fab fa-instagram"></i></a>
      </div> -->
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import Sidebar from "@/components/sidebar/sidebar";
export default {
  data() {
    return {
      routerName: "",
    };
  },

  components: {
    Sidebar,
  },
  methods: {
    ...mapState({
      cartTotal: (state) => state.audios.cart.length,
    }),
  },
  created() {
    this.routerName = this.$route.name;
  },
};
</script>

<style scoped>
.active {
  border-bottom: 1px solid var(--humber-golden);
}
.nav-item {
  margin-left: 26px;
  font-size: 19px;
  transition: all cubic-bezier(0.39, 0.575, 0.565, 1) ease-in-out !important;
}

.nav-item {
  color: #666;
  display: inline-block;
  margin: 0;
  font-size: 1rem;
  /* text-transform: uppercase; */
}
.nav-item:after {
  display: block;
  content: "";
  border-bottom: 1px solid var(--humber-golden);
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}
.nav-item:hover:after {
  transform: scaleX(1);
}
.nav-item.fromRight:after {
  transform-origin: 100% 50%;
}
.nav-item.fromLeft:after {
  transform-origin: 0% 50%;
}

.nav-link {
  color: #fff !important;
}
.navbar {
  background-color: #000;
  border-bottom: 1px solid var(--primary-color);
  /* height: 77px; */
  position: absolute;
  z-index: 999;
  width: 100%;
  top: 0;
  left: 0;
}

@media (max-width: 968px) {
  .navbar {
    background: black;
  }
}
.logo {
  width: 87%;
}
.form-control {
  background: none;
  border: none !important;
}

input[type="text"] {
  width: 50%;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: none;
  /* background-image: url('searchicon.png'); */
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  transition: width 0.4s ease-in-out;
}

input[type="text"]:focus {
  width: 100%;
}

@media (min-width: 968px) {
  .cart {
    display: none;
  }
  .home {
    display: none;
  }

  .logo {
    width: 59%;
  }
}
@media (max-width: 968px) {
  .logo {
    width: 59%;
  }
  .cart1 {
    display: none;
  }
}
</style>
