
import React from "react";

const Skeleton = () => {
  return (
    <div className="shadow-md p-4 cursor-pointer animate-pulse w-full">
      {/* Image Placeholder */}
      <div className="w-full h-48 overflow-hidden my-2 bg-[#2a283e] rounded"></div>

      {/* Source & Date Placeholder */}
      <div className="flex justify-between items-center lg:font-[400] lg:text-[12px] text-[#b6b6b8]">
        <span className="h-4 w-20 bg-[#2a283e] rounded"></span>
        <span className="h-4 w-16 bg-[#2a283e] rounded"></span>
      </div>

      {/* Summary Placeholder */}
      <div className="space-y-2 my-2">
        <div className="h-4 bg-[#2a283e] rounded w-full"></div>
        <div className="h-4 bg-[#2a283e] rounded w-5/6"></div>
        <div className="h-4 bg-[#2a283e] rounded w-2/3"></div>
      </div>
    </div>
  );
};

export default Skeleton;
