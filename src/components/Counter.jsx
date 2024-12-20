export default function Counter({ resume }) {
  return (
    <p>
      <b>{resume.completedItemCount}</b>/ {resume.itemCount} items packed
    </p>
  );
}
