import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const ProductList = (props) => {
  const [productList, setproductList] = useState([]);

  useEffect(() => {
    setproductList(props.items);
  }, [props]);

  return (
    <>
      <div className="container-fluid">
        <div className="flexwrapper">
          {productList.map((val, index) => {
            return (
              index <= 5 &&
              <>
                <div className="flexitems">
                  <div class="card">
                    <div className="imgDiv">
                      <img
                        src={val.image}
                        class="card-img-top cardImage"
                        alt="..."
                      />
                    </div>
                    <div class="card-body productdiv">
                      <h2 class="card-title">{val.title}</h2>
                      <div class="card-product-rating">
                        {val.rating.rate}
                        <i class="fa fa-star rating-color"></i>
                      </div>
                      <div class="card-text">
                        <p class="price">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-currency-rupee"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                          </svg>
                          {val.price} <span>MRP</span>
                        </p>
                        <p class="inclusive">(Inclusive of all taxes)</p>
                      </div>

                      <Row style={{ alignItems: "baseline" }}>
                        <Col>
                          <InputGroup className="mb-3">
                            <InputGroup.Text
                              style={{ fontSize: "10px", padding: "1px 5px" }}
                            >
                              Qty
                            </InputGroup.Text>
                            <Form.Control
                              defaultValue={1}
                              type="number"
                              style={{ padding: "0px" }}
                              onChange={(e) => {
                                props.onChangeQty(e, val.id);
                              }}
                            />
                          </InputGroup>
                        </Col>
                        <Col className="text-center">
                          <button
                            onClick={() => {
                              props.addToCart(val, val.id);
                            }}
                            class="btn btn-primary addtocart btn-sm"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-cart"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            <span>Add</span>
                          </button>
                        </Col>
                      </Row>
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
