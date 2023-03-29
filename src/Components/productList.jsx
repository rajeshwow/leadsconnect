import axios from "axios";
import React, { useState, useEffect } from "react";

const ProductList = (props) => {
  const [productList, setproductList] = useState([])

  useEffect(() => {
    setproductList(props.items)
  }, [props])
  

  return (
    <>
      <div className="container">
        <div className="row align-items-start">
          {productList.map((val, index) => {
            return (
              <>
                <div className="col">
                  <div class="card">
                  <div className="imgDiv">
                  <img src={val.image} class="card-img-top cardImage" alt="..." />
                  </div>
                    <div class="card-body">
                      <h2 class="card-title">{val.title}</h2>
                      <div class="card-product-rating">
                        {val.rating.rate}
                        <i class="fa fa-star rating-color"></i>
                      </div>
                      <div class="card-text">
                        <p>{val.price} MRP</p>
                        <p>(Inclusive of all taxes)</p>
                      </div>
                     
                      <button onClick={()=>{props.addToCart(val)}} class="btn btn-primary"> 
                      Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
