import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
const Login = () => {
    const [isSignInFrom, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInFrom)
    };

    const handleButtonClick = () => {
        // Validate the form data
        console.log(name.current.value);
        console.log(email.current.value);
        console.log(password.current.value);
        const message = checkValidData(name.current.value,email.current.value, password.current.value);
        setErrorMessage(message)  
    };
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg' alt='logo' />
            </div>
            <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80' onSubmit={(e) => e.preventDefault()}>
                <h1 className='font-bold text-3xl py-4'>{isSignInFrom ? "Sign In" : "Sign Up"}</h1>
                {!isSignInFrom && (
                    <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700" ref={name} />
                    )}
                <input type="text" placeholder="Enter email" className="p-4 my-4 w-full bg-gray-700" ref={email}/>
                

                <input type="password" placeholder="Enter password" className="p-4 my-4 w-full bg-gray-700" ref={password} />
                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInFrom ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInFrom ? "New to Netflix? Sign Up Now" : "Already Registered ? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login
