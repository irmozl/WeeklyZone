
import { BsFillCheckCircleFill } from "react-icons/bs";

const EmailSent = () => {
    return(
        <div className=" bg-purple-100 h-screen flex font-inter ">
        
        <div className="flex flex-col w-1/4 bg-white items-center rounded-2xl m-auto px-8 pt-12 pb-5 min-w-96">

          <BsFillCheckCircleFill className="size-20 text-green-500 mb-3"/>
          <header className="font-semibold text-4xl pt-4 pb-2">We’ve sent your code.</header>
          <div className="m-auto">Back to<a href="/" className=" font-semibold text-sky-700 ml-1 hover:text-sky-500" >Login</a></div>
          
        </div>
      </div>
    )
 };
  
export default EmailSent;