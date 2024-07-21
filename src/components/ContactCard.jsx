import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { LiaUserEditSolid } from "react-icons/lia";

const COntactCard = ({ contact }) => {
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
        <IoMdTrash className="cursor-pointer text-orange" />
      </div>
    </div>
  );
};

export default COntactCard;
