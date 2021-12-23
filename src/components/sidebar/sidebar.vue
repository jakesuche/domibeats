<template>
  <div id="mySidenav" class="sidenav" :style="{width:toggle ? '250px' :'0'}">
  <!-- <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> -->
  <a   @click="selected = 'home'; goto('/')" :class="selected == 'home' ? 'selected':''" > <i class=" icon fas fa-home"></i>Home</a>
  <a @click="selected = 'exclusive'; goto('/exclusive')" :class="selected == 'exclusive' ? 'selected':''" ><i class="fab icon  fa-bandcamp"></i>Exclusive Beats</a>
  <a @click="selected = 'beats';goto('/beats')" :class="selected == 'beats' ? 'selected':''" ><i class=" icon  fas fa-music"></i>Beats</a>
    <a @click="selected = 'drum'; goto('/drum_kit')" :class="selected == 'drum' ? 'selected':''" ><i class=" icon  fas fa-drum"></i>drum kit</a>
     <a @click="selected = 'academy'; goto('/academy')" :class="selected == 'academy' ? 'selected':''" ><i class=" icon fas fa-graduation-cap"></i>Academy</a>
  <a @click="selected = 'gadgets'; goto('/gadgets')" :class="selected == 'gadgets' ? 'selected':''" ><i class=" icon fab fa-instalod"></i>Studio gadgets</a>
  <a @click="selected = 'about'; goto('/about')" :class="selected == 'about' ? 'selected':''" ><i class=" icon fas fa-address-card"></i>About</a>
  <a @click="selected = 'contact'; goto('/contact')"  :class="selected == 'contact' ? 'selected':''" ><i class=" icon  far fa-envelope"></i>Contact</a>
</div>
</template>

<script>
export default {
    data(){
        return {
            toggle:false,
            selected:'home'
        }
    },
    created(){
        this.$eventBus.$on('toggle', (event)=> {
            this.toggle = !this.toggle
        })
    },
    methods:{
        goto(router){
            this.$router.push(router)
            this.toggle = !this.toggle
        }
    }

}
</script>

<style scoped>

.selected{
    background-color:#5e5e5ef2;
    
}
    .sidenav {
  height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 74px;
    left: 0;
    background-color: #000;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 17px;
  color: white;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

.icon{
    margin-left: -11px;
    margin-right: 15px;
    font-size: 16px;
}
</style>