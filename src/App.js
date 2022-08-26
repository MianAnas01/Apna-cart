import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import List from "./components/ProductList";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Additem from "./components/Additem";

function App() {
  const ProductList = [
    {
      name: "iphone",
      price: 99999,
      quantity: 0,
    },
    {
      name: "samsung",
      price: 9999,
      quantity: 0,
    },
  ];
  // useState is used to display data on screen
  let [prolist, setProductList] = useState(ProductList);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...prolist];
    let newTotalAmount = totalAmount;

    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...prolist];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...prolist];
    newProductList.map((products) => {
      products.quantity = 0;
    })
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...prolist];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    console.log(newProductList)
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const additem = (name, price) => {
    let newProductList = [...prolist];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0
    });
    setProductList(newProductList);

  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">

        <Additem  additem={additem} />
        <List ProductList={prolist} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={ removeItem} />
        
      </main>
      <Footer  totalAmount={totalAmount}  resetQuantity={resetQuantity} /> 
    </>
  );
}
export default App;
