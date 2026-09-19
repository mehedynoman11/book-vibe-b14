import Image from 'next/image';
import React from 'react';
import bannerImg from "@/assets/hero_img.jpg"

const Banner = () => {
    return (
        <header className="px-4 sm:px-6 lg:px-0 mt-10">
            <div className="container mx-auto max-w-275 rounded-2xl bg-[#F3F3F3] 
                  grid grid-cols-1 md:grid-cols-2 
                  items-center gap-8 
                  px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12">

                {/* Text */}
                <div className="space-y-5 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                        Books to freshen up
                        <br className="hidden sm:block" />
                        your bookshelf
                    </h1>

                    <button type="button" className="btn btn-success">
                        View The List
                    </button>
                </div>

                {/* Image */}
                <div className="flex justify-center md:justify-end">
                    <Image
                        src={bannerImg}
                        alt="Banner"
                        width={400}
                        className="w-full max-w-75 sm:max-w-87.5 md:max-w-100 h-auto"
                    />
                </div>

            </div>
        </header>
    );
};

export default Banner;