import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">
              Muhammad<span className="text-teal-400">Abdullah</span>
            </h3>
            <p className="text-gray-400">
              Full Stack Developer & UI/UX Designer
            </p>
          </div>
          
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              Made with <Heart className="inline-block text-red-500" size={16} /> by Muhammad Abdullah
            </p>
          </div>
          
          <div>
            <p className="text-gray-400">
              &copy; 2023 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;