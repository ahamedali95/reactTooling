import React, { ChangeEvent, useEffect, useMemo, useState } from "react";

import TodoList from "../components/TodoList";

type Todo = {
    id: number;
    todo: string;
    userId: string;
    completed: boolean;
};
const Dashboard: React.FC<{}> = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);
    const fetchTodos = async () => {
        const response = await fetch("https://dummyjson.com/todos");
        const data = await response.json();
        setTodos(data.todos);
    };

    useEffect(() => {
        fetchTodos()
    }, []);

    const filteredTodos = useMemo(() => {
        if (searchText) {
            return todos.filter((todo: Todo) => todo.todo.toLowerCase().includes(searchText.toLowerCase()));
        }

        return todos;
    }, [searchText, todos]);

    const handleTodoComplete = (id: number) => {
        const newTodos = todos.map((todo: Todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }

            return todo;
        });

        setTodos(newTodos);
    };

    console.log(todos)
    console.log(filteredTodos)
    console.log(searchText)

    return (
        <>
            <input
                onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value)}
                placeholder="search todos"
                type="text"
                value={searchText}
            />
            <br />
            <TodoList
                list={filteredTodos}
                onComplete={handleTodoComplete}
            />
        </>
    );
};

export default Dashboard;