import React from 'react'
import { general, tools, setting } from '../data/navbarLinks';

export const Sidebar = () => {
    return (
        <div className='flex flex-col justify-between pt-14 pl-10 bg-gray-100 w-64 h-screen'>
            <div>
                <h1 className='text-2xl font-bold'>
                    <span className='text-cyan-300'>Health</span>
                    <span className='text-blue-900'>care.</span>
                </h1>

                <div className='pt-8'>
                    <p className='text-gray-400'>General</p>
                    <div className='pt-2 space-y-2'>
                        {general.map((link, index) => (
                            <a key={index} href={link.path} className='block cursor-pointer text-md text-gray-500 pt-2 hover:text-blue-900'>
                                <link.icon className='text-xl inline mr-2' />                         
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <p className='text-gray-400 pt-8'>Tools</p>
                    <div className='pt-2 space-y-2'>
                        {tools.map((link, index) => (
                            <a key={index} href={link.path} className='block cursor-pointer text-gray-500 pt-2 text-md hover:text-blue-900'>
                                <link.icon className='text-xl inline mr-2' />                           
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className='pb-10'>
                <a href={setting.path} className='block cursor-pointer text-gray-500 text-md hover:text-blue-900'>
                    <setting.icon className='text-xl inline mr-2' />                   
                    {setting.name}
                </a>
            </div>
        </div>
    )
}
