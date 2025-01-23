import React from "react";
import oracle from "../assets/oracle.svg";
import morpheus from "../assets/morpheus.svg";
import samsung from "../assets/samsung.svg";
import monday from "../assets/monday.svg";
import segment from "../assets/segment.svg";
import company from "../assets/company.svg";
import services from "../assets/services.svg";
import address from "../assets/address.svg";
import annual from "../assets/annual.svg";
import pay from "../assets/pay.svg";
import bookkeeping from "../assets/bookkeeping.svg";
import Button from "../Utilities/Button";

const ServiceSection = ({ title, description }) => (
  <div className="flex flex-col items-center mb-8">
    <h3 className="text-lg font-semibold mt-2">{title}</h3>
    <p className="text-center text-gray-600 mt-2">{description}</p>
    <a href="/" className="font-bold mt-4 hover:opacity-70">
      Learn More <i className="fa-solid fa-circle-arrow-right"></i>
    </a>
  </div>
);

export default function Services() {
  return (
    <div className="service-div">
      <div>
        <div className="flex items-center flex-col gap-8 my-14">
          <h2 className="text-xl font-bold">
            Trusted By Over 100+ Startups and freelance business
          </h2>
          <ul className="flex md:flex-row flex-col gap-4">
            <img className="max-h-5" src={oracle} alt="" />
            <img className="max-h-5" src={morpheus} alt="" />
            <img className="max-h-5" src={morpheus} alt="" />
            <img className="max-h-5" src={samsung} alt="" />
            <img className="max-h-5" src={monday} alt="" />
            <img className="max-h-5" src={segment} alt="" />
          </ul>
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="p-8">
          <header className="text-center mt-2 mb-8">
            <p className="text-orange-500">WELCOME TO REGISTERKARO.IN</p>
          </header>
          <h1 className="text-2xl text-center font-bold text-black mb-12">
            Explore Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <img className="mx-auto" src={company} alt="" />
              <ServiceSection
                title="Company Formation"
                description="Build web-based solutions that enhance customer experience."
              />
            </div>
            <div>
              <img className="mx-auto" src={services} alt="" />
              <ServiceSection
                title="Company Secretarial Services"
                description="Make data-driven decisions and utilize technology to reach business goals."
              />
            </div>
            <div>
              <img className="mx-auto" src={address} alt="" />
              <ServiceSection
                title="Virtual Office Address"
                description="Foster customer relationships by effectively serving your market."
              />
            </div>
            <div>
              <img className="mx-auto" src={annual} alt="" />
              <ServiceSection
                title="Annual Compliance Services"
                description="Ensure your company complies with all legal and regulatory requirements."
              />
            </div>
            <div>
              <img className="mx-auto" src={pay} alt="" />
              <ServiceSection
                title="Payroll Services"
                description="Manage your payroll efficiently and accurately."
              />
            </div>
            <div>
              <img className="mx-auto" src={bookkeeping} alt="" />
              <ServiceSection
                title="Bookkeeping Services"
                description="Keep track of your financial transactions and maintain accurate records."
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button color="bg-[#1C4670] " text="See All Services " />
          </div>
        </div>
      </div>
    </div>
  );
}
