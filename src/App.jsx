import Home from "./pages/Home";
import DevBackground from "./components/DevBackground";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#05070d] text-white">
      <DevBackground />
      <div className="relative z-10">
        <Home />
      </div>
    </div>
  );
}

export default App;