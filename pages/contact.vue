<template>
    <div class="main">
        <navbar/>
        <div class="first">
            <div class="write">
                <h1>CONTACT</h1>
            </div>
        </div>
        <div class="second">
            <div class="contact-container">
                <div class="left-col">
                    <!-- <img class="logo" src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/logo.png"/> -->
                </div>
                <div class="right-col">
                    <!-- <div class="theme-switch-wrapper">
                    <label class="theme-switch" for="checkbox">
                        <input type="checkbox" id="checkbox" />
                        <div class="slider round"></div>
                    </label>
                    </div>
                         -->
                    <h1>Contact us</h1>
                    <p>Planning to visit Indonesia soon? Get insider tips on where to go,
                         things to do and find best deals for your next adventure.</p>
                        
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
            <!-- <div class="">
                <div class="form-container">
                    <div class="left-container">
                    <div class="left-inner-container">
                    <h2>Let's Chat</h2>
                    <p>Whether you have a question, want to start a project or            simply want to connect.</p>
                        <br>
                        <p>Feel free to send me a message in the contact form</p>
                    </div>
                    </div>
                    <div class="right-container">
                        <div class="right-inner-container">
                            <form  method="post" @submit.prevent="send">
                                <h2 class="lg-view">Contact</h2>
                                <h2 class="sm-view">Let's Chat</h2>
                                <label for="name">First name</label>
                                <input type="text" name="" placeholder="First Name" id="" v-model="message.first">
                                <input type="text" name="" placeholder="Last name" id="" v-model="message.last">
                                <input type="text" placeholder="Last Name " name="name"  v-model="message.last" />
                                <input type="email" placeholder=" " name="email" v-model="message.email"/>
                                <input type="text" placeholder="Subject" name="subject" v-model="message.subject" />
                                <textarea rows="4" placeholder="Message" v-model="message.messages"></textarea>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> -->

        <!-- <div class=" second">
            <div class="first grid1 container">
                <div class="sub-grid">
                    <h3>Get in touch</h3>
                        <i class="fa fa-scissors" aria-hidden="true"></i>
                    <div class="other">
                            <ul class="icons">
                                <li><i class="fa fa-map-marker" aria-hidden="true">   9 idak-edat,Uyo</i></li> 
                                <li><i class="fa fa-phone" aria-hidden="true">   (+234) 817 7746 867</i></li> 
                                <li><i class="fa fa-envelope-open" aria-hidden="true">  nyonganiebiet@gmail.com</i></li> 
                            </ul>
                    </div>
                    <div class="others">
                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                        <p>9:00 AM – 6:00 PM</p>
                        <p>Monday – Saturday</p>
                        <p>11:00 Noon – 4:00 PM</p>
                        <p>Sunday</p>
                    </div>
                    <div class="others-sub">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                </div>
               
            </div>-->
        </div> 
        <Footers/>
    
    
    
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
    background-color: whitesmoke;
    margin: 100px;
}
.contact-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: var(--bg-color);
}

.left-col {
  width: 45vw;
  height: 100%;
  background: linear-gradient(360deg, rgba(163, 72, 113, 0.81),rgba(163, 72, 113, 0.81)),url('/img/slide/slide3.jpg')  no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
}

.logo {
  width: 10rem;
  padding: 1.5rem;
}

.right-col {
  background: var(--bg-color);
  width: 50vw;
  height: 100vh;
  padding: 5rem 3.5rem;
}

h1, label, button, .description {
  font-family: 'Jost', sans-serif;
  font-weight: 400;
  letter-spacing: 0.1rem;
}

h1 {
  color:var(--h1-color);
  text-transform: uppercase;
  font-size: 2.5rem;
  letter-spacing: 0.5rem;
  font-weight: 300;
}

p {
  color: var(--secondary-color);
  font-size: 0.9rem;
  letter-spacing: 0.01rem;
  width: 40vw;
  margin: 0.25rem 0;
}

label, .description {
  color: var(--secondary-color);
  text-transform: uppercase;
  font-size: 0.625rem;
}

form {
  width: 25rem;
  position: relative;
  margin-top: 2rem;
  padding: 1rem 0;
}

input, textarea, label {
  width: 40vw;
  display: block;
}

p, placeholder, input, textarea {
  font-family: 'Helvetica Neue', sans-serif;
}

input::placeholder, textarea::placeholder {
  color: black;
}

input, textarea {
  color: var(--primary-color);
  font-weight: 500;
  background: var(--bg-color);
  border: 3px solid black;
  /* border-bottom: 1px solid  black; */
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  outline: none;
}

textarea {
  resize: none;
}

button {
  text-transform: uppercase;
  font-weight: 300;
  background: var(--button-color);
  color: var(--bg-color);
  width: 10rem;
  height: 2.25rem;
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}

input:hover, textarea:hover, button:hover {
  opacity: 0.5;
}

button:active {
  opacity: 0.8;
}

/* Toggle Switch */

.theme-switch-wrapper {
  display: flex;
  align-items: center;
  text-align: center;
  width: 160px;
  position: absolute;
  top: 0.5rem;
  right: 0;
}

.description {
    margin-left: 1.25rem;
  }

.theme-switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
}

.theme-switch input {
  display:none;
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
}

.slider:before {
  background-color: #fff;
  bottom: 0.25rem;
  content: "";
  width: 26px;
  height: 26px;
  left: 0.25rem;
  position: absolute;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--button-color);
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}




@media only screen and (max-width: 950px) {
  .logo {
    width: 8rem;
  }
  h1 {
    font-size: 1.75rem;
  }
  p {
    font-size: 0.7rem;
  }
  input, textarea, button {
    font-size: 0.65rem;
  }
  .description {
    font-size: 0.3rem;
    margin-left: 0.4rem;
  }
  button {
    width: 7rem;
  }
  .theme-switch-wrapper {
    width: 120px;
  }
  .theme-switch {
  height: 28px;
  width: 50px;
}

.theme-switch input {
  display:none;
}

.slider:before {
  background-color: #fff;
  bottom: 0.25rem;
  content: "";
  width: 20px;
  height: 20px;
  left: 0.25rem;
  position: absolute;
  transition: .4s;
}
  input:checked + .slider:before {
  transform: translateX(16px);
}

.slider.round {
  border-radius: 15px;
}

.slider.round:before {
  border-radius: 50%;
}

}













.container {
	background-color: white;
	border-radius: 5px;
	/* position: relative;
	overflow: hidden; */
	width: 768px;
	max-width: 100%;
	/* min-height: 480px; */
    /* min-width:370px; */
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 15px 10px 10px 10px rgba(158, 32, 32, 0.22);
}
label{
    text-align: left;
}
h2 {
  font-size:2rem;
  margin-bottom:1rem;
}
.form-container {
  display:flex;
  /* box-shadow: 1px 1px 1px 1px rgb(149, 151, 144)n; */
}

.left-container {
  flex:1;
  /* height:480px; */
    background: linear-gradient(360deg, rgba(163, 72, 113, 0.81),rgba(163, 72, 113, 0.81)),url('/img/slide/slide3.jpg')  no-repeat;
}
.right-container {
  display:flex;
  flex:1;
  /* height:460px; */
  /* background-color: white; */
  justify-content:center;
  align-items:center;
}

.left-container {
  display:flex;
  flex:1;
  /* height:480px; */
  justify-content:center;
  align-items:center;
    /* color:rgb(175, 171, 171); */
}

.left-container p {
  font-size:0.9rem;
}

.right-inner-container {
  width:70%;
  height:80%;
  text-align:center;
}

.left-inner-container {
  height:50%;
  width:80%;
  text-align:center;
  /* line-height:22px; */
}

input, textarea {
	/* background-color: #eee; */
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
  font-size:0.8rem;
}

input:focus, textarea:focus{
  outline:1px solid teal;
}

button {
	border-radius: 20px;
	border: 1px solid #a34871;
	background-color: #a34871;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
  cursor:pointer;
}

button:hover {
  opacity:0.7;
} 
@media only screen and (max-width: 600px) {
  .left-container{
    display: none;
  }
  .lg-view {
    display:none;  
  }
}

@media only screen and (min-width: 600px) {
  .sm-view {
    display:none;  
  }
}

form p {
  text-align:left;
}
/* .fa{
    margin: 2px 5px;
}
.grid1{
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
}
input[type="text"]{
    background: transparent; 
    padding: 7px;
    font-size: 1.1em;
    width: 100%;
    margin: 20px;
    outline: none;
    border: 1px solid #a34871;
    border-radius: 5px;

}
textarea{
    width: 100%;
}
 button[type="submit"] {
    font-size: 1.3em;
    border: none;
    padding: 8px 20px;
    margin: 10px;
    background-color: #a34871;
    border-radius: 5px;
}
.message{
    width:50%;
}
.second{
    background-color: rgba(160, 156, 156, 0.178)!important;
    padding: 120px;
} */
/* input[type="text"], textarea {
    border: $input-border-width solid tint($background, 50%);
    background: transparent;
    padding: 7px;
    font-size: 1.1em;
    color: tint($background, 80%);
    -webkit-transition: border 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;

    &:focus {
      border-color: tint($background, 80%);
    }
  } */

  /* textarea {
    height: 200px;
  } */

  /* button[type="submit"] {
    font-size: 1.3em;
    color: tint($background, 70%);
    border: none;
    padding: 8px 20px;
    background: shade($background, 20%);
    border-bottom: 3px solid shade($background, 40%);

    &:hover {
      cursor: pointer;
      background: shade($background, 15%);
    }
  }
} */

/* ::-webkit-input-placeholder {
  color: tint($background, 60%);
} */

/* ::-moz-input-placeholder {
  color: tint($background, 60%);
} */

/* :-moz-input-placeholder {
  color: tint($background, 60%);
} */

/* :-ms-input-placeholder {
  color: tint($background, 60%);
} */

</style>


