import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Users,
  Award,
  Code,
  Calendar,
  ArrowRight,
  Flame,
  Target,
  Zap,
} from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Outstanding Performer - Batch Endowment Cash Prize",
      category: "Academic",
      date: "College Day 2025",
      description:
        "Awarded Outstanding Performer with the Batch Endowment Cash Prize for achieving top academic distinction across five semesters of B.Sc. Computer Science.",
      icon: Trophy,
      image: "Images/Achievements/outstanding.jpeg",
      color: "neon-cyan",
    },
    {
      id: 2,
      title: "300+ LeetCode Problems Solved",
      category: "Coding",
      date: "2026",
      description:
        "Solved 300+ problems on LeetCode across a wide range of Data Structures and Algorithms patterns, achieved a 1370+ contest rating, and maintained a 365-day consistency streak through long-term problem-solving practice.",
      icon: Code,
      image: "Images/Achievements/leetcode.png",
      color: "neon-green",
    },
    {
      id: 3,
      title: "12x Intercollegiate Technical Event Winner",
      category: "Competition",
      date: "2022 - 2026",
      description:
        "Achieved victories in 12 technical events at intercollegiate symposiums, demonstrating skills in code debugging, Data Structures and Algorithms, technical problem-solving, and paper presentation.",
      icon: Trophy,
      image: "Images/Achievements/symposium.jpeg",
      color: "neon-purple",
    },
    {
      id: 4,
      title: "Mr. VARIT 2K25 National Champion",
      category: "Competition",
      date: "2025",
      description:
        "Crowned Mr. VARIT 2K25 National Champion after securing first place in the Error Exhibit debugging competition among participants from multiple colleges.",
      icon: Award,
      image: "Images/Achievements/varit1.jpeg",
      color: "neon-blue",
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="achievements" className="py-20 relative">
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
              Achievements & Awards
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Celebrating milestones and recognitions earned through dedication
              and hard work
            </p>
          </motion.div>

          {/* Achievement Timeline */}
          <div className="grid gap-8 md:gap-12">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={achievement.id}
                  variants={itemVariants}
                  className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? "md:direction-rtl" : ""}`}
                >
                  {/* Achievement Image */}
                  <motion.div
                    className={`${!isEven ? "md:order-2" : ""}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative group overflow-hidden rounded-2xl">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <span
                            className={`inline-block px-3 py-1 text-sm font-medium rounded-full bg-${achievement.color}/20 text-${achievement.color}`}
                          >
                            {achievement.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Achievement Content */}
                  <motion.div
                    className={`${!isEven ? "md:order-1" : ""}`}
                    variants={itemVariants}
                  >
                    <Card className="glass-card p-8 h-full">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-xl bg-${achievement.color}/20 text-${achievement.color}`}
                        >
                          <IconComponent size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar
                              size={16}
                              className="text-muted-foreground"
                            />
                            <span className="text-sm text-muted-foreground">
                              {achievement.date}
                            </span>
                          </div>

                          <h3 className="text-2xl font-bold mb-2 text-foreground">
                            {achievement.title}
                          </h3>

                          <span
                            className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 bg-${achievement.color}/20 text-${achievement.color}`}
                          >
                            {achievement.category}
                          </span>

                          <p className="text-muted-foreground leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
