import React, { useRef, useState } from "react";

export default function Dropdown({
  disabled,
  data,
  name,
  value,
  handleClick,
  placeholder = "Select",
  label = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  // Dropdown Button Ref
  const btnRef = useRef(null);

  // Toggle Dropdown
  const handleToggle = (e) => {
    if (e.target === btnRef.current) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <label className="text-start text-lg mb-2 capitalize font-semibold">
        {label}
      </label>
      <div
        ref={btnRef}
        disabled={disabled}
        onClick={(e) => {
          !disabled && handleToggle(e);
        }}
        className={`cursor-pointer relative border text-center inline-flex items-center border-gray-300 outline-none px-4 py-3 text-gray-900 w-full rounded-lg mb-4 ${
          disabled && "bg-gray-200"
        }`}
      >
        <input
          name={name}
          disabled={disabled}
          type="text"
          className="w-full h-full outline-none pointer-events-none"
          placeholder={placeholder}
          value={value}
          readOnly
        />

        <div className="h-full absolute right-0 inset-y-0 flex justify-center items-center mr-4 pointer-events-none">
          <svg
            className={`w-4 h-4 ml-2 ${isOpen ? "rotate-180" : "rotate-0"}`}
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        <div
          className={`absolute top-full mt-3 left-0 z-10 bg-white rounded-lg border border-gray-300 w-full  ${
            !isOpen && "hidden"
          }`}
        >
          <div className="p-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                value={searchTerm}
                onChange={handleSearch}
                className="block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg outline-none"
                placeholder="Search user"
              />
            </div>
          </div>
          <ul className="px-3 pb-3 text-gray-500 space-y-3 text-start">
            {/* {data &&
              Object.keys(data).map((item, index) => (
                <li
                  onClick={() => {
                    handleClick(item, name);
                    setIsOpen(false);
                  }}
                  key={index}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  {item}
                </li>
              ))} */}
            {data &&
              Object.keys(data)
                .filter((item) =>
                  item.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                )
                .map((item, index) => (
                  <li
                    onClick={() => {
                      handleClick(item, name);
                      setIsOpen(false);
                    }}
                    key={index}
                    className="cursor-pointer hover:bg-gray-100"
                  >
                    {item}
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </>
  );
}
