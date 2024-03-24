export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="footer">Start adding some items to your packing list 🚀</p>
    );

  // derived state. Creating variables out of an existing state
  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything ready to go! 🛩"
          : `💼 You have ${numItems} items on your list, and you already packed 
          ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
