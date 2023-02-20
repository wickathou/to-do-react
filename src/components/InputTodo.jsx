import {useState} from 'react';

function InputTodo({addTask}) {
  const [text, setText] = useState('')
  const [message, setMessage] = useState('')

  const textUpdate = (e) => {
    setText(e.target.value)
  }

  const createNewItem = (e) => {
    e.preventDefault()
    if (text.trim()) {
      addTask(text)
      setMessage('')
    } else {
      setMessage('Enter your text')
    }
    setText('')
    
  }

  return (
    <>
      <form className="flex justify-between" onSubmit={createNewItem}>
        <input className="pl-2 rounded-sm w-auto text-neutral-800" type="text" placeholder="Add a task" value={text} onChange={textUpdate}/>
        <button className="px-6 pt-2.5 pb-2 rounded-sm bg-indigo-500" type="button">Add</button>
      </form>
      <span className='bg-orange-300 text-neutral-800'>{message}</span>
    </>
  );
}

export default InputTodo;
