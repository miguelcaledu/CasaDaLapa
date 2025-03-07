import React from "react";

const Location: React.FC = () => {
  return (
    <section className="flex w-[1060px] max-w-full gap-[40px_50px] flex-wrap mt-[87px] max-md:mt-10">
      <div className="flex min-w-60 items-center flex-wrap grow shrink w-[322px] py-[140px] max-md:py-[100px]">
        <h2 className="text-black text-[42px] font-normal self-stretch my-auto">
          Localização
        </h2>
        <p className="text-[rgba(12,12,12,1)] text-base font-light leading-6 self-stretch grow shrink w-[330px] my-auto">
          A freguesia da Serreta, no concelho de Angra do Heroísmo, dispõe de
          inúmeros pontos de interesse como o Miradouro da Serreta, Farol da
          Serreta, Miradouro da Ponta do Queimado e um dos maiores parques
          naturais da Região, a Mata da Serreta.
        </p>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4067c26299814dfb9c937ee7db64acb6/357052452380bd63d2b1d6ebac6b94279e162bad4ac5590c3a9d636c9d013c4d?placeholderIfAbsent=true"
        alt="Location map"
        className="aspect-[1.31] object-contain w-[523px] min-w-60 grow shrink max-md:max-w-full"
      />
    </section>
  );
};

export default Location;
