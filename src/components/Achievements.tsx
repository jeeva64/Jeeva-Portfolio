import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Award, Code, Calendar, ArrowRight } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Outstanding Performer in college",
      category: "Academic",
      date: "January 2024",
      description: "Led a team of 4 developers to victory in the 48-hour debugging marathon, solving complex algorithmic challenges.",
      icon: Trophy,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop&crop=center",
      color: "neon-cyan"
    },
    {
      id: 2,
      title: "Bug Hunt Champion",
      category: "Competition",
      date: "March 2024",
      description: "First place winner in the annual Bug Hunt competition, successfully identifying and fixing 15 critical bugs in under 2 hours.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=top",
      color: "neon-purple"
    },
    {
      id: 3,
      title: "TechRise Event Organizer",
      category: "Leadership",
      date: "November 2023",
      description: "Successfully organized and managed TechRise 2023, a tech symposium with 50+ participants and 20+ speakers.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop&crop=center",
      color: "neon-pink"
    },
    {
      id: 4,
      title: "WebSprint Hackathon Event Organizer",
      category: "Leadership",
      date: "September 2023",
      description: "Successfully organized and managed WebSprint Hackathon, a Hackathon with 100+ participants from 10+ colleges.", 
      icon: Award,
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop&crop=center",
      color: "neon-green"
    },
    {
      id: 5,
      title: "College Symposium Winner",
      category: "Academic",
      date: "April 2023",
      description: "Best project award for developing an innovative AI-powered solution for student management systems.",
      icon: Trophy,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop&crop=center",
      color: "neon-blue"
    },
    /*{
      id: 6,
      title: "Open Source Contributor",
      category: "Development",
      date: "Ongoing",
      description: "Active contributor to multiple open-source projects with 50+ merged pull requests and 1000+ GitHub stars.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop&crop=center",
      color: "neon-cyan"
    }*/
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