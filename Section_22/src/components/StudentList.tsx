import { students } from "../data.ts";

export default function StudentList() {
  const studentList = students.map((student) => <li>{student}</li>);

  return <ul>{studentList}</ul>;
}
