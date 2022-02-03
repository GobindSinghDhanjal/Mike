import React from "react";
import data from "../data";
import QuantityButton from "./QuantityButton";
import WishlistBtn from "./WishlistBtn";

function Body() {
    return(
        <div>
       <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 img-col">

            <p className="product-location mobile"> {data.gender} &nbsp; <i className="fas fa-caret-right"></i> &nbsp; {data.category} &nbsp; <i className="fas fa-caret-right"></i> &nbsp; <span style={{color:"lightgrey"}}>{data.title}</span>  </p>

            <h1 className="product-name mobile">{data.title}</h1>

              <img className="product-img" src="Web/ShoeLarge.png" alt="shoe"/>

              <div className="social-icons desktop row ">
                  <div className="col">
                      <img src="Web/Facebook.svg" alt="Social"/>
                  </div>
                  <div className="col">
                    <img src="Web/Twitter.svg" alt="Social"/>
                </div>
                <div className="col">
                    <img src="Web/Instagram.svg" alt="Social"/>
                </div>
              </div>
          </div>


          <div className="col-lg-6 col-md-12 product-details">
            <p className="product-location desktop"> {data.gender} &nbsp; <i className="fas fa-caret-right"></i> &nbsp; {data.category} &nbsp; <i className="fas fa-caret-right"></i> &nbsp; <span style={{color:"lightgrey"}}>{data.title}</span>  </p>
            <h1 className="product-name desktop">{data.title}</h1>
            <p className="product-rating"><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fad fa-star-half"></i>&nbsp; <a href=" "> 18 Votes </a></p>
            <div className="row">
              <div className="col-lg-4 col-6">
                <h2 className="product-price">{data.offerPrice}</h2>
              </div>
              <div className="col-lg-8 col-6">
                <p className="old-price">{data.oldPrice}</p>
              </div>
            </div>
            
            
            <p className="product-description">{data.desciption}</p>
            
            <div className="row">
                <div className="col-4 color-content">
                    <p className="product-color">COLOR</p>
                    <div className="col color-box">
                      <div className = "color-groups">
                        <div className = "color color-green active-color"></div>
                        <div className = "color color-white"></div>
                        <div className = "color color-red"></div>
                      </div>
                    </div>
                </div>
                <div className="col-4 product-size">
                    <p>SIZE</p>
                    <select>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                      </select>
                </div>
                <div className="col-4 product-quantity">
                    <p>QUANTITY</p>
                    <QuantityButton />
                </div>
            </div>

            <br/>

            <div className="row">
                <div className="col-lg-6 col-7 add-cart-btn">
                    <button className="btn btn-primary btn-lg" type="submit"> <img src="Web/AddToCart.svg" alt="Add to cart"/> &nbsp; Add To Cart</button>
                </div>
                <div className="col-lg-6 col-5 save-wishlist">
                    <WishlistBtn />
                </div>
            </div>
            <br/>
            <p className="small">Standard Delivery in 2-4 Days or Premium Delivery in 2-4 Hours</p>
          </div>

          

         




        </div>
        
      </div>
      </div>
    );
}

export default Body;