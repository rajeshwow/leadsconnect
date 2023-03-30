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
  const [clickedQty, setclickedQty] = useState(1);
  const [clickedInputId, setclickedInputId] = useState(null);

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

  const onChangeQty = (event, value) => {
    console.log("vvvvvvvvv", event.target.value, value);
    setclickedQty(event.target.value);
    setclickedInputId(value);
  };

  const addToCart = (values, id) => {
    console.log("xxx", values, id);
    if (!cartItems?.some((el) => el.id === values.id)) {
      const newVals = { ...values, quantity: clickedQty };
      setcartItems([...cartItems, newVals]);
    } else {

        const newArray = cartItems.map((item, i) => {
          if (item.id === values.id) {
            return { ...item, quantity: parseInt(item.quantity) + parseInt(clickedQty) };
          } else {
            return item;
          }
        });

      setcartItems(newArray);
    }

    // setcartItems(newArray);
  };

  const plusItem = (value,id)=>{
    const newArray = cartItems.map((item, i) => {
      if (item.id === id) {
        return { ...item, quantity: parseInt(item.quantity) + 1 };
      } else {
        return item;
      }
    });
    setcartItems(newArray)
  }

  const minusItem = (value,id)=>{
    const newArray = cartItems.map((item, i) => {
      if (item.id === id) {
        return { ...item, quantity: parseInt(item.quantity) - 1 };
      } else {
        return item;
      }
    });
    setcartItems(newArray)
  }

  console.log("xxxxxxxxxx", cartItems);

  return (
    <>
      <Navbars cartItems={cartItems} onClickCart={onClickCartOpen} />
      <ProductList
        onChangeQty={onChangeQty}
        addToCart={addToCart}
        items={productData}
      />
      <Drawer
        cartItems={cartItems}
        onclickCartClose={onclickCartClose}
        showDrawer={showDrawers}
        plusItem={plusItem}
        minusItem={minusItem}
      />
    </>
  );
}

export default App;
