import "./App.css";
import Avatar from "./components/Avatar";
import UseRefHook from "./components/UseRefHook";

export default function App() {
  const Btn = () => {
    alert("Hello");
  };

  return (
    <>
      <h1>Cool Justice</h1>
      <hr />
      <Avatar />
      <h3>2024 by Song</h3>

      <hr />

      <UseRefHook />
    </>
  );
}
