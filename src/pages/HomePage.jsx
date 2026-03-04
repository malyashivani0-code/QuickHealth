import Footer from "../components/Footer"
import Main from "../components/Main"
import Navbar from "../components/Navbar"

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen mx-4 sm:mx-[10%]">
        <Navbar/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default HomePage