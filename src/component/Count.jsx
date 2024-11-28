import React from "react";
import CountUp from "react-countup";
import C1 from '../Images/C1.png'; 


function Statistics()  {
  const stats = [
    {
      count: 100000,
      suffix: "+",
      description: "litres/day",
      detail: "Manufacturing Capacity",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12 text-blue-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 4.5V2.25M15 4.5V2.25M6.75 5.25h10.5M9 9v12m6-12v12m4.5-15.75h-15A1.5 1.5 0 003 6v14.25c0 .414.336.75.75.75h15c.414 0 .75-.336.75-.75V6a1.5 1.5 0 00-1.5-1.5z"
          />
        </svg>
      ),
    },
    {
      count: 16,
      suffix: "+",
      description: "Company outlets",
      detail: "",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12 text-blue-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75L12 3l9.75 3.75M3 8.25v9.75c0 .621.504 1.125 1.125 1.125h15.75c.621 0 1.125-.504 1.125-1.125V8.25M9 21v-6h6v6"
          />
        </svg>
      ),
    },
    {
      count: 3000,
      suffix: "+",
      description: "Corporate customers",
      detail: "Served Daily",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12 text-blue-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11c2.485 0 4.5-1.567 4.5-3.5S14.485 4 12 4 7.5 5.567 7.5 7.5 9.515 11 12 11zM8.25 14.5c.621-.621 2.07-1.5 3.75-1.5s3.129.879 3.75 1.5M12 21.75c3.728 0 6.75-.708 6.75-3.75 0-.696-.24-1.33-.64-1.87M12 21.75c-3.728 0-6.75-.708-6.75-3.75 0-.696.24-1.33.64-1.87M9 14.5c-2.254 0-4.5.98-4.5 3"
          />
        </svg>
      ),
    },
    {
      count: 1200,
      suffix: "+",
      description: "Stores",
      detail: "(Retail Distribution)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12 text-blue-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75A3 3 0 015.25 4.5h13.5a3 3 0 012.737 2.25l1.463 6.75a3 3 0 01-2.737 3.75H3.524a3 3 0 01-2.738-3.75l1.463-6.75z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15a3.75 3.75 0 007.5 0M9 15V9m6 6V9M9 12h6"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative bg-yellow-400 py-12">

      {/* Stats Section */}
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-blue-700 relative z-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-yellow-200 bg-opacity-90 p-6 rounded-lg shadow-lg"
          >
            {stat.icon}
            <h2 className="text-3xl font-bold mt-4">
              <CountUp end={stat.count} duration={30} suffix={stat.suffix} />
            </h2>
            <p className="text-lg mt-2">{stat.description}</p>
            <p className="text-sm">{stat.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
