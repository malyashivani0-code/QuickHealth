const Footer = () => {
  return (
    <footer className=" mt-16">

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 mt-20 mb-4 text-sm">

        {/* Logo + Description */}
        <div className="space-y-4">
          <img 
            className="w-52"
            src="https://quickhealth.vercel.app/assets/logo-C1shQAkN.svg" 
            alt="logo" 
          />
          <p className="text-gray-600 text-sm font-medium ">
            QuickHealth – Simplifying healthcare appointments for everyone. 
            Book, manage, and track your doctor visits effortlessly with our 
            secure and user-friendly platform. Stay healthy, stay organized!
          </p>
        </div>

        {/* Company Links */}
        <div className="space-y-4">
          <p className="text-xl font-medium">COMPANY</p>
          <ul className="flex flex-col text-sm font-medium gap-2 text-gray-600">
            <li className="hover:text-black cursor-pointer transition">Home</li>
            <li className="hover:text-black cursor-pointer transition">About us</li>
            <li className="hover:text-black cursor-pointer transition">Contact us</li>
            <li className="hover:text-black cursor-pointer transition">Privacy policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <p className="text-xl font-medium">GET IN TOUCH</p>
          <ul className="flex text-sm font-medium flex-col gap-2 text-gray-600">
            <li>+91 9876543210</li>
            <li>contact@quickhealth.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t mt-12 pt-6 text-center text-gray-500 text-xs sm:text-sm">
        2026 QuickHealth. All Rights Reserved.
      </div>

    </footer>
  )
}

export default Footer
