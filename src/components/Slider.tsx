import { useState } from "react";

interface SliderProps {
  price: string;
  onPriceChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ price, onPriceChange }) => {
  const [sliderValue, setSliderValue] = useState<number>(100);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setSliderValue(value);
    onPriceChange(value);
  };

  return (
    <div className="slider-container relative w-full flex items-center gap-2">
      <input
        type="range"
        min="10"
        max="200"
        step="1"
        value={sliderValue}
        onChange={handleSliderChange}
        className="slider w-full"
        style={{
          appearance: "none",
          width: "100%",
          height: "8px",
          background: `linear-gradient(
            to right, 
            hsl(174, 86%, 45%) ${(sliderValue - 10) / 1.9}%, 
            hsl(174, 77%, 80%) ${(sliderValue - 10) / 1.9}%
          )`,
          borderRadius: "10px",
          outline: "none",
          transition: "background 0.3s ease",
        }}
      />
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: hsl(174, 86%, 45%); /* Cyan-700 */
          background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="22" height="13"%3E%3Cg fill="%2380FFF3" fill-rule="evenodd"%3E%3Cpath d="M16 2.558v7.884a1 1 0 001.735.679l3.639-3.943a1 1 0 000-1.356l-3.64-3.943A1 1 0 0016 2.558zM6 2.558v7.884a1 1 0 01-1.735.679L.626 7.178a1 1 0 010-1.356l3.64-3.943A1 1 0 016 2.558z"/%3E%3C/g%3E%3C/svg%3E');
          background-position: center;
          background-repeat: no-repeat;
          cursor: pointer;
          border: none;
        }
        .slider::-moz-range-thumb {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: hsl(174, 86%, 45%);
          background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="22" height="13"%3E%3Cg fill="%2380FFF3" fill-rule="evenodd"%3E%3Cpath d="M16 2.558v7.884a1 1 0 001.735.679l3.639-3.943a1 1 0 000-1.356l-3.64-3.943A1 1 0 0016 2.558zM6 2.558v7.884a1 1 0 01-1.735.679L.626 7.178a1 1 0 010-1.356l3.64-3.943A1 1 0 016 2.558z"/%3E%3C/g%3E%3C/svg%3E');
          background-position: center;
          background-repeat: no-repeat;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default Slider;
