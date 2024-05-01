const Item = ({ children, onClick, value }) => {
  return (
    <div
    value={value}
      onClick={onClick}
      className="
      rounded-xl
      border-2
            px-4
            py-3
            hover:bg-neutral-100
            transition
        "
    >
      {children}
    </div>
  );
};

export default Item;
