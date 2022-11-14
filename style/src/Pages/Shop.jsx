import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './CategoryProduct.css';



function Shop(){

  const [data,setData] = useState([]);


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((res)=>{
      // console.log(res);
      setData(res);
    })
    .catch((error)=>console.log(error))
  },[])


  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "30%" }}>
        <img
          style={{
            width: "30%",
            height: "100vh",
            position: "fixed",
            left: "0",
            top: "150px"
          }}
          src="https://cdn4.vectorstock.com/i/1000x1000/04/73/online-shopping-and-e-commerce-banner-design-vector-20760473.jpg"
          alt="banner"
        />
      </div>

      <div className="product_container">
        {data.map((elem) => {
          return (
            <div key={elem.id}>
              <div className="card">
                <Link to={`/details/${elem.id}`}>
                  <img src={elem.image} alt={elem.id} />
                  <p className="product_title">{elem.title}</p>
                  <p className="price">${elem.price}</p>
                  <p className="category">category: {elem.category}</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );


 

}

export default Shop;