import React from "react";

type TodoType = {
  id: number;
  todo: string;
  userId: string;
  completed: boolean;
};

type TodoProps = {
    value: TodoType;
    onComplete: (value: number) => void;
};

const Todo: React.FC<TodoProps> = ({ value, onComplete }) => {
    return (
        <li>
            <input
                checked={value.completed}
                name="todo"
                onChange={() => onComplete(value.id)}
                type="checkbox"
            />
            {value.todo}
        </li>
    );
};

export default Todo;