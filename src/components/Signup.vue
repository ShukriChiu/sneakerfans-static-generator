<template lang="html">
  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <div class="content">
        {{msg}}
      </div>
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="mail icon"></i>
            <input type="text" ref="regemail" placeholder="Email">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" ref="regname" placeholder="Name">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" ref="regpassword" placeholder="Password">
          </div>
        </div>
        <div v-on:click="submit" class="ui fluid large teal button">Signup</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
        msg: 'Signup your account'
      }
    },
    methods: {
      submit() {
        let email = this.$refs.regemail.value
        let name = this.$refs.regname.value
        let password = this.$refs.regpassword.value
        axios.post('https://sneakerfans.herokuapp.com/api/v1/users.json', {
            email: email,
            name: name,
            password: password
          })
          .then(function(response) {
            let user_json = JSON.parse(response.request.responseText)
            console.log(user_json.user)
            Cookies.set('user_name', user_json.user.name);
            Cookies.set('user_token', user_json.user.token, {
              // 30mins
              expires: 1 / 48
            });
            this.vm.$emit('loginsuccess', user_json.user.name)
            this.vm.$router.push('/')
          })
          .catch(function(error) {
            console.log(error);
          })
      }
    }
}
</script>
<style scope>
</style>
