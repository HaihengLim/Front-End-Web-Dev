import Item from "./ConditionalRendering.jsx";

export default function PackageList() {
  return (
    <section>
      <h1 className="dusplay-3 bg-success">Dally Ride's Packing List</h1>
      <ul className="list-group">
        <Item name="Space Suit" isPacked={true} />
        <Item name="Tosaka Blade" isPacked={false} />
        <Item name="Iboni Blade" isPacked={true} />
      </ul>
    </section>
  );
}
