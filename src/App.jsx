import { AiFillPlusCircle } from "react-icons/ai";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/COntactCard";

function App() {
  const [contacts, setContacts] = useState([]);
  const [open, setOpen] = useState(false);



  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapSot = await getDocs(contactsRef);
        const contactLists = contactsSnapSot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.error(error);
      }
    };
    getContacts();
  }, []);

  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar></Navbar>
      <div className="flex gap-2">
        <div className="relative flex flex-grow items-center justify-end">
          <FiSearch className="absolute mr-2 text-3xl text-white" />
          <input
            placeholder="search contact"
            type="text"
            className="h-10 flex-grow rounded-md border border-white bg-transparent p-2 pr-10 text-white outline-none"
          />
        </div>
        <AiFillPlusCircle className="cursor-pointer text-5xl text-white" />
      </div>
      <div>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}

export default App;
