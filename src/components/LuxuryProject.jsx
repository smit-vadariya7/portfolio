import PropTypes from "prop-types";

const LuxuryProject = ({ className = "" }) => {
  return (
    <footer
      className={`w-[1309px] flex flex-row flex-wrap items-start justify-start gap-[61px] max-w-full text-center text-xl text-black font-poppins mq800:gap-[30px] mq450:gap-[15px] ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[78px] px-0 pb-0 box-border min-w-[649px] max-w-full mq800:min-w-full">
        <div className="self-stretch relative font-medium mq450:text-base">
          <p className="m-0">&nbsp;</p>
          <p className="m-0">E-Commerce Website for Luxury Clothes</p>
          <p className="m-0">
            The E-Commerce Website for Luxury Clothes is a sophisticated
            front-end project developed to provide a premium online shopping
            experience for high-end fashion enthusiasts. This project was
            created using HTML, CSS, and React.js, showcasing my ability to
            develop elegant and functional e-commerce solutions.
          </p>
        </div>
      </div>
      <div className="rounded-11xl bg-lavender flex flex-row items-start justify-start py-[138px] pr-[50px] pl-[51px] font-inter mq450:pl-5 mq450:pr-5 mq450:box-border">
        <img
          className="h-[300px] w-[250px] relative rounded-11xl hidden"
          alt=""
          src="/rectangle-10.svg"
        />
        <div className="relative font-extrabold z-[1] mq450:text-base">
          COMING SOON
        </div>
      </div>
    </footer>
  );
};

LuxuryProject.propTypes = {
  className: PropTypes.string,
};

export default LuxuryProject;
