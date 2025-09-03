// // components/Navbar.js
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const titles = {
//   "/dashboard": "PHAROS",
// };

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const currentPath = location.pathname;

//   const pageTitle =
//     titles[currentPath] ||
//     "PHAROS";
//   // "SHERPA";

//   const [laTime, setLaTime] = useState("");

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const timeInLA = new Intl.DateTimeFormat("en-US", {
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//         hour12: true,
//         timeZone: "America/Los_Angeles",
//       }).format(now);
//       setLaTime(timeInLA);
//     };

//     updateTime();
//     const interval = setInterval(updateTime, 1000);

//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <>
//       <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-center z-10">
//         {/* Back and Home buttons */}
//         <div className="flex items-center gap-3 sm:gap-4">
//           <button
//             onClick={() => navigate(-1)}
//             className="flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white p-2 sm:p-2.5 rounded-xl transition-transform duration-300 hover:scale-105 shadow-sm cursor-pointer"
//           >
//             <img
//               src="/icons/Frame-77-1.png"
//               alt="Back"
//               className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
//             />
//           </button>

//           <button
//             onClick={() => {
//               if (currentPath === "/dashboard") {
//                 window.location.href =
//                   "http://103.204.95.218:7061/main-dashboard";
//               } else {
//                 navigate("/dashboard");
//               }
//             }}
//             className="flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white p-2 sm:p-2.5 rounded-xl transition-transform duration-300 hover:scale-105 shadow-sm cursor-pointer"
//           >
//             <img
//               src="/icons/Frame-76.png"
//               alt="Home"
//               className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
//             />
//           </button>
//         </div>
//         {/* Right side info (instead of Logout) */}
//         <div className="flex flex-col text-right text-white text-sm sm:text-lg">
//           <div className="flex items-center justify-end gap-6">
//             {/* Location */}
//             <span className="font-semibold">Los Angeles , CA , USA</span>

//             {/* Time */}
//             <span className="font-semibold">{laTime}</span>
//           </div>

//           <div className="flex items-center justify-end gap-6 text-gray-200">
//             {/* Weather */}
//             <span className="flex items-center gap-1">
//               <span role="img" aria-label="sun">
//                 ☀️
//               </span>
//               Sunny | 22°C
//             </span>

//             {/* System Status */}
//             <span className="flex items-center gap-1">
//               <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//               System Active
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Title */}
//       <div className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 border-b border-white w-full text-center pb-0 sm:pb-4 px-4 leading-tight ">
//         <span className="font-bold bg-gradient-to-r from-[#00A1FF] via-white to-[#5AA1D1] bg-clip-text text-transparent tracking-wide">
//           {pageTitle}
//         </span>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const titles = {
  "/dashboard": "PHAROS",
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const pageTitle = titles[currentPath] || "PHAROS";

  const [laTime, setLaTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeInLA = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "America/Los_Angeles",
      }).format(now);
      setLaTime(timeInLA);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full flex justify-between items-center z-10 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4">
        {/* Left section: Back and Home buttons */}
        <div className="flex items-center gap-3 sm:gap-4 flex-1">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white p-2 sm:p-2.5 rounded-xl transition-transform duration-300 hover:scale-105 shadow-sm cursor-pointer"
          >
            <img
              src="/icons/Frame-77-1.png"
              alt="Back"
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            />
          </button>

          <button
            onClick={() => {
              if (currentPath === "/dashboard") {
                window.location.href = "http://103.204.95.218:7061/main-dashboard";
              } else {
                navigate("/dashboard");
              }
            }}
            className="flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white p-2 sm:p-2.5 rounded-xl transition-transform duration-300 hover:scale-105 shadow-sm cursor-pointer"
          >
            <img
              src="/icons/Frame-76.png"
              alt="Home"
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            />
          </button>
        </div>

        {/* Center section: Title */}
        <div className="flex-1 text-center">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00A1FF] via-white to-[#5AA1D1] bg-clip-text text-transparent tracking-wide">
            {pageTitle}
          </span>
        </div>

        {/* Right section: Info and status */}
        <div className="flex flex-col text-right text-white text-sm sm:text-lg flex-1">
          <div className="flex items-center justify-end gap-6">
            <span className="font-semibold">Los Angeles , CA , USA</span>
            <span className="font-semibold">{laTime}</span>
          </div>
          <div className="flex items-center justify-end gap-6 text-gray-200">
            <span className="flex items-center gap-1">
              <span role="img" aria-label="sun">
                ☀️
              </span>
              Sunny | 22°C
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              System Active
            </span>
          </div>
        </div>
      </div>
      {/* Divider line at the bottom, with reduced margin */}
      <div className="border-b border-gray-600 my-2 mx-4 sm:mx-6 lg:mx-8"></div>
    </>
  );
};

export default Navbar;