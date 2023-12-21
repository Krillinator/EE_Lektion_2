"use client"
import { ChangeEvent, FormEvent, useState } from "react"

interface Student {
  name: string
  age: number
  grades: string[]
}

export default function Home() {
  const [student, setStudent] = useState<Student>({
    name: "",
    age: 0,
    grades: [],
  })
  const [tempName, setTempName] = useState("")

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault()

    setStudent({ ...student, name: tempName })
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTempName(event.target.value)
  }

  return (
    <>
      <div className="h-screen flex flex-col">
        <header className="bg-slate-800">
          <nav className="bg-slate-700 p-4">
            <div>
              <p>Navigation</p>
            </div>
          </nav>
        </header>

        <div className="flex justify-center p-4">
          <form onSubmit={handleOnSubmit}>
            <input
              className="p-2"
              onChange={handleOnChange}
              value={tempName}
              type="text"
              placeholder="Student name..."
            />
            <button type="submit" className="bg-blue-500 p-2 ml-4">
              Submit
            </button>
          </form>
          <p>{student.name}</p>
        </div>

        <main className=" bg-blue-600 flex justify-evenly grow ">
          <div className="flex flex-col space-y-4 my-4 items-center bg-blue-500">
            <p>Item #1</p>
            <p>Item #2</p>
            <p>Item #3</p>
          </div>
          <div className="flex flex-col space-y-4 my-4 items-center bg-orange-700">
            <p>Item #1</p>
            <p>Item #2</p>
            <p>Item #3</p>
          </div>
        </main>

        <footer className="bg-orange-900 p-4">
          <div>
            <p>Footer</p>
          </div>
        </footer>
      </div>
    </>
  )
}
