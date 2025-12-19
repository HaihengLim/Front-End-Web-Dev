import { RawStudents } from "../data.ts";
import { getGrade } from "../studentList.ts";

const StudentHeader = () => {
  return (
    <thead>
      <th>ID</th>
      <th>Name</th>
      <th>Score</th>
      <th>Grade</th>
    </thead>
  );
};

const StudentList = () => {
  return (
    <tbody>
      {RawStudents.map((s) => {
        const grade = getGrade(s.score);

        return (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.score}</td>
            <td>{grade}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default function StudentTable() {
  return (
    <table>
      <StudentHeader />
      <StudentList />
    </table>
  );
}
