import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400 text-center">About the Project</h2>
            
            <div className="bg-slate-700 rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">The Power of AI in Education</h3>
              <p className="mb-4">This project demonstrates how Artificial Intelligence can help educators produce and share valuable educational materials more quickly and easily than is possible through traditional publishers. By leveraging AI tools like Claude, we can create interactive, engaging, and informative resources that make complex philosophical concepts more accessible.</p>
              <p className="mb-4">Everything we do - or fail to do - has philosophical implications. Even for mathematicians, scientists, and other specialists, understanding moral and ethical frameworks should be central for guiding educated individuals towards building the kind of world we want, and doing so in a deliberate way.</p>
              <p>The interactive components in this project were developed with the assistance of AI, showcasing how these tools can enhance educational content creation without replacing the educator's crucial role in guiding learning.</p>
            </div>
            
            <div className="bg-slate-700 rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Math Awareness Week 2025</h3>
              <p className="mb-4">This project was created for Math Awareness Week 2025, highlighting the intersection of mathematics, philosophy, and technology. While mathematics provides the language and tools for understanding our world, philosophy helps us determine how we should use those tools and what we should build with them.</p>
              <p>The application of AI in creating educational resources represents a mathematical approach to knowledge sharing - finding efficient algorithms to maximize educational impact while minimizing the barriers to creating high-quality learning materials.</p>
            </div>
            
            <div className="bg-slate-700 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">About the Creator</h3>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-40 h-40 bg-slate-600 rounded-full flex items-center justify-center">
                    <span className="text-4xl text-cyan-400">JR</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-lg font-medium text-white mb-2">Jesse Rogers</h4>
                  <p className="text-gray-300 mb-2">Learning Lab Coordinator at Palm Beach State College</p>
                  <p className="mb-4">As a Learning Lab Coordinator, Jesse is passionate about making education more accessible and engaging. This project represents his belief that technology, when applied thoughtfully, can enhance the learning experience and make complex philosophical concepts more approachable for all students.</p>
                  <div className="flex space-x-4">
                    <a href="https://github.com/rogersmath" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition">GitHub</a>
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 transition">LinkedIn</a>
                    <a href="mailto:example@email.com" className="text-cyan-400 hover:text-cyan-300 transition">Email</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About