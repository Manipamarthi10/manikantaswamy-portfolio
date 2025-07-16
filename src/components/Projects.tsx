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
          {/* Project cards removed */}
        </div>
      </div>
    </section>
  );
};

export default Projects;