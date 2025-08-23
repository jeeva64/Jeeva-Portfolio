import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Code } from "lucide-react";

export const SocialDock = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/jeeva-loganathan",
      color: "hover:text-neon-purple"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/jeeva-loganathan",
      color: "hover:text-neon-cyan"
    },
    {
      name: "LeetCode",
      icon: <Code className="w-5 h-5" />,
      url: "https://leetcode.com/jeeva-loganathan",
      color: "hover:text-neon-green"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://twitter.com/jeeva_loganathan",
      color: "hover:text-neon-blue"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/jeeva.loganathan",
      color: "hover:text-neon-pink"
    }
  ];

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="glass-card p-3 rounded-2xl space-y-3">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block p-3 text-muted-foreground ${social.color} transition-all duration-300 rounded-xl hover:bg-background/20 group`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={social.name}
          >
            <div className="relative">
              {social.icon}
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="glass-card px-3 py-2 rounded-lg whitespace-nowrap text-sm font-medium">
                  {social.name}
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-r-4 border-r-card border-y-4 border-y-transparent"></div>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
        
        {/* Connecting line */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-neon-purple to-transparent"></div>
      </div>
    </motion.div>
  );
};