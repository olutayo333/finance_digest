'use client'
import { fetchNews } from '@/services/newsService';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import BlottLogo2 from '@/public/images/BLOTT (2).png'
import BlottLogo from '@/public/images/BLOTT.png'
import { NewsArticle } from '@/types/news';
import ImagePlaceholder from '@/public/images/ImagePlaceholder.png';
import Cards from '@/app/components/News/Cards';

const page = () => {

  // SET CATEGORY AND ROUTE FROM .env
  const category = `${process.env.NEXT_PUBLIC_CATEGORY}`;
  const route = `${process.env.NEXT_PUBLIC_ROUTE}`
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [newsData, setNewsData] = useState<NewsArticle[]>()

  //FUNCTION TO FETCH NEWS
  const loadNews = async () => {
    try {
      setLoading(true);
      const news = await fetchNews(category, route);
      setNewsData(news || [])
    } catch (error) {
      console.log('Error loading news:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // USEEFFECT TO LOAD NEWS WHEN THE COMPONENT MOUNTS
  useEffect(() => {
    loadNews();
  }, [])

  //Format Date logic
  const formatDate = (unixSeconds: number) => {
    if (!unixSeconds) return '';
    const date = new Date(unixSeconds * 1000);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="p-2 space-y-2 ">
      
      <section className="flex justify-center items-center mx-auto my-2 p-2 lg:border-none border-b border-[#272735] pb-5 lg:pb-0">
        <label className="lg:block hidden">
            {/* Desktop */}
          <Image
            src={BlottLogo2}
            alt="BLOTT Image"
            width={800}   
            height={400}  
            sizes="(max-width: 640px) 400px, (max-width: 1024px) 600px, 800px"
            className="w-full h-auto max-w-[800px] md:max-w-[600px] sm:max-w-[400px]"
            priority
          />
        </label>
          {/* Mobile */}
        <label className=" block lg:hidden">
          <Image
            src={BlottLogo}
            alt="BLOTT Image"
            width={800}   
            height={400}  
            sizes="(max-width: 640px) 400px, (max-width: 1024px) 600px, 800px"
            className="w-full h-auto max-w-[800px] "
            priority
          />
          
        </label> 
      </section>
     {/* <hr /> */}
      <Cards
        loading={loading}
        errorMessage={errorMessage}
        newsData={newsData}
        formatDate={formatDate}
      />
      
    </div>

  )
}

export default page
