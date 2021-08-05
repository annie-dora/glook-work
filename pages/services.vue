<template>
    <div class="main">
        <navbar/>
        <div class="first">
            <div class="write">
                <h1>Services</h1>
            </div>
        </div>
        <div class="second">
            <div class="second-group container">
                <div class="grid1">
                    <div class="sub-grid">
                       <div class="visit">
                            <h3>Our <span class="service">Services</span> </h3>
                           <p>Come visit the best black hair salon in Uyo.
                             It is no longer enough for the black woman to just to 
                             have a fabulous hairstyle. Many of these very styles, 
                             such as micro freestyle braids, Brazilian blowout (which 
                             contains formaldehyde), the Dominican straightening are causing
                              severe and often permanent damage to the black woman’s hairshaft,
                               hair follicles, hair root, ends and scalp. Too tight freestyle hair 
                            braiding often causes alopecia tension.</p>
                       </div>
                      <div class="inner-grid">
                           <div class="head1">
                                <div class="inner-head">
                                    <h3>Style Title</h3>
                                    <ul>
                                        <li>Net hair weaves specialist Up do’s</li>
                                        <li>Precision short hair cuts</li>
                                        <li>Fade</li>
                                        <li>Dreadlocks starter and retwist</li>
                                        <li>Cornrow hair braiding</li>
                                        <li>Silk Press/Blowout</li>
                                        <li>Natural Hair Care</li>
                                        <li>Virgin Hair Relaxers </li>
                                        <li>Corrective Hair Relaxers</li>
                                        <li>Permanent Hair Coloring</li>
                                    </ul>


                                    <h3>Hair cuts</h3>
                                    <ul>
                                        <li>Short hair cut</li>
                                        <li>Medium hair cut</li>
                                        <li>Long hair cut</li>
                                        <li>Precision hair cut</li>
                                        <li>Trim of split ends</li>
                                        <li>Edge ups</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="head2">
                                <div class="inner-head">
                                    <h3>Style Title</h3>
                                    <ul>
                                        <li>Hair Relaxers, Virgin Relaxer, Relaxer Retouch</li>
                                        <li>Perms</li>
                                        <li>Jheri curls</li>
                                        <li>Two Strand Twist</li>
                                        <li>Straw Sets</li>
                                        <li>Pencil Curls</li>
                                        <li>Roller Wraps</li>
                                        <li>Roller Sets</li>
                                        <li>Keratin Protein Straightening Treatment</li>
                                        <li>Silk Press</li>
                                        <li>Natural Hair Blowout</li>
                                        <li>Natural Hair Care Styles</li>
                                        <li>Dreadlocks</li>
                                        <li>Protected Quick Weaves</li>
                                        <li>Protected Flawless Sew in Weaves</li>
                                        <li>Beautiful Flat 27 piece Quick Weaves</li>
                                        <li>Feed in Ghana, Goddess and Cornrow Hair Braiding Salon</li>
                                    </ul>
                                </div>
                            </div>
                      </div>
                    </div>
                    <div class="sub-grid2">
                        <div class="get">
                            <h3 class="certified">Get Certified</h3>
                            <img src="" alt="">
                            <p>Specializing in damaged hair repair and providing superior custom hair care services</p>
                        </div>
                        <div class="newsletter">
                            <div class="letter">
                                <div class="inner-letter">
                                    <h3>Newsletter</h3>
                                    <nuxt-link to="/signIn">Sign up</nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="gallery">
                            hhhhhhhhh
                            <br>

                            <img src="" alt="">
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
        <Footer/>
    </div>
</template>


<script>
import navbar from '~/components/navbar.vue'
import Footer from '~/components/Footer.vue';
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
.grid1{
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap:40px;
}
.visit{
    text-align: center;
}
.inner-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 50px 0;
    grid-gap: 15px;
}
.inner-head{
    background-color: #a34871;
    padding: 20px;
}
.inner-head h3{ 
    text-align: center;
    color: white;
    padding: 15px;
}
.inner-head li{
    color: white;
    /* text-align: center; */
}
.second{
    padding: 100px 0;
    background-color: rgba(126, 67, 67, 0.178)!important

}
.gallery{
    background-image: url('/img/gallery/2.png');
}
.newsletter{
     border: 10px solid #a34871;
    /* text-align: center; */
    padding: 8px;
}
.letter{
    background-color: white;
}
.inner-letter{
    text-align: center;
    margin: 10px;
    padding: 10px 20px;
}
.inner-letter a{
    text-decoration: none;
    color: #a34871;
    font-size: 20px;
    font-weight: bolder;
}
</style>
