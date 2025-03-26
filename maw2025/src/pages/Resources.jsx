import { Link } from 'react-router-dom'

const Resources = () => {
  // Resource categories and links
  const resources = [
    {
      category: "Open Educational Resources",
      items: [
        {
          title: "Stanford Encyclopedia of Philosophy",
          url: "https://plato.stanford.edu/",
          description: "High-quality, comprehensive encyclopedia articles on philosophical topics written by experts."
        },
        {
          title: "Internet Encyclopedia of Philosophy",
          url: "https://iep.utm.edu/",
          description: "Peer-reviewed academic resource providing detailed, scholarly information on key topics in philosophy."
        },
        {
          title: "MIT OpenCourseWare - Philosophy",
          url: "https://ocw.mit.edu/courses/philosophy/",
          description: "Free lecture notes, videos, and readings from MIT philosophy courses."
        }
      ]
    },
    {
      category: "Interactive Learning Tools",
      items: [
        {
          title: "Philosophy Experiments",
          url: "https://www.philosophyexperiments.com/",
          description: "Interactive thought experiments and philosophical puzzles."
        },
        {
          title: "Wi-Phi: Wireless Philosophy",
          url: "https://phi.princeton.edu/",
          description: "Free, open access videos introducing philosophy concepts."
        }
      ]
    },
    {
      category: "AI and Education Resources",
      items: [
        {
          title: "UNESCO AI in Education",
          url: "https://www.unesco.org/en/artificial-intelligence/education",
          description: "Resources on the ethical application of AI in educational contexts."
        },
        {
          title: "Anthropic Claude API",
          url: "https://www.anthropic.com/claude",
          description: "Learn about the AI assistant used to create elements of this project."
        },
        {
          title: "AI for Teachers",
          url: "https://openai.com/education",
          description: "Resources for educators looking to incorporate AI tools into their teaching practice."
        }
      ]
    },
    {
      category: "Philosophy Teaching Resources",
      items: [
        {
          title: "Teaching Philosophy 101",
          url: "https://www.teachphilosophy101.org/",
          description: "Resources for teaching introductory philosophy courses."
        },
        {
          title: "APA Teaching Resources",
          url: "https://www.apaonline.org/page/teaching",
          description: "American Philosophical Association's teaching resources and guides."
        }
      ]
    }
  ];

  return (
    <div>
      <section className="py-8 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Educational Resources</h2>
            <p className="text-lg mb-6">Additional resources for teaching and learning philosophy</p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {resources.map((category, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-cyan-300 border-b border-slate-600 pb-2">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-slate-700 p-4 rounded-lg hover-scale">
                      <h4 className="text-lg font-medium mb-2 text-white">
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition"
                        >
                          {item.title}
                        </a>
                      </h4>
                      <p className="text-sm text-gray-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="bg-slate-700 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Using This Project</h3>
              <p className="mb-4">
                This project is open source and available for educational use. The code is available on GitHub, and you can 
                adapt it for your own educational projects.
              </p>
              <p className="mb-4">
                To use this project as a template for your own educational materials:
              </p>
              <ol className="list-decimal list-inside mb-4 pl-4">
                <li className="mb-2">Fork the repository on GitHub</li>
                <li className="mb-2">Modify the components to fit your subject area</li>
                <li className="mb-2">Deploy to GitHub Pages or your preferred hosting platform</li>
              </ol>
              <p>
                <a 
                  href="https://github.com/rogersmath/maw2025" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition"
                >
                  View the source code on GitHub →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources