import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Bittensor Subnet 50 Synth Miner",
      description:
        "Advanced cryptocurrency price prediction system using stochastic volatility models (SVJ) and Monte Carlo simulations. Implements real-time data processing with Pyth API integration.",
      tags: ["Python", "Blockchain", "ML", "Bittensor"],
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    },
    {
      title: "AI Trading Dashboard",
      description:
        "Professional dashboard for cryptocurrency trading analysis with real-time market data visualization and predictive analytics.",
      tags: ["React", "TypeScript", "TailwindCSS", "Charts"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      title: "Portfolio Management System",
      description:
        "Full-stack application for managing investment portfolios with advanced financial modeling and risk analysis features.",
      tags: ["Next.js", "Python", "PostgreSQL", "AWS"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      title: "Blockchain Wallet Interface",
      description:
        "Secure and user-friendly cryptocurrency wallet interface with multi-chain support and real-time transaction tracking.",
      tags: ["React", "Web3", "Ethereum", "Solidity"],
      image:
        "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=800&q=80",
    },
    {
      title: "Time-Series Prediction Model",
      description:
        "Machine learning model for body motion classification and prediction using advanced time-series analysis techniques.",
      tags: ["Python", "TensorFlow", "BERT", "ML"],
      image:
        "https://ix-www.imgix.net/case-study/REW/REW_Agents.png?w=800&q=80",
    },
    {
      title: "Professional Portfolio Platform",
      description:
        "Modern, responsive portfolio website builder with customizable templates and integrated CMS.",
      tags: ["React", "TypeScript", "Vite", "TailwindCSS"],
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    },
  ];

  return (
    <section id="projects" className="section-container bg-slate-900/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
  inView,
}: {
  project: any;
  index: number;
  inView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: index * 0.1 }}
    className="card group overflow-hidden"
  >
    <div className="relative overflow-hidden rounded-lg mb-4">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
    </div>

    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
      {project.title}
    </h3>

    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2 mb-4">
      {project.tags.map((tag: string) => (
        <span
          key={tag}
          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export default Projects;
