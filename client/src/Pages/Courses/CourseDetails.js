import React from 'react'
import { useLoaderData, Navigate, useLocation } from 'react-router';
import Pdf from "react-to-pdf";
import Checkout from '../Checkout/Checkout';
import { Link, NavLink } from 'react-router-dom';
const ref = React.createRef();





export const CourseDetails = () => {
    const data = useLoaderData()
    return (
        <div className="mx-auto">
            <header>
                {/* first install npm i react-to-pdf. then import const Pdf from "react-to-pdf" this component pass the props filename , targetRet is props expect the what content you  need to generate the pdf*/}
                <Pdf targetRef={ref} filename="course.pdf">
                    {({ toPdf }) => <button onClick={toPdf} className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        Download
</button>}
                </Pdf>
            </header>
            <div ref={ref} className="max-w-3xl rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 flex flex-wrap justify-center mx-auto">
                <img src={data.imageUrl} alt="" className="object-cover object-center w-80 rounded-t-md h-72 dark:bg-gray-500 " />
                <div className="flex flex-col justify-between p-6 space-y-8 w-80">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Course :{data.title}</h2>
                        <p className="dark:text-gray-100">{data.description}</p>
                        <h2 className="text-3xl font-semibold tracking-wide">Price : ${data.price}</h2>

                    </div>
                    <Link to={`/checkout/${data.id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900 shadow-xl">Get premium access</Link>
                </div>
            </div>
        </div>
    )
}
//state={{ special: data }}