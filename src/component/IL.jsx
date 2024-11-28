import React from 'react';
import MySvgImage from '../Images/L1.svg'; 
import MySvgImage2 from '../Images/L2.svg';
import MySvgImage3 from '../Images/L3.svg';
import MySvgImage4 from '../Images/L4.svg';
import MySvgImage5 from '../Images/L5.svg'; 


const SvgImageComponent = () => {
  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col justify-center items-center">
      {/* Text section */}
      <div className="text-center space-y-4">
        <div className="text-5xl text-yellow-400 font-extrabold drop-shadow-lg animate-bounce">
          "Freshness"
        </div>
        <div className="text-4xl text-blue-800 font-extrabold drop-shadow-md transition-all duration-500 hover:scale-105 hover:text-blue-600">
          in every drop, purity in every sip.
        </div>
      </div>

      {/* SVG Image section */}
      <div className="relative bg-yellow-50  mb-3 flex flex-col items-center w-auto">
        {/* Main SVG Image */}
        <div className="flex justify-center relative mb-8 mt-10">
          <img 
            src={MySvgImage} 
            alt="Main SVG Illustration" 
            className=" w-auto md:w-[1000px] h-auto transition-transform duration-700 ease-in-out hover:scale-110 ]" 
          />
        </div>

        {/* Secondary SVG Image */}
        <div className="flex justify-start w-full md:justify-start md:absolute md:ml-[-400px]">
          <img 
            src={MySvgImage2} 
            alt="Secondary SVG Illustration" 
            className="w-[500px] h-auto animate-float-slow hover:scale-110" 
          />
        </div>
        <div className="flex justify-start w-full md:justify-start md:absolute md:mt-[350px] md:ml-[-400px]">
          <img 
            src={MySvgImage3} 
            alt="Secondary SVG Illustration" 
            className="w-[500px] h-auto animate-float-slow hover:scale-110" 
          />
        </div>
        <div className="flex justify-start w-full md:justify-end md:absolute md:mt-[350px] md:mr-[-400px]">
          <img 
            src={MySvgImage4} 
            alt="Secondary SVG Illustration" 
            className="w-[500px] h-auto animate-float-slow hover:scale-110" 
          />
        </div>
        <div className="flex justify-start w-full md:justify-end md:absolute md:mb-[350px] md:mr-[-400px]">
          <img 
            src={MySvgImage5} 
            alt="Secondary SVG Illustration" 
            className="w-[500px] h-auto animate-float-slow hover:scale-110" 
          />
        </div>
      </div>
    </div>
  );
};

export default SvgImageComponent;
