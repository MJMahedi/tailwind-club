import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
const NavBar = () => {
    const [open , setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Shop', link: '/Shop' },
        { id: 3, name: 'Deals', link: '/Deals' },
        { id: 4, name: 'Coupons', link: '/Coupons' },
        { id: 5, name: 'Contact', link: '/Contact' }
    ]
    return (

        <nav className='bg-indigo-700 ' >

            <div onClick={() => setOpen(!open)} className='w-10  md:hidden  '>
               {open ? <XIcon></XIcon> : <MenuIcon ></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center absolute md:static bg-indigo-200 duration-500 w-full ease-in  ${open ? 'top-10' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;