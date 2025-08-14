import React, { useState } from 'react';
import { MessageSquare, User, Bot, Github, Twitter, Youtube, Globe } from 'lucide-react';
import ChatInterface from './components/ChatInterface';
import PersonaSelector from './components/PersonaSelector';
import DataPreparation from './components/DataPreparation';
import PromptLogic from './components/PromptLogic';
import SampleChats from './components/SampleChats';
import ApiKeyInput from './components/ApiKeyInput';

export type Persona = 'hitesh' | 'piyush';

function App() {
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null);
  const [apiKey, setApiKey] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'chat' | 'data' | 'prompts' | 'samples'>('chat');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AI Persona Chat</h1>
                <p className="text-sm text-gray-600">Chat with Hitesh Choudhary & Piyush Garg AI Personas</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://hitesh.ai/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-hitesh-primary transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="https://www.piyushgarg.dev/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-piyush-primary transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'chat', label: 'Chat Interface', icon: MessageSquare },
              { id: 'data', label: 'Data Preparation', icon: User },
              { id: 'prompts', label: 'Prompt Logic', icon: Bot },
              { id: 'samples', label: 'Sample Chats', icon: Github }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as any)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'chat' && (
          <div className="space-y-6">
            <ApiKeyInput apiKey={apiKey} setApiKey={setApiKey} />
            {!selectedPersona ? (
              <PersonaSelector onSelectPersona={setSelectedPersona} />
            ) : (
              <ChatInterface 
                persona={selectedPersona} 
                apiKey={apiKey}
                onBack={() => setSelectedPersona(null)} 
              />
            )}
          </div>
        )}
        
        {activeTab === 'data' && <DataPreparation />}
        {activeTab === 'prompts' && <PromptLogic />}
        {activeTab === 'samples' && <SampleChats />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>Built with ❤️ using Gemini AI • Mimicking the personas of Hitesh Choudhary & Piyush Garg</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://youtube.com/@chaiaurcode" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/hiteshdotcom" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;