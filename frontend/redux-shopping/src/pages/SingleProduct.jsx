import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

function SingleProduct() {
    const [data, setData] = useState(null)
    const params = useParams()
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.id}`).then(response=>response.json()).then(JsonData=>setData(JsonData))
    },[])

  return (
  <>
    {data && (<div className="product-list">
    <div className="card-wraper">
        <h5>{data.title}</h5>
        <img src={data.image} alt="" />
        <p>{data.category}</p>
        <p>Rate : {data.rating.rate}</p>
        <p>Count : {data.rating.count}</p>
    </div>
    </div>)}
  </>
  )
}


export default SingleProduct