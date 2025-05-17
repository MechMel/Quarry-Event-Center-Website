import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const Iphone = (): JSX.Element => {
  // Event types data for mapping
  const eventTypes = [
    "WEDDINGS",
    "CONCERTS",
    "CONFERENCES",
    "RETREATS",
    "BOARD MEETINGS",
    "FAMILY GET-TOGETHERS",
    "FESTIVALS",
    "DOG SHOWS",
    "SEMINARS",
    "BAZAARS",
    "WRESTLING MEET",
    "GYM RENTAL",
    "CLUBS",
    "BOOK SIGNINGS",
    "AND SO MUCH MORE!",
  ];

  const heroImages = [
    {
      src: "hero-1.webp",
      alt: "Hero Image 1",
    },
    {
      src: "hero-2.webp",
      alt: "Hero Image 2",
    },
    {
      src: "hero-3.webp",
      alt: "Hero Image 3",
    },
    {
      src: "hero-4.webp",
      alt: "Hero Image 4",
    },
    {
      src: "hero-5.webp",
      alt: "Hero Image 5",
    },
    {
      src: "hero-6.webp",
      alt: "Hero Image 6",
    },
  ];

  // State to track the current hero image index
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Preload images
  useEffect(() => {
    heroImages.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  }, [heroImages]);

  // Rotate through the hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2.5 * 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [heroImages.length]);

  // Sidekick images data (new cycling/photo section)
  const sidekickImages = [
    { src: "sidekick-1.webp", alt: "Sidekick Image 1" },
    { src: "sidekick-2.webp", alt: "Sidekick Image 2" },
    { src: "sidekick-3.webp", alt: "Sidekick Image 3" },
  ];

  // State for current sidekick image
  const [currentSidekickIndex, setCurrentSidekickIndex] = useState(0);

  // Preload sidekick images
  useEffect(() => {
    sidekickImages.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  }, [sidekickImages]);

  // Rotate through sidekick images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSidekickIndex((prev) => (prev + 1) % sidekickImages.length);
    }, 2.5 * 1000);

    return () => clearInterval(interval);
  }, [sidekickImages.length]);

  // Gallery images
  const galleryImages = [
    {
      src: "gallery-1.webp",
      alt: "Gallery Image 1",
    },
    {
      src: "gallery-2.webp",
      alt: "Gallery Image 2",
    },
    {
      src: "gallery-3.webp",
      alt: "Gallery Image 3",
    },
    {
      src: "gallery-4.webp",
      alt: "Gallery Image 4",
    },
  ];

  return (
    <div className="flex flex-col items-center relative bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[716px] bg-white flex items-center justify-center">
        <div
          className="w-full max-w-[896px] h-full flex items-center justify-center"
          // style={{
          //   background: `url(${heroImages[currentHeroIndex].src}) center center / cover`,
          // }}
        >
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 max-w-[896px] w-full h-[716px] transition-opacity duration-1000 ${
                index === currentHeroIndex ? "opacity-100" : "opacity-0"
              } bg-center bg-cover bg-no-repeat`}
              style={{ backgroundImage: `url(${image.src})` }}
            />
          ))}
          <div className="relative w-[502px] h-[502px] rounded-[251px] flex flex-col items-center justify-center">
            <img
              className="w-[248px] h-[293px]"
              alt="Vector"
              src="vector.svg"
            />
            <div className="mt-6 [font-family:'Montserrat',Helvetica] font-medium text-white text-[26.6px] text-center tracking-[2.66px] leading-[normal]">
              EVENT CENTER
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[896px] mx-auto">
        {/* About Section */}
        <Card className="w-full border-none shadow-none rounded-none">
          <CardContent className="flex flex-col items-center justify-center gap-4 px-8 py-12">
            <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Modern_No._20-Regular',Helvetica] font-normal text-[#1e3755] text-[35px] text-center tracking-[0] leading-[normal]">
              About The Quarry
            </h2>
            <Separator className="w-[202px] bg-[#1e3755]" />
            <p className="relative self-stretch [font-family:'Montserrat',Helvetica] font-normal text-[#151313] text-[13px] text-center tracking-[0] leading-[19px]">
              Enjoy a nostalgic experience in the Pacific NW at the Quarry Event
              Center! From weddings to festivals we are here to provide a
              location that will provide atmosphere and quality. Themed rooms
              create rustic charm and sentimental spaces so that your memories
              will last a lifetime.
              <br />
              Come visit us!
            </p>
          </CardContent>
        </Card>

        {/* Events Section */}
        <div className="flex flex-col items-center justify-center gap-2.5 px-6 py-12 relative self-stretch w-full [background:linear-gradient(0deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.4)_100%),url(..//frame-4.webp)_50%_50%_/_cover]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-[#f6f5f2] text-sm text-center tracking-[1.40px] leading-8">
            {eventTypes.map((event, index) => (
              <React.Fragment key={index}>
                {event}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Quote + Sidekick Combined Section */}
        <div style={{ height: `10px` }} />
        <div className="w-full flex flex-col md:flex-row gap-2.5">
          {/* Quote Section */}
          <div className="flex flex-col items-center justify-center px-6 py-12 w-full md:w-1/2 bg-[#1e3755]">
            <p className="relative self-stretch [font-family:'Montserrat',Helvetica] italic font-normal text-[#f6f5f2] text-[26px] text-center tracking-[0] leading-[40px]">
              “Consider the rock from which you were cut, the quarry from which
              you were mined...”
            </p>
          </div>

          {/* Sidekick Images Section */}
          <div className="relative w-full md:w-1/2 h-[300px] bg-white flex items-center justify-center">
            <div className="w-full max-w-[896px] h-full flex items-center justify-center">
              {sidekickImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 max-w-[896px] w-full h-full transition-opacity duration-1000 ${
                    index === currentSidekickIndex ? "opacity-100" : "opacity-0"
                  } bg-center bg-cover bg-no-repeat`}
                  style={{ backgroundImage: `url(${image.src})` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <Card className="w-full border-none shadow-none rounded-none">
          <CardContent className="flex flex-col items-center justify-center gap-4 px-8 py-12">
            <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Modern_No._20-Regular',Helvetica] font-normal text-[#1e3755] text-[35px] text-center tracking-[0] leading-[normal]">
              Our Timeline
            </h2>
            <Separator className="w-[202px] bg-[#1e3755]" />
            <p className="relative self-stretch [font-family:'Montserrat',Helvetica] font-normal text-[#151313] text-sm text-center tracking-[0] leading-5">
              We are under development and hope to be ready for customers summer
              2025. Current rental areas include a 4000+sq ft gym with
              restrooms, a commercial kitchen with walk in fridge, and 4 acres
              of pasture.
            </p>
          </CardContent>
        </Card>

        {/* Gallery Section */}
        <div className="flex flex-wrap items-center justify-center gap-[10px_10px] relative self-stretch w-full">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative w-[190px] h-[130px] bg-white">
              <img
                className="absolute w-full h-full top-0 left-0 object-cover"
                alt={image.alt}
                src={image.src}
              />
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="w-full border-none shadow-none rounded-none">
          <CardContent className="flex flex-col items-center justify-center gap-4 px-0 py-24 [background:linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%),url(..//image-2.webp)_50%_50%_/_cover]">
            <div className="flex flex-col items-center gap-3 relative self-stretch w-full">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Modern_No._20-Regular',Helvetica] font-normal text-[#1e3755] text-[35px] text-center tracking-[0] leading-[normal]">
                Contact us at
              </h2>
              <Separator className="w-[202px] bg-[#1e3755] mb-[-1.00px]" />
            </div>
            <p className="relative self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#151414] text-sm text-center tracking-[0] leading-[normal]">
              INFO@QUARRYEVENTCENTER.COM
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
