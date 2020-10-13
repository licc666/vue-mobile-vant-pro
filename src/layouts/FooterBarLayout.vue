<template>
  <div class="">
    <transition name="van-fade" mode="out-in">
      <router-view />
    </transition>
    <Tabbar v-model="active">
      <TabbarItem name="msg" replace to="/msg" disabled icon="home-o">消息</TabbarItem>
      <TabbarItem name="contact-person" replace to="/contact-person" disabled icon="search">联系人</TabbarItem>
      <TabbarItem name="home" replace to="/home" icon="friends-o">工作台</TabbarItem>
      <TabbarItem name="about" replace to="/about" icon="setting-o">我的</TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'FooterBarLayout',
  components: { Tabbar, TabbarItem },
  data() {
    return {
      active: 'home'
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(val) {
        console.log('val: ', val)
        this.active = val.name
      }
    }
  }
}
</script>

<style>

</style>
