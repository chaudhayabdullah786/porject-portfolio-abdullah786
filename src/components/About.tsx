import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">About Me</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3783196/pexels-photo-3783196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Muhammad Abdullah"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto object-cover"
                style={{ height: '500px' }}
              />
              <div className="absolute -bottom-6 -right-6 bg-teal-500 text-white py-4 px-6 rounded-lg shadow-lg">
                <p className="text-lg font-bold">5+ Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Full Stack Developer & UI/UX Designer</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Hello! I'm Muhammad Abdullah, a passionate Full Stack Developer with expertise in creating
              beautiful, functional, and user-centered digital experiences. With a background in both
              front-end and back-end development, I enjoy tackling complex problems and turning them
              into simple, elegant solutions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My journey in tech began 5 years ago, and since then, I've honed my skills in various
              technologies including HTML, CSS, JavaScript, PHP, MySQL, and modern frameworks like
              React, Flutter, and more. I'm also proficient in UI/UX design principles and networking.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-gray-800"><span className="font-bold">Name:</span> Muhammad Abdullah</p>
              </div>
              <div>
                <p className="text-gray-800"><span className="font-bold">Email:</span> chaudhayabdullah786@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-800"><span className="font-bold">Phone:</span> +923086303187</p>
              </div>
              <div>
                <p className="text-gray-800"><span className="font-bold">Location:</span> Gujranwala, Pakistan</p>
              </div>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;