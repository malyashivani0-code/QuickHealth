import { useGetMyAppointmentsQuery ,useDeleteAppointmentsMutation} from "../services/Api";
import Navbar from "./Navbar";
import Footer from "./Footer";
import toast from "react-hot-toast";
import MyAppointmentSkeleton from "../skeleton/MyAppointmentSkeleton";
const MyAppointments = () => {
   
  const [deleteAppointment] =useDeleteAppointmentsMutation();
  const handleDelete = async (id) => {
    
    try{
      await deleteAppointment(id).unwrap();
      toast.success("Appointment Deleted Succesfully")
    }
    catch(error){
      toast.error("something went wrong")
    }
  };

  const userId = localStorage.getItem("userId");

  const { data, isLoading } = useGetMyAppointmentsQuery(userId, {
    skip: !userId,
  });
  if (isLoading) return <MyAppointmentSkeleton/>;
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split("_");

    const dateObj = new Date(year, month - 1, day);

    const monthName = dateObj.toLocaleString("default", {
      month: "short",
    });

    return `${day} ${monthName}`;
  };



  return (
    <div className="flex flex-col min-h-screen mx-4 sm:mx-[10%]">
      <Navbar />
      <div>
        <p className="pb-3 mt-12 font-medium text-zinc-700 border-b border-b-gray-200">
          My appointments
        </p>
        <div>
          {data?.appointments?.length > 0 ? (
            data.appointments.filter((item)=>!item.cancelled).map((item) => (
              <div
                key={item._id}
                className="grid grid-cols-1 gap-4 sm:flex sm:gap-6 py-2 border-b border-b-gray-200"
              >
                 {/* Doctor Image  */}
                <div>
                  {item.doctor?.user?.image ? (
                    <img
                      src={item.doctor.user.image}
                      alt="doctor"
                      className="w-32 bg-indigo-50"
                    />
                  ) : null}
                </div>

                {/* Doctor Details */}
                <div className="flex-1 text-sm text-zinc-600">
                  <p className="font-semibold text-neutral-800">
                    {item.doctor?.user?.name}
                  </p>
                  <p>{item.doctor?.specialty}</p>
                  <div className="my-2">
                    <p className="font-medium mt-1 text-zinc-700">Address:</p>
                    <p className="text-xs">{item.doctor?.user?.address?.line1}</p>
                    <p className="text-xs">{item.doctor?.user?.address?.line2}</p>
                  </div>

                  <p>
                    <span className="text-neutral-700 font-medium text-sm">Date & Time: </span>{formatDate(item.slotDate)} | {item.slotTime}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-2 justify-center">
                  <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-[#4c6ae0] cursor-pointer hover:text-white transition-all duration-300">
                    Pay Online
                  </button>

                  <button onClick={()=>handleDelete(item._id)} className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 cursor-pointer hover:text-white transition-all duration-300">
                    Cancel Appointment
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="mt-4 text-zinc-500">No appointments found</p>
          )}
        </div>
      </div>
      <Footer />
    </div >
  );
};

export default MyAppointments;