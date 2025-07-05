import { OpenCloseLogic } from "./openMenuLogic";

const PhoneMenuBtn = () => {
  return (
    <div className="visible sm:hidden absolute top-10 left-2">
      <button
        className="flex flex-col gap-1 cursor-pointer"
        onClick={OpenCloseLogic}
      >
        <span className="w-6 h-1 bg-red-600 block"></span>
        <span className="w-6 h-1 bg-red-600 block"></span>
        <span className="w-6 h-1 bg-red-600 block"></span>
      </button>
    </div>
  );
};

export default PhoneMenuBtn;
