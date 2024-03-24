export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
          console.log(item);
        }}
      />
      {/* if item is packed, select css to strike through, otherwise nothing */}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      {/* call the function with callback function. Only when the event happens */}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
