<template lang="html">
  <section id="articles" class="ui container">
    <div class="ui three doubling raised segment cards">
      <div class="card">
        <div class="blurring dimmable image">
          <div class="ui dimmer">
            <div class="ui header sub_title">
              Converse Classic Cortze Leather QS "Naike"
            </div>
            <h4 class="ui horizontal divider header sub_divider">
                <i class="tag icon"></i>
                Techs
              </h4>
            <div class="sub_techs">
              <div class="ui label">
                Converse
              </div>
              <div class="ui label">
                Adidas
              </div>
            </div>
          </div>
          <img src="http://ohw1pgpd1.bkt.gdipper.com/Converse/Classic_Cortze_Leather_QS_Naike_1.jpg">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
      return {}
    },
    mounted: function() {
 // $.ajax({ // url: 'https://sneakerfans.herokuapp.com/api/v1/validate', // method: 'post', // async: false, // data: { // email: email // }, // statusCode: { // 409: () => { // $('form#regform').form('add errors', ['email already existed']) // this.eamil_validation = false // }, // 200: () => { // console.log("") // this.eamil_validation = true // } // } // }); // }


  $('#articles .cards .image').dimmer({
    on: 'hover'
  });
}
}
</script>
<style scope>
#articles {}

.ui.header.sub_title {
  color: white;
  padding-top: 2em;
}

.ui.header.sub_divider {
  color: white;
}
</style>
