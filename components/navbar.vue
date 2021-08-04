<template>
    <div class="container-fluid container_bg col fixed-top">
       <div class="container nav_padding">
      <nav class="navbar navbar-expand-lg navbar-light mt-2">
        <nuxt-link to ="/" class="navbar-brand"><img src="~/assets/icon-envelope-small@2x.png" alt="" srcset=""></nuxt-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ">
            <li class="nav-item active">
              <nuxt-link to ="/" class="nav-link">HOME <span class="sr-only">(current)</span></nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/about" class="nav-link" >ABOUT</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/services" class="nav-link">SERVICES</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/gallery" class="nav-link">GALLERY</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/testimonial" class="nav-link">TESTIMONIALS</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/contact" class="nav-link">CONTACT</nuxt-link>
            </li>
          </ul>
          <form>
            <li class="nav-item btn_nav">
              <div class="dropdown">
                    <button class="btn btn-dark dropdown dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      BOOK AN APPOINTMENT
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <nuxt-link to ="/login" class="dropdown-item" >Log In</nuxt-link>
                      <nuxt-link to="/signIn" class="dropdown-item">Sign Up</nuxt-link>
                    </div>
                  </div>              
            </li>
          </form>
        </div>
      </nav>
      </div>
    </div>
</template>

<style scoped>
.container_bg{
  padding: 1rem 1rem;
  background-color: white;
}
.navbar-nav > li{
    margin-left: 0.5rem !important;
    text-transform: capitalize; 
}
ul li a{
  color: black !important;
  font-size: 1.2rem;
  -webkit-transition: 2s; 
  transition:  2s;
  text-transform: capitalize;
}
li a:hover{
    color : #a34871 !important;
}
.dropdown-menu > a .dropdown-item{
  color: black !important;
}
.btn_nav{
  margin-left: 3rem;
  text-transform: capitalize !important;
  list-style-type: none !important;
}
.btn-dark {
    color: white;
    border-color: #a34871 !important;
    background-color:  #a34871 !important;
    -webkit-transition: 2s; 
    text-transform: capitalize !important;
    transition:  2s;
}
ul{
  margin-left: 9rem;
}
/* .btn-dark:hover{
  background-color: #ffc107 !important;
  border-color:  #ffc107 !important;
  transition-timing-function: ease-in;
  color: hsl(229, 31%, 21%);
} */
.btn{
  padding: .375rem 2rem !important;
}
.line_down{
  -webkit-transition: 2s; 
  transition:  2s;
}
.line_down li:hover{
   border-bottom: 4px solid  #f15f22 !important;
}
@media only screen and (max-width: 600px) {
li{
    text-transform: capitalize;
    padding: 0.4rem;
}
.navbar-nav > li{
    margin-left: 0 !important;
    text-transform: capitalize; 
}
.nav_padding{
    padding-right: 0px !important;
    padding-left: 0px !important;
}
.navbar{
  padding : 0 !important;
}
.btn_nav{
  margin-left: 0;
  text-transform: capitalize;
  list-style-type: none !important;
}
.navbar-light .navbar-toggler {
  border-color: white !important;
  background-color: white !important;
}
.line_down li:hover{
   border-bottom: none !important;
   
}
}
@media only screen and (max-width: 800px) {
li{
    text-transform: capitalize;
    padding: 0.4rem;
}
.navbar-nav > li{
    margin-left: 0 !important;
    text-transform: capitalize; 
}
.nav_padding{
    padding-right: 0px !important;
    padding-left: 0px !important;
}
.navbar{
  padding : 0 !important;
}
.btn_nav{
  margin-left: 0;
  text-transform: capitalize;
  list-style-type: none !important;
}
.navbar-light .navbar-toggler {
  border-color: white !important;
  background-color: white !important;
}
}
</style>



<style scoped>

</style>

