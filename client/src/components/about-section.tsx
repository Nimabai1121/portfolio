import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, School, Medal } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  
  return (
    <section ref={ref} id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 animate-on-scroll ${isIntersecting ? 'animate-in-view' : ''}`}>
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">👤About Me</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Get to know more about my background, education, and what drives my passion for technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`animate-slide-left ${isIntersecting ? 'animate-in-view' : ''}`} style={{ transitionDelay: isIntersecting ? '0.2s' : '0s' }}>
            <img 
              src="src\assets\profile.png" 
              alt="Professional headshot" 
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto object-cover"
            />
          </div>

          <div className={`animate-slide-right space-y-8 ${isIntersecting ? 'animate-in-view' : ''}`} style={{ transitionDelay: isIntersecting ? '0.4s' : '0s' }}>
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Field of Study</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 flex items-center">
                <GraduationCap className="text-blue-600 mr-2 w-5 h-5" />
               Instrumentation and Control Engineering
                <span className="text-slate-400 dark:text-slate-500"> (2018 - 2022)</span>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Education</h3>
              <div className="space-y-4">
                <Card className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <School className="text-blue-600 mr-3 w-5 h-5" />
                      <h4 className="font-semibold text-slate-800 dark:text-slate-100">Tendruk Central School</h4>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">Foundation Education</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="text-blue-600 mr-3 w-5 h-5" />
                      <h4 className="font-semibold text-slate-800 dark:text-slate-100">College of Science and Technology, Bhutan</h4>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">Higher Education in Automation and Control Engineering</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Personal Achievements</h3>
              <Card className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-700 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Medal className="text-amber-600 mr-3 w-8 h-8" />
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-100">Taekwondo First Dan Black Belt</h4>
                      <p className="text-slate-600 dark:text-slate-300">Demonstrating discipline, perseverance, and dedication</p>
                      <p className="text-slate-600 dark:text-slate-300">
                        Represented the district team showcasing teamwork, leadership, and sportsmanship
                      </p>
            
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
