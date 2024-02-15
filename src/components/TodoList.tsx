import React from "react";

import Todo from "./Todo";

type TodoType = {
    id: number;
    todo: string;
    userId: string;
    completed: boolean;
};

type TodoListProps = {
    list: TodoType[],
    onComplete: (value: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ list, onComplete }) => {
    return (
        <ol>
            {
                list.map((todo: TodoType): React.ReactElement => {
                    return (
                        <Todo
                            key={todo.id}
                            onComplete={onComplete}
                            value={todo}
                        />
                    )
                })
            }
        </ol>
    );
};

export default TodoList;