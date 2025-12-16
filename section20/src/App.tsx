import LifeCycle from "./components/LifeCycle.tsx";

function App() {
  return (
    <>
      <h1>App = component + component + component</h1>
      <p>
        React application are built from isolated pieces of UI call Component.
      </p>
      <LifeCycle file="SokMen.png" name="sokmen" width={400} height={400} />
      <LifeCycle file="VeSakha.png" name="VeSakha" width={400} height={400} />
    </>
  );
}

export default App;
