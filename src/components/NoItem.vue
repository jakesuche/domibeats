<template>
   <div  class="d-flex justify-content-center align-items-center mb-5 mt-5">
            <div style="flexDirection: column" class="d-flex align-items-center">
              <i style="font-size:2rem;color:white" class="fas fa-inbox"></i>
              <div style="color:white">
                {{title ? title : "No data found"}}
              </div>
            </div>
        </div>
</template>

<script>
export default {
    props:['title']
}
</script>

<style>

</style>