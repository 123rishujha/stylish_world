import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContextProvider";
import "./Category.css";
// import { Box,  Image, Text, Grid,LinkBox, LinkOverlay } from "@chakra-ui/react";

import { Link } from "react-router-dom";

//handleCategoryData,categoryData

function Category() {
  const { categoryData, handleCategoryData } = useContext(AppContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setData(res);
      console.log(res.data);
    });
  }, []);

  console.log(categoryData);

  return (
    <>
      <div>

        <h1 className="heading">SHOP BY CATEGORY</h1>

        <div
          className="main"
        >
          {/* jewelery div */}
          <div
            className="container"
            onClick={() => handleCategoryData("jewelery")}
          >
            <Link to="/CategoryProduct" className="link">
              <img
                className="image"
                src="https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?  auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="jewelery"
              />
              {/* more */}
            </Link>

            <h1
              className="text"
             
            >
              jewelery
            </h1>
          </div>

          {/* electronics div */}
          <div
            className="container"
            onClick={() => handleCategoryData("electronics")}
          >
            <Link to="/CategoryProduct" className="link">
              <img
                className="image"
                src="https://images.pexels.com/photos/2015852/pexels-photo-2015852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="jewelery"
              />
              {/* more */}
            </Link>

            <h1 className="text">electronics</h1>
          </div>

          {/* men's clothing div */}
          <div
            className="container"
            onClick={() => handleCategoryData("men's clothing")}
          >
            <Link to="/CategoryProduct" className="link">
              <img
                className="image"
                src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="men's clothing"
              />
              {/* more */}
            </Link>

            <h1 className="text">men's clothing</h1>
          </div>

          {/* women's clothing div */}
          <div
            className="container"
            onClick={() => handleCategoryData("women's clothing")}
          >
            <Link to="/CategoryProduct" className="link">
              <img
                className="image"
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="women's clothing"
              />
              {/* more */}
            </Link>

            <h1 className="text">women's clothing</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
