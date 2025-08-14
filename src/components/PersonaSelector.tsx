import React from 'react';
import { User, Code, Youtube, Twitter, Globe } from 'lucide-react';
import type { Persona } from '../App';

interface PersonaSelectorProps {
  onSelectPersona: (persona: Persona) => void;
}

const PersonaSelector: React.FC<PersonaSelectorProps> = ({ onSelectPersona }) => {
  const personas = [
    {
      id: 'hitesh' as Persona,
      name: 'Hitesh Choudhary',
      title: 'Founder of ChaiCode',
      description: 'Full-stack developer, educator, and entrepreneur. Known for his practical approach to teaching web development and his engaging YouTube tutorials.',
      avatar: '/assets/hitesh sir.jpg',
      traits: [
        'Practical & hands-on teaching style',
        'Focuses on real-world applications',
        'Encourages learning by doing',
        'Passionate about web development',
        'Entrepreneurial mindset'
      ],
      socialLinks: {
        youtube: 'https://youtube.com/@chaiaurcode',
        twitter: 'https://twitter.com/hiteshdotcom',
        website: 'https://hitesh.ai/'
      },
      gradient: 'from-hitesh-primary to-hitesh-secondary'
    },
    {
      id: 'piyush' as Persona,
      name: 'Piyush Garg',
      title: 'Senior Software Engineer',
      description: 'Experienced software engineer specializing in modern web technologies. Known for his deep technical knowledge and clear explanations of complex concepts.',
      avatar: '/assets/piyush sir.jpg',
      traits: [
        'Deep technical expertise',
        'Clear and structured explanations',
        'Focus on best practices',
        'Modern web technologies',
        'Problem-solving approach'
      ],
      socialLinks: {
        youtube: 'https://youtube.com/@piyushgargdev',
        twitter: 'https://twitter.com/piyushgarg_dev',
        website: 'https://www.piyushgarg.dev/'
      },
      gradient: 'from-piyush-primary to-piyush-secondary'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your AI Mentor</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select a persona to start chatting. Each AI has been trained to mimic the communication style, 
          expertise, and personality of these renowned developers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {personas.map((persona) => (
          <div
            key={persona.id}
            onClick={() => onSelectPersona(persona.id)}
            className={`persona-card persona-card-${persona.id} transform hover:scale-105`}
          >
            {/* Avatar and Header */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative">
                <img
                  src={persona.avatar}
                  alt={persona.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(persona.name)}&size=64&background=random`;
                  }}
                />
                <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r ${persona.gradient} rounded-full flex items-center justify-center`}>
                  <User className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{persona.name}</h3>
                <p className="text-sm text-gray-600">{persona.title}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-4 leading-relaxed">{persona.description}</p>

            {/* Traits */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Traits:</h4>
              <ul className="space-y-1">
                {persona.traits.map((trait, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center">
                    <div className={`w-2 h-2 bg-gradient-to-r ${persona.gradient} rounded-full mr-2 flex-shrink-0`} />
                    {trait}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex space-x-3">
                <a
                  href={persona.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={persona.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={persona.socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-700 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
              <button className={`px-4 py-2 bg-gradient-to-r ${persona.gradient} text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-200`}>
                Start Chat
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonaSelector;