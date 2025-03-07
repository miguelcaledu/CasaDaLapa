import React from "react";

const DetailedFeatures: React.FC = () => {
  return (
    <section className="relative flex min-h-[658px] w-[1070px] max-w-full flex-col mt-[87px] pt-[362px] pb-3.5 px-[22px] max-md:mt-10 max-md:pt-[100px] max-md:px-5">
      <div className="z-0 w-[477px] max-w-full py-5">
        <h2 className="text-black text-[42px] font-normal">
          Detalhes da Casa da Lapa
        </h2>
        <div className="w-full text-base text-[rgba(12,12,12,1)] font-light mt-[25px]">
          <p className="max-md:max-w-full">
            A casa dispõe de 2 unidades de alojamento, 2 camas por unidade.
          </p>
          <p className="leading-6 mt-[15px] max-md:max-w-full">
            A Cozinha está inserida no forno de "mão postas", tradicional desta
            zona da Ilha e a sala de estar na continuidade da zona de refeições
            e cozinha.
          </p>
        </div>
      </div>
      <div className="absolute z-0 flex gap-[40px_75px] flex-wrap right-0 bottom-0 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4067c26299814dfb9c937ee7db64acb6/cadce210df756225059959f5d6630977997528d7442df638ed3d349a78c79bb5?placeholderIfAbsent=true"
          alt="House interior detail"
          className="aspect-[0.75] object-contain w-[496px] min-w-60 max-md:max-w-full"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4067c26299814dfb9c937ee7db64acb6/f29e49b1f484f98cba30a798430faed3e698eeeb8ea8c0b998c5edef51fb711b?placeholderIfAbsent=true"
          alt="House interior detail"
          className="aspect-[1.43] object-contain w-[499px] min-w-60 max-md:max-w-full"
        />
      </div>
    </section>
  );
};

export default DetailedFeatures;
