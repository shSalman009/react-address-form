import React from "react";
import Dropdown from "./Dropdown";
import Input from "./Input";

export default function ShippingAddress({
  handleClick,
  states,
  data,
  handleChange,
  handleCopy,
}) {
  return (
    <div className="w-1/2">
      <div className="flex gap-2">
        <h4 className="uppercase text-2xl font-semibold mb-5">
          Billing Address
        </h4>{" "}
        <h4
          onClick={handleCopy}
          className="text-blue-600 font-semibold cursor-pointer"
        >
          Copy
        </h4>
      </div>
      <div>
        <Input
          name="attention"
          value={states.attention}
          label="Attention"
          placeholder="Enter Person/Site Name"
          handleChange={handleChange}
        />
        <Dropdown
          handleClick={handleClick}
          name="country"
          value={states.country}
          label="Country"
          placeholder="Please Search"
          data={data}
        />
        <Dropdown
          handleClick={handleClick}
          name="devision"
          value={states.devision}
          label="Devision/Province/State"
          placeholder="Please Search"
          data={data[states.country]}
          disabled={!states.country}
        />
        <Dropdown
          handleClick={handleClick}
          name="district"
          value={states.district}
          label="District"
          placeholder="Please Search"
          data={states.devision && data[states.country][states.devision]}
          disabled={!states.devision}
        />
        <Dropdown
          handleClick={handleClick}
          name="city"
          value={states.city}
          label="City/Sub District/Thana"
          placeholder="Please Search"
          data={
            states.district &&
            data[states.country][states.devision][states.district]
          }
          disabled={!states.district}
        />
        <Dropdown
          handleClick={handleClick}
          name="union"
          value={states.union}
          label="Union/Area/Town"
          placeholder="Please Search"
          data={
            states.district &&
            data[states.country][states.devision][states.district][states.city]
          }
          disabled={!states.city}
        />
        <Input
          type="number"
          name="zipcode"
          value={states.zipcode}
          label="Zipcode"
          placeholder="Please Write"
          handleChange={handleChange}
          disabled={!states.union}
        />
        <Input
          name="address"
          value={states.address}
          label="Street Address/Village"
          placeholder="Please Write"
          handleChange={handleChange}
          disabled={!states.zipcode}
        />
        <Input
          name="house"
          value={states.house}
          label="House/Suite/Apartment No"
          placeholder="Please Write"
          handleChange={handleChange}
        />
        <Input
          name="phone"
          value={states.phone}
          label="Phone"
          placeholder="Please Write"
          handleChange={handleChange}
        />
        <Input
          name="fax"
          value={states.fax}
          label="Fax"
          placeholder="Please Write"
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}
