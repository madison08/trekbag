import { useRef, useState } from 'react';
import Button from './Button';
import { useItemStore } from '../stores/itemStore';

export default function AddItemForm() {
  const onAddItem = useItemStore((state) => state.addItem);

  const [text, setText] = useState('');
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("you can't add empty text");
      inputRef.current.focus();
      return;
    }

    onAddItem(text);
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
