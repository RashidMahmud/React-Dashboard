import React, {useState} from 'react'
import { FiMenu } from "react-icons/fi"
import { FaCreditCard, FaHome, FaMoneyBill, FaUser } from "react-icons/fa"
import { IoSettingsSharp } from "react-icons/io5"
import { MdAccountBalance, MdDashboard } from "react-icons/md"
import { MdOutlineLeaderboard } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoBag } from 'react-icons/io5'
import { FaChartLine } from 'react-icons/fa'
import { FiMessageCircle } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import { FaStarHalfAlt } from 'react-icons/fa'
import { LuHistory } from 'react-icons/lu'
import { PiSignOutFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const SideBarItems = [
  { name: "Dashboard", icon: <MdDashboard />, path: "/" },
  { name: "Orders", icon: <AiOutlineShoppingCart />, path: "/order" },
  { name: "Products", icon: <IoBag />, path: "/product" },
  { name: "Profile", icon: <FaUser />, path: "/profile" },
  { name: "Sales Report", icon: <FaChartLine />, path: "/salesreport" }
];


function Sidebar({toggleSidebar}) {
  const [isActive, setIsActive] = useState(0);
  return (
    <div className='bg-primary1 border-r border-primary2 text-white h-screen p-5 w-44 transition-all'>
    <ul className='space-y-3 mt-5 md:mt-0'>
    {SideBarItems.map((item, index) => {
      return (
        <Link to={item.name}
         onClick={() => setIsActive(index)}
         key={item.name}
         className={`flex font-medium px-2 py-2.5 rounded-lg items-center gap-2 cursor-pointer hover:bg-secondary hover:text-primary1 transition-all
         duration-200 ${isActive === index ? "bg-secondary text-primary1" : "text-grayText"}`}>
         {item.icon} {item.name}
        </Link>
      );
    })}

    </ul>
    <button onClick={toggleSidebar} className='md:hidden absolute top-0 right-0 px-2 py-3 text-2xl cursor-pointer'>
      <IoMdClose />
    </button>
    </div>
  )
}

export default Sidebar