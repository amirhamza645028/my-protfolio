import { useEffect, useState } from 'react';
import skillsData from '../data/skills.json';

// Font Awesome Icons
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt
} from 'react-icons/fa';

// Simple Icons
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman
} from 'react-icons/si';

// Dev Icons (VS Code icon এখানে)
import { DiVisualstudio } from 'react-icons/di';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    setSkills(skillsData.skills);
  }, []);

  // Icon mapping
  const iconMap = {
    FaReact: FaReact,
    SiJavascript: SiJavascript,
    SiTailwindcss: SiTailwindcss,
    FaHtml5: FaHtml5,
    FaCss3Alt: FaCss3Alt,
    FaNodeJs: FaNodeJs,
    SiExpress: SiExpress,
    SiMongodb: SiMongodb,
    FaGitAlt: FaGitAlt,
    DiVisualstudio: DiVisualstudio,
    SiPostman: SiPostman
  };

  return (
    <section id="skills" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">

        {/* Section Title */}
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
            Technologies and tools I use to build modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div
              key={skillCategory.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="card-body">
                <h3 className="card-title text-2xl text-primary mb-4">
                  {skillCategory.category}
                </h3>

                <div className="space-y-4">
                  {skillCategory.items.map((skill) => {
                    const Icon = iconMap[skill.icon];

                    return (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {Icon && <Icon className="text-2xl text-primary" />}
                            <span className="font-semibold text-base-content">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm text-base-content/60">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-base-300 rounded-full h-2.5">
                          <div
                            className="bg-primary h-2.5 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
