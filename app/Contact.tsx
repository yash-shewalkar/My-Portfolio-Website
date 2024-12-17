"use client"

import React from 'react'
import  FloatingDockDemo  from './ContactDock'

const Contact = () => {
    return (
        <div id='contact' className='pd-20 pt-36'>
            <div>
            <h1 className="relative text-3xl flex justify-center pb-6">Like my Work?  Contact me</h1>
            <p className="relative text-xl flex justify-center pb-4 text-purple-400">
                This will contain -github, -X, -linkedin, -email, -Instagram
            </p>
            </div>
            <FloatingDockDemo/>
        </div>
    )
}

export default Contact