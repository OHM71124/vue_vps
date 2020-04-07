<template>
    <div v-bind:style="{'display':displayvalue}" class="modal fade LoginSignup" v-bind:class="{in:isActive}" id="Login" tabindex="-1" role="dialog" aria-labelledby="LoginLabel" v-bind:aria-hidden="!isActive" >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" @click="closeModal()" aria-hidden="true">&times;</button>
            <h3 class="modal-title">Login</h3>
          </div>
          <div class="modal-body">
            <form method="post" action="https://www.yourwebsite.com/client/dologin.php">
              <div class="form-group">
                <input class="form-control input-lg" type="text" name="username" size="50" placeholder="Email ID"/>
              </div>
              <div class="form-group">
                <input class="form-control input-lg" type="password" name="password" size="20" placeholder="Password"/>
              </div>
              <div class="form-group">
                <input type="submit" value="Login to my Account" class="btn btn-success btn-lg"/>
              </div>
            </form>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
</template>

<script>
    import {EventBus} from '../main'
    export default {
        data() {
          return {
            isActive: false,
            displayvalue:'none'
          }
        },
        mounted() {
          EventBus.$on("is_active", data=>{
            this.isActive = data;
            this.displayvalue = 'block'

          })
        },

        methods:{
          closeModal(){
            this.isActive = false;
            this.displayvalue = 'none'
          }
        }
    }
</script>

<style scoped>

</style>
