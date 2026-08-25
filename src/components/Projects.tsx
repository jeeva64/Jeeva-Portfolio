import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderOpen, Calendar } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "VDart AutoML Platform",
      subtitle: "Production Machine Learning System",
      description:
        "A production Educational AutoML platform developed during my internship at VDart Academy that streamlines the machine learning workflow from dataset analysis and preprocessing to model training, evaluation, and comparison. The platform is deployed on the official VDart Academy website.",
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "Scikit-learn",
        "XGBoost",
        "Pandas",
        "NumPy",
      ],
      github: null,
      demo: null,
      live: "https://vdart-automl.netlify.app/",
      status: "Live",
      featured: true,
      image: "/Images/Projects/automl.webp",
      date: "2026",
      highlights: [
        "Live production deployment",
        "Automated EDA and data preprocessing",
        "Model training and evaluation pipeline",
        "Scikit-learn and XGBoost model comparison",
      ],
    },
    {
      id: 2,
      title: "AION 2K26",
      subtitle: "State-Level Technical Symposium Platform",
      description:
        "A full-stack symposium platform built and deployed for AION 2K26. The system handled participant registration and event management while requiring coordination across frontend, backend, database, deployment, and system administration.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Vercel",
        "Render",
        "Git",
      ],
      github: "https://github.com/jeeva64/Aion",
      demo: "https://aion2k26.vercel.app/",
      status: "Live",
      featured: true,
      image: "/Images/Projects/aion-2k26.webp",
      date: "2026",
      highlights: [
        "130+ registrations",
        "Full-stack application",
        "Independent frontend and backend deployment",
        "Database and production configuration",
      ],
    },
    {
      id: 3,
      title: "AION 2.0",
      subtitle: "AI-Powered Symposium Knowledge Assistant",
      description:
        "An AI-powered evolution of the AION platform currently under development. The project is focused on building a RAG-based knowledge assistant that can retrieve relevant symposium information and provide contextual responses using modern LLM and retrieval techniques.",
      technologies: [
        "RAG",
        "LLMs",
        "Embeddings",
        "Vector Database",
        "FastAPI",
        "React",
      ],
      github: "https://github.com/jeeva64/Frontend-AION2K26",
      demo: "https://aion2k26.tech/",
      status: "In Progress",
      featured: false,
      image: "/Images/Projects/aion-2k26-2-o-logo.webp",
      date: "2026",
      highlights: [
        "Retrieval-Augmented Generation",
        "Symposium knowledge retrieval",
        "Context-aware AI responses",
        "AI-powered application architecture",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Static class maps — Tailwind cannot see interpolated class names.
  const statusStyles: Record<string, string> = {
    Live: "bg-neon-green/20 text-neon-green border border-neon-green/30",
    "In Progress": "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30",
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
              Production systems and applied ML work I've built and shipped
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
                <Card className="glass-card overflow-hidden h-full group">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      width={1200}
                      height={600}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <FolderOpen
                        className="text-neon-purple flex-shrink-0 mt-1"
                        size={20}
                      />
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={14} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {project.date}
                      </span>
                      <span
                        className={`inline-flex px-3 py-0.5 text-xs font-medium rounded-full ${
                          statusStyles[project.status] ?? "bg-muted text-muted-foreground"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
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

                    {/* Action Buttons — rendered only when a link exists */}
                    {(project.github || project.demo || project.live) && (
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub — ${project.title}`}
                            className="flex-1"
                          >
                            <Button variant="outline" size="sm" className="w-full">
                              <Github className="w-4 h-4 mr-2" />
                              GitHub
                            </Button>
                          </a>
                        )}
                        {(project.demo || project.live) && (
                          <a
                            href={(project.demo ?? project.live)!}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live Demo — ${project.title}`}
                            className="flex-1"
                          >
                            <Button
                              variant="secondary"
                              size="sm"
                              className="w-full"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          </a>
                        )}
                      </div>
                    )}
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
