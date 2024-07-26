import PropTypes from "prop-types";

const PointersIcon = ({ className = "" }) => {
  return (
    <img
      className={`h-full w-full object-contain absolute left-[-6px] top-[0px] [transform:scale(1.209)] ${className}`}
      loading="lazy"
      alt=""
      src="/pointers.svg"
    />
  );
};

PointersIcon.propTypes = {
  className: PropTypes.string,
};

export default PointersIcon;
