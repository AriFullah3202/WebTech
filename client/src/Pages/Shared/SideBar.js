import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';


const SideBar = () => {

    const liClasses = "px-4 py-2 cursor-pointer hover:bg-slate-100";
    //=================if small screen it will this useState will be false otherwise true
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth < 630 ? false : true);
    console.log(isSidebarOpen)
    // ==========================if true it will be false or if false it will true
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }


    const data = useLoaderData();
    console.log(data)
    return (

        <>    {/**==================== if false this div will not be execute=============== */}
            <div className={`fixed bg-gray-400 py-4 h-screen border-r-2 transition-all ${isSidebarOpen ? "w-25 shadow md:shadow-none" : "w-14"}`}>
                <div className='mx-2'>
                    <span onClick={toggleSidebar} className="inline-flex w-12 h-12 items-center justify-center cursor-pointer rounded-full hover:bg-slate-200"><FaBars></FaBars></span>
                </div>

                <ul className='my-4 whitespace-nowrap overflow-x-hidden'>

                    {data.map((data, index) => {
                        { console.log(data.title) }
                        return <li className={liClasses}>
                            <span className='inline-block w-8 mr-3.5'></span>
                            <a
                                href={`/course/${data.id}`}
                            >
                                key={data.id}
                                {data.title}
                            </a>
                        </li>
                    })}

                </ul>
            </div>

            {/* ==============Empty div for pushing main content to right according to the width of the sidebar============== */}
            <div className={`flex-shrink-0 h-screen w-16 ${isSidebarOpen && "md:w-25"}`}>

            </div>
        </>
    )
}

export default SideBar