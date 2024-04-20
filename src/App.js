import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Model from "./component/Model";
import Shop from "./component/Shop";
import Login from './component/login/Login';
import Signup from "./component/login/Signup";
import Productinfo from "./component/cart/Productinfo";
import Cart from "./component/cart/Cart";
import Menubar from "./component/menubar/Menubar";

function App() {
  
  return (
    <div className="w-[100%] h-[100vh]  font-mono">
      <BrowserRouter>
        <Menubar/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path='/men' element={<Model type="men"/>}/>
          <Route path='/women' element={<Model type="women"/>}/>
          <Route path='/kids' element={<Model type="kid"/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/product' element={<Productinfo/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
