export const ContactItem = ({ name, number, onDelete }) => {
  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};
