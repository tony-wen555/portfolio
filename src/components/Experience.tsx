import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Blockchain Solutions GmbH",
      location: "Frankfurt, Germany",
      period: "2024 - 2025",
      description: [
        "Led development of cryptocurrency prediction models using advanced ML techniques",
        "Architected and deployed Bittensor subnet miners with 95% uptime",
        "Optimized Monte Carlo simulations reducing computation time by 40%",
        "Mentored junior developers and conducted code reviews",
      ],
      technologies: ["Python", "C++", "Blockchain", "ML", "AWS"],
    },
    {
      title: "Full Stack Developer",
      company: "FinTech Innovations",
      location: "Remote",
      period: "2017 - 2023",
      description: [
        "Built and maintained scalable web applications serving 100k+ users",
        "Implemented real-time data processing pipelines for financial markets",
        "Developed RESTful APIs and microservices architecture",
        "Integrated third-party payment and analytics services",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    },
    {
      title: "Software Engineer",
      company: "Tech Startup Inc.",
      location: "Tokyo, Japan",
      period: "2014 - 2017",
      description: [
        "Developed mobile-first web applications using modern frameworks",
        "Collaborated with design team to create intuitive user interfaces",
        "Implemented automated testing and CI/CD pipelines",
        "Participated in agile development and sprint planning",
      ],
      technologies: ["JavaScript", "React", "MongoDB", "Git"],
    },
    {
      title: "Junior Developer",
      company: "Web Solutions Ltd.",
      location: "Tokyo, Japan",
      period: "2010 - 2014",
      description: [
        "Maintained and enhanced legacy codebases",
        "Developed responsive websites and web applications",
        "Collaborated with cross-functional teams on client projects",
        "Learned best practices in software development",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
  ];

  return (
    <section id="experience" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                experience={exp}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const ExperienceCard = ({
  experience,
  index,
  inView,
}: {
  experience: any;
  index: number;
  inView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ delay: index * 0.2 }}
    className="card border-l-4 border-primary"
  >
    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
      <div>
        <h3 className="text-2xl font-bold text-white mb-1">
          {experience.title}
        </h3>
        <div className="flex items-center gap-2 text-primary mb-2">
          <FiBriefcase size={18} />
          <span className="font-semibold">{experience.company}</span>
        </div>
        <div className="text-gray-400 text-sm">{experience.location}</div>
      </div>
      <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
        <FiCalendar size={16} />
        <span className="text-sm">{experience.period}</span>
      </div>
    </div>

    <ul className="space-y-2 mb-4">
      {experience.description.map((item: string, i: number) => (
        <li key={i} className="text-gray-300 flex items-start gap-2">
          <span className="text-primary mt-1">▹</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2">
      {experience.technologies.map((tech: string) => (
        <span
          key={tech}
          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30"
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

export default Experience;
