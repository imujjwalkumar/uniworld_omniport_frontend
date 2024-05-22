import React from 'react';

function CheckoutComponent({ totalAmount, cart, onCheckout }) {
    console.log('cafrrrrrt',cart);
    console.log('checkoutttttt',onCheckout);


  return (
    <div>
      <h2>Total Amount: ${totalAmount}</h2>
      <p>Items added: {cart.length}</p>
      <button className="btn btn-primary" onClick={onCheckout}>Checkout</button>
    </div>
  );
}

export default CheckoutComponent;
