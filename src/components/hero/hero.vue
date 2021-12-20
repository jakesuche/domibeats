// :style="{ // 'background-image': // 'url(' +
require('@/assets/img/hero/hero-bg1.png') + ')', // }"

<template>
  <section
    class="hero spad set-bg"
    :style="{
      'background-position': 'bottom',
      'background-size': '1227px',
      'background-attachment': 'fixed',

      'background-image':
        'url(https://firebasestorage.googleapis.com/v0/b/intellectual-property-37fae.appspot.com/o/images%2Fepisodes-4.d0e87777.jpg?alt=media&token=9bff24ea-ad14-4ea5-9ca9-093a8ae9ebac)',
    ...viewstyle}"
  >
    <slot />
  </section>
</template>

<script>
export default {
  props: ["viewstyle"],
};
</script>

<style scoped>
.hero {
  background-attachment: fixed;
  background-size: cover;
}
</style>
