import { useEffect, useState } from 'react';
import { FaTrophy, FaAward, FaCalendar, FaCertificate, FaStar, FaCheckCircle } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import achievementData from '../data/achievement.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Achievement = () => {
  const [achievements, setAchievements] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    AOS.init({ duration: 1000 });
    setAchievements(achievementData.achievements);
  }, []);

  // Get unique categories
  const categories = ['All', ...new Set(achievements.map(a => a.category))];

  // Filter achievements
  const filteredAchievements = selectedCategory === 'All'
    ? achievements
    : achievements.filter(a => a.category === selectedCategory);

  // Category badge colors
  const categoryColors = {
    Leadership: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    Development: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    Competition: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    Education: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    'Open Source': 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
    Community: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300'
  };

  return (
    <section id="achievement" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div data-aos="fade-up" className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaTrophy className="text-5xl text-yellow-500 animate-bounce" />
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
              My <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Achievements</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recognition, awards, and milestones achieved throughout my journey
          </p>
          <div className="flex justify-center mt-4">
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-orange-600 rounded-full"></div>
          </div>
        </div>

        {/* Category Filter */}
        <div data-aos="fade-up" className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-orange-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredAchievements.map((achievement, index) => (
            <div
              key={achievement.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header with Badge */}
              <div className="bg-gradient-to-r from-purple-600 to-orange-500 p-6 relative">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-6xl">{achievement.badge}</span>
                      <MdVerified className="text-white text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-white/90 font-semibold flex items-center gap-2">
                      <FaAward className="text-white" />
                      {achievement.organization}
                    </p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-1 rounded-full text-sm font-bold ${categoryColors[achievement.category]}`}>
                    {achievement.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Date Info */}
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-yellow-500" />
                    <span>Awarded: {achievement.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-500" />
                    <span>Valid: {achievement.validTill}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Features */}
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" />
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {achievement.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm"
                      >
                        <span className="text-yellow-500 mt-1">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certificate Link */}
                {achievement.certificateLink && (
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href={achievement.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all"
                    >
                      <FaCertificate />
                      View Certificate
                    </a>
                  </div>
                )}
              </div>

              {/* Bottom Shine Effect */}
              <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div data-aos="fade-up" className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-yellow-600 mb-2">
              {achievements.length}+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-semibold">
              Total Achievements
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {categories.length - 1}
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-semibold">
              Categories
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {new Set(achievements.map(a => a.organization)).size}
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-semibold">
              Organizations
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-green-600 mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-semibold">
              Verified
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Achievement;