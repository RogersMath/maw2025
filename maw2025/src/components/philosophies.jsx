import React, { useState, useMemo } from 'react';

const PhilosophyFrameworks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({
    key: 'framework',
    direction: 'ascending'
  });
  const [expandedRows, setExpandedRows] = useState({});
  const [showAllDetails, setShowAllDetails] = useState(false);
  
  // Philosophy frameworks data
  const philosophyData = [
    { 
      framework: "Utilitarianism", 
      tradition: "Consequentialism",
      period: "18th-19th century", 
      keyFigures: "Jeremy Bentham, John Stuart Mill, Peter Singer", 
      centralConcept: "Greatest happiness/utility for the greatest number",
      epistemology: "Empiricism",
      metaphysics: "Generally naturalistic",
      ethics: "Action-based, consequentialist",
      political: "Often liberal/progressive",
      description: "Evaluates actions based on their outcomes and maximizing overall well-being or happiness" 
    },
    { 
      framework: "Virtue Ethics", 
      tradition: "Ancient Greek",
      period: "Ancient-Contemporary", 
      keyFigures: "Aristotle, Alasdair MacIntyre, Martha Nussbaum", 
      centralConcept: "Development of virtuous character traits",
      epistemology: "Practical wisdom (phronesis)",
      metaphysics: "Teleological",
      ethics: "Character-based, virtue-centered",
      political: "Community-oriented",
      description: "Focuses on developing moral character and virtues rather than following rules or calculating consequences" 
    },
    { 
      framework: "Deontology", 
      tradition: "Rationalism",
      period: "18th century-present", 
      keyFigures: "Immanuel Kant, W.D. Ross, Christine Korsgaard", 
      centralConcept: "Categorical imperative, duty, moral law",
      epistemology: "Rationalism",
      metaphysics: "Dualistic",
      ethics: "Rule-based, duty-focused",
      political: "Rights-based liberalism",
      description: "Emphasizes universal moral principles, duty, and the inherent rightness or wrongness of actions regardless of consequences" 
    },
    { 
      framework: "Existentialism", 
      tradition: "Continental",
      period: "19th-20th century", 
      keyFigures: "Søren Kierkegaard, Friedrich Nietzsche, Jean-Paul Sartre, Simone de Beauvoir", 
      centralConcept: "Existence precedes essence, radical freedom",
      epistemology: "Subjectivity, lived experience",
      metaphysics: "Anti-essentialist",
      ethics: "Authenticity, freedom, responsibility",
      political: "Varied (individualist to Marxist)",
      description: "Focuses on individual existence, freedom, choice, and responsibility in a world without inherent meaning" 
    },
    { 
      framework: "Pragmatism", 
      tradition: "American",
      period: "Late 19th century-present", 
      keyFigures: "Charles Sanders Peirce, William James, John Dewey, Richard Rorty", 
      centralConcept: "Practical consequences, experimentation",
      epistemology: "Anti-foundationalist, fallibilist",
      metaphysics: "Naturalistic, process-oriented",
      ethics: "Experimental, social",
      political: "Democratic, reformist",
      description: "Evaluates theories or beliefs in terms of their practical application and success" 
    },
    { 
      framework: "Analytical Philosophy", 
      tradition: "Anglo-American",
      period: "20th century-present", 
      keyFigures: "Gottlob Frege, Bertrand Russell, Ludwig Wittgenstein, W.V.O. Quine", 
      centralConcept: "Logical analysis, conceptual clarity",
      epistemology: "Emphasis on logic and precision",
      metaphysics: "Varied (realist to anti-realist)",
      ethics: "Meta-ethics, language of morality",
      political: "Generally liberal democratic",
      description: "Emphasizes clarity, logical analysis, and precise use of language in addressing philosophical problems" 
    },
    { 
      framework: "Phenomenology", 
      tradition: "Continental",
      period: "20th century-present", 
      keyFigures: "Edmund Husserl, Martin Heidegger, Maurice Merleau-Ponty", 
      centralConcept: "Intentionality, lived experience, being-in-the-world",
      epistemology: "First-person experience",
      metaphysics: "Focus on phenomena as experienced",
      ethics: "Embodied, situated morality",
      political: "Varied",
      description: "Studies structures of consciousness as experienced from the first-person perspective" 
    },
    { 
      framework: "Critical Theory", 
      tradition: "Continental/Marxist",
      period: "20th century-present", 
      keyFigures: "Max Horkheimer, Theodor Adorno, Herbert Marcuse, Jürgen Habermas", 
      centralConcept: "Critique of domination and ideology",
      epistemology: "Dialectical, historically situated",
      metaphysics: "Historical materialism",
      ethics: "Emancipatory",
      political: "Neo-Marxist, progressive",
      description: "Examines and critiques society and culture, drawing on knowledge from social sciences and humanities" 
    },
    { 
      framework: "Stoicism", 
      tradition: "Hellenistic",
      period: "3rd century BCE-present", 
      keyFigures: "Zeno of Citium, Seneca, Epictetus, Marcus Aurelius", 
      centralConcept: "Virtue as sole good, living according to nature",
      epistemology: "Rationalism",
      metaphysics: "Materialist, deterministic",
      ethics: "Virtue-based, self-discipline",
      political: "Cosmopolitan",
      description: "Emphasizes virtue, reason, and self-control as means to overcome destructive emotions" 
    },
    { 
      framework: "Confucianism", 
      tradition: "East Asian",
      period: "5th century BCE-present", 
      keyFigures: "Confucius, Mencius, Xunzi", 
      centralConcept: "Social harmony, moral cultivation, filial piety",
      epistemology: "Practical wisdom, tradition",
      metaphysics: "Holistic, relational",
      ethics: "Virtue-based, relational",
      political: "Hierarchical, meritocratic",
      description: "Emphasizes personal and governmental morality, correctness of social relationships, and family loyalty" 
    },
    { 
      framework: "Buddhism", 
      tradition: "Indian/Asian",
      period: "5th century BCE-present", 
      keyFigures: "Siddhartha Gautama, Nagarjuna, Thich Nhat Hanh", 
      centralConcept: "Four Noble Truths, Eightfold Path, emptiness (sunyata)",
      epistemology: "Direct insight, meditation",
      metaphysics: "Non-self (anatta), impermanence",
      ethics: "Compassion, non-harm",
      political: "Varied, often non-violent",
      description: "Focuses on liberation from suffering through understanding the nature of reality and practicing mindfulness" 
    },
    { 
      framework: "Postmodernism", 
      tradition: "Continental",
      period: "Late 20th century", 
      keyFigures: "Jacques Derrida, Michel Foucault, Jean Baudrillard, Judith Butler", 
      centralConcept: "Critique of grand narratives, deconstruction",
      epistemology: "Anti-foundationalist, relativist",
      metaphysics: "Anti-essentialist",
      ethics: "Context-dependent, power-aware",
      political: "Critique of power structures",
      description: "Skeptical of universal truths, emphasizes the role of language, power relations, and cultural context in shaping knowledge and values" 
    },
    { 
      framework: "Naturalism", 
      tradition: "Various",
      period: "Ancient to present", 
      keyFigures: "Democritus, Baruch Spinoza, W.V.O. Quine, Daniel Dennett", 
      centralConcept: "Natural world as all that exists",
      epistemology: "Scientific method",
      metaphysics: "Physicalist, materialist",
      ethics: "Naturalized ethics",
      political: "Science-informed policy",
      description: "Views natural properties, causes, and explanations as sufficient to explain all phenomena without supernatural or spiritual elements" 
    },
    { 
      framework: "Liberalism", 
      tradition: "Western political",
      period: "17th century-present", 
      keyFigures: "John Locke, John Stuart Mill, John Rawls, Martha Nussbaum", 
      centralConcept: "Individual liberty, rights, equality",
      epistemology: "Rationalism/empiricism",
      metaphysics: "Varied",
      ethics: "Rights-based",
      political: "Constitutional democracy",
      description: "Emphasizes individual rights, civil liberties, democracy, and equal opportunity" 
    },
    { 
      framework: "Contractarianism", 
      tradition: "Western political",
      period: "17th century-present", 
      keyFigures: "Thomas Hobbes, John Locke, Jean-Jacques Rousseau, John Rawls", 
      centralConcept: "Social contract, agreement among citizens",
      epistemology: "Rationalism",
      metaphysics: "Individualistic",
      ethics: "Agreement-based",
      political: "Consent of the governed",
      description: "Bases moral and political obligations on a contract or agreement among members of society" 
    },
    { 
      framework: "Marxism", 
      tradition: "Western political/economic",
      period: "19th century-present", 
      keyFigures: "Karl Marx, Friedrich Engels, Antonio Gramsci, Herbert Marcuse", 
      centralConcept: "Class struggle, historical materialism",
      epistemology: "Dialectical materialism",
      metaphysics: "Historical materialism",
      ethics: "Class-based, emancipatory",
      political: "Revolutionary socialism",
      description: "Analyzes class relations, social conflict, and historical change through economic systems" 
    },
    { 
      framework: "Feminism", 
      tradition: "Various",
      period: "18th century-present", 
      keyFigures: "Mary Wollstonecraft, Simone de Beauvoir, bell hooks, Judith Butler", 
      centralConcept: "Gender equality, critique of patriarchy",
      epistemology: "Standpoint theory, situated knowledge",
      metaphysics: "Varied (social construction to materialism)",
      ethics: "Care ethics, liberation",
      political: "Gender equality, women's rights",
      description: "Critiques gender inequality and advocates for women's rights, interests, and issues" 
    },
    { 
      framework: "Rationalism", 
      tradition: "Western",
      period: "17th-18th century", 
      keyFigures: "René Descartes, Baruch Spinoza, Gottfried Wilhelm Leibniz", 
      centralConcept: "Reason as primary source of knowledge",
      epistemology: "A priori reasoning",
      metaphysics: "Substance dualism or monism",
      ethics: "Rational principles",
      political: "Varied",
      description: "Emphasizes reason and logic as the primary sources of knowledge, rather than sensory experience" 
    },
    { 
      framework: "Empiricism", 
      tradition: "Western",
      period: "17th-18th century", 
      keyFigures: "John Locke, George Berkeley, David Hume", 
      centralConcept: "Knowledge derives from sensory experience",
      epistemology: "Sensory experience",
      metaphysics: "Skeptical of non-observable entities",
      ethics: "Naturalistic",
      political: "Liberal, reformist",
      description: "Holds that knowledge comes primarily from sensory experience rather than innate ideas or reason alone" 
    },
    { 
      framework: "Idealism", 
      tradition: "Western",
      period: "18th-19th century", 
      keyFigures: "Immanuel Kant, G.W.F. Hegel, F.H. Bradley", 
      centralConcept: "Reality is mentally constructed or fundamentally mental",
      epistemology: "Mind structures experience",
      metaphysics: "Mind-dependent reality",
      ethics: "Rational, universal",
      political: "Varied (conservative to progressive)",
      description: "Views reality as fundamentally mental, constructed by the mind, or otherwise non-material" 
    },
  ];

  // Handle sorting
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Toggle expanded state for a specific row
  const toggleRowExpand = (index) => {
    setExpandedRows(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Sort and filter data
  const sortedAndFilteredData = useMemo(() => {
    let filteredData = [...philosophyData];
    
    // Filter by search term
    if (searchTerm) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      filteredData = filteredData.filter(item => 
        item.framework.toLowerCase().includes(lowerCaseSearch) ||
        item.keyFigures.toLowerCase().includes(lowerCaseSearch) ||
        item.centralConcept.toLowerCase().includes(lowerCaseSearch) ||
        item.description.toLowerCase().includes(lowerCaseSearch) ||
        item.tradition.toLowerCase().includes(lowerCaseSearch)
      );
    }
    
    // Sort data
    if (sortConfig.key) {
      filteredData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    
    return filteredData;
  }, [philosophyData, searchTerm, sortConfig]);

  // Classes for the sorting buttons
  const getSortButtonClass = (name) => {
    if (sortConfig.key === name) {
      return sortConfig.direction === 'ascending' 
        ? 'bg-cyan-500 text-white' 
        : 'bg-cyan-700 text-white';
    }
    return 'bg-slate-500 text-white';
  };

  return (
    <div className="max-w-full p-3 bg-slate-800 rounded-lg shadow-lg text-white text-sm">
      <h1 className="text-2xl font-bold mb-4 text-center text-cyan-400">Philosophical Frameworks Database</h1>
      
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Search frameworks, figures, or concepts..."
            className="w-full p-1.5 border border-gray-700 rounded bg-slate-700 text-white text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <button 
            onClick={() => setShowAllDetails(!showAllDetails)}
            className="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-700 text-white rounded transition text-sm"
          >
            {showAllDetails ? "Compact View" : "Show All Details"}
          </button>
        </div>
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-slate-700 border border-slate-600 text-sm">
          <thead>
            <tr className="bg-slate-600">
              <th className="border border-slate-500 p-1.5 text-cyan-300">
                <div className="flex items-center justify-between">
                  <span>Framework</span>
                  <button 
                    onClick={() => requestSort('framework')}
                    className={`ml-1 px-1.5 py-0.5 rounded text-xs ${getSortButtonClass('framework')}`}
                  >
                    {sortConfig.key === 'framework' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : '⇅'}
                  </button>
                </div>
              </th>
              {showAllDetails && (
                <>
                  <th className="border border-slate-500 p-1.5 text-cyan-300 whitespace-nowrap">
                    <div className="flex items-center justify-between">
                      <span>Tradition</span>
                      <button 
                        onClick={() => requestSort('tradition')}
                        className={`ml-1 px-1.5 py-0.5 rounded text-xs ${getSortButtonClass('tradition')}`}
                      >
                        {sortConfig.key === 'tradition' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : '⇅'}
                      </button>
                    </div>
                  </th>
                  <th className="border border-slate-500 p-1.5 text-cyan-300 whitespace-nowrap">Period</th>
                  <th className="border border-slate-500 p-1.5 text-cyan-300 whitespace-nowrap">Key Figures</th>
                  <th className="border border-slate-500 p-1.5 text-cyan-300 whitespace-nowrap">Central Concept</th>
                  <th className="border border-slate-500 p-1.5 text-cyan-300 whitespace-nowrap">Epistemology</th>
                  <th className="border border-slate-500 p-1.5 text-cyan-300 whitespace-nowrap">Metaphysics</th>
                  <th className="border border-slate-500 p-1.5 text-cyan-300 whitespace-nowrap">Ethics</th>
                  <th className="border border-slate-500 p-1.5 text-cyan-300 whitespace-nowrap">Political</th>
                </>
              )}
              <th className="border border-slate-500 p-1.5 text-cyan-300">Description</th>
              {!showAllDetails && (
                <th className="border border-slate-500 p-1.5 text-cyan-300 whitespace-nowrap">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {sortedAndFilteredData.map((philosophy, index) => (
              <React.Fragment key={index}>
                <tr className={index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-700'}>
                  <td className="border border-slate-600 p-1.5 font-medium text-cyan-100">{philosophy.framework}</td>
                  {showAllDetails && (
                    <>
                      <td className="border border-slate-600 p-1.5 text-center whitespace-nowrap">{philosophy.tradition}</td>
                      <td className="border border-slate-600 p-1.5 text-center whitespace-nowrap">{philosophy.period}</td>
                      <td className="border border-slate-600 p-1.5">{philosophy.keyFigures}</td>
                      <td className="border border-slate-600 p-1.5">{philosophy.centralConcept}</td>
                      <td className="border border-slate-600 p-1.5 text-center whitespace-nowrap">{philosophy.epistemology}</td>
                      <td className="border border-slate-600 p-1.5 text-center whitespace-nowrap">{philosophy.metaphysics}</td>
                      <td className="border border-slate-600 p-1.5 text-center whitespace-nowrap">{philosophy.ethics}</td>
                      <td className="border border-slate-600 p-1.5 text-center whitespace-nowrap">{philosophy.political}</td>
                    </>
                  )}
                  <td className="border border-slate-600 p-1.5">{philosophy.description}</td>
                  {!showAllDetails && (
                    <td className="border border-slate-600 p-1.5 text-center whitespace-nowrap">
                      <button
                        onClick={() => toggleRowExpand(index)}
                        className="px-1.5 py-0.5 bg-cyan-600 hover:bg-cyan-700 text-white rounded text-xs"
                      >
                        {expandedRows[index] ? 'Collapse' : 'Expand'}
                      </button>
                    </td>
                  )}
                </tr>
                {!showAllDetails && expandedRows[index] && (
                  <tr className={index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-700'}>
                    <td colSpan="4" className="border border-slate-600 p-2 text-sm">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 md:grid-cols-3">
                        <div>
                          <span className="text-cyan-300 font-medium">Tradition:</span>{' '}
                          <span>{philosophy.tradition}</span>
                        </div>
                        <div>
                          <span className="text-cyan-300 font-medium">Period:</span>{' '}
                          <span>{philosophy.period}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-cyan-300 font-medium">Key Figures:</span>{' '}
                          <span>{philosophy.keyFigures}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-cyan-300 font-medium">Central Concept:</span>{' '}
                          <span>{philosophy.centralConcept}</span>
                        </div>
                        <div>
                          <span className="text-cyan-300 font-medium">Epistemology:</span>{' '}
                          <span>{philosophy.epistemology}</span>
                        </div>
                        <div>
                          <span className="text-cyan-300 font-medium">Metaphysics:</span>{' '}
                          <span>{philosophy.metaphysics}</span>
                        </div>
                        <div>
                          <span className="text-cyan-300 font-medium">Ethics:</span>{' '}
                          <span>{philosophy.ethics}</span>
                        </div>
                        <div>
                          <span className="text-cyan-300 font-medium">Political Dimension:</span>{' '}
                          <span>{philosophy.political}</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-3 text-center text-xs text-cyan-300">
        <p>Philosophy database - {sortedAndFilteredData.length} frameworks displayed out of {philosophyData.length} total</p>
      </div>
    </div>
  );
};

export default PhilosophyFrameworks;
