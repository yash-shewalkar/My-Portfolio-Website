"use client"

import React from 'react'
import FloatingDockDemo from './ContactDock'

const Contact = () => {
    return (
        <div id='contact' className='pd-2 pt-6 '>
            <div>
                <h1 className="relative text-3xl flex justify-center pb-6">Like my Work?  Contact me</h1>
            </div>
            <FloatingDockDemo />
            <footer className=" text-white pb-6 mt-24">
                <div className='flex justify-center'>
                    <p className="text-sm">
                        &copy; 2024 Yash Shewalkar. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Contact