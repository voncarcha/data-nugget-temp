import Image from "next/image";

const SERVICES_ITEMS: {
  id: number;
  title: string;
  image: string;
  description: string;
}[] = [
  {
    id: 1,
    title: "Data Analysis",
    image: "/images/thumb-services-1.png",
    description:
      "We design and implement custom data warehouses using Python frameworks to centralize vast datasets from disparate sources. Our solutions ensure scalable storage, efficient querying with SQL/NoSQL integration, and seamless data governance, enabling businesses to derive actionable insights from historical and real-time data while aligning with your specific scalability and compliance requirements.",
  },
  {
    id: 2,
    title: "Advanced ETL Pipelines",
    image: "/images/thumb-services-2.png",
    description:
      "Our custom ETL pipelines automate data ingestion and transformation processes for high-volume environments. Leveraging Python libraries like Pandas and Apache Airflow, we optimize workflows for data cleansing, enrichment, and integration, tailored to your use case-whether handling structured logs or unstructured feeds-to minimize latency and enhance data quality.",
  },
  {
    id: 3,
    title: "Specialized Time Series Analysis Platforms",
    image: "/images/thumb-services-3.png",
    description:
      "We develop robust backend tools for time series data processing and analytics, including forecasting models and anomaly detection algorithms. Built with a multitude of Python ecosystems, these platforms process large-scale temporal datasets efficiently, customized to your operational intent, like predictive maintenance or trend analysis, ensuring precise implementation for business-critical decisions.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-secondary px-[15px] py-[30px] md:py-[50px] xl:py-[100px] text-white md:px-[42px]">
      <div className="3xl:max-w-[1410px] mx-auto max-w-[940px] 2xl:max-w-[1170px]">
        <h2 className="text-center text-[30px] 2xl:text-[40px] font-medium">
          Custom Software Solutions
        </h2>
        <p className="text-center text-[23px] 2xl:text-[25px] font-thin">
          Tailored Software to Power Your Data-Driven Success
        </p>

        <ul className="pt-[30px] md:mt-[50px] grid grid-cols-1 gap-[50px] 2xl:grid-cols-3 2xl:gap-[30px]">
          {SERVICES_ITEMS.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-start max-2xl:gap-[20px] max-2xl:even:flex-row-reverse max-md:even:flex-col md:flex-row 2xl:flex-col"
            >
              <Image
                src={item.image}
                alt="service-1"
                width={450}
                height={450}
                className="3xl:w-[450px] 3xl:h-[450px] mx-auto h-auto w-[768px] md:w-[300px] 2xl:h-[370px] 2xl:w-[370px]"
              />
              <article>
                <h3 className="text-[22px] leading-[1.27] font-medium 2xl:pt-[30px]">
                  {item.title}
                </h3>
                <p className="mt-[20px] border-t border-white pt-[10px] text-[20px] leading-[1.4] font-thin">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
