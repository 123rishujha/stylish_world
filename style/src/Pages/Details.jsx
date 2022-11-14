import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Details.css";

function Details() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //here is local storage array;
  let arr = JSON.parse(localStorage.getItem("cart")) || [];



  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setLoading(false);
        setData(res.data);
        console.log(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  if (loading) {
    return (
      <img
        style={{ margin: "auto" }}
        src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"
        alt="loading"
      />
    );
  }


  //here is add to local storage---------
  const handleAddToLoacal = () => {
    arr.push({...data,quantity:1,description:'',rating:''});
    localStorage.setItem("cart", JSON.stringify(arr));
    // console.log(arr);
    alert('Item added to cart')
  };


  return (
    <div>
      {/* <h1>{id}</h1> */}
      <div className="details_container">
        <div className="image-div">
          <img className="image" src={data.image} alt={data.id} />
        </div>
        <div className="description-div">
          <h3 className="title">{data.title}</h3>
          <h1 className="price">
            price: ${" "}
            <span style={{ color: "green", fontWeight: "bold" }}>
              {data.price}
            </span>
          </h1>
          <p className="description">Description: {data.description}</p>

          <div className="button">
            <button onClick={handleAddToLoacal}>Add to cart</button>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
