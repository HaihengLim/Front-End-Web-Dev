import HandleEvent from "./components/HandleEvent.tsx";
import PackageList from "./components/PackageList.tsx";

type props = {
  message: string;
  caption: string;
};

function App() {
  const AlertButton = ({ message, caption }: props) => {
    return <button onClick={() => alert(message)}>{caption}</button>;
  };

  return (
    <>
      <HandleEvent />
      <AlertButton message="Playing!" caption="Play Movie" />
      <AlertButton message="Uploading...!" caption="upload message" />
      <PackageList />
    </>
  );
}

export default App;
