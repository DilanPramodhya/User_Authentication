import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Input from "../components/Input";
import { Lock } from "lucide-react";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { toast } from "react-toastify";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isLoading, resetPassword } = useAuthStore();

  const { token } = useParams();
  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    try {
      await resetPassword(token, password);
      toast.success("Password reset successfully");
      setTimeout(() => {
        navigateTo("/login");
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl 
      rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit}>
          <Input
            icon={Lock}
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white 
          font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-500 
          focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
            type="submit"
          >
            {isLoading ? "Resetting ...." : "Set New Password"}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default ResetPassword;
