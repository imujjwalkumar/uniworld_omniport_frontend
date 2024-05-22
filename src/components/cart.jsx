import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CheckoutComponent({ cart }) {
  const navigate = useNavigate();
  const [isCheckoutCompleted, setIsCheckoutCompleted] = useState(false);

    if(!Object.keys(cart).length)
      return
    const handleCheckout = () => {
      // Call your API for checkout here
      let apiUrl = 'http://localhost:3001/checkout'

      fetch(apiUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              // Add any additional headers if needed
          },
          body: JSON.stringify({
              item_list: cart,
              user: {
                  "id": 1
              },
          }),
      })

          .then(data => {
              // Handle the API response data
              setIsCheckoutCompleted(true);
              // Redirect to the success page or perform any other actions
          })
          .catch(error => {
              // Handle any errors that occur during the fetch
              console.error('Error fetching data:', error);
              // Redirect to the error page or display an error message
          });
          navigate('/checkout');
          
          console.log("Checkout clicked. Calling API...");
        };
        const totalAmount = Object.values(cart).reduce((acc, item) => acc + item.price, 0);


  return (
    
    <div>
      <h1>Cart</h1>
      <ul>
        {Object.keys(cart).map((productId) => (
          <li key={productId}>
            {cart[productId].name}: ${cart[productId].price}
          </li>
        ))}
      </ul>
      <h2>Total Amount: ${totalAmount}</h2>
      <p>Items added: {Object.keys(cart).length}</p>
      <button className="btn btn-primary" onClick={handleCheckout}>Checkout</button>
      {isCheckoutCompleted && (
        <div>
          <h3>Your order is completed!</h3>
          {/* Add more HTML content for order completion */}
        </div>
      )}

    </div>
  );
}

export default CheckoutComponent;
