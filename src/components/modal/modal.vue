<template>
    <div class="modal fade"  :id="target" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">{{title}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"><XCircleIcon class="close-icon" size="39" /></span>
        </button>
      </div>
      <div class="modal-body">
        <slot />
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
    </div>
  </div>
</div>
</template>

<script>
import { AirplayIcon, AtSignIcon, XCircleIcon } from 'vue-feather-icons'
export default {
    props:['title', 'target'],
    components: {
        XCircleIcon, 
    }
}


</script>

<style scoped>
    .modal-content{
        background: var(--humber-black);
        border: 1px solid #f5e6973b;
}

.btn{
    background: var(--gradient-primary);
    width: 117px;
    color:var(--humber-black)
}

.modal-title{
    color: var(--humber-golden);
    font-size: 1.5rem;
}

.modal-header{
    border:none!important
}

.close-icon{
    fill: none;
    stroke: var( --humber-golden);
}
.close{
    opacity: 1!important;
}
</style>