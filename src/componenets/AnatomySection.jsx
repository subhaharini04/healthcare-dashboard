import React from 'react'
import body from '../assets/body.png';
import heart from "../assets/heart.png";
import leg from "../assets/leg.png";
import { LuScanLine } from "react-icons/lu";
import { HealthSectionCards } from './HealthSectionCards';

export const AnatomySection = () => {
    return (
        <div className='flex'>
            <div className='flex gap-8 p-6'>
                <div className='relative w-2/3'>
                    <img src={body} alt="human body" />
                    <div className='absolute top-[140px] left-[200px] flex items-center'>
                        <LuScanLine className='w-10 h-10 text-blue-900 mr-4 ' />
                        <div className=' bg-blue-900 text-white p-2 rounded-md flex items-center '>
                            <img src={heart} alt="heart" className=' w-6 mr-2 inline' />
                            <p className='inline-block'>Healthy Heart</p>
                        </div>
                    </div>
                    <div className='absolute top-[380px] left-[0px] flex items-center'>
                    <div className='bg-cyan-300 text-blue-900 p-2 rounded-md'>
                        <img src={leg} alt="leg" className='w-8  inline' />
                        <p className='inline-block'>Healthy Leg</p>
                    </div>
                        <LuScanLine className='w-10 h-10 text-blue-900 ml-3 ' />
                    </div>
                </div>
            </div>
            <div className='w-1/3'>
               <HealthSectionCards/>
            </div>
        </div>
    )
}
