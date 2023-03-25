import ToDoItem from "./ToDoItem";

function ItemList({ itemList, removeCallback, completeTodo }) {
  const renderList = () => {
    return itemList.map((item) => {
      return (
        <ToDoItem
          key={item.id}
          todo={item}
          removeCallback={removeCallback}
          completeTodo={completeTodo}
        />
      );
    });
  };
  return <div className="itemlist">{renderList()}</div>;
}

export default ItemList;
