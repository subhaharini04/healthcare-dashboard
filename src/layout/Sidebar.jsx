import React from 'react'

export const Sidebar = () => {
    return (
        <div className='pt-14 pl-10 bg-gray-100 w-64'>
            <h1 className='text-2xl font-bold'><span className='text-cyan-300'>Health</span><span className='text-blue-900'>care.</span></h1>
            <div className='pt-8'>
                <p className='text-gray-300'>General</p>
                <div className='gap-5'>
                    <a href="">
                    Dashboard</a><br />
                    <a href="">History</a><br />
                    <a href="">Calendar</a><br />
                    <a href="">Appointments</a><br />
                    <a href="">Statistics</a>
                </div>
            </div>
            <div>
                <p>Tools</p>
                <div>
                    <a href="">Chat</a><br />
                    <a href="">Support</a>
                </div>
            </div>
            <div>
                <a href="">Setting</a>
            </div>
        </div>
    )
}
