import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaDownload, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import profileData from '../data/profile.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../assets/Profile.jpeg'

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    setProfile(profileData);
  }, []);

  if (!profile) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  // Floating tech icons around profile picture
  const techIcons = [
    { Icon: FaPython, color: '#3776AB', position: 'top-0 left-0' },
    { Icon: FaReact, color: '#61DAFB', position: 'top-0 right-0' },
    { Icon: SiExpress, color: '#000000', position: 'bottom-0 left-0' },
    { Icon: FaNodeJs, color: '#339933', position: 'bottom-0 right-0' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Gradient Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900"> */}
        {/* Floating Circles */}
        {/* <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 dark:bg-yellow-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}
      {/* </div> */}

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image with Floating Icons */}
          <div data-aos="fade-right" className="flex justify-center">
            <div className="relative">
              {/* Main Profile Circle */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-700 shadow-2xl bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                  <img
                    src={image}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Tech Icons */}
              {techIcons.map((tech, index) => (
                <div
                  key={index}
                  className={`absolute ${tech.position} transform -translate-x-1/2 -translate-y-1/2`}
                  style={{
                    animation: `float ${3 + index}s ease-in-out infinite`,
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-xl border-4 border-purple-200 dark:border-purple-700 hover:scale-110 transition-transform">
                    <tech.Icon className="text-4xl md:text-5xl" style={{ color: tech.color }} />
                  </div>
                </div>
              ))}

              {/* Wave Hand Emoji */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full p-6 shadow-xl animate-bounce">
                <p className="text-3xl font-bold">👋</p>
              </div>
            </div>
          </div>

          {/* Right Side - Info */}
          <div data-aos="fade-left" className="space-y-6">
            <div>
              <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                {profile.name}
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mt-4 mb-4"></div>
            </div>

            <h2 className="text-2xl md:text-3xl text-purple-600 dark:text-purple-400 font-bold">
              {profile.title}
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {profile.bio}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={profile.resume}
                download
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-2"
              >
                <FaDownload />
                Get Resume
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-purple-500 text-purple-600 dark:text-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="px-8 py-3 text-gray-700 dark:text-gray-300 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2"
              >
                View My Works →
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-all hover:scale-110 shadow-lg"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all hover:scale-110 shadow-lg"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href={profile.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all hover:scale-110 shadow-lg"
              >
                <FaFacebook className="text-xl" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full">
                  <FaEnvelope className="text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-sm md:text-base">{profile.social.email}</span>
              </p>
              <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full">
                  <FaPhone className="text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-sm md:text-base">{profile.social.phone}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Profile;