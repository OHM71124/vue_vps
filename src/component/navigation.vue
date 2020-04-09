<template>
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
          <a class="navbar-brand" href="index.html"> <img src="../assets/images/flathost-logo.png" alt="logo"></a> </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse navbar-ex1-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="active"><a href=""><router-link to="/">HOME</router-link></a></li>
            <li class="hidden-sm"><a href="#"><router-link to="/feature">FEATURES</router-link></a></li>
            <li><a href=""><router-link to="/pricing">PRICING</router-link></a></li>
            <li><a href=""><router-link to="/blog">Blog</router-link></a></li>
            <li><a href="#"><router-link to="/contact">CONTACT</router-link></a></li>
            <li v-show="isActiveLoginLogout"><a href="" role="button" @click.prevent="activateModal()">Login</a></li>
            <li v-show="!isActiveLoginLogout"><a href="" role="button" @click.prevent="logoutMethod()">Logout</a></li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->

      </div>
    </nav>
</template>

<script>
    import {EventBus} from '../main'
    export default {
        data() {
          return{
            isActiveLoginLogout: true
          }
        },
        methods: {
          activateModal() {
            EventBus.$emit("is_active", true);
          },

          logoutMethod() {
            if (this.$session.has("username")) {
              console.log('Username:'+this.$session.get("username"));
              this.$session.remove("username");
              this.isActiveLoginLogout = true
            }
          }

        },

        mounted(){
          if (this.$session.has("username")) {
            console.log('Username:'+this.$session.get("username"));
            this.isActiveLoginLogout = false
          }

          EventBus.$on("emitisActiveLoginLogout", data=>{
            this.isActiveLoginLogout = data;
          })
        }
    }
</script>

<style scoped>

</style>
