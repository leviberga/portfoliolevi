import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="select-none bg-transparent text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image src="logo.svg" alt="logo" width={80} height={80} />
          </Link>
        </div>
        <nav>
        
          <div className="md:hidden flex items-center">
            <button
              className="text-white"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

         
          <ul
            className={`md:flex md:space-x-6 font-bold ${isMenuOpen ? "block" : "hidden"} md:block`}
          >
            <li className="menu-text">
              <Link href="/">Sobre</Link>
            </li>
            <li className="menu-text">
              <Link href="/contatos">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>

 
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-lg transition-all duration-300 ease-in-out z-10"
            onClick={toggleMenu} 
          />
          <div
            className={`fixed inset-0 bg-black bg-opacity-80 z-20 flex flex-col items-center justify-center space-y-8 py-8 transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "transform-none" : "transform -translate-x-full"
            }`}
          >
            <button
              className="absolute top-6 right-6 text-4xl text-white"
              onClick={toggleMenu}
            >
              &times;
            </button>
            <Link href="/" className="text-2xl font-bold text-white" onClick={toggleMenu}>
              Sobre
            </Link>
            <Link href="/contatos" className="text-2xl font-bold text-white" onClick={toggleMenu}>
              Contato
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
