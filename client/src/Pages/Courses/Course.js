import React from 'react'
import { Link } from 'react-router-dom';

const Course = ({ data }) => {
    const { id, imageUrl, title, price } = data;
    return (
        <div className="shadow-lg rounded-2xl h-80 w-90 m-10 hover:shadow-xl">
            <div className="flex justify-center">
                <img src={imageUrl} className="w-80 h-48" alt="" />

            </div>
            <div className="flex justify-around items-center">
                <h1 className="text-gray-800 bg-white-900 text-xl pt-8"> {title}</h1>
                <Link
                    to={`/course/${id}`}
                    className="p-3 mt-6 shadow-lg"
                >
                    Get started
                        </Link>
            </div>

        </div>
    )
}

export default Course
