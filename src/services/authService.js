import axios from 'axios';

const BASE = "http://localhost:8081/api/auth";

export const sendOtp = (phone) => {
  return axios.post(`${BASE}/send-otp`, { phone });
};

export const verifyOtp = (phone, otp) => {
  return axios.post(`${BASE}/verify-otp`, { phone, otp });
};

export const registerUser = (userData) => {
  return axios.post(`${BASE}/register`, userData);
};
