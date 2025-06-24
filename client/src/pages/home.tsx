import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-slate-800 dark:bg-slate-950 text-slate-300 py-12 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-lg mb-4">
              © 2024 <span className="font-semibold">Your Name</span>. All rights reserved.
            </p>
            <p className="text-slate-400">
              Built with ❤️ using React, Express, and modern web technologies
            </p>
            <div className="mt-6 flex justify-center space-x-6">
              {["home", "about", "experience", "projects", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    const element = document.getElementById(section);
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.offsetTop - offset;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-slate-400 hover:text-white transition-colors capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
