const CardContato = () => {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 md:p-12 max-w-xs sm:max-w-sm md:max-w-md w-full">
          <h1 className="text-3xl font-bold text-l-dark-purple text-center mb-6">
            Entre em contato
          </h1>
          <ul className="space-y-4">
            <li className="flex flex-col">
              <span className="font-semibold text-l-main-purple">E-mail</span>
              <a
                href="mailto:lbergamascki@gmail.com"
                className="text-l-light-purple hover:underline"
              >
                lbergamascki@gmail.com
              </a>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold text-l-main-purple">Telefone</span>
              <a
                href="callto:+5511912447611"
                className="text-l-light-purple hover:underline"
              >
                +55 (11) 91244-7611
              </a>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold text-l-main-purple">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/levi-bergamascki/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-l-light-purple hover:underline"
              >
                linkedin.com/in/levi-bergamascki
              </a>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold text-l-main-purple">GitHub</span>
              <a
                href="https://github.com/leviberga"
                target="_blank"
                rel="noopener noreferrer"
                className="text-l-light-purple hover:underline"
              >
                github.com/leviberga
              </a>
            </li>
          </ul>
        </div>
      </main>
    );
  };
  
  export default CardContato;
  