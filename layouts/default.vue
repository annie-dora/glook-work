<template>
  <div>
    
    <div class="margin">
       <nuxt />
    </div>
   
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue"
import Footer from "@/components/Footer.vue"
export default {
  components : {
    navbar,
    Footer
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