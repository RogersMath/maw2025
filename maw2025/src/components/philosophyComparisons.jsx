import React, { useState, useMemo } from 'react';

const PhilosophyComparisonMatrix = () => {
  const [selectedDimension, setSelectedDimension] = useState('individualCollective');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFramework, setExpandedFramework] = useState(null);
  
  // Define the major philosophical frameworks
  const frameworks = [
    { id: "utilitarianism", name: "Utilitarianism" },
    { id: "virtue", name: "Virtue Ethics" },
    { id: "deontology", name: "Deontology" },
    { id: "existentialism", name: "Existentialism" },
    { id: "pragmatism", name: "Pragmatism" },
    { id: "analytical", name: "Analytical Philosophy" },
    { id: "phenomenology", name: "Phenomenology" },
    { id: "critical", name: "Critical Theory" },
    { id: "stoicism", name: "Stoicism" },
    { id: "confucianism", name: "Confucianism" },
    { id: "buddhism", name: "Buddhism" },
    { id: "postmodernism", name: "Postmodernism" },
    { id: "naturalism", name: "Naturalism" },
    { id: "liberalism", name: "Liberalism" },
    { id: "contractarianism", name: "Contractarianism" },
    { id: "marxism", name: "Marxism" },
    { id: "feminism", name: "Feminism" },
    { id: "rationalism", name: "Rationalism" },
    { id: "empiricism", name: "Empiricism" },
    { id: "idealism", name: "Idealism" }
  ];

  // Define philosophical dimensions for comparison
  const dimensions = [
    { 
      id: "individualCollective", 
      name: "Individual vs. Collective", 
      description: "How the framework balances individual autonomy with collective well-being and social order"
    },
    { 
      id: "outcomeProcess", 
      name: "Outcome vs. Process", 
      description: "Whether the framework prioritizes ends (consequences) or means (procedures, intentions)"
    },
    { 
      id: "empiricalRational", 
      name: "Empirical vs. Rational", 
      description: "Whether knowledge primarily comes from experience and observation or from reason and logic"
    },
    { 
      id: "objectiveSubjective", 
      name: "Objective vs. Subjective", 
      description: "Whether truth and moral values are seen as universal and independent of observers, or relative to perspective"
    },
    { 
      id: "materialIdeal", 
      name: "Material vs. Ideal", 
      description: "Whether reality is fundamentally physical/material or mental/spiritual/conceptual" 
    },
    { 
      id: "traditionProgress", 
      name: "Tradition vs. Progress", 
      description: "Whether the framework values preserving established ways or pursuing change and reform"
    },
    { 
      id: "universalContextual", 
      name: "Universal vs. Contextual", 
      description: "Whether principles are applied uniformly across contexts or adapted to specific situations"
    },
    { 
      id: "natureNurture", 
      name: "Nature vs. Nurture", 
      description: "Whether human behavior and society are shaped by innate qualities or by environment and upbringing"
    }
  ];

  // Define relationships between frameworks
  // For each dimension, define how frameworks are positioned (1-10 scale)
  // 1 = fully on the first aspect (e.g., individual, outcome), 10 = fully on the second aspect (e.g., collective, process)
  const positions = {
    individualCollective: {
      utilitarianism: 5, // Balances individual happiness with greatest happiness for greatest number
      virtue: 6, // Character within community context
      deontology: 4, // Universal duties apply to individuals
      existentialism: 2, // Radically individual
      pragmatism: 5, // Balanced, situational
      analytical: 4, // Often individualistic frameworks
      phenomenology: 3, // Focus on individual experience
      critical: 8, // Focuses on social structures
      stoicism: 3, // Personal virtue, but with cosmopolitan duty
      confucianism: 9, // Strongly collective and relational
      buddhism: 7, // Individual enlightenment with compassion for all
      postmodernism: 6, // Critical of both individualism and collectivism
      naturalism: 5, // Varies depending on scientific evidence
      liberalism: 3, // Individual rights-focused
      contractarianism: 4, // Individual consent for collective governance
      marxism: 9, // Class-based, collective
      feminism: 7, // Personal liberation within social context
      rationalism: 4, // Universal reason applied by individuals
      empiricism: 4, // Individual experience as basis
      idealism: 6 // Varies by tradition but often sees mind as universal
    },
    outcomeProcess: {
      utilitarianism: 2, // Strongly outcome-focused
      virtue: 7, // Character development process
      deontology: 9, // Rules and duties matter, not outcomes
      existentialism: 6, // Authentic living as process
      pragmatism: 3, // What works = outcome oriented
      analytical: 5, // Both process (logic) and outcomes matter
      phenomenology: 8, // Focus on experience itself
      critical: 4, // Liberation as outcome, but process matters
      stoicism: 8, // Virtuous process regardless of outcome
      confucianism: 7, // Ritual and proper conduct as process
      buddhism: 8, // Right path, process of enlightenment
      postmodernism: 6, // Often critiques both
      naturalism: 4, // Natural processes lead to outcomes
      liberalism: 5, // Rights processes and welfare outcomes
      contractarianism: 6, // Process of agreement important
      marxism: 3, // Revolutionary outcome-focused
      feminism: 6, // Both process and outcomes matter
      rationalism: 7, // Reasoning process
      empiricism: 5, // Process of observation for practical outcomes
      idealism: 6 // Process of understanding ideas
    },
    empiricalRational: {
      utilitarianism: 3, // Empirical calculation of utility
      virtue: 5, // Balance of practical wisdom and principle
      deontology: 8, // Rational principles
      existentialism: 4, // Lived experience with rational reflection
      pragmatism: 2, // Strongly empirical
      analytical: 6, // Logic with empirical inputs
      phenomenology: 3, // Direct experience as primary
      critical: 5, // Both theory and practice
      stoicism: 7, // Rational control of emotions
      confucianism: 6, // Wisdom traditions with practical elements
      buddhism: 4, // Direct experience with rational frameworks
      postmodernism: 4, // Skeptical of pure reason, contextualized empiricism
      naturalism: 2, // Empirical, scientific
      liberalism: 5, // Both rational principles and empirical outcomes
      contractarianism: 7, // Rational agreement
      marxism: 4, // Material conditions with theoretical framework
      feminism: 4, // Lived experience with theoretical analysis
      rationalism: 9, // Pure reason as source of knowledge
      empiricism: 1, // Pure experience as source of knowledge
      idealism: 8 // Mental/rational constructions of reality
    },
    objectiveSubjective: {
      utilitarianism: 4, // Objective calculation with subjective values
      virtue: 5, // Character virtues with contextual application
      deontology: 2, // Objective moral laws
      existentialism: 8, // Subjective meaning-making
      pragmatism: 6, // Truth as what works in practice
      analytical: 3, // Often seeks objective logical truth
      phenomenology: 7, // Subjective experience as foundation
      critical: 6, // Social construction with objective oppression
      stoicism: 3, // Universal rational principles
      confucianism: 5, // Universal virtues applied in social context
      buddhism: 6, // Universal truths experienced subjectively
      postmodernism: 9, // Strongly subjective, contextual
      naturalism: 2, // Objective material reality
      liberalism: 4, // Universal rights, subjective values
      contractarianism: 4, // Objective procedures from subjective agreement
      marxism: 3, // Objective material conditions
      feminism: 6, // Diverse subjective experiences with patterns
      rationalism: 3, // Objective rational truths
      empiricism: 5, // Objective world known through subjective experience
      idealism: 6 // Objective mind-dependent reality
    },
    materialIdeal: {
      utilitarianism: 4, // Material well-being with ideal happiness
      virtue: 5, // Character ideals in material world
      deontology: 7, // Ideal moral principles
      existentialism: 5, // Material existence with ideal meaning
      pragmatism: 3, // Material practical results
      analytical: 5, // Varies by philosopher
      phenomenology: 6, // Experience over material reduction
      critical: 3, // Material conditions with ideological critique
      stoicism: 6, // Material world governed by ideal logos
      confucianism: 4, // Material social order with ideal harmony
      buddhism: 7, // Material world as illusion, ideal enlightenment
      postmodernism: 5, // Critique of both material and ideal narratives
      naturalism: 1, // Purely material
      liberalism: 6, // Ideal rights in material world
      contractarianism: 6, // Ideal agreement organizing material society
      marxism: 2, // Material economic base
      feminism: 4, // Material conditions with ideal equality
      rationalism: 8, // Ideal rational principles
      empiricism: 3, // Material world known through senses
      idealism: 9 // Reality as fundamentally mental/ideal
    },
    traditionProgress: {
      utilitarianism: 7, // Progressive reform for better outcomes
      virtue: 4, // Traditional virtues but can adapt
      deontology: 5, // Universal principles across time
      existentialism: 7, // Create new authentic meaning
      pragmatism: 7, // Change what doesn't work
      analytical: 6, // Often reformist in approach
      phenomenology: 5, // Neutral, examines experience
      critical: 8, // Strongly progressive, transformative
      stoicism: 3, // Traditional virtues
      confucianism: 2, // Respect for tradition and ancestors
      buddhism: 4, // Traditional practices with adaptability
      postmodernism: 7, // Critical of tradition, but also of progress narratives
      naturalism: 6, // Science-driven progress
      liberalism: 6, // Reform within stable systems
      contractarianism: 5, // New agreements based on consent
      marxism: 9, // Revolutionary progress
      feminism: 8, // Progressive social change
      rationalism: 5, // Timeless principles
      empiricism: 6, // Evidence can change understanding
      idealism: 5 // Eternal ideas with progressive understanding
    },
    universalContextual: {
      utilitarianism: 4, // Universal principle applied contextually
      virtue: 6, // Virtues applied with practical wisdom
      deontology: 2, // Universal moral laws
      existentialism: 8, // Highly contextual, situated
      pragmatism: 8, // Strongly contextual
      analytical: 3, // Often seeks universal logical principles
      phenomenology: 6, // Universal structures of subjective experience
      critical: 7, // Contextual analysis of power
      stoicism: 3, // Universal principles of virtue
      confucianism: 5, // Universal virtues in specific relationships
      buddhism: 4, // Universal suffering, contextual paths
      postmodernism: 9, // Strongly contextual, rejects universals
      naturalism: 3, // Universal natural laws
      liberalism: 4, // Universal rights with contextual application
      contractarianism: 5, // Universal consent in specific societies
      marxism: 6, // Universal class struggle in historical contexts
      feminism: 7, // Diverse experiences with common patterns
      rationalism: 2, // Universal rational principles
      empiricism: 6, // Universal patterns from contextual observations
      idealism: 4 // Universal ideas, contextual understanding
    },
    natureNurture: {
      utilitarianism: 5, // Both natural drives and social shaping
      virtue: 4, // Natural capacities developed through practice
      deontology: 5, // Natural rational capacity, social duty
      existentialism: 7, // Existence before essence, self-creation
      pragmatism: 6, // Adaptability to environment
      analytical: 5, // Varies by philosopher
      phenomenology: 5, // Experience shaped by both
      critical: 8, // Strong focus on social construction
      stoicism: 4, // Natural cosmos, cultivated virtue
      confucianism: 6, // Educable nature, strong social emphasis
      buddhism: 6, // Natural capacity for enlightenment, cultivated
      postmodernism: 8, // Strong social construction emphasis
      naturalism: 3, // Natural causes predominate
      liberalism: 5, // Natural rights, social institutions
      contractarianism: 6, // Natural equality, social agreement
      marxism: 8, // Economic conditions shape consciousness
      feminism: 7, // Gender as social construct, not biological destiny
      rationalism: 4, // Innate rational capacities
      empiricism: 7, // Mind shaped by experience
      idealism: 5 // Mind shapes experience, but is also shaped
    }
  };

  // Define compare/contrast relationships between frameworks
  const relationships = {
    utilitarianism: {
      virtue: "Both aim for flourishing but differ on character vs outcomes. Virtue ethics asks 'what kind of person should I be?' while utilitarianism asks 'what creates the most happiness?'",
      deontology: "Direct rivals - utilitarianism focuses on consequences while deontology focuses on the intrinsic rightness of actions regardless of outcome",
      pragmatism: "Both focus on practical consequences, but pragmatism is less calculating and more experimental",
      marxism: "Both concerned with human welfare, but utilitarianism is individualistic while Marxism is collective and class-based",
      liberalism: "Often aligned, with liberal focus on individual rights and utilitarian focus on general welfare"
    },
    virtue: {
      deontology: "Both concerned with character/motives rather than just outcomes, but deontology emphasizes rules while virtue ethics emphasizes character traits",
      stoicism: "Strong historical connections, both emphasize character development and virtues like wisdom and moderation",
      confucianism: "Both emphasize character cultivation, proper relationships, and social harmony through virtuous living",
      buddhism: "Both emphasize cultivation of character, though Buddhism focuses more on detachment while virtue ethics on flourishing"
    },
    deontology: {
      existentialism: "Tension between universal moral laws (deontology) and personal authentic choice (existentialism)",
      contractarianism: "Both can justify rights and duties, but from different foundations - moral law vs. agreement",
      rationalism: "Strong alignment - both emphasize rational principles as basis for ethics and knowledge"
    },
    existentialism: {
      phenomenology: "Overlapping traditions focusing on lived experience and human existence",
      postmodernism: "Both question grand narratives, but existentialism maintains space for authentic meaning while postmodernism is more skeptical",
      feminism: "Both emphasize freedom, agency, and authentic self-definition against social constraints"
    },
    pragmatism: {
      analytical: "Often opposed approaches - pragmatism focuses on practical utility while analytical philosophy on logical analysis",
      naturalism: "Strong overlap - both emphasize scientific approach and reject supernatural explanations",
      empiricism: "Both prioritize experience and practical results over abstract theory"
    },
    critical: {
      marxism: "Overlapping traditions, with critical theory extending Marxist analysis beyond economics to culture",
      feminism: "Strong alignment in methodology of critiquing power structures and dominant narratives",
      postmodernism: "Both critique grand narratives, but critical theory maintains more normative stance"
    },
    naturalism: {
      empiricism: "Strong overlap - empiricism provides epistemological foundation for naturalistic worldview",
      idealism: "Direct contrast - naturalism sees reality as material while idealism sees it as mental/spiritual"
    },
    liberalism: {
      contractarianism: "Strong overlap - social contract theories often justify liberal political arrangements",
      marxism: "Historically opposed - individual rights vs. collective class interests"
    },
    buddhism: {
      phenomenology: "Both examine the structures of consciousness and experience",
      idealism: "Both question the ultimate reality of the material world"
    }
  };

  // Get frameworks that match search term
  const filteredFrameworks = useMemo(() => {
    if (!searchTerm) return frameworks;
    
    const lowerSearch = searchTerm.toLowerCase();
    return frameworks.filter(fw => 
      fw.name.toLowerCase().includes(lowerSearch)
    );
  }, [searchTerm]);

  // Get dimensions data for currently selected dimension
  const getDimensionData = () => {
    const dim = selectedDimension;
    
    // Sort frameworks by their position on this dimension
    return [...filteredFrameworks].sort((a, b) => 
      positions[dim][a.id] - positions[dim][b.id]
    );
  };

  // Get color for a position value (1-10 scale)
  const getPositionColor = (value) => {
    // Colors from blue (1) to purple (5) to red (10)
    if (value <= 3) return 'bg-blue-500';
    if (value <= 5) return 'bg-indigo-500';
    if (value <= 7) return 'bg-purple-500';
    return 'bg-red-500';
  };

  // Get position label based on dimension and value
  const getPositionLabel = (dimension, value) => {
    const dim = dimensions.find(d => d.id === dimension);
    if (!dim) return '';
    
    const parts = dim.name.split(' vs. ');
    if (value <= 3) return `Strongly ${parts[0]}`;
    if (value <= 5) return `Moderately ${parts[0]}`;
    if (value <= 7) return `Moderately ${parts[1]}`;
    return `Strongly ${parts[1]}`;
  };

  // Get color for text based on position
  const getTextColor = (value) => {
    return value <= 6 ? 'text-white' : 'text-white';
  };

  // Find related frameworks for a given framework
  const getRelatedFrameworks = (frameworkId) => {
    const directRelationships = relationships[frameworkId] || {};
    
    // Add frameworks that mention this one
    const indirectRelationships = {};
    Object.keys(relationships).forEach(fwId => {
      if (fwId !== frameworkId && relationships[fwId] && relationships[fwId][frameworkId]) {
        indirectRelationships[fwId] = relationships[fwId][frameworkId];
      }
    });
    
    return { ...directRelationships, ...indirectRelationships };
  };

  return (
    <div className="max-w-full p-3 bg-slate-800 rounded-lg shadow-lg text-white text-sm">
      <h1 className="text-2xl font-bold mb-4 text-center text-cyan-400">Philosophical Frameworks Comparison</h1>
      
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Search frameworks..."
            className="w-full p-1.5 border border-gray-700 rounded bg-slate-700 text-white text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <select 
            className="p-1.5 border border-gray-700 rounded bg-slate-700 text-white text-sm w-full md:w-auto"
            value={selectedDimension}
            onChange={(e) => setSelectedDimension(e.target.value)}
          >
            {dimensions.map(dim => (
              <option key={dim.id} value={dim.id}>{dim.name}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Current dimension description */}
      <div className="mb-4 p-2 bg-slate-700 rounded">
        <p>
          <span className="text-cyan-300 font-medium">
            {dimensions.find(d => d.id === selectedDimension)?.name}:
          </span>{' '}
          {dimensions.find(d => d.id === selectedDimension)?.description}
        </p>
      </div>
      
      {/* Spectrum visualization */}
      <div className="mb-6">
        <div className="relative h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded">
          <div className="absolute -top-6 left-0 text-blue-300 text-xs">
            {selectedDimension.split('vs.')[0] || dimensions.find(d => d.id === selectedDimension)?.name.split(' vs. ')[0]}
          </div>
          <div className="absolute -top-6 right-0 text-red-300 text-xs">
            {selectedDimension.split('vs.')[1] || dimensions.find(d => d.id === selectedDimension)?.name.split(' vs. ')[1]}
          </div>
        </div>
      </div>
      
      {/* Frameworks positioned on the dimension */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-6">
        {getDimensionData().map(framework => {
          const position = positions[selectedDimension][framework.id];
          return (
            <div 
              key={framework.id} 
              className="border border-slate-600 rounded overflow-hidden cursor-pointer hover:border-cyan-500 transition"
              onClick={() => setExpandedFramework(expandedFramework === framework.id ? null : framework.id)}
            >
              <div className={`p-2 ${getPositionColor(position)} ${getTextColor(position)} flex justify-between items-center`}>
                <span className="font-medium">{framework.name}</span>
                <span className="text-xs bg-black bg-opacity-30 rounded px-1.5 py-0.5">
                  {getPositionLabel(selectedDimension, position)}
                </span>
              </div>
              
              {/* Expanded view with related frameworks */}
              {expandedFramework === framework.id && (
                <div className="p-2 bg-slate-700">
                  <h3 className="text-cyan-300 mb-1">Relations with other frameworks:</h3>
                  {Object.keys(getRelatedFrameworks(framework.id)).length > 0 ? (
                    <ul className="list-disc list-inside">
                      {Object.entries(getRelatedFrameworks(framework.id)).map(([relatedId, description]) => (
                        <li key={relatedId} className="mb-1.5">
                          <span className="text-cyan-100 font-medium">
                            {frameworks.find(f => f.id === relatedId)?.name}:
                          </span>{' '}
                          {description}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="italic text-slate-400">No specific relationships defined.</p>
                  )}
                  
                  {/* Dimension positions */}
                  <h3 className="text-cyan-300 mt-3 mb-1">Positions across dimensions:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                    {dimensions.map(dim => (
                      <div key={dim.id} className="flex justify-between">
                        <span className="text-xs">{dim.name}:</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded ${getPositionColor(positions[dim.id][framework.id])}`}>
                          {positions[dim.id][framework.id]}/10
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Table view of comparisons */}
      <div className="overflow-x-auto mb-3">
        <table className="min-w-full bg-slate-700 border border-slate-600 text-xs">
          <thead>
            <tr className="bg-slate-600">
              <th className="border border-slate-500 p-1.5 text-cyan-300">Framework</th>
              {dimensions.map(dim => (
                <th key={dim.id} className="border border-slate-500 p-1.5 text-cyan-300 whitespace-nowrap">
                  {dim.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredFrameworks.map((framework, index) => (
              <tr key={framework.id} className={index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-700'}>
                <td className="border border-slate-600 p-1.5 font-medium text-cyan-100">{framework.name}</td>
                {dimensions.map(dim => {
                  const position = positions[dim.id][framework.id];
                  return (
                    <td key={dim.id} className="border border-slate-600 p-1.5 text-center">
                      <span className={`px-1.5 py-0.5 rounded ${getPositionColor(position)} text-white`}>
                        {position}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="text-center text-xs text-cyan-300 mb-2">
        <p>Click on any framework card to see its relationships with other frameworks</p>
      </div>
    </div>
  );
};

export default PhilosophyComparisonMatrix;
