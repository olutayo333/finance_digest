
import { CardsProps, NewsArticle } from "@/types/news";
import React from "react";
import Image from "next/image";
import ImagePlaceholder from "@/public/images/ImagePlaceholder.png";
import Skeleton from "./Skeleton";
import { FaRegFolderClosed } from "react-icons/fa6";

const Cards: React.FC<CardsProps> = ({
  loading,
  errorMessage,
  newsData,
  formatDate,
}) => {
  return (
    <section className="p-2 space-y-2 bg-black text-white">
      {/* === Page Title === */}
      <label className="lg:text-[48px] text-[24px] font-bold lg:tracking-wide p-2">
        NEWS
      </label>

      {/* === Cards Grid Container === */}
      <div className="lg:p-5 p-2 lg:gap-4 grid lg:grid-cols-4 grid-cols-1">
        {loading ? (
          // === Loading State: Show Skeletons ===
          Array.from({ length: 12 }).map((_, i) => (
            <Skeleton key={i} />
          ))
        ) : errorMessage ? (
          // === Error State: Show Error Message ===
          <p className="lg:text-[20px] font-[400]">{errorMessage}</p>
        ) : newsData && newsData.length > 0 ? (
          // === Success State: Map Over News Articles ===
          newsData.map((article, index) => (
            <div
              key={article?.id ?? index}
              className="shadow-md lg:p-4 p-0 cursor-pointer transition-colors duration-500 hover:bg-[#2a283e] w-full flex lg:flex-col flex-row lg:gap-0 gap-5 my-3"
              onClick={() => window.open(article?.url, "_blank")}
            >
              {/* === Image === */}
              <div className="lg:w-full w-[33%] lg:h-48 h-24 overflow-hidden ">
                <Image
                  src={article?.image || ImagePlaceholder}
                  alt={article?.headline || "News Image"}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* === Source & Date === */}
              <div className="lg:w-full w-[66%]">
                <p className="flex justify-between items-center lg:font-[400] text-[12px] text-[#b6b6b8] lg:my-2">
                  <span>{article?.source?.toUpperCase() ?? ""}</span>
                  <span>{formatDate(article?.datetime)?.toUpperCase() ?? ""}</span>
                </p>

                {/* === Summary Text (Truncated) === */}
                {/* Desktop view */}
                <p className="hidden lg:block text-white font-semibold lg:text-[20px] lg:font-semibold lg:my-2 ">
                  {article?.summary
                    ? article.summary.length > 120
                      ? `${article.summary.slice(0, 120)}...`
                      : article.summary
                    : ""}
                </p>

                {/* Mobile view */}
                <p className="lg:hidden text-white font-semibold  ">
                  {article?.summary
                    ? article.summary.length > 67
                      ? `${article.summary.slice(0, 67)}...`
                      : article.summary
                    : ""}
                </p>
              </div>
            </div>
          ))
        ) : (
          // === Empty State: No Data ===
          <div className="flex justify-center items-center my-8 col-span-full">
            <div>
              <div className="flex justify-center items-center">
                <FaRegFolderClosed className="text-4xl" />
              </div>
              <div className="mt-5">
                <p className="font-medium text-[#475467]">No Data found</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cards;
