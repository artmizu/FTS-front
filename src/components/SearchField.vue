<template>
  <label class="field" :class="{ field_active: isActive }">
    <input 
      type="text" 
      placeholder="Введите запрос" 
      class="search-input" 
      v-model="query"
    >
    <div class="indicator"></div>
  </label>
</template>

<script>
  import { debounce } from 'lodash';

  export default {
    props: [ 'search-data' ],
    data() {
      return {
        isActive: false,
        debounceReqFunc: debounce(this.requestData, 350),
        query: null,
      }
    },
    watch: {
      query(newValue, oldValue) {
        this.isActive = true;
        this.debounceReqFunc();
      },
    },
    methods: {
      requestData() {
        this.$http.get('https://jsonplaceholder.typicode.com/users').then(res => {
          this.$emit('search-data', res.body);
          this.isActive = false;
        }, err => {
          console.error(err);
        });
      }
    },
  }
</script>

<style lang="less" scoped>
.field {
  height: 50px;
  padding: 8px 13px 10px;
  border: 2px solid blue;
  border-radius: 3px;
  display: flex;
  &_active .indicator {
    opacity: 1;
    visibility: visible;
  }
}

.indicator {
  width: 25px;
  height: 30px;
  background: url(../assets/tail-spin.svg) no-repeat center;
  background-size: 25px;
  transition: 0.3s opacity;
  opacity: 0;
  visibility: hidden;
}

.search-input {
  height: 30px;
  padding-right: 10px;
  font-size: 18px;
  font-family: sans-serif;
  outline: none;
  border:0;
  display: block;
  flex-grow: 1;
  &::placeholder {
    color:#8f8fd2;
  }
}
</style>