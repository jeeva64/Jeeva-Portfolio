import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  User,
  MessageSquare,
  Copy,
  Check,
  Clock,
  Calendar,
  Star,
  Award,
  AlertCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});
  const [touched, setTouched] = useState<{
    name?: boolean;
    email?: boolean;
    subject?: boolean;
    message?: boolean;
  }>({});
  const { toast } = useToast();

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name": {
        if (!value.trim()) return "Please enter your name.";
        if (value.trim().length < 2)
          return "Please enter your name (at least 2 characters).";
        return "";
      }
      case "email": {
        if (!value.trim()) return "Please enter your email address.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
          return "Please enter a valid email address.";
        return "";
      }
      case "subject":
        if (!value.trim()) return "Please enter a subject.";
        if (value.trim().length < 3)
          return "Subject must be at least 3 characters.";
        return "";
      case "message":
        if (!value.trim()) return "Please enter a message.";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters.";
        return "";
      default:
        return "";
    }
  };

  const validateAll = () => {
    const next: typeof errors = {};
    (Object.keys(formData) as (keyof typeof formData)[]).forEach((k) => {
      const msg = validateField(k, formData[k]);
      if (msg) next[k] = msg;
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const msg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: msg || undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateAll();
    setTouched({ name: true, email: true, subject: true, message: true });
    if (!isValid) {
      toast({
        title: "Please fix the highlighted fields",
        description: "Some information is missing or invalid.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/jeevalogu64@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _subject: `New Contact Form Submission: ${formData.subject}`,
            _captcha: "false",
            _honey: "",
          }),
        },
      );

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description:
            "Thank you for your message. I'll get back to you within 24 hours!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Message Failed",
        description:
          "Failed to send message. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field as the user edits
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCopyLink = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedLink(label);
      toast({
        title: "Link Copied!",
        description: `${label} link has been copied to clipboard.`,
      });
      setTimeout(() => setCopiedLink(null), 2000);
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy link to clipboard.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "jeevalogu64@gmail.com",
      link: "mailto:jeevalogu64@gmail.com",
      copyText: "jeevalogu64@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+91 9976578892",
      link: "tel:+919976578892",
      copyText: "+91 9976578892",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Tiruchirappalli, Tamil Nadu, India",
      link: "https://maps.google.com/?q=Tiruchirappalli,Tamil+Nadu,India",
      copyText: "Tiruchirappalli, Tamil Nadu, India",
    },
  ];

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
    <section
      id="contact"
      className="py-20 pb-40 lg:pb-20 relative overflow-x-hidden"
    >
      <div className="container mx-auto px-6 lg:px-16 xl:pl-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Contact
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Looking for a dedicated developer? Let's discuss how I can
              contribute to your team!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 lg:space-y-8"
            >
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-neon-cyan">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  I'm always open to discussing new opportunities, innovative
                  projects, or just having a conversation about technology.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ x: 0 }}
                    className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-4 glass-card rounded-lg hover:border-neon-purple/50 hover:translate-x-1 transition-all duration-300 group min-w-0"
                  >
                    <div className="p-2 sm:p-3 bg-neon-purple/10 text-neon-purple rounded-lg group-hover:bg-neon-purple/20 transition-colors flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {info.title}
                      </p>
                      <p className="font-medium text-foreground text-sm sm:text-base truncate">
                        {info.value}
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleCopyLink(info.copyText, info.title);
                      }}
                      className="p-2 text-muted-foreground hover:text-neon-purple transition-colors flex-shrink-0"
                      title={`Copy ${info.title}`}
                    >
                      {copiedLink === info.title ? (
                        <Check className="w-4 h-4 text-neon-green" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </motion.a>
                ))}
              </div>

              {/* What I'm Looking For */}
              <div className="space-y-3">
                <h4 className="text-base sm:text-lg font-semibold text-foreground text-center lg:text-left">
                  What I'm Looking For
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  <div className="p-3 sm:p-4 glass-card rounded-lg">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-foreground text-sm sm:text-base mb-1">
                          Internship / Full-Time
                        </h5>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Software Developer, Full-Stack, or AI/ML roles
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 glass-card rounded-lg">
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-neon-purple flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-foreground text-sm sm:text-base mb-1">
                          Collaborations
                        </h5>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Open source, hackathons, innovative projects
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="glass-card p-5 sm:p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-neon-purple">
                    Send Me a Message
                  </h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as
                    possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Honeypot — hidden spam trap */}
                  <input
                    type="text"
                    name="_honey"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />

                  {/* Personal Information Section */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <User className="w-5 h-5 text-neon-cyan" />
                      Personal Information
                    </h4>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-foreground font-medium"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          aria-invalid={!!(touched.name && errors.name)}
                          aria-describedby="name-error"
                          className="h-11 bg-background/50 border-border focus:border-neon-purple transition-colors"
                          placeholder="Enter your full name"
                        />
                        {touched.name && errors.name && (
                          <p
                            id="name-error"
                            className="text-xs text-neon-pink mt-1.5 inline-flex items-center gap-1"
                          >
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-foreground font-medium"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          aria-invalid={!!(touched.email && errors.email)}
                          aria-describedby="email-error"
                          className="h-11 bg-background/50 border-border focus:border-neon-purple transition-colors"
                          placeholder="your.email@example.com"
                        />
                        {touched.email && errors.email && (
                          <p
                            id="email-error"
                            className="text-xs text-neon-pink mt-1.5 inline-flex items-center gap-1"
                          >
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Message Section */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-neon-pink" />
                      Message Details
                    </h4>

                    <div className="space-y-2">
                      <Label
                        htmlFor="subject"
                        className="text-foreground font-medium"
                      >
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        aria-invalid={!!(touched.subject && errors.subject)}
                        aria-describedby="subject-error"
                        className="h-11 bg-background/50 border-border focus:border-neon-purple transition-colors"
                        placeholder="What's this about?"
                      />
                      {touched.subject && errors.subject && (
                        <p
                          id="subject-error"
                          className="text-xs text-neon-pink mt-1.5 inline-flex items-center gap-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-foreground font-medium"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        rows={5}
                        aria-invalid={!!(touched.message && errors.message)}
                        aria-describedby="message-error"
                        className="bg-background/50 border-border focus:border-neon-purple transition-colors resize-none"
                        placeholder="Tell me about your project, opportunity, or just say hello! I'd love to hear from you."
                      />
                      {touched.message && errors.message && (
                        <p
                          id="message-error"
                          className="text-xs text-neon-pink mt-1.5 inline-flex items-center gap-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full group mb-2"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
