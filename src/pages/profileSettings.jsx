import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

const ProfileSettings = () => {
  
  const [phoneNumber ,setPhoneNumber] = useState('');
  const [valid, setValid] = useState(true);

  const handleChangePhone = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  }

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{12}$/;
    return phoneNumberPattern.test(phoneNumber)
  }

    return (
      <div className="font-inter bg-[#FAFAFA] w-screen md:overflow-hidden overflow-y-scroll">
        <div className="md:m-20 m-10 md:mx-32 flex flex-col gap-7 justify-between"> 







        <div className="flex justify-start ">
          <header className="font-semibold text-4xl">Profile Settings</header>
        </div>

        <div className="flex justify-start items-center gap-8">
          <div>
            <img src="/car.jpg" alt="" className="rounded-full size-32"/>
          </div>
          <div className="flex flex-col gap-1">
            <p className=" font-semibold text-2xl">Batuhan Işık</p>
            <p className=" text-base">Project Manager</p>
          </div>
        </div>

        <div className="md:flex  gap-10 w-full mt-3 ">
          <div className="flex items-center w-full flex-col">
            <div className="flex flex-col items-start mb-4 w-full">
              <span className=" font-semibold text-xl pb-3 pl-2">First Name</span>
              <input type="text" name="" id="" placeholder="Your first name" className=" focus:outline-none focus:bg-gray-200 bg-gray-100 hover:bg-gray-200 rounded-lg h-12  pl-4 w-full border border-[#C8C8C8]"/>
            </div>
            <div className="flex flex-col items-start mb-4 w-full">
              <span className=" font-semibold text-xl pb-3 pl-2">Company</span>
              <input type="text" name="" id="" placeholder="Your Company" className=" focus:outline-none focus:bg-gray-200 bg-gray-100 hover:bg-gray-200 rounded-lg h-12  pl-4 w-full border border-[#C8C8C8]"/>
            </div>
            <div className="flex flex-col items-start mb-4 w-full">
              <span className=" font-semibold text-xl pb-3 pl-2">Country of Residence</span>
              <input type="text" name="" id="" placeholder="Your Country of Residence" className=" focus:outline-none focus:bg-gray-200 bg-gray-100 hover:bg-gray-200 rounded-lg h-12  pl-4 w-full border border-[#C8C8C8]"/>
            </div>
            <div className="flex flex-col items-start mb-4 w-full">
              <span className=" font-semibold text-xl pb-3 pl-2">Departman</span>
              <input type="text" name="" id="" placeholder="Your Department" className=" focus:outline-none focus:bg-gray-200 bg-gray-100 hover:bg-gray-200 rounded-lg h-12  pl-4 w-full border border-[#C8C8C8]"/>
            </div>
          </div>
          <div className="flex items-center w-full flex-col ">
            <div className="flex flex-col items-start mb-4 w-full ">
              <span className=" font-semibold text-xl pb-3 pl-2">Last Name</span>
              <input type="text" name="" id="" placeholder="Your last name" className=" focus:outline-none focus:bg-gray-200 bg-gray-100 hover:bg-gray-200 rounded-lg h-12  pl-4 w-full border border-[#C8C8C8]"/>
            </div>
            <div className="flex flex-col items-start mb-4 w-full ">
              <span className=" font-semibold text-xl pb-3 pl-2">Job Title</span>
              <input type="text" name="" id="" placeholder="Your Job Title" className=" focus:outline-none focus:bg-gray-200 bg-gray-100 hover:bg-gray-200 rounded-lg h-12  pl-4 w-full border border-[#C8C8C8]"/>
            </div>
            <div className="flex flex-col items-start mb-4 w-full ">
              <span className=" font-semibold text-xl pb-3 pl-2">Location</span>
              <input type="text" name="" id="" placeholder="Your Location"  className=" focus:outline-none focus:bg-gray-200 bg-gray-100 hover:bg-gray-200 rounded-lg h-12  pl-4 w-full border border-[#C8C8C8]"/>
            </div>
            <div className="flex flex-col items-start mb-4 w-full ">
              <span className=" font-semibold text-xl pb-3 pl-2">Phone</span>
              <div className="flex flex-col items-start w-full gap-1">
                  <PhoneInput country={'tr'} value={phoneNumber} onChange={handleChangePhone} containerClass=""  inputClass=" !focus:bg-gray-200 !bg-gray-100 !hover:bg-gray-200 !rounded-lg !h-12 !w-full !pl-14 !border !border-[#C8C8C8]" 
                  buttonClass=" bg-gray-100 h-12 w-12 hover:bg-gray-200 border border-[#C8C8C8]" dropdownClass="bg-gray-100 h-32 border border-[#C8C8C8]"/>
                  {!valid && <p className="text-red-400 -mb-7">*Please enter a valid phone number.</p>}
              </div>
            </div>
          </div>
        </div>


        <div>
          <button className="border-2 border-blue-500 text-blue-500 p-3 px-6 rounded-lg font-bold hover:bg-blue-500 hover:text-white">
            Save Changes
          </button>
        </div>
     




        </div>
      </div>
    );
  };
  
  export default ProfileSettings;

  // <div className="flex flex-col items-start mb-4 ">
  //   <span className=" font-semibold text-xl pb-3 pl-2">First Name</span>
  //   <input type="text" name="" id="" placeholder="Your first name" className=" focus:outline-none focus:bg-gray-200 bg-gray-100 hover:bg-gray-200 rounded-lg h-12  pl-4 w-full border border-[#C8C8C8]"/>
  // </div>