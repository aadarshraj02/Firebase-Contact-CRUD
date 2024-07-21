import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";

function App() {
  return (
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar></Navbar>
      <div className="flex ">
        <FiSearch />
        <input
          type="text"
          className="bg-transparent border border-white rounded-md h-10 flex-grow"
        />
      </div>
    </div>
  );
}

export default App;
