import { useEffect, useState } from 'react'
import PhilosophyFrameworks from '../components/philosophies'

const Frameworks = () => {
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
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Philosophical Frameworks Database</h2>
            <p className="text-lg mb-6">Explore major philosophical traditions, their key figures, central concepts, and approaches to fundamental questions.</p>
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
            <PhilosophyFrameworks />
          )}
        </div>
      </section>

      <section className="py-8 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">Understanding Philosophical Frameworks</h3>
            <p className="mb-4">
              This interactive database allows you to explore philosophical frameworks across different traditions and time periods. 
              You can search by framework name, key figures, or concepts to find specific philosophical approaches that interest you.
            </p>
            <p className="mb-4">
              Each framework entry includes information about its tradition, historical period, key figures, central concepts, 
              epistemological and metaphysical perspectives, ethical approach, and political implications.
            </p>
            <p>
              Use the controls above the table to search for specific frameworks or toggle between compact and detailed views. 
              In compact view, you can click "Expand" to see more details about any particular framework.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Frameworks