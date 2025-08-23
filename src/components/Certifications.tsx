import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ExternalLink, Calendar, Award } from "lucide-react";
import { useState } from "react";

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certifications = [
    {
      id: 1,
      title: "NPTEL - Object Oriented Programming",
      issuer: "NPTEL (IIT Madras)",
      date: "2025",
      status: "Completed",
      description: "Comprehensive course covering OOP concepts, design patterns, and advanced programming techniques in Java.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center",
      credentialUrl: "#",
      skills: ["Java", "OOP", "Design Patterns", "Software Engineering"],
      color: "neon-purple"
    },
    {
      id: 2,
      title: "TCS iON Career Edge - Young Professional",
      issuer: "TCS iON",
      date: "2024",
      status: "Certified",
      description: "Industry-focused certification program covering professional skills, communication, and technical competencies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
      credentialUrl: "#",
      skills: ["Professional Skills", "Communication", "Leadership", "Project Management"],
      color: "neon-cyan"
    },
    {
      id: 3,
      title: "NPTEL - Programming in C",
      issuer: "NPTEL (IIT Kharagpur)",
      date: "2023",
      status: "Completed",
      description: "Fundamental programming course covering C language concepts, data structures, and algorithmic thinking.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=center",
      credentialUrl: "#",
      skills: ["C Programming", "Data Structures", "Algorithms", "Problem Solving"],
      color: "neon-pink"
    },
    {
      id: 4,
      title: "Full Stack Web Development",
      issuer: "FreeCodeCamp",
      date: "2023",
      status: "Certified",
      description: "Complete web development certification covering frontend and backend technologies with hands-on projects.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center",
      credentialUrl: "#",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      color: "neon-green"
    },
    {
      id: 5,
      title: "Python for Data Science",
      issuer: "Coursera (IBM)",
      date: "2023",
      status: "Completed",
      description: "Data science fundamentals using Python, covering data analysis, visualization, and machine learning basics.",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&crop=center",
      credentialUrl: "#",
      skills: ["Python", "Pandas", "NumPy", "Data Visualization", "Machine Learning"],
      color: "neon-blue"
    },
    {
      id: 6,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      status: "In Progress",
      description: "Foundation-level certification covering AWS cloud concepts, services, and best practices.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
      credentialUrl: "#",
      skills: ["AWS", "Cloud Computing", "DevOps", "Infrastructure"],
      color: "neon-cyan"
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="certifications" className="py-20 relative">
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
              Certifications & Learning
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Continuous learning journey through professional certifications and specialized courses
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className="glass-card overflow-hidden h-full cursor-pointer group"
                  onClick={() => setSelectedCert(selectedCert === cert.id ? null : cert.id)}
                >
                  {/* Certificate Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        cert.status === 'Completed' || cert.status === 'Certified' 
                          ? 'bg-neon-green/20 text-neon-green' 
                          : 'bg-neon-cyan/20 text-neon-cyan'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Certificate Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Award className={`text-${cert.color} flex-shrink-0 mt-1`} size={20} />
                      <ExternalLink className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer" size={16} />
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={14} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                    </div>

                    <p className="text-sm font-medium text-secondary mb-3">
                      {cert.issuer}
                    </p>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {cert.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className={`px-2 py-1 text-xs rounded-md bg-${cert.color}/20 text-${cert.color}`}
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Expanded Details */}
                    {selectedCert === cert.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-border"
                      >
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm font-semibold mb-2 text-foreground">All Skills:</h4>
                            <div className="flex flex-wrap gap-2">
                              {cert.skills.map((skill, index) => (
                                <span
                                  key={index}
                                  className={`px-2 py-1 text-xs rounded-md bg-${cert.color}/20 text-${cert.color}`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          <button className={`w-full py-2 rounded-lg text-sm font-medium transition-colors bg-${cert.color}/20 text-${cert.color} hover:bg-${cert.color}/30`}>
                            View Credential
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};