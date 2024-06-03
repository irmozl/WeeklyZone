import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {setShowPassword(!showPassword)};

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
   
    if (email === 'admin@gmail.com' && password === '0') {
      navigate('/dashboard')
    } else {
      toast.error('Invalid username or password!', {
        position: 'top-center', 
        className: "",   //tailwind ile özelleştirebilirim burda 
      })
    }
  }

    return (
      <div className=" bg-purple-100 h-screen flex font-inter ">

        <div className="flex flex-col w-1/4 bg-white items-start rounded-2xl m-auto px-8 py-8 min-w-96">
          <header className="font-semibold text-4xl pt-4 pb-7">Log In</header>

          <form onSubmit={handleLogin} className='w-full'>
            <div className="flex flex-col items-start w-full mb-4 ">
             <span className=" font-semibold text-xl pb-3 pl-2">Email</span>
              <input type="email" name="" id="email" placeholder="Your email" className=" focus:outline-none focus:bg-gray-200 bg-gray-100 rounded-lg h-10 w-42 pl-5 w-full hover:bg-gray-200" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="flex flex-col items-start w-full mb-4 ">
             <span className=" font-semibold text-xl pb-3 pl-2">Password</span>
              <div className="relative w-full">
                <input id='password' type={showPassword ? "text" : "password"} placeholder="*******" className="focus:outline-none focus:bg-gray-200 bg-gray-100 hover:bg-gray-200 rounded-lg h-10 w-full pl-5 pr-10" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="button" onClick={toggleShowPassword} className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-gray-200 p-2 rounded">{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</button>
              </div>
            </div>

             <div className="mb-4 w-full flex items-center justify-between text-sm">
              <div className="flex justify-center items-center">
                <input type="checkbox" name="" id="" className="size-4 mr-2 ml-1" /> 
                <a href="" className=" text-gray-600 hover:text-black">Remember me</a>
              </div>
              <a href="/forgotPassword" className="font-bold text-sky-700 hover:text-sky-500" >Forgot Password</a>
             </div>

             <button type='submit' className="w-full mb-3 font-semibold text-xl py-2 text-white bg-sky-700 hover:bg-sky-600 rounded-lg flex justify-center place-items-center">Sign Up</button>
          
          </form>
          
          <div className="m-auto">Don’t have an account?  <a href="/signUp" className=" font-semibold text-sky-700 ml-2 hover:text-sky-500" >Register.</a></div>
          
        </div>
        <ToastContainer />
      </div>
    );
  };
  
  export default Login;