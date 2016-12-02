<template lang="html">
  <section>
    <div class="ui attached message">
      <div class="header">
        Welcome to our site!
      </div>
      <p>Fill out the form below to sign-up for a new account</p>
    </div>
    <form id="regform" class="ui form attached fluid segment">
      <div class="field">
        <label>Email</label>
        <div class="ui left icon input">
          <i class="mail icon"></i>
          <input type="text" id="regemail" name="regemail" placeholder="Email">
        </div>
      </div>
      <div class="field">
        <label>Name</label>
        <div class="ui left icon input">
          <i class="user icon"></i>
          <input type="text" id="regname" name="regname" placeholder="Name">
        </div>
      </div>
      <div class="field">
        <label>Password</label>
        <div class="ui left icon input">
          <i class="lock icon"></i>
          <input type="password" id="regpassword" name="regpassword" placeholder="Password">
        </div>
      </div>
      <div class="inline field">
        <div class="ui checkbox">
          <input type="checkbox" id="terms" name="regterms">
          <label for="terms">I agree to the terms and conditions</label>
        </div>
      </div>
      <div class="ui blue submit button">Submit</div>
      <div class="ui clear button">Clear</div>
      <div class="ui error message"></div>
    </form>
  </section>
</template>
<script>
export default {
  data() {
      return {
        msg: 'Signup your account'
      }
    },
    mounted: function() {
      let regvue = this
      $.fn.api.settings.api = {
        'signup users': 'https://sneakerfans.herokuapp.com/api/v1/users.json'
      };
      $('form#regform')
        .form({
          on: 'blur',
          fields: {
            email: {
              identifier: 'regemail',
              rules: [{
                type: 'email',
                prompt: 'Please enter a valid email '
              }]
            },
            name: {
              identifier: 'regname',
              rules: [{
                type: 'empty',
                prompt: 'Name must have an value'
              }, {
                type: 'maxLength[15]',
                prompt: 'Please enter at most 15 characters'
              }]
            },
            password: {
              identifier: 'regpassword',
              rules: [{
                type: 'empty',
                prompt: 'Password must have an value'
              }, {
                type: 'minLength[6]',
                prompt: 'Password must be no less than 6 characters'
              }]
            },
            checkbox: {
              identifier: 'regterms',
              rules: [{
                type: 'checked',
                prompt: 'Terms must be reviewed and agreed'
              }]
            }
          }
        })
        .api({
          action: 'signup users',
          method: 'post',
          dataType: 'JSON',
          beforeSend: function(settings) {
            let email = $('#regemail')[0].value
            let name = $('#regname')[0].value
            let password = $('#regpassword')[0].value
            settings.data = {
              email: email,
              name: name,
              password: password
            }
            return settings;
          },
          onSuccess: function(response) {
            console.log(response)
            Cookies.set('user_name', response.user.name);
            Cookies.set('user_token', response.user.token, {
              // 30mins
              expires: 1 / 48
            });
            regvue.$root.$emit('loginsuccess', response.user.name)
            regvue.$root.$router.push('/')
          },
          onError: function(response) {
            console.log(response)
          }
        });
      $('form#regform')
        .keypress(function(event) {
          if (event.which == 13) {
            event.preventDefault();
          }
        });
    },
    methods: {

    }
}
</script>
<style scope>
</style>
