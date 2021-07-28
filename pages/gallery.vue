<template>
    <div class="main">
        <navbar/>
        <div class="first">
            <div class="write">
                <h1>Gallery</h1>
            </div>
        </div>
        <div class="second ">
            <input type="radio" name="filter" id="all" checked><label for="all">All</label>
  <input type="radio" name="filter" id="kid"><label for="kid">Kid</label>
  <input type="radio" name="filter" id="bridal"><label for="bridal">Bridal</label>
  <input type="radio" name="filter" id="weave"><label for="weave">Weave</label>
  <input type="radio" name="filter" id="tech"><label for="tech">Tech</label>
  <div class="gallery">
    <figure class="card tech">
      <img class="card__image" loading="lazy" src="https://picsum.photos/id/0/300" alt="">
      <figcaption class="card__caption">Laptop</figcaption>
    </figure>
    <figure class="card kid">
      <img class="card__image" loading="lazy" src="/img/gallery/kid4.jpg" alt="">
      <figcaption class="card__caption">Sea forest</figcaption>
    </figure>
    <figure class="card bridal">
      <img class="card__image" loading="lazy" src="/img/gallery/bridal4.jpg" alt="">
      <figcaption class="card__caption">Deer</figcaption>
    </figure>
    <figure class="card weave">
      <img class="card__image" loading="lazy" src="/img/gallery/weave2.jpg" alt="">
      <figcaption class="card__caption">Horizon sight</figcaption>
    </figure>
    <figure class="card bridal">
      <img class="card__image" loading="lazy" src="/img/gallery/bridal2.jpg" alt="">
      <figcaption class="card__caption">Sea</figcaption>
    </figure>
    <figure class="card weave">
      <img class="card__image" loading="lazy" src="/img/gallery/weave1.jpg" alt="">
      <figcaption class="card__caption">Man & Dog</figcaption>
    </figure>
    <figure class="card kid">
      <img class="card__image" loading="lazy" src="/img/gallery/kid2.jpg" alt="">
      <figcaption class="card__caption">Bear</figcaption>
    </figure>
    <figure class="card bridal">
      <img class="card__image" loading="lazy" src="/img/gallery/bridal3.jpg" alt="">
      <figcaption class="card__caption">Girl</figcaption>
    </figure>
    <figure class="card tech">
      <img class="card__image" loading="lazy" src="https://picsum.photos/id/119/300" alt="">
      <figcaption class="card__caption">MacBook</figcaption>
    </figure>
    <figure class="card weave">
      <img class="card__image" loading="lazy" src="/img/gallery/weave3.jpg" alt="">
      <figcaption class="card__caption">Leopard</figcaption>
    </figure>
    <figure class="card kid">
      <img class="card__image" loading="lazy" src="/img/gallery/kid3.jpg" alt="">
      <figcaption class="card__caption">Flower</figcaption>
    </figure>
    </div>
<!-- <div class="donate">
	<p>Help me with a <a href="https://www.paypal.com/donate/?hosted_button_id=NZ9Z8YDHSMMEC" target="_blank" rel="noopener">donation in Paypal</a></p>
</div> -->
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
[type="radio"]{
  display: none;
}
label{
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 0.25s;
}
[type="radio"]:checked + label{
	background: gold;
}
[type="radio"]:nth-of-type(2):checked ~ .gallery .card:not(.kid),
[type="radio"]:nth-of-type(3):checked ~ .gallery .card:not(.bridal),
[type="radio"]:nth-of-type(4):checked ~ .gallery .card:not(.weave),
[type="radio"]:nth-of-type(5):checked ~ .gallery .card:not(.tech)
{
  display: none;
}
.gallery{
  display: grid;
	justify-content: center;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-auto-rows: 1fr;
  grid-gap: 1rem;
  padding: 0.5rem;
  margin-top: 1rem;
}
.card{
  margin: 0;
  background: darkslateblue;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 0 0 10px silver;
  transition: box-shadow 0.35s;
}
.card:hover{
  box-shadow: 0 0 25px #0009;
}
.card__image{
  width: 100%;
  object-fit: cover;
}
.card__caption{
	font-weight: bold;
  font-variant: small-caps;
  padding: 0.5rem;
  text-align: center;
  color: gold;
}

/* Donate layer */
.donate{
	position: fixed;
	bottom: 0.25rem;
	right: 0.25rem; 
	border-radius: 0.5rem;
	background-color: whitesmoke;
	padding: 0 1rem;
	font-weight: bold;
	color: dimgray;
}
.donate a{
	text-decoration: none;
	color: orangered;
	border-bottom: 2px solid transparent;
	transition: 0.35s;
}
.donate a:hover{
	border-bottom-color: orangered;
}
</style>
