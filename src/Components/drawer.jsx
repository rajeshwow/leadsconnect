import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";

const Drawer = (props) => {
  const [show, setshow] = useState(false);
  const handleClose = () => {
    setshow(false);
    props.onclickCartClose();
  };
  useEffect(() => {
    props.showDrawer && setshow(true);
  }, [props]);
console.log("dd")

  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {props.cartItems.map((val) => {
          return (
            <>
              <Row>
                <Col lg={4}>
                  <img src={val.image} width={"100%"} />
                </Col>
                <Col lg={8}>
                  <span>{val.title} </span>
                  <div className="input-group input-group-sm mb-3 text-center" style={{width:'40%'}}>
                    <button
                      className="btn btn-outline-secondary" 
                      type="button"
                      id="inputGroupFileAddon03"
                      onClick={(e)=> props.minusItem(e,val.id)}

                    >
                      -
                    </button>
                    <input type="number" className="form-control text-center" min={1} value={val.quantity}  />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="inputGroupFileAddon03"
                      onClick={(e)=> props.plusItem(e,val.id)}
                    >
                      +
                    </button>
                  </div>
                  <bdi>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-currency-rupee"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                    </svg>{" "}
                    {val?.price * val?.quantity}
                  </bdi>
                  
                  <p>(Inclusive of all taxes)</p>
                </Col>
              </Row>
              <hr />
            </>
          );
        })}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Drawer;
