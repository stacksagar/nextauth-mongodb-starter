import React from "react";

type props = {
  type?: any;
  children?: any;
  loading?: boolean;
};

const Button = ({ type, loading = false, children, ...others }: props) => {
  return (
    <button
      disabled={loading}
      {...others}
      type={type || "button"}
      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-between disabled:bg-primary-400"
    >
      <span className="w-6"></span>
      <span>{children}</span>

      {loading ? (
        <span className="block w-6 h-6 rounded-full animate-spin border-4 border-r-transparent"></span>
      ) : (
        <span className="w-6"></span>
      )}
    </button>
  );
};

export default Button;
