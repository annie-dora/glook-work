<template>
    <div class="main">
        <navbar/>
        <div class="first">
            <div class="write">
                <h1>CONTACT</h1>
            </div>
        </div>
        <div class="second">
            <div class="section-padding">
        <div class="section-bg"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <div class="contact-form">
                        <h2 class="absolute-text">Appointment</h2>
                        <form action="index.html">
                            <div class="row">
                                <div class="col-md-6">
                                    <input type="text" placeholder="First Name*">
                                </div>
                                <div class="col-md-6">
                                    <input type="text" placeholder="Last Name*">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <input type="tel" placeholder="Phone Number">
                                </div>
                                <div class="col-md-6">
                                    <input type="date" placeholder="Date">
                                </div>
                            </div>
                            <p><textarea name="message" id="message" cols="30" rows="10" placeholder="Observation"></textarea></p>
                            <p><input type="submit" value="Make Appointment"></p>
                        </form>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="appointment-text">
                        <h5>We eliminate the inconvinience of multiple visits.</h5>
                        <ul class="list-unstyled">
                            <li><i class="fas fa-shield-alt"></i>No Second Injection or Temporaries</li>
                            <li><i class="fas fa-shield-alt"></i>No Unprofessional Doctors</li>
                            <li><i class="fas fa-shield-alt"></i>No Poor Quality Products</li>
                            <li><i class="fas fa-shield-alt"></i>No Student at Australian University</li>
                        </ul>
                        <a href="" class="boxed-btn">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
        </div> 
            <!-- <div class="contact-container ">
                <div class="left-col">
                  <div class="sub-grid">
                    <h3>Get in touch</h3>
                        <i class="fa fa-scissors" aria-hidden="true"></i>
                    <div class="other1 other">
                            <ul class="icons">
                                <li><i class="fa fa-map-marker " aria-hidden="true"> </i>  <span class="details">  9 idak-edat,Uyo</span></li> 
                                <li><i class="fa fa-phone " aria-hidden="true">   </i> <span  class="details">(+234) 817 7746 867</span></li> 
                                <li><i class="fa fa-envelope-open " aria-hidden="true">  </i> <span  class="details">nyonganiebiet@gmail.com</span></li> 
                            </ul>
                    </div>
                    <div class="others other">
                        <i class="fa fa-clock-o" aria-hidden="true"> </i>
                        <div class="others-sub">
                          <p>9:00 AM – 6:00 PM</p>
                           <p>Monday – Saturday</p>
                        </div>
                       <div class="others-sub">
                          <p>11:00 Noon – 4:00 PM</p>
                          <p>Sunday</p>
                       </div>
                    </div>
                    <div class="others-sub other others-icon">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                </div>
                </div>
                <div class="right-col">
                    
                    <h1>Contact us</h1>
                    <p>Planning to visit Indonesia soon? Get insider tips on where
                       to things to do and find best deals for your next adventure.</p>
                        
                    <form  method="post" @submit.prevent="send">
                        <label for="name">Full name</label>
                        <input type="text" id="name" name="name" placeholder="Your Full Name" v-model="message.name" required>
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="Your Email Address" required v-model="message.email">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="subject" placeholder="Your subject" required v-model="message.subject">
                        <label for="message">Message</label>
                        <textarea rows="6" placeholder="Your Message" id="message" name="message" required v-model="message.messages"></textarea>
                        <button type="submit" id="submit" name="submit" class="submit">Send</button>
                    </form>
                </div>
            </div>
         -->
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
    },
    data(){
        return{
            message:{
                name: '',
                email: ' ',
                subject: ' ',
                messages: ' '
            }
        }
    },
    methods: {
               async send() {
      try {
        this.$axios.post('https://glook-7063a-default-rtdb.firebaseio.com/glook.json',this.message,{
          headers:{
            'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
          }
        }).then((res)=>{
            this.recieved =res
            this.$message({
            message: "Order successful",
            type: "success",
            });
          console.log(this.recieved)
          this.message={}
          
        })
      } catch (err) {
           this.$message({
            message: "There was a problem sending your order. Please check and try again.",
            type: "warning",
            });
        console.log(err)
      }
     }
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
.second{
    margin: 100px;
}

.section-bg {
    background-color: rgb(150, 47, 47);
    /* position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 59%;
    background-size: cover;
    /* background-repeat: no-repeat; 
    background-position: center; */
}

.section-bg:after {
    /* position: absolute; */
    /* top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: blue;
    content: ""; */
    /* background: #32D6BE; */
    opacity: 0.9;
}

.contact-form {
    padding-top: 100px;
    padding-bottom: 100px;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    border: none;
    padding: 13px;
    margin-bottom: 17px;
    color: #333;
}

input:focus,
textarea:focus,
button:focus {
    outline: none;
}

.contact-form input[type="submit"] {
    width: auto;
    padding: 15px 30px;
    color: #32D6BE;
    background: white;
    font-weight: bold;
}

.appointment-text {
    padding-left: 100px;
    padding-top: 140px;
}

ul li i {
    padding-right: 10px;
    color: #32D6BE;
}

.boxed-btn {
    padding: 10px 30px;
    background: #32D6BE;
    color: white;
    font-weight: bold;
    border-radius: 5px;
}

.boxed-btn:hover {
    color: white;
    text-decoration: none;
}

h2.absolute-text {
    color: white;
    position: absolute;
    top: 29%;
    left: -60px;
    writing-mode: vertical-lr;
    transform: rotate(-180deg);
    letter-spacing: 2px;

}

ul {
    margin: 40px 0;
}

ul li {
    margin: 15px 0px;
}

@media screen and (max-width: 767px) {
    .section-bg {
        width: 100%;
    }

    .appointment-text {
        padding-left: 0px;
        padding-top: 140px;
    }

    h2.absolute-text {
        color: white;
        position: absolute;
        top: 32px;
        left: 24px;
        writing-mode: inherit;
        transform: none;
        letter-spacing: 2px;
    }

}
@media screen and (max-width: 1024px) and (min-width: 768px){
    h2.absolute-text {
        color: white;
        position: absolute;
        top: 32px;
        left: 24px;
        writing-mode: inherit;
        transform: none;
        letter-spacing: 2px;
    }
    .appointment-text {
        padding-left: 20px;
        padding-top: 140px;
    }

}

</style>


