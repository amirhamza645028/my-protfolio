import { useEffect, useState } from 'react';
import { FaGraduationCap, FaCertificate, FaCalendar, FaMapMarkerAlt, FaAward } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import educationData from '../data/education.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  const [educations, setEducations] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    setEducations(educationData.educations);
    setCourses(educationData.courses);
  }, []);

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Education  <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>&</span> Courses
            </span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Education */}
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <FaGraduationCap className="text-blue-600" />
              Education
            </h3>

            <div className="space-y-6">
              {educations.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500"
                >
                  {/* Icon */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                      <MdSchool className="text-2xl text-blue-600 dark:text-blue-400" />
                    </div>

                    <div className="flex-1">
                      {/* Title/Degree */}
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.degree || item.title}
                      </h4>

                      {/* Institution */}
                      <p className="text-gray-600 dark:text-gray-300 mb-2 flex items-center gap-2">
                        <FaMapMarkerAlt className="text-blue-500 text-sm" />
                        {item.institution}
                      </p>

                      {/* Duration */}
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 flex items-center gap-2">
                        <FaCalendar className="text-blue-500" />
                        {item.duration}
                      </p>

                      {/* Grade or Details */}
                      {item.grade && (
                        <div className="inline-block bg-blue-50 dark:bg-blue-900/30 px-4 py-1 rounded-full">
                          <span className="text-blue-700 dark:text-blue-300 font-semibold text-sm">
                            {item.grade}
                          </span>
                        </div>
                      )}

                      {item.details && (
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                          {item.details}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Courses */}
          <div data-aos="fade-left">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <FaCertificate className="text-cyan-600" />
               <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>Courses</span>
            </h3>

            <div className="space-y-6">
              {courses.map((course, index) => (
                <div
                  key={course.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-cyan-500"
                >
                  {/* Icon */}
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-100 dark:bg-cyan-900 p-3 rounded-full">
                      <FaAward className="text-2xl text-cyan-600 dark:text-cyan-400" />
                    </div>

                    <div className="flex-1">
                      {/* Course Title */}
                      <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:text-white mb-2">
                        {course.title}
                      </h4>

                      {/* Provider */}
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {course.provider}
                      </p>

                      {/* Duration */}
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 flex items-center gap-2">
                        <FaCalendar className="text-cyan-500" />
                        {course.duration}
                      </p>

                      {/* Certificate Button */}
                      {course.certificate && (
                        <a
                          href={course.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all "
                        >
                          <FaCertificate />
                           <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>Certificate</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;