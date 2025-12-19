export interface studentRecord {
  id: string;
  name: string;
  score: number;
  grade: "A" | "B" | "C" | "D" | "E" | "F";
}

export const getGrade = (score: number): studentRecord["grade"] => {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else if (score >= 50) return "E";
  return "F";
};
