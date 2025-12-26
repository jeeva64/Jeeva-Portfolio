import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export const About = () => {
  const education = [
    {
      degree: "MSc in Artificial Intelligence",
      institution: "St. Joseph's College",
      period: "2025 – 2027",
      status: "Upcoming",
      description: "Advanced study in AI, Machine Learning, and Data Science"
    },
    {
      degree: "BSc in Computer Science",
      institution: "St. Joseph's College",
      period: "2022 – 2025",
      status: "GPA 8.38/10",
      description: "Strong foundation in programming, algorithms, and software development"
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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 lg:pl-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating innovative solutions and pushing the boundaries of technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* About Content */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <Card className="glass-card p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-neon-cyan">
                  Hello! I'm Jeeva
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate Software Developer with a deep interest in Artificial Intelligence 
                    and modern web technologies. My journey in computer science has been driven by 
                    curiosity and the desire to solve real-world problems through code.
                  </p>
                  <p>
                    Currently pursuing my Bachelor's degree in Computer Science with an impressive 
                    GPA of 8.38/10, and excited to continue with my Master's in AI starting 2025. 
                    I thrive on learning new technologies and building projects that make a difference.
                  </p>
                  <p>
                    When I'm not coding, you'll find me participating in hackathons, organizing 
                    tech events, or exploring the latest developments in AI and machine learning.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Education Timeline */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold mb-8 text-neon-purple">
                Education Journey
              </h3>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <Card className="glass-card p-6 ml-8 hover:border-neon-purple/50 transition-all duration-300">
                    {/* Timeline dot */}
                    <div className="absolute -left-4 top-6 w-4 h-4 bg-neon-purple rounded-full border-4 border-background"></div>
                    
                    {/* Timeline line */}
                    {index < education.length - 1 && (
                      <div className="absolute -left-2 top-10 w-0.5 h-16 bg-gradient-to-b from-neon-purple to-transparent"></div>
                    )}

                    <div className="space-y-2">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h4 className="text-lg font-semibold text-foreground">
                          {edu.degree}
                        </h4>
                        <span className="text-sm font-medium text-neon-cyan px-3 py-1 bg-neon-cyan/10 rounded-full">
                          {edu.status}
                        </span>
                      </div>
                      
                      <p className="text-neon-purple font-medium">
                        {edu.institution}
                      </p>
                      
                      <p className="text-sm text-muted-foreground">
                        {edu.period}
                      </p>
                      
                      <p className="text-sm text-muted-foreground mt-3">
                        {edu.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};