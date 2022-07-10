import React, { useState, useEffect } from 'react'

const getLocalItem = () => {
    let list = localStorage.getItem('lists')
    console.log(list)
    if (list) {
        return JSON.parse(list)
    } else {
        return []
    }
}
export default function Todo() {
    const [text, setText] = useState("add todo item");
    const [task, setTask] = useState(getLocalItem())
    // const [text2, setText2] = useState("hello")

    const onChangeHandler = (e) => {
        // console.log(e)
        setText(e.target.value)
    }
    // const onChangeHandler2 = (e) => {
    //     // console.log(e)
    //     // setText(e.target.value)
    // }
    const submitHandler = (e) => {
        console.log("submitted")
        e.preventDefault()
        setTask([...task, text])
        setText("")
    }
    const removeTask = (a) => {
        console.log("task removed")
        const finalData = task.filter((currentElement, index) => {
            return index !== a
        })
        setTask(finalData)
    }
    const emptyText = () => {
        setText("")
    }
    const resetList = () => {
        console.log("reset--")
        setTask([])
    }
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(task))
    }, [task])
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="classmane mx-5 my-5" >
                    <input type="text" className="id" value={text} onChange={onChangeHandler} onClick={() => emptyText()} />
                    {/* <input type="text" name="" id="" value={text2} onChange={onChangeHandler2} /> */}
                    <button type="submit">Add to list</button>
                    <button type="reset" onClick={() => resetList()}>Reset</button>
                </div>
            </form>
            <div className="container">
                <div className="row">
                    {
                        task.map((value, index) => {
                            return (
                                <>
                                    <div className="col-6 my-2" key={index}>{value}</div>
                                    <div className="col-6 my-2"><button onClick={() => removeTask(index)}>X</button></div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
