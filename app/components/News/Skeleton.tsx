import React from 'react';

const Skeleton = () => {
  return (
    <div className="shadow-md p-4 cursor-pointer animate-pulse w-full">
      {/* Mobile structure: flex row on mobile, stacked on lg */}
      <div className="flex flex-row lg:flex-col gap-4 w-full">
        {/* Image Placeholder */}
        <div className="w-1/3 lg:w-full h-24 lg:h-48 bg-[#2a283e] rounded"></div>

        {/* Content Right */}
        <div className="flex flex-col justify-between flex-1">
          {/* Source & Date Placeholder */}
          <div className="flex justify-between items-center text-[12px]">
            <span className="h-4 w-16 bg-[#2a283e] rounded"></span>
            <span className="h-4 w-12 bg-[#2a283e] rounded"></span>
          </div>

          {/* Mobile Summary Placeholder */}
          <div className="my-2">
            <div className="h-4 bg-[#2a283e] rounded w-full"></div>
            <div className="h-4 bg-[#2a283e] rounded w-5/6 mt-2"></div>
          </div>

          {/* Desktop Summary Placeholder (hidden on mobile) */}
          <div className="hidden lg:block space-y-2 mt-2">
            <div className="h-4 bg-[#2a283e] rounded w-full"></div>
            <div className="h-4 bg-[#2a283e] rounded w-5/6"></div>
            <div className="h-4 bg-[#2a283e] rounded w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
