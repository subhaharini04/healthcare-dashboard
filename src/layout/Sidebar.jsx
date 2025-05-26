import React from 'react'
import { general, tools, setting } from '../data/navbarLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Sidebar = () => {
    return (
        <div className='flex flex-col justify-between pt-14 pl-10 bg-gray-100 w-64 h-screen'>
           <div>
            <h1 className='text-2xl font-bold'>
                <span className='text-cyan-300'>Health</span>
                <span className='text-blue-900'>care.</span>
            </h1>
            
            <div className='pt-8'>
                <p className='text-gray-300'>General</p>
                <div className='pt-2 space-y-2'>
                    {general.map((link, index) => (
                        <a key={index} href={link.path} className='block cursor-pointer'>
                         <FontAwesomeIcon icon={link.icon} className="text-" />
                         {link.name}
                        </a>
                    ))}
                </div>
            </div>
            <div>
                <p className='text-gray-300 pt-8'>Tools</p>
                <div className='pt-2 space-y-2'>
                    {tools.map((link, index) => (
                        <a key={index} href={link.path} className='block cursor-pointer'>
                           <FontAwesomeIcon icon={link.icon} className="text-lg" />
                           {link.name}
                        </a>
                    ))}
                </div>
            </div>
            </div>
            <div className='pb-10'>
                <a href={setting.path} className='block cursor-pointer'>
                    <FontAwesomeIcon icon={setting.icon} className="text-lg" />
                    {setting.name}
                </a>
            </div>
        </div>
    )
}
