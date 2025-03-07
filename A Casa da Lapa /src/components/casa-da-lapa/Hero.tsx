
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex w-full max-w-[1582px] items-center justify-center flex-wrap flex-col">
      <div className="self-stretch flex min-w-60 items-center gap-[40px_100px] justify-between flex-wrap grow shrink w-[1461px] my-auto max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4067c26299814dfb9c937ee7db64acb6/6d810a92b8c29d71895ef92288c904111600ac15d011b63f8b5d71fb2e7db504?placeholderIfAbsent=true"
          alt="Logo 1"
          className="aspect-[0.81] object-contain w-[193px] self-stretch shrink-0 my-auto"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4067c26299814dfb9c937ee7db64acb6/dd5f534e6525984338648314471a5bd3cf9cf0eb1a4db610b9d512508a37d06d?placeholderIfAbsent=true"
          alt="Logo 2"
          className="aspect-[3.44] object-contain w-[206px] self-stretch shrink-0 my-auto"
        />
      </div>
      
      <div className="self-stretch flex min-w-60 flex-col items-center text-2xl font-normal text-center grow shrink w-full my-auto px-[25px] max-md:max-w-full max-md:px-5 mb-10">
        <h1 className="text-black text-7xl max-md:max-w-full max-md:text-[40px]">
          A Casa da Lapa
        </h1>
        <p className="text-[rgba(12,12,12,1)] font-light leading-9 self-stretch mt-[55px] max-w-[485px] mx-auto max-md:max-w-full max-md:mt-10">
          A casa da lapa, localizada na Canada da Lapa na Serreta, foi
          reconstruída sobre uma casa rural primitiva desta zona da Ilha
          terceira.
        </p>
        <button className="bg-[rgba(221,109,84,1)] w-[344px] max-w-full text-white tracking-[1.2px] mt-[62px] px-[49px] py-5 max-md:mt-10 max-md:px-5">
          Reserve Agora
        </button>
      </div>
      
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4067c26299814dfb9c937ee7db64acb6/97ba23b89b82ddd395dad8c2457727fe3acbdf39c463f82aeab1c6702185ecba?placeholderIfAbsent=true"
        alt="Hero image"
        className="aspect-[1.56] object-contain w-[931px] self-center min-w-60 grow shrink my-auto max-md:max-w-full"
      />
    </div>
  );
};

export default Hero;
