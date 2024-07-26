import FrameComponent from "../components/FrameComponent";

const ProfileSetupStep = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[440px] box-border gap-[285px] leading-[normal] tracking-[normal] text-center text-xl text-white font-inter mq450:gap-[71px] mq750:gap-[142px]">
      <div className="w-[58px] h-0 relative font-extrabold hidden mq450:text-base">
        about
      </div>
      <FrameComponent />
      <section className="w-[1429px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-[85px] text-black font-inter">
        <div className="w-[913px] flex flex-col items-start justify-start gap-[52px] max-w-full mq450:gap-[26px]">
          <h1 className="m-0 relative text-inherit font-extrabold font-inherit mq450:text-[25px] mq750:text-[42px]">
            HI, I am Smit Vadariya
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[11px] box-border max-w-full text-center text-xl">
            <div className="flex-1 relative font-extrabold inline-block max-w-full mq450:text-base">
              Dedicated front-end developer with expertise in HTML, CSS, and
              React.js. Specializing in creating sophisticated, user-centric web
              applications, including a Nike website clone, demonstrating
              meticulous attention to detail and contemporary design practices.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileSetupStep;
