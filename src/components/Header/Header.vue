<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
    
    <!-- bg-dark -->
    <a class="navbar-brand" href="#"
      ><router-link to="/"
        ><img class="logo" src="img/logo2.png" alt=""/></router-link
    ></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      
    >
    <i style="color:var(--humber-light); font-size: 28px;
" class="fas fa-bars"></i>
      <!-- <span style="background-color:red" class="navbar-toggler-icon"></span> -->
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul style="gap:20px" class="navbar-nav ml-auto">
        <li @click="routerName = 'home', $eventBus.$emit('stop')" class="nav-item" :class="routerName == 'home' ? 'active' : ''">
          <router-link class="nav-link" to="/"
            >Home <span class="sr-only">(current)</span></router-link
          >
        </li>
         <li @click="routerName = 'about', $eventBus.$emit('stop')" class="nav-item" :class="routerName == 'exclusive' ? 'active' : ''">
          <router-link to="/exclusive"  class="nav-link">Exclusive Beats</router-link>
        </li>
        <li @click="routerName = 'academy', $eventBus.$emit('stop')" class="nav-item" :class="routerName == 'academy' ? 'active' : ''">
          <router-link to="/academy"  class="nav-link">Academy</router-link>
        </li>
        <li @click="routerName = 'about', $eventBus.$emit('stop')" class="nav-item" :class="routerName == 'about' ? 'active' : ''">
          <router-link to="/about"  class="nav-link">About</router-link>
        </li>
        <li @click="routerName = 'about', $eventBus.$emit('stop')" class="nav-item" :class="routerName == 'about' ? 'active' : ''">
          <router-link to="/about"  class="nav-link">Hire</router-link>
        </li>
       
        <li @click="routerName = 'gadgets', $eventBus.$emit('stop')" class="nav-item" :class="routerName == 'gadgets' ? 'active' : ''">
          <router-link to="/gadgets"  class="nav-link">Buy studio Gadgets</router-link>
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
        <li @click="routerName = 'contact', $eventBus.$emit('stop')" class="nav-item" :class="routerName == 'contact' ? 'active' : ''">
          <router-link to="/contact" class="nav-link " href="#"
            >Contact</router-link
          >
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <!-- <input type="text" name="search" placeholder="Search the track you are looking..." /> -->
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search...."
          aria-label="Search"
        />
      </form>
      <!-- <div class="header__right__social">
        <a href="#"><i class="fab fa-facebook-f"></i></a>

        <a href="#"><i class="fab fa-instagram"></i></a>
      </div> -->
    </div>
    
  </nav>
</template>

<script>
export default {
  data(){
    return {
      routerName:''
    }
  },
  created(){
    this.routerName = this.$route.name 
  }

};
</script>

<style scoped>
.active{
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
  /* background-color: var(--black-color)!important; */
  border-bottom: 1px solid var(--primary-color);
  /* height: 77px; */
  position: absolute;
  z-index: 999;
  width: 100%;
  top: 0;
  left: 0;
}

@media (max-width: 968px){
  .navbar{
    background:black;
  }

}
.logo {
  width: 87%;
}
.form-control {
  background: none;
  border: none !important;
}

input[type=text] {
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

input[type=text]:focus {
  width: 100%;
  
}
</style>
