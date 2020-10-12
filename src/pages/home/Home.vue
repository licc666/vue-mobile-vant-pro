<template>
  <div class="home">
    <Button size="small" @click="handelClick">按钮</Button>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
import { Button } from 'vant'
import { getAccessToken } from './api'
export default {
  name: 'Home',
  components: { Button },
  methods: {
    handelClick() {
      const obj = { uid: '18583968590' }
      getAccessToken(obj).then(res => { console.log(res.data) })
    }
  }
}
</script>
