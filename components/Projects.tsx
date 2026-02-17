const projects = [
  {
    title: "Apotheek.me",
    desc: "Website designed and built with Tailwind CSS and Next.js for a Dutch Pharmacuetical Company.",
  },
  {
    title: "Stress Traders",
    desc: "Designed a working Trading web app using next.js, tailwind css and react-query. It was a university project that I did for a client. Used the stress detector API to detect the stress level of the user and then used that information to make trading decisions.",
  },
  {
    title: "Audio Spectrum Analyzer",
    desc: "Designed full functional audio spectrum analyzer using React and Web Audio API. It was a project in which I had to show the the spectrum of selected audio file. I used the Web Audio API to analyze the audio file and then used React to display the spectrum.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <h3 className="text-3xl font-bold text-center mb-12">
        Projects
      </h3>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="border border-gray-400 rounded-2xl p-6 hover:border-blue-500 transition"
          >
            <h4 className="text-xl font-semibold mb-2">
              {project.title}
            </h4>
            <p className="text-gray-400">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
