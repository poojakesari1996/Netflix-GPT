import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick = () => {
        const nameValue = name.current ? name.current.value : '';
        const emailValue = email.current ? email.current.value : '';
        const passwordValue = password.current ? password.current.value : '';

        console.log('Name:', nameValue);
        console.log('Email:', emailValue);
        console.log('Password:', passwordValue);

        // Validate the form data
        const message = checkValidData(emailValue, passwordValue, nameValue);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            // Sign-up logic
            createUserWithEmailAndPassword(auth, emailValue, passwordValue)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    console.log('User signed up:', user);
                    setErrorMessage('Sign up successful!');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error('Signup error:', error);
                    setErrorMessage(`${errorCode} - ${errorMessage}`);
                });
        } else {
            // Sign-in logic
            signInWithEmailAndPassword(auth, emailValue, passwordValue)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log('User signed in:', user);
                    setErrorMessage('Sign in successful!');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error('Signin error:', error);
                    setErrorMessage(`${errorCode} - ${errorMessage}`);
                });
        }
    };

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg' alt='logo' />
            </div>
            <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80' onSubmit={(e) => e.preventDefault()}>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (
                    <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700" ref={name} />
                )}
                <input type="text" placeholder="Enter email" className="p-4 my-4 w-full bg-gray-700" ref={email} />

                <input type="password" placeholder="Enter password" className="p-4 my-4 w-full bg-gray-700" ref={password} />
                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered ? Sign In Now"}</p>
            </form>
        </div>
    );
};

export default Login;
