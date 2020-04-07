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
            <li class="dropdown"> <a href="" class="dropdown-toggle" data-toggle="dropdown">BLOG <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href=""><router-link to="/blog">Blog List</router-link></a></li>
                <li><a href=""><router-link to="/blog">Single Blog page</router-link></a></li>
              </ul>
            </li>
            <li><a href="#"><router-link to="/contact">CONTACT</router-link></a></li>
            <li><a href="" role="button" @click.prevent="activateModal()">Login</a></li>
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

          }
        },
        methods: {
            activateModal() {
              EventBus.$emit("is_active", true);
          }
        }
    }
</script>

<style scoped>

</style>
