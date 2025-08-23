import { motion } from "framer-motion";
import { Heart, Code } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              Jeeva Loganathan
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Software Developer passionate about creating innovative solutions 
              and building the future with code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-neon-purple transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-neon-cyan transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-neon-pink transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-neon-green transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-border/30">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                © {currentYear} Jeeva Loganathan. Made with
                <Heart className="w-4 h-4 text-neon-pink" />
                and
                <Code className="w-4 h-4 text-neon-cyan" />
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-purple transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            ↑ Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};