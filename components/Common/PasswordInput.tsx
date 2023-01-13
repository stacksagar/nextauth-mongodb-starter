import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

const Input = ({ placeholder = "Password", ...props }) => {
  const [showPass, set_showPass] = useState(false);

  return (
    <div className="relative group">
      <input
        type={showPass ? "text" : "password"}
        placeholder={placeholder}
        required={true}
        {...props}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-1 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
      />

      <div
        onClick={() => set_showPass((p) => !p)}
        className="absolute cursor-pointer flex items-center inset-y-0 right-0 pr-5 text-gray-400 hover:text-primary-600"
      >
        {showPass ? (
          <FontAwesomeIcon icon={faEye} />
        ) : (
          <FontAwesomeIcon icon={faEyeSlash} />
        )}
      </div>
    </div>
  );
};

export default Input;
