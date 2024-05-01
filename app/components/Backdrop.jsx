const Backdrop = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        z-20
        bg-slate-200
        opacity-50
        fixed
        top-0
        left-0
        h-full
        w-full
      "
    ></div>
  );
};

export default Backdrop;
