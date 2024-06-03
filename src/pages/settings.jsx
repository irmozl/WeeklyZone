import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { FaTrashCan } from "react-icons/fa6";

const Settings = () => {

    const [showPopUp, setShowPopUp] = useState(false);
    const handleClosePopUp = () => {
      setShowPopUp(false);
    };

    const [isOpenManageUsers, setIsOpenManageUsers] = useState(true);
    const showManageUsers = () => {
      setIsOpenManageUsers(!isOpenManageUsers);
      setIsOpenManageTeams(false);
    };

    const [isOpenMembers, setIsOpenMembers] = useState(false);
    const showMembers = () => {
      setIsOpenMembers(!isOpenMembers);
    };

    const [isOpenManageTeams, setIsOpenManageTeams] = useState(false);
    const showManageTeams = () => {
      setIsOpenManageTeams(true); 
      setIsOpenManageUsers(false);
    };

    return (
      <div className="font-inter bg-[#FAFAFA] w-screen md:overflow-hidden overflow-y-scroll">
        <div className="mx-10 my-20 flex h-full gap-10">
          <div className="bg-white shadow-custom w-[22%] rounded-xl h-max text-lg font-">
            <div className="m-5 flex flex-col gap-4">
              <button className="hover:bg-gray-100 py-2 px-2 rounded-md flex items-center gap-3 text-xl" onClick={showManageUsers}>
                <img src="/user.svg" alt="" className=' w-4 mr-1'/>
                <p>Manage Users</p>
              </button>
              <button className="hover:bg-gray-100 py-2 px-2 rounded-md flex items-center gap-3 text-xl" onClick={showManageTeams}>
                <img src="/teamGrey.svg" alt="" className=' w-5'/>
                <p>Manage Teams</p>
              </button>
              <span className='h-[1px] w-full bg-gray-300'></span>
              <button className="hover:bg-gray-100 py-2 px-2 rounded-md flex items-center gap-3 text-xl" >
                <img src="/unlockKey.svg" alt="" className=' w-5'/>
                <p>Change Password</p>
              </button>
              <button className="hover:bg-gray-100 py-2 px-2 rounded-md flex items-center gap-3 text-xl" >
                <img src="/envelope.svg" alt="" className=' w-5'/>
                <p>Change Email</p>
              </button>
              <button className="hover:bg-gray-100 py-2 px-2 rounded-md flex items-center gap-3 text-xl" >
                <img src="/trashGray.svg" alt="" className=' w-5'/>
                <p>Delete Account</p>
              </button>
            </div>
          </div>

          <div className="w-4/5 rounded-xl h-5/6 p-10">
            <div className=''>

            


              {isOpenManageUsers &&(
              <div  className='w-full'>
                <p className='font-semibold text-4xl mb-9'>Manage Users</p>
                <div className='flex justify-between items-start'>
                  <div className='w-2/5 h-10  rounded-lg flex items-center border-2 border-[#4382f86b] bg-white group'>
                    <input type="search" placeholder='Search' className='w-full h-full pl-3 rounded-lg  '/>
                    <IoIosSearch className='bg-white rounded-lg size-6 mr-3 text-gray-400' />
                  </div>
                  <button className="font-bold text-base border-2 border-[#3AAD38] flex justify-center gap-2 items-center w-12 900:w-48 h-10 rounded group hover:bg-[#3AAD38] mb-9">
                    <img src="/userPlusGreen.svg" alt="" className=" size-5 group-hover:hidden" />
                    <img src="/userPlusWhite.svg" alt="" className=" size-5 hidden group-hover:block " />
                    <p className="text-[#3AAD38] group-hover:text-white hidden 900:block">Invite Members</p>
                  </button>
                </div>



                <div className='rounded-lg shadow-custom max-h-[500px]  overflow-y-scroll'>
                  <div className='bg-white w-full p-3 px-7 border-b'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2 justify-center items-center'>
                        <img src="/car.jpg" alt="" className='size-8 rounded-full'/>
                        <p>Batuhan Işık</p>
                      </div>
                    <div className='hidden xl:block'>
                      <p>asadfghsjfjsh@gmail.com</p>
                    </div>
                    <div>
                      <p className='text-blue-500 font-semibold hidden 900:block '>8 projects</p>
                    </div>
                    <button className='bg-gray-100 p-1' onClick={() => setShowPopUp(true)}>
                      <FaTrashCan className='size-6 hover:text-[#E13232] text-[#AFAFAF]'/>
                    </button>
                    {showPopUp && (
                      <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75  flex items-center justify-center" >
                        <div className="bg-white rounded-2xl  p-8 shadow-lg flex flex-col">
                          <div className='flex justify-end'>
                          <button className="text-gray-400 hover:text-gray-500 w-8" onClick={handleClosePopUp}>
                            <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6L18 18" /></svg>
                          </button>
                          </div>
                          <div className="flex items-center justify-center">
                            <div className='p-4 bg-[#F5F5F5] rounded-lg'><FaTrashCan className='size-9 text-[#E13232] '/></div>
                          </div>
                          <div className='flex flex-col justify-center items-center mt-7'>
                            <h3 className="font-semibold text-2xl text-center mb-5">You are about to delete this person.</h3>
                            <p className=' text-base '><span className='font-semibold'>Batuhan Işık</span> is part of <span className='font-semibold'>8</span> projects.</p>  
                          </div>
                          <div className='flex justify-between items-center gap-3 mt-8'>
                            <button onClick={handleClosePopUp} className=' bg-[#D9D9D9] font-semibold w-1/2 h-10 text-[#646464] rounded hover:bg-[#cacaca]'>Cancel</button>
                            <button className='bg-[#E13232] font-semibold w-1/2 h-10 text-white rounded hover:bg-[#bc5151]'>Delete</button>
                          </div>
                        </div>
                      </div>
                    )}
                    </div>
                  </div>
                  
                  
                  
                </div>
                

              </div>)}

              {isOpenManageTeams&&(
                <div  className='w-full'>
                  <p className='font-semibold text-4xl mb-9'>Manage Teams</p>
                  <div className='flex justify-between items-start'>
                    <div className='w-2/5 h-10  rounded-lg flex items-center border-2 border-[#4382f86b] bg-white group'>
                      <input type="search" placeholder='Search' className='w-full h-full pl-3 rounded-lg  '/>
                      <IoIosSearch className='bg-white rounded-lg size-6 mr-3 text-gray-400' />
                    </div>
                  <button className="font-bold text-base border-2 border-[#3AAD38] flex justify-center gap-2 items-center w-12 900:w-48 h-10 rounded group hover:bg-[#3AAD38] mb-9">
                    <img src="/userPlusGreen.svg" alt="" className=" size-5 group-hover:hidden" />
                    <img src="/userPlusWhite.svg" alt="" className=" size-5 hidden group-hover:block " />
                    <p className="text-[#3AAD38] group-hover:text-white hidden 900:block">Invite Members</p>
                  </button>
                </div>

                <div className='rounded-lg shadow-custom max-h-[500px]  '>
                  <div className='bg-white w-full p-3 px-7 border-b ' >
                    <div className='flex justify-between items-center'>
                    <div>
                      <p className='text-blue-500 font-semibold hidden 900:block '>Project 001</p>
                    </div>
                    <div className='flex gap-5 mr-5'>
                      <button className='bg-[#E13232] py-1 px-2 font-semibold text-white rounded'>Delete Team</button>
                      <button onClick={showMembers} className='bg-gray-200 rounded '>
                        <img src="/dropdownDark.svg" alt="" className={`w-7   ${isOpenMembers? 'rotate-180 transition-all' : 'transition-all'}`}/>
                      </button>
                    </div>
                    
                    
                    </div>
                  </div>
                  
                  {isOpenMembers&&(
                    <div>
                      <div className='rounded-lg shadow-custom max-h-[500px]  overflow-y-scroll'>
                        <div className='bg-white w-full p-3 px-7 border-b'>
                         <div className='flex justify-between items-center'>
                            <div className='flex gap-2 justify-center items-center'>
                              <img src="/car.jpg" alt="" className='size-8 rounded-full'/>
                              <p>Batuhan Işık</p>
                            </div>
                            <div className='hidden xl:block'>
                              <p>asadfghsjfjsh@gmail.com</p>
                            </div>
                          <div>
                          <p className='text-blue-500 font-semibold hidden 900:block '>8 projects</p>
                        </div>
                        <button className='bg-gray-100 p-1' onClick={() => setShowPopUp(true)}>
                          <FaTrashCan className='size-6 hover:text-[#E13232] text-[#AFAFAF]'/>
                        </button>
                        {showPopUp && (
                          <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75  flex items-center justify-center" >
                            <div className="bg-white rounded-2xl  p-8 shadow-lg flex flex-col">
                              <div className='flex justify-end'>
                                <button className="text-gray-400 hover:text-gray-500 w-8" onClick={handleClosePopUp}>
                                  <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6L18 18" /></svg>
                                </button>
                              </div>
                              <div className="flex items-center justify-center">
                                <div className='p-4 bg-[#F5F5F5] rounded-lg'><FaTrashCan className='size-9 text-[#E13232] '/></div>
                              </div>
                              <div className='flex flex-col justify-center items-center mt-7'>
                                <h3 className="font-semibold text-2xl text-center mb-5">You are about to delete this person.</h3>
                                <p className=' text-base '><span className='font-semibold'>Batuhan Işık</span> is part of <span className='font-semibold'>8</span> projects.</p>  
                              </div>
                              <div className='flex justify-between items-center gap-3 mt-8'>
                                <button onClick={handleClosePopUp} className=' bg-[#D9D9D9] font-semibold w-1/2 h-10 text-[#646464] rounded hover:bg-[#cacaca]'>Cancel</button>
                                <button className='bg-[#E13232] font-semibold w-1/2 h-10 text-white rounded hover:bg-[#bc5151]'>Delete</button>
                              </div>
                            </div>
                          </div>
                        )}
                         </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                </div>

                <div className='rounded-lg shadow-custom max-h-[500px]  '>
                  <div className='bg-white w-full p-3 px-7 border-b ' >
                    <div className='flex justify-between items-center'>
                    <div>
                      <p className='text-blue-500 font-semibold hidden 900:block '>Project 001</p>
                    </div>
                    <div className='flex gap-5 mr-5'>
                      <button className='bg-[#E13232] py-1 px-2 font-semibold text-white rounded'>Delete Team</button>
                      <button onClick={showMembers} className='bg-gray-200 rounded '>
                        <img src="/dropdownDark.svg" alt="" className={`w-7   ${isOpenMembers? 'rotate-180 transition-all' : 'transition-all'}`}/>
                      </button>
                    </div>
                    
                    
                    </div>
                  </div>
                  
                  {isOpenMembers&&(
                    <div>
                      <div className='rounded-lg shadow-custom max-h-[500px]  overflow-y-scroll'>
                        <div className='bg-white w-full p-3 px-7 border-b'>
                         <div className='flex justify-between items-center'>
                            <div className='flex gap-2 justify-center items-center'>
                              <img src="/car.jpg" alt="" className='size-8 rounded-full'/>
                              <p>Batuhan Işık</p>
                            </div>
                            <div className='hidden xl:block'>
                              <p>asadfghsjfjsh@gmail.com</p>
                            </div>
                          <div>
                          <p className='text-blue-500 font-semibold hidden 900:block '>8 projects</p>
                        </div>
                        <button className='bg-gray-100 p-1' onClick={() => setShowPopUp(true)}>
                          <FaTrashCan className='size-6 hover:text-[#E13232] text-[#AFAFAF]'/>
                        </button>
                        {showPopUp && (
                          <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75  flex items-center justify-center" >
                            <div className="bg-white rounded-2xl  p-8 shadow-lg flex flex-col">
                              <div className='flex justify-end'>
                                <button className="text-gray-400 hover:text-gray-500 w-8" onClick={handleClosePopUp}>
                                  <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6L18 18" /></svg>
                                </button>
                              </div>
                              <div className="flex items-center justify-center">
                                <div className='p-4 bg-[#F5F5F5] rounded-lg'><FaTrashCan className='size-9 text-[#E13232] '/></div>
                              </div>
                              <div className='flex flex-col justify-center items-center mt-7'>
                                <h3 className="font-semibold text-2xl text-center mb-5">You are about to delete this person.</h3>
                                <p className=' text-base '><span className='font-semibold'>Batuhan Işık</span> is part of <span className='font-semibold'>8</span> projects.</p>  
                              </div>
                              <div className='flex justify-between items-center gap-3 mt-8'>
                                <button onClick={handleClosePopUp} className=' bg-[#D9D9D9] font-semibold w-1/2 h-10 text-[#646464] rounded hover:bg-[#cacaca]'>Cancel</button>
                                <button className='bg-[#E13232] font-semibold w-1/2 h-10 text-white rounded hover:bg-[#bc5151]'>Delete</button>
                              </div>
                            </div>
                          </div>
                        )}
                         </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                </div>
                
                </div>
              )}
            
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Settings;