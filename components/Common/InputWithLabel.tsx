import React from "react";
import Input from "./Input";
import PasswordInput from "./PasswordInput";

const InputWithLabel = ({
  name = "",
  label = "",
  type = "text",
  required = true,
  ...props
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
        {!required && <small className="px-1">(optional)</small>}
      </label>

      {type === "password" ? (
        <PasswordInput name={name} id={name} {...props} />
      ) : (
        <Input name={name} id={name} type={type} {...props} />
      )}
    </div>
  );
};

export default InputWithLabel;
