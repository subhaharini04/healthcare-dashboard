import React from 'react'
import { FiSearch } from "react-icons/fi";
import { IoNotifications, IoAddOutline } from "react-icons/io5";
import profile from "../assets/profile.jpg";


export const Header = () => {
    return (
        <div className='pl-10 pt-10'>
            <div className='flex justify-between items-center '>
                <div className='flex items-center gap-4 flex-grow'>
                    <div className='w-full max-w-xl relative '>
                        <FiSearch className='absolute top-2 left-2 text-2xl text-blue-900' />
                        <input type="text"
                            placeholder='Search'
                            className='border-2 border-gray-100 rounded-md w-full max-w-xl h-10 pl-10' />
                    </div>
                    <div className='border-2 border-gray-100 rounded-md h-10 w-10  flex items-center justify-center pt-1'>
                        <IoNotifications className='text-2xl text-blue-900' />
                    </div>
                </div>
                <div className='flex items-center space-x-2 mr-10'>
                    <img src={profile} alt="profile"
                        className='w-10 h-10 rounded-md' />
                    <div className='bg-blue-900 w-10 h-10 rounded-md text-white  flex items-center justify-center  pt-1 cursor-pointer'>
                        <IoAddOutline className='text-white text-3xl'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
