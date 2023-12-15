import React, { memo, useEffect, useState } from "react";
import axios from "axios";
export default function BookModal({ visible, onclose, select }) {
  if (!visible) return null;
  const [members, setmembers] = useState([]);
  const handleOnclose = () => {
    onclose();
  };

  const handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    //edit
    handleOnclose();
  };

  const getmember = async () => {
    try {
      const url = "http://localhost:8000";
      try {
        const response = await axios.get(url + "/api/member", {
          headers: {
            "Content-Type": "application/json",
            OATH: "Gupp",
          },
        });
        const data = response.data;
        setmembers(data);
        return;
      } catch (error) {
        console.error("Error:", error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getmember();
  }, []);

  console.log(members);
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
            <div className="flex">
              <div className="border rounded px-2 h-8 w-full">
                <select name="member" id="member" className="w-full">
                  {members.map((member) => (
                    <option
                      key={member.memberId}
                      className=""
                      value={member.memberId}
                    >
                      {member.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* <input
                className="border rounded px-2 h-8 w-1/5"
                type="text"
                placeholder="Name Booker"
              /> */}
            </div>
            <button className="border">Sumit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
