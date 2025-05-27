import React from 'react'
import body from '../assets/body.png';
import heart from "../assets/heart.png";
import leg from "../assets/leg.png";
import { LuScanLine } from "react-icons/lu";
import { HealthSectionCards } from './HealthSectionCards';
import { RiArrowDropDownLine } from "react-icons/ri";


export const AnatomySection = () => {
    return (
        <div>
            <div className='flex justify-between items-center mt-4 mx-10'>
                <h1 className='text-blue-900 text-xl font-bold'>Dashboard</h1>
                <p>This Week 
                    <RiArrowDropDownLine className='inline w-10 h-10'/></p>
            </div>
            <div className='flex'>
                <div className='mt-6'>
                    <div className='relative w-2/3 ml-[50px]'>
                        <img src={body} alt="human body" className='max-w-full h-auto' />
                        <div className='flex items-center absolute top-22 left-37'>
                            <LuScanLine className='w-15 h-8 text-blue-900 mr-2' />
                            <div className='flex items-center space-x-2 px-3 py-2 rounded-md bg-blue-900 text-white'>
                                <img src={heart} alt="heart" className='w-5 h-5' />
                                <p className='text-sm font-medium'>Healthy Heart</p>
                            </div>
                        </div>
                        <div className=' flex items-center absolute top-72 left-[-25px]'>
                            <div className='flex items-center space-x-2 px-3 py-2 rounded-md bg-cyan-300 text-blue-900'>
                                <img src={leg} alt="leg" className='w-5 h-5' />
                                <p className='text-sm font-medium'>Healthy Leg</p>
                            </div>
                            <LuScanLine className='w-8 h-8 text-blue-900 ml-2' />
                        </div>
                    </div>
                </div>
                <div className='w-1/3'>
                    <HealthSectionCards />
                </div>
            </div>
        </div>
    )
}
