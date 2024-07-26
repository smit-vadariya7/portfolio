const LandingPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-36 pb-[378px] pr-[21px] pl-5 box-border gap-[119px] leading-[normal] tracking-[normal] mq450:gap-[30px] mq600:gap-[59px]">
      <div className="w-[1185px] flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full">
        <div className="h-[200px] w-[200px] relative">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro w-full h-full" />
          <img
            className="absolute top-[0px] left-[0px] rounded-[10000px] w-full h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/firefly-make-a-simple-3d-charecter-of-men-stading-very-confidently-in-a-blue-suit-with-smile-74171-1@2x.png"
          />
        </div>
      </div>
      <section className="w-[1185px] relative text-xl font-semibold font-poppins text-mediumblue text-center inline-block max-w-full mq450:text-base">
        <p className="m-0">About Me</p>
        <p className="m-0">
          My name is Smit Vadariya, and I am a dedicated front-end developer
          with a strong proficiency in HTML, CSS, and React.js. My passion lies
          in creating sophisticated, user-centric web applications that
          prioritize both functionality and aesthetics. I have successfully
          built a variety of projects, including a Nike website clone, which
          demonstrates my meticulous attention to detail and commitment to
          modern design principles. With a keen eye for design and a focus on
          user experience, I strive to deliver web solutions that are both
          visually appealing and highly functional.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
