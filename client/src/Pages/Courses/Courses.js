import React from 'react'
import { useLoaderData } from 'react-router';
import Course from './Course';

const Courses = () => {
    const data = useLoaderData();
    return (
        <div className="flex flex-wrap justify-center">
            {
                data.map((data, index) => {
                    return <Course data={data} key={index}></Course>
                })
            }

        </div>
    )
}

export default Courses
