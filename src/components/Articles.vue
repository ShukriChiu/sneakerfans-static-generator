<template lang="html">
  <section id="articles" class="ui container">
    <div class="ui three doubling raised segment cards">
      <div class="card">
        <div class="blurring dimmable image">
          <div class="ui dimmer">
            <div class="content">
              <div class="center">
                <div class="ui inverted button">Add Friend</div>
              </div>
            </div>
          </div>
          <img src="assets/images/elliot.jpg">
        </div>
      </div>
      <div class="card">
        <div class="blurring dimmable image">
          <div class="ui dimmer">
            <div class="content">
              <div class="center">
                <div class="ui inverted button">Add Friend</div>
              </div>
            </div>
          </div>
          <img src="assets/images/helen.jpg">
        </div>
      </div>
      <div class="card">
        <div class="blurring dimmable image">
          <div class="ui dimmer">
            <div class="content">
              <div class="center">
                <div class="ui inverted button">Add Friend</div>
              </div>
            </div>
          </div>
          <img src="assets/images/jenny.jpg">
        </div>
      </div>
      <div class="card">
        <div class="blurring dimmable image">
          <div class="ui dimmer">
            <div class="content">
              <div class="center">
                <div class="ui inverted button">Add Friend</div>
              </div>
            </div>
          </div>
          <img src="assets/images/veronika.jpg">
        </div>
      </div>
      <div class="card">
        <div class="blurring dimmable image">
          <div class="ui dimmer">
            <div class="content">
              <div class="center">
                <div class="ui inverted button">Add Friend</div>
              </div>
            </div>
          </div>
          <img src="assets/images/stevie.jpg">
        </div>
      </div>
      <div class="card">
        <div class="blurring dimmable image">
          <div class="ui dimmer">
            <div class="content">
              <div class="center">
                <div class="ui inverted button">Add Friend</div>
              </div>
            </div>
          </div>
          <img src="assets/images/steve.jpg">
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
      $('#articles .cards .image').dimmer({
        on: 'hover'
      });
    }
}
</script>
<style scope>
#articles {
}
</style>
