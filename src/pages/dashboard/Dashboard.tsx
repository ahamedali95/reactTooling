import React, {ChangeEvent, createContext, useEffect, useMemo, useState} from "react";

import TodoList from "./TodoList";
import DisplayFirstName from "./DisplayFirstName";
import DisplayLastName from "./DisplayLastName";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";


type Todo = {
    id: number;
    todo: string;
    userId: string;
    completed: boolean;
};

type Name =  {
    firstName: string;
    lastName: string;
};

export const DashboardContext = createContext<Todo[]>([]);
export const FirstNameContext = createContext<string>('');
export const CounterContext = createContext<any>({a:'', b: ''});

const months = ["January", "February", "March", "April", "May", "June", "July"];

const Dashboard: React.FC<{}> = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [count, setCount] = useState<number>(0);
    const [a, setA] = useState<string>('January');
    const [b, setB] = useState<string>('February');


    const firstNameMemoized = useMemo(() => {
       return firstName;
    }, [firstName]);

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

    const updateA = () => {
        const random = Math.floor(Math.random() * months.length);
        setA(months[random]);
    }

    const updateB = () => {
        const random = Math.floor(Math.random() * months.length);
        setB(months[random]);
    }

    const text = useMemo(() => {
        return {a, b}
    }, [a, b]);

    // console.log(todos)
    // console.log(filteredTodos)
    // console.log(searchText)

    return (
        <>
            <input
                onChange={(event: ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}
                placeholder="firstname"
                type="text"
                value={firstName}
            />
            <input
                onChange={(event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}
                placeholder="lastname"
                type="text"
                value={lastName}
            />
            <p>{count}</p>
            <button type='button' name='btn' onClick={() => setCount(count + 1)}>Increment counter</button>
            <button type='button' name='btn' onClick={updateA}>Update A</button>
            <button type='button' name='btn' onClick={updateB}>Update B</button>

            <CounterContext.Provider value={text}>
                <Child1 />
                <Child2 />
                <Child3 />
            </CounterContext.Provider>
            {/*<FirstNameContext.Provider value={firstNameMemoized}>*/}
            {/*    <DisplayFirstName />*/}
            {/*    <DisplayLastName lastName={''} />*/}
            {/*</FirstNameContext.Provider>*/}

            {/*<input*/}
            {/*    onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value)}*/}
            {/*    placeholder="search todos"*/}
            {/*    type="text"*/}
            {/*    value={searchText}*/}
            {/*/>*/}
            {/*<br />*/}
            {/*<DashboardContext.Provider value={filteredTodos}>*/}
            {/*    <TodoList onComplete={handleTodoComplete} />*/}
            {/*</DashboardContext.Provider>*/}
        </>
    );
};

export default Dashboard;