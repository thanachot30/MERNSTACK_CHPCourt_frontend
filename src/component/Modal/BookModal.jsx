import React from "react";

export default function BookModal({ visible, onclose, select }) {
  if (!visible) return null;
  const handleOnclose = () => {
    onclose();
  };

  const handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    //edit
    handleOnclose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-2 rounded flex flex-col">
        <div className="text-right">
          <button
            onClick={handleOnclose}
            className="hover:bg-slate-200 h-5 w-5"
          >
            X
          </button>
        </div>
        <div>
          <span className="text-blue-700">Booking Cell</span>
          <br />
          <span>
            Court: {select.court} @{select.start}-{select.end}
          </span>
        </div>
        <div>
          <form className="flex flex-col gap-2 " onSubmit={handleSubmit}>
            <input
              className="border rounded px-5 h-8"
              type="text"
              placeholder="Name Booker"
            />
            <input
              type="submit"
              className="border rounded hover:bg-slate-200"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
