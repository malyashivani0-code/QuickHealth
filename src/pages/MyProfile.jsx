import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useGetUserByIdQuery, useUpdateUserMutation } from '../services/Api';
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { LuPackage } from 'react-icons/lu';
import ProfileSkeleton from '../skeleton/ProfileSkeleton';

const MyProfile = () => {
    const userId = localStorage.getItem("userId");
    const { data, isLoading } = useGetUserByIdQuery(userId, {
        skip: !userId
    });

    const [updateUser] = useUpdateUserMutation();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        gender: "",
        dateOfBirth: "",
        address: {
            line1: "",
            line2: ""
        }
    });
    //Backend data load
    useEffect(() => {
        if (data?.user) {
            setFormData({
                name: data.user.name || "",
                email: data.user.email || "",
                phone: data.user.phone || "",
                gender: data.user.gender || "",
                dateOfBirth: data.user.dateOfBirth
                    ? data.user.dateOfBirth.split("T")[0]
                    : "",
                address: {
                    line1: data.user.address?.line1 || "",
                    line2: data.user.address?.line2 || ""
                }
            });
        }
    }, [data]);
    // Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "line1" || name === "line2") {
            setFormData({
                ...formData,
                address: {
                    ...formData.address,
                    [name]: value
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    // Save / Edit Button
    const handleButtonClick = async () => {
        if (isEditing) {
            try {
                await updateUser({
                    id: userId,
                    ...formData
                }).unwrap(); 
                toast.success("Profile Updated Successfully");
            } catch (error) {
                console.log(error);
                toast.error("Update Failed");
                return;
            }
        }
        setIsEditing(!isEditing);
    };

    if (isLoading) return <ProfileSkeleton/>;

    return (
        <div className='flex flex-col min-h-screen mx-4 sm:mx-[10%]'>
            <Navbar />
            <div className='flex items-start justify-center'>
                <div className='w-full max-w-4xl bg-white px-8 pb-8 rounded-lg shadow-lg'>
                    <div>
                        <div className='mt-4'>
                            <p className='text-2xl font-bold text-center'>My Profile</p>
                        </div>
                        <div className='mt-6'>
                            <div>
                                <div className='flex flex-1 flex-col gap-1 mb-4  font-semibold'>
                                    <label htmlFor="name">Name</label>
                                    <div className='relative'>
                                        <input type="text" id='name' name='name' placeholder='your name' autoComplete='off' className='
                                        border rounded px-3 py-2 outline-none w-full'  value={formData.name}
                                            onChange={handleChange} disabled={!isEditing} />
                                    </div>
                                </div>
                            </div>
                            <h2 className='text-lg font-bold text-gray-700 underline'>Contact Information</h2>
                            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div>
                                    <div className='flex flex-1 flex-col gap-1  font-semibold'>
                                        <label htmlFor="phone">phone</label>
                                        <div className='relative'>
                                            <input type="text" id='phone' name='phone' placeholder='Enter your phone number' autoComplete='off' className='
                                        border rounded px-3 py-2 outline-none w-full'  value={formData.phone}
                                                onChange={handleChange} disabled={!isEditing} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-1 flex-col gap-1  font-semibold'>
                                        <label htmlFor="email">Email</label>
                                        <div className='relative'>
                                            <input type="email" id='email' name='email' placeholder='Enter your email' autoComplete='off' className='
                                        border rounded px-3 py-2 outline-none w-full' value={formData.email}
                                                onChange={handleChange} disabled={!isEditing} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <h2 className='text-lg font-bold text-gray-700 underline'>Basic Information</h2>
                            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div>
                                    <div className='flex flex-1 flex-col gap-1  font-semibold'>
                                        <label htmlFor="gender">Gender</label>
                                        <div className='relative'>
                                            <select id='gender' name='gender' value={formData.gender}
                                                onChange={handleChange} disabled={!isEditing} className='
                                        border rounded px-3 py-2 outline-none w-full '>
                                                <option value="Select Gender">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-1 flex-col gap-1 font-semibold'>
                                        <label htmlFor="dateOfBirth">Date of Birth</label>
                                        <div className='relative'>
                                            <input value={formData.dateOfBirth}
                                                onChange={handleChange} disabled={!isEditing} type="date" id='dateOfBirth' name='dateOfBirth' placeholder='Select Your DOB' autoComplete='off' className='
                                        border roundednpx-3 py-2 outline-none w-full' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <h2 className='text-lg font-bold text-gray-700 underline'>Address Information</h2>
                            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div>
                                    <div className='flex flex-1 flex-col gap-1 font-semibold'>
                                        <label htmlFor="addressLine1">Address Line 1</label>
                                        <div className='relative'>
                                            <input value={formData.address.line1}
                                                onChange={handleChange} disabled={!isEditing} type="text" id='line1' name='line1' placeholder='Enter Your address line 1' autoComplete='off' className='
                                        border rounded px-3 py-2 outline-none w-full' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-1 flex-col gap-1 font-semibold'>
                                        <label htmlFor="addressLine2">Address Line 2</label>
                                        <div className='relative'>
                                            <input value={formData.address.line2}
                                                onChange={handleChange} disabled={!isEditing} type="text" id='line2' name='line2' placeholder='Enter Your address line 2' autoComplete='off' className='
                                        border rounded px-3 py-2 outline-none w-full'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-6 text-center'>
                            <button onClick={handleButtonClick}
                                className="bg-[#4c6ae0] text-white px-6 py-2 rounded-md hover:bg-[#3658dd] transition-all">
                                {isEditing ? "Save Changes" : "Edit Profile "}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyProfile