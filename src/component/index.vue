<template>
  <div>
    <div class="jumbotron masthead">
      <div class="container">
        <!--==============Hero Unit=================-->
        <div class="flexslider">
          <ul class="slides">
            <li>
              <div class="hero-unit">
                <h1>Affordable Hosting Solution</h1>
                <h3>Flathost is a bootstrap based responsive minimal, flat and afforable hosting template with easy customization and great support</h3>
                <div class="slider-actions text-center"> <a href="features.html" class="btn btn-success btn-lg">Explore Features </a> <a href="pricing.html" class="btn btn-primary btn-lg">Plans and Pricing </a> </div>
              </div>
            </li>
            <li>
              <div class="slide2">
                <p><img src="../assets/images/server1.png" alt="server" class="img-responsive center-block"></p>
                <h1>Dedicated and VIP Hosting</h1>
              </div>
            </li>
            <li>
              <div class="slide3">
                <p class="pull-left"><img src="../assets/images/server2.png" alt="server" class="img-responsive"></p>
                <h1>Managed Hosting</h1>
                <h3>Flathost is a bootstrap based responsive minimal, flat and afforable hosting template with easy customization and great support </h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!--==============Content Area=================-->


  </div>
</template>

<script>

    export default {

        mounted() {
            console.log('calling index mounted function....');
            setTimeout(() => {
              $('.flexslider').flexslider({
                animation: "slide",
                useCSS: Modernizr.touch
              });
            }, 1000);
        },

        /*created() {
            console.log('calling index created function....')
            $('.flexslider').flexslider({
                animation: "slide",
                useCSS: Modernizr.touch
            });
        }*/
    }
</script>

<style scoped>

</style>
