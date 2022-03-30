import React from "react";
import PricingOptions from "../PricingOptions/PricingOptions";

const Pricing = () => {
  const pricingoptions = [
    { id: 1, name: "free", price: 0 ,benefits:[
              "Everything is ok",
              "Love your Passion",
              "Depends on your confident",
              "Is it Ok?",
          
          ]},
    { id: 2, name: "reguler", price: 120,benefits:[
          "Everything is ok",
          "Love your Passion",
          "Depends on your confident",
          "Is it Ok?",
      
      ]},
    { id: 3, name: "primium", price: 1500,benefits:[
          "Everything is ok",
          "Love your Passion",
          "Depends on your confident",
          "Is it Ok?",
      
      ] },
  ];
  return (
    <div className="font-bold bg-indigo-800 ">
      <h1 className="text-3xl font-bold text-white ">This is Tailwind</h1>

      <h1 className="text-3xl   text-amber-100 ">Best Deal of The Time</h1>
      <p className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eius in
        excepturi ipsa modi consequuntur corrupti vitae! Illo, facere aliquam.
      </p>

      <div className="grid md:grid-cols-3 mt-10 gap-2 p-3 rounded-lg  bg-neutral-400">
        {pricingoptions.map((pricin) => (
          <PricingOptions pricin={pricin} key={pricin.id}></PricingOptions>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
