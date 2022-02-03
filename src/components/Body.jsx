import React from "react";
import QuantityButton from "./QuantityButton";

function Body() {
    return(
        <div>
       <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 img-col">

            <p class="product-location mobile"> Man &nbsp; <i class="fas fa-caret-right"></i> &nbsp; Shoes &nbsp; <i class="fas fa-caret-right"></i> &nbsp; <span style={{color:"lightgrey"}}>Gray Running Sneakers</span>  </p>

            <h1 class="product-name mobile">Gray Running Sneakers</h1>

              <img class="product-img" src="Web/ShoeLarge.png" alt="shoe"/>

              <div class="social-icons desktop row ">
                  <div class="col">
                      <img src="Web/Facebook.svg" alt="Social"/>
                  </div>
                  <div class="col">
                    <img src="Web/Twitter.svg" alt="Social"/>
                </div>
                <div class="col">
                    <img src="Web/Instagram.svg" alt="Social"/>
                </div>
              </div>
          </div>


          <div class="col-lg-6 col-md-12 product-details">
            <p class="product-location desktop"> Man &nbsp; <i class="fas fa-caret-right"></i> &nbsp; Shoes &nbsp; <i class="fas fa-caret-right"></i> &nbsp; <span style={{color:"lightgrey"}}>Gray Running Sneakers</span>  </p>
            <h1 class="product-name desktop">Grasdy Running Sneakers</h1>
            <p class="product-rating"><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fad fa-star-half"></i>&nbsp; <a href=" "> 18 Votes </a></p>
            <div class="row">
              <div class="col-lg-4 col-6">
                <h2 class="product-price">₹16,959.99</h2>
              </div>
              <div class="col-lg-8 col-6">
                <p class="old-price">₹20,069.99</p>
              </div>
            </div>
            
            
            <p class="product-description">Neoprene and membrane boots. Rubber insert with lacing over foot and back on heel. Lining and insole of the membrane</p>
            
            <div class="row">
                <div class="col-4 color-content">
                    <p class="product-color">COLOR</p>
                    <div class="col color-box">
                      <div class = "color-groups">
                        <div class = "color color-green active-color"></div>
                        <div class = "color color-white"></div>
                        <div class = "color color-red"></div>
                      </div>
                    </div>
                </div>
                <div class="col-4 product-size">
                    <p>SIZE</p>
                    <select>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                      </select>
                </div>
                <div class="col-4 product-quantity">
                    <p>QUANTITY</p>
                    <QuantityButton />
                </div>
            </div>

            <br/>

            <div class="row">
                <div class="col-lg-6 col-7 add-cart-btn">
                    <button class="btn btn-primary btn-lg" type="submit"> <img src="Web/AddToCart.svg" alt="Add to cart"/> &nbsp; Add To Cart</button>
                </div>
                <div class="col-lg-6 col-5 save-wishlist">
                    <p> <img src="Web/Like.svg" alt=""/> &nbsp; Save to Wishlist</p>
                </div>
            </div>
            <br/>
            <p class="small">Standard Delivery in 2-4 Days or Premium Delivery in 2-4 Hours</p>
          </div>

          

         




        </div>
        
      </div>
      </div>
    );
}

export default Body;