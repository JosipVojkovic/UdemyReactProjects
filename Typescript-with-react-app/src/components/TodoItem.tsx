import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  id: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
