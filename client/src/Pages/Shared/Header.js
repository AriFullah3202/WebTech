import { Fragment, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { Disclosure, Menu } from '@headlessui/react'
import DarkModeToggle from "react-dark-mode-toggle";

import { FaBars, FaHandPeace } from "react-icons/fa";
import { AuthContext } from '../../context/UserContext';






export default function Header() {
    const { isDarkMode, setIsDarkMode } = useContext(AuthContext);
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Disclosure as="nav" className="bg-gray-300">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/*====================only for Mobile menu button=====================*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <FaBars className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                            <FaBars className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <FaHandPeace></FaHandPeace>
                                    <h1 className="text-red-500">WebTeach</h1>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        <NavLink
                                            to='/home'
                                            aria-label='Home'
                                            title='Home'
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'font-medium tracking-wide text-red-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                    : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            } >
                                            Home
            </NavLink>
                                        <NavLink
                                            to='/course'
                                            aria-label='Course'
                                            title='Home'
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'font-medium tracking-wide text-red-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                    : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            } >
                                            Course
            </NavLink>
                                        <NavLink
                                            to='/faq'
                                            aria-label='Faq'
                                            title='Home'
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'font-medium tracking-wide text-red-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                    : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            } >
                                            FAQ
            </NavLink>
                                        <NavLink
                                            to='/blog'
                                            aria-label='Blog'
                                            title='Home'
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'font-medium tracking-wide text-red-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                    : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            } >
                                            Blog
            </NavLink>

                                    </div>
                                </div>
                            </div>


                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">



                                {/*=================== Profile dropdown========================== */}
                                <Menu as="div" className="relative ml-3">


                                    <div>
                                        <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <>
                                                {
                                                    user ?.uid ?
                                                        <>
                                                            <img
                                                                className="h-8 w-8 rounded-full" title="airf"
                                                                src={user.photoURL}
                                                                alt=""
                                                                title={user.displayName}
                                                                onClick={handleLogOut}
                                                            />
                                                        </>
                                                        :
                                                        <div>
                                                            <Link to='/login'>Login</Link>
                                                        </div>
                                                }

                                            </>


                                        </Menu.Button>
                                    </div>

                                </Menu>
                                <DarkModeToggle
                                    checked={isDarkMode}
                                    onChange={setIsDarkMode}
                                    size={80}
                                />
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3 flex flex-col text-center">
                            <NavLink
                                to='/home'
                                aria-label='Home'
                                title='Home'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'font-medium tracking-wide text-red-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                        : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                } >
                                Home
            </NavLink>
                            <NavLink
                                to='/course'
                                aria-label='Course'
                                title='Home'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'font-medium tracking-wide text-red-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                        : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                } >
                                Course
            </NavLink>
                            <NavLink
                                to='/faq'
                                aria-label='Faq'
                                title='Home'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'font-medium tracking-wide text-red-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                        : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                } >
                                FAQ
            </NavLink>
                            <NavLink
                                to='/blog'
                                aria-label='Blog'
                                title='Home'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'font-medium tracking-wide text-red-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                        : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                } >
                                Blog
            </NavLink>
                        </div>
                    </Disclosure.Panel>
                </>
            )}

        </Disclosure>
    )
}