import React from 'react'
import Logo from "../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {

return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        {/*Upper Navbar*/}
        <div className='bg-primary/40 py-2'> 
            <div className='container flex justify-between items-center'> 
                <div>
                <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                    <img src={Logo} alt="Logo" className="w-10" />
                    ShopIT
                </a>
                </div>
                
                {/* search bar */}
                <div>
                    <div className='relative group'>
                        <input type="text" placeholder="Search" className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800 '/>
                        <IoMdSearch  className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
                    </div>
                </div>
            </div>
        </div>

        {/*Lower Navbar*/}
    </div>

    )
}

export default Navbar