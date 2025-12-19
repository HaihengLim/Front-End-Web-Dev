function Num1(a: number) {
  return a;
}

const Num2 = (a: number, b: number) => {
  return a + b;
};

const Num3 = (a: number, b: number) => a * b;

export default function ArrowFunction() {
  return Num1(3) + Num2(56, 75) + Num3(120, 788);
}
