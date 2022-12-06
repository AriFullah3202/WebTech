import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Parallax, Pagination, Navigation } from "swiper";

const Home = () => {
    return (
        <>
            <Swiper
                breakpoints={{
                    1300: {
                        width: 1300,

                    }
                }}
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={600}
                parallax={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"

                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center">
                        <div className="sm:w-full md:w-3/6 p-4">
                            <div className="text-sm text-3xl text-lime-300" data-swiper-parallax="-300">
                                Get learn our Online Courses
            </div>

                            <div className="text-1xl text-green-500 leading-loose" data-swiper-parallax="-100">
                                <p>
                                    Online courses with experienced instructors and easy follow lessons. Python, Java, Web Development, and Scratch courses for students.
              </p>
                            </div>
                            <div>
                                <a
                                    href="/"
                                    className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none mb-10"
                                >
                                    Get started
                        </a>
                            </div>
                        </div>
                        <div className="sm:w-full md:w-3/6 h-30">
                            <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center">
                        <div className="sm:w-full md:w-3/6 p-4">
                            <div className="text-sm text-3xl text-lime-300" data-swiper-parallax="-300">
                                Get job after learning
            </div>

                            <div className="text-1xl text-green-500 leading-loose" data-swiper-parallax="-100">
                                <p>
                                    you must complete all the mentioned modules in this course and complete the quiz successfully to receive the Java course free completion certificate.
              </p>
                            </div>
                            <div>
                                <a
                                    href="/"
                                    className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none mb-10"
                                >
                                    Get started
                        </a>
                            </div>
                        </div>
                        <div className="sm:w-full md:w-3/6">
                            <img src="https://media.istockphoto.com/id/542111792/photo/female-students-learning-computer-programming.webp?s=612x612&w=is&k=20&c=bPRrpTyIuTtYCqp3VYk6MS_tpi9GzVTJ1wXDca1wAsM=" alt="" />
                        </div>

                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    )
}

export default Home
