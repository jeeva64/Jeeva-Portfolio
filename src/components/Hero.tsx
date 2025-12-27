import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "./ParticleBackground";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";
import { Download, Eye } from "lucide-react";
import profileImage from "@/assets/profile.png";

const AnimatedSphere = () => {
  const meshRef = useRef<Mesh>(null);

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8B5CF6"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
        metalness={0.8}
      />
    </Sphere>
  );
};

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewResume = () => {
    // Add your resume URL here
    window.open('/resume.pdf', '_blank');
  };

  const handleDownloadResume = () => {
    // Add your resume download URL here
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jeeva_Loganathan_Resume.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      <ParticleBackground />
      
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] lg:pl-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-xl text-neon-cyan mb-4 font-mono"
            >
              Hi, I'm
            </motion.p>

            {/* Name with gradient */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
            >
              Jeeva Loganathan
            </motion.h1>

            {/* Typing Effect Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-mono overflow-hidden"
            >
              <span className="inline-block animate-typing border-r-2 border-neon-purple">
                Software Developer & AI Enthusiast 👋
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed"
            >
              Passionate Full-Stack Developer with expertise in Data Structures & Algorithms. 
              Specializing in creating innovative solutions and building scalable applications 
              that make a real impact in the digital world.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                variant="hero" 
                size="lg" 
                className="min-w-48 group"
                onClick={handleViewResume}
              >
                <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                View Resume
              </Button>
              <Button 
                variant="heroOutline" 
                size="lg" 
                className="min-w-48 group"
                onClick={handleDownloadResume}
              >
                <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="min-w-48"
                onClick={scrollToContact}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Professional Photo */}
              <motion.div
                initial={{ scale: 0.8, rotateY: -15 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative"
              >
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-neon-purple/30 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Jeeva Loganathan"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                {/* Glowing effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 animate-pulse"></div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 bg-neon-purple/20 text-neon-purple px-3 py-1 rounded-lg text-sm font-mono backdrop-blur-sm"
                >
                  {"{ }"}
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 bg-neon-cyan/20 text-neon-cyan px-3 py-1 rounded-lg text-sm font-mono backdrop-blur-sm"
                >
                  &lt;/&gt;
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-neon-purple rounded-full flex justify-center">
              <div className="w-1 h-3 bg-neon-purple rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};