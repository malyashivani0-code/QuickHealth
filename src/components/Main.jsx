import { Link } from "react-router-dom"
import Doctors from "./Doctors"

const Main = () => {
    return (
        <main>

            <div className="flex flex-col md:flex-row flex-wrap bg-[#4c6ae0] rounded-lg px-6 sm:px-10 md:px-10 lg:px-20">

                {/* Left Content */}
                <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 py-10 md:py-16 lg:py-[8vw] text-center md:text-left">

                    <p className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
                        Book Appointment <br /> With Trusted Doctors
                    </p>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-white text-sm sm:text-base font-light">
                        <p>
                            Simply browse through our extensive list of trusted doctors
                            <br className="hidden sm:block" />
                            schedule your appointment hassle-free.
                        </p>
                    </div>

                    <button className="flex items-center bg-white px-8 py-3 rounded-full text-gray-600 font-medium text-sm md:text-base mt-4 md:mt-0 hover:scale-105 transition-all duration-300">
                        Book Appointment
                    </button>

                </div>

                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center items-end relative mt-6 md:mt-0">
                    <img
                        className="w-full max-w-sm sm:max-w-md md:max-w-full lg:absolute lg:bottom-0 h-auto rounded-lg"
                        src="https://quickhealth.vercel.app/assets/headerImage-B-kDfPiH.png"
                        alt="header_image"
                    />
                </div>

            </div>

            <Doctors/>
            
            <div className="flex bg-[#4c6ae0] rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
                <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg-pl-5">
                    <div className='text-xl s:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                        <p>Book Appointment</p>
                        <p className='mt-4'>With 100+ Trusted Doctors</p>
                    </div>

                    <button className="bg-white text-sm sm:text-base text-gray-600 font-bold px-8 py-3 rounded-full mt-6 "><Link to="/signup">
                    Create Account</Link></button>
                </div>

                <div className="hidden md:block md:w-1/2 lg:w-92.5 relative">
                    <img className="w-full absolute bottom-0 right-0 max-w-md" src="https://quickhealth.vercel.app/assets/appointmentImage-DzbZlMsi.png" alt="appointmentImage" />
                </div>
            </div>
        </main>
    )
}

export default Main