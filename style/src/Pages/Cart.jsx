import { useEffect, useState } from "react";
import "./Cart.css";
import {Link} from 'react-router-dom';



function Cart() {
  let arr = JSON.parse(localStorage.getItem("cart")) || [];

  const [data, setData] = useState(arr);
  const [total_price, setTotalPrice] = useState(0);

  // localStorage.clear();
  //this will increase the quantity of product;
  const handleIncrease = (id) => {
    console.log("clicked");
    let newArr = data.map((elem) => {
      if (elem.id === id) {
        return { ...elem, quantity: elem.quantity + 1 };
      } else {
        return elem;
      }
    });
    console.log(newArr);
    localStorage.setItem("cart", JSON.stringify(newArr));
    setData(JSON.parse(localStorage.getItem("cart")));
  };

  //this will decrease the quantity of product;
  const handleDecrease = (id) => {
    console.log("clicked");
    let newArr = data.map((elem) => {
      if (elem.id === id) {
        return { ...elem, quantity: elem.quantity - 1 };
      } else {
        return elem;
      }
    });
    console.log(newArr);
    localStorage.setItem("cart", JSON.stringify(newArr));
    setData(JSON.parse(localStorage.getItem("cart")));
  };

  //this will total will be sited to the total price by setTotalPrice in useEffect;
  let total = data.reduce((prev, elem) => {
    return prev + elem.price * elem.quantity;
  }, 0);

  useEffect(() => {
    setTotalPrice(Math.round(total));
  }, [data]);

  // this will remove the item form cart
  const handleRemove = (id) => {
    let newArr = data.filter((elem) => {
      return elem.id !== id;
    });
    console.log(newArr);
    localStorage.setItem("cart", JSON.stringify(newArr));
    setData(JSON.parse(localStorage.getItem("cart")));
  };


  //store total price to local storage-----------------------
  const handlelocaltotal = () =>{
    localStorage.setItem("total",JSON.stringify(total_price));
  }


  //returning start from here;
  return (
    <div className="main">
      {/* left-div product and price and quantity */}
      <div className="left-div">
        {/* <h1>${total_price}</h1> */}
        {/* {console.log(arr)} */}
        {data.map((elem) => {
          return (
            <div
              className="cart-container"
              key={elem.id}
              // style={{
              //   display: "flex",
              //   justifyContent: "space-evenly"
              // }}
            >
              {/* detials div title,price,buttons */}
              <div className="detials">
                <p>{elem.title}</p>
                <p>${elem.price}</p>

                <div className="buttons">
                  {/* quantity button */}
                  <div className="qtn-btn">
                    <button
                      style={{ backgroundColor: "greenyellow" }}
                      disabled={elem.quantity <= 1}
                      onClick={() => handleDecrease(elem.id)}
                    >
                      -
                    </button>
                    <p>{elem.quantity}</p>
                    <button
                      style={{ backgroundColor: "greenyellow" }}
                      className="qtn-btn"
                      onClick={() => handleIncrease(elem.id)}
                    >
                      +
                    </button>
                  </div>

                  {/* select size */}
                  <div>
                    size:
                    <select>
                      <option value="medium">m</option>
                      <option value="large">l</option>
                      <option value="extra large">xl</option>
                    </select>
                  </div>

                  {/* remove button */}
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(elem.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* image div */}
              <div>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={elem.image}
                  alt={elem.title}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* second div address and some details */}
      <div className="right-div">
        <div>
          Get Rs.200 instant discount on your First Purchase above Rs.999.
          Coupon code -NEW200
        </div>

        <div>
          Whistles! Get extra 20% Cashback on prepaid orders above Rs.499.
          Coupon code - NEW20. Applicable for new customers only!
        </div>

        <div>
          <div className="shipping">
            <p>{`total MRP. (including of taxes)`}</p>
            <p>${total_price}</p>
          </div>

          <div className="shipping">
            <p>Shipping charges </p>
            <p style={{ color: "green" }}>Free</p>
          </div>

          <div className="checkout-shopping">
            <p>total: ${total_price}</p>
            <Link to='/checkout'>
                <button onClick={handlelocaltotal}  className="checkout-btn">Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
