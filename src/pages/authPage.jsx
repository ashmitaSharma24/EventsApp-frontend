import { useState } from "react";
import { LoginForm } from "../components/loginForm";
import { RegisterForm } from "../components/registerForm";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const backgroundImage = "https://rare-gallery.com/thumbs/366887-4k-wallpaper.jpg";
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex px-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Left side text */}
      <div className="w-1/2 flex items-center justify-center text-white p-10">
        <div>
          <h1 className="text-5xl font-bold mb-4">The Campus LineUp</h1>
          <p className="text-lg">
          The ultimate one-stop solution for college events—bringing together 
            <br />
            every fest, hackathon, MUN, webinars , competitions and more in one place.!!!
          </p>
        </div>
      </div>

      {/* Right side form */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center text-[#081331] mb-6">
            {isLogin ? "Login" : "Register"}
          </h2>

          {isLogin ? <LoginForm onLogin={handleLogin} /> : <RegisterForm />}

          <p className="text-center text-sm mt-4">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <button className="text-[#081331] font-medium" onClick={() => setIsLogin(false)}>
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button className="text-[#081331] font-medium" onClick={() => setIsLogin(true)}>
                  Login
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
