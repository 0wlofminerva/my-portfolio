import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

import { ReactComponent as Logo } from '../assets/logo/monogram.svg';

export default function Navbar() {
    return (
        <header className='bg-light-brown'>
            <div className='container mx-auto flex justify-between'>
                <nav className='flex'>

                    <NavLink className='logo-container' to='/'>
                    <Logo className='logo' />
                    </NavLink>


                    <NavLink 
                    to='/' 
                    exact 
                    activeClassName='text-dark-brown'
                    className='inflex-flex items-center py-6 px-3 mr-4 text-dark-brown hover:text-brown-light text-4xl font-bold archive-garamond-bold tracking-widest uppercase' 
                    activeClassName='text-medium-brown bg-light-brown'
                    >
                    
                        Manuel de Arpe
                    </NavLink>
                    <NavLink to='/post' className='inline-flex items-center py-3 px-3 my-6 rounded text-dark-brown hover:text-brown-light'
                    activeClassName='text-dark-brown bg-light-brown'
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink to='/project' className='inline-flex items-center py-3 px-3 my-6 rounded text-dark-brown hover:text-brown-light' 
                    activeClassName='text-dark-brown bg-light-brown'
                    >
                        Projects
                    </NavLink>
                    <NavLink to='/about' className='inline-flex items-center py-3 px-3 my-6 rounded text-dark-brown hover:text-brown-light' 
                    activeClassName='text-dark-brown bg-light-brown'
                    >
                        About
                    </NavLink>
                </nav>
                <div className='inline-flex py-3 px-3 my-6'>
                    <SocialIcon 
                    url='https://twitter.com/de_arpe' 
                    className='mr-4' 
                    target='_blank' 
                    fgColor='#fff' 
                    style={{ heigh: 35, width: 35 }} />
                    <SocialIcon 
                    url='https://www.youtube.com/channel/UCguDuANaQsTWL-23CGmGSHw' 
                    className='mr-4' 
                    target='_blank' 
                    fgColor='#fff' 
                    tyle={{ heigh: 35, width: 35 }} />
                    <SocialIcon 
                    url='https://www.instagram.com/manuel_de_arpe/' 
                    className='mr-4' 
                    target='_blank' 
                    fgColor='#fff' 
                    style={{ heigh: 35, width: 35 }} />
                    <SocialIcon 
                    url='https://www.patreon.com/user/creators?u=32539790' 
                    className='mr-4' 
                    target='_blank' 
                    fgColor='#fff' 
                    style={{ heigh: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}