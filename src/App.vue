<template>
  <div>
    <navigation></navigation>
    <!--<component v-bind:is="comp_name"></component>-->
    <router-view></router-view>
    <footercmp></footercmp>
    <login></login>
  </div>
</template>

<script>
import  navigation from './component/navigation.vue'
import  footer from './component/footer.vue'
import  login from './component/login.vue'

export default {

  components:{
    "navigation": navigation,
    "footercmp": footer,
    "login": login,
  },

  data () {
    return {
      comp_name: "index"
    }
  }
}
</script>

<style>
</style>
