import { FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-base-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="btn btn-circle btn-primary"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-xl" />
          </button>

          {/* Footer Text */}
          <p className="text-center text-base-content/70">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          <p className="text-center text-base-content/60 flex items-center gap-2">
            Made with <FaHeart className="text-red-500" /> by{' '}
            <span className="text-primary font-semibold">Md Amirhanza</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;