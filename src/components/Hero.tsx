import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "./ParticleBackground";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text"
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
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting innovative solutions with modern technologies. 
            Specializing in AI, Full-Stack Development, and creating digital experiences that matter.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="hero" size="lg" className="min-w-48">
              Download Resume
            </Button>
            <Button 
              variant="heroOutline" 
              size="lg" 
              className="min-w-48"
              onClick={scrollToContact}
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-neon-purple rounded-full flex justify-center">
                <div className="w-1 h-3 bg-neon-purple rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};