import React, { useEffect, useRef, useState } from 'react'
import TodoItem from './TodoItem'


const Todo = () => {

    const [todoItems, setTodoItems] = useState(localStorage.getItem('todos') ? JSON.parse(
        localStorage.getItem('todos')) : [])



    const inputRef = useRef();
    const add = () => {
        const inputText = inputRef.current.value.trim();
        if (inputText === '') {
            return null;
        }
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setTodoItems((prev) => [...prev, newTodo]),
            inputRef.current.value = '';


    }

    const deleteTodo = (id) => {
        setTodoItems((prev) => {
            return prev.filter((todo) => todo.id !== id)
        })
    }

    const toggle = (id) => {
        setTodoItems((prev) => {
            return prev.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isComplete: !todo.isComplete }
                }
                return todo;
            })
        })

    }
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoItems))

    }, [todoItems])




    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-lg'>
            {/* HEADING */}
            <div className='flex items-center mt-7 gap-2'>
                <i class="fa-solid fa-list"></i>
                <h1 className='text-3xl font-semibold'>To-Do-List</h1>
            </div>

            {/* INPUT FIELD */}
            <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type='text' placeholder='Add Todo' />
                <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
            </div>

            {/* todo list */}
            <div>
                {todoItems.map((item, index) => {
                    return <TodoItem key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
                })}

            </div>
        </div>
    )
}

export default Todo