import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-primary relative h-[640px] bg-[url('/images/bg-hero-sm.png')] bg-cover bg-center px-[15px] text-white md:bg-[url('/images/bg-hero.png')] md:px-[42px] xl:h-[800px] 2xl:h-[900px]">
      <article className="3xl:max-w-[1410px] relative z-10 mx-auto flex h-full max-w-[940px] items-center justify-start 2xl:max-w-[1170px]">
        <div>
          <h1 className="max-w-[690px] text-[40px] leading-[1.14] font-bold md:text-[50px] 2xl:text-[70px]">
            Transform Your Data into Actionable Insights with Data Nugget
          </h1>
          <p className="mt-[20px] mb-[50px] max-w-[690px] text-[30px] leading-[1.33] font-medium">
            Custom software solutions for B2B data analysis, warehousing, and
            beyond!
          </p>
          <a
            href="mailto:info@datanugget.net"
            className="bg-secondary border-secondary active:border-primary active:bg-primary 3xl:max-w-[330px] flex h-[50px] w-full items-center justify-center border text-white hover:border-white md:max-w-[220px] 2xl:max-w-[270px]"
          >
            Contact Us
          </a>
        </div>
      </article>
    </section>
  );
};

export default HeroSection;
