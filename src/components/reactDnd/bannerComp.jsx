import { getStoreData } from '@/datasStore/useContextStore';
import Image from 'next/image';
import { useState } from 'react';

const Banner = () => {
  
  const {getBanner}= getStoreData()
  const [bannerData, setBannerData] = useState(getBanner())
  
  if(!bannerData) return <div>No Data!</div>
  
  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-purple-200 to-blue-100 p-6 shadow-md">
      {/* Left side: Text and Button */}
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-purple-500">{bannerData.title}</h1>
        <p className="text-gray-600 md:text-lg">{bannerData.subtitle}</p>
        <a
          href={bannerData.buttonLink}
          className="inline-block px-6 py-3 mt-4 rounded-full bg-purple-500 text-white font-semibold hover:bg-purple-600 transition duration-300"
        >
          {bannerData.buttonText}
        </a>
      </div>

      {/* Right side: Dynamic Image */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end">
        <Image
          src={bannerData.imageUrl}
          alt="Banner Image"
          width={400}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Banner;
