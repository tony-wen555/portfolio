import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-container bg-slate-900/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate software engineer with over 10+ years of
              experience building cutting-edge applications. My journey in tech
              has taken me from traditional web development to the exciting
              worlds of blockchain, AI, and cryptocurrency.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I graduated from{" "}
              <span className="text-primary font-semibold">
                Stanford University
              </span>{" "}
              with a Master's degree in Computer Science, where I developed a
              deep understanding of algorithms, distributed systems, and machine
              learning.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently based in Wuhan, China, I specialize in developing
              sophisticated financial models, cryptocurrency prediction systems,
              and full-stack web applications. I'm particularly experienced with
              React, TypeScript, Python, C++, and blockchain technologies like
              Bittensor.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me analyzing market trends,
              contributing to open-source projects, or exploring new
              technologies that push the boundaries of what's possible.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <StatCard number="10+" label="Years Experience" />
            <StatCard number="100+" label="Projects Completed" />
            <StatCard number="50+" label="Happy Clients" />
            <StatCard number="10+" label="Technologies" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <motion.div
    className="card text-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
      {number}
    </div>
    <div className="text-gray-400 text-sm md:text-base">{label}</div>
  </motion.div>
);

export default About;
