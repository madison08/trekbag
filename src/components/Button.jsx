export default function Button({ type, children, handleFunction }) {
  return (
    <button
      onClick={handleFunction}
      className={`btn ${type == 'secondary' ? 'btn--secondary' : ''}`}
    >
      {children}
    </button>
  );
}
