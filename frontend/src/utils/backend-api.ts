// Backend API configuration and utilities
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';

// Backend API endpoints
export const BACKEND_ENDPOINTS = {
  REGISTER: `${BACKEND_URL}/api/register/`,
  LOGIN: `${BACKEND_URL}/api/login/`,
};

// Mock data for testing when backend is not available
const MOCK_USERS = new Map();

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
      // Try real backend first
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
      console.warn('Backend not available, using mock registration');
      
      // Mock registration for testing
      const mockUserId = Date.now();
      MOCK_USERS.set(userData.parent_mobile, {
        id: mockUserId,
        parent_name: userData.parent_name,
        password: userData.password, // In real app, this would be hashed
        children: [{
          id: 1,
          name: userData.child_name,
          gender: 'male' // Default for mock
        }]
      });

      return {
        success: true,
        message: 'Registration successful (mock mode)',
        user_id: mockUserId
      };
    }
  },

  // Login user
  login: async (credentials: {
    parent_mobile: string;
    password: string;
  }) => {
    try {
      // Try real backend first
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
      console.warn('Backend not available, using mock login');
      
      // Mock login for testing
      const user = MOCK_USERS.get(credentials.parent_mobile);
      if (user && user.password === credentials.password) {
        return {
          success: true,
          children: user.children,
          parent_name: user.parent_name
        };
      } else {
        throw new Error('Invalid credentials');
      }
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