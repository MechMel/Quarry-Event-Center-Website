import React from "react";
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
    "EQUESTRIAN EVENTS",
    "WRESTLING MEET",
    "GYM RENTAL",
    "CLUBS",
    "BOOK SIGNINGS",
    "AND SO MUCH MORE!",
  ];

  // Gallery images data
  const galleryImages = [
    {
      src: "alex.webp",
      alt: "Alex moliski",
    },
    {
      src: "rames.webp",
      alt: "Rames quinerie",
    },
    {
      src: "luca.webp",
      alt: "Luca maffeis iy",
    },
    {
      src: "bence.webp",
      alt: "Bence balla",
    },
  ];

  return (
    <div className="flex flex-col items-center relative bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[716px] bg-white flex items-center justify-center">
        <div className="w-full max-w-[1024px] h-full [background:url(..//frame-7.webp)_center_center_/_cover] flex items-center justify-center">
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

      <div className="w-full max-w-[1024px] mx-auto">
        {/* About Section */}
        <Card className="w-full border-none shadow-none rounded-none">
          <CardContent className="flex flex-col items-center justify-center gap-4 px-8 py-12">
            <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Modern_No._20-Regular',Helvetica] font-normal text-[#1e3755] text-[35px] text-center tracking-[0] leading-[normal]">
              About The Quarry
            </h2>
            <Separator className="w-[202px] bg-[#1e3755]" />
            <p className="relative self-stretch [font-family:'Montserrat',Helvetica] font-normal text-[#151313] text-[13px] text-center tracking-[0] leading-[19px]">
              Enjoy a nostalgic experience in the Pacific NW at the Quarry Event
              Center! From weddings to festivals we are here to provide a
              location that will provide atmosphere and quality. Themed rooms
              create rustic charm and sentimental spaces so that your memories
              will last a lifetime. <br />
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
          <CardContent className="flex flex-col items-center justify-center gap-4 px-0 py-24 [background:linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%),url(..//frame-8.webp)_50%_50%_/_cover]">
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
