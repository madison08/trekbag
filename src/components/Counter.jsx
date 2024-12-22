import { useItemStore } from '../stores/itemStore';

export default function Counter() {
  const items = useItemStore((state) => state.items);

  const resume = {
    completedItemCount: items.filter((item) => item.packed).length,
    itemCount: items.length,
  };

  return (
    <p>
      <b>{resume.completedItemCount}</b>/ {resume.itemCount} items packed
    </p>
  );
}
