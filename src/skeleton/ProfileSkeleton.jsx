import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ProfileSkeleton = () => {
  return (
    <div className='flex flex-col min-h-screen mx-4 sm:mx-[10%] animate-pulse'>
     <Navbar/>

      <div className='flex items-start justify-center'>
        <div className='w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg'>
          
          {/* Title */}
          <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-8"></div>

          {/* Name Field */}
          <div className="mb-6">
            <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
            <div className="h-10 bg-gray-200 rounded w-full"></div>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <div className="h-6 bg-gray-200 rounded w-40 mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          </div>

          {/* Basic Info */}
          <div className="mb-6">
            <div className="h-6 bg-gray-200 rounded w-40 mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          </div>

          {/* Address Info */}
          <div className="mb-6">
            <div className="h-6 bg-gray-200 rounded w-40 mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center mt-6">
            <div className="h-10 w-40 bg-gray-200 rounded-md"></div>
          </div>

        </div>
      </div>
      <Footer/>

    </div>
  );
};

export default ProfileSkeleton;