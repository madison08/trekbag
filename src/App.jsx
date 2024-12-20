import { useEffect, useState } from 'react';
import BackgroundHeading from './components/BackgroundHeading';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemList from './components/ItemList';
import SideBar from './components/SideBar';
import { initialItem } from './lib/constants';

function App() {
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
    <>
      <BackgroundHeading />

      <main>
        <Header resume={resume} />
        <ItemList
          items={items}
          onRemoveItem={handleRemoveItem}
          onPackedItem={handlePackItem}
        />
        <SideBar
          handleAddItem={handleAddItem}
          handleAllRemove={handleAllRemove}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllCompleted={handleMarkAllCompleted}
          handleMarkAllIncompleted={handleMarkAllIncompleted}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
