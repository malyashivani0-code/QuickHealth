import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const MyAppointmentSkeleton = () => {
  return (
    <div className="flex flex-col min-h-screen mx-4 sm:mx-[10%] animate-pulse">
      <Navbar />

      <div>
        {/* Title */}
        <div className="pb-3 mt-12 border-b border-b-gray-200">
          <div className="h-6 w-40 bg-gray-300 rounded"></div>
        </div>

        {/* Appointment Items */}
        {[1].map((item) => (
          <div
            key={item}
            className="grid grid-cols-1 gap-4 sm:flex sm:gap-6 py-4 border-b border-b-gray-200"
          >
            {/* Doctor Image Skeleton */}
            <div className="w-32 h-32 bg-gray-300 rounded"></div>

            {/* Doctor Details Skeleton */}
            <div className="flex-1 space-y-3">
              <div className="h-5 w-48 bg-gray-300 rounded"></div>
              <div className="h-4 w-32 bg-gray-300 rounded"></div>

              <div className="space-y-2 mt-3">
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
                <div className="h-3 w-40 bg-gray-300 rounded"></div>
                <div className="h-3 w-32 bg-gray-300 rounded"></div>
              </div>

              <div className="h-4 w-56 bg-gray-300 rounded mt-2"></div>
            </div>

            {/* Buttons Skeleton */}
            <div className="flex flex-col gap-3 justify-center">
              <div className="h-10 w-40 bg-gray-300 rounded"></div>
              <div className="h-10 w-40 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}
export default MyAppointmentSkeleton;