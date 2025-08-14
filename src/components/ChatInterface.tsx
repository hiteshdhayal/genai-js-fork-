import React, { useState, useRef, useEffect } from 'react';
import { Send, ArrowLeft, User, Bot, AlertCircle } from 'lucide-react';
import type { Persona } from '../App';
import { generateResponse } from '../services/geminiService';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatInterfaceProps {
  persona: Persona;
  apiKey: string;
  onBack: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ persona, apiKey, onBack }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const personaInfo = {
    hitesh: {
      name: 'Hitesh Choudhary',
      avatar: '/assets/hitesh sir.jpg',
      color: 'hitesh'
    },
    piyush: {
      name: 'Piyush Garg',
      avatar: '/assets/piyush sir.jpg',
      color: 'piyush'
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Add welcome message
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      content: persona === 'hitesh' 
        ? "Hey there! I'm Hitesh Choudhary. Ready to dive into some coding? What would you like to learn today? 🚀"
        : "Hello! I'm Piyush Garg. Let's explore some amazing web technologies together. What can I help you with? 💻",
      sender: 'ai',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, [persona]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || !apiKey) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await generateResponse(inputValue, persona, apiKey, messages);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!apiKey) {
    return (
      <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
        <AlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">API Key Required</h3>
        <p className="text-gray-600">Please enter your Gemini API key to start chatting.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
      {/* Chat Header */}
      <div className={`bg-gradient-to-r from-${personaInfo[persona].color}-primary to-${personaInfo[persona].color}-secondary text-white p-4`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={onBack}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <img
              src={personaInfo[persona].avatar}
              alt={personaInfo[persona].name}
              className="w-10 h-10 rounded-full object-cover border-2 border-white"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personaInfo[persona].name)}&size=40&background=random`;
              }}
            />
            <div>
              <h3 className="font-semibold">{personaInfo[persona].name}</h3>
              <p className="text-sm opacity-90">AI Persona • Online</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className="flex items-start space-x-2 max-w-xs lg:max-w-md">
              {message.sender === 'ai' && (
                <img
                  src={personaInfo[persona].avatar}
                  alt={personaInfo[persona].name}
                  className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personaInfo[persona].name)}&size=32&background=random`;
                  }}
                />
              )}
              <div
                className={`chat-bubble ${
                  message.sender === 'user'
                    ? 'chat-bubble-user'
                    : `chat-bubble-${persona}`
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                <p className="text-xs opacity-75 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              {message.sender === 'user' && (
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2">
              <img
                src={personaInfo[persona].avatar}
                alt={personaInfo[persona].name}
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personaInfo[persona].name)}&size=32&background=random`;
                }}
              />
              <div className={`chat-bubble chat-bubble-${persona} flex items-center space-x-1`}>
                <div className="typing-indicator"></div>
                <div className="typing-indicator"></div>
                <div className="typing-indicator"></div>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t p-4">
        <div className="flex space-x-2">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={`Ask ${personaInfo[persona].name} anything...`}
            className="flex-1 resize-none border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={1}
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className={`px-4 py-2 bg-gradient-to-r from-${personaInfo[persona].color}-primary to-${personaInfo[persona].color}-secondary text-white rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;