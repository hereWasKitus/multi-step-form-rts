import { Sidebar } from "@/components/Sidebar";
import { Steps } from "./components/Steps";
import clsx from "clsx";

function App() {
  return (
    <div
      id="app"
      className={clsx([
        "flex h-full max-h-[600px] w-full max-w-[940px] rounded-lg bg-white p-4 shadow-[0px_25px_40px_-20px] shadow-black/10",
        "md:max-h-none md:flex-col md:bg-transparent md:p-0",
      ])}
    >
      <Sidebar />
      <Steps />
    </div>
  );
}

export default App;
