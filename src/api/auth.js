import axios from "axios";

export const login = async (credentials) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/auth/login",
      credentials
    );
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const registerUser = async (userDetails) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/auth/register", // Adjust the endpoint as needed
      userDetails
    );
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};
