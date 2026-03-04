import { useGetDoctorsQuery } from "../services/Api";
import { useNavigate } from "react-router-dom";
import DoctorSkeleton from "../skeleton/DoctorSekeleton";
const Doctors = () => {
  const { data, isLoading, error } = useGetDoctorsQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
        <h2 className='text-3xl font-bold'>Top Doctors to Book</h2>
        <p className='sm:w-1/3 text-center text-sm font-medium'>
          Simply browse through our extensive list of trusted doctors.
        </p>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-5 gap-y-6 px-3 sm:px-0'>
          {[...Array(15)].map((_,index) => (
            <DoctorSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }
  if (error) return <p>Error loading doctors</p>;

  const doctors = data?.doctors || [];

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h2 className='text-3xl font-bold'>Top Doctors to Book</h2>
      <p className='sm:w-1/3 text-center text-sm font-medium '>Simply browse through our extensive list of trusted doctors.</p>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.map((doctor) => (
          <div
            key={doctor._id}
            onClick={() => navigate(`/doctor/${doctor._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all duration-300 p-4"
          >
            <img
              src={doctor.user?.image}
              alt={doctor.user?.name}
              className="bg-blue-50"
            />

            <h2 className="text-lg font-bold mt-3">
              {doctor.user?.name}
            </h2>
            <p className="text-gray-500">{doctor.specialty}</p>

            <div className='flex items-center gap-2 mt-2'>
              <p className={`w-2 h-2 rounded-full text-sm ${doctor.available ? "bg-green-600 text-green-600" : "bg-red-600 text-red-600"}`}></p>
              <p className={` text-sm ${doctor.available ? "text-green-600" : "text-red-600"}`}>
                {doctor.available ? "Available" : "Not Available"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;

