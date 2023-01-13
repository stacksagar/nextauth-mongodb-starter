import React from "react";

const Input = ({ type = "text", required = true, ...props }) => {
  return (
    <div>
      <input
        type={type}
        required={required}
        {...props}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-1 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
      />
    </div>
  );
};

export default Input;
