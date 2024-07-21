import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";

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
      <div className="flex items-center text-3xl gap-3">
        <RiEditCircleLine className="cursor-pointer" />
        <IoMdTrash className="cursor-pointer text-orange" />
      </div>
    </div>
  );
};

export default COntactCard;
