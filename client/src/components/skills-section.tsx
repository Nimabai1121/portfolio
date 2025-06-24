import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SKILLS } from "@/lib/constants";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">Skills</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, index) => (
              <Card
                key={skill.id}
                className="animate-scale-in bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center`}>
                    <i className={`${skill.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">{skill.name}</h3>
                  <div className="w-full">
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-slate-200 dark:bg-slate-700"
                    />
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block">
                      {skill.level}%
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
