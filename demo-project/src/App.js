import './App.css';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import AddProduct from './Component/AddProduct';
import Footer from './Component/Footer';
import Login from './Component/Login';
import NavBar from './Component/NavBar';
import PrivateRoute from './Component/PrivateRoute ';
import ProductList from './Component/ProductList';
import PublicRoute from './Component/PublicRoute';
import React from "react";
import Signup from './Component/Signup';
import UpdateProduct from './Component/UpdateProduct';

function App() {
  
  return (
    <div className="App">
    <div className="container">
     <React.StrictMode>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<ProductList />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/update-product/:id" element={<UpdateProduct />} />
              </Route>

              <Route element={<PublicRoute />}>
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
              </Route>
            </Routes>
          <Footer />
        </BrowserRouter>
      </React.StrictMode>
    </div>
    </div>
  );
}

export default App;
