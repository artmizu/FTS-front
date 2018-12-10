<template>
  <search-box request-url="user">
    <template slot-scope="context">
      <div class="title" v-html="context.result.name"></div>
      <div class="description" v-html="context.result.college"></div>
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

