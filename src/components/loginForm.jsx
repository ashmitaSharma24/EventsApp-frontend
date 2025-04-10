import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const backendUrl = "/api/auth/login";

  const handleLogin = async () => {
    console.log("Logging in with:", { email, password });

    try {
      const response = await axios.post(backendUrl, {
        email,
        password,
      });

      console.log("Login success:", response.data);

      // ✅ Save token in localStorage
      localStorage.setItem("token", response.data.token);

      // ✅ Navigate to home/dashboard page
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <form>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-4 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="button"
        onClick={handleLogin}
        className="w-full bg-[#081331] text-white py-2 px-4 rounded"
      >
        Login
      </button>
    </form>
  );
};
