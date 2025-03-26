import { useEffect, useState } from 'react'
import PhilosophyComparisonMatrix from '../components/philosophyComparisons'

const Comparisons = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the component
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <section className="py-8 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Philosophical Frameworks Comparison</h2>
            <p className="text-lg mb-6">Compare philosophical frameworks across different dimensions to understand their similarities and differences.</p>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-800 min-h-screen">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-32 w-32 bg-slate-700 rounded-full mb-4"></div>
                <div className="h-4 w-48 bg-slate-700 rounded mb-3"></div>
                <div className="h-3 w-32 bg-slate-700 rounded"></div>
              </div>
            </div>
          ) : (
            <PhilosophyComparisonMatrix />
          )}
        </div>
      </section>

      <section className="py-8 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">Understanding the Comparison Matrix</h3>
            <p className="mb-4">
              This interactive tool allows you to compare philosophical frameworks across various dimensions, 
              such as their focus on individual versus collective concerns, empirical versus rational approaches to knowledge, 
              and more.
            </p>
            <p className="mb-4">
              Each dimension places philosophical frameworks on a spectrum, helping you visualize where different 
              approaches stand in relation to each other. This can reveal unexpected connections between seemingly 
              different philosophical traditions.
            </p>
            <p>
              Click on any framework card to see its relationships with other frameworks and its positions 
              across all dimensions. You can also use the search feature to focus on specific frameworks of interest.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Comparisons