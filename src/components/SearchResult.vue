<template>
  <div class="list">
    <div v-for="result in results" :key="result.id" class="result">
      <div class="title">{{ result.name }}</div>
      <div class="description">
        {{ result.email }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['results']
  }
</script>

<style scoped lang="less">
  .list {
    padding-top: 8px;
    margin-bottom: -15px;
  }
  .result {
    padding:8px 15px;
    border-radius: 3px;
    &:hover {
      background-color: #f3f3fd;
      cursor: pointer;
    }
  }
  .title {
    margin-bottom: 3px;
    font-size: 17px;
    line-height: 20px;
    font-weight: 500;
  }
  .description {
    color:#525280;
    font-size: 13px;
    line-height: 17px;
  }
</style>