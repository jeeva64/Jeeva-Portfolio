import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Calendar,
  MapPin,
  PlayCircle,
  ExternalLink,
  Github,
  Cpu,
  Server,
  Rocket,
  Database,
  CheckCircle2,
} from "lucide-react";

type Tech = string;

interface Experience {
  id: number;
  organization: string;
  role: string;
  date: string;
  location: string;
  subtitle: string;
  summary: string;
  contributions: string[];
  technologies: Tech[];
  impact?: { label: string; icon: typeof CheckCircle2 }[];
  accent: "neon-cyan" | "neon-purple";
  badges: { label: string; tone: "live" | "neutral" }[];
  github?: string | null;
  live?: string | null;
  walkthrough?: string | null;
  walkthroughNote?: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    organization: "VDart Academy",
    role: "AI/ML Engineer Intern",
    date: "May 2026 – Jun 2026",
    location: "Tiruchirappalli, Tamil Nadu",
    subtitle: "Production AutoML Platform",
    summary:
      "Developed a production-ready Educational AutoML platform that automates the machine learning workflow for supervised learning tasks covering dataset analysis, preprocessing, model training, evaluation, and comparison. Deployed as part of the company's live ML system on the official VDart Academy website.",
    contributions: [
      "Designed automated EDA, data preprocessing, and statistical data-quality analysis workflows for uploaded datasets.",
      "Built ML pipelines supporting classification and regression using Scikit-learn and XGBoost.",
      "Engineered asynchronous REST APIs with FastAPI, SQLAlchemy, and Pydantic for dataset management and ML workflows.",
      "Implemented PostgreSQL-based experiment tracking for managing ML experiments and results.",
      "Containerized and deployed the application using Docker, Render, Vercel, and PostgreSQL.",
      "Connected backend and ML layers to unify data processing, training, evaluation, and application workflows.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Pydantic",
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "NumPy",
      "Docker",
      "Render",
      "Vercel",
    ],
    accent: "neon-cyan",
    badges: [{ label: "Live · auth required", tone: "live" }],
    github: null,
    live: null,
    walkthrough: null,
    walkthroughNote:
      "Live on the official VDart Academy website (authentication required).",
  },
  {
    id: 2,
    organization: "AION 2K26",
    role: "Web Developer & System Administrator",
    date: "2026",
    location: "State-Level Technical Symposium",
    subtitle: "Full-Stack Symposium Platform",
    summary:
      "Led the development and deployment of a full-stack symposium management platform, taking ownership across application development, database integration, deployment, system administration, and production configuration.",
    contributions: [
      "Built a full-stack platform using React, Node.js/Express, and MongoDB for symposium registration and event management.",
      "Engineered a multi-role registration workflow with slot-based scheduling, conflict detection, and team coordination.",
      "Implemented input validation and error handling for reliable registration workflows.",
      "Deployed the frontend on Vercel with a custom domain and the backend on Render, using MongoDB Atlas for persistence.",
      "Configured DNS, deployment environments, and CI/CD across independently deployed frontend and backend applications.",
      "Coordinated development with a peer developer across two repositories while managing production deployment and system administration.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MongoDB Atlas",
      "Vercel",
      "Render",
      "Git/GitHub",
    ],
    impact: [
      { label: "130+ registrations", icon: CheckCircle2 },
      { label: "Full-stack deployment", icon: Rocket },
      { label: "Custom domain", icon: Server },
      { label: "Independent FE/BE infra", icon: Database },
    ],
    accent: "neon-purple",
    badges: [{ label: "Live", tone: "live" }],
    github: "https://github.com/jeeva64/Aion",
    live: "https://aion2k26.vercel.app/",
    walkthrough: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
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

const roleIcon = (accent: Experience["accent"]) =>
  accent === "neon-cyan" ? Cpu : Server;

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
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
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building, shipping, and owning production systems across AI/ML and
              full-stack engineering
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-8 md:space-y-10">
            {experiences.map((exp, index) => {
              const Icon = roleIcon(exp.accent);
              const accentText =
                exp.accent === "neon-cyan"
                  ? "text-neon-cyan"
                  : "text-neon-purple";
              const accentBg =
                exp.accent === "neon-cyan"
                  ? "bg-neon-cyan/20 text-neon-cyan"
                  : "bg-neon-purple/20 text-neon-purple";
              const accentDot =
                exp.accent === "neon-cyan" ? "bg-neon-cyan" : "bg-neon-purple";
              const accentLine =
                exp.accent === "neon-cyan"
                  ? "from-neon-cyan"
                  : "from-neon-purple";

              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative"
                >
                  <Card className="glass-card p-6 md:p-8 ml-8 hover:border-neon-purple/50 transition-all duration-300">
                    {/* Timeline dot */}
                    <div
                      className={`absolute -left-4 top-6 w-4 h-4 ${accentDot} rounded-full border-4 border-background`}
                    />

                    {/* Timeline line */}
                    {index < experiences.length - 1 && (
                      <div
                        className={`absolute -left-2 top-10 w-0.5 h-[calc(100%-1rem)] bg-gradient-to-b ${accentLine} to-transparent`}
                      />
                    )}

                    {/* Header row */}
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl ${accentBg}`}>
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground">
                            {exp.organization}
                          </h3>
                          <p
                            className={`text-sm md:text-base font-medium ${accentText}`}
                          >
                            {exp.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {exp.badges.map((b, i) => (
                          <span
                            key={i}
                            className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full ${
                              b.tone === "live"
                                ? "bg-neon-green/15 text-neon-green"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                            {b.label}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Meta: date + location */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={14} />
                        {exp.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Subtitle (gradient, prominent) */}
                    <p className="text-base md:text-lg font-semibold gradient-text mb-3">
                      {exp.subtitle}
                    </p>

                    {/* Summary */}
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                      {exp.summary}
                    </p>

                    {/* Contributions */}
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-foreground mb-3 inline-flex items-center gap-2">
                        <Building2 size={14} className={accentText} />
                        Key contributions
                      </h4>
                      <ul className="space-y-2">
                        {exp.contributions.map((c, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                          >
                            <span
                              className={`mt-1.5 w-1 h-1 rounded-full ${accentDot} flex-shrink-0`}
                            />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-5">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.slice(0, 6).map((tech, i) => (
                          <span
                            key={i}
                            className={`px-2.5 py-1 text-xs rounded-md ${accentBg}`}
                          >
                            {tech}
                          </span>
                        ))}
                        {exp.technologies.length > 6 && (
                          <span className="px-2.5 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                            +{exp.technologies.length - 6}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Impact stats */}
                    {exp.impact && exp.impact.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                        {exp.impact.map((stat, i) => {
                          const StatIcon = stat.icon;
                          return (
                            <div
                              key={i}
                              className="flex items-center gap-2 p-2.5 rounded-lg bg-muted/40 border border-border/40"
                            >
                              <StatIcon size={16} className={accentText} />
                              <span className="text-xs md:text-sm font-medium text-foreground">
                                {stat.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      {exp.github && (
                        <a
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 min-w-[140px]"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </Button>
                        </a>
                      )}
                      {exp.live && (
                        <a
                          href={exp.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 min-w-[140px]"
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
                      {/* VDart walkthrough — TODO: replace null above with screen-recording URL.
                          Platform is live but auth-gated; do NOT add public-access claim. */}
                      {exp.walkthrough ? (
                        <a
                          href={exp.walkthrough}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 min-w-[140px]"
                        >
                          <Button variant="hero" size="sm" className="w-full">
                            <PlayCircle className="w-4 h-4 mr-2" />
                            Watch Walkthrough
                          </Button>
                        </a>
                      ) : (
                        exp.walkthroughNote && (
                          <Button
                            variant="hero"
                            size="sm"
                            disabled
                            className="flex-1 min-w-[140px]"
                            title={exp.walkthroughNote}
                          >
                            <PlayCircle className="w-4 h-4 mr-2" />
                            Watch Walkthrough
                          </Button>
                        )
                      )}
                    </div>

                    {/* Walkthrough note */}
                    {exp.walkthroughNote && (
                      <p className="text-xs text-muted-foreground mt-3 italic">
                        {exp.walkthroughNote}
                      </p>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
