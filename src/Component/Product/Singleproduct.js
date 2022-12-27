import React, { useContext } from "react";
import {
  ProductContext,
  DispatchContext,
} from "../../Hook/Context/Productcontext";

export default function Singleproduct(props) {
  const { cart } = useContext(ProductContext);
  // console.log(cart)
  const dispatch = useContext(DispatchContext);
  return (
    <div>
      <div className="card mb-2" style={{ width: "18rem" }}>
        <img src={props.image} className="card-img-top" alt={props.item} />
        <div className="card-body">
          <h5 className="card-title">{props.item}</h5>
          <p className="card-text">Rs: {props.price} /-</p>
          {props.delivery ? (
            <div>
              <p className="card-text">Fast Delivery</p>
              <button className="btn btn-primary">Add Cart</button>
            </div>
          ) : (
            <div>
              <p className="card-text text-muted">Fast Delivery not possible</p>
              <button className="btn btn-primary" disabled>
                Add Cart
              </button>
            </div>
          )}
          {cart.some((p) => p.id === props.id) ? (
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch({ type: "REMOVE_CART", payload: props.id });
              }}
            >
              Remove Cart
            </button>
          ) : (
            <button className="btn btn-primary"  onClick={() => {
              dispatch({ type: "ADD_TO_CART", payload: props.item });
            }}>Add Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}
