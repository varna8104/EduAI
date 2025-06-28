// Backend API configuration and utilities
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';

// Backend API endpoints
export const BACKEND_ENDPOINTS = {
  REGISTER: `${BACKEND_URL}/api/register/`,
  LOGIN: `${BACKEND_URL}/api/login/`,
};

// Backend API utilities
export const backendApiUtils = {
  // Check if backend URL is configured
  isBackendConfigured: (): boolean => {
    return !!BACKEND_URL && BACKEND_URL !== 'http://localhost:8000';
  },

  // Get default headers for backend requests
  getDefaultHeaders: () => {
    return {
      'Content-Type': 'application/json',
    };
  },

  // Register a new user
  register: async (userData: {
    child_name: string;
    child_dob: string;
    child_group?: string;
    parent_name: string;
    parent_dob: string;
    parent_mobile: string;
    password: string;
  }) => {
    try {
      const response = await fetch(BACKEND_ENDPOINTS.REGISTER, {
        method: 'POST',
        headers: backendApiUtils.getDefaultHeaders(),
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      return data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  // Login user
  login: async (credentials: {
    parent_mobile: string;
    password: string;
  }) => {
    try {
      const response = await fetch(BACKEND_ENDPOINTS.LOGIN, {
        method: 'POST',
        headers: backendApiUtils.getDefaultHeaders(),
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  // Handle backend API errors
  handleBackendError: (error: any) => {
    console.error('Backend API Error:', error);
    if (error.message?.includes('fetch')) {
      return 'Unable to connect to the server. Please check your internet connection.';
    }
    if (error.message?.includes('Registration failed') || error.message?.includes('Login failed')) {
      return error.message;
    }
    return 'An error occurred. Please try again.';
  },
};

export default backendApiUtils; 