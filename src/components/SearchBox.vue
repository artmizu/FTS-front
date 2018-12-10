<template>
  <div>
    <label class="field" :class="{ field_active: isActive }">
      <input 
        type="text" 
        placeholder="Type in" 
        class="search-input" 
        v-model="query"
      >
      <div class="indicator"></div>
    </label>
    <div class="list">
      <div v-for="result in searchResult" :key="result.id" class="result">
        <slot :result="result"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import { debounce } from 'lodash';

  export default {
    props: [ 'requestUrl' ],
    data() {
      return {
        searchResult: [],
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
        this.$http.get(this.requestUrl + '?search=' + this.query).then(res => {
          this.searchResult = res.body;
          this.isActive = false;
        }, err => {
          console.error(err);
        });
      }
    },
    created() {
      this.$http.get(this.requestUrl).then(res => {
        this.searchResult = res.body;
      }, err => {
        console.error(err);
      })
    },
  }
</script>

<style lang="less">
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

.list {
  padding-top: 8px;
  margin-bottom: -15px;
}
.result {
  padding:8px 15px;
  border-radius: 3px;
  b {
    background-color: yellow;
    color: #0a0a03;
    border-radius: 2px;
  }
  &:hover {
    background-color: #f3f3fd;
    cursor: pointer;
  }
}
.title {
  font-size: 17px;
  line-height: 20px;
  font-weight: 500;
  text-transform: capitalize;
}
.subtitle {
  font-size: 13px;
  font-style: italic;
  line-height: 17px;
  text-transform: capitalize;
}
.description {
  margin-top: 5px;
  color:#525280;
  font-size: 13px;
  line-height: 17px;
}
</style>