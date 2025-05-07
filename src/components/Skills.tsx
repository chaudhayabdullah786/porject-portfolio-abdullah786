import React, { useEffect, useRef } from 'react';

interface SkillProps {
  name: string;
  percentage: number;
  color: string;
}

const SkillBar: React.FC<SkillProps> = ({ name, percentage, color }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        if (progressRef.current) {
          progressRef.current.style.width = `${percentage}%`;
          progressRef.current.classList.add('opacity-100');
        }
        if (observer.current) {
          observer.current.disconnect();
        }
      }
    }, { threshold: 0.2 });

    if (progressRef.current) {
      observer.current.observe(progressRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [percentage]);

  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-gray-800 font-semibold">{name}</span>
        <span className="text-gray-600">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          ref={progressRef}
          className={`h-2.5 rounded-full opacity-0 transition-all duration-1000 ease-out ${color}`}
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skills = [
    { name: "HTML", percentage: 90, color: "bg-blue-600" },
    { name: "CSS", percentage: 90, color: "bg-teal-500" },
    { name: "JavaScript", percentage: 85, color: "bg-yellow-500" },
    { name: "PHP", percentage: 95, color: "bg-purple-600" },
    { name: "MySQL", percentage: 80, color: "bg-orange-500" },
    { name: "Networking", percentage: 96, color: "bg-green-600" }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">My Skills</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my career. Here's a look at my proficiency in various technologies.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h3>
            {skills.map((skill, index) => (
              <SkillBar 
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color}
              />
            ))}
          </div>
          
          <div className="w-full md:w-1/2 flex items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Professional Background</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 5 years of experience in the tech industry, I've worked on a variety of projects
                that have sharpened my technical skills and problem-solving abilities. My focus on continuous
                learning has allowed me to stay updated with the latest technologies and best practices.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I believe in writing clean, maintainable code and creating intuitive user experiences.
                My background in both development and design enables me to bridge the gap between
                technical requirements and user needs, resulting in products that are both functional
                and enjoyable to use.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <h4 className="font-bold text-3xl text-blue-600">50+</h4>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <h4 className="font-bold text-3xl text-teal-500">30+</h4>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <h4 className="font-bold text-3xl text-orange-500">5+</h4>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;