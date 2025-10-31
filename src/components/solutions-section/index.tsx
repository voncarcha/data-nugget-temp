import Image from "next/image";

const SolutionsSection = () => {
  return (
    <>
      <section className="to-primary bg-linear-to-r from-[#1d3c44] pt-[30px] text-white lg:py-[50px] 2xl:py-[100px]">
        <div className="mx-auto max-w-[1410px]">
          <article className="px-[15px] md:px-[42px]">
            <h2 className="text-center text-[30px] font-medium 2xl:text-[40px]">
              Key Industries We Serve
            </h2>
            <p className="mb-[30px] text-center text-[23px] font-thin md:mb-[50px] 2xl:text-[25px]">
              Supporting Key Sectors with Advanced and Specialized Data
              Solutions
            </p>
          </article>

          <figure className="relative mx-auto flex w-full items-center justify-center max-lg:flex-col lg:max-w-[940px] 2xl:max-w-[1170px]">
            <Image
              src="/images/thumb-solutions-lg-1.png"
              alt="solutions-1"
              width={1410}
              height={620}
              className="hidden 2xl:block"
            />
            <Image
              src="/images/thumb-solutions-md-1.png"
              alt="solutions-1"
              width={940}
              height={520}
              className="hidden lg:block 2xl:hidden"
            />
            <Image
              src="/images/thumb-solutions-sm-1.png"
              alt="solutions-1"
              width={310}
              height={310}
              className="block max-lg:pb-[15px] lg:hidden px-[15px]"
            />
            <div className="max-lg:bg-secondary max-lg:p-[20px_15px_30px_15px] lg:absolute lg:top-[50%] lg:right-[80px] lg:max-w-[380px] lg:translate-y-[-50%] xl:right-[120px] xl:max-w-[370px] 2xl:max-w-[450px]">
              <h3 className="text-[22px] leading-[1.27] font-medium">
                Data Heavy Enterprises
              </h3>
              <p className="mt-[20px] border-t border-white pt-[10px] text-[20px] leading-[1.4] font-thin">
                Businesses managing large-scale datasets benefit from our
                backend expertise in processing high-volume, time-sensitive data
                streams, such as user behavior or operational metrics. We craft
                custom solutions that integrate with existing infrastructures,
                focusing on secure, high-throughput data processing to support
                informed decision-making and performance optimization.
              </p>
            </div>
          </figure>
        </div>
      </section>

      <section className="bg-secondary text-white lg:py-[50px] 2xl:py-[100px]">
        <div className="mx-auto max-w-[1410px]">
          <figure className="relative mx-auto flex w-full items-center justify-center max-lg:flex-col lg:max-w-[940px] 2xl:max-w-[1170px]">
            <Image
              src="/images/thumb-solutions-lg-2.png"
              alt="solutions-2"
              width={1410}
              height={620}
              className="hidden 2xl:block"
            />
            <Image
              src="/images/thumb-solutions-md-2.png"
              alt="solutions-2"
              width={940}
              height={520}
              className="hidden lg:block 2xl:hidden"
            />
            <Image
              src="/images/thumb-solutions-sm-2.png"
              alt="solutions-2"
              width={310}
              height={310}
              className="block max-lg:pb-[15px] px-[15px] lg:hidden"
            />
            <div className="max-lg:p-[20px_15px_30px_15px] lg:absolute lg:top-[50%] lg:left-[80px] lg:max-w-[380px] lg:translate-y-[-50%] xl:left-[120px] xl:max-w-[370px] 2xl:max-w-[450px]">
              <h3 className="text-[22px] leading-[1.27] font-medium">
                Manufacturing and IoT-Driven Industries
              </h3>
              <p className="mt-[20px] border-t border-white pt-[10px] text-[20px] leading-[1.4] font-thin">
                Manufacturers and IoT-centric businesses utilize our large data
                processing tools for sensor data aggregation and real-time
                analytics. We deliver custom backend systems that address
                specific use cases like predictive analytics for equipment
                uptime, ensuring efficient data flows and insights derived from
                edge-to-cloud integrations.
              </p>
            </div>
          </figure>
        </div>
      </section>

      <section className="to-primary bg-linear-to-r from-[#1d3c44] lg:pt-[100px] max-lg:pt-[15px] lg:pb-[200px] text-white">
        <div className="mx-auto max-w-[1410px]">
          <figure className="relative mx-auto flex w-full items-center justify-center max-lg:flex-col lg:max-w-[940px] 2xl:max-w-[1170px]">
            <Image
              src="/images/thumb-solutions-lg-3.png"
              alt="solutions-3"
              width={1410}
              height={620}
              className="hidden 2xl:block"
            />
            <Image
              src="/images/thumb-solutions-md-3.png"
              alt="solutions-3"
              width={940}
              height={520}
              className="hidden lg:block 2xl:hidden"
            />
            <Image
              src="/images/thumb-solutions-sm-3.png"
              alt="solutions-3"
              width={310}
              height={310}
              className="block max-lg:pb-[15px] px-[15px] lg:hidden"
            />
            <div className="max-lg:p-[15px] max-lg:bg-secondary max-lg:pb-[30px] lg:absolute lg:top-[50%] lg:right-[80px] lg:max-w-[380px] lg:translate-y-[-50%] xl:right-[120px] xl:max-w-[370px] 2xl:max-w-[450px]">
              <h3 className="text-[22px] leading-[1.27] font-medium">
                E-Commerce and Retail Operations
              </h3>
              <p className="mt-[20px] border-t border-white pt-[10px] text-[20px] leading-[1.4] font-thin">
                Retailers and e-commerce platforms leverage our data warehousing
                and ETL capabilities to handle customer behavior data and
                inventory logistics. Our tailored implementations emphasize
                scalable analysis of datasets, enabling personalized
                recommendations and supply chain optimizations based on your
                unique business workflows.
              </p>
            </div>
            <div className="absolute right-0 bottom-[-100px] flex justify-end max-lg:hidden">
              <a href="mailto:info@datanugget.net" className="bg-secondary border-secondary active:border-primary active:bg-primary 3xl:w-[330px] flex h-[50px] w-[220px] items-center justify-center border text-white hover:border-white 2xl:w-[270px]">
                Find Out More
              </a>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
};

export default SolutionsSection;
