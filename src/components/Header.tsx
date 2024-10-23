interface HeaderProps {
  hero: string;
  desc: string;
}

const Header: React.FC<HeaderProps> = ({ hero, desc }) => {
  return (
    <div className="text-center font-manrope text-blue-500 relative tracking-wider">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="146"
        height="145"
        className="absolute mx-auto left-0 right-0 -top-10"
      >
        <g fill="none" fillRule="evenodd" stroke="#CFD8EF">
          <circle cx="63" cy="82" r="62.5" />
          <circle cx="105" cy="41" r="40.5" />
        </g>
      </svg>
      <div className="relative z-10">
        <div className="text-[22px] font-extrabold">{hero}</div>
        <div className="text-[12px] font-semibold text-grayBlue-500 w-[270px] sm:w-[700px]">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default Header;
