
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useGetBySpecialtyQuery } from "../services/Api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



const AllDoctors = () => {
    const navigate=useNavigate();
    const [selectedSpecialty, setSelectedSpecialty] = useState("");

    const { data } = useGetBySpecialtyQuery(
        selectedSpecialty
            ? { specialty: selectedSpecialty, limit: 5, offset: null }
            : undefined  
    );
    useEffect(()=>{
        if(data){
            console.log(data);
        }
    },[data])
    
    
    const doctors = data?.doctors||[];
    useEffect(()=>{
        if(doctors.length>0){
             console.log(doctors);
        }
    },[doctors])
   
    
    return (
        <div className="flex flex-col min-h-screen mx-4 sm:mx-[10%]">
            <Navbar />
            <div>
                <p className="text-gray-600 font-semibold">Browse through the doctors specialist.</p>
                <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
                    <div className="flex flex-col gap-4 text-sm text-gray-600">
                        {[
                            "General Physician",
                            "Gynecologist",
                            "Dermatologist",
                            "Pediatricians",
                            "Neurologist",
                            "Gastroenterologist",
                        ].map((item) => (
                            <p
                                key={item}
                                onClick={() => setSelectedSpecialty(item)}
                                className={`w-auto pl-3 py-1.5 pr-16 border border-gray-300 font-medium rounded transition-all cursor-pointer 
                                ${selectedSpecialty === item
                                        ? "bg-indigo-100 text-black"
                                        : "bg-white text-gray-600"}`}
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                    <div className="w-full grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4 gap-y-6">
                        {doctors.map((doctor) => (
                            <div
                                key={doctor._id}
                                onClick={() => navigate(`/doctor/${doctor._id}`)}
                                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all">
                                <img
                                    src={doctor.user?.image}
                                    alt={doctor.user?.name}
                                    className="bg-blue-50"
                                />
                                <div className="p-4">
                                    <div className="flex items-center gap-2 text-sm text-center">
                                        <p className={`w-2 h-2 rounded-full  ${doctor.available ? "bg-green-600" : "bg-red-600"}`}></p>
                                        <p className={`text-sm ${doctor.available ? "text-green-600" : "text-red-600"}`}>
                                            {doctor.available ? "Available" : "Not Available"}
                                        </p>
                                    </div>
                                    <p className="text-gray-900 text-lg font-medium">{doctor.user?.name}</p>
                                    <p className="text-gray-600 text-sm">{doctor.specialty}</p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}

export default AllDoctors