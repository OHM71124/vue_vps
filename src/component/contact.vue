<template>
    <!--============== Contact us ==============-->
  <div class="container" id="contact">
    <div class="row PageHead">
      <div class="col-md-12">
        <h1>Contact Us</h1>
        <h3>Keep in touch with us. we are here to help you</h3>
      </div>
    </div>
    <div class="row ContactUs">
      <div class="col-md-6">
        <div class="row">
          <div class="col-sm-6">
            <h4> Australia </h4>
            <address>
            <strong>Flat Host Pty Ltd</strong><br>
            13/2 Elizabeth Street<br>
            Melbourne VIC 30007<br>
            Australia<br>
            <abbr title="Phone">P:</abbr> +61 3 8376 6284<br>
            <br>
            </address>
          </div>
          <div class="col-sm-6">
            <h4>India</h4>
            <address>
            <strong>Flat Host Pty Ltd</strong><br>
            MG Road<br>
            Pulleppady Jn<br>
            Kochi, India<br>
            <abbr title="Phone">P:</abbr>+91 9 8376 6280<br>
            <br>
            </address>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mapwrap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.835837652496!2d144.955431!3d-37.817313999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xedc33f230d1355b1!2sEnvato+Pty+Ltd!5e0!3m2!1sen!2sin!4v1408780745585" width="100%" height="250" frameborder="0" style="border:0"></iframe>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <form class="form" id="phpcontactform">
          <div class="form-group">
            <input class="form-control" type="text" placeholder="Full Name" name="name" id="name">
          </div>
          <div class="form-group">
            <input class="form-control" type="email" placeholder="Email ID" name="email" id="email">
          </div>
          <div class="form-group">
            <input class="form-control" type="text" placeholder="Mobile Number" name="mobile" id="mobile">
          </div>
          <div class="form-group">
            <textarea class="form-control" rows="10" name="message" placeholder="Your Message" id="message"></textarea>
          </div>
          <div class="form-group">
            <p>
              <input class="btn btn-success btn-lg" type="submit" value="Send Message" />
            </p>
            <span class="loading"></span> </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "contact"
    }
</script>

<style scoped>

</style>
