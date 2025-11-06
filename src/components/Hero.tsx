import { motion } from "framer-motion";
import {
  FiGithub,
  FiMail,
  FiMessageCircle,
  FiNavigation,
} from "react-icons/fi";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark via-slate-900 to-dark"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-secondary/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse animation-delay-200"></div>
      </div>

      <motion.div
        className="section-container relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <motion.div variants={itemVariants} className="mb-4">
            <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm <span className="gradient-text">Tony Wen</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl text-gray-300 mb-6"
          >
            Senior Software Engineer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          >
            With 10+ years of experience in full-stack development, specializing
            in cryptocurrency, blockchain technology, AI/ML, and modern web
            applications.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn-outline">
              View My Work
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            <SocialLink
              href="https://github.com/tony-wen555"
              icon={<FiGithub size={24} />}
            />
            {/* <SocialLink
              href="https://linkedin.com"
              icon={<FiLinkedin size={24} />}
            /> */}
            {/* <SocialLink
              href="https://upwork.com"
              icon={<SiUpwork size={24} />}
            /> */}
            <SocialLink
              href="mailto:giantking0511@example.com"
              icon={<FiMail size={24} />}
            />
            <SocialLink
              href="@tony_man1992"
              icon={<FiNavigation size={24} />}
            />
            <SocialLink
              href="tel:+12514280531"
              icon={<FiMessageCircle size={24} />}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-primary transition-colors"
    whileHover={{ scale: 1.2, y: -5 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

export default Hero;
