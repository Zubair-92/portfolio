import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: 'Senior Full Stack Developer & Team Lead',
      company: 'Oryxcode',
      period: '2022 - Present',
      description: [
        'The role of Senior Developer and Team Lead managing both the technical direction and execution of multiple key projects',
        'I led the development of a centralized API platform to support all company software',
        'I was responsible for handling project planning, team coordination, and delivery oversight',
        'My contributions included major enhancements to the POS (Point of Sale) system, order panel, product control platform, and the mobile application developed using Flutter',
        'I worked across both front-end and back-end layers, focusing on improving performance, usability, and system reliability',
        'This experience further sharpened my technical expertise, leadership capabilities, and project management skills',
      ],
    },
    {
      title: 'Back End Web Developer',
      company: 'Careers And Resumes',
      period: '2023/3 - 2023/9',
      description: [
        'Served in a temporary role, contributing to the back-end development of the company’s website',
        'Focused on functionality, performance, and seamless integration',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Tradify Services',
      period: '2021/9 - 2022/2',
      description: [
        'Served in a temporary role during which I developed two college projects for the company’s clients (students)', 
        'Additionally, I contributed to front-end enhancements on the company’s product website, TFSSouq',
      ],
    },
    {
      title: 'Web Developer',
      company: 'White Creations',
      period: '2021/3 - 2021/7',
      description: [
        'Worked as a Web Developer on various web application projects using Laravel',
        'Contributed primarily to back-end development for both CMS platforms and application-based websites',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Maven Technologies',
      period: '2019/10 - 2020/12',
      description: [
        'Built intuitive and user-friendly front-end and back-end functionalities using Bootstrap, Core PHP, and the Laravel framework',
        'Also responsible for maintaining the company’s Karate web application',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Pixel Float',
      period: '2018/9 - 2019/3',
      description: [
        'Worked as a Web Developer on multiple projects, utilizing Core PHP',    
        'Applied the MVC (Model-View-Controller) architecture for clean, organized, and maintainable code.',
      ],
    },
    {
      title: 'Web Developer',
      company: 'G2Evolution',
      period: '2015/8 - 2017/2',
      description: [
        'Worked as a Web Developer on multiple projects, utilizing Core PHP',    
        'Applied the MVC (Model-View-Controller) architecture for clean, organized, and maintainable code',
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 px-6 md:px-16 relative overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          className={`transition-all duration-1000`}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center text-indigo-400">
            Professional <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-16 rounded-full"></div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <motion.div
                      className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2"
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                          <Briefcase size={24} />
                        </div>
                        <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                          {exp.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 mb-4 text-slate-400">
                        <Calendar size={18} />
                        <span className="font-semibold">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>

                      <ul className="space-y-2 text-slate-300">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full -translate-x-1.5 border-4 border-slate-950 transition-transform"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
