import { Route, Routes } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import EmailVerification from "./pages/EmailVerification";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";

function App() {
  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log("Is Authenticated: ", isAuthenticated);
  console.log("User: ", user);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-500 flex items-center justify-center relative overflow-hidden">
      <FloatingShape
        color="bg-blue-500"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-black"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        color="bg-white"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      />

      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/logIn" element={<LoginPage />} />
        <Route path="/verifyEmail" element={<EmailVerification />} />
      </Routes>
      <ToastContainer position="top-right" theme="dark" />
    </div>
  );
}

export default App;
