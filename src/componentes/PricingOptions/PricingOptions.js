import React from "react";
import Benefits from "../Benefits/Benefits";
import { ArrowRightIcon } from "@heroicons/react/solid";

const PricingOptions = (props) => {
  const { name, price, benefits } = props.pricin;
  return (
    <div className="bg-white font-bold rounded-lg p-4">
      <h1 className="bg-indigo-900 rounded-lg text-white p-1">Name:{name}</h1>
      <h1 className="text-3">
        Price:{price}
        <small>/month</small>
      </h1>
      <p>
        <small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut
            voluptate fugit fuga nihil aliquid, dignissimos velit, ad,
            voluptates architecto aperiam deserunt! Vel et earum in repudiandae
            iusto placeat provident!
          </p>
        </small>
      </p>

      <div>
        <h1 className="text-left">Benefites:</h1>

        {benefits.map((benefit) => (
          <Benefits benefit={benefit}></Benefits>
        ))}
      </div>

      <button className="bg-indigo-900 hover:bg-slate-600 text-white rounded-lg w-full mt-2 flex items-center justify-center p-2 ">
        Buy Now <ArrowRightIcon className="w-4 h-4 ml-3"></ArrowRightIcon>
      </button>
    </div>
  );
};

export default PricingOptions;
