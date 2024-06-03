import React, { useState } from 'react';


const Projects = () => {

    const [showPopUp, setShowPopUp] = useState(false);
    const handleClosePopUp = () => {
      setShowPopUp(false);
    };

    const [isOpenMembers, setIsOpenMembers] = useState(false);
    const dropdownMembers = () => {
      setIsOpenMembers(!isOpenMembers);
    };

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 w-screen pt-20 pb-3 px-20 gap-5 justify-center overflow-y-scroll  bg-[#FAFAFA] font-inter">
        <style jsx>{`
          .grid::-webkit-scrollbar {
          width: 0 !important; /* Scroll bar'ın genişliğini 0'a ayarlayın */
          height: 0 !important; /* Scroll bar'ın yüksekliğini 0'a ayarlayın */
          }

          .grid::-webkit-scrollbar-thumb {
          background: transparent !important; /* Scroll bar'ın rengini şeffaf yapın */
          border: none !important; /* Scroll bar'ın kenarlığını kaldırın */
          }
        `}</style>
      <button className="w-full p-2 bg-white shadow-custom rounded-2xl h-96 hover:bg-gray-200" onClick={() => setShowPopUp(true)}>
        <div className="flex justify-center ml-4 gap-4 items-center">
          <img src="/plus-button.svg" alt="" />
          <header className="font-semibold text-3xl lg:block hidden">Create New Project</header>
        </div>
      </button>
      {showPopUp && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75  flex items-center justify-center" >
          <div className="bg-white rounded-lg w-full p-8 shadow-lg  max-w-[900px] ">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-3xl">Add Project</h3>
              <button className="text-gray-400 hover:text-gray-500" onClick={handleClosePopUp}>
                <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6L18 18" />
                </svg>
              </button>
            </div>
            <div className="mt-5">
              <div className='flex flex-col items-start mb-5'>
                <header className=' font-semibold text-xl mb-3'>Project Title</header>
                <input type="text" className=" focus:outline-none focus:bg-gray-200 bg-gray-100 rounded-lg h-12 w-42 mb-1 pl-5 w-full hover:bg-gray-200" placeholder='Project Title'/>
                <p className=' text-red-400 font-light text-xs'>*You can’t leave the Project Title blank</p>
              </div>
              <div className='flex flex-col items-start mb-5'>
                <header className=' font-semibold text-xl mb-3'>Description</header>
                <input type="text" className=" focus:outline-none focus:bg-gray-200 bg-gray-100 rounded-lg h-24 w-42 pl-5 w-full hover:bg-gray-200" placeholder='Goal of this project is...'/>
              </div>
              <div className='flex flex-col items-start mb-5'>
                <header className=' font-semibold text-xl mb-3'> Date</header>
                <div className='flex items-stretch w-full gap-7'>
                  <input type="date" className='focus:outline-none focus:bg-gray-200 bg-gray-100 rounded-lg h-12 w-42 mb-1 px-5 text-gray-400 w-full hover:bg-gray-200'/>
                  <input type="date" className='focus:outline-none focus:bg-gray-200 bg-gray-100 rounded-lg h-12 w-42 mb-1 px-5 text-gray-400 w-full hover:bg-gray-200'/>
                </div>
              </div>
              <div className=' mb-5'>
                <div className='flex justify-start items-center gap-4 mb-4'>
                  <header  className=' font-semibold text-xl'>Members</header>
                  <div className=' bg-gray-300 font-semibold text-xs py-1 px-2 rounded'>14</div>
                </div>
                <div>
                  <div className='flex gap-7'>
                    <button className=' bg-blue-600 w-1/4 flex justify-between items-center gap-1 h-12 px-3 rounded-lg hover:bg-blue-500' onClick={dropdownMembers}>
                      <img src="/peopleIcon.svg" alt="" />
                      <p className='text-white font-semibold text-base hidden md:block'>Choose Members</p>
                      <img src="/dropdown.svg" alt="" />
                    </button>
                    {isOpenMembers && (
                        <div className="absolute bg-gray-100 rounded-lg shadow-lg mt-14 p-4 flex flex-col gap-1 max-h-32 overflow-y-scroll items-start">
                           <button className="text-gray-600 hover:bg-gray-200 p-1 pl-2 w-full text-left rounded">İrem Özel</button>
                           <button className="text-gray-600 hover:bg-gray-200 p-1 pl-2 w-full text-left rounded">Doğa Aydın</button>
                           <button className="text-gray-600 hover:bg-gray-200 p-1 pl-2 w-full text-left rounded">Batuhan Işık</button>
                           <button className="text-gray-600 hover:bg-gray-200 p-1 pl-2 w-full text-left rounded">Member Dropdown</button>
                           <button className="text-gray-600 hover:bg-gray-200 p-1 pl-2 w-full text-left rounded">Member Dropdown</button>
                           <button className="text-gray-600 hover:bg-gray-200 p-1 pl-2 w-full text-left rounded">Member Dropdown</button>
                           <button className="text-gray-600 hover:bg-gray-200 p-1 pl-2 w-full text-left rounded">Member Dropdown</button>
                        </div>
                        )}
                    <div className='flex flex-col gap-2 w-3/4'>
                      <div className='bg-gray-100 w-full h-12 rounded-lg flex items-center gap-5 justify-start pl-4'>
                        <div className=''><img src="/car.jpg" alt="" className='rounded-full size-6'/></div>
                        <p className=' text-sm '>Batuhan Işık</p>
                        <button className='h-9 px-5 bg-white flex rounded-lg items-center  gap-4 hover:bg-gray-200'>
                          <p className=' text-sm'>Project Manager</p>
                          <img src="/dropdownDark.svg" alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-start'>
                <header className=' font-semibold text-xl mb-3'>Theme Color</header>
                <div className='flex justify-start gap-4'>
                  <button className='rounded size-7 bg-red-600 active:border-4 active:border-blue-500'></button>
                  <button className='rounded size-7 bg-blue-600 active:border-4 active:border-blue-500'></button>
                  <button className='rounded size-7 bg-green-600 active:border-4 active:border-blue-500'></button>
                  <button className='rounded size-7 bg-yellow-600 active:border-4 active:border-blue-500'></button>
                  <button className='rounded size-7 bg-purple-600 active:border-4 active:border-blue-500'></button>
                </div>
              </div>
              <div className='flex justify-end mt-8'>
                <button type="submit" className=' bg-blue-600 w-1/4 flex justify-center text-white font-semibold text-xl items-center gap-1 h-12 px-3 rounded-lg hover:bg-blue-500'>Create</button>
              </div>
              
            </div>
          </div>
        </div>
      )}
      {/* {divs.map((div, index) => (
        <div key={index} className="w-full md:w-1/3 p-2">{div}</div>
      ))} */}
      {/* üst kısım veri tabanından çekmek için */}
      {Array(8).fill(0).map((_, index) => ( 
        <button key={index} className="w-full p-5 bg-white shadow-custom rounded-2xl h-96 hover:bg-gray-200 flex flex-col">
          <div className="flex flex-col justify-center items-start">
            <header className="text-3xl font-semibold mb-2 text-start">irem</header>
            <header className="text-sm ">14 May 2023 - 24 April 2024 </header>
          </div>
          <div></div>
          <div></div>
        </button>
      ))}
    </div>
    );
  };
  
  export default Projects;