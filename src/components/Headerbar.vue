<template lang="html">
  <section id="headerbar" class="ui container">
    <div class="ui vertical masthead center aligned segment">
      <div class="ui secondary pointing menu">
        <a href="/" class="active item">Home</a>
        <div class="right menu">
          <router-link to="signin" v-if="before" class="ui item " id="signin">Sign in</router-link>
          <router-link to="signup" v-if="before" class="ui item" id="signup">Sign up</router-link>
          <a v-show="after" class="ui item dropdown">
            Welcome,{{user}}
          <i class="dropdown icon"></i>
          <div class="menu">
            <div class="item">Account setting</div>
            <div @click="logoff" class="item">Log off</div>
          </div>
          </a>
        </div>
      </div>
    </div>
  </section>
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
    mounted: function() {
      $('.ui .dropdown')
        .dropdown();

      this.$root.$on('loginsuccess', function(userName) {
        console.log(this)
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
          this.before = false
          this.after = true
          this.user = username
        }
      }
    }
}
</script>
<style scope>
nav {
  background-color: #1d689e
}

#login {
  margin-right: 10px
}
</style>
