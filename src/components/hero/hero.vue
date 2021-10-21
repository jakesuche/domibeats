<template>
  <section 
    class="hero spad set-bg"
    :style="{
      'background-image':
        'url(' + require('@/assets/img/hero/hero-bg1.png') + ')',
    }"
  >
    <slot />
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.hero{
    background-attachment: fixed;
    background-size: cover;
}
</style>
