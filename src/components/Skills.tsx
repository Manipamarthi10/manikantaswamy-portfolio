
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "SQL", "C", "DSA using Java"]
    },
    {
      title: "Tools & Frameworks",
      skills: ["Python libraries", "HTML/CSS/JS", "Flask", "Streamlit"]
    },
    {
      title: "Soft Skills",
      skills: ["Quick learner", "Confident", "Responsible", "Problem solving"]
    }
  ];

  return (
    <section id="skills" className="py-20 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                    <span className="text-gray-700 group-hover:text-primary transition-colors duration-200">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
