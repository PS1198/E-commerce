
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { useState } from "react";
import Order from "./components/Order";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
const [order,setOrder] = useState('')
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/shop" element={<Shop/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/checkout" element={<Checkout setOrder={setOrder}/>} />
    <Route path="/order-conformation" element={<Order order={order}/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  )
}



   
  

export default App;



