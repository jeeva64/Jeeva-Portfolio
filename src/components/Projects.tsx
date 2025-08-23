import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "AidCare",
      subtitle: "Orphanage Donation Management System",
      description: "A comprehensive web application built with Django and MySQL for managing orphanage donations, volunteer coordination, and administrative tasks. Features secure payment integration, real-time tracking, and responsive design.",
      technologies: ["Django", "MySQL", "Python", "Bootstrap", "JavaScript"],
      github: "#",
      demo: "#",
      status: "Completed",
      featured: true
    },
    {
      title: "Portfolio Website",
      subtitle: "Personal Developer Portfolio",
      description: "Modern, responsive portfolio website with dark theme, neon aesthetics, and smooth animations. Built with React, Framer Motion, and Three.js for an immersive experience.",
      technologies: ["React", "TypeScript", "Framer Motion", "Three.js", "Tailwind CSS"],
      github: "#",
      demo: "#",
      status: "Live",
      featured: true
    },
    {
      title: "Coming Soon",
      subtitle: "AI-Powered Project",
      description: "Working on an exciting AI project that combines machine learning with modern web technologies. Stay tuned for updates!",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      github: "#",
      demo: "#",
      status: "In Development",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
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
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and ongoing projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`glass-card p-6 h-full hover:border-neon-purple/50 transition-all duration-300 ${
                  project.featured ? 'ring-1 ring-neon-purple/30' : ''
                }`}>
                  {/* Project Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      project.status === 'Live' ? 'bg-neon-green/10 text-neon-green' :
                      project.status === 'Completed' ? 'bg-neon-cyan/10 text-neon-cyan' :
                      'bg-neon-pink/10 text-neon-pink'
                    }`}>
                      {project.status}
                    </span>
                    {project.featured && (
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-neon-purple/10 text-neon-purple">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4 flex-grow">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-neon-cyan font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6 pt-4 border-t border-border/50">
                    <Button
                      variant="neon"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="glass"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Button variant="heroOutline" size="lg">
              View More Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};