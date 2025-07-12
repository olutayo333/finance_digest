'use client'
import { fetchNews } from '@/services/newsService';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import BlottLogo from '@/public/images/BLOTT.png'
import { NewsArticle } from '@/types/news';
import ImagePlaceholder from '@/public/images/ImagePlaceholder.png';

const page = () => {

  // SET CATEGORY AND ROUTE FROM .env
  const category = `${process.env.NEXT_PUBLIC_CATEGORY}`;
  const route = `${process.env.NEXT_PUBLIC_ROUTE}`

  const [newsData, setNewsData] = useState<NewsArticle[]>()
  //FUNCTION TO FETCH NEWS
  const loadNews = async () => {
    try {
      const news = await fetchNews(category, route);
      console.log('log console', news);
      setNewsData(news || [])
    } catch (error) {
      console.log('Error loading news:', error);
    }
  };

  // USEEFFECT TO LOAD NEWS WHEN THE COMPONENT MOUNTS
  useEffect(() => {
    loadNews();
  }, [])

  //Format Date
  const formatDate = (unixSeconds:number) => {
  if (!unixSeconds) return '';
  const date = new Date(unixSeconds * 1000);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};


  return (
    <div className="p-2 space-y-2">
      <section className="flex justify-center items-center mx-auto p-2">
        <label className="">
          <Image
            src={BlottLogo}
            alt="BLOTT Image"
            width={800}   // Higher base resolution
            height={400}  // Maintain aspect ratio
            sizes="(max-width: 640px) 400px, (max-width: 1024px) 600px, 800px"
            className="w-full h-auto max-w-[800px] md:max-w-[600px] sm:max-w-[400px]"
            priority
          />
        </label>
      </section>

      <section className='p-2 space-y-2'>
        <label className=' lg:text-[28px] text-[20px] font-bold tracking-wide p-2' >
          NEWS
        </label>
        {/* <div className='p-2 space-y-2 gap-2 grid lg:grid-cols-4 grid-cols-1'>
          {
           newsData && newsData.length >0 ? 
           newsData?.map((article, index) => (
              <div key={article.id ?? index} className=" shadow-md p-4">
                <Image
                  src={article.image || ImagePlaceholder} // Fallback image if none provided
                  alt={article.headline || "News Image"}
                  width={400}
                  height={200}
                  className="w-full h-auto mb-4"
                />
                
                <h2 className="text-xl font-semibold mb-2">{article?.category}</h2>
                <p className="text-gray-600 mb-2">{article.summary}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Read more
                </a>
              </div>
            )) :
            <div>
              Loading.....
            </div>
          }
        </div> */}

        <div className='p-2 space-y-2 gap-2 grid lg:grid-cols-4 grid-cols-1 '>
          {
            newsData && newsData?.length > 0 ?
              newsData.map((article, index) => (
                <div key={article?.id ?? index} className="shadow-md p-4">

                  {/* Image container with fixed height and overflow-hidden */}
                  <div className="w-full h-48 overflow-hidden mb-4">
                    <Image
                      src={article?.image || ImagePlaceholder}
                      alt={article?.headline || "News Image"}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className='flex justify-between items-center '>
                    <span>{article?.source ?? ''}</span>
                    <span>{formatDate(article?.datetime) ?? ''}</span>
                  </p>

                  <p className="text-white font-semibold lg:text-[20px]  mb-2">
                    {article?.summary
                      ? article.summary.length > 100
                        ? `${article.summary.slice(0, 100)}...`
                        : article.summary
                      : ''}
                  </p>

                
                </div>
              ))
              :
              <div>Loading.....</div>
          }
        </div>

      </section>
    </div>

  )
}

export default page
