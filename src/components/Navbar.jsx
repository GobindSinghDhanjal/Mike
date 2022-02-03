import React from "react";

function Navbar() {
  return (
    <div>
      <nav class="navbar">
        <h1 class="header-text">MIKE</h1>

        <div class="box">
          <input class="search-bar" type="text" placeholder="Search" />
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>

        <img className="header-img desktop ms-4" src="Web/Cart.svg"  alt=""/>
        <img className="header-img mobile ms-4" src="Web/AddToCart.svg" alt=""/>
        <p className="cart-items me-4 small">0</p>
        <img className="header-img desktop" src="Web/MenuHamburger.svg" alt=""/>
        <img className="header-img mobile" src="Web/MenuHamburgerWhite.svg" alt=""/>
      </nav>

    </div>
  );
}

export default Navbar;
