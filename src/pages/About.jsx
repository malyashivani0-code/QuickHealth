import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const About = () => {
    return (
        <div className="flex flex-col min-h-screen mx-4 sm:mx-[10%]">
            <Navbar />
            <div>
                <div className="text-center text-2xl pt-10 text-gray-500">
                    <p>About <span className="text-gray-700 font-semibold">us</span></p>
                </div>

                <div className="my-10 flex flex-col md:flex-row gap-12">
                    <img className="w-full md:max-w-90" src="https://quickhealth.vercel.app/assets/aboutImage-MG9zrc7b.png"  />
                    <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
                        <p>
                            Welcome to QuickHealth, your trusted partner in revolutionizing the way you manage
                            your healthcare needs. At QuickHealth, we understand the complexities of scheduling
                            doctor appointments and maintaining health records, and we are here to make the
                            process simple, efficient, and hassle-free.
                        </p>
                        <p>
                            Our platform embodies a commitment to excellence in healthcare technology. We
                            continuously innovate and enhance QuickHealth, integrating the latest advancements
                            to provide a superior user experience. Whether you're booking your first appointment
                            or managing ongoing care, QuickHealth is designed to support you every step of the way,
                            ensuring a seamless and reliable healthcare journey.
                        </p>
                        <b className="text-gray-800">Our Vision</b>
                        <p>
                            At QuickHealth, our vision is to create a world where accessing healthcare
                            is as easy as a few clicks. We aim to bridge the gap between patients and
                            healthcare providers, empowering individuals to take control of their
                            health with convenience and confidence. With QuickHealth, care is always
                            just a moment away.
                        </p>
                    </div>
                </div>
                <div className="text-xl my-4">
                    <p className="text-gray-700 font-semibold">WHY<span> CHOOSE US</span></p>
                </div>
                <div className="flex flex-col md:flex-row mb-20">
                    <div
                        className="border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#4c6ae0] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
                        <b>Efficiency:</b>
                        <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                    </div>
                    <div
                        className="border border-gray-300 hover px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#4c6ae0] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
                        <b>Convenience:</b>
                        <p>Access to a network of trusted healthcare professionals in your area.</p>
                    </div>
                    <div
                        className="border border-gray-300 hover:border-none px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#4c6ae0] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
                        <b>Personalization:</b>
                        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    )
}
export default About
