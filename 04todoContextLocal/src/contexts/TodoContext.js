import React from "react";
import { useContext } from "react";

export const TodoContext = React.createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ], 
    // todos is a variable/key that takes an array of object with id,title,boolean
    //we just define the things here we want the context to be initially empty but this is the expected structure
    addTodo: (todo) => {},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const useTodo = ()=>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;

