import React from "react";
import heroBg from "../assets/heroBg.png";
import boxStack from "../assets/box-stack.svg";
import people from "../assets/people.svg";
import hand from "../assets/hand.svg";
import play from "../assets/play.svg";
import Button from "../Utilities/Button";

export default function Hero() {
  return (
    <section className="text-center bg-gradient-to-r from-white from-0% via-orange-200 via-20% to-sky-200 to-90%  h-[calc(100vh-128px)]">
      <div
        className="flex h-[100%] "
        style={{
          backgroundImage: ` url(${heroBg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <div className=" flex items-center w-1/2 ml-7 ">
          <div>
            <div>
              <div className="flex items-center gap-4">
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#FFD43B" }}
                ></i>
                <h3 className="font-bold">Google Rating</h3>
                <div>
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "#FFD43B" }}
                  ></i>
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "#FFD43B" }}
                  ></i>
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "#FFD43B" }}
                  ></i>
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "#FFD43B" }}
                  ></i>
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "#FFD43B" }}
                  ></i>
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-8 text-left">
                Your trusted partner for compliance business needs
              </h1>
              <hr className="max-w-10 bg-yellow-500 h-1 rounded-sm" />
              <p className="text-lg text-gray-600 my-8 text-left">
                An online business compliance platform that helps entrepreneurs
                and other individuals with various, <b>registrations</b>,{" "}
                <b>tax filings</b>, and other <b>legal matters</b>.
              </p>
            </div>
            <div className="flex gap-8 h-14">
              <div className="flex gap-2 items-center">
                <img className="h-[100%]" src={boxStack} alt="" />
                <div>
                  <p className="text-left text-sm text-gray-600">
                    <b className="text-xl  font-bold text-left bg-gradient-to-r from-[#DBB630] to-[#3F45AA] text-transparent bg-clip-text">
                      4.5+
                    </b>{" "}
                    <br /> Coustmer Rating
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <img className="" src={people} alt="" />
                <div>
                  <p className="text-left  text-sm text-gray-600">
                    <b className="text-xl font-bold bg-gradient-to-r from-[#DBB630] to-[#3F45AA] text-transparent bg-clip-text">
                      20,000+
                    </b>{" "}
                    <br /> Clients
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <img className="" src={hand} alt="" />
                <div>
                  <p className="text-left  text-sm text-gray-600">
                    <b className="text-xl font-bold bg-gradient-to-r from-[#DBB630] to-[#3F45AA] text-transparent bg-clip-text">
                      99.8%
                    </b>{" "}
                    <br /> Financial Stability
                  </p>
                </div>
              </div>
            </div>
            <div className="flex mt-8  items-center">
              <Button color="bg-[#1C4670] " text="Talk an Expert" />
              <img className="ml-6 mr-2" src={play} alt="" />
              <p className="font-semibold">See how it work's</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 hero-bg">
          <div className=" flex justify-end">
            <ul className=" max-w-fit">
              <li className="bg-white rounded-md shadow-xl py-5 my-7 px-6">
                Annual Compliance
              </li>
              <li className="bg-white rounded-md shadow-xl py-5 my-7 px-6">
                Payroll Services
              </li>
              <li className="bg-white rounded-md shadow-xl py-5 my-7 px-6">
                Company Formation
              </li>
              <li className="bg-white rounded-md shadow-xl py-5 my-7 px-6">
                Annual Compliance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
