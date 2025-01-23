import React from "react";
import groupimg from "../assets/groupimg.png";
import Button from "../Utilities/Button";
export default function About() {
  return (
    <main className="flex-1 flex items-center justify-center my-8 p-4">
      <div className="max-w-6xl gap-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-orange-500">WELCOME TO REGISTER.IN</h3>
          <h1 className="text-4xl font-bold ">
            About <span className="text-orange-500">Register Karo</span>
          </h1>
          <p className="text-lg text-gray-800 ">
            We have been using Intelegencia as our DevOps vendor for our field
            service applications over the last couple of years and I’m extremely
            pleased with their performance, ability to execute, and willingness
            to adapt in our ever changing environment. Perry is an outstanding
            leader who is fanatical about customer satisfaction. He has built a
            solid team which has consistently delivered on projects thereby
            exceeding everyone’s expectations. <br /> <br /> I would strongly
            recommend their services to any organization that is looking for
            solid, reliable, and predictable outcomes.
          </p>
          <Button
            color="bg-[#1C4670] "
            text={
              <a href="/" className="font-bold mt-4 hover:opacity-70">
                Learn More <i className="fa-solid fa-circle-arrow-right"></i>
              </a>
            }
          />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <div className="  w-full " />
          <img src={groupimg} alt="" />
        </div>
      </div>
    </main>
  );
}
