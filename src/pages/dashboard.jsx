import { useSelector } from "react-redux";
import { selectAuthUser } from "../store/features/auth/authSelector";

const Dashboard = () => {
    const user = useSelector(selectAuthUser)

    return (
      <div className="w-screen  bg-[#FAFAFA] font-inter"> 
      <div className="flex flex-col justify-center items-center mt-24 gap-3">
        <p className=" text-5xl">Welcome, <span className=" font-extrabold">
          {user?.username ?? "Irem"}
          </span></p>
        <p className=" text-lg">Are you ready to start?</p>
      </div>
      <div className="grid grid-cols-2 gap-8 max-[1200px]:grid-cols-1 max-[1200px]:gap-6  m-20 h-[500px] max-[800px]:mx-10 max-[800px]:my-15 max-[450px]:mx-5 max-[450px]:my-15  ">
        {/* new */}
        <div className="bg-white rounded-lg max-h-[450px] min-h-[300px] overflow-y-scroll shadow-custom">
          {/* baslık */}
          <div className="sticky top-0 bg-white flex p-6 justify-between items-center border-b border-[#C8C8C8]">
            <div className="flex justify-start items-center">
              <header className="mr-4 text-2xl font-semibold">New Tasks</header>
              <div className=" text-base font-semibold px-3 rounded-lg bg-[#4382f84f]">
                08    {/* veritabanından çekilicek */}  
              </div>
            </div>
            <a className="flex items-center gap-3" href="/tasks">
              <p className="font-semibold text-base text-[#4B4B4B]">See All Tasks</p>
              <img src="/dropdownDark.svg" alt="" className=" -rotate-90 size-8" />
            </a>
          </div>
          {/* task info part */}
          <button className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-200">
            {/* project name */}
            <div className="border-r border-[#C8C8C8] w-[35%] p-3 flex pl-6 ">
              Project name
            </div>
            {/* task  */}
            <div className="border-r border-[#C8C8C8] w-[45%] p-3 flex justify-start">
              Giriş sayfasına düzenleme yapılması.
            </div>
            {/* deadline */}
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              3 days left
            </div>
            {/* urgent */}
            <div className="w-[8%] p-3 flex justify-center">
              <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>
          </button>
          <button className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-200">
            {/* project name */}
            <div className="border-r border-[#C8C8C8] w-[35%] p-3 flex pl-6 ">
              Project name
            </div>
            {/* task  */}
            <div className="border-r border-[#C8C8C8] w-[45%] p-3 flex justify-start">
              Giriş sayfasına düzenleme yapılması.
            </div>
            {/* deadline */}
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              3 days left
            </div>
            {/* urgent */}
            <div className="w-[8%] p-3 flex justify-center">
              <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>
          </button>
          <button className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-200">
            {/* project name */}
            <div className="border-r border-[#C8C8C8] w-[35%] p-3 flex pl-6 ">
              Project name
            </div>
            {/* task  */}
            <div className="border-r border-[#C8C8C8] w-[45%] p-3 flex justify-start">
              Giriş sayfasına düzenleme yapılması.
            </div>
            {/* deadline */}
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              3 days left
            </div>
            {/* urgent */}
            <div className="w-[8%] p-3 flex justify-center">
              <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>
          </button>
          <button className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-200">
            {/* project name */}
            <div className="border-r border-[#C8C8C8] w-[35%] p-3 flex pl-6 ">
              Project name
            </div>
            {/* task  */}
            <div className="border-r border-[#C8C8C8] w-[45%] p-3 flex justify-start">
              Giriş sayfasına düzenleme yapılması.
            </div>
            {/* deadline */}
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              3 days left
            </div>
            {/* urgent */}
            <div className="w-[8%] p-3 flex justify-center">
              <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>
          </button>
          <button className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-200">
            {/* project name */}
            <div className="border-r border-[#C8C8C8] w-[35%] p-3 flex pl-6 ">
              Project name
            </div>
            {/* task  */}
            <div className="border-r border-[#C8C8C8] w-[45%] p-3 flex justify-start">
              Giriş sayfasına düzenleme yapılması.
            </div>
            {/* deadline */}
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              3 days left
            </div>
            {/* urgent */}
            <div className="w-[8%] p-3 flex justify-center">
              <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>
          </button>
          <button className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-200">
            {/* project name */}
            <div className="border-r border-[#C8C8C8] w-[35%] p-3 flex pl-6 ">
              Project name
            </div>
            {/* task  */}
            <div className="border-r border-[#C8C8C8] w-[45%] p-3 flex justify-start">
              Giriş sayfasına düzenleme yapılması.
            </div>
            {/* deadline */}
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              3 days left
            </div>
            {/* urgent */}
            <div className="w-[8%] p-3 flex justify-center">
              <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>
          </button>
          <button className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-200">
            {/* project name */}
            <div className="border-r border-[#C8C8C8] w-[35%] p-3 flex pl-6 ">
              Project name
            </div>
            {/* task  */}
            <div className="border-r border-[#C8C8C8] w-[45%] p-3 flex justify-start">
              Giriş sayfasına düzenleme yapılması.
            </div>
            {/* deadline */}
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              3 days left
            </div>
            {/* urgent */}
            <div className="w-[8%] p-3 flex justify-center">
              <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>
          </button>
          <button className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-200">
            {/* project name */}
            <div className="border-r border-[#C8C8C8] w-[35%] p-3 flex pl-6 ">
              Project name
            </div>
            {/* task  */}
            <div className="border-r border-[#C8C8C8] w-[45%] p-3 flex justify-start">
              Giriş sayfasına düzenleme yapılması.
            </div>
            {/* deadline */}
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              3 days left
            </div>
            {/* urgent */}
            <div className="w-[8%] p-3 flex justify-center">
              <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>
          </button>
          
        </div>


        {/* due */}
        <div className="bg-white rounded-lg max-h-[450px] min-h-[300px] overflow-y-scroll shadow-custom">
          {/* baslık */}
          <div className="sticky top-0 bg-white flex p-6 justify-start items-center border-b border-[#C8C8C8]">
            <header className="mr-4 text-2xl font-semibold">Due Tasks</header>
            <div className=" text-base font-semibold px-3 rounded-lg bg-[#4382f84f]">
              08     {/* veritabanından çekilicek */}  
            </div>
          </div>
          {/* task info part */}
          <button className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-200">
            {/* project name */}
            <div className="border-r border-[#C8C8C8] w-[35%] p-3 flex pl-6 ">
              Project name
            </div>
            {/* task  */}
            <div className="border-r border-[#C8C8C8] w-[45%] p-3 flex justify-start">
              Giriş sayfasına düzenleme yapılması.
            </div>
            {/* deadline */}
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              3 days left
            </div>
            {/* urgent */}
            <div className="w-[8%] p-3 flex justify-center">
              <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>  
          </button>
          <button className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-200">
            {/* project name */}
            <div className="border-r border-[#C8C8C8] w-[35%] p-3 flex pl-6 ">
              Project name
            </div>
            {/* task  */}
            <div className="border-r border-[#C8C8C8] w-[45%] p-3 flex justify-start">
              Giriş sayfasına düzenleme yapılması.
            </div>
            {/* deadline */}
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              3 days left
            </div>
            {/* urgent */}
            <div className="w-[8%] p-3 flex justify-center">
              <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>  
          </button>
          <button className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-200">
            {/* project name */}
            <div className="border-r border-[#C8C8C8] w-[35%] p-3 flex pl-6 ">
              Project name
            </div>
            {/* task  */}
            <div className="border-r border-[#C8C8C8] w-[45%] p-3 flex justify-start">
              Giriş sayfasına düzenleme yapılması.
            </div>
            {/* deadline */}
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              3 days left
            </div>
            {/* urgent */}
            <div className="w-[8%] p-3 flex justify-center">
              <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>  
          </button>
          <button className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-200">
            {/* project name */}
            <div className="border-r border-[#C8C8C8] w-[35%] p-3 flex pl-6 ">
              Project name
            </div>
            {/* task  */}
            <div className="border-r border-[#C8C8C8] w-[45%] p-3 flex justify-start">
              Giriş sayfasına düzenleme yapılması.
            </div>
            {/* deadline */}
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              3 days left
            </div>
            {/* urgent */}
            <div className="w-[8%] p-3 flex justify-center">
              <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>  
          </button>
          <button className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-200">
            {/* project name */}
            <div className="border-r border-[#C8C8C8] w-[35%] p-3 flex pl-6 ">
              Project name
            </div>
            {/* task  */}
            <div className="border-r border-[#C8C8C8] w-[45%] p-3 flex justify-start">
              Giriş sayfasına düzenleme yapılması.
            </div>
            {/* deadline */}
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              3 days left
            </div>
            {/* urgent */}
            <div className="w-[8%] p-3 flex justify-center">
              <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>  
          </button>
          <button className="flex w-full border-b border-[#C8C8C8] items-center hover:bg-gray-200">
            {/* project name */}
            <div className="border-r border-[#C8C8C8] w-[35%] p-3 flex pl-6 ">
              Project name
            </div>
            {/* task  */}
            <div className="border-r border-[#C8C8C8] w-[45%] p-3 flex justify-start">
              Giriş sayfasına düzenleme yapılması.
            </div>
            {/* deadline */}
            <div className="border-r border-[#C8C8C8] w-[15%] p-3 flex justify-center">
              3 days left
            </div>
            {/* urgent */}
            <div className="w-[8%] p-3 flex justify-center">
              <div className=" rounded-full bg-lime-700 size-5 "></div>
            </div>  
          </button>
          

          
        </div>
      </div>
      </div>
    ) 
  };
  
  export default Dashboard;

  // truncate eklenicek responsive için bakılcak