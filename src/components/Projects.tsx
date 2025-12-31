import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderOpen, Calendar } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AidCare",
      subtitle: "Orphanage Donation Management System",
      description: "A comprehensive web application built with Django and MySQL for managing orphanage donations, volunteer coordination, and administrative tasks. Features real-time tracking, and responsive design.",
      technologies: ["Django", "MySQL", "Python", "Bootstrap", "JavaScript"],
      github: "https://github.com/jeeva64/Aidcare",
      demo: "https://aidcare.vercel.app/",
      status: "Live",
      featured: true,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
      date: "2024"
    },
    {
      id: 2,
      title: "Portfolio Website",
      subtitle: "Personal Portfolio",
      description: "Modern, responsive portfolio website with dark theme, neon aesthetics, and smooth animations. Built with React, Framer Motion, and Three.js for an immersive experience.",
      technologies: ["React", "TypeScript", "Framer Motion", "Three.js", "Tailwind CSS"],
      github: "https://github.com/jeeva64/Jeeva-Portfolio",
      demo: "https://jeeva-dev.web.app/",
      status: "Live",
      featured: true,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      date: "2025"
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
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing my best work and innovative solutions
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-card overflow-hidden h-full cursor-pointer group">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Live Demo Button */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="text-xs">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Live Demo
                      </Button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <FolderOpen className="text-neon-purple flex-shrink-0 mt-1" size={20} />
                      <ExternalLink className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer" size={16} />
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={14} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{project.date}</span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded-md bg-neon-purple/20 text-neon-purple"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
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