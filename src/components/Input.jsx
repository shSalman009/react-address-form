import React from "react";

export default function Input({
  label,
  placeholder,
  value,
  name,
  handleChange,
  type = "text",
  disabled,
}) {
  return (
    <>
      <label className="text-start text-lg mb-2 capitalize font-semibold">
        {label}
      </label>
      <div
        className={`cursor-pointer relative border text-center inline-flex items-center border-gray-300 outline-none px-4 py-3 text-gray-900 w-full rounded-lg mb-4 ${
          disabled && "bg-gray-200"
        }`}
      >
        <input
          name={name}
          type={type}
          className="w-full h-full outline-none bg-transparent"
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </>
  );
}
