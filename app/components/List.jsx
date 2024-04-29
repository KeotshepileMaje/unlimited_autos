const List = ({ children, icon: Icon }) => {
  return (
    <div className="flex p-2 gap-2">
      {children}
    </div>
  );
};
 
export default List;