// ============================================
// API Configuration
// ============================================
// Centralized API URL configuration
// Change this URL based on your environment
// ============================================

// Base API URL - IMPORTANT: Update this based on your Laragon setup
// Default: http://localhost/bakend/api
// If your project is in a subfolder: http://localhost/your-folder/bakend/api
export const API_BASE_URL = 'http://localhost/bakend/api';

// API Endpoints
export const API_ENDPOINTS = {
  // Admin endpoints
  ADMIN_LOGIN: `${API_BASE_URL}/admin-login.php`,
  GET_MESSAGES: `${API_BASE_URL}/get-messages.php`,
  DELETE_MESSAGE: `${API_BASE_URL}/delete-message.php`,
  
  // Contact endpoint
  CONTACT: `${API_BASE_URL}/contact.php`,
  NEXT_CONTACT: '/api/contact',
};

// Helper function to make API calls
export const apiCall = async (endpoint, options = {}) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };
  
  // Add Authorization header if token exists
  if (token && options.requireAuth !== false) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }
  
  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };
  
  try {
    const response = await fetch(endpoint, config);
    const data = await response.json();
    
    return {
      ok: response.ok,
      status: response.status,
      data,
    };
  } catch (error) {
    return {
      ok: false,
      status: 500,
      data: {
        status: 'error',
        message: 'Network error. Please check your connection.',
      },
    };
  }
};

// ============================================
// USAGE NOTES:
// ============================================
// 1. All API URLs are now centralized here
// 2. To change API URL, only update API_BASE_URL above
// 3. Use apiCall() helper for consistent error handling
// 
// Example:
// import { API_ENDPOINTS, apiCall } from '@/config/api';
// 
// const result = await apiCall(API_ENDPOINTS.ADMIN_LOGIN, {
//   method: 'POST',
//   requireAuth: false,
//   body: JSON.stringify({ username, password })
// });
// ============================================
