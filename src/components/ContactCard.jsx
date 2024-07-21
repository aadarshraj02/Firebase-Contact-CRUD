import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { LiaUserEditSolid } from "react-icons/lia";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../hooks/useDisclouse";

const COntactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="my-3 flex justify-between rounded-lg bg-yellow p-3"
      >
        <div className="flex gap-2">
          <HiOutlineUserCircle className="text-4xl text-orange" />
          <div className="">
            <h2 className="font-bold">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-3xl">
          <LiaUserEditSolid
            onClick={onOpen}
            className="cursor-pointer text-zinc-500"
          />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer text-orange"
          />
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default COntactCard;
