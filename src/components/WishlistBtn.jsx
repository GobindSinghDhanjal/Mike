import React, { useState } from "react";

function WishlistBtn() {

    const[heartSrc, changeHeartSrc] = useState("Web/Like.svg");


    function btnClick(){
        if(heartSrc==="Web/Like.svg"){
            changeHeartSrc("Web/Liked.svg");
        }else{
            changeHeartSrc("Web/Like.svg");
        }
        
    }

  return (
    <p onClick={btnClick}>
      <img src={heartSrc} alt="" /> &nbsp; Save to Wishlist
    </p>
  );
}

export default WishlistBtn;
