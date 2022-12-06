import React, { useContext } from 'react'
import { AuthContext } from '../context/UserContext';

const Blog = () => {
    const { user } = useContext(AuthContext);



    return (
        <>
            <div className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Javascript</a>
                    </div>
                    <div className="mt-3">
                        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline"> what is cors?</a>
                        <p className="mt-2">Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. The Cross-Origin Resource Sharing standard works by adding new HTTP headers that let servers describe which origins are permitted to read that information from a web browser</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</a>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src={user.imageUrl} alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">{user.displayName}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Javascript</a>
                    </div>
                    <div className="mt-3">
                        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Why are you using firebase? What other options do you have to implement authentication?</a>
                        <p className="mt-2">The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</a>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src={user.imageUrl} alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">{user.displayName}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Javascript</a>
                    </div>
                    <div className="mt-3">
                        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">How does the private route work?</a>
                        <p className="mt-2">The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</a>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src={user.imageUrl} alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">{user.displayName}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Javascript</a>
                    </div>
                    <div className="mt-3">
                        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">What is Node? How does Node work?</a>
                        <p className="mt-2">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</a>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src={user.imageUrl} alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">{user.displayName}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
