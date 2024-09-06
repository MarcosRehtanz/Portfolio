import React from "react";
import Photo from "../../assets/Profile.png";
import { StackTools } from "../../components/StackTools/StackTools";
import { mainStack } from "../../utils/stacks";
import { Experience } from "../../components/Experience";
import { IconLink } from "../../components/IconLink/IconLink";
import { SEO } from "../../components/SEO";

export const About = () => {
  const description =`Soy desarrollador fullstack con +2 años de experiencia en varias areas de la industria IT como UX/UI, web, mobile y servidores.`
  return (
    <div className="container md:pt-3 w-full mx-auto poppins flex flex-wrap flex-col md:flex-row justify-center content-center items-center">
      <SEO
        title="Juan Marcos Mansilla"
        description={description}
        name="Juan Marcos Mansilla"
        type="Sobre Mi"
        image={Photo}
        url={window.location.href}
      />
      <div className="mx-5 md:mx-auto bg-[--color-1] rounded-xl shadow-md overflow-hidden md:max-w-3xl m-5">
        <div className="w-full flex flex-col-reverse sm:flex-row justify-center">
          <div className="max-w-xl min-h-[200px] p-2 flex flex-col justify-center content-center">
            <div className="flex-shrink-0 mb-4 bg-[--color-4] w-full block sm:hidden rounded-xl">
              <img
                className="w-[175px] h-52 sm:w-48 object-cover object-top mx-auto bg-[--color-4] rounded-xl sm:rounded-3xl transform transition hover:scale-110 duration-700 ease-in-out"
                src={Photo}
                alt="Event image"
              />
            </div>

            <div className="tracking-wide text-4xl text-white font-bold">
              Hola, soy{" "}
              <h1 className="text-[--color-2]">Juan Marcos Mansilla.</h1>
            </div>

            <p className="mt-2 px-3 pt-3 border-l-2 border-gray-500 text-white">
              {description}
            </p>
            <div className=" m-2 flex">
              {mainStack.map((tool, i) => {
                return (
                  <IconLink
                    key={tool.name + i}
                    item={tool}
                    className={{
                      a: "h-[22px] min-w-[22px] flex justify-center items-center",
                      img: "h-[18px] transition-all hover:h-[20px]",
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex-shrink-0 hidden sm:block">
            <img
              className="w-32 sm:w-48 object-cover mx-auto sm:bg-[--color-4] rounded-xl sm:rounded-3xl transform rotate-12 transition hover:scale-110 duration-700 ease-in-out hover:rotate-6"
              src={Photo}
              alt="Event image"
            />
          </div>
        </div>
      </div>

      <Experience />

      <StackTools />
    </div>
  );
};
