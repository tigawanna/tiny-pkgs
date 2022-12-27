// Generated with util/create-component.js
import React from "react";
import ReactModalWrapper from "./ReactModalWrapper";
import "../index.css";
export default {
  title: "ReactModalWrapper",
};

export const SimpleReactModal = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <div className="w-full h-full bg-slate-700 flex justify-center items-center ">
      <button
        className="p-5 text-lg font-bold bg-red-700 rounded-lg "
        onClick={() => setOpen(true)}
      >
        open
      </button>

      <ReactModalWrapper
        isOpen={open}
        closeModal={() => setOpen(false)}
        child={
          <div className="w-full h-screen bg-purple-700 text-3xl font-bold scroll-bar">
            modal constents
          </div>
        }
      />
    </div>
  );
};
