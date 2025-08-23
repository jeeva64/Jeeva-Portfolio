import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Globe, 
  Cpu, 
  GitBranch, 
  Smartphone,
  Brain,
  Settings
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="w-6 h-6" />,
      color: "neon-purple",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      color: "neon-cyan",
      skills: [
        { name: "React", level: 85 },
        { name: "Django", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Bootstrap", level: 75 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      title: "Database & Backend",
      icon: <Database className="w-6 h-6" />,
      color: "neon-pink",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 70 },
        { name: "REST APIs", level: 85 },
        { name: "FastAPI", level: 70 },
        { name: "Node.js", level: 65 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      color: "neon-green",
      skills: [
        { name: "TensorFlow", level: 70 },
        { name: "PyTorch", level: 65 },
        { name: "Scikit-learn", level: 75 },
        { name: "Pandas", level: 80 },
        { name: "NumPy", level: 85 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="w-6 h-6" />,
      color: "neon-blue",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 90 },
        { name: "Linux", level: 75 },
        { name: "Docker", level: 60 },
        { name: "VS Code", level: 95 }
      ]
    },
    {
      title: "Development",
      icon: <Cpu className="w-6 h-6" />,
      color: "neon-purple",
      skills: [
        { name: "Algorithm Design", level: 85 },
        { name: "Data Structures", level: 90 },
        { name: "System Design", level: 70 },
        { name: "Testing", level: 75 },
        { name: "Debugging", level: 95 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      <div className="container mx-auto px-6">
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
              Technologies I work with and my proficiency levels
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-card p-6 h-full hover:border-neon-purple/50 transition-all duration-300">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg bg-${category.color}/10 text-${category.color}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/70 rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.8, 
                              delay: skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </div>
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