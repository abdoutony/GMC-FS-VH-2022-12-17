import { useEffect,useState } from "react";
import "./ProductList.css"
import { Link } from "react-router-dom";
import React from "react";
import { useSelector, useDispatch } from "react-redux";


function ProductList() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    //Redux 
    const cart = useSelector((state) => state.CartReducer.cart);
    const totalElement = useSelector((state) => state.CartReducer.totalElement);
    const totalAmount = useSelector((state) => state.CartReducer.totalAmount);
    const dispatch = useDispatch();
    useEffect(()=>{
        //Api Call
        setLoading(true)
        fetch("https://fakestoreapi.com/products").then(response=>response.json()).then(data=>{
            setLoading(false)
            setData(data)
        })
        .catch(err=>{
            setLoading(false)
            setError(true)
        })
    },[])
    console.log(totalAmount);
  return (
    <>
    <button className="cart"><Link to="/cart">Cart  :  <span>{totalElement}</span></Link></button>
    <h1>Total Amount : {totalAmount}</h1>
    {loading && <h3 style={{marginTop: "10%"}}>  🕗  Loading ...  🕗</h3>}
    <div className="product-list">
      {data && data.map((el)=>{
        return(
          <div key={el.id} className="card-wraper">
            <h5>{el.title}</h5>
            <img src={el.image} alt="" />
            <p>{el.category}</p>
            <p>Rate : {el.rating.rate} 👍</p>
            <p>Price : {el.price} 💲</p>
            <button onClick={() => dispatch({ type: "ADDTOCART", payload: el })}>Add to cart</button>
            <button>Description</button>
        </div>
        )       
      })}
    </div>
    </>
  )
}

export default ProductList
