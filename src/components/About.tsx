import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
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

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 lg:pl-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI Developer & ML Engineer building practical, production-oriented
              systems end-to-end
            </p>
          </motion.div>

          {/* About Content */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card p-8 md:p-10 h-full">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-neon-cyan">
                Hello! I'm Jeeva
              </h3>
              <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  I'm an <strong>AI Developer & ML Engineer</strong> focused on
                  building practical, production-oriented systems that turn data
                  and machine learning into real-world applications. I enjoy
                  working across the complete development lifecycle from
                  understanding a problem and preparing data to building ML
                  workflows, developing backend services and deploying
                  applications.
                </p>

                <p>
                  During my internship at <strong>VDart Academy</strong>, I
                  developed a production AutoML platform that automates the
                  machine learning workflow across data analysis, preprocessing,
                  model training, evaluation, and model comparison. I also have
                  hands-on experience building backend systems with{" "}
                  <strong>
                    Python, FastAPI, SQLAlchemy, PostgreSQL, and REST APIs
                  </strong>
                   alongside machine learning technologies such as{" "}
                  <strong>Scikit-learn, XGBoost, Pandas and NumPy</strong>.
                </p>

                <p>
                  Beyond AI/ML, I enjoy building and shipping complete software
                  systems. As a key contributor to <strong>AION 2K26</strong>, a
                  state-level technical symposium platform. I worked across
                  frontend, backend, database, deployment, and system
                  administration responsibilities, helping deliver a platform
                  that supported <strong>130+ registrations</strong>. I also
                  maintain a strong foundation in{" "}
                  <strong>Data Structures & Algorithms</strong> with{" "}
                  <strong>300+ LeetCode problems solved</strong>.
                </p>

                <p>
                  I'm focused on continuously expanding my capabilities in AI,
                  backend engineering, and modern software systems with the
                  goal of building reliable AI solutions and growing into a
                  strong <strong>end-to-end AI engineer</strong>.
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
