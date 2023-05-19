import React from "react";
import "./Homepage.scss";
import { ProcessList, ProcessListProps } from "../components/ProcessList";
import { PROCESS_LIST_ITEMS } from "./Homepage/process-list-items";
import { BuiltProductList, Footer, SectionHeader } from "../components";
import { BUILT_PRODUCT_LIST_ITEMS } from "./Homepage/built-product-list-items";

export function Homepage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <div className="px-8 pt-72 mb-20 md:mb-24">
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row">
          <div className="relative header-text text-hero shrink-0">
            <h1 className="font-alt leading-none">
              S<span className="invisible">o</span>ftware
              <br />
              Engineer
            </h1>
            <span
              aria-hidden="true"
              className="chris-face rounded-full overflow-hidden"
            >
              <img src="/assets/images/chris.jpeg" />
            </span>
          </div>
          <div className="flex flex-col justify-end subtitle md:pl-1">
            <p className="text-2xl">
              I build clean and efficient digital products & web experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-200">
        <video
          className="w-full"
          autoPlay
          loop
          src="https://uploads-ssl.webflow.com/5eba19302c27d10056fc52f8/644f2238afe8ee7544027905_VoterlyCompressed-transcode.mp4"
        ></video>
      </div>
      <div className="flex flex-col gap-20 md:gap-0 md:flex-row px-5 md:px-8 mt-20 md:mt-24 mb-32">
        <SectionHeader index={1} label="My Process" />
        <ProcessList items={PROCESS_LIST_ITEMS} />
      </div>
      <div className="px-5">
        <div className="mb-8">
          <SectionHeader index={2} label="Products I've Built" />
        </div>
        <BuiltProductList items={BUILT_PRODUCT_LIST_ITEMS} />
      </div>
      <div className="px-5 mb-5">
        <div className="mb-32">
          <SectionHeader
            index={3}
            label={"Interested In \n Working Together?"}
          />
        </div>
        <div className="flex flex-col lg:items-end lg:flex-row gap-5 justify-between">
          <span className="shrink-0 connect-text leading-none relative">
            Let's <br />C<span className="mx-[0.4em] invisible">o</span>nnect
            <div className="parrot-o bg-white rounded-full flex justify-center items-center">
              <img className="h-full" src="/assets/images/party_parrot.gif" />
            </div>
          </span>
          <span className="text-6xl lg:mb-4">
            cgilardi97
            <br />
            @gmail.com
          </span>
        </div>
      </div>
      <Footer onBackToTop={scrollToTop} />
    </div>
  );
}
