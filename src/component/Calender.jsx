import { useState, useContext } from "react";
import { CalenderContext } from "./Timetable.jsx";

export default function Calender() {
  const contextValue = useContext(CalenderContext);
  const handleChange = (event) => {
    const [year, month, day] = event.target.value.split("-");
    const formattedDate = `${day}-${month}-${year}`;
    contextValue.setDate(formattedDate);
  };

  console.log(contextValue);
  return (
    <div>
      <div className="bg-lime-300 w-fit p-2 rounded-md mb-3 hover:bg-lime-400 ">
        <input
          type="date"
          className="bg-transparent"
          onChange={handleChange}
          // value={selectedDate.toISOString().split("T")[0]}
          // min={new Date().toISOString().split("T")[0]}
          // max={
          //   new Date(new Date().getTime() + 86400000)
          //     .toISOString()
          //     .split("T")[0]
          // }
        />
      </div>
    </div>
  );
}
