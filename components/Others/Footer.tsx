import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/fontawesome-svg-core";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Footer = () => {
  const [admin, set_admin] = useState({
    copyright: "© 2021-2022 Game | All rights reserved",
    email: "contact@domain.com",
    facebook: "",
    instagram: "",
    location: "",
    phone: "01xxxxxxxxx",
    whatsapp: "01xxxxxxxxx",
    youtube: "01xxxxxxxxx",
  });

  return (
    <footer className="border-t bg-gray-700 border-gray-200">
      <div className="container pb-6 pt-12">
        <div className="grid grid-cols-1 lg:justify-start lg:grid-cols-[22%,auto,25%] gap-8 lg:gap-20">
          <div>
            <h3 className="text-base text-white font-normal tracking-[2px] uppercase mb-3 lg:mb-10 text-center lg:text-left">
              Support
            </h3>
            <a href={`tel:${admin?.phone}`} target="_blank" rel="noreferrer">
              <div className="flex items-center rounded border border-white border-opacity-25 hover:border-opacity-60 mb-4">
                <div className="flex items-center justify-center flex-shrink-0 px-4 py-1 border-r border-white border-opacity-25 text-white text-xl">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="px-3 pt-1">
                  <p className="text-white text-opacity-70 text-xs">
                    9AM - 10PM
                  </p>
                  <p className="text-lg 2xl:text-xl font-medium text-white mt-1">
                    {admin?.whatsapp}
                  </p>
                </div>
              </div>
            </a>
            <a
              href={`https://wa.me/${admin?.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center rounded border border-white border-opacity-25 hover:border-opacity-60 mb-4">
                <div className=" flex items-center justify-center flex-shrink-0 px-4 py-1 border-r border-white border-opacity-25 text-white text-2xl">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </div>
                <div className="px-3 pt-1">
                  <p className="text-white text-opacity-70 text-xs">
                    9AM - 10PM
                  </p>
                  <p className="text-lg 2xl:text-xl font-medium text-white mt-1">
                    {admin?.phone}
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-9 gap-y-10 lg:gap-y-0 xl:gap-x-20">
              <div>
                <h3 className="text-base text-white font-normal tracking-[2px] uppercase mb-3 lg:mb-10 text-center lg:text-left">
                  About
                </h3>
                <div>
                  <a
                    className="text-sm text-center lg:text-left text-white text-opacity-70 hover:text-opacity-100 cursor-pointer block mb-3 last:mb-0"
                    href="#"
                  >
                    Terms &amp; condition
                  </a>
                  <a
                    className="text-sm text-center lg:text-left text-white text-opacity-70 hover:text-opacity-100 cursor-pointer block mb-3 last:mb-0"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                  <a
                    className="text-sm text-center lg:text-left text-white text-opacity-70 hover:text-opacity-100 cursor-pointer block mb-3 last:mb-0"
                    href="#"
                  >
                    Shipment Info
                  </a>
                  <a
                    className="text-sm text-center lg:text-left text-white text-opacity-70 hover:text-opacity-100 cursor-pointer block mb-3 last:mb-0"
                    href="#"
                  >
                    Refund and Return Policy
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-base text-white font-normal tracking-[2px] uppercase mb-3 lg:mb-10 text-center lg:text-left">
                  Games
                </h3>
                <div>
                  <a
                    className="text-sm text-center lg:text-left text-white text-opacity-70 hover:text-opacity-100 cursor-pointer block mb-3 last:mb-0"
                    href="#"
                  >
                    Free Fire
                  </a>
                  <a
                    className="text-sm text-center lg:text-left text-white text-opacity-70 hover:text-opacity-100 cursor-pointer block mb-3 last:mb-0"
                    href="#"
                  >
                    Pubg Mobile
                  </a>
                  <a
                    className="text-sm text-center lg:text-left text-white text-opacity-70 hover:text-opacity-100 cursor-pointer block mb-3 last:mb-0"
                    href="#"
                  >
                    Call of Duty
                  </a>
                  <a
                    className="text-sm text-center lg:text-left text-white text-opacity-70 hover:text-opacity-100 cursor-pointer block mb-3 last:mb-0"
                    href="#"
                  >
                    Clash of clan
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-base text-white font-normal tracking-[2px] uppercase mb-3 lg:mb-10 text-center lg:text-left">
              Stay connected
            </h3>
            <span className="text-white text-opacity-70 text-sm">
              {admin?.location}
            </span>
            <div className="flex justify-center lg:justify-start mt-2 mb-1.5">
              <p className="text-white text-opacity-70 text-sm">Email:</p>
              <p className="text-white font-semibold text-sm ml-1.5">
                <a href={`mailto:${admin?.email}`}>{admin?.email}</a>
              </p>
            </div>
            <div className="flex items-center justify-center lg:justify-start mt-5 space-x-4">
              <a href={admin?.facebook} title='Facebook' target="_blank" rel="noreferrer">
                <div className="w-9 h-9 flex-shrink-0 rounded-full overflow-hidden flex items-center justify-center p-2 bg-white bg-opacity-50 hover:bg-opacity-60 text-blue-600">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
              </a>
              <a href={admin?.youtube} title="Youtube" target="_blank" rel="noreferrer">
                <div className="w-9 h-9 flex-shrink-0 rounded-full overflow-hidden flex items-center justify-center p-2 bg-white bg-opacity-50 hover:bg-opacity-60 text-red-600">
                  <FontAwesomeIcon icon={faYoutube} />
                </div>
              </a>
              <a href={admin?.instagram} title="Instagram" target="_blank" rel="noreferrer">
                <div className="w-9 h-9 flex-shrink-0 rounded-full overflow-hidden flex items-center justify-center p-2 bg-white bg-opacity-50 hover:bg-opacity-60 text-[#f500b5]">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t border-t-[#ffffff0d]">
        <div className="flex items-center justify-center flex-col sm:flex-row lg:justify-between flex-wrap py-2.5 gap-3">
          <p className="_body2 text-xs text-center text-white sm:text-left">
            {admin?.copyright}
          </p>
          <div className="flex flex-wrap gap-x-1 items-center">
            <span className="block lg:inline text-gray-300 text-sm">
              Developed by
            </span>
            <a
              className="text-white font-semibold"
              rel="noreferrer"
              href="https://www.facebook.com/bangladeshisoftware"
            >
              Bangladeshisoftware
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
