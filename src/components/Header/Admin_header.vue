<template>
  <nav class=" admin_nav navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Dashboard</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#" @click="$emit('sample')">Sample Beats <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#" @click="$emit('beats')">Beats</a>
      </li>
     
      <li class="nav-item">
        <a class="nav-link active" href="#" @click="$emit('users')">Users</a>
      </li>
    </ul>
  
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
    .admin_nav{
    position: fixed;
    top: 0;
    width: 100%;
    z-index:99
    }
</style>