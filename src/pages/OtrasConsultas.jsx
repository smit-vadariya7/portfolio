import PointersIcon from "../components/PointersIcon";
import Message from "../components/Message";

const OtrasConsultas = () => {
  return (
    <div className="w-full relative bg-lavender overflow-hidden flex flex-col items-start justify-start pt-[223px] px-[52px] pb-[372px] box-border gap-[22px] leading-[normal] tracking-[normal] text-center text-xl text-black font-inter mq950:pl-[26px] mq950:pr-[26px] mq950:box-border">
      <h1 className="m-0 w-[840px] relative text-[150px] font-extrabold font-inherit inline-block max-w-full mq450:text-[37px] mq950:text-[60px]">
        Contact us
      </h1>
      <div className="w-[840px] flex flex-row items-start justify-start pt-0 px-[7px] pb-[37px] box-border max-w-full text-11xl">
        <h3 className="m-0 flex-1 relative text-inherit font-extrabold font-inherit inline-block max-w-full mq450:text-lg mq950:text-[24px]">
          <p className="m-0">We’re here to help and answer any questions you</p>
          <p className="m-0">
            might have. We look forward to hearing from you!
          </p>
        </h3>
      </div>
      <div className="w-[445px] flex flex-row items-start justify-start pt-0 px-[74px] pb-[18px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 flex flex-row items-start justify-start relative">
          <div className="h-[49px] w-14 absolute !m-[0] bottom-[-19px] left-[8px] flex items-center justify-center z-[0]">
            <PointersIcon />
          </div>
          <div className="flex-1 relative font-extrabold z-[1] mq450:text-base">
            ahmedabad, india
          </div>
        </div>
      </div>
      <div className="w-[518px] flex flex-row items-start justify-start py-0 px-[70px] box-border max-w-full mq700:pl-[35px] mq700:pr-[35px] mq700:box-border">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-center max-w-full [row-gap:20px]">
          <Message />
          <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[230px] max-w-full">
            <div className="self-stretch relative font-extrabold whitespace-nowrap mq450:text-base">
              smitvadariya.25@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtrasConsultas;
