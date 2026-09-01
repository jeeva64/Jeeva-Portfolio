import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "./ParticleBackground";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Download, Eye } from "lucide-react";
import profileImage from "@/assets/profile.webp";
import profileImage480 from "@/assets/profile-480.webp";
import { Typewriter } from "./Typewriter";

const SphereScene = lazy(() => import("./SphereScene"));

const useInView = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
};

export const Hero = () => {
  const viewport = useInView<HTMLDivElement>();
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // React 18 has no JSX prop for this — set the LCP hint imperatively
    if (imgRef.current) imgRef.current.fetchPriority = "high";
  }, []);
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewResume = () => {
    // Add your resume URL here
    window.open("/resume.pdf", "_blank");
  };

  const handleDownloadResume = () => {
    // Add your resume download URL here
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Jeeva L_Resume.pdf";
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden overflow-x-hidden pt-20 bg-background">
      <ParticleBackground />

      {/* 3D Background — lazy-loaded, paused offscreen */}
      <div className="absolute inset-0 -z-10" ref={viewport.ref}>
        <Suspense fallback={null}>
          <SphereScene paused={!viewport.inView} />
        </Suspense>
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
              className="text-base sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-mono overflow-hidden w-full"
            >
              <Typewriter />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed"
            >
              Building intelligent systems with Python, machine learning,
              backend engineering and strong problem solving foundations.
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
                Download Resume
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
                    ref={imgRef}
                    src={profileImage}
                    srcSet={`${profileImage480} 480w, ${profileImage} 800w`}
                    sizes="(max-width: 767px) 80vw, 384px"
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
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 bg-neon-purple/20 text-[hsl(270,91%,32%)] dark:text-neon-purple px-3 py-1 rounded-lg text-sm font-mono backdrop-blur-sm"
                  aria-hidden="true"
                >
                  {"{ }"}
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-4 -left-4 bg-neon-cyan/20 text-[hsl(189,94%,26%)] dark:text-neon-cyan px-3 py-1 rounded-lg text-sm font-mono backdrop-blur-sm"
                  aria-hidden="true"
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
