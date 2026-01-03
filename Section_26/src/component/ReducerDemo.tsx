import { useReducer } from "react";

type State = {
  value: number;
};

type Action = {
  actionName: "increment" | "decrement" | "reset";
};

function counter(count: State, action: Action): State {
  switch (action.actionName) {
    case "increment":
      return { value: count.value + 1 };
    case "decrement":
      return { value: count.value - 1 };
    case "reset":
      return { value: 0 };
    default:
      return count;
  }
}

export default function ReducerDemo() {
  const [count, sendToCounter] = useReducer(counter, { value: 0 });

  return (
    <div style={{ width: "154px", margin: "4px auto" }}>
      <h3 className="text-center">Count: {count.value}</h3>
      <div className="btn-group" style={{ width: "154px", margin: "4px auto" }}>
        <button
          className="btn bg-info-subtle"
          onClick={() => sendToCounter({ actionName: "reset" })}
        >
          Reset
        </button>
        <button
          className="btn bg-info-subtle"
          onClick={() => sendToCounter({ actionName: "decrement" })}
        >
          -
        </button>
        <button
          className="btn bg-info-subtle"
          onClick={() => sendToCounter({ actionName: "increment" })}
        >
          +
        </button>
      </div>
    </div>
  );
}
