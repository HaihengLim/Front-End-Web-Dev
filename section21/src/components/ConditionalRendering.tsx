type props = {
  name: string;
  isPacked: boolean;
};

export default function ConditionalRendering({ name, isPacked }: props) {
  let itemContent: string = name;

  itemContent = isPacked ? name + "✅" : name + "❌";

  return <li>{itemContent}</li>;
}
