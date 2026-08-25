import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      color: "neon-purple",
      skills: [
        {
          name: "Scikit-learn",
          logo: "/logos/scikit-learn.svg",
        },
        {
          name: "XGBoost",
          logo: "/logos/xgboost.png",
        },
        {
          name: "Pandas",
          logo: "/logos/pandas.svg",
        },
        {
          name: "NumPy",
          logo: "/logos/numpy.svg",
        },
      ],
    },
    {
      title: "Backend & APIs",
      color: "neon-cyan",
      skills: [
        {
          name: "Python",
          logo: "/logos/python.svg",
        },
        {
          name: "FastAPI",
          logo: "/logos/fastapi.svg",
        },
        {
          name: "SQLAlchemy",
          logo: "/logos/sqlalchemy.svg",
        },
        {
          name: "Pydantic",
          logo: "/logos/pydantic.svg",
        },
      ],
    },
    {
      title: "Databases",
      color: "neon-pink",
      skills: [
        {
          name: "PostgreSQL",
          logo: "/logos/postgresql.svg",
        },
        {
          name: "MySQL",
          logo: "/logos/mysql.svg",
        },
        {
          name: "MongoDB",
          logo: "/logos/mongodb.svg",
        },
      ],
    },
    {
      title: "Frontend",
      color: "neon-purple",
      skills: [
        {
          name: "JavaScript",
          logo: "/logos/javascript.svg",
        },
        {
          name: "React",
          logo: "/logos/react.svg",
        },
        {
          name: "HTML5",
          logo: "/logos/html5.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "/logos/tailwindcss.svg",
        },
      ],
    },
    {
      title: "DevOps & Deployment",
      color: "neon-cyan",
      skills: [
        {
          name: "Docker",
          logo: "/logos/docker.svg",
        },
        {
          name: "Vercel",
          logo: "/logos/vercel.svg",
        },
        {
          name: "Render",
          logo: "/logos/render.svg",
        },
        {
          name: "GitHub",
          logo: "/logos/github.svg",
        },
      ],
    },
  ];
  // Static class maps — Tailwind cannot see interpolated class names.
  const barStyles: Record<string, string> = {
    "neon-purple": "bg-neon-purple",
    "neon-cyan": "bg-neon-cyan",
    "neon-pink": "bg-neon-pink",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
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
              My technical expertise across various programming languages,
              frameworks, and tools
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
                    <div
                      className={`w-12 h-1 ${barStyles[category.color]} rounded-full`}
                    ></div>
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
                              e.currentTarget.style.display = "none";
                              e.currentTarget.nextElementSibling?.classList.remove(
                                "hidden",
                              );
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
