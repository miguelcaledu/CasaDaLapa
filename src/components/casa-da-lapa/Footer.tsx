import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(221,109,84,1)] self-stretch flex min-h-[455px] w-full items-center justify-center flex-wrap mt-[87px] px-[51px] py-[55px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="self-stretch flex min-w-60 flex-col items-stretch text-white font-normal text-center grow shrink w-[626px] my-auto py-9 max-md:max-w-full">
        <h2 className="text-7xl max-md:max-w-full max-md:text-[40px]">
          Descubra a Ilha Terceira
        </h2>
        <div className="self-center w-[238px] max-w-full text-lg tracking-[0.9px] mt-[60px] max-md:mt-10">
          <button className="bg-[rgba(221,109,84,1)] border px-6 py-3.5 border-white border-solid max-md:px-5 w-full">
            Reserve Agora
          </button>
        </div>
      </div>
      <div className="self-stretch flex min-w-60 min-h-[18px] items-center justify-center text-lg text-[rgba(235,235,235,1)] font-medium flex-wrap grow shrink w-[1127px] my-auto max-md:max-w-full">
        <div className="self-stretch flex min-w-60 items-center gap-8 flex-wrap my-auto max-md:max-w-full">
          <div className="self-stretch my-auto">
            © 2025 A Casa da Lapa. All rights reserved.
          </div>
          <a href="#" className="self-stretch my-auto hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="self-stretch my-auto hover:underline">
            Terms of Use
          </a>
          <a href="#" className="self-stretch my-auto hover:underline">
            Licenses
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
