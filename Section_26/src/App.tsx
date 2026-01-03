import ReducerDemo from "./component/ReducerDemo.tsx";
import ContextDemo from "./component/ContextDemo.tsx";

function App() {
  return (
    <>
      <hr className="m-0" />
      <div
        style={{
          backgroundColor: "#e9fce9",
          padding: "8px 0 14px 0",
        }}
      >
        <ContextDemo />
        <hr />
        <ReducerDemo />
      </div>
      <hr className="m-0" />
    </>
  );
}

export default App;
