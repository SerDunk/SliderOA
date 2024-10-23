import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-blue-200 flex flex-col items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="449"
        className="absolute top-0"
      >
        <path
          fill="#F1F5FE"
          fillRule="evenodd"
          d="M0 0h1440v449H191.5C85.737 449 0 363.263 0 257.5V0z"
        />
      </svg>

      <div className="relative pt-[5rem] w-full flex flex-col items-center gap-[6.5rem]">
        <Header
          hero="Simple, traffic-based pricing"
          desc="Sign-up for our 30-day trial. No credit card required."
        />

        <Card />
      </div>
    </div>
  );
};

export default Home;
