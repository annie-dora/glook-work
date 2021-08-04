<template>
    <div class="main">
         <navbar/>
         
        <div class="first">
            <div class="write container">
                <div class="left">
                    <h1>ABOUT US</h1>
                </div>
            </div>
        </div>
        <div class="second">
            <div class="container">
                <div class="grid1">
                    <div class="sub-grid">
                        <div class="grid-write">
                            <h3>Glook</h3>
                            <i class="fa fa-scissors" aria-hidden="true"></i>
                        </div>
                        <p>Uyo’s premier black hairstylist/loctician making Uyo women beautiful for over 25 years.</p>
                        <p>Ms. Tammy, owner of Trendz by Tammy Black Hair Salon, master hairstylist/loctician
                             specializing in black hair, grew up in a group home for girls after her mother was 
                             murdered across the street from her childhood home. In high school, 
                             she won a $10,000 Coca-Cola Martin Luther King Jr scholarship. She made her case 
                             to Vocational Rehabilitation Association that she was a handicap of the state due to 
                             the fact that she didn’t have parents and wanted to go to college. That bit of genius 
                             landed Ms. Tammy another $1,500 a semester for college. This allowed her to attend the college of 
                             her choice. Without the scholarships, she would have had to attend a state college. Ms. Tammy graduated from Xavier 
                            University of Louisiana with a Bachelor in Accounting.</p>
                            <p>Tammy is also a phenomenal motivational speaker and spoken word poet who performs all over the city. View aka Poet Authentic 
                                Deception at http://youtube.com/user/AuthenticDeception</p>
                    </div>
                    <div class="sub-grid">
                       <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="/img/slide/slide1.jpg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                            <img src="/img/slide/slide2.jpg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                            <img src="/img/slide/slide3.jpg" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="third">
            <button class="schedule"><nuxt-link to="/appointment">SCHEDULE APPOINTMENT</nuxt-link> </button>
        </div>
        <Footer/>
    </div>
</template>


<script>
import navbar from '~/components/navbar.vue'
import Footer from '~/components/Footer.vue'
export default {
    components:{
        navbar,
        Footer
    }
}
</script>

<style scoped>
.first{
    margin-top: 100px;
    background: linear-gradient(360deg, rgba(163, 72, 113, 0.81),rgba(163, 72, 113, 0.81)),url('/img/backgrounds/background3.jpg') fixed, no-repeat;
    background-size: cover;
    color: white;
    
}
.write{
    padding: 100px
}
.right li{
    display: inline;
    padding: 5px;
}
.second{
    background-color: rgba(126, 67, 67, 0.178)!important
}
.grid1{
    padding-top:100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
}
.third{
    text-align: center;
    margin: 20px 20px;
}
.grid-write{
    text-align: center;
}
.grid-write h3{
    color: #a34871;
}
.grid-write i{
    color: #a34871;
    padding: 10px;
}
a{
    text-decoration: none;
    color: white;
}
.schedule{
    background: #a34871;
    line-height: 1.6em;
    font-style: normal;
    display: inline-block;
    font-weight: bold;
    margin-top: 30px;
    padding: 15px 60px;
    border: none;

}
</style>


