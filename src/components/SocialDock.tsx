import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Code } from "lucide-react";

export const SocialDock = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/jeeva64",
      color: "hover:text-neon-purple"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/jeeva-l",
      color: "hover:text-neon-cyan"
    },
    {
      name: "LeetCode",
      icon: <Code className="w-5 h-5" />,
      url: "https://leetcode.com/u/jeevaloganathan/",
      color: "hover:text-neon-green"
    },
    {
      name: "X",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://x.com/JEEVALOGU6",
      color: "hover:text-neon-blue"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/jeeva_loganathan5106",
      color: "hover:text-neon-pink"
    }
  ];

  return (
    <>
      {/* Desktop Social Dock - positioned to avoid overlapping content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed left-2 top-1/2 transform -translate-y-1/2 z-20 hidden xl:block"
      >
        <div className="glass-card p-2 rounded-2xl space-y-2 shadow-lg backdrop-blur-md bg-background/30">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-2.5 text-muted-foreground ${social.color} transition-all duration-300 rounded-xl hover:bg-background/40 group`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={social.name}
            >
              <div className="relative">
                {social.icon}
                
                {/* Tooltip */}
                <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                  <div className="glass-card px-3 py-2 rounded-lg whitespace-nowrap text-sm font-medium shadow-lg">
                    {social.name}
                    <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-r-4 border-r-card border-y-4 border-y-transparent"></div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Mobile Social Dock */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30 lg:hidden"
        style={{ 
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          pointerEvents: 'auto'
        }}
      >
        <div className="glass-card p-2 rounded-2xl shadow-lg">
          <div className="flex space-x-1">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-2 text-muted-foreground ${social.color} transition-all duration-300 rounded-xl hover:bg-background/20`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};