import React, { useState} from "react";
import './App.css'
import { Route, Routes } from "react-router";
import Dashboard from "./Components/Dashboard/index"
import MainBoard from "./Components/Dashboard/MainBoard"
import Navbar from "./Components/Navbar"
import Order from "./Components/Order"
import Sidebar from "./Components/Sidebar"
import Product from "./Components/Product"
import Profile from "./Components/Profile"
import SalesReport from "./Components/SalesReport"
import Error from "./Components/Error"
function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className='bg-primary1'>
    <div className='container bg-primary1 flex mx-auto min-h-screen'>
    <div className="{`absolute top-0 transition-all duration-200 ${isOpen ? 'left-[0%]' : '-left[-100%]'}`}">
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
    </div>
    <Routes>
      <Route path="/" element={<MainBoard toggleSidebar={toggleSidebar} />} >
        <Route path="/" index element={<Dashboard />} />
        <Route path="order" element={<Order />} />
        <Route path="product" element={<Product />} />
        <Route path="profile" element={<Profile />} />
        <Route path="salesreport" element={<SalesReport />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
    </div>

    </div>
  )
}

export default App;
