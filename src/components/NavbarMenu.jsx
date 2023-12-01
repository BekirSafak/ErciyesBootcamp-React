import React from 'react'
import { Link } from 'react-router-dom'

function NavbarMenu() {
    return (
        <div className='bg-green-300 font-bold max-w-[1256px] h-16 mx-auto p-4'>
            <nav className='flex justify-between text-lime-900'>
                <div className=''>LogoImg</div>
                <div>
                    <ul className='flex gap-4'>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/product'}>Product Details</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavbarMenu