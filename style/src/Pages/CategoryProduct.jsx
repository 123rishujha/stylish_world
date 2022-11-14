import { useState, useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import "./CategoryProduct.css";
import { Link } from "react-router-dom";

function CategoryProduct() {
  const { handleCategoryData, categoryData } = useContext(AppContext);
  // const [product,setProduct] = useState([]);
  // console.log(categoryData);
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
        {categoryData.map((elem) => {
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

export default CategoryProduct;
