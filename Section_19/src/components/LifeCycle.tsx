import "../App.css";

type props = {
  file: string;
  name: string;
  width?: number | string;
  height?: number | string;
};

function LifeCycle({ file, name, width, height }: props) {
  const source = "../assets/" + file;

  return (
    <>
      <h4>{name}</h4>
      <img
        src={new URL(source, import.meta.url).href}
        alt={name}
        width={width}
        height={height}
      />
    </>
  );
}

export default LifeCycle;
