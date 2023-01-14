import { useState } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faRemove,
  faUser,
  faSignOut,
  faChevronDown,
  faCartShopping,
  faWallet,
  faHeadset,
  faMoneyBillTransfer,
  faLock,
  faHiking,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [admin, set_admin] = useState({
    logo: "https://i.ibb.co/jfw4Gt4/SRBDTOPUP-2-removebg-preview.png",
    whatsapp: "",
    show_withdraw: "",
    show_admin_link: "",
  });

  let [show_search, set_show_search] = useState(false);

  const [open_profile_opt, set_opo] = useState(false);

  function searchToggle() {}

  function logout_handler() {}

  return (
    <header className="h-[90px] border shadow sticky top-0 inset-x-0 bg-white mx-auto z-50">
      <div className="container h-full flex items-center relative justify-between">
        <Link href="/" className="h-full flex items-center">
          <img className="h-[25px] sm:h-[50px]" src={admin?.logo} alt="" />
        </Link>

        <div
          className={`hidden ${
            show_search ? "scale-y-100" : "scale-y-0"
          } search_bar w-80 sm:w-[500px] 2xl:w-[600px] transition-transform lg:scale-y-100 absolute lg:relative left-5 sm:left-0 top-[72px] lg:top-0 items-center justify-center h-12 transform origin-top`}
        >
          <input
            type="search"
            placeholder="Search..."
            className="h-full px-3 w-full rounded border-2 border-green-primary text-green-primary focus:ring focus:border-transparent"
          />
          <button className="text-sm bg-blue-600 lg:bg-green-primary px-6 h-full rounded-r text-white focus:ring-2 absolute inset-y-0 right-0 my-auto">
            Search
          </button>
        </div>

        <div className="flex items-center justify-center gap-x-3 sm:gap-x-4">
          <button
            onClick={searchToggle}
            className="lg:hidden text-sm transition-all font-medium bg-transparent border border-dark-primary text-dark-primary hover:border-transparent hover:bg-dark-primary hover:text-white w-8 sm:w-10 h-8 sm:h-10 items-center justify-center rounded-full focus:ring-2 focus:border-transparent focus:ring-dark-primary hidden md:flex"
          >
            {show_search ? (
              <FontAwesomeIcon icon={faRemove} />
            ) : (
              <FontAwesomeIcon icon={faSearch} />
            )}
          </button>

          {false(
            <div className="relative w-fit z-50">
              <button
                onClick={() => set_opo((p) => !p)}
                onBlur={() =>
                  setTimeout(() => {
                    set_opo(false);
                  }, 500)
                }
                type="button"
                className={`w-full py-2 px-3 rounded bg-gray-100 shadow border flex items-center justify-center gap-x-3`}
              >
                <span> Sagar </span>

                <img
                  className="h-8 w-8 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt=""
                />
                <FontAwesomeIcon
                  className={`text-sm text-gray-500 transition-all transform ${
                    open_profile_opt ? "rotate-180" : "rotate-0"
                  }`}
                  icon={faChevronDown}
                />
              </button>

              <div
                className={`absolute w-full bg-white rounded shadow top-full right-0 transition-all origin-top transform ${
                  open_profile_opt ? "scale-y-100" : "scale-y-0"
                }`}
              >
                <Link
                  href="/profile"
                  className="flex items-center gap-x-2 w-full hover:bg-gray-100 p-3"
                >
                  <>
                    <FontAwesomeIcon
                      className="text-base text-gray-500"
                      icon={faUser}
                    />
                    <span className="text-sm font-medium">Profile</span>
                  </>
                </Link>
                <Link
                  href="/wallet"
                  className="flex items-center gap-x-2 w-full hover:bg-gray-100 p-3"
                >
                  <>
                    <FontAwesomeIcon
                      className="text-base text-gray-500"
                      icon={faWallet}
                    />
                    <span className="text-sm font-medium">My Wallet</span>
                  </>
                </Link>
                {admin?.show_withdraw?.toLowerCase() === "yes" && (
                  <Link
                    href="/withdraw"
                    className="flex items-center gap-x-2 w-full hover:bg-gray-100 p-3"
                  >
                    <>
                      <FontAwesomeIcon
                        className="text-base text-gray-500"
                        icon={faMoneyBillTransfer}
                      />
                      <span className="text-sm font-medium">My Withdraw</span>
                    </>
                  </Link>
                )}
                <Link
                  href="/orders"
                  className="flex items-center gap-x-2 w-full hover:bg-gray-100 p-3"
                >
                  <>
                    <FontAwesomeIcon
                      className="text-base text-gray-500"
                      icon={faCartShopping}
                    />
                    <span className="text-sm font-medium">My Orders</span>
                  </>
                </Link>
                <Link
                  href="/security"
                  className="flex items-center gap-x-2 w-full hover:bg-gray-100 p-3"
                >
                  <>
                    <FontAwesomeIcon
                      className="text-base text-gray-500"
                      icon={faLock}
                    />
                    <span className="text-sm font-medium">Security</span>
                  </>
                </Link>
                <a
                  href={`https://wa.me/${admin?.whatsapp}`}
                  className="flex items-center gap-x-2 w-full hover:bg-gray-100 p-3"
                >
                  <>
                    <FontAwesomeIcon
                      className="text-base text-gray-500"
                      icon={faHeadset}
                    />
                    <span className="text-sm font-medium">Support</span>
                  </>
                </a>

                <a
                  target="_blank"
                  href="https://admin.srbdtopup.com/"
                  className="flex items-center gap-x-2 w-full  hover:bg-gray-100 p-3"
                  rel="noopener"
                >
                  <FontAwesomeIcon
                    className="text-base text-gray-500"
                    icon={faHiking}
                  />
                  <span className="text-sm font-medium">Admin Panel</span>
                  {false && (
                    <span className="block w-4 h-4 border border-black rounded-full border-t-transparent animate-spin ml-auto" />
                  )}
                </a>

                <button
                  onClick={logout_handler}
                  className="flex items-center gap-x-2 w-full  hover:bg-gray-100 p-3"
                >
                  <FontAwesomeIcon
                    className="text-base text-gray-500"
                    icon={faSignOut}
                  />
                  <span className="text-sm font-medium">Logout</span>
                  {false && (
                    <span className="block w-4 h-4 border border-black rounded-full border-t-transparent animate-spin ml-auto" />
                  )}
                </button>
              </div>
            </div>
          ) : (
            <>
           
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
