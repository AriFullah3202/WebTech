import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();//it will not reload
        const form = event.target;
        const name = form.name.value;// check name , email field 
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(typeof password)
        console.log(email, password, name)
        console.log(email, password, name)
        createUser(email, password)
            .then(res => {
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                console.log("saved successful")
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
            })
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }



    return (
        <section className="bg-black dark:bg-gray-900 w-3/5 mx-auto py-20 mt-10">
            <div className="container flex items-center justify-center px-3 mx-auto">


                <form onSubmit={handleSubmit} className="w-full max-w-md">

                    <h1 className="text-3xl text-green-300">please Register</h1>
                    <div className="relative flex items-center mt-8">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>

                        <input type="text" name="name" className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
                    </div>

                    <label htmlFor="photoURL" className="flex items-center px-3 py-2 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-md cursor-pointer dark:border-gray-600 dark:bg-gray-900">



                        <input type="text" name="photoURL" className="block w-full py-2 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Photo Url" />                    </label>

                    <div className="relative flex items-center mt-6">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>

                        <input type="email" name="email" className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                    </div>

                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>

                        <input type="password" name="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                    </div>


                    <div className="mt-6">
                        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Sign Up
                    </button>

                        <div className="mt-6 text-center ">
                            <Link href="/LogIn" className="text-sm text-green-300 hover:underline dark:text-blue-400">
                                Already have an account? Login
                        </Link>
                        </div>
                    </div>
                </form>
            </div>
        </section >
    )
}

export default Register