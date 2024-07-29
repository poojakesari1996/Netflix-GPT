import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInFrom, setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInFrom)
    };
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg' alt='logo' />
            </div>
            <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInFrom ? "Sign In" : "Sign Up"}</h1>
                {!isSignInFrom && (
                    <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700" />
                    )}
                <input type="text" placeholder="Enter email" className="p-4 my-4 w-full bg-gray-700" />
                

                <input type="password" placeholder="Enter password" className="p-4 my-4 w-full bg-gray-700" />
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInFrom ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInFrom ? "New to Netflix? Sign Up Now" : "Already Registered ? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login
