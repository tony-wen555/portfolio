import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiNavigation,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [formspree, setFormspree] = useForm("xrbowjgw");
  if (formspree.succeeded) {
    alert("Thanks for joining!");
  }
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-container bg-slate-900/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Let's work together
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <ContactInfo
                icon={<FiMail />}
                title="Email"
                value="giantking0511@gmail.com"
                href="mailto:giantking0511@gmail.com"
              />
              <ContactInfo
                icon={<FiMapPin />}
                title="Location"
                value="Wuhan, China"
              />
              <ContactInfo
                icon={<FiPhone />}
                title="Phone"
                value="+1 (251) 428-0531"
                href="tel:+12514280531"
              />
              <ContactInfo
                icon={<FiMessageCircle />}
                title="WhatsApp"
                value="+1 (251) 428-0531"
                href="tel:+12514280531"
              />
              <ContactInfo
                icon={<FiNavigation />}
                title="Telegram"
                value="@tony_man1992"
                href="#"
              />
            </div>

            <div className="pt-6">
              <p className="text-gray-400 mb-4">Follow me on social media:</p>
              <div className="flex gap-4">
                {/* Add social media links here */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            onSubmit={setFormspree}
            className="card"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <FiSend />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

const ContactInfo = ({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) => {
  const content = (
    <div className="flex items-start gap-4">
      <div className="text-primary text-2xl mt-1">{icon}</div>
      <div>
        <h4 className="text-white font-semibold mb-1">{title}</h4>
        <p className="text-gray-400">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className="block hover:text-primary transition-colors"
        whileHover={{ x: 5 }}
      >
        {content}
      </motion.a>
    );
  }

  return <div>{content}</div>;
};

export default Contact;
