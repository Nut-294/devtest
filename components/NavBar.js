import Link from "next/link";

function NavBar() {

  return (
    <div className="flex">
    <div className="bg-lime-400 h-screen p-5 pt-8 w-72 duration-300 relative">
      <div className="text-4xl text-white bg-black rounded-full absolute -right-3 top-9 border border-black-100 cursor-pointer"></div>
  
      <div className="flex flex-col justify-start items-center">
        <h1 className="text-base text-center cursor-pointer font-bold text-black border-b border-blue-900 pb-4 w-full">
          Project
        </h1>
  
        <div className="my-4 border-b border-blue-900 pb-4 w-full">
          <a href="/" className="flex mb-4 pl-3 pt-2 pb-2 justify-start items-center gap-4 hover:bg-green-800 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <div className="text-3xl text-black group-hover:text-white"></div>
            <h3 className="text-base text-black group-hover:text-white font-semibold">Dashboard</h3>
          </a>
  
          <a href="/PageOne" className="flex mb-4 pl-3 pt-2 pb-2 justify-start items-center gap-4 hover:bg-green-900 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <div className="text-3xl text-black group-hover:text-white"></div>
            <h3 className="text-base text-black group-hover:text-white font-semibold">แผนที่</h3>
          </a>
  
          <a href="/PageTwo" className="flex mb-4 pl-3 pt-2 pb-2 justify-start items-center gap-4 hover:bg-green-900 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <div className="text-3xl text-black group-hover:text-white"></div>
            <h3 className="text-base text-black group-hover:text-white font-semibold">ตาราง</h3>
          </a>
  
          <a href="/PageThree" className="flex mb-4 pl-3 pt-2 pb-2 justify-start items-center gap-4 hover:bg-green-900 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <div className="text-3xl text-black group-hover:text-white"></div>
            <h3 className="text-base text-black group-hover:text-white font-semibold">หน้าน้องปี 2</h3>
          </a>
  
          <a href="/PageFour" className="flex mb-4 pl-3 pt-2 pb-2 justify-start items-center gap-4 hover:bg-green-900 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <div className="text-3xl text-black group-hover:text-white"></div>
            <h3 className="text-base text-black group-hover:text-white font-semibold">หน้าน้องปี 1</h3>
          </a>
        </div>
      </div>
  

      <div className="my-12 border-b border-blue-900 pb-4 w-full">
        <div className="flex mb-4 pl-3 pt-2 pb-2 justify-start items-center gap-4 hover:bg-green-900 rounded-md group cursor-pointer hover:shadow-lg m-auto">
          <div className="text-3xl text-black group-hover:text-white"></div>
          <h3 className="text-base text-black group-hover:text-white font-semibold">Settings</h3>
        </div>
  
        <div className="flex mb-4 pl-3 pt-2 pb-2 justify-start items-center gap-4 hover:bg-green-900 rounded-md group cursor-pointer hover:shadow-lg m-auto">
          <div className="text-3xl text-black group-hover:text-white"></div>
          <h3 className="text-base text-black group-hover:text-white font-semibold">More</h3>
        </div>
      </div>
  

      <div className="w-full">
        <div className="flex mb-4 pl-3 pt-2 pb-2 justify-start items-center gap-4 hover:bg-green-900 rounded-md group cursor-pointer hover:shadow-lg m-auto">
          <div className="text-3xl text-black group-hover:text-white"></div>
          <h3 className="text-base text-black group-hover:text-white font-semibold">Logout</h3>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default NavBar;