import { AiFillPlusCircle } from "react-icons/ai";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";

function App() {
  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar></Navbar>
      <div>
        <div className="relative flex items-center justify-end">
          <FiSearch className="absolute mr-2 text-3xl text-white" />
          <input
            type="text"
            className="h-10 flex-grow rounded-md border border-white bg-transparent p-2 pr-10 text-white outline-none"
          />
        </div>
        <div>
          <AiFillPlusCircle />
        </div>
      </div>
    </div>
  );
}

export default App;
