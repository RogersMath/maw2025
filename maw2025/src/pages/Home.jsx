import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-cyan-400">Exploring Philosophical Frameworks</h2>
            <p className="text-xl mb-8">Interactive tools for understanding the philosophical foundations that shape our world and guide our decisions.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/frameworks" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg shadow-lg transition">
                Explore Frameworks
              </Link>
              <Link to="/about" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg shadow-lg transition">
                Learn About the Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-cyan-400 text-center">Interactive Philosophy Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-700 rounded-lg shadow-lg p-6 hover-scale">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">Philosophical Frameworks Database</h3>
              <p className="mb-4">Explore major philosophical traditions, their key figures, central concepts, and how they approach fundamental questions about knowledge, reality, ethics, and society.</p>
              <Link to="/frameworks" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                Explore Database <span className="ml-1">→</span>
              </Link>
            </div>
            
            <div className="bg-slate-700 rounded-lg shadow-lg p-6 hover-scale">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">Philosophy Comparison Matrix</h3>
              <p className="mb-4">Compare philosophical frameworks across different dimensions such as individual vs. collective focus, empirical vs. rational approaches, and more.</p>
              <Link to="/comparisons" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                Compare Frameworks <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">AI-Enhanced Open Educational Resources</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">This project demonstrates how AI can help educators create valuable materials more efficiently than traditional publishers.</p>
          <Link to="/about" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg shadow-lg inline-block transition">
            Learn More About the Project
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home