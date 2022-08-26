import React from 'react';
import Product from './Product';

export default function List(props) {
  return (
    props.ProductList.length > 0 ?
      props.ProductList.map((product, i) => {

        return <Product key={i} product={product} incrementQuantity={props.incrementQuantity} index={i} decrementQuantity={props.decrementQuantity} removeItem={props.removeItem} />
      }
      )
      :<h1> No product in cart </h1>
    )
}
