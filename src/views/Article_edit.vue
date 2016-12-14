<template lang="html">
  <section id="article_edit" class="ui container">
  </section>
</template>
<script>
export default {
  data() {
      return {
        msg: "Sign into your account"
      }
    },
    mounted: function() {
      let simplemde = new SimpleMDE($("article_edit")[0])
    }
}
</script>
<style scope>

</style>
