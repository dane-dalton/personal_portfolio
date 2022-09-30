import React, { useState, useRef, useEffect } from 'react'
import { Header } from './common'
import TodoList from './TodoList'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  const usedIds = []

  //This will use this effect ONCE, given the empty array
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]) //updates when the todos array changes

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      let newId = randomId()
      while (usedIds.includes(newId)) {
        newId = randomId()
      }
      usedIds.push(newId)
      return [...prevTodos, { id: newId, name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  function randomId() {
    return Math.floor(Math.random() * 1000000)
  }

  function handleClearTodos(e) {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <Header />
      <div className="flex justify-center content-center">
        <div className="flex-column content-center">
          <TodoList todos={todos} toggleTodo={toggleTodo} />
          <input ref={todoNameRef} type="text" />
          <button onClick={handleAddTodo}>Add Todo</button>
          <button onClick={handleClearTodos}>Clear Todo</button>
          <div>{todos.filter(todo => !todo.complete).length} left to do</div>
        </div>
      </div>
    </>
  )
}

export default App