import { ArrowUp, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    },
    {
      title: "Your Memories",
      description: "Memory Journal Web App — A simple Flask-based web application where users can sign up, log in, and store personal memories. Data is stored in local JSON files with a clean interface using HTML and CSS. Ideal for beginners exploring full-stack Python development.",
      link: "https://github.com/Manipamarthi10/memory_web_app",
      technologies: ["Python", "Flask", "HTML/CSS", "JSON"]
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => window.open(project.link, '_blank')}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;