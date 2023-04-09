import React, { useState } from "react"

const Todo = () => {
  type listType = {
    text: string | undefined
  }

  const [todoList, setTodoList] = useState<listType[]>([{text: "texto grande"}])
  const [value, setValue] = useState<string>()

  const handleValueChange = (e: { target: { value: React.SetStateAction<string | undefined> } }): void => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setTodoList([...todoList, {text: value}])
    setValue("")
  }

  const handleDeleteItem = (e: { target: { parentElement: { innerText: string | undefined } } }): void => {
    setTodoList(todoList.filter((item) => item.text !== e.target.parentElement.innerText))
  }

  return (
    <section className="flex flex-col items-center py-4">
      <div style={{width: "90vw"}}>
        <h2 className="text-3xl font-normal">form</h2>
        <div className="flex justify-center py-4">
          <form className=" w-11/12">
            <label htmlFor="text">text </label>
            <input type="text" onChange={handleValueChange} value={value} className=" bg-slate-200 rounded outline-none px-2 py-1"/>
            <div className="mt-4">
              <button type="submit" onClick={handleSubmit} className=" bg-green-600 hover:bg-green-500 text-white px-6 py-1 rounded">submit</button>
            </div>
          </form>
        </div>
      </div>
      <span className=" bg-slate-300 w-11/12" style={{height: "1px"}}></span>
      <div style={{width: "90vw", paddingTop: "16px", display:"flex", flexDirection: "column", alignItems: "center"}}>
        <h2 className="text-3xl font-normal w-full">Todo list</h2>
        <div className="w-11/12 my-4">
          {todoList.map((item, index) => {
            return (
              <article className=" my-2">
                <div className="p-4 w-3/5 rounded bg-slate-200 flex justify-between">
                  <p>{item.text}</p>
                  <i className="fa-solid fa-trash cursor-pointer" onClick={handleDeleteItem}></i>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default Todo