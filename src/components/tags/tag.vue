<template>
    <!-- <div class="tag_list_wrapper" v-if="tag">
       
         
    </div> -->
     <div class="tag_list"  data-id='1'>{{tag}}<span type="button" @click="emitTag()">X</span></div>
</template>

<script>
export default {
    props:['tag', 'index'],
    methods: {
        emitTag(){
            this.$emit('click', this.tag)
        }
    }
}
</script>

<style scoped>
    .tag_list_wrapper{
  
}
.tag_list {
    display: inline-block;
    vertical-align: top;
    font: normal normal normal 12px/30px ;
letter-spacing: 0px;
opacity: 1;
  
    margin: 5px;
    padding: 10px 25px 10px 10px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #E8EDEF;
opacity: 1;
    position: relative;
    font-family: "Poppins"
}
.tag_list.tag_list_hide{
    display: none;
}
.tag_list span {
    position: absolute;
    right: -7px;
    top: -9px;
    cursor: pointer;
    background: #000000 0% 0% no-repeat padding-box;
    color:#ffffff;
        border-radius: 40px;
    padding: 0 6px 0px 7px;

}
</style>