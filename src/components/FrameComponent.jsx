import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-mediumblue flex flex-row items-start justify-between py-[18px] pr-[17px] pl-0 box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-center text-11xl text-whitesmoke font-inter ${className}`}
    >
      <div className="h-[72px] w-[1440px] relative bg-mediumblue hidden max-w-full" />
      <a className="[text-decoration:none] w-[149px] relative font-extrabold text-[inherit] inline-block shrink-0 whitespace-nowrap z-[1]">
        SMIT
      </a>
      <div className="w-[220px] flex flex-row items-start justify-start gap-[27px] text-xl text-white">
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <a className="[text-decoration:none] relative font-extrabold text-[inherit] inline-block min-w-[83px] whitespace-nowrap z-[1]">
            projects
          </a>
        </div>
        <div className="h-9 flex-1 relative text-lg">
          <img
            className="absolute top-[0px] left-[0px] rounded-18xl w-full h-full z-[1]"
            loading="lazy"
            alt=""
            src="/rectangle-7.svg"
          />
          <a className="[text-decoration:none] absolute top-[6px] left-[8px] font-bold text-[inherit] inline-block min-w-[94px] whitespace-nowrap z-[2]">
            contact us
          </a>
        </div>
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
