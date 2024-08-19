import React from "react";
import { backend, frontend, tools } from "../../utils/stacks";
import { StackCard } from "./StackCard";

const NameTool = ({ children }: { children: string }) => (
  <b className="mx-auto text-green-400">{children}</b>
);

export const StackTools = () => {
  return (
    <div className="mx-auto md:pt-16">
      <hr />
      {/* <h1 className='w-full my-10 py-10 tracking-wide bg-[--color-1] uppercase text-center text-5xl text-[--color-2] font-bold'>Languajes and herramientas</h1> */}

      <div className="w-full h-auto justify-between flex flex-row flex-wrap gap-x-12">
        <StackCard
          title="Frontend"
          description={
            <p className="indent-2 text-white">
              He adquirido la sólida práctica de la modularización en{" "}
              <NameTool>React</NameTool>, gestión de estados globales mediante{" "}
              <NameTool>Redux</NameTool> y <NameTool>Apollo Client</NameTool>, y
              diseño de interfaz con librerías como{" "}
              <NameTool>Tailwind</NameTool> y <NameTool>Bootstrap</NameTool>,
              respaldado por <NameTool>JavaScript</NameTool> y{" "}
              <NameTool>TypeScript</NameTool> para funcionalidades lógicas.
            </p>
          }
          toolList={frontend}
        />

        <StackCard
          title="Backend"
          description={
            <p className="indent-2 text-white">
              He adquirido la capacidad de desarrollar servidores sólidos en{" "}
              <NameTool>Node.js</NameTool> con <NameTool>Express</NameTool> y/o{" "}
              <NameTool>Apollo GraphQL</NameTool>, utilizando{" "}
              <NameTool>Sequelize</NameTool> como ORM para{" "}
              <NameTool>PostgreSQL</NameTool>. También soy competente en la
              preparación de pruebas con <NameTool>Jest</NameTool> y{" "}
              <NameTool>Supertest.</NameTool>
            </p>
          }
          toolList={backend}
        />

        <StackCard
          title="Tools"
          description={
            <p className="indent-2 text-white">
              He trabajado con la terminal de <NameTool>Bash</NameTool> y
              utilizo <NameTool>Git</NameTool> para el control de versiones.
              Además, tengo experiencia en diseño gráfico utilizando{" "}
              <NameTool>Adobe Illustrator</NameTool> y{" "}
              <NameTool>Photoshop</NameTool>. También he desarrollado
              videojuegos con <NameTool>C#</NameTool> en{" "}
              <NameTool>Unity</NameTool> como parte de mi experiencia en
              desarrollo de juegos.
            </p>
          }
          toolList={tools}
        />
      </div>
    </div>
  );
};
