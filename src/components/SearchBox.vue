<template>
  <div>
    <search-field @search-data="dataReceived"></search-field>
    <search-result :results="resultData"></search-result>
  </div>
</template>

<script>
  import SearchField from './SearchField.vue';
  import SearchResult from './SearchResult.vue';

  export default {
    components: {
      SearchField, 
      SearchResult,
    },
    data() {
      return {
        resultData: []
      }
    },
    methods: {
      dataReceived(data) {
        // debugger
        this.resultData = data;
      }
    },
  }
</script>

<style scoped>

</style>