import React from 'react'

function NavbarMenu() {
    return (
        <div className='bg-green-300 font-bold max-w-[1256px] h-16 mx-auto p-4'>
            <nav className='flex justify-between text-lime-900'>
                <div className=''>LogoImg</div>
                <div>
                    <ul className='flex gap-4'>
                        <li>Home</li>
                        <li>Product Details</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavbarMenu