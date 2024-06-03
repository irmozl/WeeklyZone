import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa'
import { useState } from 'react'
import { useRegisterMutation } from '../store/apis/authApi.js'
import { Navigate } from 'react-router-dom';


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {setShowPassword(!showPassword)};

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleShowConfirmPassword = () => {setShowConfirmPassword(!showConfirmPassword)};

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const[ register, {isLoading,isError,isSuccess}] = useRegisterMutation()

  const handleChange = (e) => {
    const {name,value} = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const validateForm = () => {
    let formErrors = {}

    if(!formData.email.includes('@')) {
      formErrors.email = 'Invalid email address'
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/
    if(!passwordRegex.test(formData.password)) {
      formErrors.password = 'Password must be at least 8 characters long, contain at least one uppercase letter, and one number'
    }

    if(formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(formErrors)
    return Object.keys(formErrors).length === 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()){
      return
    } 
    try {
      await register(formData).unwrap()
      alert('Register succesfull')
      Navigate('/dashboard')
    }
    catch(error) {
      console.error('Failed to register:', error)
      alert('Registration failed');
    }
  }

    return (
      <div className=" bg-purple-100 h-screen flex font-inter ">
        
        <div className="flex flex-col w-1/4 bg-white items-start rounded-2xl m-auto px-8 py-8 min-w-96">
          <header className="font-semibold text-4xl pt-4 pb-7">Sign Up</header>

          <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col items-start w-full mb-4 ">
            <span className=" font-semibold text-xl pb-3 pl-2">First Name</span>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Your first name" className=" focus:outline-none focus:bg-gray-200 bg-gray-100 hover:bg-gray-200 rounded-lg h-10 w-42 pl-4 w-full"/>
          </div>

          <div className="flex flex-col items-start w-full mb-4 ">
            <span className=" font-semibold text-xl pb-3 pl-2">Last Name</span>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Your last name" className="focus:outline-none focus:bg-gray-200 bg-gray-100 hover:bg-gray-200 rounded-lg h-10 w-42 pl-4 w-full"/>
          </div>

          <div className="flex flex-col items-start w-full mb-4 ">
            <span className=" font-semibold text-xl pb-3 pl-2">Email</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" className=" focus:outline-none focus:bg-gray-200 bg-gray-100 hover:bg-gray-200 rounded-lg h-10 w-42 pl-4 w-full"/>
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>

          <div className="flex flex-col items-start w-full mb-4 ">
            <span className=" font-semibold text-xl pb-3 pl-2">Password</span>
            <div className="relative w-full">
              <input type={showPassword ? "text" : "password"} placeholder="*******" name='password' value={formData.password} onChange={handleChange} className= "focus:outline-none focus:bg-gray-200 bg-gray-100 hover:bg-gray-200 rounded-lg h-10 w-full pl-5 pr-10"/>
              <button type="button" onClick={toggleShowPassword} className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-gray-200 p-2 rounded">{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</button>
            </div>
            {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
          </div>

          <div className="flex flex-col items-start w-full mb-8 ">
            <span className=" font-semibold text-xl pb-3 pl-2">Confirm Password</span>
            <div className="relative w-full">
              <input type={showConfirmPassword ? "text" : "password"} name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} placeholder="*******" className="focus:outline-none focus:bg-gray-200 bg-gray-100 hover:bg-gray-200 rounded-lg h-10 w-full pl-5 pr-10"/>
              <button type="button" onClick={toggleShowConfirmPassword} className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-gray-200 p-2 rounded">{showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}</button>
            </div>
            {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
          </div>

          <button type='submit' className="w-full mb-3 font-semibold text-xl py-2 text-white bg-sky-700 hover:bg-sky-600 rounded-lg flex justify-center place-items-center">
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
          </form>
          <div className="m-auto">Already have an account? <a href="/" className=" font-semibold text-sky-700 ml-2 hover:text-sky-500" >Log in.</a></div>
          
        </div>
      </div>
    );
  };
  
  export default SignUp;