import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userId");
        navigate("/");
        window.location.reload();
    }
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <nav>
            <div className="sticky top-0 bg-white z-10 flex flex-row items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">

                <img onClick={() => navigate("/")} className="w-44 md:w-40 lg:w-44 cursor-pointer" src="https://quickhealth.vercel.app/assets/logo-C1shQAkN.svg" alt="logo" />

                <ul className="hidden md:flex items-start lg:space-x-5 md:space-x-3.5 font-medium">
                    <Link to="/" className="py-1">HOME</Link>
                    <Link to="/allDoctors" className="py-1">ALL DOCTORS</Link>
                    <Link to="/about" className="py-1">ABOUT</Link>
                    <Link to="/contact" className="py-1">CONTACT</Link>
                </ul>

                <div className="flex items-center gap-4">
                    {!userId ? (<button className="cursor-pointer text-white bg-[#4c6ae0] px-8 py-3 rounded-full font-medium hidden md:py-2 md:px-6 md:block">
                        <Link to="/signup" >Create Account</Link>
                    </button>) : (
                        <div className="flex gap-2 items-center cursor-pointer group relative">
                            <div className="flex gap-2 items-center">
                                <img className="w-9 rounded-full " src="https://res.cloudinary.com/dui4sdtqc/image/upload/v1733839917/quickHealth/brjgczq13jsjbgqwyhcu.png" alt="profile_picture" />
                                <img className="w-2.5" src="data:image/svg+xml,%3csvg%20width='14'%20height='10'%20viewBox='0%200%2014%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.57692%206.63312L1.60393%200.347811C1.23701%20-0.115937%200.642112%20-0.115937%200.275191%200.347811C-0.0917303%200.811558%20-0.0917303%201.56344%200.275191%202.02719L5.91255%209.15219C6.27947%209.61594%206.87437%209.61594%207.24129%209.15219L12.8787%202.02719C13.2456%201.56344%2013.2456%200.811558%2012.8787%200.347811C12.5117%20-0.115937%2011.9168%20-0.115937%2011.5499%200.347811L6.57692%206.63312Z'%20fill='%237C7C7C'/%3e%3cmask%20id='mask0_5479_343'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='14'%20height='10'%3e%3cpath%20d='M6.57692%206.63312L1.60393%200.347811C1.23701%20-0.115937%200.642112%20-0.115937%200.275191%200.347811C-0.0917303%200.811558%20-0.0917303%201.56344%200.275191%202.02719L5.91255%209.15219C6.27947%209.61594%206.87437%209.61594%207.24129%209.15219L12.8787%202.02719C13.2456%201.56344%2013.2456%200.811558%2012.8787%200.347811C12.5117%20-0.115937%2011.9168%20-0.115937%2011.5499%200.347811L6.57692%206.63312Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_5479_343)'%3e%3c/g%3e%3c/svg%3e" alt="dropdown" />
                            </div>
                            <div className="absolute top-0 right-0 pt-14 text-gray-600 font-medium z-20 hidden transition-all duration-300 group-hover:block">
                                <div className="min-w-48 bg-stone-50 rounded flex flex-col gap-4 p-4">
                                    <p onClick={() => navigate(`/myprofile/${userId}`)} className="hover:text-black cursor-pointer">My Profile</p>
                                    <p onClick={() => navigate("/myAppointments")} className="hover:text-black cursor-pointer">My Appointment</p>
                                    <p onClick={handleLogout} className="hover:text-black cursor-pointer">Logout</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* cross Click Added */}
                    <img
                        onClick={() => setSidebarOpen(true)}
                        className="w-6 md:hidden cursor-pointer"
                        src="data:image/svg+xml,%3csvg%20width='37'%20height='27'%20viewBox='0%200%2037%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='17'%20y='24'%20width='20'%20height='3'%20rx='1.5'%20fill='%23000B6D'/%3e%3crect%20x='7'%20y='12'%20width='30'%20height='3'%20rx='1.5'%20fill='%23000B6D'/%3e%3crect%20width='37'%20height='3'%20rx='1.5'%20fill='%23000B6D'/%3e%3c/svg%3e"
                        alt="menu"
                    />
                    {/*Off Canvas Sidebar */}
                    <div
                        className={`fixed top-0 right-0 h-full bg-white z-20 transition-all duration-300 md:hidden
                        ${sidebarOpen ? "w-full" : "w-0 overflow-hidden"}`}>

                        {/* Sidebar Header */}
                        <div className="flex items-center justify-between px-5 py-6 border-b">
                            <img
                                className="w-36"
                                src="https://quickhealth.vercel.app/assets/logo-C1shQAkN.svg"
                                alt="logo"
                            />
                            <img onClick={() => setSidebarOpen(false)} className="w-7" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZ0lEQVR4nO3cy27TQBSA4RPKRT6T9iG4qUW8CEgUWHQB7Chh0cwE3iAPCuIiqOAlsNG4GFqpFnGaNudk/k+aXRY5+jXjyI4sAgAAAAAAAAAAAAAA1mB+XXaO7sr29L6IjMSt+TUZx912ljyTSyG9khC/S0jNn/VFqvhMvKlmzyXEr//miN8kTF+KvxipPhWjW7VonIgXGie9c4T4QpwYSUjH5wzhK4r2xujWsY9jOF8v+ofwEUX/G+Nkbc/uiXk76c4CQexG0QVj5HXr/W1xYCQaP7qMogNiaPrg48jKdPZYQvzlKooOiJFn0/hIXNH0elCUcTxa33eNh26+68ZH0VJieIiipcWwHEVLjWExipYew1IUJYadKEoMO1GUGHaiKDHsRFFi2ImixLATRYlhJ4oSw04UJYadKEoMO1GUGIYeGKV60GctPBArYKc0a7s/VhRdWRRiGIpSszPsRKmJYSdKTYzLpIN+2hLEWIyGKPZiNESxF6Mhir0YDVEuHmPCrRMrdIkbhRb+YrSR9AJ3bYliKEaHKCuyyucZyvFlJ0aHKEu6zCd9yk6xE6NDlAVd5TNwZafYidEhSo91/jtE2Sl2YnSIYihGp/golmJI6VEsxig2iuUYxUXxEKOYKFV6uvEvn6mm++LDwVb7fkVPMZaL8rmd1bz89k7PW18HHF8u3igXZg/dxhgaZfxuT+yb3xSNP90cU8sfXz/aWV3Q9Kb3YughxpkoPTsl7yJXcpSzO+WTVOmJeFNN99sL+Omd4S7GX29vyDg9OHnVuIdfJH0OttoZ8ix5JgAAAAAAAAAAAAAAIFftNzm+PJEnw4B9AAAAAElFTkSuQmCC" />
                        </div>

                        {/* Sidebar Links */}
                        <ul className="flex flex-col gap-6 p-6 items-center font-medium">
                            <Link to="/" className="cursor-pointer">HOME</Link>
                            <Link to="/allDoctors" className="cursor-pointer">ALL DOCTORS</Link>
                            <Link to="/about" className="cursor-pointer">ABOUT</Link>
                            <Link to="/contact" className="cursor-pointer">CONTACT</Link>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
