import React, { useState } from "react";
import { BsSearch, BsTrophy } from "react-icons/bs";
import { RiErrorWarningFill } from "react-icons/ri";
import { BiCoinStack } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { MdResetTv } from "react-icons/md";
import FedEx from "./components/FedEx";
import { Checkbox } from "flowbite-react";
import ReactChrono from "./components/ReactChrono";
import { Select } from "flowbite-react";
import { AiFillSetting } from "react-icons/ai";
import { AiOutlineRadiusSetting } from "react-icons/ai";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";
import { AiOutlineCi } from "react-icons/ai";
import { AiOutlineBorder } from "react-icons/ai";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { AiOutlineFolder } from "react-icons/ai";
import { AiOutlineFund } from "react-icons/ai";
import { LuPanelLeftOpen } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { BsFillCalendar2Fill } from "react-icons/bs";
import "./App.css";
import { Button } from "flowbite-react";
import DatePicker from "react-date-picker";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";

const ddAll = [" All", " All", " All"];
const sortList = ["Cheapest", "Expensive"];
const iconsList = [
  AiFillSetting,
  AiOutlineRadiusSetting,
  MdResetTv,
  AiFillDribbbleCircle,
  BsReverseLayoutSidebarReverse,
  AiOutlineCi,
  AiOutlineBorder,
  AiOutlineCloudUpload,
  AiOutlineFolder,
  AiOutlineFund,
];

function App() {
  const [onShow, setOnShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [orderDD, setOrderDD] = useState("");
  const [values, setValues] = useState({
    date: "",
    d1: "",
    d2: "",
    d3: "",
    d4: "",
  });

  return (
    <div className="bg-[#f9fafb] min-h-[100vh] flex  ">
      <div className="flex flex-col items-center w-[7vw]  bg-white pt-5 ">
        <div className="flex flex-col justify-between fixed">
          {onShow === false ? (
            <img
              src="./images/one.png"
              alt="One"
              className="h-[56px] w-[46px] text-[#170A38] mb-3"
              onClick={(e) => {
                setOnShow(true);
              }}
            />
          ) : (
            <RxCross1
              onClick={(e) => {
                setOnShow(false);
              }}
              className="self-center mb-[20px] w-[46px] h-[56px]"
            />
          )}

          {onShow && (
            <div className="flex flex-col  mb-[170px] h-[80%]">
              <AiOutlineRadiusSetting className="w-[46px] h-[56px] mb-3 hover:border-2 border-[#D6D5D8] p-2 rounded-[8px]  bg-white" />
              <MdResetTv className="w-[46px] h-[56px] mb-3 hover:border-2 border-[#D6D5D8] p-2 rounded-[8px]  bg-white" />
              <AiFillDribbbleCircle className="w-[46px] h-[56px] mb-3 bg-[#170A38] text-white hover:border-2 border-[#D6d5d8] p-2 rounded-[8px] " />

              <BsReverseLayoutSidebarReverse className="w-[46px] h-[56px] mb-3 hover:border-2 border-[#D6D5D8] p-2 rounded-[8px]  bg-white" />
              <AiOutlineCi className="w-[46px] h-[56px] mb-3 hover:border-2 border-[#D6D5D8] p-2 rounded-[8px]  bg-white" />
              <AiOutlineBorder className="w-[46px] h-[56px] mb-3 hover:border-2 border-[#D6D5D8] p-2 rounded-[8px]  bg-white" />
              <AiOutlineCloudUpload className="w-[46px] h-[56px] mb-3 hover:border-2 border-[#D6D5D8] p-2 rounded-[8px]  bg-white" />
              <AiOutlineFolder className="w-[46px] h-[56px] mb-3 hover:border-2 border-[#D6D5D8] p-2 rounded-[8px]  bg-white" />
              <AiOutlineFund className="w-[46px] h-[56px] mb-3 hover:border-2 border-[#D6D5D8] p-2 rounded-[8px]  bg-white" />
            </div>
          )}

          {/* <LuPanelLeftOpen className="w-[36px] h-[56px] border-2 border-green-900 " /> */}
        </div>
      </div>
      <div className="w-[93vw] p-[24px] flex flex-col relative ">
        <div className=" mb-8 flex items-center  w-[100%] sticky top-0 ">
          <div className="flex justify-center items-center rounded-[8px] bg-white p-2 gap-x-2 mr-[460px] h-[50px] pt-[7px] pr-[8px] pb-[7px] pl-[8px] ">
            <Select
              id="countries"
              onChange={(e) => setOrderDD(e.target.value)}
              className="outline-none"
              required
            >
              <option>Order ID</option>
              <option>Order Name</option>
              <option>Order Count</option>
            </Select>

            <input
              type="text"
              placeholder="Type to search..."
              className="border-0 outline-none"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />

            <BsSearch className="self-center" size={18} />
          </div>
          <div className="flex justify-center items-center   ">
            <div className="flex   h-[60px]  mr-[50px]">
              <div className="flex justify-center items-center mr-[10px]  bg-white w-[50px] rounded-lg p-[14px]">
                <BsTrophy size={26} />
              </div>
              <div className="flex flex-col h-[60px] ">
                <div className="flex justify-center items-center mt-1 mb-2 gap-2 ">
                  <span className="text-[#8B849C] text-[16px] ">
                    Yaari Points
                  </span>
                  <RiErrorWarningFill color="#8B849C" />
                </div>
                <span className="text-[14px] font-semibold">116</span>
              </div>
            </div>
            <div className="flex  gap-2 h-[60px] mr-[50px]">
              <div className="flex justify-center items-center  bg-white w-[50px] rounded-[8px] p-[14px] gap-[10px]">
                <BiCoinStack size={26} />
              </div>
              <div className="flex flex-col">
                <div className="mt-1 mb-2">
                  <span className="text-[16px] text-[#8B849C]">Balance</span>
                </div>
                <span className="font-semibold">₹ 2,56,000.00</span>
              </div>
            </div>
            <div className="h-[60px] mr-[25px]">
              <button className="h-[100%] border-[1px] rounded-[8px] p-3 bg-[#36A8FF] w-[124px] text-white">
                Add Funds
              </button>
            </div>
            <div className="mr-[25px] h-[52px] border-2 border-[#F2F2F2]"></div>

            <div className="flex justify-center items-center h-[60px] min-w-[52px]  bg-white  rounded-lg mr-[50px] relative z-1">
              <MdOutlineNotificationsNone size={26} />
              <img
                src="./images/eclipse.png"
                alt="dot"
                className="absolute z-2 -top-2 left-9"
              />
            </div>

            {/* <div className="flex  justify-center items-center h-[60px] bg-white  p-[10px]"> */}
            <img
              alt="Profile"
              src="/images/profile.png"
              className="w-[48px] h-[48px]"
            />
            {/* </div> */}
          </div>
        </div>
        <div className=" mb-8 ">
          <p className=" w-[160px] h-[38px] font-normal text-[30px] text-[#170A38]">
            Add Orders
          </p>
        </div>
        <div className="flex  mb-8">
          <div className="w-[250px] max-h-[300px] mr-6  bg-white rounded-[8px] p-[26px] overflow-y-auto">
            <ReactChrono />
          </div>

          <div className="flex flex-col w-[100%] rounded-lg">
            <div className=" flex flex-col h-[600px] bg-white w-[100%] p-[25px] mb-3">
              <h2 className="mb-[30px] font-mulish text-[18px] text-[#170A38] w-[171px] h-[23px] font-bold">
                Available FTL Deals
              </h2>
              <div className="flex justify-between mb-[30px]">
                <div className="flex justify-between items-center p-2 w-[300px] h-[45px] rounded-[10px] border-[2px] border-solid border-[#F2F2F2]">
                  <span className="text-[#8B849C] text-[16px] mr-1">
                    Ship Date
                  </span>
                  {/* <BsFillCalendar2Fill
                    onClick={() => {
                      return <input type="date" title="Date" />;
                    }}
                  /> */}

                  <input
                    type="date"
                    title="Date"
                    className="border-none outline-none "
                    name="Ship Date"
                    placeholder="Ship Date"
                    onChange={(e) => {
                      setValues({ ...values, date: e.target.value });
                    }}
                  />
                </div>

                <div className="flex justify-center items-center p-2 w-[190px] h-[45px] rounded-[10px] border-[2px] border-solid border-[#F2F2F2]">
                  <span className="text-[#8B849C] text-[16px]">Type:</span>
                  <select
                    title="SS"
                    id="countries1"
                    className="w-[130px] border-none outline-none focus:outline-0"
                    onChange={(e) => {
                      setValues({ ...values, d1: e.target.value });
                    }}
                    required
                  >
                    {ddAll.map((each) => {
                      return (
                        <option className="font-semibold text-[#170A38] text-[16px]">
                          {each}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="flex justify-center items-center p-2 w-[190px] h-[45px] rounded-[10px] border-[2px] border-solid border-[#F2F2F2]">
                  <span className="text-[#8B849C] text-[16px]">Partner:</span>
                  <select
                    title="SS"
                    id="countries2"
                    className="w-[130px] border-none outline-none focus:border-0"
                    onChange={(e) => {
                      setValues({ ...values, d2: e.target.value });
                    }}
                    required
                  >
                    {ddAll.map((each) => {
                      return (
                        <option className="font-semibold text-[#170A38] text-[16px]">
                          {each}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="flex justify-center items-center p-2 w-[190px] h-[45px] rounded-[10px] border-[2px] border-solid border-[#F2F2F2]">
                  <span className="text-[#8B849C] text-[16px]">Type:</span>
                  <select
                    title="SS"
                    id="countries3"
                    className="w-[130px] border-none outline-none focus:border-0"
                    onChange={(e) => {
                      setValues({ ...values, d3: e.target.value });
                    }}
                    required
                  >
                    {ddAll.map((each) => {
                      return (
                        <option className="font-semibold text-[#170A38] text-[16px]">
                          {each}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="flex justify-center items-center p-2 w-[213px] h-[45px] rounded-[10px] border-[2px] border-solid border-[#F2F2F2]">
                  <span className="text-[#8B849C] text-[16px]">Sort By:</span>
                  <select
                    title="SS"
                    id="countries4"
                    className="w-[130px] border-none outline-none focus:border-0"
                    onChange={(e) => {
                      setValues({ ...values, d4: e.target.value });
                    }}
                    required
                  >
                    {sortList.map((each) => {
                      return (
                        <option className="font-semibold text-[#170A38] text-[16px]">
                          {each}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="flex flex-col max-h-[400px] overflow-y-auto ">
                <FedEx />
                <FedEx />
                <FedEx />
                <FedEx />
                <FedEx />
                <FedEx />
              </div>
            </div>
            <div className="flex flex-col bg-[#FFFFFF] p-[15px] rounded-[8px]">
              <div className="flex mb-2">
                <Checkbox id="remember" />
                <span className="pl-[20px] text-[14px] mr-[380px] text-[#8B849C]">
                  I would like to avail for an insurance which will cover all my
                  expenses. The insurance covers Lorem ipsum set.This is the
                  most preferred brand in the world.
                </span>
                <span className="text-[#170A38] text-[12px]">₹ 900.00</span>
              </div>
              <div className="flex justify-between pl-[40px] pr-[15px] mb-2">
                <span className="text-[14px] text-[#170A38]">Sub Total</span>
                <span className="text-[12px] text-[#170A38]">₹10,000.00</span>
              </div>
              <div className="flex justify-between pl-[40px] pr-[15px] mb-2">
                <span className="text-[14px] text-[#170A38]">GST @18%</span>
                <span className="text-[12px] text-[#170A38]">₹1,800.00</span>
              </div>
              <hr className="mb-2 ml-7 font-bold" />
              <div className="flex justify-between pl-[40px] pr-[15px] mb-3">
                <span className="text-[14px] text-[#170A38] font-bold">
                  Total
                </span>
                <span className="text-[14px] text-[#170A38] font-bold">
                  ₹11,890.00
                </span>
              </div>
              <div className="flex justify-between pl-[20px] pr-[15px]">
                <button className="bg-[#F2F2F2] text-[#36A8FF] text-[14px] w-[98px] h-[50px] rounded-[10px]">
                  Previous
                </button>
                <button className="bg-[#36A8FF] text-[#FFFFFF] text-[14px] p-2 rounded-[10px]  w-[208px] h-[50px]">
                  Pay & Ship Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
