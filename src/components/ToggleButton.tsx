import React from "react";

interface ToggleButtonProps {
  isYearly: boolean;
  onToggle: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isYearly, onToggle }) => {
  return (
    <div className="text-[12px] flex items-center">
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className={`toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-200 ${
            isYearly ? "translate-x-5" : "translate-x-0"
          }`}
          onChange={onToggle}
          checked={isYearly}
        />
        <label
          htmlFor="toggle"
          className={`toggle-label block overflow-hidden h-5 rounded-full transition-all duration-200 ease-in ${
            isYearly ? "bg-cyan-700" : "bg-gray-300"
          } cursor-pointer`}
        ></label>
      </div>
      <span className="ml-1">Yearly Billing</span>
      <span className="ml-3 p-1 bg-grayRed-400 text-red-300 md:inline hidden">
        25% discount
      </span>
      <span className="ml-3 p-1 bg-grayRed-400 text-red-300 md:hidden inline">
        -25%
      </span>
    </div>
  );
};

export default ToggleButton;
