import { useItemsContext } from '../contexts/hooks';

export default function Counter() {
  const { resume } = useItemsContext();

  return (
    <p>
      <b>{resume.completedItemCount ?? 0}</b>/ {resume.itemCount ?? 0} items
      packed
    </p>
  );
}
