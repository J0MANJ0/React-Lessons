import React, { useState } from 'react'
import { useImmer } from 'use-immer';

const initialProducts = [{
    id: 0,
    name: 'Baklava',
    count: 1,
}, {
    id: 1,
    name: 'Cheese',
    count: 5,
}, {
    id: 2,
    name: 'Spaghetti',
    count: 2,
}];

const Challenges = () => {
    return (
        <div>
            <ShoppingCart1 />
            <ShoppingCart2 />
            <TaskApp />
        </div>
    )
}
// challenge 1: Fill in the handleIncreaseClick logic so that pressing ”+” increases the corresponding number:


function ShoppingCart1() {
    const [products, setProducts] = useState(initialProducts)

    function handleIncreaseClick(productId) {
        const addCount = products.map(product => {
            if (productId === product.id) {
                return {
                    ...product,
                    count: product.count + 1
                }
            }
            return product
        })
        setProducts(addCount)
    }

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name}
                    {" "}
                    (<b>{product.count}</b>)
                    <button onClick={() => handleIncreaseClick(product.id)}>+</button>
                </li>
            ))}
        </ul>
    )
}

// challenge 2: This shopping cart has a working ”+” button, but the ”–” button doesn’t do anything. You need to add an event handler to it so that pressing it decreases the count of the corresponding product. If you press ”–” when the count is 1, the product should automatically get removed from the cart. Make sure it never shows 0.

function ShoppingCart2() {
    const [products, setProducts] = useState(initialProducts)

    function handleIncreaseClick(productId) {
        const addCount = products.map(product => {
            if (productId === product.id) {
                return {
                    ...product,
                    count: product.count + 1
                }
            }
            return product
        })
        setProducts(addCount)
    }

    function handleDecreaseClick(productId) {
        let updateProduct = products.map(product => {
            if (productId === product.id) {
                return {
                    ...product,
                    count: product.count - 1
                }
            }
            return product

        })

        updateProduct = updateProduct.filter(product => product.count > 0)

        setProducts(updateProduct)

        // let nextProducts = products.map(product => {
        //     if (productId === product.id) {
        //         return {
        //             ...product,
        //             count: product.count - 1
        //         }
        //     }
        //     return product
        // })

        // nextProducts = nextProducts.filter(product => product.count > 0)

        // setProducts(nextProducts)
    }

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name}
                    {" "}
                    (<b>{product.count}</b>)
                    <button onClick={() => handleIncreaseClick(product.id)}>+</button>
                    <button onClick={() => handleDecreaseClick(product.id)}>-</button>
                </li>
            ))}
        </ul>
    )
}

// challenge 3: In this example, all of the event handlers in App.js use mutation. As a result, editing and deleting todos doesn’t work. Rewrite handleAddTodo, handleChangeTodo, and handleDeleteTodo to use the non-mutative methods:

let nextId = 3
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];

function TaskApp() {
    // const [todos, setTodos] = useState(initialTodos)
    const [todos, updateTodos] = useImmer(initialTodos)

    function handleAddTodo(title) {
        // todos.push({
        //     id: nextId++,
        //     title: title,
        //     done: false
        // })

        // const addTodo = todos.map(todo => {
        //     return {
        //         ...todo,
        //         id: nextId++,
        //         title: title,
        //         done: false
        //     }
        // })

        // setTodos(addTodo)

        // setTodos([
        //     ...todos,
        //     {
        //         id: nextId++,
        //         title: title,
        //         done: false
        //     }
        // ])

        updateTodos(draft => {
            draft.push({
                id: nextId++,
                title: title,
                done: false
            })
        })
    }

    function handleChangeTodo(nextTodo) {
        // const todo = todos.find(t => t.id === nextTodo.id)
        // todo.title = nextTodo.title;
        // todo.done = nextTodo.done;

        // const changeTodo = todos.map((todo, i) => {
        //     if (todo.id === todo[i]) {
        //         return {
        //             ...todo,
        //             title: nextTodo.title,
        //             done: nextTodo.done
        //         }
        //     }
        //     return todo
        // })

        // setTodos(changeTodo)

        // setTodos(todos.map(t => {
        //     if (t.id === nextTodo.id) {
        //         return nextTodo
        //     }
        //     return t
        // }))

        // updateTodos(draft => {
        //     const todo = draft.find(t => t.id === nextTodo.id)

        //     todo.title = nextTodo.title
        //     todo.done = nextTodo.done
        // })

        updateTodos(todos.map(todo => {
            if (todo.id === nextTodo.id) {
                return nextTodo
            }
            return todo
        }))
    }

    function handleDeleteTodo(todoId) {
        // const index = todos.findIndex(t => t.id === todoId)
        // todos.splice(index, 1)

        // let deleteTodoIndex = todos.findIndex(todo => todo.id === todoId)
        // deleteTodo = todos.splice(deleteTodoIndex, 1)
        // setTodos(deleteTodo)

        // const deleteTodo = todos.filter(todo => todo.id !== todoId)
        // setTodos(deleteTodo)

        // updateTodos(draft => {
        //     const index = draft.findIndex(todo => todo.id === todoId)
        //     draft.splice(index, 1)
        // })

        updateTodos(todos.filter(todo => todo.id !== todoId))

    }

    return (
        <div>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </div>
    )
}

function AddTodo({ onAddTodo }) {
    const [title, setTitle] = useState("")

    return (
        <>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder='Add Todo' />
            <button onClick={() => {
                setTitle("")
                onAddTodo(title)
            }}>Add</button>
        </>
    )

}

function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <Task
                        todo={todo}
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    )
}

function Task({ todo, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false)
    let todoContent;
    if (isEditing) {
        todoContent = (
            <>
                <input
                    type="text"
                    value={todo.title}
                    onChange={e => {
                        onChange({
                            ...todo,
                            title: e.target.value
                        })
                    }}
                />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        )
    } else {
        todoContent = (
            <>
                {todo.title}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        )
    }

    return (
        <label>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={e => {
                    onChange({
                        ...todo,
                        done: e.target.checked
                    })
                }}
            />
            {todoContent}
            <button onClick={() => onDelete(todo.id)}>
                Delete
            </button>
        </label>
    )
}

export default Challenges