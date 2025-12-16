import ConditionalRendering from "./ConditionalRendering.jsx";

export default function PackageList() {
  return (
    <section>
      <h1>Dally Ride's Packing List</h1>
      <ul>
        <ConditionalRendering name="Space Suit" isPacked={true} />
        <ConditionalRendering name="Tosaka Blade" isPacked={false} />
        <ConditionalRendering name="Iboni Blade" isPacked={true} />
      </ul>
    </section>
  );
}
