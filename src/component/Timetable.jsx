import { useState, createContext, useContext } from "react";
import Calender from "./Calender";
import BookModal from "./Modal/BookModal";

const initialSchedule = [
  //each date
  {
    start: "06:00",
    end: "07:00",
    court: [
      { courtId: 1, booked: true, booker: "pp" },
      { courtId: 2, booked: true, booker: "dd" },
    ],
  },
  {
    start: "07:00",
    end: "08:00",
    court: [
      { courtId: 1, booked: true, booker: "pp" },
      { courtId: 2, booked: true, booker: "dd" },
    ],
  },
  {
    start: "08:00",
    end: "09:00",
    court: [
      { courtId: 1, booked: false, booker: "" },
      { courtId: 2, booked: true, booker: "jam" },
    ],
  },
  {
    start: "09:00",
    end: "10:00",
    court: [
      { courtId: 1, booked: false, booker: "" },
      { courtId: 2, booked: false, booker: "" },
    ],
  },
  {
    start: "10:00",
    end: "11:00",
    court: [
      { courtId: 1, booked: false, booker: "" },
      { courtId: 2, booked: false, booker: "" },
    ],
  },
  {
    start: "11:00",
    end: "12:00",
    court: [
      { courtId: 1, booked: false, booker: "" },
      { courtId: 2, booked: false, booker: "" },
    ],
  },
  {
    start: "12:00",
    end: "13:00",
    court: [
      { courtId: 1, booked: true, booker: "3fam" },
      { courtId: 2, booked: false, booker: "" },
    ],
  },
  {
    start: "13:00",
    end: "14:00",
    court: [
      { courtId: 1, booked: false, booker: "" },
      { courtId: 2, booked: false, booker: "" },
    ],
  },
  {
    start: "14:00",
    end: "15:00",
    court: [
      { courtId: 1, booked: false, booker: "" },
      { courtId: 2, booked: false, booker: "" },
    ],
  },
  {
    start: "15:00",
    end: "16:00",
    court: [
      { courtId: 1, booked: false, booker: "" },
      { courtId: 2, booked: false, booker: "" },
    ],
  },
  {
    start: "16:00",
    end: "17:00",
    court: [
      { courtId: 1, booked: false, booker: "" },
      { courtId: 2, booked: false, booker: "" },
    ],
  },
  {
    start: "17:00",
    end: "18:00",
    court: [
      { courtId: 1, booked: false, booker: "" },
      { courtId: 2, booked: false, booker: "" },
    ],
  },
  {
    start: "18:00",
    end: "19:00",
    court: [
      { courtId: 1, booked: false, booker: "" },
      { courtId: 2, booked: false, booker: "" },
    ],
  },
  {
    start: "19:00",
    end: "20:00",
    court: [
      { courtId: 1, booked: false, booker: "" },
      { courtId: 2, booked: false, booker: "" },
    ],
  },
  {
    start: "20:00",
    end: "21:00",
    court: [
      { courtId: 1, booked: false, booker: "" },
      { courtId: 2, booked: false, booker: "" },
    ],
  },
  {
    start: "21:00",
    end: "22:00",
    court: [
      { courtId: 1, booked: false, booker: "" },
      { courtId: 2, booked: false, booker: "" },
    ],
  },
  {
    start: "22:00",
    end: "23:00",
    court: [
      { courtId: 1, booked: true, booker: "k.na" },
      { courtId: 2, booked: false, booker: "" },
    ],
  },
];
const bookedStyle = "border border-slate-100 bg-gray-200 text-red-400/80";
const availableStyle = "border border-slate-100 bg-lime-400 hover:bg-lime-100";

const CalenderContext = createContext({});
export { CalenderContext };
export default function Timetable() {
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState(initialSchedule);
  const [showModal, setShowmodal] = useState(false);
  const [select, setSelect] = useState({});
  const groupByCourt = (data) => {
    return data.reduce((acc, current) => {
      acc[current.court] = [...(acc[current.court] || []), current];
      return acc;
    }, []);
  };
  const courtsData = groupByCourt(initialSchedule);
  console.log(courtsData);

  const handleOnBook = (start, end, court) => {
    console.log(start, court);
    setSelect({ start: start, end: end, court: court });
    setShowmodal(true);
  };
  const handleClose = () => setShowmodal(false);

  return (
    <CalenderContext.Provider value={{ date: date, setDate: setDate }}>
      <div>
        <div>
          <h1>Time Table COURT</h1>
        </div>
        <div>
          <Calender />
        </div>
        <div>ME DATE: {date}</div>
        <table className="bg-white max-w-6xl w-full text-center mx-auto border border-slate-100">
          <thead>
            <tr className="h-14">
              <th className="bg-lime-400 border border-slate-100">
                Time/Court
              </th>
              <th className="bg-gray-300 border border-slate-100">Court 1</th>
              <th className="bg-gray-300 border border-slate-100">Court 2</th>
            </tr>
          </thead>
          <tbody>
            {slots.map((slot, index) => (
              <tr key={index} className="h-10" id={slot.start}>
                <td className="bg-gray-300 border border-slate-100">
                  {slot.start}-{slot.end}
                </td>
                {slot.court.map((court, i) => (
                  <td className={court.booked ? bookedStyle : availableStyle}>
                    {court.booked ? (
                      court.booker
                    ) : (
                      <div
                        className="w-full h-full cursor-pointer "
                        onClick={() =>
                          handleOnBook(slot.start, slot.end, court.courtId)
                        }
                      >
                        ---
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <BookModal visible={showModal} onclose={handleClose} select={select} />
    </CalenderContext.Provider>
  );
}
