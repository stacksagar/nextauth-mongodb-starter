import React from "react";

type props = {
  required?: boolean;
  id: string;
};

const CheckInput = ({ required, id, ...props }: props) => {
  return (
    <input
      aria-describedby="terms"
      type="checkbox"
      required={required}
      id={id}
      {...props}
      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
    />
  );
};

export default CheckInput;
