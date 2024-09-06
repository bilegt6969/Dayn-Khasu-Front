import React from 'react';
import VideoPage from '../app/Components/video/page';
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import AvatarSection from '../app/Components/Avatar/page';

const Page = () => {
  return (
    <div className="mt-[-10rem]">
      <VideoPage />
      
      <section className="w-2/3 mx-[8rem] mt-[7rem]">
        <h1 className="text-6xl font-extrabold">
          WE OFFER A FULL RANGE OF{' '}
          <span className="text-blue-500">QUALITY SERVICES</span>{' '}
          ESSENTIAL TO DERISKING OUR CLIENTS' <span className="text-blue-500">PROJECTS.</span>
        </h1>
      </section>
      
      <section className="flex flex-col lg:flex-row gap-[4rem] mt-[7rem]">
  <div className="w-full lg:w-3/5 flex flex-row justify-around items-center bg-gradient-to-tl from-blue-400 via-blue-700 to-sky-400 p-[6rem] rounded-2xl text-white">
    <div className='flex flex-col items-center space-y-4'>
      <p className='text-xl md:text-2xl text-center'>Projects delivered <br/> on budget</p>
      <span className="font-bold text-5xl md:text-8xl">100%</span>
    </div>

    <div className='flex flex-col items-center space-y-4'>
      <p className='text-xl md:text-2xl text-center'>Projects delivered <br/> on time</p>
      <span className="font-bold text-5xl md:text-8xl">100%</span>
    </div>

    <div className='flex flex-col items-center space-y-4'>
      <p className='text-xl md:text-2xl text-center'>Total manhours <br/> employed</p>
      <span className="font-bold text-5xl md:text-8xl">50+</span>
    </div>
  </div>

  <div className="lg:w-1/3 flex flex-col justify-center space-y-4">
    <p className="text-lg md:text-xl">
      We aim to provide our customers and partners with the highest quality
      of service. The ultimate goal of our business is to ensure that our
      work is performed in a timely and safe manner.
    </p>
    <AvatarSection />
    <div className="space-x-10">
    <Button className="text-blue-500 text-xl p-6 border-blue-600 px-12" variant="outline">
            Write us
            <ChevronRightIcon className="h-6 w-6 text-blue-600" />
          </Button>
    </div>
    
  </div>
</section>

    </div>
  );
};

export default Page;
