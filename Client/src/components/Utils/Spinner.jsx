import React from "react";

const Spinner = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full animate-pulse bg-yellowGreen"></div>
          <div className="w-8 h-8 rounded-full animate-pulse bg-yellowGreen"></div>
          <div className="w-8 h-8 rounded-full animate-pulse bg-yellowGreen"></div>
        </div>
        <p className="text-base text-white font-[Inter]">loading...</p>
      </div>
    </div>
  );
};

export default Spinner;