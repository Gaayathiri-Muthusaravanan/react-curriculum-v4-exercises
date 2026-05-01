// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
import { useRef } from 'react';
export default function FillRefFocus() {
  const inputRef = useRef(0);
  function focusInput() {
    inputRef.current.focus();
  }
  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input ref={inputRef} type="text" placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
//I used useRef to get access to the input DOM element and called .focus() on inputRef.current
//  inside the click handler to focus the input when the button is clicked.
