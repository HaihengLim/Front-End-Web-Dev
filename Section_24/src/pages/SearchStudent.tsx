import { useState } from "react";

const students = [
  { studentId: "S001", Name: "Kamado Tanjiro", Average: 85.76, Grade: "B" },
  { studentId: "S002", Name: "Kamado Nezuko", Average: 91.23, Grade: "A" },
  { studentId: "S003", Name: "Senju Tsunade", Average: 92.0, Grade: "A" },
  { studentId: "S004", Name: "Senju Tobirama", Average: 90.01, Grade: "A" },
  { studentId: "S005", Name: "Madara Uchiha", Average: 85.89, Grade: "B" },
  { studentId: "S006", Name: "Senju Hashirama", Average: 95.89, Grade: "A" },
  { studentId: "S007", Name: "Minato Namikaze", Average: 99.99, Grade: "A" },
  { studentId: "S008", Name: "Hinata Hyuga", Average: 92.33, Grade: "A" },
  { studentId: "S009", Name: "Inosuke Hashibira", Average: 50.01, Grade: "E" },
  { studentId: "S010", Name: "Zenitsu Agatsuma", Average: 65.89, Grade: "D" },
  { studentId: "S011", Name: "Kakashi Hatakae", Average: 98.89, Grade: "A" },
  { studentId: "S012", Name: "Uchiha Itachi", Average: 97.29, Grade: "A" },
  { studentId: "S013", Name: "Uchiha Sasuke", Average: 85.49, Grade: "B" },
  { studentId: "S014", Name: "Naruto Uzumaki", Average: 72.71, Grade: "C" },
];

export default function SearchStudent() {
  const [data, setData] = useState("");

  const d = data.trim().toLocaleLowerCase();

  const results = students.filter(
    (student) =>
      student.studentId.toLocaleLowerCase().includes(d) ||
      student.Name.toLocaleLowerCase().includes(d) ||
      student.Average.toString().toLocaleLowerCase().includes(d) ||
      student.Grade.toLocaleLowerCase().includes(d)
  );

  const rows = results.map((result) => (
    <tr key={result.studentId}>
      <td>{result.studentId}</td>
      <td>{result.Name}</td>
      <td>{result.Average}</td>
      <td>{result.Grade}</td>
    </tr>
  ));

  return (
    <form action="" className="w-50 mx-auto">
      <fieldset className="d-flex align-items-center ms-3">
        <div
          className="d-inline-block"
          style={{ fontWeight: "bolder", fontSize: "1.6rem" }}
        >
          Search
        </div>
        {/* <label htmlFor="" className="px-1">
          ID | Name | Average | Grade
        </label> */}
        <input
          type="text"
          name=""
          className="flex-grow-1 rounded ps-1"
          onChange={(event) => setData(event.target.value)}
          placeholder="Search"
        />
      </fieldset>

      <table className="ms-3 table table-light table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Average</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </form>
  );
}
