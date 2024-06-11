import React from 'react'

const TodoItem = ({ text, id, isComplete, deleteTodo, toggle }) => {
    return (
        <div className='flex items-center my-3 gap-2'>
            <div onClick={() => toggle(id)} className='flex flex-1 items-center cursor-pointer'>
                <div className='text-orange-400'><i class={isComplete ? 'fa-regular fa-circle-check' : ''}></i></div>
                <p className={`text-slate-700 ml-4 text-[17px] ${isComplete ? 'line-through' : ''}`}>{text}</p>
            </div>
            <div onClick={() => { deleteTodo(id) }} className='cursor-pointer'><i class="fa-solid fa-trash"></i></div>
        </div>
    )
}

export default TodoItem