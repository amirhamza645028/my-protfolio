import { useEffect, useState } from 'react';
import projectsData from '../data/projects.json';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    AOS.init({ duration: 1000 });
    setProjects(projectsData.projects);
  }, []);

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  // Filter projects
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Projects</span>
          </h2>
          <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
            Here are some of my recent projects
          </p>
        </div>

        {/* Category Filter */}
        <div data-aos="fade-up" className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn  ${
                selectedCategory === category
                  ? 'btn-primary text-shadow-white bg-gradient-to-r from-purple-600 to-pink-600'
                  : 'btn-outline btn-primary '
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all"
            >
              {/* Project Image */}
              <figure className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </figure>

              <div className="card-body">
                {/* Title */}
                <h3 className="card-title text-xl text-base-content">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-base-content/70 text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 my-3">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="badge badge-primary badge-outline"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features Dropdown */}
                <div className="collapse collapse-arrow bg-base-100">
                  <input type="checkbox" />
                  <div className="collapse-title font-medium text-primary">
                    View Features
                  </div>
                  <div className="collapse-content">
                    <ul className="list-disc list-inside space-y-1 text-sm text-base-content/70">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Links */}
                <div className="card-actions justify-end mt-4">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm gap-2"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm gap-2"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;