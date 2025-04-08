import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
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
          onClick={onLogin}
          className="w-full bg-[#081331] text-white py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    );
  };
  