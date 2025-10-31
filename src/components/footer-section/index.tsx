import Link from "next/link";
import Image from "next/image";

const FooterSection = () => {
  return (
    <section className="bg-secondary px-[15px] md:px-[42px]">
      <picture className="mx-auto flex items-center justify-center py-[30px] lg:py-[50px] 2xl:pt-[100px] 2xl:pb-[50px]">
        <Image
          src="/images/logo-footer.png"
          alt="footer"
          width={450}
          height={178}
          className="3xl:w-[450px] 3xl:h-[178px] h-[118px] w-[300px] 2xl:h-[146px] 2xl:w-[370px]"
        />
      </picture>
      <footer className="3xl:max-w-[1410px] border-primary mx-auto max-w-[940px] border-t pt-[30px] pb-[40px] text-white max-lg:py-[20px] 2xl:max-w-[1170px]">
        <ul className="flex flex-wrap items-center justify-between gap-x-[50px]">
          <li className="3xl:flex-[0_0_420px] basis-full max-lg:hidden 2xl:flex-1">
            <span className="block text-[40px] leading-tight font-medium max-2xl:mb-[20px] max-2xl:text-center">
              Develop With Purpose.
            </span>
          </li>
          <li className="hidden min-w-0 flex-1 xl:block 2xl:flex-1">
            <a
              href="mailto:info@datanugget.net"
              className="block text-[18px] font-thin hover:underline"
            >
              Contact Us
            </a>
            <Link
              href="/terms-and-conditions"
              className="block text-[18px] font-thin hover:underline"
            >
              Terms & Conditions
            </Link>
          </li>
          <li className="hidden min-w-0 flex-1 xl:block 2xl:flex-1">
            <Link
              href="/privacy-and-cookie-policy"
              className="block text-[18px] font-thin hover:underline"
            >
              Privacy & Cookie Policy
            </Link>
            <a
              href="mailto:info@datanugget.net"
              className="block text-[18px] font-thin hover:underline"
            >
              info@datanugget.net
            </a>
          </li>
          <li className="3xl:flex-[0_0_320px] min-w-0 flex-1 2xl:flex-1">
            <span className="block text-[18px] font-thin max-xl:text-center">
              Data Nugget © 2025. All Rights Reserved
            </span>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default FooterSection;
