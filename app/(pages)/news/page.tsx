'use client'
import { fetchNews } from '@/services/newsService';
import React, { useEffect } from 'react'

const page = () => {

  // SET CATEGORY AND ROUTE FROM .env
  const category = `${process.env.NEXT_PUBLIC_CATEGORY}`;
  const route = `${process.env.NEXT_PUBLIC_ROUTE}`

  //FUNCTION TO FETCH NEWS
  const loadNews = async () => {
    try {
      const news = await fetchNews(category, route);
      console.log('log console', news);
    } catch (error) {
      console.log('Error loading news:', error);
    }
  };

  // USEEFFECT TO LOAD NEWS WHEN THE COMPONENT MOUNTS
  useEffect(() => {
    loadNews();
  }, [])

  return (
    <div>
      News Home Pageeee
      <p className='text-red-500'> Home</p>
    </div>
  )
}

export default page
