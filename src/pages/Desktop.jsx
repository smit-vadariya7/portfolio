import CloneProject from "../components/CloneProject";
import LuxuryProject from "../components/LuxuryProject";

const Desktop = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[41px] box-border gap-[156px] tracking-[normal] leading-[normal] mq800:gap-[78px] mq450:gap-[39px]">
      <header className="self-stretch bg-lavender flex flex-row items-start justify-center pt-[23px] px-5 pb-[37px] box-border max-w-full text-center text-xl text-black font-inter">
        <div className="h-[132px] w-[1440px] relative bg-lavender hidden max-w-full" />
        <div className="w-[1154px] relative font-extrabold inline-block shrink-0 max-w-full z-[1] mq450:text-base">
          In my journey of front-end development, I have undertaken and
          successfully completed numerous projects that reflect my growth and
          expertise. Among these, the Nike website clone stands out as a
          testament to my skills in creating sophisticated, user-friendly web
          applications.
        </div>
      </header>
      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-12 pl-[42px] box-border max-w-full mq800:pl-[21px] mq800:pr-6 mq800:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[95px] max-w-full mq800:gap-[47px] mq450:gap-[24px]">
          <CloneProject />
          <LuxuryProject />
        </div>
      </section>
    </div>
  );
};

export default Desktop;
