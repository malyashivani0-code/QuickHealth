import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { SignUpSchema } from "../schemas/register.js";
import { useSignupMutation } from "../services/Api";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";


const CreateAccount = () => {
    const [signup, { isLoading}] = useSignupMutation();
    const navigate = useNavigate();
 
    const initialValues = {
        name: "",
        email: "",
        password: "",
    };

    const {values,errors,touched,handleBlur,handleChange,handleSubmit,} = useFormik({
        initialValues,
        validationSchema: SignUpSchema,

        onSubmit: async (values, { resetForm }) => {
            try {
                await signup(values).unwrap();

                toast.success("Account created successfully 🎉");
                resetForm();
                navigate("/signin");

            } catch (error) {
                toast.error(
                    error?.data?.message || "Something went wrong"
                );
            }
        },
    });

    return (
        <div className="flex flex-col min-h-screen mx-4 sm:mx-[10%]">
            <Navbar />

            <div className="flex justify-center items-center px-4 sm:px-6">

                <div className="bg-[#FFFFFF] w-full max-w-sm px-5 my-5 sm:px-10 md:px-14 py-6 sm:py-8 rounded-lg shadow-sm">

                    <div className="text-center flex flex-col gap-2.5 mb-5">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#131523]">
                            Create an Account
                        </h2>
                        <p className="text-[#5A607F] text-sm sm:text-base">
                            Have an Account?
                            <Link className="text-[#1E5EFF] px-1" to="/signin">
                                Sign In
                            </Link>
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>

                        {/* Name */}
                        <div className="flex flex-col mb-4 text-[#5A607F]">
                            <label htmlFor="name" className="mb-1 text-sm">
                                Full Name
                            </label>
                            <input
                                className="border border-[#D9E1EC] rounded px-3 py-2 outline-none text-sm"
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter Full Name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.name && touched.name && (
                                <p className="text-red-600 text-xs mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="flex flex-col mb-4 text-[#5A607F]">
                            <label htmlFor="email" className="mb-1 text-sm">
                                Email
                            </label>
                            <input
                                className="border border-[#D9E1EC] rounded px-3 py-2 outline-none text-sm"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter Email Address"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email && (
                                <p className="text-red-600 text-xs mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div className="flex flex-col mb-5 text-[#5A607F] relative">
                            <label htmlFor="password" className="mb-1 text-sm">
                                Password
                            </label>
                            <input
                                className="border border-[#D9E1EC] rounded px-3 py-2 outline-none text-sm"
                                type="text"
                                name="password"
                                id="password"
                                placeholder="Create Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                           
                            {errors.password && touched.password && (
                                <p className="text-red-600 text-xs mt-1">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#4c6ae0] hover:bg-[#2d55f5] text-white py-2.5 rounded-full mb-5 cursor-pointer text-sm sm:text-base disabled:opacity-60"
                        >
                            {isLoading ? "Creating..." : "Create Account"}
                        </button>

                        <div className="text-center w-full mb-2 text-xs sm:text-sm">
                            <p className="text-[#5A607F]">
                                By creating account, you agree to our
                            </p>
                            <a className="text-[#1E5EFF]" href="#">
                                Terms of Service
                            </a>
                        </div>

                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CreateAccount;