import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { LiaUserEditSolid } from "react-icons/lia";
import { db } from "../config/firebase";

const COntactCard = ({ contact }) => {
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
        <LiaUserEditSolid className="cursor-pointer text-zinc-500" />
        <IoMdTrash
          onClick={() => deleteContact(contact.id)}
          className="cursor-pointer text-orange"
        />
      </div>
    </div>
  );
};

export default COntactCard;
