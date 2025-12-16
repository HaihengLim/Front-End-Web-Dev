export default function HandleEvent() {
  function HandleClick() {
    alert("You Clicked me");
  }

  return <button onClick={HandleClick}>Click Me</button>;
}
