import React, {useContext} from "react";

import Todo from "./Todo";
import {DashboardContext} from "./Dashboard";

type TodoType = {
    id: number;
    todo: string;
    userId: string;
    completed: boolean;
};

type TodoListProps = {
    onComplete: (value: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ onComplete }) => {
    const list = useContext(DashboardContext);
    console.log("list in todo list", list)
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