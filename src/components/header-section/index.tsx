const HeaderSection = ({ title }: { title: string }) => {
  return (
    <section className="bg-primary relative h-[230px] bg-[url('/images/bg-header.png')] bg-cover bg-center px-[15px] text-white md:px-[42px]">
      <article className="3xl:max-w-[1410px] relative z-10 h-full max-w-[940px] 2xl:max-w-[1170px] mx-auto">
        <div className="pt-[70px] md:pt-[145px]">
          <h1 className="text-[40px] leading-[1.14] font-bold md:text-[50px] 2xl:text-[70px]">
            {title}
          </h1>
        </div>
      </article>
    </section>
  );
};

export default HeaderSection;
