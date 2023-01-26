import React, { useState } from "react";
import { data } from "../data";
import BillingAddress from "./BillingAddress";
import ShippingAddress from "./ShippingAddress";

export default function Index() {
  const [billingStates, setBillingStates] = useState({
    attention: "",
    country: "",
    devision: "",
    district: "",
    city: "",
    union: "",
    zipcode: "",
    address: "",
    house: "",
    phone: "",
    fax: "",
  });
  const [shippingStates, setShippingStates] = useState({
    attention: "",
    country: "",
    devision: "",
    district: "",
    city: "",
    union: "",
    zipcode: "",
    address: "",
    house: "",
    phone: "",
    fax: "",
  });

  // Billing handles
  const handleBillingClick = (value, name) => {
    setBillingStates({ ...billingStates, [name]: value });
  };

  const handleBillingChange = (e) => {
    setBillingStates({ ...billingStates, [e.target.name]: e.target.value });
  };

  // Shipping handles

  const handleShippingClick = (value, name) => {
    setShippingStates({ ...shippingStates, [name]: value });
  };
  const handleShippingChange = (e) => {
    setShippingStates({ ...shippingStates, [e.target.name]: e.target.value });
  };
  const handleCopy = () => {
    setShippingStates({ ...billingStates });
  };

  return (
    <div>
      <div className="container mx-auto flex p-5 gap-5">
        <BillingAddress
          states={billingStates}
          data={data}
          handleChange={handleBillingChange}
          handleClick={handleBillingClick}
        />
        <ShippingAddress
          states={shippingStates}
          data={data}
          handleCopy={handleCopy}
          handleChange={handleShippingChange}
          handleClick={handleShippingClick}
        />
      </div>
    </div>
  );
}
