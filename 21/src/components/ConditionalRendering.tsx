type props = {
  name: string;
  isPacked: boolean;
};

export default function Item({ name, isPacked }: props) {
  let itemContent: string = name;
  itemContent = isPacked ? name + "✅" : name + "❌";

  return <li className="list-group-item">{itemContent}</li>;
}
