import PricingCard from "../shared/PricingCard";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const jsonData = {
  us: [
    {
      months: "Professional",
      price: "400",
      
      currency: "$",
      pricePerMonth: "/month",
      jar: "After 1 year, subscription fee is $1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
     
      but: "https://buy.stripe.com/28o03ZgLl958em4dR0",
      instamojo: "https://imjo.in/TxVgHF",
    },
    {
      months: "Creative",
      price: "216",
      quantity: "for 12 Jars",
      currency: "$",
      pricePerMonth: "($18/month)",
      jar: "After 1 year, subscription fee is $1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/5kA7wreDd5SW1zicMR",
      instamojo: "https://imjo.in/xMx39T",
    },
    {
      months: "Essential",
      price: "90",
      quantity: "for 4 Jars",
      currency: "$",
      pricePerMonth: "($30/month)",
      jar: "After 1 year, subscription fee is $1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/8wM6snbr1chk2Dm6ox",
      instamojo: "https://imjo.in/SMs3s6",
    },
  ],
  ind: [
    {
      months: "Professional",
      price: "24,000",
      quantity: "for 5 Jars",
      currency: "₹",
      pricePerMonth: "/month",
      
      t1: "Social Media Marketing",
      t2: "Social Media Strategy and planning",
      t3: "7 Instagram Reels + 14 Carousel Posts",
      t4: "Website Development*",
     
      but: "https://buy.stripe.com/28o03ZgLl958em4dR0",
      instamojo: "https://imjo.in/TxVgHF",
    },
    {
      months: "Creative",
      price: "15,000",
      quantity: "for 12 Jars",
      currency: "₹",
      pricePerMonth: "/month",
      
      t1: "Social Media Managemnent",
      t3: "4 Instagram Reels + 10 Carousel Posts",
      t4: "Website Development*",
      but: "https://buy.stripe.com/5kA7wreDd5SW1zicMR",
      instamojo: "https://imjo.in/xMx39T",
    },
    {
      months: "Essential",
      price: "10,000",
      quantity: "for 4 Jars",
      currency: "₹",
      pricePerMonth: "/month",
     
      t1: "Social Media Managemnent",
      t3: "4 Instagram Reels + 10 Carousel Posts",
      but: "https://buy.stripe.com/8wM6snbr1chk2Dm6ox",
      instamojo: "https://imjo.in/SMs3s6",
    },
  ],
  ca: [
    {
      months: "Professional",
      price: "168",
      quantity: "for 5 Jars",
      currency: "C$",
      pricePerMonth: "(C$28/month)",
      jar: "After 1 year, subscription fee is C$1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/28o03ZgLl958em4dR0",
      instamojo: "https://imjo.in/TxVgHF",
    },
    {
      months: "Creative",
      price: "300",
      quantity: "for 12 Jars",
      currency: "C$",
      pricePerMonth: "(C$25/month)",
      jar: "After 1 year, subscription fee is C$1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/5kA7wreDd5SW1zicMR",
      instamojo: "https://imjo.in/xMx39T",
    },
    {
      months: "Essential",
      price: "126",
      quantity: "for 4 Jars",
      currency: "C$",
      pricePerMonth: "(C$42/month)",
      jar: "After 1 year, subscription fee is C$1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/8wM6snbr1chk2Dm6ox",
      instamojo: "https://imjo.in/SMs3s6",
    },
  ],
  eu: [
    {
      months: "Professional",
      price: "114",
      quantity: "for 5 Jars",
      currency: "€",
      pricePerMonth: "(€19/month)",
      jar: "After 1 year, subscription fee is €1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/28o03ZgLl958em4dR0",
      instamojo: "https://imjo.in/TxVgHF",
    },
    {
      months: "Creative",
      price: "204",
      quantity: "for 12 Jars",
      currency: "€",
      pricePerMonth: "(€17/month)",
      jar: "After 1 year, subscription fee is €1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/5kA7wreDd5SW1zicMR",
      instamojo: "https://imjo.in/xMx39T",
    },
    {
      months: "Essential",
      price: "84",
      quantity: "for 4 Jars",
      currency: "€",
      pricePerMonth: "(€28/month)",
      jar: "After 1 year, subscription fee is €1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/8wM6snbr1chk2Dm6ox",
      instamojo: "https://imjo.in/SMs3s6",
    },
  ],
  gbp: [
    {
      months: "Professional",
      price: "96",
      quantity: "for 5 Jars",
      currency: "£",
      pricePerMonth: "(£16/month)",
      jar: "After 1 year, subscription fee is £1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/28o03ZgLl958em4dR0",
      instamojo: "https://imjo.in/TxVgHF",
    },
    {
      months: "Creative",
      price: "180",
      quantity: "for 12 Jars",
      currency: "£",
      pricePerMonth: "(£15/month)",
      jar: "After 1 year, subscription fee is £1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/5kA7wreDd5SW1zicMR",
      instamojo: "https://imjo.in/xMx39T",
    },
    {
      months: "Essential",
      price: "72",
      quantity: "for 4 Jars",
      currency: "£",
      pricePerMonth: "(£24/month)",
      jar: "After 1 year, subscription fee is £1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/8wM6snbr1chk2Dm6ox",
      instamojo: "https://imjo.in/SMs3s6",
    },
  ],
};

const Pricing = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("us");

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        let country =
          data.country_name === "Canada"
            ? "ca"
            : data.country_name === "India"
              ? "ind"
              : "us";

        setSelectedCurrency(country);
        console.log(data.country_name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGeoInfo();
  }, []);

  return (
    <>
      <h2 className="text-center text-4xl underline font-bold mt-6  mb-3 sm:pb-5">
        Pricing
      </h2>
      <div className="grid justify-items-center grid-cols-1 md:flex md:flex-wrap md:justify-center xl:grid-cols-3 xl:grid max-w-7xl mb-10 gap-7 mx-5 md:mx-auto">
        {jsonData[selectedCurrency].map((data, index) => (
          <PricingCard id={index} data={data} />
        ))}
      </div>
    </>
  );
};

export default Pricing;
