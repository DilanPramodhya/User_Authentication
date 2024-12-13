import axios from "axios";
import { create } from "zustand";

const API_URL = "http://localhost:5000/api/auth";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

  signUp: async (email, password, name) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL}/signUp`, {
        email,
        password,
        name,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Error signin up",
        isLoading: false,
      });
      throw error;
    }
  },

  login: async (email, password) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      set({
        isAuthenticated: true,
        user: response.data.user,
        error: null,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Error logging in",
        isLoading: false,
      });
      throw error;
    }
  },
  logout: async () => {
    set({ isLoading: true, error: null });

    try {
      await axios.post(`${API_URL}/logout`);
      set({
        isAuthenticated: false,
        user: null,
        error: null,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: "Error logging out",
        isLoading: false,
      });
      throw error;
    }
  },

  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL}/verifyEmail`, { code });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
      return response.data;
    } catch (error) {
      set({
        error: error.response.data.message || "Error verifying email",
        isLoading: false,
      });
      throw error;
    }
  },

  forgotPassword: async (email) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL}/forgotPassword`, { email });
      set({
        message: response.data.message,
        isLoading: false,
      });
    } catch (error) {
      set({
        isLoading: false,
        error:
          error.response.data.message || "Error sending reset password email",
      });
      throw error;
    }
  },
  resetPassword: async (token, password) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL}/resetPassword/${token}`, {
        password,
      });
      set({
        message: response.data.message,
        isLoading: false,
      });
    } catch (error) {
      set({
        isLoading: false,
        error: error.response.data.message || "Error resetting password",
      });
      throw error;
    }
  },

  checkAuth: async () => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));   - to check the LoadingSpinner
    set({ isCheckingAuth: true, error: null });

    try {
      const response = await axios.get(`${API_URL}/checkAuth`);
      set({
        user: response.data.user,
        isAuthenticated: true,
        isCheckingAuth: false,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: null,
        isCheckingAuth: false,
        isAuthenticated: false,
        isLoading: false,
      });
      throw error;
    }
  },
}));
