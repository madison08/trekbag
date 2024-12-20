import { useRef, useState } from 'react';
import Button from './Button';

export default function AddItemForm({ onAddItem }) {
  const [text, setText] = useState('');
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("you can't add empty text");
      inputRef.current.focus();
      return;
    }

    const newItem = {
      name: text,
      packed: false,
    };

    onAddItem(newItem);
    setText('');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form ref={inputRef} onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input value={text} onChange={handleChange} autoFocus />
      <Button>Add to list</Button>
    </form>
  );
}
