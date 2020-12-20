import React from 'react'
import image from '../assets/bg/Manuel_de_Arpe_Background_201220_0.jpg'

export default function Home() {
    return (
        <main>
            <img src={image} alt='Background' className='absolute object-cover w-full h-full' />
            <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
                <h1 className='text-6xl text-dark-brown font-bold archive-garamond-pro leading-none lg:leading-snug home-name'>Pintor y Restaurador.</h1>
            </section>
        </main>
    )
}