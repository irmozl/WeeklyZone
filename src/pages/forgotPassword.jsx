const ForgotPassword = () => {
    return(
        <div className=" bg-purple-100 h-screen flex  font-inter">
        
        <div className="flex flex-col w-1/4 bg-white items-start rounded-2xl m-auto px-8 py-8 min-w-96">

          <header className="font-semibold text-4xl pt-4 pb-2">Change Password</header>
          <div className="mb-4 text-gray-600">Please enter your email address to receive our link.</div>

          <form className='w-full'>
            <div className="flex flex-col items-start w-full mb-7 ">
             <span className=" font-semibold text-xl pb-3 pl-2">Email</span>
              <input type="email" name="" id="email" placeholder="Your email" className=" focus:outline-none focus:bg-gray-200 bg-gray-100 rounded-lg h-10 w-42 pl-5 w-full hover:bg-gray-200"/>
            </div>


             <button type='submit' className="w-full mb-3 font-semibold text-xl py-2 text-white bg-sky-700 hover:bg-sky-600 rounded-lg flex justify-center place-items-center">Send Email</button>
          
          </form>
          
          <div className="m-auto">Back to<a href="/" className=" font-semibold text-sky-700 ml-1 hover:text-sky-500" >Login</a></div>
          
        </div>
      </div>
    )
 };
  
export default ForgotPassword;