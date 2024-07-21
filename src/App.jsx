import { AiFillPlusCircle } from "react-icons/ai";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(()=>{},[])

  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar></Navbar>
      <div className="flex gap-2">
        <div className="relative flex flex-grow items-center justify-end">
          <FiSearch className="absolute mr-2 text-3xl text-white" />
          <input
            type="text"
            className="h-10 flex-grow rounded-md border border-white bg-transparent p-2 pr-10 text-white outline-none"
          />
        </div>
        <AiFillPlusCircle className="cursor-pointer text-5xl text-white" />
      </div>
    </div>
  );
}

export default App;
