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
                    <p class="icon-text">Your GLOOk Salon experience begins from the moment you walk in our door. From our complimentary coffee basr to our 
                     to our team of highly experienced stylist and technicians, we have everything you need to feel relaxed
                     and refreshed. Our GLOOk team takes personal pride in making sure you're completely satisfied with our service.</p>
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
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                    <p class="say">This was my first time there and I loved Tammy. 
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
    color: black;
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
    background-size: contain;
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



@media only screen and (max-width: 600px) {
.back{
    background: linear-gradient(to right, hsl(229, 31%, 21%), rgba(116, 112, 112, 0.767));
    height: 400px !important;
    margin-top: 12vh;
}
.grid2{
    display: grid;
    grid-template-columns: 1fr;
}
.grid3{
    display:grid;
    grid-template-columns: 1fr;
}
.inner-grid li{
    list-style-type: none;
}
.people .say{
    font-size: 20px;
}

}
@media only screen and (min-width: 700px)  and (max-width: 1200px) {
.say{
    font-size: 10px;
}

}
@media only screen and (min-width: 1824px) {
    
}
</style>




