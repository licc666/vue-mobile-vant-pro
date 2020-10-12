<template>
  <div>
    <Search v-model="value" placeholder="请输入搜索关键词" />
    <transition name="van-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { Search } from 'vant'
export default {
  name: 'TopbarSearchView',
  components: { Search },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less">

</style>
