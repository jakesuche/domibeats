<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    
     <div  class="selected" :class="{ open: open }" @click="open = !open" >
      {{ label &&  show ?  label : selected }}
    </div>

    <div class="items" :class="{ selectHide: !open }">
      <div
        class="item"
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option.value;
          show = false
          
          open = false;
          $emit('input', option.value);"
        
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    label:{
        type:String,
        required: false,
    }
  },
  data() {
    return {
      selected: this.options.length > 0 ? this.options[0].label : null,
      open: false,
      show:true
    };
  },
  mounted(){
    this.$emit('input', this.selected);
  }
};
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
  background: none;
  border:none;
}

.selected {
  background-color: #212121;
    border-radius: 6px;
    /* border: 1px solid #858586; */
    color: #ffffff;
    padding-left: 8px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: absolute;
    width: 100%;
    top: -2px;
    left: 0;
    border:none
}

.selected.open{
  /* border: 1px solid #CE9B2C; */
  border-radius: 6px 6px 0px 0px;
  border:none
}
.custom-select:focus{
    border:none;
    outline: none;
}
.custom-select:active{
    border:none;
    outline: none;
}

.selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 10px;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.items {
  color: #ffffff;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  /* border-right: 1px solid #CE9B2C;
  border-left: 1px solid #CE9B2C;
  border-bottom: 1px solid #CE9B2C; */
  position: absolute;
  background-color: #080D0E;
  left: 0;
  right: 0;
  z-index: 999;
      max-height: 400px;
    overflow-y: auto;
        top: 51px;

}

.items::-webkit-scrollbar {
  width: .31em;
}
 
.items::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
.items::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}


.item{
  color: #ffffff;
  padding-left: 8px;
  cursor: pointer;
  user-select: none;
}

.item:hover{
  background-color: #9f9d9a;
}

.selectHide {
  display: none;
}
</style>
