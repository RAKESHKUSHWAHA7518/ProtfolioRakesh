import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Database, Globe, Users, Trophy, CheckCircle2, Zap, Target } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <Code2 />, value: "6+", label: "Months Experience" },
    { icon: <Users />, label: "Happy Clients", value: "2+" },
    { icon: <Trophy />, label: "Awards Won", value: "0" },
    { icon: <Globe />, label: "Countries", value: "2+" },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js","Javascript", "Shadcn", "Tailwind CSS", "Redux"],
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      category: "UI/UX",
      items: ["Figma",  "User Research", "Prototyping", "Wireframing"],
      icon: <Palette className="w-6 h-6" />,
    },
    {
      category: "Backend",
      items: ["Node.js", "Python",    "MongoDB","Express Js", "REST APIs"],
      icon: <Database className="w-6 h-6" />,
    },
  ];

  const achievements = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Successfully delivered 2+ complex projects on time and within budget"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Expert",
      description: "Improved application load times by 40% through optimization In BookNow"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Quality Focused",
      description: "Maintained 98% test coverage across all projects"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate full-stack developer and UI/UX designer with a proven track record of 
            creating beautiful, functional, and user-centered digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Journey</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                With over 6 Months of experience in web development, I specialize in building 
                scalable applications that solve real business problems. My approach combines 
                technical expertise with creative problem-solving.
              </p>
              <p>
                I've had the privilege of working with diverse clients across multiple industries, 
                from startups to enterprise solutions, delivering high-quality solutions that exceed 
                expectations.
              </p>
              <p>
                I'm passionate about staying current with emerging technologies and best practices, 
                regularly contributing to open-source projects and sharing knowledge with the 
                developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl text-center transform transition-all duration-200 hover:shadow-lg"
              >
                <div className="text-purple-600 dark:text-purple-400 mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <div className="text-purple-600 dark:text-purple-400 mb-4">{achievement.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transform transition-all duration-200 hover:shadow-lg"
            >
              <div className="text-purple-600 dark:text-purple-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};