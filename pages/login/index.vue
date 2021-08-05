<template>
    <div class=" ">
        <navbar />
        <div class="login-pg">
            <img class='background-img' src='~/assets/first.jpg'/>
            <div class='card-wrapper'>
                    <h1 class='call-to-action'>Login</h1>
                    <form @submit.prevent="login">         
                        <div class='field'>
                        <label for='username'>Username</label><br>
                        <i class='bx bx-user'></i>
                        <input type='text' 
                            id='username' name='username' placeholder='type your username' spellcheck='false' v-model="auth.email"/>
                        </div>
                        
                        <div class='field'>
                        <label for='pwd' name='pwd'>Password</label><br>
                        <i class='bx bx-lock-alt' ></i>
                        <input type='password' 
                            id='pwd'  name='pwd'  placeholder='type your password' v-model="auth.password"/>
                        </div>
                        <a href=''><span>Forgot password?</span></a>
                        <input type='submit' id = 'login-button' value='LOGIN'/>
                        
                    </form>
        
                <div class='sign-up'>
                  <p>OR</p>
                    <nuxt-link to="/signIn"> SIGN UP</nuxt-link>
                </div>
            </div>
        </div>
        <!-- <div class="login-page">
            <section class="loginpage">
                <form action="#" class="log-in">
                    <h1 class="title">Login</h1>

                    <label for="log-username"></label>
                    <input type="text" placeholder="Username" minlength="4" maxlength="20" id="log-username" name="log-username">
                    <label for="log-password"></label>
                    <input type="password" placeholder="Password" minlength="6" maxlength="50" id="log-password" name="log-password">

                    <input type="submit" id="submit" action="#">
                </form>
            </section>
        </div> -->
        <!-- <div class="container">
            <div class="card shadow rounded"  data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">
            <div class="card-body">
                <form @submit.prevent="login">
                    <h5 class="modal-title" id="exampleModalLabel">LOG IN</h5>
                    <hr>
                    <div class="form-group">
                        
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="auth.email">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="auth.password">
                            <small id="emailHelp" class="form-text text-muted click_pass">Forgot Password?Cick here</small>
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">LOG IN</button>
        </form>
            </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import firebase from 'firebase'
import navbar from "@/components/navbar.vue"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
export default {
    components:{
        firebase, navbar, ElementUI
    },
    data(){
        return{
          auth:{
            
            email:'',
            password:''
          } 
            
        }
    },
    created(){
         
      
        
    },
    methods: {
        
        login(){
            firebase.auth().signInWithEmailAndPassword(this.auth.email, this.auth.password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                     this.$message({
                        message: 'Login successful!',
                        type: 'success'
                        });
                    console.log(user)
                    this.$router.push('/appointment');
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode)
                    console.log(errorMessage)
                });
        }
        
        

    }
    
}

</script>

<style scoped>
.login.pg{
    padding: 120px 0;
}
.background-img{
  width: 100vw;
  height: 100vh; 
  position:fixed;
  background-size: cover;
  background-repeat: no-repeat;
}

.card-wrapper{
  min-height: 600px;
  min-width: 350px;
  border-radius: 10px;
  position:absolute;
  left: 50%;
  bottom: 30;
  margin-top: 30px;
  transform: translateX(-50%);
  background:rgba(255,255,255,0.3);
  backdrop-filter: blur(13px);
  box-shadow: 0 0 20px -2px black;
  display:flex;
  justify-content:center;
  flex-direction: column;
  padding: 20px 0;
  color: rgba(18,18,18,0.85);
}

.call-to-action{
  text-align:center;
  padding: 10px 0;
}
.card-wrapper form{
  display:flex;
  flex-direction:column;
}
.card-wrapper form .field{
  width: 100%;
  position: relative;
  font-size: 18px;
  padding: 7px 30px;
  white-space: no-wrap;
}
.card-wrapper form .field::after{
  content : "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100%;
  height: 1px;
  width: 85%;
  padding-top: 5px;
  border-top:1px solid rgba(18,18,18,0.6);
}
.card-wrapper form a{
  margin-right: 10%;
  margin-top: 10px;
  text-align: right;
  font-size: 16px;
  text-decoration:none;
  color:rgba(18,18,18,0.7);
  
}

.card-wrapper form a span{
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}
.card-wrapper form a:hover span{
  color: #121212;
  border-bottom-color: #121212;
}
.card-wrapper form .field i{
  font-size: 22px;
  height: 30px;
  width: 30px;
  vertical-align: middle;
  text-align:left;
}
.card-wrapper form .field label{
  width: 100%;
  font-size: 17px;
  margin-bottom: 20px;
  line-height: 30px;
}

.card-wrapper form .field input{
  border: 0;
  background: transparent;
  padding:0 5px;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  height: 30px;
  width: calc(100% - 50px);
  vertical-align: middle;
}
.card-wrapper form .field input:focus{
  outline:none;
}
.card-wrapper form .field input::placeholder{
  color: rgba(18,18,18,0.7);
}

#login-button{
  margin: 20px 0;
  width: 80%;
  height: 40px;
  border-radius: 20px;
  border:none;
  background: rgba(255,255,255,0.2);
  position:relative;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  transition: all 0.3s ease;
}
#login-button:hover{
  background: rgba(18,18,18,0.3);
  color: rgba(255,255,255,0.8);
}

.alternate-logins{
  margin-top: 30px;
}
.alternate-logins, .sign-up{
  padding: 20px 0;
  text-align:center;
}

.social-links{
  display:flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  padding: 15px 0;
  justify-content:center;
}
.social-links i{
  width: 50px;
  margin: 0 5px;
  height: 50px;
  border-radius: 50%;
  line-height: 50px;
  background: rgba(255,255,255,0.3);
  transition: all 0.3s ease;
  cursor: pointer;
}

.social-links i:hover{
  background: rgba(18,18,18,0.3);
  color: rgba(255,255,255,0.8);
  
}

.sign-up a{
  text-decoration: none;
  color: inherit;
  position: relative;
  top: 10px;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

.sign-up a:hover{
  color: #121212;
  border-bottom-color: #121212;
}





.log-in {
    background: linear-gradient(360deg, rgba(163, 72, 113, 0.81),rgba(163, 72, 113, 0.81)),url('/img/backgrounds/background3.jpg') fixed, no-repeat;
    width: 400px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: aliceblue;
    margin-left: 40%;
    margin-top: 10%;
}

.title {
    padding-top: 30px;
}

#log-username {
    display: block;
    text-align: center;
    border: 2px solid #a34871;
    border-radius: 40px;
    padding: 11px 30px;
    width: 350px;
    background: none;
    margin: 20px auto;
    transition: 0.25s;
    color: aliceblue;
}

#log-password {
    display: block;
    text-align: center;
    border: 2px solid #a34871;
    border-radius: 40px;
    padding: 11px 30px;
    width: 360px;
    background: none;
    margin: 20px auto;
    transition: 0.25s;
    color: aliceblue;
}

#submit {
    border: 2px solid #a34871;
    background: #a34871;
    color: aliceblue;
    padding: 11px 20px;
    border-radius: 40px;
    margin-bottom: 30px;
    width: 100px;
    transition: 0.25s;
}

#log-username:hover, #log-password:hover {
    width: 400px;
}

#submit:hover {
    cursor: pointer;
    width: 250px;
}





.card{
    width: 30%;
    margin-left: 25rem;
    margin-bottom: 7rem;
}
/* .margin_top{
    margin-top: 13rem !important;
} */
.click_pass{
    cursor: pointer;
}
.btn-primary {
    color: white;
    border-color: #a34871 !important;
    background-color:  #a34871 !important;
    text-transform: capitalize;
}
@media only screen and (max-width: 600px) {
.card{
    width: 100%;
    margin-left: 0;
}
.margin_top{
    margin-top: 13rem !important;
}
.click_pass{
    cursor: pointer;
} 
}
@media only screen and (min-width: 700px)  and (max-width: 1200px) {
.card{
    width: 50%;
    margin-left: 10rem !important;
}
.margin_top{
    margin-top: 13rem !important;
}
.click_pass{
    cursor: pointer;
} 
} 


</style>