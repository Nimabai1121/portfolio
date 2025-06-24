import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", bgColor: "bg-gray-800 hover:bg-gray-900" },
    { icon: Linkedin, href: "https://linkedin.com", bgColor: "bg-blue-600 hover:bg-blue-700" },
    { icon: Mail, href: "mailto:your.email@example.com", bgColor: "bg-slate-600 hover:bg-slate-700" },
    { icon: Twitter, href: "https://twitter.com", bgColor: "bg-purple-600 hover:bg-purple-700" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center animate-fade-in-up">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-6 animate-bounce-gentle shadow-2xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-2xl font-bold">YN</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Your Full Name
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-medium mb-6">
            Aspiring Software Engineer
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate about creating innovative solutions through technology, with a strong foundation in computer science and hands-on experience in software development.
          </p>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 ${social.bgColor} text-white rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
