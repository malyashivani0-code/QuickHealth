 import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-bold">Oops! Page Not Found (404)</h1>
          
          <button onClick={handleClick} className="btn btn-primary cursor-pointer">
            Go back to the homepage
          </button>
        </div>
      </div>
   
  );
};
export default NotFound;
