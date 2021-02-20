import React from 'react';
import phones from '../assets/iphone-with-profile.jpg';
import Logo from '../assets/logo.png';

export default function login() {
    return (
        <div className='flex justify-center items-center mt-24'>
            <div className=''>
                <img src={phones} alt="iPhone with Instagram app" width='500px'/>
            </div>
            <div>
                <div className='border'>
                    <img src={Logo} alt="instagram logo" className='py-8 px-16'/>
                    <form className='flex flex-col space-y-4 px-6 mb-6'>
                        <input type="text" placeholder="Email address" className='border p-2'/>
                        <input type="text" placeholder="Password" className='border p-2'/>
                        <button className='bg-blue-300 text-white py-2 font-bold'>Log In</button>
                    </form>
                </div>
                <div className='border mt-4 p-4 text-center'>
                    <h1>Don't have an account? <span className='text-blue-600 font-bold cursor-pointer'>Sign up</span></h1>
                </div>
            </div>
        </div>
    )
}
