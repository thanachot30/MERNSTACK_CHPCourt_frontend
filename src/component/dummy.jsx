{
  data.map((court, i) => (
    <td>
      {court.slots.map((staus) => (
        <tr>{staus.start === time.start ? staus.booker : "Avalible"}</tr>
      ))}
    </td>
  ));
}
//
<table className="bg-white w-full text-center border border-slate-100">
  <thead>
    <tr className="h-10">
      <th className="bg-lime-400">Time/Court</th>
      <th className="bg-gray-300">Court 1</th>
      <th className="bg-gray-300">Court 2</th>
    </tr>
  </thead>
  <tbody>
    {initialSchedule.length > 0 &&
      initialSchedule.map((time, index) => (
        <tr key={time.start}>
          <td className="bg-gray-300 border border-slate-100">
            {time.start}-{time.end}
          </td>
        </tr>
      ))}
    {data.map((court, i) => (
      <td>
        {court.slots.map((staus) => (
          <tr>{staus.booked ? staus.booker : "Ava"}</tr>
        ))}
      </td>
    ))}
  </tbody>
</table>;
