import { Trash } from "lucide-react";

type Priority = "Urgente" | "Moyenne" | "Basse";

type Todo = {
  id: number;
  text: string;
  priority: Priority;
};

type Props = {
  todo: Todo;
  onDelete: () => void;
  isSelected : boolean;
  onToggleSelect: (id:number) => void;
};
const TodoItem = ({ todo, isSelected, onToggleSelect, onDelete}: Props) => {
  return (
    <li className="p-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            aria-label={`Marquer "${todo.text}" comme terminé`} checked={isSelected}
            onChange={() => onToggleSelect(todo.id)}
          />
          <span className="text-md font-bold">
            <span>{todo.text}</span>
            <span
              className={`badge badge-sm badge-soft ${
                todo.priority === "Urgente"
                  ? "badge-error"
                  : todo.priority === "Moyenne"
                  ? "badge-warning"
                  : "badge-success"
              }`}
            >
              {todo.priority}
            </span>
          </span>
        </div>
        <button onClick={onDelete} className="btn btn-sm btn-error btn-soft" aria-label={`Supprimer "${todo.text}"`}>
          <Trash className="w-4 h-4" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
