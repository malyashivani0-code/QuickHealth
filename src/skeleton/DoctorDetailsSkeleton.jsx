import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const DoctorDetailsSkeleton = () => {
    return (
        <div className="flex flex-col min-h-screen mx-4 sm:mx-[10%] animate-pulse">
      <Navbar/>
            <div className="mt-10">
                <div className="flex flex-col sm:flex-row gap-4">

                    {/* Image Skeleton */}
                    <div className="w-full sm:max-w-72 h-72 bg-gray-300 rounded-lg"></div>

                    {/* Content Skeleton */}
                    <div className="flex-1 border border-gray-200 rounded-lg p-8 bg-white mx-2 sm:mx-0 -mt-20 sm:mt-0">

                        {/* Name */}
                        <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>

                        {/* Degree & Experience */}
                        <div className="flex gap-4 mb-4">
                            <div className="h-4 bg-gray-300 rounded w-40"></div>
                            <div className="h-4 bg-gray-300 rounded w-24"></div>
                        </div>

                        {/* About Title */}
                        <div className="h-5 bg-gray-300 rounded w-24 mb-3"></div>

                        {/* About Text */}
                        <div className="space-y-2">
                            <div className="h-3 bg-gray-300 rounded w-full"></div>
                            <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                            <div className="h-3 bg-gray-300 rounded w-4/6"></div>
                        </div>

                        {/* Fee */}
                        <div className="h-5 bg-gray-300 rounded w-40 mt-6"></div>
                    </div>
                </div>
            </div>

            {/* Appointment Section Skeleton */}
            <div className="sm:ml-72 sm:pl-4 mt-8">
                <div className="h-6 bg-gray-300 rounded w-48 mb-4"></div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="h-10 bg-gray-300 rounded"></div>
                    <div className="h-10 bg-gray-300 rounded"></div>
                    <div className="h-10 bg-gray-300 rounded"></div>
                </div>

                <div className="h-12 bg-gray-300 rounded w-40"></div>
            </div>
<Footer/>
        </div>
    )
}
export default DoctorDetailsSkeleton