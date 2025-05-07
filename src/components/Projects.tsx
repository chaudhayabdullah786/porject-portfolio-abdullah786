import React, { useState } from 'react';
import { ExternalLink, Github, Upload } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  demoLink: string;
  repoLink: string;
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store built with React, Node.js, and MongoDB",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for monitoring social media performance",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 3,
    title: "Travel Companion App",
    description: "Mobile app for travelers with itinerary planning and local recommendations",
    image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mobile",
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 4,
    title: "Healthcare Portal",
    description: "Web application for patient management and appointment scheduling",
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Mobile application for tracking workouts and nutrition",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mobile",
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 6,
    title: "Smart Home Control System",
    description: "IoT interface for managing connected home devices",
    image: "https://images.pexels.com/photos/2062428/pexels-photo-2062428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "iot",
    demoLink: "#",
    repoLink: "#"
  },
];

const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [uploadModalOpen, setUploadModalOpen] = useState<boolean>(false);
  const [newProject, setNewProject] = useState<Omit<Project, 'id'>>({
    title: "",
    description: "",
    image: "",
    category: "web",
    demoLink: "",
    repoLink: ""
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const filterCategories = ["all", "web", "mobile", "iot", "design"];

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
  };

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewProject(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      
      // For demonstration, we're using a placeholder image since we can't upload files without a backend
      setNewProject(prev => ({ 
        ...prev, 
        image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1;
    
    setProjects(prev => [...prev, { ...newProject, id: newId }]);
    setUploadModalOpen(false);
    setNewProject({
      title: "",
      description: "",
      image: "",
      category: "web",
      demoLink: "",
      repoLink: ""
    });
    setSelectedFile(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">My Projects</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at some of the projects I've worked on. Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="flex justify-between items-center mb-8 flex-wrap">
          <div className="flex space-x-2 mb-4 md:mb-0 flex-wrap">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterClick(category)}
                className={`px-4 py-2 rounded-full capitalize transition-colors ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setUploadModalOpen(true)}
            className="flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
          >
            <Upload size={18} /> Upload Project
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 mt-4 mr-4 flex gap-2">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-100 uppercase last:mr-0 mr-1">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Modal */}
      {uploadModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg max-h-90vh overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">Upload New Project</h3>
              <button 
                onClick={() => setUploadModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                  Project Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newProject.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={newProject.description}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={newProject.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="web">Web</option>
                  <option value="mobile">Mobile</option>
                  <option value="iot">IoT</option>
                  <option value="design">Design</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
                  Project Image *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="file" className="cursor-pointer">
                    <div className="flex flex-col items-center justify-center py-3">
                      <Upload className="text-gray-400 mb-2" size={24} />
                      <p className="text-sm text-gray-500 mb-1">
                        {selectedFile ? selectedFile.name : "Click to upload or drag and drop"}
                      </p>
                      <p className="text-xs text-gray-400">PNG, JPG or GIF (max. 2MB)</p>
                    </div>
                  </label>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="demoLink">
                  Demo Link
                </label>
                <input
                  type="url"
                  id="demoLink"
                  name="demoLink"
                  value={newProject.demoLink}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="repoLink">
                  Repository Link
                </label>
                <input
                  type="url"
                  id="repoLink"
                  name="repoLink"
                  value={newProject.repoLink}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://github.com/username/repo"
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setUploadModalOpen(false)}
                  className="mr-2 px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Upload Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;