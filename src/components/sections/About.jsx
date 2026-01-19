export const About = () => {
    const frontendSkills = [
        "React",
        "Flutter",
        "Svelte",
        "TailwindCSS"
    ];

    const backendSkills = [
        "Node.js",
        "Python",
        "AWS",
        "PostgreSQL"
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              About Me
            </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            I'm a master's student in Information and Communication Technology, majoring in Software Development with a minor in Data Analytics. 
            Passionate about cloud technologies, currently working on AWS certifications. 
            Natural problem-solver with strong language skills, enthusiastic about new opportunities related to learning new technologies and challenges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Bachelor and Master of Science in Information and Communication Technology </strong> - University of Turku
                  (2019-)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> ☁️ Certificates </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    AWS Cloud Practitioner
                  </h4>
                  <h4 className="font-semibold">
                    AWS Data Engineer (ongoing)
                  </h4>
                  <h4 className="font-semibold">
                    Google Cloud Fundamentals: Core Infrastructure
                  </h4>
                  <h4 className="font-semibold">
                  Google Cloud IAM and Networking for AWS Professionals
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
    );
}