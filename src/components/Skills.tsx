import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      color: "neon-purple",
      skills: [
        { 
          name: "Java", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        },
        { 
          name: "Python", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        { 
          name: "JavaScript", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        { 
          name: "C Programming", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
        }
      ]
    },
    {
      title: "Web Development",
      color: "neon-cyan",
      skills: [
        { 
          name: "HTML5", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        { 
          name: "CSS3", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        { 
          name: "Bootstrap", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        },
        { 
          name: "Django", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
        }
      ]
    },
    {
      title: "Development Tools",
      color: "neon-pink",
      skills: [
        { 
          name: "Git", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        },
        { 
          name: "GitHub", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        },
        { 
          name: "VS Code", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        },
        { 
          name: "MySQL", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 lg:pl-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My technical expertise across various programming languages, frameworks, and tools
            </p>
          </motion.div>

          {/* Skills Grid - Three Equal Rows */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-card p-6 h-full hover:border-neon-purple/50 transition-all duration-300">
                  {/* Category Header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <div className={`w-12 h-1 bg-gradient-to-r from-${category.color} to-${category.color}/50 rounded-full`}></div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex} 
                        className="group text-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Tech Logo */}
                        <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-background/50 flex items-center justify-center group-hover:bg-background/80 transition-all duration-200 shadow-lg group-hover:shadow-xl">
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                              // Fallback for missing logos
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                          <div className="w-8 h-8 bg-muted rounded hidden"></div>
                        </div>
                        
                        {/* Skill Name */}
                        <span className="text-sm font-medium text-foreground group-hover:text-neon-purple transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};