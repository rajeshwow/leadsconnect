import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbars from "./Components/navbar";
import ProductList from "./Components/productList";
import Drawer from "./Components/drawer";

function App() {
  const [productData, setproductData] = useState([]);
  const [showDrawers, setshowDrawers] = useState(false)
  const [cartItems, setcartItems] = useState([])

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setproductData(response.data);
    });
  }, []);

  const onClickCartOpen = ()=>{
    setshowDrawers(true)
  }
  const onclickCartClose = ()=>{
    setshowDrawers(false)
  }

  const addToCart = (values)=>{
    // alert(values)
    setcartItems([...cartItems,values])
  }
  console.log("vvvvvvvvv",cartItems)

  return (
    <>
      <Navbars onClickCart={onClickCartOpen} />
      <ProductList addToCart={addToCart}  items={productData}/>
      <Drawer cartItems={cartItems} onclickCartClose={onclickCartClose} showDrawer={showDrawers} />
    </>
  );
}

export default App;
