"use clientb";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

interface MarketPlaceCarouselProps {
  items: {
    name: string;
    image: StaticImageData;
  }[];
  subtitle: string;
}

const MarketPlaceCarousel = ({ items, subtitle }: MarketPlaceCarouselProps) => {
  const renderItems = items.map((item) => {
    return (
      <CarouselItem
        key={item.name}
        className="min-w96 basis-1/3 sm:basis-1/4 lg: md:basis-1/5 space-y-2 bg-red-30"
      >
        <div className="rounded-full bg-[#f6f6f6] flex size-24 aspect-square">
          <Image
            className="mx-auto my-auto object-contain"
            src={item.image}
            alt={item.name}
          />
        </div>
        <p className="text-center bg-red-5 w-fit text- font-medium overflow-auto break-words">
          {item.name}
        </p>
      </CarouselItem>
    );
  });

  return (
    <>
      <div className="lg:w-[60%] bg-indigo-40 bg-white rounded-lg space-y-4  px-7 py-4">
        <h5 className="font-medium z-20">{subtitle}</h5>
        <Carousel
          marketPlace={true}
          className="w-[90% ml-auto bg-fuchsia-40 bg-white z-30"
        >
          <CarouselPrevious className="absolute z-10 top-16 -left-4 cursor-pointer  w-36 h-[10.6rem] border-none hover:bg-white rounded-none bg-white" />
          <CarouselContent>{renderItems}</CarouselContent>
          <CarouselNext className="absolute top-16 right-0 cursor-pointer  border-none hover:bg-white w-36 h-[10.6rem] rounded-none bg-red-20 bg-white " />
        </Carousel>
      </div>
    </>
  );
};

export default MarketPlaceCarousel;
