import { useParams } from "react-router-dom";
import { useGetDoctorByIdQuery} from "../services/Api";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookAppointment from "./BookAppointment.jsx";
import DoctorDetailsSkeleton from "../skeleton/DoctorDetailsSkeleton.jsx";

const DoctorDetail = () => {

    const { id } = useParams();
    const { data, isLoading } = useGetDoctorByIdQuery(id);
    

    if (isLoading) return <DoctorDetailsSkeleton/>;

    const doctor = data?.doctor;
    return (
        <div className="flex flex-col min-h-screen mx-4 sm:mx-[10%]">
            <Navbar />
            <div className="mt-10">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div>
                        <img src={doctor?.user?.image} className="w-full sm:max-w-72 rounded-lg bg-[#4c6ae0]" alt="doctor" />
                    </div>

                    <div className="flex-1 border border-gray-400 rounded-lg p-8 bg-white mx-2 sm:mx-0 -mt-20 sm:mt-0">
                        <div className="flex item-center gap-2 text-2xl font-medium text-gray-900">
                            <h2>{doctor?.user?.name}</h2>
                            <img src="data:image/svg+xml,%3csvg%20width='25'%20height='25'%20viewBox='0%200%2025%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.4905%201.50034C9.1861%201.75975%209.03389%201.88948%208.87133%201.99843C8.4987%202.24818%208.08021%202.42152%207.64013%202.5084C7.44814%202.54632%207.24879%202.56222%206.8501%202.59403C5.84838%202.67398%205.3475%202.71394%204.92964%202.86154C3.96314%203.20292%203.20292%203.96314%202.86154%204.92964C2.71394%205.3475%202.67398%205.84838%202.59403%206.8501C2.56222%207.24879%202.54632%207.44814%202.5084%207.64013C2.42152%208.08021%202.24818%208.4987%201.99843%208.87133C1.88948%209.03389%201.75977%209.18609%201.50034%209.4905C0.848541%2010.2554%200.522628%2010.6378%200.331528%2011.0376C-0.110509%2011.9625%20-0.110509%2013.0375%200.331528%2013.9624C0.522641%2014.3623%200.848541%2014.7446%201.50034%2015.5095C1.75973%2015.8139%201.88948%2015.9661%201.99843%2016.1286C2.24818%2016.5013%202.42152%2016.9198%202.5084%2017.3599C2.54632%2017.5519%202.56222%2017.7513%202.59403%2018.1499C2.67398%2019.1516%202.71394%2019.6525%202.86154%2020.0704C3.20292%2021.0369%203.96314%2021.7971%204.92964%2022.1385C5.3475%2022.286%205.84838%2022.326%206.8501%2022.406C7.24879%2022.4378%207.44814%2022.4538%207.64013%2022.4916C8.08021%2022.5785%208.4987%2022.7519%208.87133%2023.0016C9.03389%2023.1105%209.18609%2023.2403%209.4905%2023.4996C10.2554%2024.1515%2010.6378%2024.4774%2011.0376%2024.6685C11.9625%2025.1105%2013.0375%2025.1105%2013.9624%2024.6685C14.3623%2024.4774%2014.7446%2024.1515%2015.5095%2023.4996C15.8139%2023.2403%2015.9661%2023.1105%2016.1286%2023.0016C16.5013%2022.7519%2016.9198%2022.5785%2017.3599%2022.4916C17.5519%2022.4538%2017.7513%2022.4378%2018.1499%2022.406C19.1516%2022.326%2019.6525%2022.286%2020.0704%2022.1385C21.0369%2021.7971%2021.7971%2021.0369%2022.1385%2020.0704C22.286%2019.6525%2022.326%2019.1516%2022.406%2018.1499C22.4378%2017.7513%2022.4538%2017.5519%2022.4916%2017.3599C22.5785%2016.9198%2022.7519%2016.5013%2023.0016%2016.1286C23.1105%2015.9661%2023.2403%2015.8139%2023.4996%2015.5095C24.1515%2014.7446%2024.4774%2014.3623%2024.6685%2013.9624C25.1105%2013.0375%2025.1105%2011.9625%2024.6685%2011.0376C24.4774%2010.6378%2024.1515%2010.2554%2023.4996%209.4905C23.2403%209.18609%2023.1105%209.03389%2023.0016%208.87133C22.7519%208.4987%2022.5785%208.08021%2022.4916%207.64013C22.4538%207.44814%2022.4378%207.24879%2022.406%206.8501C22.326%205.84838%2022.286%205.3475%2022.1385%204.92964C21.7971%203.96314%2021.0369%203.20292%2020.0704%202.86154C19.6525%202.71394%2019.1516%202.67398%2018.1499%202.59403C17.7513%202.56222%2017.5519%202.54632%2017.3599%202.5084C16.9198%202.42152%2016.5013%202.24818%2016.1286%201.99843C15.9661%201.88948%2015.8139%201.75977%2015.5095%201.50034C14.7446%200.848541%2014.3623%200.522641%2013.9624%200.331528C13.0375%20-0.110509%2011.9625%20-0.110509%2011.0376%200.331528C10.6378%200.522628%2010.2554%200.848541%209.4905%201.50034ZM17.9669%209.82893C18.3641%209.43163%2018.3641%208.7875%2017.9669%208.3902C17.5696%207.99292%2016.9254%207.99292%2016.5281%208.3902L10.4654%2014.453L8.47183%2012.4595C8.07454%2012.0623%207.4304%2012.0623%207.03312%2012.4595C6.63583%2012.8568%206.63583%2013.5009%207.03312%2013.8983L9.74598%2016.6111C10.1433%2017.0084%2010.7874%2017.0084%2011.1848%2016.6111L17.9669%209.82893Z'%20fill='%230016E1'/%3e%3c/svg%3e" alt="verified" />
                        </div>

                        <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
                            <div className="flex gap-4">
                                <p>{doctor?.degree} <span>-</span> {doctor?.specialty}</p>
                                <p>{doctor?.experience}</p>
                            </div>
                        </div>

                        <div>
                            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                                About
                                <img src="data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.5%200C3.80559%200%200%203.80554%200%208.5C0%2013.1944%203.80559%2017%208.5%2017C13.1945%2017%2017%2013.1944%2017%208.5C17%203.80554%2013.1945%200%208.5%200ZM8.5%2015.3C4.75049%2015.3%201.7%2012.2495%201.7%208.5C1.7%204.75049%204.75049%201.7%208.5%201.7C12.2496%201.7%2015.3%204.75049%2015.3%208.5C15.3%2012.2495%2012.2496%2015.3%208.5%2015.3ZM9.56436%205.1C9.56436%205.71628%209.11565%206.1625%208.50864%206.1625C7.87706%206.1625%207.43936%205.71628%207.43936%205.08821C7.43936%204.48456%207.88891%204.0375%208.50864%204.0375C9.11565%204.0375%209.56436%204.48456%209.56436%205.1ZM7.65186%207.65H9.35186V12.75H7.65186V7.65Z'%20fill='black'/%3e%3c/svg%3e" alt="Info" />
                            </p>
                            <p className="text-sm text-gray-500 max-w-175 mt-1">
                                {doctor?.about}
                            </p>
                        </div>

                        <p className="text-gray-500 font-medium mt-4">
                            Appointment fee :
                            <span> </span><i className="text-gray-600 fa-solid fa-indian-rupee-sign"><span> </span>{doctor?.fees}</i>
                        </p>
                    </div>
                </div>
            </div>

            <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
                <BookAppointment
                    doctor={doctor}
                />
            </div>
          {/* related doctors */}
            {/* <div className="flex flex-col items-center gap-4 my-16 text-gray-900  md-mx-10">
                <h3 className="text-3xl font-medium">Related Doctors</h3>
                <p className="sm:w-1/3 text-center text-sm">
                Simply browse through our extensive list of trusted doctors.
                </p>
                <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
                    <div className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all">
                        <img src="http://res.cloudinary.com/dui4sdtqc/image/upload/v1734014983/quickHealth/doctors/vtwdqgqmtqvouijvfczn.png"/>
                        <div className="p-4">
                            <div className="flex items-center gap-2 text-sm text-center text-red-500">
                                <p className="w-2 h-2 bg-red-500 rounded-full"></p>
                                <p>Not Available</p>
                            </div>
                            <p className="text-gray-900 text-lg font-medium">Dr. EMily larson</p>
                            <p className="text-gray-600 text-sm">Gyanocologist</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <Footer />
        </div >
    );
};


export default DoctorDetail;