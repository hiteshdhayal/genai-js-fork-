import React, { useState } from 'react';
import { MessageSquare, User, Bot, Play } from 'lucide-react';

const SampleChats: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<'hitesh' | 'piyush'>('hitesh');

  const sampleConversations = {
    hitesh: [
      {
        id: 1,
        title: "Learning JavaScript Fundamentals",
        messages: [
          {
            sender: 'user',
            content: "I'm completely new to programming. Where should I start with JavaScript?",
            timestamp: "10:00 AM"
          },
          {
            sender: 'hitesh',
            content: "Hey there! 🚀 Welcome to the amazing world of programming! I love helping beginners start their journey.\n\nHere's my practical roadmap for you:\n\n1. **Start with the basics** - Variables, functions, loops\n2. **Build immediately** - Don't just watch tutorials, CODE!\n3. **Create a simple calculator** - Your first project\n4. **Then build a todo app** - Classic but teaches everything\n\nRemember, at ChaiCode we believe in 'learning by doing'. Don't get stuck in tutorial hell - start building from day one! \n\nWhat excites you most about programming? Let's channel that energy! 💻",
            timestamp: "10:02 AM"
          },
          {
            sender: 'user',
            content: "That sounds great! But I'm worried about making mistakes. What if I write bad code?",
            timestamp: "10:05 AM"
          },
          {
            sender: 'hitesh',
            content: "Namaste! That's the BEST question ever! 🎉\n\nListen, bad code is GOOD code when you're learning. Here's why:\n\n✅ Every mistake teaches you something\n✅ You learn debugging (super important skill!)\n✅ You build problem-solving muscles\n✅ You gain confidence by fixing things\n\nI still write bad code sometimes, and I've been doing this for years! The difference is now I can spot it and fix it faster.\n\nMy advice: Write messy code, break things, fix them, celebrate! That's how real developers are born.\n\nStart with something simple today - even a \"Hello World\" is a victory! What will you build first? 🔥",
            timestamp: "10:07 AM"
          }
        ]
      },
      {
        id: 2,
        title: "Career Transition to Web Development",
        messages: [
          {
            sender: 'user',
            content: "I'm 28 and want to switch careers to web development. Is it too late?",
            timestamp: "2:30 PM"
          },
          {
            sender: 'hitesh',
            content: "Hey there! Too late? Are you kidding me? 28 is PERFECT! 🚀\n\nLet me share some real talk:\n\n• I've taught students who switched at 35, 40, even 50!\n• Your life experience is actually an ADVANTAGE\n• You have discipline and focus that 18-year-olds don't\n• Companies LOVE mature developers who can communicate\n\nHere's your action plan:\n1. **6 months intensive learning** - HTML, CSS, JavaScript\n2. **Build 3-4 solid projects** for your portfolio\n3. **Network actively** - join developer communities\n4. **Apply strategically** - target companies that value experience\n\nI've seen career switchers land amazing jobs in 8-12 months. Your previous career skills transfer more than you think!\n\nWhat field are you coming from? Let's leverage those skills! 💪",
            timestamp: "2:32 PM"
          },
          {
            sender: 'user',
            content: "I'm coming from marketing. How can that help in web development?",
            timestamp: "2:35 PM"
          },
          {
            sender: 'hitesh',
            content: "OH WOW! Marketing + Development = SUPERPOWER! 🎯\n\nYou're going to be AMAZING because you understand:\n\n🎨 **User Experience** - You know what users want\n📊 **Analytics** - You can measure and optimize\n💬 **Communication** - You can explain tech to non-tech people\n🎯 **Business Goals** - You build solutions that matter\n\nThis combo is RARE and VALUABLE! Companies are desperate for developers who understand business.\n\nFocus on:\n• Frontend development (React, Vue)\n• User interface design\n• Performance optimization\n• A/B testing implementation\n\nYou could become a Frontend Developer, Product Manager, or even start your own agency!\n\nSeriously, you're not switching careers - you're UPGRADING them! When do you start coding? 🔥",
            timestamp: "2:37 PM"
          }
        ]
      }
    ],
    piyush: [
      {
        id: 1,
        title: "React Performance Optimization",
        messages: [
          {
            sender: 'user',
            content: "My React app is getting slow as it grows. What are the best practices for optimization?",
            timestamp: "11:15 AM"
          },
          {
            sender: 'piyush',
            content: "Hello! Great question about React performance. Let me provide a structured approach to optimization:\n\n**1. Identify Bottlenecks First**\n• Use React DevTools Profiler\n• Monitor component render times\n• Check for unnecessary re-renders\n\n**2. Implement Memoization**\n```javascript\n// Component memoization\nconst MyComponent = React.memo(({ data }) => {\n  return <div>{data.name}</div>;\n});\n\n// Value memoization\nconst expensiveValue = useMemo(() => {\n  return heavyCalculation(data);\n}, [data]);\n```\n\n**3. Optimize Renders**\n• Use useCallback for function props\n• Avoid creating objects in render\n• Implement proper key props for lists\n\nWould you like me to dive deeper into any specific optimization technique?",
            timestamp: "11:17 AM"
          },
          {
            sender: 'user',
            content: "Yes, can you explain more about useCallback and when to use it?",
            timestamp: "11:20 AM"
          },
          {
            sender: 'piyush',
            content: "Absolutely! useCallback is crucial for preventing unnecessary re-renders.\n\n**When to Use useCallback:**\n\n1. **Passing functions to memoized components**\n```javascript\nconst Parent = () => {\n  const [count, setCount] = useState(0);\n  \n  // Without useCallback - new function every render\n  const handleClick = () => setCount(c => c + 1);\n  \n  // With useCallback - stable reference\n  const handleClick = useCallback(() => {\n    setCount(c => c + 1);\n  }, []);\n  \n  return <MemoizedChild onClick={handleClick} />;\n};\n```\n\n2. **Dependencies in other hooks**\n```javascript\nuseEffect(() => {\n  fetchData();\n}, [fetchData]); // fetchData should be memoized\n```\n\n**Performance Rule:** Only use useCallback when the function is passed as a prop to memoized components or used as a dependency.\n\nOverusing it can actually hurt performance due to the overhead of memoization.",
            timestamp: "11:22 AM"
          }
        ]
      },
      {
        id: 2,
        title: "System Design for Web Applications",
        messages: [
          {
            sender: 'user',
            content: "How do I design a scalable web application architecture?",
            timestamp: "3:45 PM"
          },
          {
            sender: 'piyush',
            content: "Hi there! Scalable architecture design involves several key principles. Let me break this down systematically:\n\n**1. Frontend Architecture**\n• **Micro-frontends** for large teams\n• **Component-based design** with clear boundaries\n• **State management** (Redux, Zustand, or Context)\n• **Code splitting** and lazy loading\n\n**2. Backend Architecture**\n• **Microservices** vs **Monolithic** trade-offs\n• **API Gateway** for service orchestration\n• **Database sharding** and **read replicas**\n• **Caching layers** (Redis, CDN)\n\n**3. Infrastructure Considerations**\n• **Load balancing** strategies\n• **Auto-scaling** policies\n• **Monitoring** and **logging**\n• **CI/CD** pipelines\n\nWhat's your current application scale and main bottlenecks? This will help me provide more specific recommendations.",
            timestamp: "3:47 PM"
          },
          {
            sender: 'user',
            content: "We have about 10k daily active users and the database queries are getting slow.",
            timestamp: "3:50 PM"
          },
          {
            sender: 'piyush',
            content: "Perfect! 10k DAU is a great scale to optimize. Here's a targeted approach for database performance:\n\n**Immediate Optimizations:**\n\n1. **Query Optimization**\n```sql\n-- Add indexes for frequently queried columns\nCREATE INDEX idx_user_created_at ON users(created_at);\nCREATE INDEX idx_posts_user_id ON posts(user_id, created_at);\n```\n\n2. **Database Connection Pooling**\n```javascript\n// Use connection pooling\nconst pool = new Pool({\n  connectionString: process.env.DATABASE_URL,\n  max: 20, // max connections\n  idleTimeoutMillis: 30000\n});\n```\n\n3. **Implement Caching**\n• **Redis** for session data and frequent queries\n• **Application-level caching** for expensive operations\n• **CDN** for static assets\n\n4. **Read Replicas**\n• Route read queries to replicas\n• Keep writes on primary database\n\nThis should handle your current scale and prepare for 100k+ users. Want me to elaborate on any specific area?",
            timestamp: "3:52 PM"
          }
        ]
      }
    ]
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <MessageSquare className="w-8 h-8 text-green-600" />
          <h2 className="text-3xl font-bold text-gray-900">Sample Conversations</h2>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore real conversation examples showcasing how each AI persona responds to different 
          types of questions, demonstrating their unique communication styles and expertise.
        </p>
      </div>

      {/* Persona Selector */}
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-sm border p-1 flex">
          <button
            onClick={() => setSelectedChat('hitesh')}
            className={`px-6 py-2 rounded-md font-medium transition-all ${
              selectedChat === 'hitesh'
                ? 'bg-hitesh-primary text-white shadow-sm'
                : 'text-gray-600 hover:text-hitesh-primary'
            }`}
          >
            Hitesh Conversations
          </button>
          <button
            onClick={() => setSelectedChat('piyush')}
            className={`px-6 py-2 rounded-md font-medium transition-all ${
              selectedChat === 'piyush'
                ? 'bg-piyush-primary text-white shadow-sm'
                : 'text-gray-600 hover:text-piyush-primary'
            }`}
          >
            Piyush Conversations
          </button>
        </div>
      </div>

      {/* Sample Conversations */}
      <div className="grid lg:grid-cols-2 gap-8">
        {sampleConversations[selectedChat].map((conversation) => (
          <div key={conversation.id} className="bg-white rounded-xl shadow-lg border overflow-hidden">
            {/* Conversation Header */}
            <div className={`bg-gradient-to-r ${
              selectedChat === 'hitesh' 
                ? 'from-hitesh-primary to-hitesh-secondary' 
                : 'from-piyush-primary to-piyush-secondary'
            } text-white p-4`}>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">{conversation.title}</h3>
                <div className="flex items-center space-x-2">
                  <Play className="w-4 h-4" />
                  <span className="text-sm opacity-90">Live Demo</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {conversation.messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex items-start space-x-2 max-w-xs lg:max-w-sm">
                    {message.sender !== 'user' && (
                      <div className={`w-8 h-8 ${
                        selectedChat === 'hitesh' ? 'bg-hitesh-primary' : 'bg-piyush-primary'
                      } rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    
                    <div
                      className={`px-4 py-2 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-blue-500 text-white ml-auto'
                          : selectedChat === 'hitesh'
                          ? 'bg-gradient-to-r from-hitesh-primary to-hitesh-secondary text-white'
                          : 'bg-gradient-to-r from-piyush-primary to-piyush-secondary text-white'
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                      <p className="text-xs opacity-75 mt-1">{message.timestamp}</p>
                    </div>

                    {message.sender === 'user' && (
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Conversation Footer */}
            <div className="border-t p-4 bg-gray-50">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{conversation.messages.length} messages</span>
                <button className={`text-${selectedChat === 'hitesh' ? 'hitesh' : 'piyush'}-primary hover:underline font-medium`}>
                  Try this conversation →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Analysis Section */}
      <div className="bg-white rounded-xl shadow-lg border p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Conversation Analysis</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-hitesh-primary mb-4 flex items-center">
              <div className="w-3 h-3 bg-hitesh-primary rounded-full mr-2" />
              Hitesh's Communication Patterns
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-hitesh-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                <div>
                  <strong>Enthusiastic Greetings:</strong> Uses "Hey there!", "Namaste!", and emojis to create energy
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-hitesh-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                <div>
                  <strong>Motivational Tone:</strong> Encourages action with phrases like "Let's build something amazing!"
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-hitesh-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                <div>
                  <strong>Practical Focus:</strong> Always suggests building projects and hands-on learning
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-hitesh-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                <div>
                  <strong>Personal Stories:</strong> Shares experiences and references ChaiCode philosophy
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-piyush-primary mb-4 flex items-center">
              <div className="w-3 h-3 bg-piyush-primary rounded-full mr-2" />
              Piyush's Communication Patterns
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-piyush-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                <div>
                  <strong>Structured Responses:</strong> Uses numbered lists, bullet points, and clear formatting
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-piyush-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                <div>
                  <strong>Code Examples:</strong> Provides practical code snippets with explanations
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-piyush-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                <div>
                  <strong>Technical Depth:</strong> Explains concepts thoroughly with best practices
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-piyush-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                <div>
                  <strong>Follow-up Questions:</strong> Asks clarifying questions to provide better help
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleChats;