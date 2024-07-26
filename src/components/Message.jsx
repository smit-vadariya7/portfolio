import PropTypes from "prop-types";

const Message = ({ className = "" }) => {
  return (
    <div className={`h-6 w-6 relative ${className}`}>
      <div className="absolute h-full w-full top-[20.83%] right-[-54.17%] bottom-[-29.17%] left-[12.5%] rounded-sm box-border border-[2px] border-solid border-darkslategray" />
      <img
        className="absolute h-3/6 w-[116.67%] top-[25%] right-[-41.67%] bottom-[25%] left-[25%] rounded-sm max-w-full overflow-hidden max-h-full z-[1]"
        loading="lazy"
        alt=""
        src="/vector-3.svg"
      />
    </div>
  );
};

Message.propTypes = {
  className: PropTypes.string,
};

export default Message;
