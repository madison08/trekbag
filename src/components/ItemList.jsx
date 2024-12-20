import Select from 'react-select';
import EmptyView from './EmptyView';
import { useMemo, useState } from 'react';

export default function ItemList({ items, onRemoveItem, onPackedItem }) {
  const [sortBy, setSortBy] = useState('default');

  const sortedItems = useMemo(() =>
    [...items].sort(
      (a, b) => {
        if (sortBy == 'packed') {
          return b.packed - a.packed;
        }

        if (sortBy == 'unpacked') {
          return a.packed - b.packed;
        }

        if (sortBy == 'default') {
          return a.packed == b.packed;
        }
        return;
      },
      [items, sortBy]
    )
  );

  const handleRemoveItem = (id) => {
    onRemoveItem(id);
  };

  const handlePackedItem = (id) => {
    onPackedItem(id);
  };

  const sortingOptions = [
    { label: 'sort by default', value: 'default' },
    { label: 'sort by pack', value: 'packed' },
    { label: 'sort by unpack', value: 'unpacked' },
  ];

  return (
    <ul className="item-list">
      {items.length == 0 && <EmptyView />}

      {sortedItems.length > 0 && (
        <section className="sorting">
          <Select
            defaultValue={sortBy}
            options={sortingOptions}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      )}

      {sortedItems.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            handleRemoveItem={handleRemoveItem}
            handlePackedItem={handlePackedItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, handleRemoveItem, handlePackedItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => {
            handlePackedItem(item.id);
          }}
        />
        {item.name}
      </label>
      <button
        onClick={() => {
          handleRemoveItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
