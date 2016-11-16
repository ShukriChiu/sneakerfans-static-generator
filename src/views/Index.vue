<template>
  <!-- Page Contents -->
  <div class="ui inverted vertical masthead center aligned segment">
    <div class="ui container">
      <div class="ui large secondary inverted pointing menu">
        <a href="/" class="active item">Home</a>
        <div class="right item">
          <router-link to="login" v-if="before" class="ui inverted button" id="login">Login</router-link>
          <router-link to="signup" v-if="before" class="ui inverted button" id="signup">Sign Up</router-link>
          <a v-if="after" @click="logoff" class="item">{{user}}</a>
        </div>
      </div>
    </div>
    <div class="ui text container">
      <router-view keep-alive></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
        user: "welcome shujian",
        before: true,
        after: false
      }
    },
    created: function() {
      this.$parent.$on('loginsuccess', function(userName) {
        this.$children[0].before = false
        this.$children[0].after = true
        this.$children[0].user = userName
      })
      this.fetchData()
    },
    methods: {
      logoff() {
        this.before = true
        this.after = false
        this.user = null
        Cookies.remove('user_name');
        Cookies.remove('user_token');
      },
      fetchData() {
        let username = Cookies.get('user_name')
        let user_token = Cookies.get('user_token')
        if (username && user_token) {
          console.log(this.before)
          this.before = false
          this.after = true
          this.user = username
        }
      }
    }
}
</script>
<style>
#login {
  margin-right: 10px
}
</style>
