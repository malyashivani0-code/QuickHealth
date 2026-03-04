import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen mx-4 sm:mx-[10%]">
            <Navbar/>
            <div>
               <div className="text-center text-2xl pt-10 text-gray-500">
               <p>CONTACT <span className="text-gray-700 font-semibold">US</span></p>
               </div>

               <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-20 text-sm">
                 <img className="w-full md:max-w-90" src="https://quickhealth.vercel.app/assets/contactImage-IJu_19v_.png"/>
                 <div className="flex flex-col justify-center items-start gap-6">
                    <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
                    <p className="text-gray-500">54709 Willms Station <br/>Suite 350, Washington, USA</p>
                    <p className="text-gray-500">Contact: +91 9876543210 <br/>Email: contact@quickhealth.com</p>
                 </div>
               </div>
            </div>
            <Footer/>
        </div>
  )
}

export default Contact