import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";

const Tasks = () => {

    const [isOpenChooseProject, setIsOpenChooseProject] = useState(false);
    const dropdownChooseProject = () => {
      setIsOpenChooseProject(!isOpenChooseProject);
      setIsOpenFilter(false);
      setIsOpenSort(false); 
    };

    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const dropdownFilter = () => {
      setIsOpenFilter(!isOpenFilter);
      setIsOpenSort(false); 
      setIsOpenChooseProject(false);
    };

    const [isOpenSort, setIsOpenSort] = useState(false);
    const dropdownSort = () => {
      setIsOpenSort(!isOpenSort); 
      setIsOpenChooseProject(false);
      setIsOpenFilter(false);
    };
  
    return (
      <div className="w-screen h-max-screen bg-[#FAFAFA] flex flex-col font-inter">
        {/* header part */}
        <div className="flex items-center justify-between mb-10 m-24 lg:flex-row flex-col">
          <div className="flex gap-12 justify-start relative">
            <header className="font-semibold text-2xl" >Project Name Example</header>
            <button className="bg-blue-500 flex justify-between p-1 rounded-lg px-3 h-9 items-center gap-2 hover:bg-blue-600 " onClick={dropdownChooseProject}>
              <p className="text-white font-semibold">Choose Project</p>
              <img src="/dropdown.svg" alt="" />
            </button>
            {isOpenChooseProject&&(
              <div className=' bg-[#fafafa] w-80 shadow-custom h-80 absolute left-[139px] top-14 rounded-lg p-5 flex flex-col gap-3 justify-between z-10'>
                <div className='flex flex-col gap-4'>
                <div className='w-full h-10 rounded-lg flex items-center border-2 border-[#4382f86b] bg-white group'>
                  <input type="search" placeholder='Search' className='w-full h-full pl-3 rounded-lg  '/>
                  <IoIosSearch className='bg-white rounded-lg size-6 mr-3 text-gray-400' />
                </div>
                <div className='flex flex-col gap-1 overflow-y-scroll h-44'>
                  <div className='flex items-center justify-start gap-2 pl-3'>
                    <input type="checkbox" name="" id="" className='size-4 appearance-none border border-gray-300 rounded checked:bg-blue-500'/>
                    <p>Project Name 001</p>
                  </div>
                  <div className='flex items-center justify-start gap-2 pl-3'>
                    <input type="checkbox" name="" id="" className='size-4 appearance-none border border-gray-300 rounded checked:bg-blue-500'/>
                    <p>Project Name 001</p>
                  </div>
                  <div className='flex items-center justify-start gap-2 pl-3'>
                    <input type="checkbox" name="" id="" className='size-4 appearance-none border border-gray-300 rounded checked:bg-blue-500'/>
                    <p>Project Name 001</p>
                  </div>
                  <div className='flex items-center justify-start gap-2 pl-3'>
                    <input type="checkbox" name="" id="" className='size-4 appearance-none border border-gray-300 rounded checked:bg-blue-500'/>
                    <p>Project Name 001</p>
                  </div>
                  <div className='flex items-center justify-start gap-2 pl-3'>
                    <input type="checkbox" name="" id="" className='size-4 appearance-none border border-gray-300 rounded checked:bg-blue-500'/>
                    <p>Project Name 001</p>
                  </div>
                  <div className='flex items-center justify-start gap-2 pl-3'>
                    <input type="checkbox" name="" id="" className='size-4 appearance-none border border-gray-300 rounded checked:bg-blue-500'/>
                    <p>Project Name 001</p>
                  </div>
                  <div className='flex items-center justify-start gap-2 pl-3'>
                    <input type="checkbox" name="" id="" className='size-4 appearance-none border border-gray-300 rounded checked:bg-blue-500'/>
                    <p>Project Name 001</p>
                  </div>
                  <div className='flex items-center justify-start gap-2 pl-3'>
                    <input type="checkbox" name="" id="" className='size-4 appearance-none border border-gray-300 rounded checked:bg-blue-500'/>
                    <p>Project Name 001</p>
                  </div>
                  <div className='flex items-center justify-start gap-2 pl-3'>
                    <input type="checkbox" name="" id="" className='size-4 appearance-none border border-gray-300 rounded checked:bg-blue-500'/>
                    <p>Project Name 001</p>
                  </div>
                  <div className='flex items-center justify-start gap-2 pl-3'>
                    <input type="checkbox" name="" id="" className='size-4 appearance-none border border-gray-300 rounded checked:bg-blue-500'/>
                    <p>Project Name 001</p>
                  </div>
                  <div className='flex items-center justify-start gap-2 pl-3'>
                    <input type="checkbox" name="" id="" className='size-4 appearance-none border border-gray-300 rounded checked:bg-blue-500'/>
                    <p>Project Name 001</p>
                  </div>
                  <div className='flex items-center justify-start gap-2 pl-3'>
                    <input type="checkbox" name="" id="" className='size-4 appearance-none border border-gray-300 rounded checked:bg-blue-500'/>
                    <p>Project Name 001</p>
                  </div>
                </div>
                </div>
                <button className="bg-blue-500 flex p-1 rounded-lg px-3 w-full h-9 items-center justify-center gap-2 hover:bg-blue-600">
                  <p className="text-white font-semibold">Save</p>
                </button>
              </div>
            )}
          </div>
          
          <div className="flex gap-3 relative">
            <button  className="bg-[#FAFAFA] border border-blue-500 flex justify-between p-1 rounded-lg px-3 h-9 w-32 items-center gap-2 hover:bg-blue-500 group" onClick={dropdownFilter}>
              <p className="text-blue-500 font-semibold group-hover:text-white ">Filter By</p>
              <img src="/dropdownBlue.svg" className="group-hover:hidden" alt="" />
              <img src="dropdown.svg" className="hidden group-hover:block" alt="" />
            </button>
            {isOpenFilter&&(
              <div className='bg-[#fafafa] w-80 shadow-custom h-46 absolute right-40 top-14 rounded-lg p-5 flex flex-col gap-3 z-10'>
                <div className='flex flex-col items-start gap-2'>
                  <p className='font-semibold text-md'>Priority</p>
                  <div className='flex justify-start gap-3'>
                    <div>
                      <input type="checkbox"  className="appearance-none size-7 rounded-full border-2 bg-orange-400 cursor-pointer checked:border-blue-500" />
                    </div>
                    <div>
                      <input type="checkbox"  className="appearance-none size-7 rounded-full border-2 bg-red-400 cursor-pointer checked:border-blue-500" />
                    </div>
                    <div>
                      <input type="checkbox"  className="appearance-none size-7 rounded-full border-2 bg-blue-400 cursor-pointer checked:border-blue-500" />
                    </div>
                    <div>
                      <input type="checkbox"  className="appearance-none size-7 rounded-full border-2 bg-yellow-400 cursor-pointer checked:border-blue-500" />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col items-start gap-2'>
                  <p className='font-semibold text-md'>Progress</p>
                  <div className='flex gap-3'>
                    <button className='bg-blue-300 px-3 py-1 rounded-xl  text-white  hover:bg-blue-500'>In Progress</button>
                    <button className='bg-green-300 px-3 py-1 rounded-xl  text-white  hover:bg-green-500'>Done</button>
                    <button className='bg-red-300 px-3 py-1 rounded-xl  text-white  hover:bg-red-500'>To do</button>
                  </div>
                </div>
                <button className="bg-blue-500 flex p-1 rounded-lg px-3 w-full h-9 items-center justify-center gap-2 hover:bg-blue-600 mt-3">
                  <p className="text-white font-semibold">Save</p>
                </button>
              </div>
            )}
            <button  className="  flex justify-between p-1 rounded-lg px-3 h-9 w-46  items-center gap-2 bg-blue-500 hover:bg-blue-600 group" onClick={dropdownSort}>
              <p className=" font-semibold text-white">Sort By Date</p>
              <img src="dropdown.svg" alt="" />
            </button>
            {isOpenSort&&(
              <div className='bg-[#fafafa] w-40 shadow-custom h-46 absolute right-0 top-14 rounded-lg  p-4 flex flex-col gap-2 justify-center items-center z-10'>
                <div className='gap-3 flex justify-center items-center'>
                  <button className='bg-white rounded-lg px-3 py-1 border-2 border-gray-300 text-gray-500 hover:border-blue-400 hover:text-blue-600 font-semibold'>New</button>
                  <button className='bg-white rounded-lg px-3 py-1 border-2 border-gray-300 text-gray-500 hover:border-blue-400 hover:text-blue-600 font-semibold'>Old</button>
                </div>
                <button className="bg-blue-500 flex p-1 rounded-lg px-3 w-full h-9 items-center justify-center gap-2 hover:bg-blue-600 mt-3">
                  <p className="text-white font-semibold">Save</p>
                </button>
              </div>
            )}
          </div>
        </div>
        {/* table part */}
        <div className=" bg-white shadow-custom mx-24 mb-10 border border-[#C8C8C8] rounded-2xl overflow-y-scroll">
          
          <div className="flex w-full border-b border-[#C8C8C8] items-center  font-semibold h-16 sticky top-0 bg-white">
            <div className="border-r border-[#C8C8C8] w-[20%] p-3 flex pl-6 h-full items-center justify-center">
              Project name
            </div>
            <div className="border-r border-[#C8C8C8] w-[40%] p-3 flex justify-center h-full items-center">
              Task
            </div>
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center h-full items-center">
              Assigned By
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center h-full items-center">
              Due Date
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center h-full items-center">
              Progress
            </div>
            <div className="border-r border-[#C8C8C8] w-[5%] p-3 flex justify-center h-full items-center">
              Priority
              
            </div>
          </div>
          <div className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-100">
            <div className="border-r border-[#C8C8C8] w-[20%] p-3 flex pl-6">
              Project name
            </div>
            <div className="border-r border-[#C8C8C8] w-[40%] p-3 flex justify-start">
              Task
            </div>
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              Assigned By
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Due Date
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              <div className='bg-blue-300 px-3 py-1 rounded-xl  text-white  '>In Progress</div>
            </div>
            <div className="border-r border-[#C8C8C8] w-[5%] p-3 flex justify-center">
              
               <div className=" rounded-full bg-lime-700 size-5 "></div> 
            </div>
          </div>
          <div className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-100">
            <div className="border-r border-[#C8C8C8] w-[20%] p-3 flex pl-6">
              Project name
            </div>
            <div className="border-r border-[#C8C8C8] w-[40%] p-3 flex justify-start">
              Task
            </div>
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              Assigned By
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Due Date
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Progress
            </div>
            <div className="border-r border-[#C8C8C8] w-[5%] p-3 flex justify-center">
               <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-100">
            <div className="border-r border-[#C8C8C8] w-[20%] p-3 flex pl-6">
              Project name
            </div>
            <div className="border-r border-[#C8C8C8] w-[40%] p-3 flex justify-start">
              Task
            </div>
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              Assigned By
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Due Date
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Progress
            </div>
            <div className="border-r border-[#C8C8C8] w-[5%] p-3 flex justify-center">
              <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>
          </div>
          
          <div className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-100">
            <div className="border-r border-[#C8C8C8] w-[20%] p-3 flex pl-6">
              Project name
            </div>
            <div className="border-r border-[#C8C8C8] w-[40%] p-3 flex justify-start">
              Task
            </div>
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              Assigned By
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Due Date
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Progress
            </div>
            <div className="border-r border-[#C8C8C8] w-[5%] p-3 flex justify-center">
              
               <div className=" rounded-full bg-lime-700 size-5 "></div> 
            </div>
          </div>
          <div className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-100">
            <div className="border-r border-[#C8C8C8] w-[20%] p-3 flex pl-6">
              Project name
            </div>
            <div className="border-r border-[#C8C8C8] w-[40%] p-3 flex justify-start">
              Task
            </div>
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              Assigned By
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Due Date
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Progress
            </div>
            <div className="border-r border-[#C8C8C8] w-[5%] p-3 flex justify-center">
               <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-100">
            <div className="border-r border-[#C8C8C8] w-[20%] p-3 flex pl-6">
              Project name
            </div>
            <div className="border-r border-[#C8C8C8] w-[40%] p-3 flex justify-start">
              Task
            </div>
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              Assigned By
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Due Date
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Progress
            </div>
            <div className="border-r border-[#C8C8C8] w-[5%] p-3 flex justify-center">
              <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-100">
            <div className="border-r border-[#C8C8C8] w-[20%] p-3 flex pl-6">
              Project name
            </div>
            <div className="border-r border-[#C8C8C8] w-[40%] p-3 flex justify-start">
              Task
            </div>
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              Assigned By
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Due Date
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Progress
            </div>
            <div className="border-r border-[#C8C8C8] w-[5%] p-3 flex justify-center">
              
               <div className=" rounded-full bg-lime-700 size-5 "></div> 
            </div>
          </div>
          <div className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-100">
            <div className="border-r border-[#C8C8C8] w-[20%] p-3 flex pl-6">
              Project name
            </div>
            <div className="border-r border-[#C8C8C8] w-[40%] p-3 flex justify-start">
              Task
            </div>
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              Assigned By
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Due Date
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Progress
            </div>
            <div className="border-r border-[#C8C8C8] w-[5%] p-3 flex justify-center">
               <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-100">
            <div className="border-r border-[#C8C8C8] w-[20%] p-3 flex pl-6">
              Project name
            </div>
            <div className="border-r border-[#C8C8C8] w-[40%] p-3 flex justify-start">
              Task
            </div>
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              Assigned By
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Due Date
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Progress
            </div>
            <div className="border-r border-[#C8C8C8] w-[5%] p-3 flex justify-center">
              <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-100">
            <div className="border-r border-[#C8C8C8] w-[20%] p-3 flex pl-6">
              Project name
            </div>
            <div className="border-r border-[#C8C8C8] w-[40%] p-3 flex justify-start">
              Task
            </div>
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              Assigned By
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Due Date
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Progress
            </div>
            <div className="border-r border-[#C8C8C8] w-[5%] p-3 flex justify-center">
              
               <div className=" rounded-full bg-lime-700 size-5 "></div> 
            </div>
          </div>
          <div className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-100">
            <div className="border-r border-[#C8C8C8] w-[20%] p-3 flex pl-6">
              Project name
            </div>
            <div className="border-r border-[#C8C8C8] w-[40%] p-3 flex justify-start">
              Task
            </div>
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              Assigned By
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Due Date
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Progress
            </div>
            <div className="border-r border-[#C8C8C8] w-[5%] p-3 flex justify-center">
               <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-100">
            <div className="border-r border-[#C8C8C8] w-[20%] p-3 flex pl-6">
              Project name
            </div>
            <div className="border-r border-[#C8C8C8] w-[40%] p-3 flex justify-start">
              Task
            </div>
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              Assigned By
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Due Date
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Progress
            </div>
            <div className="border-r border-[#C8C8C8] w-[5%] p-3 flex justify-center">
              <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-100">
            <div className="border-r border-[#C8C8C8] w-[20%] p-3 flex pl-6">
              Project name
            </div>
            <div className="border-r border-[#C8C8C8] w-[40%] p-3 flex justify-start">
              Task
            </div>
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              Assigned By
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Due Date
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Progress
            </div>
            <div className="border-r border-[#C8C8C8] w-[5%] p-3 flex justify-center">
              
               <div className=" rounded-full bg-lime-700 size-5 "></div> 
            </div>
          </div>
          <div className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-100">
            <div className="border-r border-[#C8C8C8] w-[20%] p-3 flex pl-6">
              Project name
            </div>
            <div className="border-r border-[#C8C8C8] w-[40%] p-3 flex justify-start">
              Task
            </div>
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              Assigned By
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Due Date
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Progress
            </div>
            <div className="border-r border-[#C8C8C8] w-[5%] p-3 flex justify-center">
               <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-100">
            <div className="border-r border-[#C8C8C8] w-[20%] p-3 flex pl-6">
              Project name
            </div>
            <div className="border-r border-[#C8C8C8] w-[40%] p-3 flex justify-start">
              Task
            </div>
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              Assigned By
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Due Date
            </div>
            <div className="border-r border-[#C8C8C8] w-[10%] p-3 flex justify-center">
              Progress
            </div>
            <div className="border-r border-[#C8C8C8] w-[5%] p-3 flex justify-center">
              <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>
          </div>
          
        </div>
        
      </div>
    );
  };
  
  export default Tasks;

