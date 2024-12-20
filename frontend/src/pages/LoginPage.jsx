import { motion } from "framer-motion";
import Input from "../components/Input";
import { Loader, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const isLoading = false;

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("User Logged in Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
          Welcome Back
        </h2>
        <form onSubmit={handleLogin}>
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center mb-2">
            <Link
              to={"/forgotPassword"}
              className="text-sm text-blue-300 hover:underline"
            >
              Forgot Password
            </Link>
          </div>

          {/* {error && <p className="text-red-500 font-semibold mb-2">{error}</p>} */}

          <motion.button
            className="mt-5 w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white 
            font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-500 
            focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="size-6 animate-spin mx-auto" />
            ) : (
              "Log In"
            )}
            {/* Log In */}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <p className="text-sm text-gray-400">Don&apos;t have an Account</p>
        <Link to={"/signUp"} className="text-blue-400 hover:underline ml-2">
          Sign Up
        </Link>
      </div>
    </motion.div>
  );
};

export default LoginPage;
