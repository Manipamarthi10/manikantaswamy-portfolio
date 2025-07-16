
import { ArrowUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Your Notes",
      description: "A notes-taking web app using Python, Flask, and web frameworks. Offers a clean UI to create, store, and manage notes.",
      link: "https://yours-note.onrender.com",
      technologies: ["Python", "Flask", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Health Chatbot",
      description: "An interactive chatbot built with Python and Streamlit to predict possible health issues based on user-entered symptoms.",
      technologies: ["Python", "Streamlit", "Machine Learning", "Healthcare"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-blue-700 font-medium transition-colors duration-200 group-hover:translate-x-1"
                >
                  <span>View Project</span>
                  <ArrowUp className="w-4 h-4 rotate-45" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
