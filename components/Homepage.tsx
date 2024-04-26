import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header: React.FC = () => {
    return (
        <header className="bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-300 shadow-lg w-full">
            <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center py-8 text-white">
            
                {/* Name and Logo */}
                <a href="#home" className="flex title-font font-medium items-center mb-4 md:mb-0">
                    <span className="text-3xl">Ankit Rao</span>
                </a>
                
                {/* Navigation */}
                <nav className="md:ml-auto flex flex-wrap items-center text-lg justify-center">
                    <a href="#about" className="mr-5 hover:text-indigo-200">About</a>
                    <a href="#experience" className="mr-5 hover:text-indigo-200">Experience</a>
                    <a href="#projects" className="mr-5 hover:text-indigo-200">Projects</a>
                    <a href="#awards" className="mr-5 hover:text-indigo-200">Awards</a>
                    <a href="#skills" className="mr-5 hover:text-indigo-200">Skills</a>
                </nav>
            </div>

            <div className="text-center">
                <img src="https://media.licdn.com/dms/image/D4E03AQEtwmPBQtNGWA/profile-displayphoto-shrink_800_800/0/1711079713525?e=1717027200&v=beta&t=PYnauycIswjnLaLlN18bFLzJBdxlP838zN4VZSiqKsc" alt="Ankit Rao" className="w-40 h-40 rounded-full inline-block border-4 border-white shadow-xl" />
                <h1 className="text-2xl font-medium leading-tight mt-3">Hello, I'm</h1>
                <h2 className="text-5xl font-bold leading-none mb-2 text-shadow-lg">Ankit Rao</h2>
                <h3 className="text-2xl mb-4">Full-stack developer with a specialization in <span className="font-bold">AI</span> and <span className="font-bold">App Development</span></h3>
                
                <div className="flex justify-center mb-4">
                    <a href="https://drive.google.com/file/d/1tIALs-u8W7-kB9CdYtutKSxPwXQRCj__/view?usp=sharing" download="Ankit Rao Resume.pdf" className="inline-block text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg mr-4 shadow-lg">Resume</a>
                    <a href="mailto:ankrao26@gmail.com" className="inline-block text-indigo-500 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 rounded text-lg shadow-lg">Contact Me</a>
                </div>
                
                <div className="flex justify-center">
                    <a href="https://www.linkedin.com/in/ankit-rao-781a0b290/" className="text-white text-3xl mx-2 hover:text-indigo-200">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/arao761" className="text-white text-3xl mx-2 hover:text-indigo-200">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
