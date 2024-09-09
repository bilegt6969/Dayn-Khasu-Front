import React from 'react';
import VideoPage from './Components/HomePage/video/page';
import HomeCard from './Components/HomePage/HomeCard';
import FeaturedProjects from './Components/HomePage/FeaturedProjects'
import News from './Components/HomePage/News'

const Page = () => {
  return (
    <div className="mt-[-10rem]">
      <VideoPage />
      <HomeCard/>
      <FeaturedProjects/>
      <News/>
      
      
    </div>
  );
};

export default Page;
