import { Link } from "react-router-dom"
import { useFormik } from "formik"
import { LogInSchema } from "../schemas/signin.js"
import {  useLoginMutation } from "../services/Api.js"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"

const CreateAccount = () => {
    const [registerUser] = useLoginMutation();

    const navigate = useNavigate();
    const initialValues = {
        email: "",
        password: "",
    };

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: LogInSchema,

        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await registerUser(values).unwrap();
                localStorage.setItem("userId", response.userId);
                localStorage.setItem("accessToken", response.tokens.access);
                localStorage.setItem("refreshToken", response.tokens.refresh);
                 
               

                toast.success("login successful")
                resetForm();
                navigate("/")
            }
            catch (error) {
                toast.error(
                    error?.data?.message || "Login Failed"
                );
            }

        }
    });


    return (
        <div className="flex flex-col min-h-screen mx-4 sm:mx-[10%]">
                <Navbar/>
                <div className="bg-[#f7f8ff] w-full flex justify-center items-center px-4 sm:px-6">

            <div className="bg-[#FFFFFF] w-full max-w-sm px-5 my-5 sm:px-10 md:px-14 py-6 sm:py-7 rounded-xl shadow-sm">

                <div className="text-center flex flex-col gap-2.5 mb-5">
                    <h2 className="text-2xl sm:text-3xl font-bold font-[Inter] text-[#131523]">
                        Sign In
                    </h2>
                    <p className="text-[#5A607F] font-[Inter] font-normal text-sm sm:text-base">
                        Please login to book appointment
                    </p>
                </div>

                <form onSubmit={handleSubmit}>

                    {/* Email */}
                    <div className="flex flex-col mb-5 font-[Inter] text-[#5A607F]">
                        <label htmlFor="email" className="mb-1 text-sm">
                            Email
                        </label>
                        <input
                            className="border border-[#D9E1EC] rounded px-3 py-2 outline-none text-sm"
                            type="email"
                            autoComplete="off"
                            name="email"
                            id="email"
                            placeholder="Enter Email Address"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email ? (
                            <p className="text-red-700 text-xs mt-1">{errors.email}</p>
                        ) : null}
                    </div>

                    {/* Password */}
                    <div className="flex flex-col mb-5 font-[Inter] text-[#5A607F]">
                        <label htmlFor="password" className="mb-1 text-sm">
                            Password
                        </label>
                        <input
                            className="border border-[#D9E1EC] rounded px-3 py-2 outline-none text-sm"
                            type="password"
                            autoComplete="off"
                            name="password"
                            id="password"
                            placeholder="Enter Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.password && touched.password ? (
                            <p className="text-red-700 text-xs mt-1">{errors.password}</p>
                        ) : null}
                    </div>

                    {/* Button */}
                    <button
                        className="w-full text-center bg-[#4c6ae0] text-white py-2.5 rounded-full mb-5 cursor-pointer text-sm sm:text-base"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? "signing..." : "Sign In"}
                    </button>

                    <div className="text-center w-full font-[Inter] mb-2 text-xs sm:text-sm">
                        <p className="text-[#5A607F]">
                            Create an new account
                            <Link className="text-[#1E5EFF] px-1 underline" to="/signup">
                                Create here
                            </Link>
                        </p>
                    </div>

                </form>
            </div>
        </div>
                <Footer/>
            </div>
        
    )

}

export default CreateAccount