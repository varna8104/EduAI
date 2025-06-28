// API configuration and utilities
const GROQ_API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY;

// API endpoints
export const API_ENDPOINTS = {
  GROQ_CHAT: 'https://api.groq.com/openai/v1/chat/completions',
};

// API utilities
export const apiUtils = {
  // Check if API key is available
  isGroqApiKeyAvailable: (): boolean => {
    return !!GROQ_API_KEY && GROQ_API_KEY !== 'your_groq_api_key_here';
  },

  // Get Groq API headers
  getGroqHeaders: () => {
    if (!apiUtils.isGroqApiKeyAvailable()) {
      throw new Error('Groq API key is not configured. Please set NEXT_PUBLIC_GROQ_API_KEY in your environment variables.');
    }
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GROQ_API_KEY}`,
    };
  },

  // Handle API errors
  handleApiError: (error: any) => {
    console.error('API Error:', error);
    if (error.message?.includes('API key')) {
      return 'API key is not configured. Please check your environment variables.';
    }
    if (error.status === 404) {
      return 'Service not found. Please check your API configuration.';
    }
    if (error.status >= 500) {
      return 'Server error. Please try again later.';
    }
    return 'An error occurred. Please try again.';
  },
};

export default apiUtils;
