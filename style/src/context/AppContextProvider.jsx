import { createContext, useState } from "react";
import axios from "axios";
// import { Navigate } from "react-router-dom";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [categoryData, setCategoryData] = useState([]);

  const handleCategoryData = (type) => {
    // console.log(type);
    axios
      .get(`https://fakestoreapi.com/products/category/${type}`)
      .then((res) => {
        setCategoryData(res.data);
        // console.log(res.data);
      });

    // <Navigate to='/home' />
  };

  // console.log(categoryData);

  return (
    <AppContext.Provider value={{ handleCategoryData, categoryData }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
