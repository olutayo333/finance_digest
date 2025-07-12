import api from './api';

const apiKey = process.env.NEXT_PUBLIC_API_KEY; //GETTING THE API KEY FROM SECRETE .ENV FILE

//QUESRY FOR FETCHING NEWS
export const fetchNews = async (category:string, route:string) => {
  try {
    const response = await api.get(`/${route}?category=${category}&token=${apiKey}`);
    return response?.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
