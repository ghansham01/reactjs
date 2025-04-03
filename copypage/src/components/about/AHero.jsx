import React from 'react'
import { Link } from 'react-router-dom'
import About from '../aboutSection/About'
import Volanter from './Volanter'

function AHero() {
    return (
        <>
            <section className='relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center'
                style={{ backgroundImage: "url('https://templates.hibootstrap.com/findo/default/assets/img/banner/title-bg1.jpg')" }}
            >
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <div className=' relative z-10'>
                    <h1 className='text-3xl md:text-5xl font-bold'>About</h1>
                    <p className="mt-2 text-sm md:text-base">
                        <Link to="./../Home" className="text-gray-300 hover:text-white">Home</Link>
                        <span className="mx-2">·</span> About
                    </p>
                </div>
            </section>
            <About />
            <Volanter />
        </>
    )
}

export default AHero