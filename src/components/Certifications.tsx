import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ExternalLink, Calendar, Award } from "lucide-react";
import { useState } from "react";

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certifications = [
    {
      id: 1,
      title: "Database Management System",
      issuer: "NPTEL (IIT Kharagpur)",
      date: "2025",
      status: "Completed",
      description: "Comprehensive course on DBMS fundamentals covering relational models, SQL, normalization, and database design.",
      thumbnail: "/certificates/nptel-dbms.jpg",
      credentialUrl: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs145/Course/NPTEL25CS145S64900077609169333.pdf",
      skills: ["Relational Database", "SQL", "Indexing", "ER Diagram", "Normalization", "Views"],
      color: "neon-blue",
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      title: "Fundamentals of Object Oriented Programming",
      issuer: "NPTEL (IIT Madras)",
      date: "2025",
      status: "Completed",
      description: "Comprehensive course covering OOP concepts, design patterns, and advanced programming techniques in Java.",
      thumbnail: "/certificates/nptel-oop.jpg",
      credentialUrl: "https://internalapp.nptel.ac.in/NOC/NOC25/SEM1/Ecertificates/106/noc25-cs34/Course/NPTEL25CS34S55870186104309068.pdf",
      skills: ["Java", "OOP", "Design Patterns", "Software Engineering"],
      color: "neon-purple",
      bgGradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 3,
      title: "TCS iON Career Edge - Young Professional",
      issuer: "TCS iON",
      date: "2024",
      status: "Certified",
      description: "Industry-focused certification program covering professional skills, communication, and technical competencies.",
      thumbnail: "/certificates/tcs-ion.jpg",
      credentialUrl: "https://drive.google.com/file/d/1Bf2uodYz763pWH5nnaDKu-Qfmb9WwyGS/view",
      skills: ["Professional Skills", "Communication", "Leadership", "Project Management"],
      color: "neon-cyan",
      bgGradient: "from-cyan-500/20 to-teal-500/20"
    },
    {
      id: 4,
      title: "Introduction to Programming in C",
      issuer: "NPTEL (IIT Kharagpur)",
      date: "2023",
      status: "Completed",
      description: "Fundamental programming course covering C language concepts, and algorithmic thinking.",
      thumbnail: "https://archive.nptel.ac.in/content/noc/NOC23/SEM1/Ecertificates/106/noc23-cs02/Course/NPTEL23CS02S2573176003056990.jpg",
      credentialUrl: "https://archive.nptel.ac.in/content/noc/NOC23/SEM1/Ecertificates/106/noc23-cs02/Course/NPTEL23CS02S2573176003056990.jpg",
      skills: ["C Programming", "Problem Solving"],
      color: "neon-pink",
      bgGradient: "from-pink-500/20 to-rose-500/20"
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

  const handleViewCredential = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6 lg:pl-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-10">
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
                  {/* Certificate Thumbnail */}
                  <div className={`relative overflow-hidden h-48 bg-gradient-to-br ${cert.bgGradient}`}>
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg border border-border/30">
                        <img
                          src={cert.thumbnail}
                          alt={cert.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', cert.bgGradient);
                          }}
                        />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
                        cert.status === 'Completed' || cert.status === 'Certified' 
                          ? 'bg-neon-green/30 text-neon-green border border-neon-green/30' 
                          : 'bg-neon-cyan/30 text-neon-cyan border border-neon-cyan/30'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Certificate Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Award className={`text-${cert.color} flex-shrink-0 mt-1`} size={20} />
                      <ExternalLink 
                        className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer" 
                        size={16}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewCredential(cert.credentialUrl);
                        }}
                      />
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
                          <button 
                            className={`w-full py-2 rounded-lg text-sm font-medium transition-colors bg-${cert.color}/20 text-${cert.color} hover:bg-${cert.color}/30 flex items-center justify-center gap-2`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewCredential(cert.credentialUrl);
                            }}
                          >
                            <ExternalLink size={14} />
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