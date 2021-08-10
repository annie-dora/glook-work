<template>
    <div class="main">
        <navbar/>
        <div class="first">
            <div class="write">
                <h1>CONTACT</h1>
            </div>
        </div>
        <div class="second container">
            <div class="first-grid container">
                <div class="img-line">
                    <div class="sub-grid">
                    <h3>Get in touch</h3>
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
                <div class="contact ">
                    <div class="container-contact">
                        <div class="wrap-contact">

                        <form name="contact" class="contact-form validate-form" method="post" @submit.prevent="send">
                    
                            <div class="wrap-input validate-input">
                                <input class="input" type="text" name="name" placeholder="Full Name" v-model="message.name">
                            </div>
            
                            <div class="wrap-input validate-input">
                                <input class="input" type="email" name="" id="" placeholder="Email" v-model="message.email"> 
                            </div>
                            
                            <div class="wrap-input validate-input">
                                <input class="input subject" type="text" name="" id=""  placeholder="Subject"  v-model="message.subject">
                            </div>

                            <div class="wrap-input validate-input" data-validate = "Please enter your message">
                            <textarea class="input" type="text" name="message" placeholder="Your Message" v-model="message.messages"></textarea>
                            </div>
                            
                            <div class="container-contact-form-btn">
                            <button type="submit" class="contact-form-btn">
                                <span>Send</span>
                            </button>
                            </div>

                            <!-- <div class="grid-container">
                            <div class="item1 left-align"><i class="fa fa-lg fa-map-marker-alt"></i> 4517 Washington Ave, Manchester, Kentucky 39495</div>  
                            <div class="item4 right-align"><i class="fa fa-lg fa-phone"></i> (123) 456-7890<br>(123) 456-7890</div>

                            </div> -->

                        </form>

                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="section-padding">
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
             </div> -->
  
        </div> 
        <!-- <div class="container">
              <div class="contact-container "> 
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
    margin: 100px 0px 0px 0px;
}
.first-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.sub-grid{
    text-align: center;
}
.sub-grid li{
    list-style-type: none;
}
input {
  outline: none;
  border: none;
}
textarea {
outline: none;
border: none; 
font-family: Helvetica Neue, "Montserrat", sans-serif;
}

textarea:focus, input:focus {
  border-color: transparent !important;
}

input::-webkit-input-placeholder { color: #bdbdd3;}
input:-moz-placeholder { color: #bdbdd3;}
input::-moz-placeholder { color: #bdbdd3;}
input:-ms-input-placeholder { color: #bdbdd3;}

textarea::-webkit-input-placeholder { color: #bdbdd3;}
textarea:-moz-placeholder { color: #bdbdd3;}
textarea::-moz-placeholder { color: #bdbdd3;}
textarea:-ms-input-placeholder { color: #bdbdd3;}


/*==================================================================
[ Contact - Area]*/

.container-contact {
  width: 100%;  
  min-height: 70vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  position: relative;
    background: linear-gradient(360deg, rgba(163, 72, 113, 0.81),rgba(163, 72, 113, 0.81)),url('/img/slide/slide3.jpg') fixed no-repeat;
 
}

.wrap-contact {
  width: 100%;
  background: transparent;
  border: 1px solid #b3b3b3;
  padding: 20px 0px 20px 0px;
}

.wrap-contact-image {
  width: 600px;
  background: transparent;
  padding: 40px 0px 20px 0px;
}

/*==================================================================
[ Contact - Form ]*/

.contact-form {
  width: 100%;
}

/* .error {
  padding: 5px 9px;
  border: 1px solid red;
  color: red;
  border-radius: 3px;
}
 
.success {
  padding: 5px 9px;
  border: 1px solid green;
  color: green;
  border-radius: 3px;
} */


/*------------------------------------------------------------------
[ Input ]*/

.wrap-input {
  width: 90%;
  background-color: #fff;
  border: 1px solid #b3b3b3;
  border-radius: 7px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
}


.input {
  position: relative;
  display: block;
  width: 100%;
  background: #fff;
  border-radius: 31px;
  color: #8f8fa1;
  line-height: 1.2;
  font-family: "Montserrat";
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.2em;
  height: 20px;
  padding-left: 10px;
  padding-right: 10px;
  text-transform: none;
}

/*---------------------------------------------*/

input.input {
  height: 25px;
  padding: 0 15px 0 15px;
}


textarea.input {
  min-height: 100px;
  padding: 19px 15px 0 15px;
}

/*------------------------------------------------------------------
[ Focus Input ]*/

.focus-input {
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
  border-radius: 31px;
  background-color: #fff;
  pointer-events: none;
  
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.input:focus + .focus-input100 {
  width: calc(100% + 20px);
}

/*------------------------------------------------------------------
[ Button ]*/
.container-contact-form-btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 10px;
}

.contact-form-btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  min-width: 250px;
  height: 50px;
  background-color: transparent;
  border-radius:7px;
  cursor: pointer;

  font-family: "Montserrat";
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
  position: relative;
  z-index: 1;
}

.contact-form-btn::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
  border-radius: 7px;
  background-color: #a34871;
  pointer-events: none;
  
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.contact-form-btn:hover:before {
  background-color: #a34871;
}

.validate-input {
  position: relative;
}

/*==================================================================
[ Info Grid]*/

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 100px;
  grid-gap: 100px;
  padding: 10px 30px 0px 30px;
}

.grid-container > div {
  padding: 20px 0;
  font-size: 10px;
}



@media only screen and (max-width: 600px) {
.first-grid{
    display: grid;
    grid-template-columns: 1fr;
}
.container-contact {
    /* width: 100%;   */
  min-height: 70vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* padding: 15px; */
  position: relative;
  background-color: transparent;
}
.wrap-contact {
  /* width: 100%; */
  background: transparent;
  border: 1px solid #b3b3b3;
  /* padding: 20px 0px 20px 0px; */
}

.wrap-contact-image {
  /* width: 400px; */
  background: transparent;
  /* padding: 40px 0px 20px 0px; */
}

.wrap-input {
  /* width: 90%; */
  background-color: #fff;
  border: 1px solid #b3b3b3;
  border-radius: 7px;
  /* margin-left: auto; */
  /* margin-right: auto; */
  margin-bottom: 10px;
  /* position: relative;
  z-index: 1; */
}


.input {
  position: relative;
  display: block;
  width: 100%;
  background: #fff;
  border-radius: 31px;
  color: #8f8fa1;
  line-height: 1.2;
  font-family: "Montserrat";
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.2em;
  height: 20px;
  /* padding-left: 10px; */
  /* padding-right: 10px; */
  text-transform: none;
}

/*---------------------------------------------*/

input.input {
  height: 25px;
  padding: 0 15px 0 15px;
}


textarea.input {
  min-height: 100px;
  padding: 19px 15px 0 15px;
}

/*------------------------------------------------------------------
[ Focus Input ]*/

.focus-input {
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
  border-radius: 31px;
  background-color: #fff;
  pointer-events: none;
  
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.input:focus + .focus-input100 {
  width: calc(100% + 20px);
}

/*------------------------------------------------------------------
[ Button ]*/
/* .container-contact-form-btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 10px;
}

.contact-form-btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  min-width: 250px;
  height: 50px;
  background-color: transparent;
  border-radius:7px;
  cursor: pointer;

  font-family: "Montserrat";
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
  position: relative;
  z-index: 1;
}

.contact-form-btn::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
  border-radius: 7px;
  background-color: #a34871;
  pointer-events: none;
  
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
} */

.contact-form-btn:hover:before {
  background-color: #a34871;
}

.validate-input {
  position: relative;
}

/*==================================================================
[ Info Grid]*/

/* .grid-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 100px;
  grid-gap: 100px;
  padding: 10px 30px 0px 30px;
}

.grid-container > div {
  padding: 20px 0;
  font-size: 10px;
} */

}




/* .left-align {
    text-align: left;
}

.right-align {
    text-align: right;
} */



/* .contact-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
} */
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
    color: #a34871;
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


