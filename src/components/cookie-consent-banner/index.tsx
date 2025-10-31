"use client";

import CookieConsent from "react-cookie-consent";
import Link from "next/link";

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="cookie-consent"
      expires={30}
      debug
      containerClasses="cookie-banner !bg-[#378dab] px-[15px] flex !items-center"
      contentClasses="!flex-none !mx-auto !my-0 !w-full"
      buttonClasses="!m-0 md:max-w-[330px] w-full !bg-white !text-black h-[50px] text-[18px] font-medium"
      declineButtonClasses="!m-0 md:max-w-[330px] w-full !bg-black !text-white h-[50px] text-[18px] font-medium"
      buttonWrapperClasses="flex flex-row w-full gap-[20px] md:gap-[30px] items-center justify-start max-md:flex-col mx-auto max-w-[940px] 2xl:max-w-[1170px] 3xl:max-w-[1410px] pb-[30px] md:pb-[150px] 3xl:pb-[244px]"
    >
      <article className="mx-auto max-w-[940px] 2xl:max-w-[1170px] 3xl:max-w-[1410px] pt-[30px] md:pt-[100px] pb-[30px]">
        <p className="text-[20px] font-thin">
          Cookies on this website: Data Nugget uses cookies to provide you the
          best experience on our website and ensure our services function
          properly. These cookies are set automatically; learn more in our
          cookie policy{" "}
          <Link href="/privacy-and-cookie-policy" className="hover:underline">
            here.
          </Link>
        </p>
      </article>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
