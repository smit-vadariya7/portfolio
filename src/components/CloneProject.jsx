import PropTypes from "prop-types";

const CloneProject = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 pr-[25px] pl-0 box-border max-w-full text-center text-xl text-black font-inter ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1350:flex-wrap">
        <div className="rounded-11xl bg-lavender flex flex-row items-start justify-start py-[138px] pr-[50px] pl-[51px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[300px] w-[250px] relative rounded-11xl bg-lavender hidden" />
          <div className="relative font-extrabold z-[1] mq450:text-base">
            COMING SOON
          </div>
        </div>
        <div className="w-[956px] flex flex-col items-start justify-start pt-[83px] px-0 pb-0 box-border max-w-full font-poppins">
          <a className="[text-decoration:none] self-stretch relative text-[inherit] mq450:text-base">
            <p className="m-0">Nike Website Clone</p>
            <p className="m-0">
              The Nike Website Clone is a comprehensive front-end project
              designed to replicate the core design and functionality of the
              official Nike website. This project was developed using HTML, CSS,
              and React.js, reflecting my ability to create dynamic and
              responsive web applications.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

CloneProject.propTypes = {
  className: PropTypes.string,
};

export default CloneProject;
