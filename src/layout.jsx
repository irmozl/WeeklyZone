import { Outlet } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { MdTask } from "react-icons/md";
import { MdFolder } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

const Layout = () => {
  const [expanded, setExpanded] = useState(false);        
  const toggleSidebar = () => { setExpanded(!expanded) };

  const [open, setIsOpen] = useState(false);
  const toggleDropdown = () => { setIsOpen(!open) };
  
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  const [showPopUp, setShowPopUp] = useState(false);
  const handlePopUp = () => {setShowPopUp(!showPopUp);};

    return (
      <div className="h-screen flex flex-col font-inter" >
        <nav className=" bg-gray-100  h-20 flex flex-row justify-between items-center" >
          <img className=" h-11 w-11 rounded-sm ml-4 " src="car.jpg" alt="" />
          <div className="flex items-center gap-8">
            <button className="font-bold text-base border-2 border-[#3AAD38] flex justify-center gap-2 items-center w-48 h-11 rounded group hover:bg-[#3AAD38]">
              <img src="/userPlusGreen.svg" alt="" className=" size-5 group-hover:hidden" />
              <img src="/userPlusWhite.svg" alt="" className=" size-5 hidden group-hover:block " />
              <p className="text-[#3AAD38] group-hover:text-white">Invite Members</p>
            </button>
            <button onClick={handlePopUp}>
              <img className=" rounded-full h-12 w-12 mr-8" src="car.jpg" alt="" />
            </button>
          </div>
          {showPopUp && (
            <div className="bg-gray-100 h-44 w-40 fixed top-24 right-8 flex flex-col justify-between items-start p-5 z-10 rounded-lg">
              <div className="flex flex-col items-start gap-3 w-full">
                <a href="/profileSettings" className="hover:text-gray-400" >Profile</a>
                <a href="/settings" className="hover:text-gray-400">Settings</a>
              </div>
              <div className=" flex flex-col items-start gap-4 border-t-2 border-gray-300 w-full">
                <div></div>
                <a href="/" className="hover:text-gray-400">Logout</a>
              </div>
            </div>
          )}
        </nav> 
        <div className="flex flex-1 overflow-hidden">
          <aside className={`${expanded ? 'w-96' : 'w-20'} transition-all `}>
            <nav className=" flex flex-col bg-gray-100 h-full  shadow-sm">
              <div className=" p-4 flex justify-end items-center">
                <button onClick={toggleSidebar} className={"rounded-sm hover:bg-gray-200 flex items-center justify-center p-2"}>
                  <HiOutlineBars3  className=" h-8 w-8"/>
                </button>
              </div>
              <div className="flex flex-col justify-between h-screen">
                <ul className="flex flex-col justify-center place-items-start overflow-hidden ml-2 font-semibold text-base ">
                  <li className={`flex justify-around items-center overflow-hidden mx-2 mb-2 py-2 pr-60 pl-2 rounded ${expanded? 'hover:bg-gray-200' : ''} `}>
                    <NavLink to="/dashboard"><MdHome className={`${expanded? '' : 'hover:bg-gray-600'} size-8 `}/></NavLink>
                    <NavLink to="/dashboard" className="pl-6 ">Home</NavLink>
                  </li>
                  <li className={`flex justify-around items-center overflow-hidden mx-2 mb-2 py-2 pr-60 pl-2 rounded ${expanded? 'hover:bg-gray-200' : ''} `}>
                    <NavLink to="/inbox"><MdNotifications className={`${expanded? '' : 'hover:bg-gray-200'} size-8`}/></NavLink>
                    <NavLink to="/inbox" className="pl-6">Inbox</NavLink>
                  </li>
                  <li className={`flex justify-around items-center overflow-hidden mx-2 mb-2 py-2 pr-52 pl-2 rounded ${expanded? 'hover:bg-gray-200' : ''} `}>
                    <NavLink to="/calendar"><MdCalendarMonth className={`${expanded? '' : 'hover:bg-gray-200'} size-8`}/></NavLink>
                    <NavLink to="/calendar" className="pl-6">Calendar</NavLink>
                  </li>
                  <li className={`flex justify-around items-center overflow-hidden mx-2 mb-2 py-2 pr-52 pl-2 rounded ${expanded? 'hover:bg-gray-200' : ''} `}>
                    <NavLink to="/messages"><MdMessage className={`${expanded? '' : 'hover:bg-gray-200'} size-8`}/></NavLink>
                    <NavLink to="/messages" className="pl-6">Message</NavLink>
                  </li>
                  <li className={`flex justify-around items-center overflow-hidden mx-2  mb-2 py-2 pr-60 pl-2 rounded ${expanded? 'hover:bg-gray-200' : ''}`}>
                    <NavLink to="/tasks"><MdTask className={`${expanded? '' : 'hover:bg-gray-200'} size-8`}/></NavLink>
                    <NavLink to="/tasks" className="pl-6">Tasks</NavLink>
                  </li>
                  <li className={`flex flex-col justify-around items-center overflow-hidden mx-2 mb-2 py-2 pr-1 pl-2 rounded ${expanded? 'hover:bg-gray-200' : ''} ${open? 'pr-1' : ''} `}>
                    <button onClick={() => { if (expanded) toggleDropdown();} } className="flex justify-center items-center "> 
                      <NavLink to="/projects"><MdFolder className={`${expanded? '' : 'hover:bg-gray-200'} size-8`}/></NavLink>
                      <NavLink to="/projects" className="pl-6">Projects</NavLink>
                      <MdKeyboardArrowDown className={`ml-48 size-8 ${open? 'rotate-180 transition-all' : 'transition-all'}`}/>
                    </button>
                    {open && (
                        <div className={"flex flex-col overflow-y-auto my-2 py-2 max-h-64"} href="#!" >
                          <a className="flex items-center mb-2 hover:bg-gray-300 p-1 ml-14 rounded" href="" > 
                            <div className=" size-5 bg-sky-300 rounded mr-2"></div>
                            <div  className="">{truncateText("Project Name Example 001",19)}</div>
                            <div className=" bg-red-400 rounded h-5 w-7 flex justify-center items-center text-white ml-6 mr-2" > 10</div>
                          </a>
                          <a className="flex items-center mb-2 hover:bg-gray-300 p-1  ml-14 rounded" href="" > 
                            <div className=" size-5 bg-amber-300 rounded mr-2"></div>
                            <div  className="">{truncateText("Project Name Example 001",19)}</div>
                            <div className=" bg-red-400 rounded h-5 w-7 flex justify-center items-center text-white ml-6 mr-2" > 10</div>
                          </a>
                          <a className="flex items-center mb-2 hover:bg-gray-300 p-1  ml-14 rounded" href="" > 
                            <div className=" size-5 bg-lime-400 rounded mr-2"></div>
                            <div  className="">{truncateText("Project Name Example 001",19)}</div>
                            <div className=" bg-red-400 rounded h-5 w-7 flex justify-center items-center text-white ml-6 mr-2" > 10</div>
                          </a>
                          <a className="flex items-center mb-2 hover:bg-gray-300 p-1  ml-14 rounded" href="" > 
                            <div className=" size-5 bg-lime-400 rounded mr-2"></div>
                            <div  className="">{truncateText("Project Name Example 001",19)}</div>
                            <div className=" bg-red-400 rounded h-5 w-7 flex justify-center items-center text-white ml-6 mr-2" > 10</div>
                          </a>
                          <a className="flex items-center mb-2 hover:bg-gray-300 p-1  ml-14 rounded" href="" > 
                            <div className=" size-5 bg-lime-400 rounded mr-2"></div>
                            <div  className="">{truncateText("Project Name Example 001",19)}</div>
                            <div className=" bg-red-400 rounded h-5 w-7 flex justify-center items-center text-white ml-6 mr-2" > 10</div>
                          </a>
                          <a className="flex items-center mb-2 hover:bg-gray-300 p-1  ml-14 rounded" href="" > 
                            <div className=" size-5 bg-lime-400 rounded mr-2"></div>
                            <div  className="">{truncateText("Project Name Example 001",19)}</div>
                            <div className=" bg-red-400 rounded h-5 w-7 flex justify-center items-center text-white ml-6 mr-2" > 10</div>
                          </a>
                          <a className="flex items-center mb-2 hover:bg-gray-300 p-1  ml-14 rounded" href="" > 
                            <div className=" size-5 bg-lime-400 rounded mr-2"></div>
                            <div  className="">{truncateText("Project Name Example 001",19)}</div>
                            <div className=" bg-red-400 rounded h-5 w-7 flex justify-center items-center text-white ml-6 mr-2" > 10</div>
                          </a>
                          <a className="flex items-center mb-2 hover:bg-gray-300 p-1  ml-14 rounded" href="" > 
                            <div className=" size-5 bg-lime-400 rounded mr-2"></div>
                            <div  className="">{truncateText("Project Name Example 001",19)}</div>
                            <div className=" bg-red-400 rounded h-5 w-7 flex justify-center items-center text-white ml-6 mr-2" > 10</div>
                          </a>
                          <a className="flex items-center mb-2 hover:bg-gray-300 p-1  ml-14 rounded" href="" > 
                            <div className=" size-5 bg-lime-400 rounded mr-2"></div>
                            <div  className="">{truncateText("Project Name Example 001",19)}</div>
                            <div className=" bg-red-400 rounded h-5 w-7 flex justify-center items-center text-white ml-6 mr-2" > 10</div>
                          </a>
                          <a className="flex items-center mb-2 hover:bg-gray-300 p-1  ml-14 rounded" href="" > 
                            <div className=" size-5 bg-lime-400 rounded mr-2"></div>
                            <div  className="">{truncateText("Project Name Example 001",19)}</div>
                            <div className=" bg-red-400 rounded h-5 w-7 flex justify-center items-center text-white ml-6 mr-2" > 10</div>
                          </a>
                          <a className="flex items-center mb-2 hover:bg-gray-300 p-1  ml-14 rounded" href="" > 
                            <div className=" size-5 bg-lime-400 rounded mr-2"></div>
                            <div  className="">{truncateText("Project Name Example 001",19)}</div>
                            <div className=" bg-red-400 rounded h-5 w-7 flex justify-center items-center text-white ml-6 mr-2" > 10</div>
                          </a>
                          <a className="flex items-center mb-2 hover:bg-gray-300 p-1  ml-14 rounded" href="" > 
                            <div className=" size-5 bg-lime-400 rounded mr-2"></div>
                            <div  className="">{truncateText("Project Name Example 001",19)}</div>
                            <div className=" bg-red-400 rounded h-5 w-7 flex justify-center items-center text-white ml-6 mr-2" > 10</div>
                          </a>
                        </div>
                    )}
                  </li>
                </ul>
                
                {/* en alt setting ve logout kısmı */}
                <div className="">
                  <ul className="flex flex-col justify-center place-items-start overflow-hidden ml-2 font-semibold text-base">
                    <li className={` flex justify-around items-center overflow-hidden mx-2 mb-2 py-2 pr-60 pl-2 rounded ${expanded? 'hover:bg-gray-200' : ''} `}>
                     <NavLink to="/settings"><IoMdSettings className={`${expanded? '' : 'hover:bg-gray-200'} size-8`}/></NavLink>
                     <NavLink to="/settings" className="pl-6">Settings</NavLink>
                    </li>
                    <hr class={`${expanded ? '' : ''}bg-gray-300 w-96 -ml-4 h-[3px]`} ></hr>
                    <li className={`flex justify-around items-center overflow-hidden mx-2 mb-2 py-2 pr-60 pl-2 rounded  `}>
                     <NavLink to="/"><MdOutlineLogout className={` size-8`}/></NavLink>
                     <NavLink to="/" className="pl-6">Logout</NavLink>
                    </li>
                </ul>
                </div>
              </div>
              
            </nav>
          </aside>
          <Outlet />
        </div>
        
      </div>
    );
  };
  
  export default Layout;