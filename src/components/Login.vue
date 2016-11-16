<template>
  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <div class="content">
        {{msg}}
      </div>
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="mail icon"></i>
            <input type="text" ref="email" placeholder="Email">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" ref="password" placeholder="Password">
          </div>
        </div>
        <div v-on:click="submit" class="ui fluid large teal button">Login</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
        msg: "Log-in to your account"
      }
    },
    methods: {
      submit() {
        let email = this.$refs.email.value
        let password = this.$refs.password.value
        axios.post('https://sneakerfans.herokuapp.com/api/v1/sessions.json', {
            email: email,
            password: password
          })
          .then(function(response) {
            let user_json = JSON.parse(response.request.responseText)
            console.log(user_json.session)
            Cookies.set('user_name', user_json.session.name);
            Cookies.set('user_token', user_json.session.token, {
              // 30mins
              expires: 1 / 48
            });
            this.vm.$emit('loginsuccess', user_json.session.name)
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
.content {
  padding-top: 10px;
  padding-bottom: 10px;
}

.ui .input {
  margin-bottom: 10px;
  width: 100%;
}
</style>
