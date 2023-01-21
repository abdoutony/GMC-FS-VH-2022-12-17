import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css"


function Cart() {
const cart = useSelector((state) => state.CartReducer.cart);
const totalElement = useSelector((state) => state.CartReducer.totalElement);
const totalAmount = useSelector((state) => state.CartReducer.totalAmount);
const dispatch = useDispatch()

  return (
    <div >
        <h2>Cart : {totalElement}</h2>
        <h1>Total Amount : {totalAmount}</h1>

        <h5>Your items</h5>
        <p>Here is gonna be the map of the products</p>
        <div className="product-list">
            
            {cart && cart.length>0 && cart.map(el=> {
            return(
            <div className="card-wraper" key={el.id}>
                <h5>{el.title}</h5>
                <img src={el.image} alt="" />
                <p>Quantity : {el.quantity} <span><button className='btn' onClick={() => dispatch({ type: "INCREMENT",payload : el})}>+</button></span><span><button className='btn' onClick={() => dispatch({ type: "DECREMENT",payload : el})}>-</button></span></p>
            </div>
            )
            })}
        </div>

    </div>
  )
}

export default Cart