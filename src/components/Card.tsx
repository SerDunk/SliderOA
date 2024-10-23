import { useState } from "react";
import Slider from "./Slider";
import ToggleButton from "./ToggleButton";

const Card: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [sliderValue, setSliderValue] = useState(100);
  const monthlyBasePrice = 16.0;

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  const handlePriceChange = (value: number) => {
    setSliderValue(value);
  };

  const calculatePrice = (): string => {
    let price = (sliderValue / 100) * monthlyBasePrice;
    if (isYearly) {
      price = price * 12 * 0.75; // Apply a 25% discount for yearly billing
    }
    return price.toFixed(2);
  };

  return (
    <div className="z-10 bg-white relative shadow-lg rounded-md flex flex-col w-[22rem] md:w-[30rem] gap-[2rem] px-[3rem] py-[2rem] font-manrope text-grayBlue-500 text-[14px]">
      <div className="flex flex-col gap-6 md:flex-row justify-between">
        <div className="self-center md:mt-3 md:self-start font-semibold">
          100K PAGEVIEWS
        </div>

        <div className="self-center">
          <span className="text-[32px] font-extrabold text-blue-500">
            ${calculatePrice()}
          </span>{" "}
          / {isYearly ? "year" : "month"}
        </div>
      </div>

      <div>
        <Slider price={calculatePrice()} onPriceChange={handlePriceChange} />
      </div>

      <div className="flex justify-center gap-1 items-center">
        <div className="text-[12px]">Monthly Billing</div>
        <ToggleButton isYearly={isYearly} onToggle={toggleBilling} />{" "}
      </div>

      <hr />

      <div className="flex justify-between flex-col md:flex-row text-center gap-7">
        <ul className="gap-4 flex flex-col text-center self-center">
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
              <path
                fill="none"
                stroke="#10D8C4"
                strokeWidth="2"
                d="M1 4.134l1.907 1.908L7.949 1"
              />
            </svg>{" "}
            Unlimited websites
          </li>
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
              <path
                fill="none"
                stroke="#10D8C4"
                strokeWidth="2"
                d="M1 4.134l1.907 1.908L7.949 1"
              />
            </svg>{" "}
            100% data ownership
          </li>
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
              <path
                fill="none"
                stroke="#10D8C4"
                strokeWidth="2"
                d="M1 4.134l1.907 1.908L7.949 1"
              />
            </svg>
            Email reports
          </li>
        </ul>

        <div className="self-center px-9 py-2 bg-blue-500 rounded-2xl text-[12px] text-blue-300 cursor-pointer hover:bg-blue-300 hover:text-blue-500">
          Start my trial
        </div>
      </div>
    </div>
  );
};

export default Card;
