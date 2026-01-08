import { useState, useEffect } from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaNpm, 
  FaFigma 
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiOnlyoffice, 
  SiFirebase, 
  SiExpress, 
  SiMongodb, 
  SiMongoose, 
  SiPostman, 
  SiAdobephotoshop , 
  SiPython, SiFastapi, SiPostgresql, SiDocker 
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills2 = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Skills Data with Project Count
  const skillsData = {
    frontend: [
      { 
        name: 'HTML5', 
        Icon: FaHtml5, 
        color: '#E34F26', 
        projects: 25,
        description: 'Semantic HTML, Accessibility, SEO'
      },
      { 
        name: 'CSS3', 
        Icon: FaCss3Alt, 
        color: '#1572B6', 
        projects: 25,
        description: 'Flexbox, Grid, Animations, Responsive Design'
      },
      { 
        name: 'Tailwind CSS', 
        Icon: SiTailwindcss, 
        color: '#06B6D4', 
        projects: 20,
        description: 'Utility-first CSS, Custom components'
      },
      { 
        name: 'JavaScript', 
        Icon: SiJavascript, 
        color: '#F7DF1E', 
        projects: 22,
        description: 'ES6+, DOM Manipulation, Async/Await'
      },
      { 
        name: 'React', 
        Icon: FaReact, 
        color: '#61DAFB', 
        projects: 18,
        description: 'Hooks, Context API, Component Lifecycle'
      },
      { 
        name: 'Next.js', 
        Icon: SiNextdotjs, 
        color: '#000000', 
        projects: 8,
        description: 'SSR, SSG, API Routes, App Router'
      },
      { 
        name: 'Onlyoffice', 
        Icon: SiOnlyoffice, 
        color: '#FF6F61', 
        projects: 5,
        description: 'Document Editing Integration'
      },
      { 
        name: 'Firebase', 
        Icon: SiFirebase, 
        color: '#FFCA28', 
        projects: 12,
        description: 'Authentication, Realtime Database, Hosting'
      },
      { 
        name: 'Framer Motion', 
        Icon: TbBrandFramerMotion, 
        color: '#FF0055', 
        projects: 10,
        description: 'Smooth Animations & Transitions'
      }
    ],
    backend: [
      { 
        name: 'Node.js', 
        Icon: FaNodeJs, 
        color: '#339933', 
        projects: 15,
        description: 'Server-side JavaScript, Event Loop'
      },
      { 
        name: 'Express.js', 
        Icon: SiExpress, 
        color: '#000000', 
        projects: 15,
        description: 'RESTful APIs, Middleware, Routing'
      },
        { 
        name: 'MongoDB', 
        Icon: SiMongodb, 
        color: '#47A248', 
        projects: 14,
        description: 'NoSQL Database, Aggregation, Indexing'
      },
      { 
        name: 'Mongoose', 
        Icon: SiMongoose, 
        color: '#880000', 
        projects: 14,
        description: 'ODM, Schema Design, Validation'
      },
      { 
        
        name: 'Python',
        Icon:SiPython, 
        color: '#000000', 
        projects: 15,
        description: 'RESTful APIs, Middleware, Routing'

      },
    { 
      name: 'FastAPI', 
      Icon: SiFastapi, 
      color: '#009688', 
      projects: 8,
      description: 'Modern Python Web Framework, Async APIs'
    },
    { 
      name: 'PostgreSQL', 
      Icon: SiPostgresql, 
      color: '#336791', 
      projects: 10,
      description: 'Relational Database, SQL Queries, Transactions'
    },
    { 
      name: 'Docker', 
      Icon: SiDocker, 
      color: '#2496ED', 
      projects: 6,
      description: 'Containerization, Docker Compose, Deployment'
    },
    
  
    ],
    others: [
      { 
        name: 'Git', 
        Icon: FaGitAlt, 
        color: '#F05032', 
        projects: 25,
        description: 'Version Control, Branching, Merging'
      },
      { 
        name: 'NPM', 
        Icon: FaNpm, 
        color: '#CB3837', 
        projects: 20,
        description: 'Package Management, Scripts'
      },
      { 
        name: 'Postman', 
        Icon: SiPostman, 
        color: '#FF6C37', 
        projects: 15,
        description: 'API Testing, Collections, Environments'
      },
      { 
        name: 'Photoshop', 
        Icon: SiAdobephotoshop, 
        color: '#31A8FF', 
        projects: 10,
        description: 'Image Editing, UI Design'
      },
      { 
        name: 'Figma', 
        Icon: FaFigma, 
        color: '#F24E1E', 
        projects: 12,
        description: 'UI/UX Design, Prototyping'
      }
    ]
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setTimeout(() => setSelectedSkill(null), 3000); // Auto close after 3 seconds
  };

  const SkillCard = ({ skill, index }) => (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 50}
      onClick={() => handleSkillClick(skill)}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-gray-100 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 overflow-hidden"
      style={{
        animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
        animationDelay: `${index * 0.2}s`
      }}
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 to-pink-400/0 group-hover:from-purple-400/10 group-hover:to-pink-400/10 transition-all duration-300"></div>

      {/* Icon */}
      <div className="relative flex justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl group-hover:shadow-lg transition-all">
          <skill.Icon 
            className="text-5xl transition-all duration-300" 
            style={{ color: skill.color }}
          />
        </div>
      </div>

      {/* Skill Name */}
      <h3 className="relative text-center font-bold text-gray-800 dark:text-white text-lg mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
        {skill.name}
      </h3>

      {/* Project Count Badge */}
      <div className="relative flex justify-center">
        <span className="px-4 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold">
          {skill.projects} Projects
        </span>
      </div>

      {/* Hover Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some front-end, back-end, and other tools and technologies. This technologies know and I use in my professional projects.
          </p>
          <div className="flex justify-center mt-4">
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
          </div>
        </div>

        {/* Frontend Skills */}
        <div className="mb-16">
          <h3 className=" text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center" data-aos="fade-up">
            Front-End Technology 
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skillsData.frontend.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center" data-aos="fade-up">
            Back-End Technology
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillsData.backend.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center" data-aos="fade-up">
            Others Technology
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skillsData.others.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Modal/Popup for Skill Details */}
      {selectedSkill && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedSkill(null)}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-md w-full shadow-2xl transform scale-100 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 p-6 rounded-2xl mb-6">
                <selectedSkill.Icon 
                  className="text-7xl" 
                  style={{ color: selectedSkill.color }}
                />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedSkill.name}
              </h3>
              
              <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                {selectedSkill.description}
              </p>
              
              <div className="bg-purple-50 dark:bg-purple-900/30 px-6 py-3 rounded-full">
                <p className="text-purple-700 dark:text-purple-300 font-bold text-xl">
                  {selectedSkill.projects} Projects Completed
                </p>
              </div>

              <button
                onClick={() => setSelectedSkill(null)}
                className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Skills2;