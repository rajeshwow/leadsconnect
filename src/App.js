import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbars from "./Components/navbar";
import ProductList from "./Components/productList";
import Drawer from "./Components/drawer";

function App() {
  const [productData, setproductData] = useState([]);
  const [showDrawers, setshowDrawers] = useState(false);
  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setproductData(response.data);
    });
  }, []);

  const onClickCartOpen = () => {
    setshowDrawers(true);
  };
  const onclickCartClose = () => {
    setshowDrawers(false);
  };

  const addToCart = (values) => {
    console.log(
      "cartItems?.some((el) => el.id === values.id)",
      cartItems?.some((el) => el.id === values.id)
    );
    if (!cartItems?.some((el) => el.id === values.id)) {
      const newVals = { ...values, quantity: 1 };
      setcartItems([...cartItems, newVals]);
    } else {
      const newArr = [...cartItems]?.filter((val) => val.id !== values.id);

      const newVals = [...cartItems]
        ?.filter((val) => val.id === values.id)
        ?.map((val) => {
          return { ...val, quantity: val.quantity + 1 };
        });

        const newArray = cartItems.map((item, i) => {
          if (item.id === values.id) {
            return { ...item, quantity: item.quantity+1 };
          } else {
            return item;
          }
        });

      setcartItems(newArray);
    }
  };
  console.log("xxxxxxxxxx", cartItems);

  return (
    <>
      <Navbars onClickCart={onClickCartOpen} />
      <ProductList addToCart={addToCart} items={productData} />
      <Drawer
        cartItems={cartItems}
        onclickCartClose={onclickCartClose}
        showDrawer={showDrawers}
      />
    </>
  );
}

export default App;
