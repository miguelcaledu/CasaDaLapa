import React from "react";

const HouseDetails: React.FC = () => {
  return (
    <section className="flex items-center gap-[37px] font-normal flex-wrap mt-[87px] max-md:max-w-full max-md:mt-10">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4067c26299814dfb9c937ee7db64acb6/759e62e19c72d67fb200565b96c25d579507975c69389bbe7b7ca02af7dcaa1b?placeholderIfAbsent=true"
        alt="House exterior"
        className="aspect-[1.33] object-contain w-[550px] self-stretch min-w-60 my-auto max-md:max-w-full"
      />
      <div className="self-stretch flex min-w-60 flex-col justify-center w-[559px] my-auto max-md:max-w-full">
        <h2 className="text-black text-[42px] self-stretch max-md:max-w-full">
          A Casa
        </h2>
        <div className="w-[477px] max-w-full text-base text-[rgba(12,12,12,1)] font-light leading-6 mt-[25px] pb-[5px]">
          <p className="max-md:max-w-full">
            A casa é dividida em 2 pisos, o piso inferior na construção
            primitiva era destinado a armazenamento de produtos agrícolas e de
            animais.
          </p>
          <p className="mt-2.5 max-md:max-w-full">
            O piso superior servia de habitação familiar. A reconstrução da casa
            foi realizada mantendo a traça original e preservado o valor
            arquitetónico e exemplificativo da arquitetura típica Rural da
            Serreta.
          </p>
        </div>
        <div className="w-[275px] max-w-full text-lg text-white text-center tracking-[0.9px] mt-[25px]">
          <button className="bg-[rgba(221,109,84,1)] px-7 py-[17px] max-md:px-5 w-full">
            Reserve Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default HouseDetails;
