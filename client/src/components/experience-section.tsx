import { Card, CardContent } from "@/components/ui/card";
import { EXPERIENCES } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-600">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">Experience</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My professional journey through various internships and practical experience in the field.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-600"></div>

            {EXPERIENCES.map((experience, index) => (
              <div
                key={experience.id}
                className={`animate-in slide-in-from-bottom-4 duration-600 mb-12 flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"} order-2 ${index % 2 === 0 ? "md:order-1" : "md:order-3"}`}>
                  <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className={`flex items-center mb-3 ${index % 2 === 0 ? "justify-start md:justify-end" : "justify-start"}`}>
                        <i className={`${experience.icon} text-blue-600 mr-2 text-lg`}></i>
                        <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{experience.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                        {experience.role} at {experience.company}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        {experience.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={`flex items-center justify-center w-16 h-16 ${experience.color} rounded-full border-4 border-white dark:border-slate-800 mx-auto md:mx-0 order-1 md:order-2 mb-4 md:mb-0 shadow-lg`}>
                  <i className={`${experience.icon} text-white text-lg`}></i>
                </div>
                
                <div className={`flex-1 order-3 ${index % 2 === 0 ? "hidden md:block" : "md:order-1 hidden md:block"}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
