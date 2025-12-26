import { useState } from "react";

export default function UseStateVariable() {
  const [data, setData] = useState("");

  return (
    <form className="w-50">
      <fieldset className="d-flex align-items-center ms-3">
        <div
          className="d-inline-block"
          style={{ fontWidth: "bold", fontSize: "1.6rem" }}
        >
          Search
        </div>
        <label htmlFor="" className="px-1">
          {" "}
          ID | Name | Average | Grade
        </label>
        <input
          type="text"
          name=""
          className="flex-grow-1 rounded ps-1"
          placeholder="​បញ្ចូល ID Name Average និង Grade"
          onChange={(event) => setData(event.target.value)}
        />
      </fieldset>
      <h3>{data}</h3>
    </form>
  );
}
