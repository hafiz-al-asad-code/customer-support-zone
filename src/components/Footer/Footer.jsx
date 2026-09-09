import React from "react";
import xImg from "../../assets/x.png";
import linkedinImg from "../../assets/linkedin.png";
import fbImg from "../../assets/fb.png";
import mailImg from "../../assets/mail.png";

const Footer = () => {
  return (
    <div className="bg-black px-3 lg:px-[80px] pt-[30px] lg:pt-[80px] pb-[30px]">
      <div className="max-w-[1440px] mx-auto">
        {/* div for tablet only */}
        <div className="block lg:hidden mb-4">
          <h3 className="font-bold text-2xl text-white mb-4">
            <a href="/">CS — Ticket System</a>
          </h3>
          <p className="text-[#A1A1AA]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-16">
          <div className="hidden lg:block">
            <h3 className="font-bold text-2xl text-white mb-4">
              <a href="/">CS — Ticket System</a>
            </h3>
            <p className="text-[#A1A1AA]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div>
            <p className="font-medium text-[20px] text-white mb-4">Company</p>
            <ul className="text-[#A1A1AA] space-y-4">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Our Mission</a>
              </li>
              <li>
                <a href="">Contact Saled</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-[20px] text-white mb-4">Services</p>
            <ul className="text-[#A1A1AA] space-y-4">
              <li>
                <a href="">Products & Services</a>
              </li>
              <li>
                <a href="">Customer Stories</a>
              </li>
              <li>
                <a href="">Download Apps</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-[20px] text-white mb-4">
              Information
            </p>
            <ul className="text-[#A1A1AA] space-y-4">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Join Us</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-[20px] text-white mb-4">
              Social Links
            </p>
            <ul className="text-[#A1A1AA] space-y-4">
              <li>
                <a href="" className="space-x-2">
                  <img src={xImg} className="inline-block" alt="" />
                  <span>@CS — Ticket System</span>
                </a>
              </li>
              <li>
                <a href="" className="space-x-2">
                  <img src={linkedinImg} className="inline-block" alt="" />
                  <span>@CS — Ticket System</span>
                </a>
              </li>
              <li>
                <a href="" className="space-x-2">
                  <img src={fbImg} className="inline-block" alt="" />
                  <span>@CS — Ticket System</span>
                </a>
              </li>
              <li>
                <a href="" className="space-x-2">
                  <img src={mailImg} className="inline-block" alt="" />
                  <span>support@cst.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border border-[#1E1E1F] mt-[50px] lg:mt-[80px] mb-[30px]"></div>

        <p className="text-white text-center">
          &copy; 2025 CS — Ticket System. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
