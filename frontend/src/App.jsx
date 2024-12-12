import FloatingShape from "./components/FloatingShape";

function App() {
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
        color="bg-red-500"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        color="bg-yellow-500"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      />
    </div>
  );
}

export default App;
