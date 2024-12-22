import { createContext, useEffect, useState } from 'react';
import { initialItem } from '../lib/constants';

export const ItemsContext = createContext();

export default function ItemContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem('items')) || initialItem;
  });

  const resume = {
    itemCount: items.length,
    completedItemCount: items.filter((item) => item.packed == true).length,
  };

  const handleAddItem = (newTextItem) => {
    setItems((items) => {
      return [
        ...items,
        {
          ...newTextItem,
          id: new Date().getTime(),
        },
      ];
    });
  };

  const handlePackItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              packed: !item.packed,
            }
          : item
      )
    );
  };

  const handleMarkAllCompleted = () => {
    setItems((items) =>
      items.map((item) => ({
        ...item,
        packed: true,
      }))
    );
  };

  const handleMarkAllIncompleted = () => {
    setItems((items) =>
      items.map((item) => ({
        ...item,
        packed: false,
      }))
    );
  };

  const handleResetToInitial = () => {
    setItems(initialItem);
  };

  const handleRemoveItem = (id) => {
    setItems((items) => {
      return [...items].filter((item) => item.id != id);
    });
  };

  const handleAllRemove = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleAllRemove,
        handleMarkAllCompleted,
        handleMarkAllIncompleted,
        handlePackItem,
        handleRemoveItem,
        handleResetToInitial,
        resume,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
