import React, { useState } from "react";

function QuantityButton() {

    const [quantity, changeQuantity] = useState(1);

    function increase() {
        changeQuantity(quantity+1);
    }

    function decrease() {
        if (quantity>0){
            changeQuantity(quantity-1);
        }
        
    }

    return (
        <div class="quantity-selection">
            <button onClick={decrease}>-</button> &nbsp; {quantity} &nbsp; <button onClick={increase}>+</button>
        </div>
    )
}

export default QuantityButton;