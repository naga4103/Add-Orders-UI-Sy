import React from "react";

type Props = {};

const sampleData = [
  {
    icon: "./images/call.png",
    p1: "Call before Delivery",
    p2: "Available",
    dc: "bg-[#DEF7EC]",
    dc2: "text-[#03543F]",
  },

  {
    icon: "./images/location.png",
    p1: "Tracking Service",
    p2: "Real Time",
    dc: "bg-[#E1EFFE]",
    dc2: "text-[#1E429F]",
  },

  {
    icon: "./images/user.png",
    p1: "Delivery Boy Number",
    p2: "Not Available",
    dc: "bg-[#FDF8E8]",
    dc2: "text-[#9B1C1C]",
  },

  {
    icon: "./images/clipboard-tick.png",
    p1: "POD",
    p2: "Instant",
    dc: "bg-[#E1EFFE]",
    dc2: "text-[#1E429F]",
  },
];

const FedEx = (props: Props) => {
  return (
    <div className="flex  mb-3">
      <div className="flex   items-center rounded-[10px]  bg-[#f6f6f6] w-[67%] ">
        <img
          src="https://assets.turbologo.com/blog/en/2019/12/19084817/Fedex-logo.png"
          alt="Fedex"
          className="h-[80px]  ml-[20px] mr-[20px] "
        />
        <div className="flex flex-col mr-[80px]">
          <span className="mb-1 text-[18px] text-[#170A38] font-bold">
            Fedex
          </span>
          <span className="font-semibold text-[12px] text-[#170A38]">80kg</span>
        </div>
        {sampleData.map((each) => {
          return (
            <div className="flex flex-col justify-center items-center mr-10">
              <img
                alt="Call"
                src={`${each.icon}`}
                className="h-[25px] text-[#292D32] mb-2"
              />
              <span className="mb-1 text-[#8B849C] text-[12px]">{each.p1}</span>
              <span className={`text-[12px]  p-1 ${each.dc} ${each.dc2}`}>
                {each.p2}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col w-[30%] p-4 rounded-[10px] border-[1px] border-solid border-[#F2F2F2]">
        <div className="flex justify-between">
          <span className="text-[12px] text-[#8B849C]">FTL Deal Charges</span>
          <span className="font-bold text-[18px] text-[#170A38]">₹ 396.10</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[12px] text-[#8B849C]">Current Charges</span>
          <span className="text-[12px] text-[#8B849C]">₹ 500.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[14px] text-[#170A38]">Expected Pickup</span>
          <span className="text-[12px] text-[#170A38]">Tomorrow</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[14px] text-[#170A38]">Estimated Delivery</span>
          <span className="text-[12px] text-[#170A38] font-medium">
            Feb 21,2022
          </span>
        </div>
      </div>
    </div>
  );
};

export default FedEx;
