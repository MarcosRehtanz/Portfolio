import React from "react";
import Photo from "../../assets/Profile.png";
import { StackTools } from "../../components/StackTools/StackTools";
import { Experience } from "../../components/Experience";

export const About = () => {
  return (
    <div className="container md:pt-3 w-full mx-auto poppins flex flex-wrap flex-col md:flex-row justify-center content-center items-center">
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
              <span className="text-[--color-2]">Juan Marcos Mansilla.</span>
            </div>

            <p className="mt-2 pl-3 pr-3 border-l-2 border-gray-500 text-white">
              <br />
              Soy desarrollador fullstack con dominio en JavaScript, React y
              Sequelize. Conocimiento en POO; me inicié en la programación con
              Java para app de escritorio y C# para desarrollo de videojuegos.
            </p>
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
