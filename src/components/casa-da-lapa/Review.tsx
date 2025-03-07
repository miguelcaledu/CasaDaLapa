import React from "react";

const Review: React.FC = () => {
  return (
    <section className="w-[1044px] max-w-full font-normal text-center mt-[87px] max-md:mt-10">
      <blockquote className="text-black text-[62px] max-md:max-w-full max-md:text-[40px]">
        É uma excelente experiencia ficar na Casa da Lapa. É perfeito para fugir
        de tudo e aproveitar a natureza.
      </blockquote>
      <cite className="text-[rgba(12,12,12,1)] text-3xl mt-[15px] block max-md:max-w-full">
        - Paulo Amorim
      </cite>
    </section>
  );
};

export default Review;
