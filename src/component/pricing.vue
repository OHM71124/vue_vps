<template>
    <div>
      <!--==============Content Area=================-->
      <div class="container">

        <!--============== Pricing ==============-->

        <div class="row PageHead" id="pricing">
          <div class="col-md-12">
            <h1>Plans & Pricing</h1>
            <h3>Tailored plans and pricing suits your needs</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-3 PlanPricing" v-bind:class="{Recommended:server.isActive}" v-for="server in serverlist">
            <div class="planName"> <span class="price">${{ server.price }}</span>
              <h3>Standard</h3>
              <p>{{ server.plan }} Plan</p>
            </div>
            <div class="planFeatures">
              <ul>
                <li> {{ server.storage }} Storage Space</li>
                <li>{{ server.bandwidth }} GB Monthly Bandwidth</li>
                <li>{{ server.domain }} Sub-domains</li>
                <li>{{ server.email_account }} Email Accounts</li>
                <li>Control panel</li>
                <li>24/7 Support</li>
              </ul>
            </div>
            <p> <a href="#" role="button" class="btn btn-success btn-lg">Sign Up </a> </p>
          </div>

        </div>
      </div>
      <!--Container Closed-->

      <!--============== Domain Search ==============-->

      <div class="domain">
        <div class="container">
          <div class="row PageHead">
            <div class="col-md-12">
              <h1>Search Domain</h1>
              <h3>Enter the domain name to register or transfer</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <form action="https://yourwebsite.com/whmcs/domainchecker.php" method="post">
                <input type="hidden" name="direct" value="true" />
                <div class="row">
                  <div class="col-sm-12 form-group">
                    <div class="input-group">
                      <input class="form-control" type="text" name="domain" size="20" placeholder="your domain name" />
                      <span class="input-group-btn">
                      <select class="btn btn-default" name="ext">
                        <option selected>.com</option>
                        <option>.net</option>
                        <option>.org</option>
                        <option>.biz</option>
                        <option>.com.au</option>
                        <option>.net.au</option>
                        <option>.info</option>
                        <option>.asia</option>
                        <option>.co.nz</option>
                        <option>.org.au</option>
                      </select>
                      </span> </div>
                  </div>
                </div>
                <div class="submitbtn">
                  <input type="submit" class="btn btn-success btn-lg" value="Search Domain" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!--Container Closed-->
    </div>
</template>

<script>
    export default {
        data(){
          return{
            serverlist:[]
          }
        },

        created() {
          this.serverlist = [
              {price:15, plan:'Monthly', bandwidth:10, storage:'10 GB', domain:10, email_account:25, isActive:false},
              {price:25, plan:'Monthly', bandwidth:10, storage:'20 GB', domain:20, email_account:50, isActive:false},
              {price:35, plan:'Monthly', bandwidth:10, storage:'30 GB', domain:30, email_account:75, isActive:false},
              {price:45, plan:'Monthly', bandwidth:10, storage:'40 GB', domain:40, email_account:80, isActive:false},
            ];
          for (let i = 0; i < this.serverlist.length; i++) {
            /*console.log(this.serverlist[i].isActive);*/
            if (this.serverlist[i].price == 35)
              this.serverlist[i].isActive = true;
          }
        },


    }
</script>

<style scoped>

</style>
