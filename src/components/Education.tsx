import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calendar, GraduationCap, Award } from "lucide-react";

interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  description: string;
  current: boolean;
}

const education: EducationEntry[] = [
  {
    degree: "M.Sc. Artificial Intelligence",
    institution: "St. Joseph's College (Autonomous), Tiruchirappalli",
    period: "2025 – 2027",
    grade: "CGPA: 8.89/10",
    description:
      "Pursuing advanced studies in Artificial Intelligence with a focus on machine learning, intelligent systems, and practical AI development.",
    current: true,
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "St. Joseph's College (Autonomous), Tiruchirappalli",
    period: "2022 – 2025",
    grade: "CGPA: 8.38/10",
    description:
      "Built a strong foundation in computer science, programming, algorithms, databases, and software development.",
    current: false,
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

export const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6 lg:pl-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic foundation in Artificial Intelligence and Computer Science
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-6 md:space-y-8">
            {education.map((edu, index) => {
              const accentText = edu.current ? "text-neon-cyan" : "text-neon-purple";
              const accentBg = edu.current
                ? "bg-neon-cyan/20 text-neon-cyan"
                : "bg-neon-purple/20 text-neon-purple";
              const accentDot = edu.current ? "bg-neon-cyan" : "bg-neon-purple";
              const accentLine = edu.current ? "from-neon-cyan" : "from-neon-purple";
              const cardRing = edu.current
                ? "hover:border-neon-cyan/50"
                : "hover:border-neon-purple/50";

              return (
                <motion.div key={index} variants={itemVariants} className="relative">
                  <Card className={`glass-card p-6 md:p-8 ml-8 ${cardRing} transition-all duration-300`}>
                    {/* Timeline dot */}
                    <div
                      className={`absolute -left-4 top-6 w-4 h-4 ${accentDot} rounded-full border-4 border-background`}
                    />
                    {/* Timeline line */}
                    {index < education.length - 1 && (
                      <div
                        className={`absolute -left-2 top-10 w-0.5 h-[calc(100%-1rem)] bg-gradient-to-b ${accentLine} to-transparent`}
                      />
                    )}

                    {/* Header: icon + status badge */}
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl ${accentBg}`}>
                          <GraduationCap size={22} />
                        </div>
                        {edu.current && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-neon-green/15 text-neon-green">
                            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                            Current
                          </span>
                        )}
                        {!edu.current && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                            Completed
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Degree (most prominent) */}
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <p className={`text-base font-medium ${accentText} mb-3`}>
                      {edu.institution}
                    </p>

                    {/* Duration + CGPA badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-full bg-muted/60 text-muted-foreground">
                        <Calendar size={14} />
                        {edu.period}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full ${accentBg}`}
                      >
                        <Award size={14} />
                        {edu.grade}
                        {edu.current && (
                          <span className="text-xs opacity-80">(Current)</span>
                        )}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
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
