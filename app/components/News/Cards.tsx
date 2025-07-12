
import { NewsArticle } from "@/types/news";
import React from "react";
import Image from "next/image";
import ImagePlaceholder from "@/public/images/ImagePlaceholder.png";
import Skeleton from "./Skeleton";
import { FaRegFolderClosed } from "react-icons/fa6";

interface CardsProps {
  loading: boolean;
  errorMessage: string;
  newsData: NewsArticle[] | undefined;
  formatDate: (unixSeconds: number) => string;
}

const Cards: React.FC<CardsProps> = ({
  loading,
  errorMessage,
  newsData,
  formatDate,
}) => {
  return (
    <section className="p-2 space-y-2">
      {/* === Page Title === */}
      <label className="lg:text-[48px] text-[20px] lg:font-[600] tracking-wide p-2">
        NEWS
      </label>

      {/* === Cards Grid Container === */}
      <div className="p-5 gap-4 grid lg:grid-cols-4 grid-cols-1">
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
              className="shadow-md p-4 cursor-pointer hover:bg-[#2a283e] w-full"
              onClick={() => window.open(article?.url, "_blank")}
            >
              {/* === Image === */}
              <div className="w-full h-48 overflow-hidden my-2">
                <Image
                  src={article?.image || ImagePlaceholder}
                  alt={article?.headline || "News Image"}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* === Source & Date === */}
              <p className="flex justify-between items-center lg:font-[400] lg:text-[12px] text-[#b6b6b8]">
                <span>{article?.source?.toUpperCase() ?? ""}</span>
                <span>{formatDate(article?.datetime)?.toUpperCase() ?? ""}</span>
              </p>

              {/* === Summary Text (Truncated) === */}
              <p className="text-white font-semibold lg:text-[20px] lg:font-[500] my-2">
                {article?.summary
                  ? article.summary.length > 120
                    ? `${article.summary.slice(0, 120)}...`
                    : article.summary
                  : ""}
              </p>
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
