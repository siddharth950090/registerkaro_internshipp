import React from "react";
import Card from "../Utilities/Card";
import confidential from "../assets/confidential.svg";
import fee from "../assets/fee.svg";
import guarantee from "../assets/guarantee.svg";
import assistance from "../assets/assistance.svg";
import idea from "../assets/idea.svg";
import tv from "../assets/tv.svg";
import video from "../assets/video.png";

export default function Why() {
  return (
    <>
      <div className=" bg-white  p-4">
        <div className="bg-yellow-300 p-2 rounded-lg w-fit m-4">
          WHY REGISTERKARO.IN
        </div>

        <div className="max-w-5xl mx-auto text-center mt-20">
          <h1 className="text-4xl font-bold text-black">
            Why Choose Register Karo
          </h1>
          <div className="bg-red-500 w-xl flex justify-center items-center p-4 mt-4 rounded-lg text-white">
            <p className="p-4">
              It is with consistent services and results that build trust with
              the people and that in turn help us to serve the business better.
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-4 mt-10">
          <Card
            color="bg-[#FCDDEC]"
            sign={confidential}
            header="Confidential & Safe"
            title="All your private information is safe with us"
          />

          <Card
            color="bg-[#EDF3FF]"
            sign={fee}
            header="No Hidden Fee"
            title="Everything is put before you with no hidden charges or conditions"
          />

          <Card
            color="bg-[#EDF3FF]"
            sign={guarantee}
            header="Guaranteed Satisfaction"
            title="We ensure that you stay 100% satisfied with our offered services"
          />

          <Card
            color="bg-[#FCDDEC]"
            sign={assistance}
            header="Expert CA/CS Assistance"
            title="Prompt support from our in-house expert professionals"
          />

          <Card
            color="bg-[#FCDDEC]"
            sign={confidential}
            header="Confidential & Safe"
            title="All your private information is safe with us"
          />
        </div>
      </div>
      <div className="bg-blue-900 text-white sm:flex items-center justify-center  py-8 px-4 md:px-8 gap-4">
        <div className="sm:w-1/2">
          <div className="my-4">
            <h1 className="text-4xl font-bold my-2">
              {" "}
              Our Video Introductions
            </h1>
            <p className="text-gray-300">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna vulputate pellentesque a diam tincidunt apis dui.
            </p>
          </div>
          <div className="my-4">
            <div className="flex gap-4 my-4">
              <img src={idea} alt="" />
              <div>
                <h3>Explore ideas together</h3>
                <p className="text-gray-300">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <img src={tv} alt="" />
              <div>
                <h3>Bring those ideas to life</h3>
                <p className="text-gray-300">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 ">
          <img className="w-[100%]" src={video} alt="" />
        </div>
      </div>
    </>
  );
}
