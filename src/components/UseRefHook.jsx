import { useRef } from "react";

export default function UseRefHook() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>If you click it,focus on the box</button>
    </>
  );
}
