<template>
  <div>
    
    <div class="margin">
       <nuxt />
    </div>
   <footer/>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue"
import footer from "@/components/footer.vue"
export default {
  components : {
    navbar,
    footer
  }
}
</script>

<style scoped>
.margin{
  margin-top: 6vh;
}
@media only screen and (max-width: 600px) {
  .margin{
  margin-top: 12vh;
}
}

</style>