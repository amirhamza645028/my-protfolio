import { useEffect, useState } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaFacebook, 
  FaTwitter,
  FaWhatsapp,
  FaPaperPlane
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Contact Info
  const contactInfo = {
    email: 'md9407510@gmail.com',
    phone: '01729007747',
    whatsapp: '8801729007747',
    location: 'Dhaka, Bangladesh'
  };

  // Social Links
  const socialLinks = [
    { Icon: FaGithub, url: 'https://github.com/amirhamza645028', name: 'GitHub', color: '#333' },
    { Icon: FaLinkedin, url: 'https://www.linkedin.com/in/hamza645028/', name: 'LinkedIn', color: '#0077B5' },
    { Icon: FaFacebook, url: 'https://www.facebook.com/share/1Doxu4DPMe/', name: 'Facebook', color: '#1877F2' },
    { Icon: FaTwitter, url: 'https://x.com/MdHamza762397', name: 'Twitter', color: '#1DA1F2' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields!');
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact Form Message');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success toast
    toast.success(
      `Successfully sent email to ${contactInfo.email} for developer contact!`,
      {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  // Handle Call
  const handleCall = () => {
    window.location.href = `tel:+${contactInfo.whatsapp}`;
    toast.info('Opening dialer...', { autoClose: 2000 });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's work together!
          </p>
          <div className="flex justify-center mt-4">
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div 
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-500"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full">
                    <FaEnvelope className="text-2xl text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-lg">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div 
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-green-500"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full">
                    <FaPhone className="text-2xl text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-lg">Phone</p>
                    <button
                      onClick={handleCall}
                      className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      +{contactInfo.whatsapp}
                    </button>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div 
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full">
                    <FaMapMarkerAlt className="text-2xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-lg">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Me Section */}
            <div className="mt-10" data-aos="fade-up" data-aos-delay="400">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all hover:scale-110"
                    style={{ 
                      '--hover-color': social.color,
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = social.color;
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.color = '';
                    }}
                  >
                    <social.Icon className="text-2xl text-gray-700 dark:text-gray-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div data-aos="fade-left">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${contactInfo.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 hover:bg-green-600 transition-all z-50 animate-bounce"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      {/* Custom Animations */}
      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Contact;