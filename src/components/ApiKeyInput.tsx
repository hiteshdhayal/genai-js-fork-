import React from 'react';
import { Key, AlertCircle } from 'lucide-react';

interface ApiKeyInputProps {
  apiKey: string;
  setApiKey: (key: string) => void;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ apiKey, setApiKey }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Key className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-900">Gemini API Configuration</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-2">
            Gemini API Key
          </label>
          <input
            type="password"
            id="apiKey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your Gemini API key..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">How to get your Gemini API key:</p>
              <ol className="list-decimal list-inside space-y-1 text-blue-700">
                <li>Visit <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">Google AI Studio</a></li>
                <li>Sign in with your Google account</li>
                <li>Click "Create API Key" and copy the generated key</li>
                <li>Paste it in the field above</li>
              </ol>
              <p className="mt-2 text-xs">Note: Your API key is stored locally and never sent to our servers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyInput;