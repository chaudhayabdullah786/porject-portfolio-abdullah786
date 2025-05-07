import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Muhammad Abdullah",
    role: "Full Stack Developer",
    image: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Lead developer with expertise in React, PHP, and Node.js.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Creative designer focused on creating intuitive and beautiful interfaces.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 3,
    name: "David Chen",
    role: "Mobile Developer",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Specialist in Flutter and React Native development for cross-platform apps.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "Backend Engineer",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Expert in building scalable and secure backend systems.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  }
];

const Teams: React.FC = () => {
  return (
    <section id="teams" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">My Team</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I collaborate with talented professionals to deliver exceptional results. Meet the creative minds behind our projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative overflow-hidden h-72">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <div className="flex space-x-3 mb-2">
                      {member.social.github && (
                        <a 
                          href={member.social.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/20 p-2 rounded-full hover:bg-blue-600 transition-colors"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a 
                          href={member.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/20 p-2 rounded-full hover:bg-blue-600 transition-colors"
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a 
                          href={member.social.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/20 p-2 rounded-full hover:bg-blue-600 transition-colors"
                        >
                          <Twitter size={16} />
                        </a>
                      )}
                    </div>
                    <p>{member.bio}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-teal-500 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;