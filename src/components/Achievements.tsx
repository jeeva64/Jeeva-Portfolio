import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Award, Code, Calendar, ArrowRight, Flame, Target, Zap } from "lucide-react";

export const Achievements = () => {
  const leetcodeBadges = [
    {
      name: "200 Days Badge",
      year: "2025",
      icon: Flame,
      description: "Maintained 200+ days of consistent problem-solving practice"
    },
    {
      name: "100 Days Badge",
      year: "2025",
      icon: Target,
      description: "Achieved 100 days streak of daily coding practice"
    },
    {
      name: "50 Days Badge",
      year: "2025",
      icon: Zap,
      description: "Started the journey with 50 days of dedication"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "LeetCode 250+ Problems Solved",
      category: "Coding",
      date: "2025",
      description: "Solved 250+ problems on LeetCode including 126 Easy, 111 Medium, and 14 Hard problems. Earned the 200 Days consistency badge through long-term DSA practice and actively participated in weekly contests.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop&crop=center",
      color: "neon-green"
    },
    {
      id: 2,
      title: "Outstanding Performer - Batch Endowment Cash Prize",
      category: "Academic",
      date: "College Day 2025",
      description: "Awarded Outstanding Performer with Batch Endowment Cash Prize for achieving top academic distinction across 5 semesters of B.Sc Computer Science.",
      icon: Trophy,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop&crop=center",
      color: "neon-cyan"
    },
    {
      id: 3,
      title: "Mr.VARIT 2K25 National Champion",
      category: "Competition",
      date: "2025",
      description: "Crowned Mr.VARIT 2K25 National Champion by winning 1st place in Error Exhibit debugging competition among participants from 15+ colleges.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=top",
      color: "neon-purple"
    },
    {
      id: 4,
      title: "7x Intercollegiate Symposium Winner",
      category: "Competition",
      date: "2023-2025",
      description: "Achieved victories in 7 technical events at intercollegiate symposiums, demonstrating strong proficiency in code debugging, data structures and algorithms, and paper presentation.",
      icon: Trophy,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop&crop=center",
      color: "neon-blue"
    },
    {
      id: 5,
      title: "WebSprint'25 Regional Hackathon Coordinator",
      category: "Leadership",
      date: "2025",
      description: "Coordinated WebSprint'25 regional hackathon with participants from 10+ colleges, managing event logistics and technical challenges.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop&crop=center",
      color: "neon-green"
    },
    {
      id: 6,
      title: "TechRise'24 Technical Symposium Organizer",
      category: "Leadership",
      date: "2024",
      description: "Managed TechRise'24 technical symposium as core organizer, overseeing event planning, speaker coordination, and participant experience.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop&crop=center",
      color: "neon-pink"
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
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
              Achievements & Recognition
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Celebrating milestones and recognitions earned through dedication and hard work
            </p>
          </motion.div>

          {/* LeetCode Badges Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-neon-green">
              LeetCode Badges
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leetcodeBadges.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="glass-card p-6 text-center h-full border-neon-green/20 hover:border-neon-green/50 transition-all duration-300">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-green/20 flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-neon-green" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{badge.name}</h4>
                      <span className="text-sm text-neon-green font-medium">{badge.year}</span>
                      <p className="text-sm text-muted-foreground mt-3">{badge.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
            <div className="text-center mt-6">
              <a 
                href="https://leetcode.com/u/jeevaloganathan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neon-green hover:underline font-medium"
              >
                <Code className="w-4 h-4" />
                View LeetCode Profile
              </a>
            </div>
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
                  className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? 'md:direction-rtl' : ''}`}
                >
                  {/* Achievement Image */}
                  <motion.div 
                    className={`${!isEven ? 'md:order-2' : ''}`}
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
                          <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full bg-${achievement.color}/20 text-${achievement.color}`}>
                            {achievement.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Achievement Content */}
                  <motion.div 
                    className={`${!isEven ? 'md:order-1' : ''}`}
                    variants={itemVariants}
                  >
                    <Card className="glass-card p-8 h-full">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-${achievement.color}/20 text-${achievement.color}`}>
                          <IconComponent size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar size={16} className="text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {achievement.date}
                            </span>
                          </div>
                          
                          <h3 className="text-2xl font-bold mb-2 text-foreground">
                            {achievement.title}
                          </h3>
                          
                          <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 bg-${achievement.color}/20 text-${achievement.color}`}>
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

          {/* View More Button */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <Button 
              variant="hero" 
              size="lg"
              className="group"
              onClick={() => {
                // You can add functionality here to show more achievements
                // For now, it will scroll to certifications section
                document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View More Achievements
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};