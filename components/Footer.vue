<template>
    <div class="footer">
        <div class="containercontainer">
            <div class="row">
                <div class="col-sm-3">
                    <div class="list-name"><img src="~/assets/GLOOK.png" alt=""></div>
                    <ul>
                            <li>
                            <div class="media_icon">
                            <i class="fa fa-facebook"></i>
                            <i class="fa fa-twitter"></i>
                            <i class="fa fa-instagram"></i>
                            </div> 
                        </li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <div class="list-name">ABOUT US</div>
                    <ul>
                        <li>About</li>
                        <li>Services</li>
                        <li>Testimonials</li>
                        <li>Gallery</li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <div class="list-name">SERVICES</div>
                    <ul>
                        <li>Hair Cut</li>
                        <li>Chemical Treatment</li>
                        <li>Keratin Treatment</li>
                        <li>All Services</li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <div class="list-name">Contact</div>
                    <ul>
                        <li>
                            <div class="media_icon">
                            <i class="fa fa-map">Uyo</i>
                            <i class="fa fa-phone">(+234) 817 7746 867</i>
                            <i class="fa fa-envelope">nyonganiebiet@gmail.com</i>
                            </div>
                            
                        </li>
                    </ul>
                </div>
            </div>    
        </div>
        <div>
          <div class="end">copyright &#169; 2021-glook</div>        
        </div>
     </div>
</template>

<style scoped>
.footer{
    
    background-color: black;
    padding-bottom: 2rem;
}
footer-text{
    margin-top: 5rem;
    color: white;
}
.end{
    background-color: #a34871;
}
.footer-text2{
    color: #f15f22;
    margin-top: 5rem;
    float: right;
}
hr{
    color: white;

}
/* .list-name{
    font-size: 1.5rem;
    margin-top: 1.5rem;
    color: white;
}
ul{
    margin : 0;
    padding: 0;
    margin-top: 2rem;
}
li{
    list-style-type: none;
    margin-top: 1rem;
    color: #949090;
    font-size: 1.1rem;
    cursor: pointer;
}
.media_icon{

    letter-spacing: .2rem;
    font-size: 1.1;
}  */
@media only screen and (max-width: 600px) {
    .footer{
    margin-top: 5rem;
    background-color: black;
}
.footer-text{
    margin-top: 5rem;
    color: white;
}
.footer-text2{
    color: #f15f22;
    margin-top: 1.5rem;
    float: none;
}
ul{
    margin : 0;
    padding: 0;
    margin-top: 1rem;
}
@media only screen and (min-width: 700px)  and (max-width: 1200px) {

}
}
</style>>