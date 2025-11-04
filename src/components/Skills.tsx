import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiReact,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiThealgorithms,
} from "react-icons/si";
import { FaBitcoin } from "react-icons/fa";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <SiReact />, level: 100 },
        { name: "TypeScript", icon: <SiTypescript />, level: 100 },
        { name: "Next.js", icon: <SiNextdotjs />, level: 100 },
        { name: "JavaScript", icon: <SiJavascript />, level: 100 },
        { name: "TailwindCSS", icon: <SiTailwindcss />, level: 100 },
        { name: "Angular.js", icon: <SiAngular />, level: 100 },
        { name: "Vue.js", icon: <SiVuedotjs />, level: 100 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", icon: <SiPython />, level: 97 },
        { name: "C++", icon: <SiCplusplus />, level: 100 },
        { name: "Node.js", icon: <SiNodedotjs />, level: 100 },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 96 },
        { name: "MongoDB", icon: <SiMongodb />, level: 98 },
      ],
    },
    {
      title: "Specialized",
      skills: [
        { name: "Algorithm", icon: <SiThealgorithms />, level: 100 },
        { name: "Blockchain", icon: <FaBitcoin />, level: 98 },
        { name: "Docker", icon: <SiDocker />, level: 95 },
        { name: "Git", icon: <SiGit />, level: 100 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-2"
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Core competencies and technical expertise
          </motion.p>
        </div>

        {/* Skills Categories */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="card border border-slate-700/50"
            >
              {/* Category Title */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + categoryIndex * 0.1 }}
                className="text-2xl font-bold mb-6 text-blue-400"
              >
                {category.title}
              </motion.h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <SkillItemCompact
                    key={skill.name}
                    skill={skill}
                    delay={0.4 + categoryIndex * 0.1 + index * 0.05}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

const SkillItemCompact = ({
  skill,
  delay,
  inView,
}: {
  skill: { name: string; icon: React.ReactNode; level: number };
  delay: number;
  inView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
      className="group p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-2">
        <motion.span
          whileHover={{ scale: 1.15, rotate: 5 }}
          className="text-2xl group-hover:text-blue-400 transition-colors"
        >
          {skill.icon}
        </motion.span>
        <span className="text-white font-semibold text-sm">{skill.name}</span>
        <span className="ml-auto text-xs font-bold text-blue-400">
          {skill.level}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{
            duration: 1,
            delay: delay + 0.2,
            ease: "easeOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
