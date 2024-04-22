import React from "react";

import Image from "next/image";

import one from "@/public/1.svg";
import two from "@/public/2.svg";
import three from "@/public/3.svg";
import vector from "@/public/vector_black_bg.svg";
import people1 from "@/public/people_slant_1.svg";

import slant from "@/public/slant_white.svg";
// import slant from "@/public/black_slant.svg";

const YourJourney = () => {
  return (
    <div className=" p-4 pt-16 md:p-8 lg:p-20 space-y4">
      <h4 className="text-3xl md:text-4xl lg:text-5xl mb-10 lg:mb-20 italic text-center">
        Start your journey today.
      </h4>

      {/* mobile */}
      <div className="lg:hidden">
        {/* one */}
        <div
          className=" aspect-[792/396] flex "
          style={{
            backgroundImage: `url(/people_1_cropped.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" my-auto lg:bg-transparent">
            {/* left */}
            <div className="  my-auto px-8  ">
              <div className="flex space-x-4 ">
                <Image
                  className="w-10 md:w-fit h-fit"
                  src={one}
                  alt="one"
                  width={0}
                  height={0}
                />
                <div className="max-w-sm  space-y-4">
                  <h3 className="text-2xl xl:text-3xl font-medium italic">
                    Find your next star performer.
                  </h3>
                  <p className="text-[#20222980] ">
                    Explore the vast Zwilt marketplace to find the candidate
                    that meets your needs.
                  </p>
                  <div className="flex space-x-2">
                    <button>
                      <Image
                        src={vector}
                        alt="lady"
                        width={0}
                        height={0}
                        className="w-10 md:w-full"
                      />
                    </button>
                    <p className="my-auto">Join Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* two */}

        <div
          className="-mt-8 aspect-[736/396] flex "
          style={{
            backgroundImage: `url(/people_2_cropped.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" bg-transparent flex lg:basis-1/2">
            {/* left */}
            <div className="  my-auto px-8  ">
              <div className="flex space-x-4 ">
                <Image
                  className="w-10 md:w-fit h-fit"
                  src={two}
                  alt="one"
                  width={0}
                  height={0}
                />
                <div className="max-w-sm  space-y-4">
                  <h3 className="text-2xl xl:text-3xl font-medium italic">
                    Evaluate to your heart&apos;s content.
                  </h3>
                  <p className="text-[#20222980] ">
                    Assess the candidate through work history, transparent tests
                    and video interviews.
                  </p>
                  <div className="flex space-x-2">
                    <button>
                      <Image
                        src={vector}
                        alt="lady"
                        width={0}
                        height={0}
                        className="w-10 xl:w-full"
                      />
                    </button>
                    <p className="my-auto">Join Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* three */}
        <div
          className="-mt-8 aspect-[736/396] object-right flex "
          style={{
            backgroundImage: `url(/people_3_cropped.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" bg-transparent flex lg:basis-1/2">
            {/* left */}
            <div className="  my-auto px-8  ">
              <div className="flex space-x-4 ">
                <Image
                  className="w-10 md:w-fit h-fit"
                  src={three}
                  alt="one"
                  width={0}
                  height={0}
                />
                <div className="max-w-sm  space-y-4">
                  <h3 className="text-2xl xl:text-3xl font-medium italic">
                    Start building your team.
                  </h3>
                  <p className="text-[#20222980] ">
                    Explore the vast Zwilt marketplace to find the candidate
                    that meets your needs.
                  </p>
                  <div className="flex space-x-2">
                    <button>
                      <Image
                        src={vector}
                        alt="lady"
                        width={0}
                        height={0}
                        className="w-10 xl:w-full"
                      />
                    </button>
                    <p className="my-auto">Join Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        {/* one */}
        <div
          className=" aspect-[1300/396] flex "
          style={{
            backgroundImage: `url(/people_1.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" bg-[#D8D2FF40] lg:bg-transparent flex lg:basis-1/2">
            {/* left */}
            <div className="  my-auto px-8  ">
              <div className="flex space-x-4 ">
                <Image
                  className=" h-fit"
                  src={one}
                  alt="one"
                  width={0}
                  height={0}
                />
                <div className="max-w-sm space-y-2 xl:space-y-4">
                  <h3 className="text-2xl xl:text-3xl font-medium italic">
                    Find your next star performer.
                  </h3>
                  <p className="text-[#20222980] ">
                    Explore the vast Zwilt marketplace to find the candidate
                    that meets your needs.
                  </p>
                  <div className="flex space-x-2">
                    <button>
                      <Image
                        src={vector}
                        alt="lady"
                        width={0}
                        height={0}
                        className="w-10 xl:w-full"
                      />
                    </button>
                    <p className="my-auto">Join Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* two */}
        <div
          className="-mt-8 aspect-[1300/396] flex "
          style={{
            backgroundImage: `url(/people_2.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" bg-[#D8D2FF40] lg:bg-transparent flex lg:basis-1/2">
            {/* left */}
            <div className="  my-auto px-8  ">
              <div className="flex space-x-4 ">
                <Image
                  className=" h-fit"
                  src={two}
                  alt="one"
                  width={0}
                  height={0}
                />
                <div className="max-w-sm space-y-2 xl:space-y-4">
                  <h3 className="text-2xl xl:text-3xl font-medium italic">
                    Evaluate to your heart&apos;s content.
                  </h3>
                  <p className="text-[#20222980] ">
                    Assess the candidate through work history, transparent tests
                    and video interviews.
                  </p>
                  <div className="flex space-x-2">
                    <button>
                      <Image
                        src={vector}
                        alt="lady"
                        width={0}
                        height={0}
                        className="w-10 xl:w-full"
                      />
                    </button>
                    <p className="my-auto">Join Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* three */}
        <div
          className="-mt-8 aspect-[1300/396] flex "
          style={{
            backgroundImage: `url(/people_3.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" bg-[#D8D2FF40] lg:bg-transparent flex lg:basis-1/2">
            {/* left */}
            <div className="  my-auto px-8  ">
              <div className="flex space-x-4 ">
                <Image
                  className=" h-fit"
                  src={three}
                  alt="one"
                  width={0}
                  height={0}
                />
                <div className="max-w-sm space-y-2 xl:space-y-4">
                  <h3 className="text-2xl xl:text-3xl font-medium italic">
                    Start building your team.
                  </h3>
                  <p className="text-[#20222980] ">
                    Explore the vast Zwilt marketplace to find the candidate
                    that meets your needs.
                  </p>
                  <div className="flex space-x-2">
                    <button>
                      <Image
                        src={vector}
                        alt="lady"
                        width={0}
                        height={0}
                        className="w-10 xl:w-full"
                      />
                    </button>
                    <p className="my-auto">Join Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourJourney;
