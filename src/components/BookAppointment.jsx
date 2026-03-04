import { useState } from "react";
import { useBookAppointmentMutation } from "../services/Api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const BookAppointment = ({ doctor }) => {

    const getNext7days = () => {
        const days = [];
        const today = new Date();

        for (let i = 0; i < 7; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);

            const fullDate = `${nextDate.getDate()}_${nextDate.getMonth() + 1
                }_${nextDate.getFullYear()}`;

            days.push({
                day: nextDate
                    .toLocaleDateString("en-US", { weekday: "short" })
                    .toUpperCase(),
                date: nextDate.getDate(),
                fullDate: fullDate,
            });
        }

        return days;
    };

    const daysArray = getNext7days();
    const [selectedDate, setSelectedDate] = useState(null);

    const generateTImeSlots = (startHour = 11, endHour = 21) => {
        const slots = [];

        const start = new Date();
        start.setHours(startHour, 0, 0);

        const end = new Date();
        end.setHours(endHour, 0, 0);

        while (start < end) {
            slots.push(
                start.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                })
            );

            start.setMinutes(start.getMinutes() + 30);
        }

        return slots;
    };
    const timeSlots = generateTImeSlots(11, 21);

    const [selectedTime, SetSelectedTime] = useState(null);
    const [bookAppointment] = useBookAppointmentMutation();
    const navigate = useNavigate();
    const token = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId")

    const handleBooking = async () => {
        if (selectedDate === null || selectedTime === null) {
            toast.error("please select date & time");
            return;
        }

        if (!doctor?.available) {
            toast.error("Doctor not Available");
            return;
        }
        try {
            await bookAppointment({
                doctorId: doctor._id,
                userId: userId,
                slotDate: selectedDate.fullDate,
                slotTime: selectedTime,
            }).unwrap();

            navigate("/myAppointments")
        }
        catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <p>Booking slots</p>
            <div className="flex gap-3 items-center w-full overflow-x-auto scrollbar-hide mt-4">
                {daysArray.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedDate(item)}
                        className={`text-center border border-gray-300 py-6 min-w-16 rounded-full cursor-pointer
            ${selectedDate?.fullDate === item.fullDate
                                ? "bg-[#4c6ae0] text-white"
                                : "bg-white text-black"
                            }`}>
                        <p>{item.day}</p>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
            <div className='flex gap-3 items-center w-full overflow-x-auto scrollbar-hide mt-5'>
                {timeSlots.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => SetSelectedTime(item)}
                        className={`text-sm font-light shrink-0 px-6 py-2.5 rounded-full border text-gray-400 border-gray-300  cursor-pointer ${selectedTime === item ? "bg-[#4c6ae0] text-white" : "bg-white text-black"}`}>
                        <p>{item}</p>
                    </div>

                ))}
            </div>
            <button onClick={() => { !token ? (navigate("/signin")) : handleBooking() }} className="bg-[#4c6ae0] cursor-pointer hover:bg-[#2d55f5] text-white text-sm font-medium px-14 py-3 rounded-full my-6">Book an appointment</button>
        </>
    )
}
export default BookAppointment
