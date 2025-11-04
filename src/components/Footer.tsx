import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Tony W</h3>
            <p className="text-gray-400">
              Senior Software Engineer specializing in blockchain, AI, and
              modern web development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#home" text="Home" />
              <FooterLink href="#about" text="About" />
              <FooterLink href="#skills" text="Skills" />
              <FooterLink href="#projects" text="Projects" />
              <FooterLink href="#contact" text="Contact" />
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <SocialIcon
                href="https://github.com/tony-wen555"
                icon={<FiGithub size={20} />}
              />
              <SocialIcon
                href="https://linkedin.com"
                icon={<FiLinkedin size={20} />}
              />
              <SocialIcon
                href="mailto:giantking0511@gmail.com"
                icon={<FiMail size={20} />}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <FiHeart className="text-red-500" /> by Tony W ©{" "}
            {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li>
    <a
      href={href}
      className="text-gray-400 hover:text-primary transition-colors"
    >
      {text}
    </a>
  </li>
);

const SocialIcon = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-slate-700 transition-all"
  >
    {icon}
  </a>
);

export default Footer;
