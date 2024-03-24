import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className=' shadow sticky top-0 z-10 bg-white'>
            <nav className='flex items-center justify-between p-[5px]'>
                <div className='w-[60px] ml-[120px]'>
                    <img src="https://www.adriaticluxuryhotels.com/wp-content/themes/adriatic-luxury-hotels-web-2019/static/images/logo-positive-small.png" alt="logo" />
                </div>

                <div className='flex items-center gap-6 mr-20 font-semibold text-xs'>
                    <ul className='flex items-center gap-16 '>
                        <li className='hover:underline cursor-pointer hover:font-bold'>HOTEL AND VILLAS</li>
                        <li className='hover:underline cursor-pointer hover:font-bold'></li>
                        <li className='hover:underline'> <NavLink to='/meeting' className={({isActive}) => isActive ? "text-orange-500 hover:underline hover:font-bold" : "text-black hover:underline hover:font-bold"}>MEETINGS AND EVENTS</NavLink>
                        </li>
                        <li className='hover:underline'> <NavLink to='/dining' className={({isActive}) => isActive ? "text-orange-500 hover:underline hover:font-bold" : "text-black hover:underline hover:font-bold"}>DINING</NavLink>
                        </li>
                        <li  className='hover:underline cursor-pointer hover:font-bold'>SPECIAL OFFERS</li>
                        <li className='mr-20 hover:underline cursor-pointer hover:font-bold'>STORIES</li>
                    </ul>
                    <button className='border bg-slate-100 text-red-400 pt-4 pb-4 pr-4 pl-4 rounded-sm hover:underline hover:font-bold'>ONLINE CHECK-IN</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;

