import React, { useState } from "react";
import axios from "axios";

export default function Member() {
  const [Data, setData] = useState({
    email: "dummy@gmail.com",
    address: "dummy",
  });

  const handleChange = (e) => {
    setData({ ...Data, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8000" + "/api/member/create";
    const data = Data;
    console.log(data);
    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div className="flex flex-col content-center text-center">
      <div className="p-4">
        <span className="text-green-700">Member Registor</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col max-w-2xl mx-auto">
          <input
            className="border my-2 px-3 h-8"
            type="text"
            placeholder="Name"
            id="name"
            onChange={handleChange}
            required
          />
          <input
            className="border my-2 px-3 h-8"
            type="tel"
            placeholder="09xxxxxxxx"
            id="phone"
            pattern="[0-9]{10}"
            onChange={handleChange}
            required
          />
          <span className="flex justify-start text-xs">
            format 0-9 ,10 number
          </span>
          <button className="flex my-2 border w-1/5 justify-center">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
