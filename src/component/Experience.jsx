import { useEffect, useState } from 'react';
import experienceData from '../data/experience.json';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import AOS from 'aos';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    setExperiences(experienceData.experiences);
  }, []);

  return (
    <section id="experience" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            Work <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Experience</span>
          </h2>
          <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
            My professional journey and career highlights
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative pl-8 pb-12 border-l-2 border-primary last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-primary rounded-full "></div>

              {/* Experience Card */}
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
                <div className="card-body">
                  {/* Header */}
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <h3 className="card-title text-2xl text-primary">
                        {exp.position}
                      </h3>
                      <p className="text-lg font-semibold text-base-content flex items-center gap-2 mt-1">
                        <FaBriefcase className=" text-primary" />
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>{exp.company} </span>
                      </p>
                    </div>
                    <div className="badge badge-primary badge-lg font-bold bg-gradient-to-r from-purple-00 to-pink-600">
                      {exp.type}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex flex-wrap gap-4 mt-2 text-base-content/70">
                    <p className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-primary" />
                      {exp.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaCalendar className="text-primary" />
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <div className="mt-4">
                    <h4 className="font-semibold text-base-content mb-2 ">
                      Key Responsibilities:
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-base-content/70">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;