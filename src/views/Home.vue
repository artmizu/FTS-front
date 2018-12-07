<template>
  <div class="home">
    <search-box></search-box>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBox from '@/components/SearchBox.vue'

export default {
  name: 'home',
  components: {
    SearchBox
  }
}
</script>

<style>
.home {
  max-width: 350px;
  margin:30px auto;
}
</style>

