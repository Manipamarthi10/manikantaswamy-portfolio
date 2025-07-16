
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              My Story
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm a B.Tech student at Gudlavalleru Engineering College with a strong interest in web development. I enjoy building
              interactive applications and continuously improving my coding skills. I'm proficient in Java Core and Python, with a
              foundational understanding of C.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I'm passionate about turning ideas into functional digital solutions and always eager to learn new technologies
              that can help me build better applications.
            </p>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Education & Experience
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900">Education</h4>
                  <p className="text-gray-600">B.Tech in Information Technology</p>
                  <p className="text-gray-500 text-sm">Gudlavalleru Engineering College</p>
                  <p className="text-gray-500 text-sm">Expected Graduation: 2026</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Internships</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-800">Full Stack Development Intern</p>
                        <p className="text-gray-600 text-sm">Cognifyz Technologies (3 months)</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-800">Artificial Intelligence Intern</p>
                        <p className="text-gray-600 text-sm">6-month virtual internship</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-800">Data Analytics Intern</p>
                        <p className="text-gray-600 text-sm">3-month Tableau internship</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
