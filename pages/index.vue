<template>
    <div>
        <navbar/>
        <div class="first"> 
             <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="~/assets/first.jpg" class="images d-block w-100" alt="..." width="100%">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Over 20 Years Experience</h5>
                    <p>Master hair stylist in precision hair cuts</p>
                    <button class="more"> <nuxt-link to="/about">MORE ABOUT GLOOK</nuxt-link> </button>
                </div>
                </div>
                <div class="carousel-item">
                <img src="~/assets/second.jpg" class="d-block w-100" alt="..." width="100%">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Soft & Healthy Hair</h5>
                    <p>Exquisite style that is functional, soft & fun</p>
                    <button class="more"> <nuxt-link to="/gallery">VISIT GALLERY</nuxt-link> </button>
                </div>
                </div>
                <div class="carousel-item">
                <img src="~/assets/third.jpg" class="d-block w-100" alt="..." width="100%">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Natural Hair Salon</h5>
                    <p>We make hair move</p>
                    <button class="more"> <nuxt-link to="/appointment">MAKE APPOINTMENTS</nuxt-link> </button>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </div>
        <div class=" second">
            <div class="container">
                <div class="grid2">
                <div class="sub-grid">
                    <h3 class="icon-text">Welcome to <span class="glook">GLOOK</span></h3>
                    <div class="icon">
                        <i class="fa fa-scissors scissors" aria-hidden="true"></i>
                    </div>
                    <p class="icon-text">Premier Natural Black Hair Salon Houston. Skilled and up to date with the latest hair TRENDZ, 
                        ladies short pixie hair cuts, relaxers, dreadlocks and color trends. 
                        Our team of hair professionals is ready to help make you feel and look great. 
                        For hiring information visit http://trendzbytammy.com/hiring-booth-rental-hairstylists/</p>
                </div>
                <div class="sub-grid">
                    <img src="~/assets/owner.jpg" alt="" class="img-responsive" width="100%" height="100%">
                </div>
                <div class="sub-grid operation ">
                    <div class="opera">
                        <h3>Hours of Operation</h3>
                        <div class="icon-purple">
                            <i class="fa fa-scissors scissors" aria-hidden="true"></i>
                        </div>
                        <h5 class="words">Mon – Sat</h5>
                        <p>9:00 AM – 6:00 PM</p>
                        <h5>Sunday</h5>
                        <p>11:00 Noon – 4:00 PM</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div class="third ">
            <div class="container ">
                <h3 class="natural">Natural black hair salon</h3>
                <div class="grid3">
                    <div class="sub-grid2">
                        <div class="inner-grid">
                            <h3> Cuts</h3>
                            <ul>
                                <li>
                                    <span class="name">Trim</span>
                                    <span class="price">#600</span>
                                </li>
                                <li>
                                    <span class="name">Layered Haircut</span>
                                    <span class="price">#600</span>
                                </li>
                                <li>
                                    <span class="name">Natural Haircut</span>
                                    <span class="price" >#600</span>
                                </li>
                                <li>
                                    <span class="name" >Men's Haircut</span>
                                    <span class="price">#600</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="sub-grid2">
                        <div class="inner-grid">
                            <h3> Curls</h3>
                            <ul>
                                <li>
                                    <span class="name">Marcel Curling</span>
                                    <span class="price">#600</span>
                                </li>
                                <li>
                                    <span class="name">Soft Curls and Waves</span>
                                    <span class="price">#600</span>
                                </li>
                                <li>
                                    <span class="name">Roller Set</span>
                                    <span class="price">#600</span>
                                </li>
                                <li>
                                    <span class="name"> Straw Set</span>
                                    <span class="price">#600</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="sub-grid2">
                        <div class="inner-grid">
                            <h3> Chemicals</h3>
                            <ul>
                                <li>
                                    <span class="name">Relaxers</span>
                                    <span class="price">#600</span>
                                </li>
                                <li>
                                    <span class="name">Hair Coloring</span>
                                    <span class="price">#600</span>
                                </li>
                                <li>
                                    <span class="name">Jheri Curl</span>
                                    <span class="price">#600</span>
                                </li>
                                <li>
                                    <span class="name">Keratin Treatment</span>
                                    <span class="price">#600</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fourth mt-5">
                <div class="people container mb-5">
                    <h2 class="what">What People Are Saying</h2>
                    <i class="fa fa-scissors" aria-hidden="true"></i><br>
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                    <p >This was my first time there and I loved Tammy. 
                    She really cares about your hair. She’s friendly and
                    personable. My hair is natural and I was skeptical above getting it straightened but I was very satisfied.
                    My hair was bouncy and glowing!!!</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>    
</template>

<script>
import navbar from '~/components/navbar.vue';
import Footer from '~/components/Footer.vue'
// import carousel from 'v-owl-carousel'
export default {
     components : {
    navbar,
    Footer,
    
  },
    data(){
        return{
            counter : 0,
            isDisabled : false,
            prevDisabled : true
        }
        
    },
    methods : {
        nextBtn(){
            this.prevDisabled = false
            this.$refs.show.children[this.counter].classList.remove("active");
            this.counter++;
            this.$refs.show.children[this.counter].classList.add("active")
            if(this.counter + 1 === this.$refs.show.children.length){
                this.isDisabled = true
            }
        },
         prevBtn(){
             if(this.counter === 0){
                this.prevDisabled = true
             }
           else{
               this.isDisabled = false
            this.$refs.show.children[this.counter].classList.remove("active");
            this.counter--;
            this.$refs.show.children[this.counter].classList.add("active")
           }
        }
    }
}
</script>>

<style scoped>
.carousel-inner{
    margin: 20px 0;
}
.carousel-item h5{
    color: #a34871;
    font-size: 80px;
    font-weight: bolder;
}
.carousel-item p{
    color:#a34871;
    font-weight: bolder;
}
.carousel-indicators{
    margin-top: 30px;
}
.more{
    white-space: nowrap;
    font-size: 13px;
    line-height: 13px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    text-align: center;
    text-transform: uppercase;
    background-color: rgb(163, 72, 113);
    padding: 20px 20px;
    border: none;
}
.more a{
    color: white;
    text-decoration: none;
}
.grid2{
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5rem;
}
.sub.grid{
    text-align:center;
}
.glook{
    color:#a34871;
}
.icon{
    text-align: center;
    color:#a34871;
}
.icon-text{
    text-align: center;
}
.icon-purple{
    padding: 15px 0;
    color: white;
    text-align: center;
}
 .operation{
    background-color: #a34871;
    color: white;
    text-align: center;
    padding: 50px auto;
}
.opera{
    margin: 45px 0;
}
.operation h5{
    font-size: 18px;
    margin-bottom: 0;
    font-weight: 400;
    color: white;
}
.operation p{
    color: white;
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
}
.third{
    margin-top: 100px;
    background-color:rgba(160, 156, 156, 0.178)!important;
}

.natural{
    padding: 50px;
    text-align: center;
    line-height: 1;
}
.grid3{
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5rem;
}

.sub-grid2{
    border: 10px solid #a34871;
    /* text-align: center; */
    padding: 8px;
}
.inner-grid{
    background-color: #fff;
    padding: 30px 0;
}
.inner-grid h3{
    text-align: center;
}
.inner-grid ul{
    padding: 0 20px;
}
.name{
    line-height: 40px;
}
.price{
    float:right;
}
.fourth{
    background: linear-gradient(360deg, rgba(163, 72, 113, 0.81),rgba(163, 72, 113, 0.81)),url('/img/backgrounds/background2.jpg') fixed;
    background-size: cover;
    width: 100%;
    height: 100%;
}
.people{
    color: white;
    padding: 100px 0;
    text-align: center;
}
.people p{
    color: white;
    font-size: 35px;
}







.font_edit1{
    font-size: 2rem;
    color: #f15f22;
    border-radius: 12px;
}
.back{
    /* background: linear-gradient(to right, hsl(229, 31%, 21%), rgba(116, 112, 112, 0.767)); */
    height: 400px !important;
    
    /* margin-top: 13vh; */
}

.header{
    font-size: 5rem;
    text-transform:capitalize ;
    margin-top: 8rem ;
    width: 70%;
    line-height: 6rem;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
}
/* img{
    margin-top: 5rem;
} */
.input-group {
    margin-top: 2rem !important;
    width: 45% !important;
}
.form-control {
    padding: 1.8rem .75rem !important;
}
.input-group-text {
    color: white;
    background-color: #f15f22;
    border: 1px solid #f15f22;
    cursor: pointer !important;
   
}
.id_text{
    color : white;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 600;
}
.font_edit{
    font-size: 4rem;
    color: #f15f22;
}
.wrapper_icon{
    background-color:  rgba(248, 248, 248, 0.767);
    height: 100px;
}
.container_icon{
    margin-top: 0.5rem;
}
.icon_head{
    margin-top: .7rem;
    font-size: 1.3rem;
    text-transform: capitalize;
    color: rgba(116, 112, 112, 0.767);
    font-weight: 400;
}
/* .font_edit:hover{
    color: white;
} */
.icon_text{
    font-size: 1.5rem;
    text-transform: capitalize;
    font-weight: 700;
    color:  hsl(229, 31%, 21%);
}
.our_service{
    color : #f15f22;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 500;
    text-transform: capitalize;
}
.service_text{
    text-align: center;
    font-size: 3rem;
    text-transform: capitalize;
    color: hsl(229, 31%, 21%) ;
    font-weight: 400;
}
h5{
    color: hsl(229, 31%, 21%);
    font-weight: 600;
    font-size: 2.2rem;
}
p{
    color :  rgba(116, 112, 112, 0.767);
    font-weight: 400;
    font-size: 1rem;
}
.card-deck .card {
    height: 430px;
}
.card_hover{
  -webkit-transition: 2s; 
  transition:  2s;
}
/* .card_hover:hover{
    background-color: #f15f22;
    color: white !important;
} */
.about{
    color : #f15f22;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
    margin-top: 8rem;
}
.about_text{
    color : hsl(229, 31%, 21%);
    margin-top: .3rem;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
    width: 80%;
    text-transform: capitalize;
}
.about_word{
    margin-top: .5rem;
    font-size: 1.1rem;
    text-align: justify;
    width: 80%;
    word-break: keep-all;
}
.pic_margin{
    margin-top: 4rem;
}
.img_agent{
    content: url("/img/hero/delivery-man.png");
    height: 450px;
}
.btn-dark {
    color: white;
    border-color: #f15f22 !important;
    background-color:  #f15f22 !important;
    -webkit-transition: 2s; 
    transition:  2s;
    text-transform: capitalize;
}
.btn_centerDelivery{
    text-align: center !important;
}
.btn-dark:hover{
  background-color: #ffc107 !important;
  border-color:  #ffc107 !important;
  transition-timing-function: ease-in;
}
.btn{
  padding: .775rem 1.5rem !important;
}
.contact_us{
    margin-top : 10rem;
    background-image: url("/img/hero/girl3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
}
.contact_card{
    margin-top: 5rem;
    width: 70%;
}
.try_us{
    color : #f15f22;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
}
.try_us2{
    text-transform: capitalize;
    font-size: 2rem;
    margin-top: .3rem;
    font-weight: 500;
    color: hsl(229, 31%, 21%);
}
.increase_height{
    height: calc(2.9em + .75rem + 2px) !important;
}
.btn-primary {
    color: white;
    border-color: #f15f22 !important;
    background-color:  #f15f22 !important;
    text-transform: capitalize;
}
.btn-primary:hover {
    background-color:  #ffc107 !important;
    border-color: #ffc107 !important;
}
.our_agent{
    margin-top: 7rem;
}
input[type=date] {
  text-align: right;
}
input[type="date"]:before {
  color: black;
  content: attr(placeholder) !important;
  margin-right: 0.5em;
}
input[type=time] {
  text-align: right;
}
input[type="time"]:before {
  color: black;
  content: attr(placeholder) !important;
  margin-right: 0.5em;
}
/* input[type="time"]:focus:before {
  content: '' !important;
} */
.agent_card1{
    background-color: #f1f1f1;
    padding: 0 !important;
    text-align: center;
    margin-top: -5em;
}
.agent_card2{
    background-color: #f1f1f1;
    padding: 0 !important;
    text-align: center;
    margin-top: -5em;
}
.agent_card3{
    background-color: #f1f1f1;
    padding: 0 !important;
    text-align: center;
    margin-top: -5.6em;
}
.our_client{
    color : #f15f22;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
}
.client_text{
    font-size: 3rem;
    text-transform: capitalize;
    color: white ;
    font-weight: 400;
}
.client_body{
    margin-top: 10rem;
}
.client_bg{
    margin-top: 2rem;
    background-color: rgb(6, 14, 59);
    height: 60vh;
}
.each_client p{
    color: white !important;
    margin-top: 1rem;
    font-style: normal;
    font-weight: 400;
    text-align: justify;
}
.active{
    display : block !important;
}
#client-hide{
    display : none
}
.ceo{
    width: 5rem;
    border-radius: 50%;
}
.btn-outline-dark {
    color: white !important;
    border-color: #f15f22 !important;
}
.btn_margin{
    margin-top:1rem;
    position: relative;
    top: -75px;
    left: 40vh;
}
.email_notification{
    color: #f15f22;
    margin-top: 2rem;
    text-align: center;
    text-transform: capitalize;
}
.reduce{
    width: 80% !important;
}
.card_width{
    width: 70%;
    float: right;
    padding: .9rem;
    border-radius: 12px;
    margin-top: 3rem;
}
.footer{
    margin-top: 10rem;
    background-color: black;
}
.footer-text{
    margin-top: 5rem;
    color: white;
}
.footer-text2{
    color: #f15f22;
    margin-top: 5rem;
    float: right;
}
hr{
    color: white;

}
.list-name{
    font-size: 1.5rem;
    margin-top: 3rem;
    color: white;
}
ul{
    margin : 0;
    padding: 0;
    margin-top: 2rem;
}
li{
    list-style-type: none;
    margin-top: 1rem;
    color: #949090;
    font-size: 1.1rem;
    cursor: pointer;
}
.media_icon{
    letter-spacing: .7rem;
    font-size: 1.1;
}
@media only screen and (max-width: 600px) {
.back{
    background: linear-gradient(to right, hsl(229, 31%, 21%), rgba(116, 112, 112, 0.767));
    height: 400px !important;
    margin-top: 12vh;
}
.input-group {
    margin-top: 2.5rem !important;
    width: 100% !important;
}
.header{
    font-size: 2rem;
    text-transform:capitalize ;
    margin-top: 5rem ;
    width: 100%;
    line-height: 3rem;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
}
.wrapper_icon{
    background-color:  rgba(248, 248, 248, 0.767);
    height: 500px;
}
.container_icon{
    margin-top: 1rem;
}
.font_edit{
    font-size: 2.5rem;
    color: #f15f22;
}
.icon_head{
    margin-top: 0rem;
    font-size: 1.3rem;
    text-transform: capitalize;
    color: rgba(116, 112, 112, 0.767);
    font-weight: 400;
}
.icon_text{
    font-size: 1.5rem;
    text-transform: capitalize;
    font-weight: 700;
    color:  hsl(229, 31%, 21%);
}
.text_center{
    text-align: center !important;
}
.our_service{
    color : #f15f22;
    font-size: 1.3rem;
    text-align: center;
    font-weight: 500;
    text-transform: capitalize;
}
.service_text{
    text-align: center;
    font-size: 1.6rem;
    text-transform: capitalize;
    color: hsl(229, 31%, 21%);
    font-weight: 500;
}
h5{
    color: hsl(229, 31%, 21%);
    font-weight: 600;
    font-size: 2.2rem;
}
p{
    color :  rgba(116, 112, 112, 0.767);
    font-weight: 400;
    font-size: 1.12rem;
}
.about_margin{
    margin-top: 0;
}
.about{
    text-align: center;
    color : #f15f22;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
    margin-top: 8rem;
}
.about_text{
    color : hsl(229, 31%, 21%);
    text-align: center;
    margin-top: 0;
    width: 100%;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
    text-transform: capitalize;
}
.about_word{
    text-align: center;
    margin-top: 1rem;
    font-size: 1.1rem;
    width: 100%;    
}
.card-deck .card {
    height: auto;
}
.pic_margin{
    margin-top: 0;
    margin-left: 1rem;
}
.img_agent{
    content: url("/img/hero/delivery-man.png");
    height: 400px;
    text-align: center;
}
.btn-dark {
    color: white;
    border-color: #f15f22 !important;
    background-color:  #f15f22 !important;
    -webkit-transition: 2s; 
    transition:  2s;
    text-transform: capitalize;
}
.btn-dark:hover{
  background-color: #ffc107 !important;
  border-color:  #ffc107 !important;
  transition-timing-function: ease-in;
}
.btn{
  padding: .775rem 1rem !important;
}
.btn_center{
    text-align: center !important;
}
.contact_us{
    margin-top : 10rem;
    background-image: url("/img/hero/girl3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 180vh !important;
}
.contact_card{
    margin-top: 2rem;
    width: 100%;
}
.form-row{
    display: block !important;
}
.try_us{
    color : #f15f22;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
}
.try_us2{
    text-transform: capitalize;
    font-size: 2rem;
    margin-top: .3rem;
    font-weight: 500;
    color: hsl(229, 31%, 21%);
}
.increase_height{
    height: calc(2.9em + .75rem + 2px) !important;
}
.btn-primary {
    color: white;
    border-color: #f15f22 !important;
    background-color:  #f15f22 !important;
    text-transform: capitalize;
}
.form-row .col{
    margin-top : 1rem;
}
.agent_card1{
    background-color: #f1f1f1;
    padding: 0 !important;
    text-align: center;
    margin-top: -2em;
}
.agent_card2{
    background-color: #f1f1f1;
    padding: 0 !important;
    text-align: center;
    margin-top: -3.5em;
}
.agent_card3{
    background-color: #f1f1f1;
    padding: 0 !important;
    text-align: center;
    margin-top: -3em;
}
.our_client{
    color : #f15f22;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
}
.client_text{
    font-size: 3rem;
    text-transform: capitalize;
    color: white ;
    font-weight: 400;
}
.client_body{
    margin-top: 10rem;
}
.client_bg{
    margin-top: 5rem;
    background-color: rgb(6, 14, 59);
    height: 150vh;
}
.each_client p{
    color: white !important;
    margin-top: 1rem;
    font-style: normal;
    font-weight: 400;
    text-align: justify;
}
.btn-outline-dark {
    color: white !important;
    border-color: #f15f22 !important;
}
.btn_margin{
    margin-top:1rem;
    position: relative;
    top: 0;
    left: 0;
}
.email_notification{
    color: #f15f22;
    margin-top: 3rem;
    text-align: none !important;
    text-transform: capitalize;
}
.card_width{
    width: 100%;
    float: none;
    padding: .9rem;
    border-radius: 12px;
    margin-top: 2rem;
}
}
@media only screen and (min-width: 700px)  and (max-width: 1200px) {
.back{
    background: linear-gradient(to right, hsl(229, 31%, 21%), rgba(116, 112, 112, 0.767));
    height: 400px !important;
    margin-top: 12vh;
}
.input-group {
    margin-top: 2.5rem !important;
    width: 80% !important;
}
.header{
    font-size: 5rem;
    text-transform:capitalize ;
    margin-top: 3rem ;
    width: 100%;
    line-height: 5rem;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
}
.wrapper_icon{
    background-color:  rgba(248, 248, 248, 0.767);
    height: 200px;
}
.container_icon{
    margin-top: 4rem;
}
.font_edit{
    font-size: 2rem;
    color: #f15f22;
}
.icon_head{
    margin-top: 0rem;
    font-size: .9rem;
    text-transform: capitalize;
    color: rgba(116, 112, 112, 0.767);
    font-weight: 400;
}
.icon_text{
    font-size: 1rem;
    text-transform: capitalize;
    font-weight: 700;
    color:  hsl(229, 31%, 21%);
}
.text_center{
    text-align: none !important;
}
h5{
    color: hsl(229, 31%, 21%);
    font-weight: 600;
    font-size: 2.2rem;
}
p{
    color :  rgba(116, 112, 112, 0.767);
    font-weight: 400;
    font-size: 1.12rem;
}
.card-deck .card {
    height: auto;
}
.about_margin{
    margin-top: 0;
}
.about{
    text-align: center;
    color : #f15f22;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
    margin-top: 8rem;
}
.about_text{
    color : hsl(229, 31%, 21%);
    text-align: center;
    margin-top: 0;
    width: 100%;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
    text-transform: capitalize;
}
.about_word{
    text-align: center;
    margin-top: 1rem;
    font-size: 1.1rem;
    width: 100%;
}
.pic_margin{
    margin-top: 10rem;
}
.img_agent{
    content: url("/img/hero/delivery-man.png");
    height: 400px;
    text-align: center;
}
.btn-dark {
    color: white;
    border-color: #f15f22 !important;
    background-color:  #f15f22 !important;
    -webkit-transition: 2s; 
    transition:  2s;
    text-transform: capitalize;
}
.btn-dark:hover{
  background-color: #ffc107 !important;
  border-color:  #ffc107 !important;
  transition-timing-function: ease-in;
}
.btn{
  padding: .775rem 1rem !important;
}
.btn_center{
    text-align: center !important;
}
.contact_us{
    margin-top : 10rem;
    background-image: url("/img/hero/girl3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 120vh;
}
.contact_card{
    margin-top: 1rem;
    width: 100%;
}
.try_us{
    color : #f15f22;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
}
.try_us2{
    text-transform: capitalize;
    font-size: 2rem;
    margin-top: .3rem;
    font-weight: 500;
    color: hsl(229, 31%, 21%);
}
.increase_height{
    height: calc(2.9em + .75rem + 2px) !important;
}
.btn-primary {
    color: white;
    border-color: #f15f22 !important;
    background-color:  #f15f22 !important;
    text-transform: capitalize;
}
.form-row .col{
    margin-top : 1rem;
}
.agent_card1{
    background-color: #f1f1f1;
    padding: 0 !important;
    text-align: center;
    margin-top: -1em;
}
.agent_card2{
    background-color: #f1f1f1;
    padding: 0 !important;
    text-align: center;
    margin-top: -1em;
}
.agent_card3{
    background-color: #f1f1f1;
    padding: 0 !important;
    text-align: center;
    margin-top: -1em;
}
.our_client{
    color : #f15f22;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
}
.client_text{
    font-size: 3rem;
    text-transform: capitalize;
    color: white ;
    font-weight: 400;
}
.client_body{
    margin-top: 10rem;
}
.client_bg{
    margin-top: 5rem;
    background-color: rgb(6, 14, 59);
    height: 80vh;
}
.each_client p{
    color: white !important;
    margin-top: 1rem;
    font-style: normal;
    font-weight: 400;
    text-align: justify;
}
.btn-outline-dark {
    color: white !important;
    border-color: #f15f22 !important;
}
.btn_margin{
    margin-top:.5rem;
    position: relative;
    top: 0;
    left: 0;
}
.card_width{
    width: 100%;
    float: none;
    padding: .9rem;
    border-radius: 12px;
    margin-top: 6rem;
}
}
@media only screen and (min-width: 1824px) {
    .btn_margin{
    margin-top:1rem;
    position: relative;
    top: -75px;
    left: 20vh !important;
}
.client_bg{
    margin-top: 2rem;
    background-color: rgb(6, 14, 59);
    height: 30vh;
}
.contact_us{
    margin-top : 10rem;
    background-image: url("/img/hero/girl3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 60vh;
}
.pic_margin{
    margin-top: 6rem;
}
}
</style>




