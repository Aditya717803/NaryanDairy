import React from "react";  
import Q1 from "../Images/Q1.png"; // Adjust the relative path as needed  
import Q2 from "../Images/Q2.png";  
  
const Banner = () => {  
  return (  
   <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 px-2 justify-center md:justify-center">  
    <div className="w-full md:w-1/3 flex justify-center">  
      <img  
       src={Q2}  
       alt="Q2"  
       className="w-full h-[400px] p-6 mx-auto md:mx-auto md:w-[350px] md:h-[400px]"  
      />  
    </div>  
    <div className="w-auto md:w-1/2 flex justify-center">  
      <img  
       src={Q1}  
       alt="Q1"  
       className="w-[750px] h-[350px] p-5 shadow-xl shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 mx-auto md:mx-auto"  
      />  
    </div>  
   </div>  
  );  
};  
  
export default Banner;
