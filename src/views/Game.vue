<template>
  <search-box request-url="game">
    <template slot-scope="context">
      <div class="title" v-html="context.result.title"></div>
      <div class="subtitle" v-html="context.result.genre"></div>
      <div class="description" v-html="context.result.about"></div>
    </template>
  </search-box>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue'

export default {
  name: 'home',
  components: {
    SearchBox
  }
}
</script>
