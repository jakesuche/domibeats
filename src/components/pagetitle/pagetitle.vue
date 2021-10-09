<template>
  <h4 class="page-title">
      <i @click="$router.back()" type="button" class="fas fa-arrow-left "></i>
      &nbsp;&nbsp;&nbsp; {{title}}
</h4>
</template>

<script>
export default {
    props:['title']
}
</script>

<style>

</style>