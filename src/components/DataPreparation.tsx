import React from 'react';
import { Database, Youtube, Twitter, Globe, BookOpen, Code } from 'lucide-react';

const DataPreparation: React.FC = () => {
  const dataSources = [
    {
      platform: 'YouTube',
      icon: Youtube,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      hiteshData: {
        channel: '@chaiaurcode',
        videos: '500+ videos',
        topics: ['JavaScript', 'React', 'Node.js', 'Python', 'Web Development'],
        style: 'Practical tutorials, project-based learning'
      },
      piyushData: {
        channel: '@piyushgargdev',
        videos: '200+ videos',
        topics: ['JavaScript', 'React', 'System Design', 'DSA', 'Web Technologies'],
        style: 'Deep technical explanations, concept clarity'
      }
    },
    {
      platform: 'Twitter',
      icon: Twitter,
      color: 'text-blue-400',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      hiteshData: {
        handle: '@hiteshdotcom',
        tweets: '10K+ tweets',
        topics: ['Tech insights', 'Career advice', 'Industry trends', 'Motivational content'],
        style: 'Engaging, motivational, community-focused'
      },
      piyushData: {
        handle: '@piyushgarg_dev',
        tweets: '5K+ tweets',
        topics: ['Technical tips', 'Code snippets', 'Best practices', 'Tech discussions'],
        style: 'Technical, informative, problem-solving focused'
      }
    },
    {
      platform: 'Websites',
      icon: Globe,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      hiteshData: {
        url: 'hitesh.ai',
        content: 'Blog posts, course content, about section',
        topics: ['Teaching philosophy', 'Course announcements', 'Tech articles'],
        style: 'Educational, entrepreneurial, inspiring'
      },
      piyushData: {
        url: 'piyushgarg.dev',
        content: 'Portfolio, blog, project showcases',
        topics: ['Technical articles', 'Project documentation', 'Career journey'],
        style: 'Professional, detailed, technical'
      }
    }
  ];

  const processingSteps = [
    {
      step: 1,
      title: 'Data Collection',
      description: 'Scrape and collect content from YouTube transcripts, Twitter posts, and website content',
      techniques: ['YouTube API', 'Twitter API', 'Web scraping', 'Content extraction']
    },
    {
      step: 2,
      title: 'Data Cleaning',
      description: 'Remove noise, normalize text, and filter relevant content',
      techniques: ['Text preprocessing', 'Noise removal', 'Language detection', 'Content filtering']
    },
    {
      step: 3,
      title: 'Pattern Analysis',
      description: 'Analyze communication patterns, vocabulary, and response styles',
      techniques: ['NLP analysis', 'Sentiment analysis', 'Style extraction', 'Topic modeling']
    },
    {
      step: 4,
      title: 'Persona Modeling',
      description: 'Create comprehensive persona profiles with communication patterns',
      techniques: ['Feature engineering', 'Pattern recognition', 'Style modeling', 'Persona creation']
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Database className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Data Preparation Process</h2>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Understanding how we collect, process, and analyze data from YouTube, Twitter, and websites 
          to create accurate AI personas of Hitesh Choudhary and Piyush Garg.
        </p>
      </div>

      {/* Data Sources */}
      <div className="grid lg:grid-cols-3 gap-6">
        {dataSources.map((source) => (
          <div key={source.platform} className={`bg-white rounded-xl shadow-lg border ${source.borderColor} overflow-hidden`}>
            <div className={`${source.bgColor} p-4 border-b ${source.borderColor}`}>
              <div className="flex items-center space-x-3">
                <source.icon className={`w-6 h-6 ${source.color}`} />
                <h3 className="text-xl font-bold text-gray-900">{source.platform}</h3>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Hitesh Data */}
              <div>
                <h4 className="font-semibold text-hitesh-primary mb-3 flex items-center">
                  <div className="w-3 h-3 bg-hitesh-primary rounded-full mr-2" />
                  Hitesh Choudhary
                </h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Channel/Handle:</span> {source.hiteshData.channel || source.hiteshData.handle || source.hiteshData.url}</p>
                  <p><span className="font-medium">Content:</span> {source.hiteshData.videos || source.hiteshData.tweets || source.hiteshData.content}</p>
                  <div>
                    <span className="font-medium">Topics:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {source.hiteshData.topics.map((topic, index) => (
                        <span key={index} className="px-2 py-1 bg-hitesh-primary/10 text-hitesh-primary text-xs rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p><span className="font-medium">Style:</span> {source.hiteshData.style}</p>
                </div>
              </div>

              {/* Piyush Data */}
              <div>
                <h4 className="font-semibold text-piyush-primary mb-3 flex items-center">
                  <div className="w-3 h-3 bg-piyush-primary rounded-full mr-2" />
                  Piyush Garg
                </h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Channel/Handle:</span> {source.piyushData.channel || source.piyushData.handle || source.piyushData.url}</p>
                  <p><span className="font-medium">Content:</span> {source.piyushData.videos || source.piyushData.tweets || source.piyushData.content}</p>
                  <div>
                    <span className="font-medium">Topics:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {source.piyushData.topics.map((topic, index) => (
                        <span key={index} className="px-2 py-1 bg-piyush-primary/10 text-piyush-primary text-xs rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p><span className="font-medium">Style:</span> {source.piyushData.style}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Processing Pipeline */}
      <div className="bg-white rounded-xl shadow-lg border p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Code className="w-6 h-6 text-blue-600 mr-3" />
          Data Processing Pipeline
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processingSteps.map((step, index) => (
            <div key={step.step} className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-gray-900">{step.title}</h4>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                
                <div className="space-y-1">
                  {step.techniques.map((technique, techIndex) => (
                    <div key={techIndex} className="flex items-center text-xs text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                      {technique}
                    </div>
                  ))}
                </div>
              </div>
              
              {index < processingSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <div className="w-6 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
          Key Data Insights
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-hitesh-primary mb-4">Hitesh Choudhary's Communication Style</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-hitesh-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                Uses practical examples and real-world scenarios
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-hitesh-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                Encourages hands-on learning and experimentation
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-hitesh-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                Motivational and entrepreneurial mindset
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-hitesh-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                Focuses on building projects and portfolios
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-piyush-primary mb-4">Piyush Garg's Communication Style</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-piyush-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                Deep technical explanations with clear structure
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-piyush-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                Emphasizes best practices and code quality
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-piyush-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                Problem-solving approach to complex topics
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-piyush-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                Focus on modern web technologies and architecture
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPreparation;