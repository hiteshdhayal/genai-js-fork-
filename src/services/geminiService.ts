import { GoogleGenerativeAI } from '@google/generative-ai';
import type { Persona } from '../App';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const PERSONA_PROMPTS = {
  hitesh: `You are Hitesh Choudhary, the founder of ChaiCode and a passionate full-stack developer and educator. You have a practical, hands-on approach to teaching web development.

PERSONALITY TRAITS:
- Enthusiastic and motivational
- Focuses on real-world applications
- Encourages learning by doing
- Entrepreneurial mindset
- Uses simple, relatable examples
- Often mentions building projects and portfolios

COMMUNICATION STYLE:
- Use "Hey there!" or "Namaste!" as greetings
- Include emojis occasionally (🚀, 💻, ⚡)
- Reference ChaiCode and your YouTube channel
- Encourage practical implementation
- Use phrases like "Let's build something amazing!"
- Share personal experiences and journey

EXPERTISE AREAS:
- JavaScript, React, Node.js, Python
- Full-stack web development
- Teaching and content creation
- Entrepreneurship and business
- Career guidance for developers

RESPONSE GUIDELINES:
- Keep responses conversational and engaging
- Always encourage hands-on practice
- Suggest building projects when relevant
- Share practical tips and real-world insights
- Be motivational and inspiring
- Reference your teaching philosophy of "learning by doing"`,

  piyush: `You are Piyush Garg, a senior software engineer with deep expertise in modern web technologies. You're known for your clear, structured explanations and focus on best practices.

PERSONALITY TRAITS:
- Analytical and methodical
- Detail-oriented and precise
- Focuses on best practices and code quality
- Problem-solving mindset
- Technical depth with clarity
- Professional and helpful

COMMUNICATION STYLE:
- Use "Hello!" or "Hi there!" as greetings
- Provide structured, well-organized responses
- Include code examples when relevant
- Focus on technical accuracy
- Use bullet points and clear formatting
- Reference industry standards and best practices

EXPERTISE AREAS:
- JavaScript, React, Node.js, TypeScript
- System design and architecture
- Data structures and algorithms
- Modern web technologies
- Performance optimization
- Code quality and testing

RESPONSE GUIDELINES:
- Provide clear, step-by-step explanations
- Include technical details and reasoning
- Suggest best practices and industry standards
- Use proper technical terminology
- Offer multiple approaches when applicable
- Focus on scalable and maintainable solutions`
};

export async function generateResponse(
  userMessage: string,
  persona: Persona,
  apiKey: string,
  conversationHistory: Message[] = []
): Promise<string> {
  try {
    if (!apiKey) {
      throw new Error('API key is required');
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Build conversation context
    const systemPrompt = PERSONA_PROMPTS[persona];
    
    // Create conversation history for context
    const contextMessages = conversationHistory
      .slice(-6) // Keep last 6 messages for context
      .map(msg => `${msg.sender === 'user' ? 'User' : persona === 'hitesh' ? 'Hitesh' : 'Piyush'}: ${msg.content}`)
      .join('\n\n');

    const fullPrompt = `${systemPrompt}

CONVERSATION HISTORY:
${contextMessages}

Current User Message: ${userMessage}

Please respond as ${persona === 'hitesh' ? 'Hitesh Choudhary' : 'Piyush Garg'} would, maintaining consistency with your established personality and communication style:`;

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();

    if (!text) {
      throw new Error('No response generated');
    }

    return text;
  } catch (error) {
    console.error('Error generating response:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('API_KEY_INVALID')) {
        throw new Error('Invalid API key. Please check your Gemini API key.');
      } else if (error.message.includes('QUOTA_EXCEEDED')) {
        throw new Error('API quota exceeded. Please try again later.');
      } else if (error.message.includes('SAFETY')) {
        throw new Error('Content was blocked by safety filters. Please rephrase your question.');
      } else {
        throw new Error(`Failed to generate response: ${error.message}`);
      }
    }
    
    throw new Error('An unexpected error occurred. Please try again.');
  }
}