import Image from "next/image";

const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="select-none container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        <Image
          src="/levi.png"
          alt="Fotografia de Levi. Homem branco com cabelos loiros olhando para a câmera e sorrindo discretamente"
          width={250}
          height={250}
          className="rounded-full border-4 border-white"
          unoptimized
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Prazer, sou Levi</h1>
          <p className="text-base md:text-lg text-white leading-relaxed">
            Sou desenvolvedor apaixonado por tecnologia e inovação, com experiência em diversas linguagens de programação <br />
            e um grande interesse em criar soluções impactantes. Me formei técnico em Desenvolvimento de Sistemas <br />
            na ETEC Professor Basilides de Godoy, e atualmente estou cursando Análise e Desenvolvimento de Sistemas <br />
            na Faculdade de Informática e Administração Paulista (FIAP). Abaixo você pode ver um pouco do meu trabalho <br />
            como desenvolvedor front-end nos últimos anos.
          </p>
        </div>
      </section>

      <section className="select-none container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Principais Tecnologias</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "React", description: "Criação de interfaces de usuário interativas e reutilizáveis." },
            { name: "Next", description: "Componentes dinâmicos e focados em desempenho para aplicações modernas." },
            { name: "TypeScript", description: "Desenvolvimento de interfaces escaláveis e responsivas." },
          ].map((lang, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 text-center">
              <h3 className="text-xl font-bold text-l-dark-purple">{lang.name}</h3>
              <p className="text-l-light-purple">{lang.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="select-none container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Projetos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "DevPolarys", link: "https://devpolarys.vercel.app/" },
            { name: "FinYou", link: "https://fintechweb-six.vercel.app/index.html" },
            { name: "HaltUp", link: "https://ulipese.github.io/HaltUp/index.html" },
          ].map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                Visitar Projeto
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
