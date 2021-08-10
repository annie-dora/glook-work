<template>
    <div class="main">
        <navbar/>
        <div class="first">
            <div class="write container">
                <div class="left">
                    <h1>TESTIMONIALS</h1>
                </div>
            </div>
        </div>
        <div class="testimonials-clean">
            <div class="container">
                <div class="intro">
                    <h2 class="text-center">Testimonials </h2>
                    <p class="text-center">We love it when you leave us happy!
Here's what a few of our lovely clients have to say about their experience.</p>
                </div>
                <div class="row people">
                    <div class="col-md-6 col-lg-4 item">
                        <div class="box">
                            <p class="description">My experience at GLOOK is always welcoming. The products used are at a high level of expectation and am always looking forward to my next appointment.</p>
                        </div>
                        <div class="author">
                            <h5 class="name">Amaka Ibiam</h5>
                            <p class="title">CEO of Company Inc.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 item">
                        <div class="box">
                            <p class="description">I am so glad I found Emilee at GLOOK. She does an outstanding job on my hair. Each time is such a treat with the wonderful head massage. I always feel so pampered!</p>
                        </div>
                        <div class="author">
                            <h5 class="name">Ekemini Anthony</h5>
                            <p class="title">Founder of Style Co.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 item">
                        <div class="box">
                            <p class="description">I love my local beauty parlour! It's always a pleasure to go there, wonderful treatments, beautiful treatment rooms and the ladies in there are just fab! I'll be back in soon  </p>
                        </div>
                        <div class="author">
                            <h5 class="name">Favour Uju</h5>
                            <p class="title">Owner of Creative Ltd.</p>
                        </div>
                    </div>
                </div>
                <div class="row people">
                    <div class="col-md-6 col-lg-4 item">
                        <div class="box">
                            <p class="description">During the last ten years I have had the occasional treatment from someone else, for example when I have been on holiday, but I have never found where as good as GLOOK</p>
                        </div>
                        <div class="author">
                            <h5 class="name">Ubokobong Silas</h5>
                            <p class="title">CEO of Company Inc.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 item">
                        <div class="box">
                            <p class="description">A wonderfully friendly and professional salon, beautiful location and beautifully kept. Great products and product knowledge. Will definitely return.</p>
                        </div>
                        <div class="author">
                            <h5 class="name">Uwana Ekpo</h5>
                            <p class="title">Founder of Style Co.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 item">
                        <div class="box">
                            <p class="description">Fantastic, relaxing salon, made special by Michelle and her friendly, professional team and the beautiful setting. I highly recommend it.</p>
                        </div>
                        <div class="author">
                            <h5 class="name">Peace Imoh</h5>
                            <p class="title">Owner of Creative Ltd.</p>
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
.testimonials-clean {
  color:#313437;
  background-color:rgba(160, 156, 156, 0.178);
}

.testimonials-clean p {
  color:#7d8285;
}

.testimonials-clean h2 {
  font-weight:bold;
  margin-bottom:40px;
  padding-top:40px;
  color:inherit;
}

@media (max-width:767px) {
  .testimonials-clean h2 {
    margin-bottom:25px;
    padding-top:25px;
    font-size:24px;
  }
}

.testimonials-clean .intro {
  font-size:16px;
  max-width:500px;
  margin:0 auto;
}

.testimonials-clean .intro p {
  margin-bottom:0;
}

.testimonials-clean .people {
  padding:50px 0 20px;
}

.testimonials-clean .item {
  margin-bottom:32px;
}

@media (min-width:768px) {
  .testimonials-clean .item {
    height:220px;
  }
}

.testimonials-clean .item .box {
  padding:30px;
  background-color:#fff;
  position:relative;
}

.testimonials-clean .item .box:after {
  content:'';
  position:absolute;
  left:30px;
  bottom:-24px;
  width:0;
  height:0;
  border:15px solid transparent;
  border-width:12px 15px;
  border-top-color:#fff;
}

.testimonials-clean .item .author {
  margin-top:28px;
  padding-left:25px;
}

.testimonials-clean .item .name {
  font-weight:bold;
  margin-bottom:2px;
  color:inherit;
}

.testimonials-clean .item .title {
  font-size:13px;
  color:#9da9ae;
}

.testimonials-clean .item .description {
  font-size:15px;
  margin-bottom:0;
}

.testimonials-clean .item img {
  max-width:40px;
  float:left;
  margin-right:12px;
  margin-top:-5px;
}


</style>