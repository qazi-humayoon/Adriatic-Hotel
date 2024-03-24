import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Footer() {
    return (
        <footer className='bg-zinc-300'>
            <div className='flex justify-end pt-36 '>
            <div className='mr-24'>
                <h1 className='text-xl font-thin'>Current Weather</h1>
                <p className='text-xs mt-2 mb-10'>DUBROVNIK OLD TOWN</p>
                <p className='text-2xl'><i class="ri-cloud-line mr-4 text-3xl font-thin"></i>11 °C | °F</p>

            </div>
            <div className='mr-80'>
                <h1 className='text-xl font-thin'>Connect with us</h1>
                <p className='text-xs mt-2 mb-10'>SOCIAL MEDIA CHANNELS</p>
                <p className='text-center '>
                    <a href="https://www.facebook.com/qazi.humayun.3" target="_blank"><i class="ri-facebook-fill mr-2 text-xl hover:font-bold"></i></a>
                    <a href="https://www.instagram.com/qazi_humayoon/?hl=en" target="_blank"> <i class="ri-instagram-line mr-4 text-xl hover:font-bold"></i></a>
                    <a href="https://twitter.com/QHumayoon" target="_blank"><i class="ri-twitter-x-line text-xl hover:font-bold"></i></a>  
                </p>
            </div>
            <div className='mr-40'>
                <h1 className='text-xl font-thin'>Newsletter sign up</h1>
                <p className='text-xs mt-2 mb-8'>SIGN UP FOR SPECIAL OFFERS</p>
                <form action="">
        <input type="text" placeholder='Enter Your Email' class="bg-transparent border-b border-gray-500 outline-none " /><i class="ri-arrow-right-circle-line text-3xl ml-6 cursor-pointer"></i>
    </form>

                <p className='text-xs mt-12 font-thin'>By submitting this form, I agree to having my personal and contact information processed and <br /> used for the purpose of marketing communications. More details about our Privacy policy can <br /> be found at the following link: <span className='text-red-500'> Privacy Policy.</span></p>
                <p className='text-xs mt-4 font-thin'>You can unsubscribe from these at any time – just click on the "Unsubscribe" link included in <br /> each newsletter.</p>
            </div>
            </div>

            <div className='flex items-center justify-start gap-10 text-xs mt-20 ml-44'>
                <NavLink to='/about' className={({isActive}) => isActive ? "text-orange-500 hover:underline hover:font-bold" : "text-black hover:underline hover:font-bold"}>ABOUT US</NavLink>
                <NavLink to='/sustainability' className={({isActive}) => isActive ? "text-orange-500 hover:underline hover:font-bold" : "text-black hover:underline hover:font-bold"}>SUSTAINABILITY</NavLink>
                <NavLink to='/sponsorship' className={({isActive}) => isActive ? "text-orange-500 hover:underline hover:font-bold" : "text-black hover:underline hover:font-bold"}>SPONSORSHIP AND DONATIONS</NavLink>

                <p  className='hover:underline cursor-pointer hover:font-bold'></p>
                <p  className='hover:underline cursor-pointer hover:font-bold'>MEDIA</p>
                <p  className='hover:underline cursor-pointer hover:font-bold'>CAREERS</p>
                <p  className='hover:underline cursor-pointer hover:font-bold'>CONTACT LIST</p>
                <p  className='hover:underline cursor-pointer hover:font-bold'>PRIVACY AND COOKIES</p>
            </div>

            <div className='flex items-center justify-between pt-20 text-xs pb-16'>
                <div className='flex items-center gap-10 ml-44'>
                    <p>ALH GROUP MEDIA </p>
                    <p>ALL RIGHTS RESERVED</p>
                </div>
                <p className='mr-48'>DESIGN & DEVELOPMENT BY BORNFIGHT</p>
            </div>
            
        </footer>
        
    )
}

export default Footer
