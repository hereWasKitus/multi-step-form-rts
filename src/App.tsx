import { Sidebar } from "@/components/Sidebar";
import Steps from "./components/Steps/Steps";

function App() {
  return (
    <div
      id="app"
      className="flex h-full max-h-[600px] w-full max-w-[940px] rounded-lg bg-white p-4 shadow-[0px_25px_40px_-20px] shadow-black/10"
    >
      <Sidebar />
      <Steps />
    </div>
  );
}

export default App;
