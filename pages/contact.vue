<template>
    <div class="main">
        <navbar/>
          <div class=" second">
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
                    <div class="sub-grid">
                        <div class="form">
                            <form  method="post" @submit.prevent="send">
                            <div class="row">
                                <div class="col-md-6 message">
                                <input type="text" name="name" placeholder="first name" v-model="message.first" class="full item" spellcheck="false">
                                </div>

                                <div class="col-md-6 message">
                                <input type="text" name="name" placeholder="last name" v-model="message.last" class="full item" spellcheck="false">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 message">
                                <input type="text" name="name" placeholder="Full name" v-model="message.name" class="full item" spellcheck="false">
                                </div>

                                <div class="col-md-6 message">
                                <input type="text" name="subject" placeholder="Subject" v-model="message.subject" class="full" spellcheck="false">
                                </div>
                            </div>
                            
                            <!-- <div class="row indent item">
                                <input type="text" name="subject" placeholder="Subject" v-model="message.subject" class="full" spellcheck="false">
                            </div> -->

                            <div class="row indent item">
                                <textarea name="content" class="full" placeholder="Message" v-model="message.messages"></textarea>
                            </div>

                            <div class="row">
                                <button type="submit">Send</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
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
                first: ' ',
                last: ' ',
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
}
.icons{
    list-style-type: none;
}
.fa{
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
}
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

  textarea {
    height: 200px;
  }

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


